'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/**
 * Startseite „Editorial Olive" — Aufbau und Devices folgen der Referenz
 * (siehe research/design-brief-editorial-olive.md):
 *
 *   1 Story        — zentriertes Label, zentrierter Absatz, Pfeil-Link
 *   2 Bildband     — randloses Karussell mit Pfeilen
 *   3 Praxis       — Label + zentrierte Headline + drei Fotokarten mit Bildunterschrift
 *   4 Ablauf       — olivgrüne Fläche: Foto links, drei Punkt-Positionen rechts
 *   5 Stimmen      — Zitat-Slider mit Zähler, Pfeilen und Segmentlinie
 *   6 Raum         — dunkles Bildband mit Overlay-Text und Bildunterschrift-Karten
 *   7 Angebote     — drei Olivkarten, mittlere erhöht
 *   8 Für dich     — drei Karten mit Bild, Titel, Text
 *   9 CTA          — dunkles Band, Papierkarte mittig
 *
 * Alle Preise, Zeiten, Adressen und Zitate stammen aus der echten Praxis.
 */

const CALENDLY = 'https://calendly.com/stefanie-kaindl-cranio/cranio_session';
const CALENDLY_KIDS = 'https://calendly.com/stefanie-kaindl-cranio/cranio-kinder';
const CALENDLY_OVERVIEW = 'https://calendly.com/stefanie-kaindl-cranio';

/* -------------------------------------------------------------------------- */
/*  Bausteine                                                                  */
/* -------------------------------------------------------------------------- */

