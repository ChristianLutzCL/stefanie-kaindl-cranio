'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import './review.css';

/**
 * Rückmeldungs-Ebene für die Review-Instanz.
 *
 * Läuft NUR, wenn der Build `NEXT_PUBLIC_REVIEW=1` sieht (die Review-Instanz
 * bekommt das über .env.local; der DigitalOcean-Build aus main sieht diese
 * Datei nie). Dann kann man jedes Element der Seite direkt kommentieren:
 *
 *   · Zeiger über ein Element → gestrichelter Umriss + ✎-Knopf
 *   · ✎ klicken → Kommentar schreiben (Ziel wird als DOM-Pfad festgehalten)
 *   · auf Touch-Geräten: „Rückmeldungen“ unten rechts schaltet den Auswahlmodus
 *   · „Liste“ zeigt alles auf dieser Seite, mit Erledigt/Löschen
 *
 * Gespeichert wird über einen kleinen Dienst auf dem Server; das Ziel ist
 * rueckmeldung.hub.chrislutz.me. Kommentare, die gerade nicht gesendet werden
 * können, bleiben in localStorage („nicht gesendet“) und gehen später raus.
 */

const API = process.env.NEXT_PUBLIC_REVIEW_API ?? '';
const OVERVIEW = API || '/';

type ReviewComment = {
  id: number;
  created_at: string;
  page: string;
  section: string | null;
  selector: string | null;
  tag: string | null;
  excerpt: string | null;
  comment: string;
  author: string;
  status: 'open' | 'done';
};

type Target = {
  selector: string;
  tag: string;
  excerpt: string;
  section: string;
};

type Rect = { top: number; left: number; width: number; height: number };

const STORE = {
  author: 'rv.author',
  mine: 'rv.mine',
  queue: 'rv.queue',
  hint: 'rv.hint',
  enabled: 'rv.enabled',
};

/** Schalter in der Adresse: `?rv=1` ein, `?rv=0` aus. */
const PARAM = 'rv';

function paramSwitch(): boolean | null {
  const value = new URLSearchParams(window.location.search).get(PARAM);
  if (value === null) return null;
  return value !== '0' && value.toLowerCase() !== 'false';
}

/* --------------------------------------------------------------- Werkzeuge */

/** Nächstliegender Abschnitt mit data-review — der Anker für die Gruppierung. */
function sectionOf(el: Element | null): string {
  const host = el?.closest('[data-review]');
  return host?.getAttribute('data-review') || '';
}

/** Stabiler DOM-Pfad (nth-child-Kette ab body) — findet das Element neu. */
function domPath(el: Element): string {
  const parts: string[] = [];
  let node: Element | null = el;
  while (node && node.nodeType === 1 && node !== document.body) {
    const parent: Element | null = node.parentElement;
    if (!parent) break;
    let index = 1;
    let sibling: Element | null = node;
    while (sibling.previousElementSibling) {
      sibling = sibling.previousElementSibling;
      index += 1;
    }
    parts.unshift(`${node.tagName.toLowerCase()}:nth-child(${index})`);
    node = parent;
  }
  return ['body', ...parts].join(' > ');
}

function findByPath(selector: string | null): Element | null {
  if (!selector) return null;
  try {
    return document.querySelector(selector);
  } catch {
    return null;
  }
}

/** Kurzbeschreibung des Elements — für Pins, Liste und Server-Übersicht. */
function describe(el: Element): { tag: string; excerpt: string } {
  const tag = el.tagName.toLowerCase();
  const raw =
    el.getAttribute('alt') ||
    el.getAttribute('aria-label') ||
    (el as HTMLElement).innerText ||
    el.textContent ||
    '';
  const excerpt = raw.replace(/\s+/g, ' ').trim().slice(0, 140);
  const kind = tag === 'img' ? 'img' : tag;
  const cls = (el.getAttribute('class') || '').split(/\s+/).filter(Boolean).slice(0, 2).join('.');
  return {
    tag: kind + (cls ? `.${cls}` : ''),
    excerpt: excerpt || (tag === 'img' ? '(Bild ohne Text)' : '(ohne Text)'),
  };
}

