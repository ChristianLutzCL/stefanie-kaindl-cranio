# Rückmeldungs-Modus (Review)

Auf der Review-Instanz kann **jedes Element der Seite** direkt kommentiert werden.
Die Rückmeldungen liegen zentral auf einem kleinen Dienst und sind dort als Liste
sichtbar — nach Seite und Abschnitt gruppiert, mit Erledigt-Status.

- Review-Seite: <https://dev-stefanie-kaindl-cranio.hub.chrislutz.me>
- Alle Rückmeldungen: <https://rueckmeldung.hub.chrislutz.me>
  (dort auch „Als Markdown“ und „Als JSON“)

## Bedienung (für die Kundin)

1. Seite öffnen, über die Stelle fahren, an der etwas geändert werden soll —
   ein gestrichelter Rahmen und ein **✎**-Knopf erscheinen.
2. **✎** anklicken, Anmerkung schreiben, **Speichern** (oder ⌘/Strg + Enter).
   Beim ersten Mal den eigenen Namen eintragen; er wird im Browser gemerkt.
3. Unten rechts sammeln sich die Anmerkungen der Seite: **Liste** öffnet sie,
   **Rückmeldung ✎** schaltet den Auswahlmodus ein (der Weg für Tablet/Handy,
   dort gibt es kein „Darüberfahren“).

Jede Anmerkung erscheint als nummerierter Pin an derselben Stelle — auch nach
einem Neuladen, weil sie auf dem Server liegt. Der Abschnittsname (z. B.
„Start · Meine Arbeitsweise“) hilft beim Zuordnen.

## Ein- und Ausschalten

Die Ebene lässt sich jederzeit komplett ausblenden, dann sieht die Seite genau
aus wie die Live-Seite — nichts liegt darüber, kein Pin, keine Pille:

| Weg | Wirkung |
| --- | --- |
| **✕** unten rechts | aus, gemerkt im Browser |
| **Ausblenden** in der Liste | dasselbe |
| **Shift + R** | schaltet um (in Textfeldern tippt es nur ein „R“) |
| `…?rv=1` in der Adresse | ein — der Weg zurück, funktioniert immer, auch auf einem fremden Gerät |
| `…?rv=0` in der Adresse | aus |

Der Schalter liegt in `localStorage` unter `rv.enabled`; der Parameter in der
Adresse schlägt ihn und wird danach aus der URL entfernt. Weil die Adresse
jederzeit gewinnt, kann die Ebene nicht „verloren gehen“ — auch nicht, wenn
jemand sie auf einem Gerät ausgeblendet hat und den Weg zurück nicht mehr weiß.

## Wo das hingehört und wie es an/aus geht

Die Ebene wird **nur** gebaut, wenn der Build `NEXT_PUBLIC_REVIEW=1` sieht.
Das steht in `.env.local` (gitignored) und damit nur auf der Review-Instanz:

```
NEXT_PUBLIC_REVIEW=1
NEXT_PUBLIC_REVIEW_API=https://rueckmeldung.hub.chrislutz.me
```

Der DigitalOcean-Build aus `main` hat diese Datei nicht. Damit ist die
Produktion nicht nur ohne Rendering, sondern **ohne Code**: `next.config.mjs`
schreibt `@/components/review/review-layer` in diesem Fall per
`turbopack.resolveAlias` auf `src/components/review/noop.tsx` (leere Komponente).
Ohne diesen Alias legt Next für den dynamischen Import trotzdem ein eigenes
JS-Bündel **und** ein eigenes Stylesheet an und verlinkt beide im HTML jeder
Seite — im Export nachweisbar, also nicht „sauber“.

Prüfen nach einem Produktions-Build:

```
grep -rl "rv-pill\|Rückmeldung\|review-layer" out/   # muss leer bleiben
```

## Aufbau

| Teil | Ort |
| --- | --- |
| Ebene (Browser) | `src/components/review/review-layer.tsx` + `review.css` |
| Platzhalter für Produktion | `src/components/review/noop.tsx` |
| Einbau | `src/app/layout.tsx` (letztes Element im `<body>`) |
| Abschnittsanker | `data-review="Seite · Abschnitt"` an jedem `<section>`/`<header>`/`<footer>` (Rechtsseiten: `data-review={title}` in `components/legal.tsx`) |
| Dienst | `/opt/review-comments/server.py` (systemd `review-comments.service`, Port 9126) |
| Datenbank | `/opt/review-comments/comments.db` (SQLite, eine Tabelle `comments`) |
| Routing | `/opt/traefik/dynamic/review-comments.yaml` → `host.docker.internal:9126`, eigenes Let's-Encrypt-Zertifikat, **ohne** hub-gate (die Kundin soll nur den Link öffnen) |
| Firewall | `ufw allow from 10.0.0.0/8` und `172.16.0.0/12 to any port 9126` |

### API

```
GET    /api/comments[?page=/cranio/]   Liste (JSON)
POST   /api/comments                   {page, section, selector, tag, excerpt, comment, author, viewport}
PATCH  /api/comments/<id>              {status: "done"|"open"}
DELETE /api/comments/<id>
GET    /                               Übersicht (HTML)
GET    /export.md  ·  /export.json      zum Abarbeiten
```

Beim Anlegen wird nicht das Pixel, sondern der **DOM-Pfad** festgehalten
(`body > section:nth-child(9) > … > h2:nth-child(1)`), dazu Tag, Textauszug und
Abschnitt. Findet die Ebene das Element nach einem Umbau nicht mehr, bleibt der
Eintrag in der Liste, aber ohne Pin („Stelle nicht mehr gefunden“).

### Im Browser gespeichert (localStorage)

`rv.author` (Name) · `rv.mine` (eigene IDs für „Löschen“) · `rv.queue`
(noch nicht gesendete Anmerkungen) · `rv.hint` (Bedienhinweis einmal gezeigt) ·
`rv.enabled` (Gesamtschalter: ein/aus).

Ohne Verbindung landet eine Anmerkung in `rv.queue` und geht beim nächsten
Aufruf (oder bei `online`) automatisch raus.

## Pflege

```bash
systemctl status review-comments          # läuft der Dienst?
journalctl -u review-comments -n 30       # Fehler beim Schreiben?
sqlite3 /opt/review-comments/comments.db "select page, count(*) from comments group by page;"
curl -s https://rueckmeldung.hub.chrislutz.me/export.md | head -40
```

Neue Seite oder neuer Abschnitt: nur ein `data-review="…"` am äußersten
Element ergänzen — die Ebene liest es, sonst fällt der Eintrag unter „Seite“.