function Photo({
  src,
  alt,
  ratio = 'aspect-[4/5]',
  className = '',
  sizes = '(max-width: 1024px) 100vw, 50vw',
  priority = false,
  deep = false,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  deep?: boolean;
}) {
  return (
    <div className={`ph ${deep ? 'ph-deep' : ''} ${ratio} ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className='object-cover' />
      <span
        aria-hidden
        className='pointer-events-none absolute inset-0 bg-[#6b7250] mix-blend-multiply opacity-20'
      />
    </div>
  );
}

/** Ein Karussell-Zustand für beide Slider (Bildband und Stimmen). */
function useScroller(count: number) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [progress, setProgress] = React.useState(0);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? Math.min(1, Math.max(0, el.scrollLeft / max)) : 0);
  };

  const step = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector('[data-card]') as HTMLElement | null;
    const width = (card?.offsetWidth ?? 360) + 24;
    el.scrollBy({ left: dir * width, behavior: 'smooth' });
  };

  const goTo = (index: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelectorAll('[data-card]')[index] as HTMLElement | undefined;
    if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' });
  };

  return { ref, progress, onScroll, step, goTo, active: Math.round(progress * (count - 1)) };
}

function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return <span aria-hidden>{dir === 'left' ? '←' : '→'}</span>;
}

function SliderControls({
  progress,
  count,
  onStep,
  onGoTo,
  rail = true,
  className = '',
}: {
  progress: number;
  count: number;
  onStep: (dir: number) => void;
  onGoTo: (i: number) => void;
  rail?: boolean;
  className?: string;
}) {
  const active = Math.round(progress * (count - 1));
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <div className='flex items-center gap-4'>
        {(['left', 'right'] as const).map((dir) => (
          <button
            key={dir}
            type='button'
            onClick={() => onStep(dir === 'left' ? -1 : 1)}
            aria-label={dir === 'left' ? 'Zurück' : 'Weiter'}
            className='text-[0.9375rem] text-ink-500 transition-colors hover:text-ink'>
            <Arrow dir={dir} />
          </button>
        ))}
      </div>
      {rail && (
        <div className='flex flex-1 gap-2 text-ink'>
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type='button'
              aria-label={`Zu ${i + 1}`}
              data-active={active === i}
              onClick={() => onGoTo(i)}
              className='rail-seg'
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Startseite                                                                 */
/* -------------------------------------------------------------------------- */

export function Content() {
  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    const show = (el: Element) => el.setAttribute('data-visible', 'true');

    if (!('IntersectionObserver' in window)) {
      els.forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));

    /* Fallback gegen übersprungene Elemente bei sehr schnellem Scrollen. */
    let queued = false;
    const sweep = () => {
      queued = false;
      els.forEach((el) => {
        if (el.getAttribute('data-visible') === 'true') return;
        if (el.getBoundingClientRect().top < window.innerHeight) show(el);
      });
    };
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(sweep);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    sweep();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      <Story />
      <ImageBand />
      <Practice />
      <Method />
      <Perspectives />
      <StudioBand />
      <Membership />
      <ForYou />
      <ClosingCta />
    </>
  );
}

/* --- 1 Story -------------------------------------------------------------- */

function Story() {
  return (
    <section className='section' id='story'>
      <div className='shell'>
        <div className='mx-auto max-w-3xl text-center'>
          <span className='label'>Über mich</span>
          <p className='display d2 mt-7' data-reveal>
            Ich höre mit den Händen zu — dort, wo <em>Worte</em> aufhören.
          </p>
          <p className='body-copy mx-auto mt-7 max-w-2xl' data-reveal>
            Craniosacrale Körperarbeit ist eine sanfte und zugleich tief wirksame Methode: Über
            achtsame Berührung findet dein Körper zurück in seinen eigenen Rhythmus. Ich begleite dich
            dabei — ohne Eile, ohne Druck, in einem Raum, in dem du dich sicher und geborgen fühlst.
          </p>
          <Link href='/ueber-mich' className='arrow-link mt-8'>
            Mehr über mich <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --- 2 Bildband ----------------------------------------------------------- */

const BAND = [
  { src: '/image/4.webp', alt: 'Klangschalen, Kerzen und Handtücher im Behandlungsraum' },
  { src: '/image/yoga.webp', alt: 'Yoga-Haltung im Raum' },
  { src: '/image/behandlung_2.webp', alt: 'Hände während einer craniosacralen Behandlung' },
];

function ImageBand() {
  const { ref, progress, onScroll, step, goTo } = useScroller(BAND.length);

  return (
    <section className='section-tight'>
      <div
        ref={ref}
        onScroll={onScroll}
        className='scroller items-center gap-4 px-6 md:gap-6 md:px-14'>
        {BAND.map((image, i) => (
          <figure
            key={image.src}
            data-card
            className={`ph aspect-[4/5] rounded-[6px] ${
              i === 1 ? 'w-[84vw] md:w-[40vw]' : 'w-[62vw] md:w-[26vw]'
            }`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes='(max-width: 768px) 84vw, 40vw'
              className='object-cover'
            />
            <span
              aria-hidden
              className='pointer-events-none absolute inset-0 bg-[#6b7250] mix-blend-multiply opacity-20'
            />
          </figure>
        ))}
      </div>
      <div className='shell'>
        <SliderControls
          progress={progress}
          count={BAND.length}
          onStep={step}
          onGoTo={goTo}
          rail={false}
          className='mt-8 justify-center'
        />
      </div>
    </section>
  );
}

/* --- 3 Praxis ------------------------------------------------------------- */

const PRACTICE = [
  {
    title: 'Sanfte Berührung',
    body: 'Ein Druck von nur wenigen Gramm — so leicht wie das Gewicht einer Münze. Der craniosacrale Rhythmus wird ertastet, nicht gedrückt.',
    src: '/image/behandlung_3.webp',
    alt: 'Hände ruhen auf dem Kopf während einer Behandlung',
  },
  {
    title: 'Ganzheitlich',
    body: 'Die Arbeit wirkt körperlich und emotional: bei Schmerzen, Migräne und Verspannungen ebenso wie bei Stress, Schlafproblemen und Belastendem.',
    src: '/image/erwachsene.webp',
    alt: 'Craniosacrale Behandlung für Erwachsene',
  },
  {
    title: 'Für Babys & Kinder',
    body: 'Spielerisch und altersgerecht, mit viel Zeit und Ruhe — von den ersten Wochen bis ins Schulalter.',
    src: '/image/behandlung_2.webp',
    alt: 'Sanfte Berührung bei einer craniosacralen Behandlung',
  },
];

function Practice() {
  return (
    <section className='section' id='arbeit'>
      <div className='shell'>
        <div className='mx-auto max-w-3xl text-center'>
          <span className='label'>Meine Arbeit</span>
          <p className='display d2 mt-7'>
            Finde, was dich <em>bewegt</em>.
          </p>
        </div>

        <div className='mt-14 grid gap-8 md:grid-cols-3 md:gap-6'>
          {PRACTICE.map((item) => (
            <article key={item.title} data-reveal>
              <Photo
                src={item.src}
                alt={item.alt}
                ratio='aspect-[4/5]'
                sizes='(max-width: 768px) 100vw, 33vw'
              />
              <h3 className='mt-6 text-[1rem] text-ink'>{item.title}</h3>
              <p className='body-copy mt-2'>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- 4 Ablauf ------------------------------------------------------------- */

const STEPS = [
  {
    title: 'Vorgespräch',
    body: 'Ausführliche Anamnese und Klärung deiner Anliegen — in Ruhe, mit so viel Zeit wie nötig.',
  },
  {
    title: 'Behandlung',
    body: 'Sanfte craniosacrale Techniken in entspannter Atmosphäre. Du bleibst angezogen, die Berührung bleibt leicht.',
  },
  {
    title: 'Nachruhe',
    body: 'Zeit zum Nachspüren, ohne aufstehen zu müssen. Danach eine kurze Nachbesprechung mit Empfehlungen für zu Hause.',
  },
];

function Method() {
  return (
    <section className='bg-[var(--olive)] text-[var(--cream)]'>
      <div className='shell py-[clamp(4rem,8vw,8.5rem)]'>
        <div className='max-w-2xl'>
          <span className='label label-inverse'>Ablauf</span>
          <p className='display d2 mt-7 text-[var(--cream)]'>
            Was in einer Sitzung <em>passiert</em>.
          </p>
        </div>

        <div className='mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16'>
          <Photo
            src='/image/behandlung.webp'
            alt='Behandlungsraum mit Liege und warmem Licht'
            ratio='aspect-[4/3]'
            sizes='(max-width: 1024px) 100vw, 50vw'
          />

          <div>
            {STEPS.map((step) => (
              <div key={step.title} className='hairline-inverse py-6 first:border-t-0 first:pt-0'>
                <span className='label label-inverse'>{step.title}</span>
                <p className='mt-3 max-w-md text-[0.9375rem] leading-relaxed text-[var(--cream-70)]'>
                  {step.body}
                </p>
              </div>
            ))}
            <a
              href={CALENDLY}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-cream mt-4'>
              Termin vereinbaren <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- 5 Stimmen ------------------------------------------------------------ */

const QUOTES = [
  {
    text: 'Die Behandlung bei Steffi ist eine Wohltat für Körper, Geist und Seele. Nach der Cranio fühle ich mich viel *leichter* und meine Gedanken kommen zur Ruhe.',
    name: 'Kathi P.',
    role: 'Stress & Verspannungen',
  },
  {
    text: 'Einfühlsam, sensibel, mitfühlend, intensiv, wohltuend, geborgen — hier fühle ich mich beschützt und von Herzen *willkommen*.',
    name: 'Regina',
    role: 'Emotionale Belastung',
  },
  {
    text: 'Nach jahrelangen Kopfschmerzen habe ich endlich Linderung gefunden. Die Behandlungen haben mir geholfen, wieder *schmerzfrei* zu leben.',
    name: 'Maria S.',
    role: 'Chronische Kopfschmerzen',
  },
  {
    text: 'Die Cranio Sacrale Körperarbeit hat mir und meinen Kindern geholfen, wieder ins Gleichgewicht zu kommen. Bei Stefanie findet man einen *sicheren Raum*.',
    name: 'Kathi G.',
    role: 'Mutter mit Kindern',
  },
];

/** Wandelt *Hervorhebungen* in kursive Serif-Akzente um. */
function withAccents(text: string) {
  return text.split('*').map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : part));
}

function Perspectives() {
  const { ref, progress, onScroll, step, goTo, active } = useScroller(QUOTES.length);

  return (
    <section className='section'>
      <div className='shell'>
        <div className='hairline flex items-center justify-between pt-6'>
          <span className='label'>Stimmen</span>
          <span className='text-[0.75rem] text-ink-500'>
            {String(active + 1).padStart(2, '0')} / {String(QUOTES.length).padStart(2, '0')}
          </span>
        </div>

        <div ref={ref} onScroll={onScroll} className='scroller mt-10'>
          {QUOTES.map((quote) => (
            <blockquote key={quote.name} data-card className='w-full md:pr-24'>
              <p className='quote max-w-5xl'>&bdquo;{withAccents(quote.text)}&ldquo;</p>
              <footer className='mt-8 flex flex-wrap items-center gap-x-3 gap-y-1'>
                <span className='text-[0.9375rem] text-ink'>{quote.name}</span>
                <span aria-hidden className='text-ink-400'>
                  ·
                </span>
                <span className='text-[0.8125rem] text-ink-500'>{quote.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className='mt-12 flex flex-col gap-6 md:flex-row md:items-center'>
          <SliderControls
            progress={progress}
            count={QUOTES.length}
            onStep={step}
            onGoTo={goTo}
            className='md:max-w-xs'
          />
          <p className='text-[0.8125rem] text-ink-500 md:ml-auto md:text-right'>
            Echte Rückmeldungen aus meiner Praxis. Namen sind gekürzt.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --- 6 Raum --------------------------------------------------------------- */

function StudioBand() {
  return (
    <section className='relative isolate overflow-hidden bg-[#22241a] text-[var(--cream)]'>
      <Image
        src='/image/behandlung.webp'
        alt=''
        aria-hidden
        fill
        sizes='100vw'
        className='ph-deep object-cover'
      />
      <span aria-hidden className='absolute inset-0 bg-[#20221a]/60' />
      <span aria-hidden className='absolute inset-0 bg-[#6b7250] mix-blend-multiply opacity-30' />
      <div
        aria-hidden
        className='arcs'
        style={{
          background:
            'radial-gradient(circle at 78% 30%, transparent 0 34%, rgba(243,240,233,.16) 34.1% 34.3%, transparent 34.4% 52%, rgba(243,240,233,.12) 52.1% 52.3%, transparent 52.4%)',
        }}
      />

      <div className='shell relative z-10 py-[clamp(4.5rem,9vw,9rem)]'>
        <div className='max-w-xl'>
          <span className='label label-inverse'>Mein Raum</span>
          <p className='mt-6 text-[0.9375rem] leading-relaxed text-[var(--cream)] md:text-[1.0625rem]'>
            Ein ruhiger Raum im Ortsteil Uttenhofen: warmes Licht, weiche Unterlagen und Zeit ohne
            Eile. Kein Wartezimmer, keine Hektik — nur du und dein eigenes Tempo.
          </p>
          <Link href='/kontakt' className='arrow-link arrow-link-inverse mt-8'>
            Kontakt &amp; Anfahrt <span aria-hidden>↗</span>
          </Link>
        </div>

        <div className='mt-16 grid gap-6 sm:grid-cols-2 md:gap-8 lg:max-w-3xl'>
          {[
            {
              src: '/image/kopf.webp',
              alt: 'Anatomisches Modell in der Praxis',
              caption: 'Anatomie & Rhythmus',
              note: 'Die Grundlage der Arbeit — fein, ruhig, aufmerksam.',
            },
            {
              src: '/image/ueber-mich.webp',
              alt: 'Stefanie Kaindl in ihrer Praxis',
              caption: 'Begleitung',
              note: 'Cranio-Ausbildung 2024 · Yogalehrerin (300 h)',
            },
          ].map((item) => (
            <figure key={item.src}>
              <Photo
                src={item.src}
                alt={item.alt}
                ratio='aspect-[4/3]'
                sizes='(max-width: 640px) 100vw, 33vw'
              />
              <figcaption className='mt-3 text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--cream-60)]'>
                {item.caption}
              </figcaption>
              <p className='mt-2 text-[0.875rem] text-[var(--cream-70)]'>{item.note}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- 7 Angebote ----------------------------------------------------------- */

const PLANS = [
  {
    name: 'Cranio',
    meta: '/ 60 Minuten',
    intro: 'Für Erwachsene, die ihrem Körper etwas zurückgeben wollen.',
    features: [
      'Ca. 60 Minuten Behandlung',
      'Ausführliches Vorgespräch',
      'Nachruhe zum Ankommen',
      'Termin nach Vereinbarung',
    ],
    price: '73 €',
    unit: 'pro Behandlung',
    cta: 'Termin buchen',
    href: CALENDLY,
    featured: false,
  },
  {
    name: 'Rhythmus',
    meta: '/ 5 Sitzungen',
    intro: 'Für einen Prozess, der sich über mehrere Wochen entfaltet.',
    features: [
      '5 Behandlungen im Voraus',
      '50 € Ersparnis',
      'Flexible Terminplanung',
      'Rechnung für Kasse & Steuer',
    ],
    price: '400 €',
    unit: 'Paket',
    cta: 'Paket buchen',
    href: CALENDLY_OVERVIEW,
    featured: true,
  },
  {
    name: 'Kinder',
    meta: '/ 20 – 40 Minuten',
    intro: 'Sanfte Begleitung für Babys und Kinder jeden Alters.',
    features: [
      '20 – 40 Minuten Behandlung',
      'Altersgerecht und spielerisch',
      'Kinder-Cranio-Ausbildung',
      'Für Babys ab der Geburt',
    ],
    price: '53 €',
    unit: 'pro Behandlung',
    cta: 'Termin buchen',
    href: CALENDLY_KIDS,
    featured: false,
  },
];

function Membership() {
  return (
    <section className='section'>
      <div className='shell'>
        <div className='mx-auto max-w-3xl text-center'>
          <span className='label'>Angebote</span>
          <p className='display d2 mt-7'>
            Ein Rhythmus, der zu dir <em>passt</em>.
          </p>
        </div>

        <div className='mt-14 grid items-start gap-6 lg:grid-cols-3'>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              data-reveal
              className={`flex h-full flex-col rounded-[8px] border border-[var(--cream-line)] bg-[var(--olive)] p-7 text-[var(--cream)] md:p-8 ${
                plan.featured ? 'lg:-mt-10 lg:pb-10' : ''
              }`}>
              <span className={`label label-inverse ${plan.featured ? '' : 'invisible'}`}>
                Empfohlen
              </span>
              <h3 className='serif mt-5 text-[clamp(1.4rem,1.9vw,1.85rem)] leading-tight'>
                {plan.name} <span className='text-[var(--cream-45)]'>{plan.meta}</span>
              </h3>
              <p className='mt-4 text-[0.875rem] leading-relaxed text-[var(--cream-70)]'>
                {plan.intro}
              </p>
              <ul className='mt-6 flex-1 space-y-2.5'>
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className='flex items-start gap-2.5 text-[0.875rem] text-[var(--cream-70)]'>
                    <span aria-hidden className='mt-[0.15rem] text-[0.75rem] text-[var(--cream-70)]'>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className='hairline-inverse mt-7' />
              <a
                href={plan.href}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-4 inline-flex items-center gap-2 text-[0.875rem] text-[var(--cream)] transition-opacity hover:opacity-75'>
                {plan.cta} <span aria-hidden>↗</span>
              </a>
              <p className='mt-8 flex items-baseline gap-2'>
                <span className='serif text-[clamp(2.1rem,3vw,2.9rem)] leading-none'>
                  {plan.price}
                </span>
                <span className='text-[0.75rem] text-[var(--cream-45)]'>{plan.unit}</span>
              </p>
            </div>
          ))}
        </div>

        <div className='hairline mt-16' />
        <div className='grid gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-4'>
          {[
            ['Erstberatung', '30 Minuten · 40 €'],
            ['Hausbesuche', 'nach Absprache'],
            ['Stornierung', 'kostenfrei bis 24 h vorher'],
            ['Zahlung', 'bar oder per PayPal'],
          ].map(([title, value]) => (
            <div key={title}>
              <p className='text-[0.6875rem] uppercase tracking-[0.18em] text-ink-500'>{title}</p>
              <p className='mt-2 text-[0.875rem] text-ink-700'>{value}</p>
            </div>
          ))}
        </div>
        <Link href='/angebote-preise' className='arrow-link mt-8'>
          Alle Angebote &amp; Preise <span aria-hidden>↗</span>
        </Link>
      </div>
    </section>
  );
}

/* --- 8 Für dich ----------------------------------------------------------- */

const FOR_YOU = [
  {
    title: 'Cranio für Erwachsene',
    body: 'Für alle, die ihrem Körper etwas zurückgeben wollen — bei Schmerzen, Stress oder einfach zur Ruhe zu kommen.',
    href: '/angebote-preise',
    src: '/image/erwachsene.webp',
    alt: 'Craniosacrale Behandlung eines Erwachsenen',
  },
  {
    title: 'Cranio für Kinder & Babys',
    body: 'Sanfte Begleitung von den ersten Wochen an — bei Unruhe, Schlafproblemen und nach der Geburt.',
    href: '/angebote-preise',
    src: '/image/behandlung_2.webp',
    alt: 'Sanfte Berührung während einer Behandlung',
  },
  {
    title: 'Yoga am Donnerstag',
    body: 'Zwei Kurse, kleine Gruppen: Bewegung, Atmung und Entspannung — 17:30 und 19:00 Uhr.',
    href: '/yoga',
    src: '/image/yoga.webp',
    alt: 'Yoga-Haltung im Raum',
  },
];

function ForYou() {
  return (
    <section className='section bg-[var(--paper-deep)]'>
      <div className='shell'>
        <div className='mx-auto max-w-3xl text-center'>
          <span className='label'>Für dich</span>
          <p className='display d2 mt-7'>
            Wo möchtest du <em>ansetzen</em>?
          </p>
        </div>

        <div className='mt-14 grid gap-8 md:grid-cols-3 md:gap-6'>
          {FOR_YOU.map((item) => (
            <article key={item.title} data-reveal>
              <Link href={item.href} className='group block'>
                <Photo
                  src={item.src}
                  alt={item.alt}
                  ratio='aspect-[4/5]'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
                <h3 className='mt-6 text-[1rem] text-ink'>{item.title}</h3>
                <p className='body-copy mt-2'>{item.body}</p>
                <span className='arrow-link mt-4'>
                  Mehr dazu <span aria-hidden>↗</span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- 9 CTA ---------------------------------------------------------------- */

function ClosingCta() {
  return (
    <section className='relative isolate overflow-hidden bg-[#22241a] text-[var(--cream)]'>
      <Image
        src='/image/behandlung_3.webp'
        alt=''
        aria-hidden
        fill
        sizes='100vw'
        className='ph-deep object-cover'
      />
      <span aria-hidden className='absolute inset-0 bg-[#20221a]/70' />
      <span aria-hidden className='absolute inset-0 bg-[#6b7250] mix-blend-multiply opacity-30' />
      <div
        aria-hidden
        className='arcs'
        style={{
          background:
            'radial-gradient(circle at 50% 120%, transparent 0 30%, rgba(243,240,233,.14) 30.1% 30.3%, transparent 30.4% 46%, rgba(243,240,233,.1) 46.1% 46.3%, transparent 46.4%)',
        }}
      />

      <div className='shell relative z-10 py-[clamp(5rem,10vw,10rem)]'>
        <div className='max-w-2xl rounded-[8px] bg-[var(--paper)] p-8 text-ink md:p-12'>
          <span className='label'>Beginne, wo du gerade bist</span>
          <p className='display display-serif d2 mt-7'>
            Dein Körper weiß es bereits. Gib ihm <em>Raum</em>.
          </p>
          <p className='body-copy mt-5'>
            Du musst nicht in Bestform kommen. Es reicht, wenn du anfängst — der Rest entsteht in der
            Behandlung.
          </p>
          <div className='mt-8 flex flex-wrap items-center gap-4'>
            <a href={CALENDLY} target='_blank' rel='noopener noreferrer' className='btn btn-olive'>
              Termin vereinbaren <span aria-hidden>↗</span>
            </a>
            <Link href='/kontakt' className='arrow-link'>
              Erst einmal schreiben <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