function rectOf(el: Element): Rect {
  const r = el.getBoundingClientRect();
  return { top: r.top, left: r.left, width: r.width, height: r.height };
}

/** Sehr kleine Ziele (einzelne Wörter) auf eine sinnvolle Zeile heben. */
function usableTarget(el: Element): Element {
  let node: Element = el;
  let depth = 0;
  while (depth < 4 && node.parentElement && node !== document.body) {
    const r = node.getBoundingClientRect();
    if (r.height >= 22 && r.width >= 40) break;
    node = node.parentElement;
    depth += 1;
  }
  return node;
}

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function save(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* Speicher voll oder gesperrt — die Ebene darf die Seite nie stören. */
  }
}

function timeAgo(iso: string) {
  const then = new Date(iso).getTime();
  if (!then) return '';
  const minutes = Math.round((Date.now() - then) / 60000);
  if (minutes < 1) return 'gerade';
  if (minutes < 60) return `vor ${minutes} Min`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `vor ${hours} Std`;
  const days = Math.round(hours / 24);
  return days === 1 ? 'gestern' : `vor ${days} Tagen`;
}

async function post(path: string, body: unknown, method = 'POST') {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

/* -------------------------------------------------------------- Komponente */

export default function ReviewLayer() {
  const [comments, setComments] = React.useState<ReviewComment[]>([]);
  const [author, setAuthor] = React.useState('');
  const [picker, setPicker] = React.useState(false);
  const [hover, setHover] = React.useState<{ rect: Rect; target: Target } | null>(null);
  const [target, setTarget] = React.useState<Target | null>(null);
  const [draft, setDraft] = React.useState('');
  const [saving, setSaving] = React.useState(false);
  const [drawer, setDrawer] = React.useState(false);
  const [active, setActive] = React.useState<number | null>(null);
  const [toast, setToast] = React.useState('');
  const [tick, setTick] = React.useState(0);
  /** Gesamtschalter der Ebene. Aus = die Seite sieht aus wie die Live-Seite. */
  const [enabled, setEnabled] = React.useState(false);
  const hoverEl = React.useRef<Element | null>(null);
  const boxRef = React.useRef<HTMLDivElement | null>(null);
  const forceHover = React.useRef(false);

  /* Die Seite kommt aus dem Router, nicht aus window.location: bei einem Klick
     auf einen internen Link wechselt nur der Client die Seite, `location`
     bleibt bis zum nächsten harten Aufruf stehen — Kommentare wären dann der
     vorherigen Seite zugeordnet. */
  const pathname = usePathname() || '/';

  const say = React.useCallback((message: string) => {
    setToast(message);
    window.setTimeout(() => setToast((current) => (current === message ? '' : current)), 3200);
  }, []);

  /* Kommentare laden + Warteschlange nachsenden */
  const flush = React.useCallback(async () => {
    const queue = load<unknown[]>(STORE.queue, []);
    if (!queue.length) return;
    const rest: unknown[] = [];
    for (const item of queue) {
      try {
        const data = await post('/api/comments', item);
        setComments((current) => [...current, data.comment]);
      } catch {
        rest.push(item);
      }
    }
    save(STORE.queue, rest);
    if (queue.length && !rest.length) say('Gespeicherte Rückmeldungen sind jetzt übertragen.');
  }, [say]);

  const loadComments = React.useCallback(async () => {
    try {
      const res = await fetch(`${API}/api/comments?page=${encodeURIComponent(pathname)}`);
      const data = await res.json();
      setComments(data.comments ?? []);
    } catch {
      /* offline oder Dienst nicht erreichbar — die Pins fehlen dann nur. */
    }
  }, [pathname]);

  /* Gesamtschalter lesen: Adresse schlägt Speicher, Standard ist „an“.
     `?rv=1` / `?rv=0` wirken auf jeder Seite und werden danach aus der Adresse
     entfernt, damit die URL sauber bleibt (und teilbar ist). */
  React.useEffect(() => {
    const wanted = paramSwitch();
    const stored = load<boolean | null>(STORE.enabled, null);
    const on = wanted ?? stored ?? true;
    setEnabled(on);
    if (wanted !== null) {
      save(STORE.enabled, wanted);
      const url = new URL(window.location.href);
      url.searchParams.delete(PARAM);
      window.history.replaceState(null, '', url.pathname + url.search + url.hash);
    }
  }, []);

  React.useEffect(() => {
    if (!enabled) return;
    setAuthor(load<string>(STORE.author, ''));
    flush();
    window.addEventListener('online', flush);

    const first = localStorage.getItem(STORE.hint);
    if (!first) {
      save(STORE.hint, true);
      window.setTimeout(() => {
        say('Fahre über eine Stelle und klicke ✎ — oder unten rechts „Rückmeldung“.');
      }, 1200);
    }
    return () => window.removeEventListener('online', flush);
  }, [enabled, flush, say]);

  /* Kommentare der jeweils aktuellen Seite — auch nach einem Seitenwechsel im
     Client, sonst hängen die Pins an der vorherigen Seite. */
  React.useEffect(() => {
    if (!enabled) return;
    loadComments();
  }, [enabled, loadComments]);

  /* Pin-Positionen bei Scroll/Resize nachführen */
  React.useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const bump = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setTick((n) => n + 1);
      });
    };
    window.addEventListener('scroll', bump, { passive: true });
    window.addEventListener('resize', bump);
    return () => {
      window.removeEventListener('scroll', bump);
      window.removeEventListener('resize', bump);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [enabled]);

  /* Auswahl: Zeiger folgen (Desktop) oder antippen (Touch) */
  React.useEffect(() => {
    if (!enabled) return;
    const isOwn = (el: Element | null) => !!el?.closest('[data-review-ui]');

    const onMove = (event: MouseEvent) => {
      if (target) {
        hoverEl.current = null;
        setHover(null);
        return;
      }
      const over = event.target as Element;
      if (isOwn(over)) {
        // Über dem ✎-Knopf und den Pins muss der Umriss stehen bleiben — sonst
        // verschwindet der Knopf unter dem Zeiger, bevor er geklickt wird.
        if (over.closest('.rv-plus, .rv-pin, .rv-box')) return;
        hoverEl.current = null;
        setHover(null);
        return;
      }
      const el = usableTarget(event.target as Element);
      if (!el || el === document.body || el === document.documentElement) {
        hoverEl.current = null;
        setHover(null);
        return;
      }
      hoverEl.current = el;
      forceHover.current = true;
      setHover({ rect: rectOf(el), target: null as unknown as Target });
    };

    const onLeave = (event: MouseEvent) => {
      // `mouseleave` blubbert nicht, erreicht aber über die Capture-Phase auch
      // das document — jedes Verlassen eines Kindelements (z. B. der Überschrift
      // auf dem Weg zum ✎-Knopf) würde den Umriss löschen. Nur das Verlassen des
      // Fensters zählt: relatedTarget ist dann null.
      if (target || event.relatedTarget) return;
      hoverEl.current = null;
      setHover(null);
    };

    const onClick = (event: MouseEvent) => {
      const el = event.target as Element;
      if (isOwn(el)) return;
      if (!picker) return;
      event.preventDefault();
      event.stopPropagation();
      const node = usableTarget(el);
      if (!node || node === document.body || node === document.documentElement) return;
      select(node);
      setPicker(false);
    };

    document.addEventListener('mousemove', onMove, true);
    document.addEventListener('mouseleave', onLeave, true);
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('mousemove', onMove, true);
      document.removeEventListener('mouseleave', onLeave, true);
      document.removeEventListener('click', onClick, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, picker, target]);

  /* Umriss jede Frame neu setzen — das Element kann sich bewegen (Slider). */
  React.useEffect(() => {
    if (!hover || target) return;
    const host = boxRef.current;
    if (!host || !hoverEl.current) return;
    const rect = rectOf(hoverEl.current);
    host.style.top = `${rect.top}px`;
    host.style.left = `${rect.left}px`;
    host.style.width = `${rect.width}px`;
    host.style.height = `${rect.height}px`;
  });

  function select(el: Element) {
    const { tag, excerpt } = describe(el);
    setHover(null);
    setDraft('');
    setTarget({ selector: domPath(el), tag, excerpt, section: sectionOf(el) });
  }

  async function submit() {
    const text = draft.trim();
    if (!text || !target) return;
    const name = author.trim() || 'Gast';
    save(STORE.author, name);
    const payload = {
      page: pathname,
      section: target.section,
      selector: target.selector,
      tag: target.tag,
      excerpt: target.excerpt,
      comment: text,
      author: name,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
    };
    setSaving(true);
    try {
      const data = await post('/api/comments', payload);
      setComments((current) => [...current, data.comment]);
      save(STORE.mine, [...load<number[]>(STORE.mine, []), data.comment.id]);
      say('Danke — die Rückmeldung ist gespeichert.');
      setTarget(null);
      setDraft('');
    } catch {
      save(STORE.queue, [...load<unknown[]>(STORE.queue, []), payload]);
      say('Ohne Verbindung gespeichert — wird nachgesendet, sobald es wieder geht.');
      setTarget(null);
      setDraft('');
    } finally {
      setSaving(false);
    }
  }

  async function setStatus(comment: ReviewComment, status: 'open' | 'done') {
    setComments((current) => current.map((c) => (c.id === comment.id ? { ...c, status } : c)));
    try {
      await post(`/api/comments/${comment.id}`, { status }, 'PATCH');
    } catch {
      say('Status konnte nicht gespeichert werden.');
    }
  }

  async function remove(comment: ReviewComment) {
    if (!window.confirm('Diese Rückmeldung löschen?')) return;
    setComments((current) => current.filter((c) => c.id !== comment.id));
    try {
      await post(`/api/comments/${comment.id}`, {}, 'DELETE');
    } catch {
      say('Löschen hat nicht geklappt.');
    }
  }

  async function copyMarkdown() {
    const lines = [
      `# Rückmeldungen — ${pathname}`,
      '',
      ...comments.map((c) => {
        const mark = c.status === 'done' ? 'x' : ' ';
        return `- [${mark}] **${c.author}** ${c.section ? `· ${c.section} ` : ''}— ${c.comment}\n  Stelle: \`${c.tag}\` „${c.excerpt}“\n  Selektor: \`${c.selector}\``;
      }),
    ];
    try {
      await navigator.clipboard.writeText(lines.join('\n'));
      say('Als Markdown kopiert.');
    } catch {
      say('Kopieren ist im Browser blockiert.');
    }
  }

  /* Gesamtschalter: Funktion zum Aus-/Einblenden (auch über die Adresse
     erreichbar — `?rv=1` holt die Ebene immer zurück). */
  const show = React.useCallback(
    (on: boolean, quiet = false) => {
      save(STORE.enabled, on);
      setEnabled(on);
      setPicker(false);
      setTarget(null);
      if (on && !quiet) say('Rückmeldungen eingeblendet.');
      if (!on) {
        setDrawer(false);
        if (!quiet) say(`Ausgeblendet — mit Shift+R oder ?rv=1 wieder einblenden.`);
      }
    },
    [say],
  );

  /* Escape schließt, Shift+R schaltet die ganze Ebene um */
  React.useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const editable = (event.target as Element | null)?.closest(
        'input, textarea, select, [contenteditable="true"]',
      );
      if (event.shiftKey && !event.altKey && !event.metaKey && !event.ctrlKey && event.code === 'KeyR') {
        if (editable) return; // sonst käme kein großes R in die Anmerkung
        event.preventDefault();
        show(!enabled);
        return;
      }
      if (event.key !== 'Escape') return;
      if (target) setTarget(null);
      else if (picker) setPicker(false);
      else if (drawer) setDrawer(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [drawer, enabled, picker, show, target]);

  const open = comments.filter((c) => c.status !== 'done');
  const mine = load<number[]>(STORE.mine, []);
  const ready = React.useMemo(() => !!pathname, [comments, pathname, tick]);

  // Aus heißt: nichts von der Ebene liegt über der Seite — sie sieht aus wie die
  // Live-Seite. Der Weg zurück steht in der Adresse (`?rv=1`) und auf Shift+R.
  if (!enabled) return null;

  return (
    <div className='rv' data-review-ui>
      {/* Umriss + ✎ am Element unter dem Zeiger */}
      {hover && !target && !picker && (
        <div
          ref={boxRef}
          className='rv-box'
          style={{ top: hover.rect.top, left: hover.rect.left, width: hover.rect.width, height: hover.rect.height }}>
          {/* Ganz oben im Bildschirm hat das Etikett keinen Platz über dem
              Rahmen — dann sitzt es innen. */}
          <span className='rv-box-label' data-inside={hover.rect.top < 40}>
            {hoverEl.current ? `${sectionOf(hoverEl.current) || 'Seite'} · ${describe(hoverEl.current).excerpt.slice(0, 60)}` : ''}
          </span>
        </div>
      )}
      {hover && !target && !picker && (
        <button
          type='button'
          className='rv-plus'
          aria-label='Kommentar zu diesem Element'
          title='Kommentar schreiben'
          style={{
            // Oben rechts am Element: links sitzt das Etikett des Umrisses.
            top: Math.max(hover.rect.top - 14, 6),
            left: Math.min(
              Math.max(hover.rect.left + hover.rect.width - 14, 6),
              window.innerWidth - 34,
            ),
          }}
          onClick={() => hoverEl.current && select(hoverEl.current)}>
          ✎
        </button>
      )}

      {/* Pins vorhandener Rückmeldungen */}
      {ready &&
        comments.map((comment, index) => {
          const el = findByPath(comment.selector);
          if (!el) return null;
          const rect = rectOf(el);
          return (
            <button
              key={comment.id}
              type='button'
              className='rv-pin'
              data-status={comment.status}
              data-active={active === comment.id}
              style={{ top: Math.max(rect.top - 10, 4), left: Math.max(rect.left - 10, 4) }}
              title={`${comment.author}: ${comment.comment}`}
              onClick={() => {
                setActive(comment.id);
                setDrawer(true);
                window.setTimeout(() => {
                  document.getElementById(`rv-item-${comment.id}`)?.scrollIntoView({ block: 'center' });
                }, 60);
              }}>
              {index + 1}
            </button>
          );
        })}

      {/* Leiste */}
      <div className='rv-bar'>
        {comments.length > 0 && (
          <button type='button' className='rv-pill' onClick={() => setDrawer(!drawer)}>
            Liste
            <span className='rv-pill-count'>{open.length}</span>
          </button>
        )}
        <button
          type='button'
          className='rv-pill'
          data-on={picker}
          onClick={() => {
            setTarget(null);
            setPicker(!picker);
            if (!picker) say('Jetzt die Stelle antippen, die du kommentieren möchtest.');
          }}>
          {picker ? 'Auswahl beenden' : 'Rückmeldung ✎'}
        </button>
        <button
          type='button'
          className='rv-pill rv-pill-quiet'
          aria-label='Rückmeldungen ausblenden'
          title='Ausblenden — Seite ohne Rückmeldungs-Ebene ansehen (Shift+R oder ?rv=1 holt sie zurück)'
          onClick={() => show(false)}>
          ✕
        </button>
      </div>

      {/* Eingabe */}
      {target && (
        <div className='rv-panel' role='dialog' aria-label='Rückmeldung schreiben'>
          <span className='rv-panel-target'>
            {API ? 'Rückmeldung' : 'Rückmeldung (Dienst nicht konfiguriert)'}
          </span>
          <p className='rv-panel-which'>
            {target.section ? `${target.section} · ` : ''}
            <strong>{target.tag}</strong> — „{target.excerpt}“
          </p>
          <textarea
            autoFocus
            rows={4}
            value={draft}
            placeholder='Was soll hier anders werden?'
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') submit();
            }}
          />
          <div className='rv-row'>
            <input
              className='rv-name'
              type='text'
              value={author}
              placeholder='Dein Name'
              onChange={(event) => setAuthor(event.target.value)}
            />
            <div className='rv-actions'>
              <button type='button' className='rv-btn' onClick={() => setTarget(null)}>
                Abbrechen
              </button>
              <button
                type='button'
                className='rv-btn rv-btn-primary'
                disabled={!draft.trim() || saving}
                onClick={submit}>
                {saving ? 'Speichert …' : 'Speichern'}
              </button>
            </div>
          </div>
          <p className='rv-hint'>
            Mit ⌘/Strg + Enter speichern. Deine Anmerkung erscheint als Nummer an derselben Stelle.
          </p>
        </div>
      )}

      {/* Liste */}
      {drawer && (
        <aside className='rv-drawer' aria-label='Rückmeldungen auf dieser Seite'>
          <div className='rv-drawer-head'>
            <h2 className='rv-drawer-title'>
              Rückmeldungen
              <button type='button' className='rv-btn' onClick={() => setDrawer(false)}>
                Schließen
              </button>
            </h2>
            <p className='rv-drawer-sub'>
              {open.length} offen · {comments.length - open.length} erledigt auf dieser Seite
            </p>
            <div className='rv-drawer-links'>
              <a href={OVERVIEW} target='_blank' rel='noopener noreferrer'>
                Alle Seiten
              </a>
              <button type='button' onClick={copyMarkdown}>
                Als Markdown kopieren
              </button>
              <button type='button' onClick={() => show(false)} title='Seite ohne Rückmeldungs-Ebene ansehen'>
                Ausblenden
              </button>
            </div>
          </div>
          {comments.length === 0 ? (
            <p className='rv-empty'>
              Noch nichts notiert. Fahre über eine Stelle und klicke ✎ — deine Anmerkung landet hier und
              bei Chris.
            </p>
          ) : (
            <ul className='rv-list'>
              {comments.map((comment, index) => {
                const found = !!findByPath(comment.selector);
                return (
                  <li
                    key={comment.id}
                    id={`rv-item-${comment.id}`}
                    className='rv-item'
                    data-status={comment.status}>
                    <div className='rv-item-head'>
                      <span>
                        #{index + 1} · {comment.section || 'Seite'}
                      </span>
                      <span>{timeAgo(comment.created_at)}</span>
                    </div>
                    <p className='rv-item-text'>{comment.comment}</p>
                    <span className='rv-item-where'>
                      {comment.tag} — „{comment.excerpt}“
                      {!found && ' · Stelle nicht mehr gefunden'}
                    </span>
                    <div className='rv-item-acts'>
                      <button
                        type='button'
                        onClick={() => setStatus(comment, comment.status === 'done' ? 'open' : 'done')}>
                        {comment.status === 'done' ? 'Wieder öffnen' : 'Erledigt'}
                      </button>
                      {(mine.includes(comment.id) || comment.author === author) && (
                        <button type='button' data-danger onClick={() => remove(comment)}>
                          Löschen
                        </button>
                      )}
                      <span style={{ fontSize: '0.75rem', color: 'rgba(29,28,23,.55)' }}>
                        {comment.author}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </aside>
      )}

      {toast && <div className='rv-toast'>{toast}</div>}
    </div>
  );
}