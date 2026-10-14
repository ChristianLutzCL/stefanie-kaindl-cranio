'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/**
 * Startseite „Editorial Olive" — Aufbau und Details folgen der Referenz
 * (siehe research/design-brief-editorial-olive.md). Die Feinheiten, die aus
 * den Sektions-Screenshots der Vorlage übernommen wurden:
 *
 *   · Alle Überschriften stehen in der Serife, in zurückhaltender Größe.
 *   · Der Story-Absatz ist fast headline-groß (`.lead-lg`), nicht Fließtext.
 *   · Das Bildband ist oben bündig, das mittlere Bild ist deutlich größer.
 *   · Das Studio-Band hat Hotspot-Pillen und eine Bildunterschrift.
 *   · Das Zitat sitzt in der rechten Spalte, darüber eine Haarlinie, Zähler
 *     links daneben, darunter nur zwei Pfeile (keine Segmentlinie).
 *   · Die mittlere Preiskarte ist breiter UND höher.
 *   · Die Karten der Referenz tragen eine Metazeile („Movement · 6 min").
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

/** Weite, dünne Kreisbögen über dunklen Flächen (wie in der Referenz). */
function Arcs({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute aspect-square rounded-full border border-[var(--cream-line)] ${className}`}
      style={style}
    />
  );
}

/** Zustand beider Slider (Bildband und Stimmen). */
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

function Arrows({ onStep, className = '' }: { onStep: (dir: number) => void; className?: string }) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {(['left', 'right'] as const).map((dir) => (
        <button
          key={dir}
          type='button'
          onClick={() => onStep(dir === 'left' ? -1 : 1)}
          aria-label={dir === 'left' ? 'Zurück' : 'Weiter'}
          className='text-[1rem] text-ink-500 transition-colors hover:text-ink'>
          <span aria-hidden>{dir === 'left' ? '←' : '→'}</span>
        </button>
      ))}
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
          <p className='lead-lg mt-7' data-reveal>
            Craniosacrale Körperarbeit ist eine sanfte und zugleich tief wirksame Methode: Über
            achtsame Berührung findet dein Körper zurück in seinen eigenen Rhythmus — bei Schmerzen
            und Stress, nach der Geburt, oder einfach, um zur Ruhe zu kommen.
          </p>
          <Link href='/ueber-mich' className='cta-link cta-link-ink mt-8'>
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
  const { ref, onScroll, step } = useScroller(BAND.length);

  /* Beim Laden das mittlere Bild zentrieren — in der Referenz sind die äußeren
     Bilder dadurch angeschnitten und der Blick liegt sofort in der Mitte. */
  React.useEffect(() => {
    const track = ref.current;
    if (!track) return;
    const middle = track.querySelectorAll('[data-card]')[1] as HTMLElement | undefined;
    if (!middle) return;
    if (window.innerWidth < 768) return;
    track.scrollLeft = middle.offsetLeft - (track.clientWidth - middle.offsetWidth) / 2;
  }, [ref]);

  return (
    <section className='section-tight'>
      {/* Oben bündig, mittleres Bild deutlich größer — wie in der Referenz */}
      <div
        ref={ref}
        onScroll={onScroll}
        className='scroller items-start gap-3 md:gap-4'
        style={{ paddingInline: 'max(1.5rem, calc((100vw - 1560px) / 2 + 3.5rem))' }}>
        {BAND.map((image, i) => (
          <figure
            key={image.src}
            data-card
            className={`ph relative aspect-[4/3] rounded-[4px] ${
              i === 1 ? 'w-[80vw] md:w-[52vw]' : 'w-[52vw] md:w-[19vw]'
            }`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes='(max-width: 768px) 80vw, 52vw'
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
        <Arrows onStep={step} className='mt-8 justify-center' />
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
        <div className='mx-auto max-w-2xl text-center'>
          <span className='label'>Meine Arbeit</span>
          <p className='display display-serif d2 mt-7'>
            Finde, was dich bewegt.
          </p>
        </div>

        <div className='mt-14 grid gap-8 md:grid-cols-3 md:gap-5'>
          {PRACTICE.map((item) => (
            <article key={item.title} data-reveal>
              <Photo
                src={item.src}
                alt={item.alt}
                ratio='aspect-[4/5]'
                sizes='(max-width: 768px) 100vw, 33vw'
              />
              <h3 className='mt-4 text-[0.9375rem] text-ink'>{item.title}</h3>
              <p className='mt-1.5 text-[0.8125rem] leading-relaxed text-ink-600'>{item.body}</p>
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
    <section className='relative overflow-hidden bg-[var(--olive)] text-[var(--cream)]'>
      {/* Sehr zurückhaltende Kreisbögen im Olive-Bereich */}
      <Arcs className='-right-40 top-10 hidden h-[34rem] w-[34rem] md:block' />
      <Arcs className='-left-32 bottom-[-14rem] hidden h-[30rem] w-[30rem] md:block' />

      <div className='relative'>
        <div className='shell pt-[clamp(3.5rem,7vw,7rem)] pb-[clamp(2.5rem,4vw,4rem)]'>
          <span className='label label-inverse'>Ablauf</span>
          <p className='display display-serif d2 mt-6 max-w-2xl text-[var(--cream)]'>
            Was in einer Sitzung passiert.
          </p>
        </div>

        <div className='grid lg:grid-cols-2'>
          {/* Bild links, randlos — mit rundem Bildelement auf der Kante */}
          <div className='relative'>
            <Photo
              src='/image/behandlung.webp'
              alt='Behandlungsraum mit Liege und warmem Licht'
              ratio='aspect-[4/3] lg:aspect-[5/4]'
              sizes='(max-width: 1024px) 100vw, 50vw'
            />
            <span className='absolute -bottom-10 right-[-4.5rem] hidden h-56 w-56 overflow-hidden rounded-full border border-[var(--cream-line)] lg:block'>
              <span className='ph ph-deep absolute inset-0'>
                <Image
                  src='/image/4.webp'
                  alt='Klangschale und Kerzen im Behandlungsraum'
                  fill
                  sizes='224px'
                  className='object-cover'
                />
              </span>
            </span>
          </div>

          {/* Punkte rechts */}
          <div className='shell lg:pl-[clamp(2.5rem,5vw,5rem)]'>
            <div className='pb-[clamp(3.5rem,7vw,7rem)] pt-[clamp(3.5rem,6vw,6rem)]'>
              {STEPS.map((step) => (
                <div key={step.title} className='mb-10 last:mb-0'>
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
                className='cta-link mt-4'>
                Termin vereinbaren <span aria-hidden>↗</span>
              </a>
            </div>
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
  const { ref, onScroll, step, active } = useScroller(QUOTES.length);

  return (
    <section className='section'>
      <div className='shell'>
        {/* Label links, Zähler im zweiten Viertel, Zitat in der rechten Hälfte */}
        <div className='grid gap-8 lg:grid-cols-4 lg:gap-0'>
          <div className='lg:col-span-1'>
            <span className='label'>Stimmen</span>
          </div>
          <div className='hidden lg:col-span-1 lg:block'>
            <span className='text-[0.8125rem] text-ink-500'>
              {String(active + 1).padStart(2, '0')} / {String(QUOTES.length).padStart(2, '0')}
            </span>
          </div>

          <div className='lg:col-span-2 min-w-0'>
            <div ref={ref} onScroll={onScroll} className='scroller'>
              {QUOTES.map((quote) => (
                <blockquote key={quote.name} data-card className='slide-full'>
                  <p className='quote'>
                    &bdquo;{withAccents(quote.text)}&ldquo;
                  </p>
                  <div className='hairline mt-9' />
                  <footer className='mt-4 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2'>
                    <p className='font-serif text-[1.0625rem] text-ink'>
                      {quote.name} <span className='text-ink-500'>· {quote.role}</span>
                    </p>
                    <p className='max-w-[15rem] text-[0.75rem] leading-relaxed text-ink-500'>
                      Echte Rückmeldungen aus der Praxis. Namen sind gekürzt.
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>

        <Arrows onStep={step} className='mt-12' />
      </div>
    </section>
  );
}

/* --- 6 Raum --------------------------------------------------------------- */

const STUDIO_FACTS = ['Warmes Licht', 'Weiche Unterlagen', 'Klangschalen', 'Zeit ohne Eile'];

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
      <span aria-hidden className='absolute inset-0 bg-[#20221a]/62' />
      <span aria-hidden className='absolute inset-0 bg-[#6b7250] mix-blend-multiply opacity-30' />
      <Arcs className='-left-40 bottom-[-18rem] h-[42rem] w-[42rem]' />
      <Arcs className='right-[-10rem] top-[-12rem] hidden h-[34rem] w-[34rem] md:block' />

      <div className='shell relative z-10 py-[clamp(4rem,8vw,8rem)]'>
        {/* Text in der rechten Hälfte, auf derselben Flucht wie das Zitat */}
        <div className='grid gap-14 lg:grid-cols-4 lg:gap-0'>
          <div className='lg:col-span-2 lg:col-start-2'>
            <span className='label label-inverse'>Mein Raum</span>
            <p className='mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-[var(--cream)] md:text-[1.0625rem]'>
              Ein ruhiger Raum im Ortsteil Uttenhofen: warmes Licht, weiche Unterlagen und Zeit ohne
              Eile. Kein Wartezimmer, keine Hektik — nur du und dein eigenes Tempo.
            </p>
            <Link href='/kontakt' className='cta-link mt-8'>
              Kontakt &amp; Anfahrt <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>

        {/* Hotspot-Pillen und Bildunterschrift */}
        <div className='mt-16 max-w-2xl lg:ml-[25%]'>
          <div className='flex flex-wrap gap-2'>
            {STUDIO_FACTS.map((fact) => (
              <span
                key={fact}
                className='rounded-full border border-[var(--cream-line)] bg-[#1d1c17]/35 px-3 py-1.5 text-[0.6875rem] text-[var(--cream-70)] backdrop-blur-sm'>
                {fact}
              </span>
            ))}
          </div>
          <div className='mt-8 grid gap-6 sm:grid-cols-[14rem_1fr] sm:items-end'>
            <figure>
              <Photo
                src='/image/kopf.webp'
                alt='Anatomisches Modell in der Praxis'
                ratio='aspect-[4/3]'
                sizes='224px'
              />
              <figcaption className='meta-line mt-3 text-[var(--cream-45)]'>
                Behandlungsliege · Uttenhofen
              </figcaption>
            </figure>
            <p className='text-[0.875rem] leading-relaxed text-[var(--cream-70)]'>
              Ein Raum, der sich dem Tempo des Tages anpasst: warmes Holz, natürliche Materialien,
              nichts Lautes. Die Berührung darf hier leicht bleiben.
            </p>
          </div>
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
    unit: ' / Behandlung',
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
    unit: ' / Paket',
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
    unit: ' / Behandlung',
    cta: 'Termin buchen',
    href: CALENDLY_KIDS,
    featured: false,
  },
];

function Membership() {
  return (
    <section className='section'>
      <div className='shell'>
        <div className='mx-auto max-w-2xl text-center'>
          <span className='label'>Angebote</span>
          <p className='display display-serif d2 mt-7'>
            Ein Rhythmus, der zu dir passt.
          </p>
        </div>

        {/* Die mittlere Karte ist breiter und höher */}
        <div className='mt-14 grid items-start gap-5 lg:grid-cols-[1fr_1.08fr_1fr]'>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              data-reveal
              className={`flex h-full flex-col rounded-[4px] border border-[var(--cream-line)] bg-[var(--olive)] p-7 text-[var(--cream)] md:p-8 ${
                plan.featured ? 'lg:-mt-9 lg:pb-12' : ''
              }`}>
              <span
                className={`label label-inverse mb-5 ${plan.featured ? '' : 'invisible'}`}>
                Empfohlen
              </span>
              <h3 className='serif text-[clamp(1.4rem,1.9vw,1.75rem)] leading-tight'>
                {plan.name} <span className='text-[var(--cream-45)]'>{plan.meta}</span>
              </h3>
              <p className='mt-4 text-[0.8125rem] leading-relaxed text-[var(--cream-70)]'>
                {plan.intro}
              </p>
              <ul className='mt-6 flex-1 space-y-2.5'>
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className='flex items-start gap-2.5 text-[0.8125rem] text-[var(--cream-70)]'>
                    <span aria-hidden className='mt-[0.1rem] text-[0.6875rem] text-[var(--cream-70)]'>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className='hairline-inverse mt-8' />
              <a
                href={plan.href}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-4 flex items-center justify-between text-[0.75rem] text-[var(--cream)] transition-opacity hover:opacity-75'>
                {plan.cta} <span aria-hidden>↗</span>
              </a>
              <p className='mt-7 font-serif text-[clamp(1.6rem,2.3vw,2.1rem)] leading-none'>
                {plan.price}
                <span className='text-[var(--cream-45)]'>{plan.unit}</span>
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
        <Link href='/angebote-preise' className='cta-link cta-link-ink mt-8'>
          Alle Angebote &amp; Preise <span aria-hidden>↗</span>
        </Link>
      </div>
    </section>
  );
}

/* --- 8 Für dich ----------------------------------------------------------- */

const FOR_YOU = [
  {
    meta: 'Cranio · 60 Minuten',
    title: 'Cranio für Erwachsene',
    body: 'Für alle, die ihrem Körper etwas zurückgeben wollen — bei Schmerzen, Stress oder einfach zur Ruhe zu kommen.',
    href: '/angebote-preise',
    src: '/image/erwachsene.webp',
    alt: 'Craniosacrale Behandlung eines Erwachsenen',
  },
  {
    meta: 'Cranio · Babys & Kinder',
    title: 'Sanfte Begleitung von Anfang an',
    body: 'Von den ersten Wochen an — bei Unruhe, Schlafproblemen und nach der Geburt, mit viel Zeit und Ruhe.',
    href: '/angebote-preise',
    src: '/image/behandlung_2.webp',
    alt: 'Sanfte Berührung während einer Behandlung',
  },
  {
    meta: 'Yoga · Donnerstag',
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
        <div className='mx-auto max-w-2xl text-center'>
          <span className='label'>Für dich</span>
          <p className='display display-serif d2 mt-7'>
            Wo möchtest du ansetzen?
          </p>
          <Link href='/angebote-preise' className='cta-link cta-link-ink mt-6'>
            Alle Angebote ansehen <span aria-hidden>↗</span>
          </Link>
        </div>

        <div className='mt-14 grid gap-8 md:grid-cols-3 md:gap-5'>
          {FOR_YOU.map((item) => (
            <article key={item.title} data-reveal>
              <Link href={item.href} className='block'>
                <Photo
                  src={item.src}
                  alt={item.alt}
                  ratio='aspect-[4/3]'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
                <p className='meta-line mt-4'>{item.meta}</p>
                <h3 className='font-serif mt-2 text-[clamp(1.25rem,1.7vw,1.6rem)] leading-tight text-ink'>
                  {item.title}
                </h3>
                <p className='mt-2 text-[0.8125rem] leading-relaxed text-ink-600'>{item.body}</p>
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
      <Arcs className='-left-24 top-[-16rem] h-[40rem] w-[40rem]' />
      <Arcs className='right-[-8rem] bottom-[-20rem] h-[44rem] w-[44rem]' />

      <div className='shell relative z-10 py-[clamp(5rem,10vw,10rem)]'>
        {/* Karte schmal und zentriert, Fußzeile zweispaltig */}
        <div className='mx-auto max-w-[34rem] rounded-[4px] bg-[var(--paper)] p-8 text-ink md:p-10'>
          <span className='label'>Beginne, wo du gerade bist</span>
          <p className='display display-serif d2 mt-6'>
            Dein Körper weiß es bereits. Gib ihm Raum.
          </p>
          <div className='mt-9 flex flex-wrap items-end justify-between gap-x-8 gap-y-4'>
            <p className='max-w-[15rem] text-[0.8125rem] leading-relaxed text-ink-600'>
              Deine Praxis muss nicht perfekt sein. Sie muss nur beginnen.
            </p>
            <a href={CALENDLY} target='_blank' rel='noopener noreferrer' className='cta-link cta-link-ink'>
              Termin vereinbaren <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
