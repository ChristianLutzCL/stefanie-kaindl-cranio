'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from '@/components/icons';

/**
 * Startseite — aufgebaut entlang der Fragen, die sich jemand stellt, der zum
 * ersten Mal hier landet. Gestaltung nach der Editorial-Referenz (Punkt-Label,
 * zurückhaltende Serif-Überschriften, Olive als einzige Akzentfläche).
 *
 *   Hero             Was ist das hier?            (hero.tsx)
 *   1  Einführung    Was ist Craniosacrale Körperarbeit?
 *   2  Bildband      Wie sieht es dort aus?
 *   3  Für wen       Ist das etwas für mich?
 *   4  Sitzung       Was passiert in einer Sitzung?
 *   5  Über mich     Wer behandelt mich, und ist sie qualifiziert?
 *   6  Stimmen       Was sagen andere?
 *   7  Preise        Was kostet es, was muss ich wissen?
 *   8  Termin        Wo ist die Praxis, und wie buche ich?
 *
 * Alle Preise, Zeiten, Qualifikationen, Adressen und Zitate stammen aus den
 * bestehenden Seiten der Praxis — nichts davon ist hier neu erfunden.
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
  position,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  position?: string;
}) {
  return (
    <div className={`ph ${ratio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className='object-cover'
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}

/** Zustand der Slider (Bildband und Stimmen).
 *  Der Zielindex wird in einem Ref geführt, damit schnelles Klicken nicht
 *  verloren geht: während der Scroll-Animation liefert `scrollLeft` noch
 *  Zwischenwerte. Manuelles Scrollen wird erst nach dem Auslaufen
 *  (120 ms ohne Scroll-Event) übernommen. */
function useScroller(count: number) {
  const ref = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef(0);
  const settleTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const [progress, setProgress] = React.useState(0);

  const cardsOf = () =>
    ref.current ? (Array.from(ref.current.querySelectorAll('[data-card]')) as HTMLElement[]) : [];

  const scrollToIndex = (index: number) => {
    const el = ref.current;
    const cards = cardsOf();
    if (!el || !cards.length) return;
    const next = Math.min(cards.length - 1, Math.max(0, index));
    targetRef.current = next;
    el.scrollTo({ left: cards[next].offsetLeft - el.offsetLeft, behavior: 'smooth' });
  };

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? Math.min(1, Math.max(0, el.scrollLeft / max)) : 0);

    if (settleTimer.current) clearTimeout(settleTimer.current);
    settleTimer.current = setTimeout(() => {
      const cards = cardsOf();
      if (!cards.length) return;
      const left = el.getBoundingClientRect().left;
      const current = cards.findIndex((c) => c.getBoundingClientRect().left >= left - 8);
      if (current >= 0) targetRef.current = current;
    }, 120);
  };

  const step = (dir: number) => scrollToIndex(targetRef.current + dir);

  return { ref, onScroll, step, active: Math.round(progress * (count - 1)) };
}

function Arrows({
  onStep,
  className = '',
  inverse = false,
}: {
  onStep: (dir: number) => void;
  className?: string;
  inverse?: boolean;
}) {
  return (
    <div className={`flex items-center gap-9 ${className}`}>
      {(['left', 'right'] as const).map((dir) => (
        <button
          key={dir}
          type='button'
          onClick={() => onStep(dir === 'left' ? -1 : 1)}
          aria-label={dir === 'left' ? 'Zurück' : 'Weiter'}
          className={`text-[1.75rem] transition-colors ${
            inverse
              ? 'text-[var(--cream-70)] hover:text-[var(--cream)]'
              : 'text-ink-500 hover:text-ink'
          }`}>
          {dir === 'left' ? <ArrowLeft /> : <ArrowRight />}
        </button>
      ))}
    </div>
  );
}

/** Zentrierter Sektionskopf: Punkt-Label, Serif-Überschrift, optional ein Link. */
function SectionHead({
  label,
  title,
  children,
}: {
  label: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className='mx-auto max-w-2xl text-center'>
      <span className='label'>{label}</span>
      <h2 className='display display-serif d2 mt-6'>{title}</h2>
      {children}
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
      <Intro />
      <ImageBand />
      <ForWhom />
      <Session />
      <About />
      <Voices />
      <Prices />
      <Booking />
    </>
  );
}

/* --- 1 Einführung: Was ist Craniosacrale Körperarbeit? -------------------- */

function Intro() {
  return (
    <section className='section' id='cranio'>
      <div className='shell'>
        <div className='mx-auto max-w-[46rem] text-center'>
          <span className='label'>Craniosacrale Körperarbeit</span>
          <p className='lead-lg mt-7' data-reveal>
            Eine sanfte, achtsame Berührung — mit einem Druck von nur etwa fünf Gramm. Sie lädt
            deinen Körper ein, aus der Anspannung zu finden und zurück in seinen eigenen Rhythmus zu
            kommen. In meiner Praxis in Pfaffenhofen an der Ilm, für Erwachsene, Babys und Kinder.
          </p>
          <a href='#sitzung' className='cta-link cta-link-ink mt-9'>
            So läuft eine Sitzung ab <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

/* --- 2 Bildband: Wie sieht es dort aus? ----------------------------------- */

const BAND = [
  {
    src: '/image/behandlung_2.webp',
    alt: 'Sanfte Berührung an den Füßen während einer Behandlung',
  },
  {
    src: '/image/hero.webp',
    alt: 'Stefanie Kaindl mit einer Klangschale im hellen Behandlungsraum',
  },
  {
    src: '/image/kopf.webp',
    alt: 'Stefanie Kaindl erklärt die Schädelknochen an einem anatomischen Modell',
  },
];

function ImageBand() {
  const { ref, onScroll, step } = useScroller(BAND.length);

  /* Beim Laden das mittlere Bild zentrieren — die äußeren Bilder sind dadurch
     angeschnitten und der Blick liegt sofort in der Mitte (wie in der Referenz). */
  React.useEffect(() => {
    const track = ref.current;
    if (!track || window.innerWidth < 768) return;
    const middle = track.querySelectorAll('[data-card]')[1] as HTMLElement | undefined;
    if (!middle) return;
    track.scrollLeft = middle.offsetLeft - (track.clientWidth - middle.offsetWidth) / 2;
  }, [ref]);

  return (
    <section aria-label='Einblicke in die Praxis' className='pb-[clamp(4rem,8vw,8.5rem)]'>
      <div
        ref={ref}
        onScroll={onScroll}
        className='scroller items-start gap-3 md:gap-4'
        style={{ paddingInline: 'max(1.5rem, calc((100vw - 1560px) / 2 + 3.5rem))' }}>
        {BAND.map((image, i) => (
          <figure
            key={image.src}
            data-card
            className={`ph relative ${
              i === 1 ? 'aspect-[4/3] w-[84vw] md:w-[54vw]' : 'aspect-[4/3] w-[60vw] md:w-[19vw]'
            }`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={i === 1 ? '(max-width: 768px) 84vw, 54vw' : '(max-width: 768px) 60vw, 19vw'}
              className='object-cover'
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

/* --- 3 Für wen: Ist das etwas für mich? ----------------------------------- */

const FOR_WHOM = [
  {
    title: 'Erwachsene',
    meta: 'Cranio · ca. 60 Minuten',
    body: 'Bei Stress und innerer Unruhe, Verspannungen, Kopfschmerzen und Migräne, Schlafproblemen, emotionalen Belastungen — und in der Schwangerschaft.',
    href: '/angebote-preise',
    src: '/image/erwachsene.webp',
    alt: 'Hände ruhen sanft auf der Stirn einer liegenden Person',
    position: '50% 30%',
  },
  {
    title: 'Babys & Kinder',
    meta: 'Cranio · 20 – 40 Minuten',
    body: 'Spielerisch und altersgerecht, für Kinder jeden Alters: bei Unruhe und Schlafproblemen, nach der Geburt, bei Konzentrationsschwierigkeiten.',
    href: '/angebote-preise',
    src: '/image/4.webp',
    alt: 'Kerzen, Handtücher und eine kleine Pflanze im Behandlungsraum',
    position: '50% 55%',
  },
  {
    title: 'Yoga',
    meta: 'Donnerstags · Paunzhausen',
    body: 'Yoga in kleinen Gruppen, für Anfänger und Fortgeschrittene: Bewegung, Atmung und Tiefenentspannung — um 17:30 und um 19:00 Uhr, 14 € pro Stunde.',
    href: '/yoga',
    src: '/image/yoga.webp',
    alt: 'Stefanie Kaindl in einer Yoga-Haltung auf der Matte',
    position: '50% 50%',
  },
];

function ForWhom() {
  return (
    <section className='section pt-0' id='fuer-wen'>
      <div className='shell'>
        <SectionHead label='Für wen' title='Wobei ich dich begleite.' />

        <div className='mt-14 grid gap-12 md:grid-cols-3 md:gap-5'>
          {FOR_WHOM.map((item) => (
            <article key={item.title} data-reveal>
              <Link href={item.href} className='group block'>
                <Photo
                  src={item.src}
                  alt={item.alt}
                  ratio='aspect-[4/5]'
                  position={item.position}
                  sizes='(max-width: 768px) 100vw, 33vw'
                  className='transition-opacity duration-300 group-hover:opacity-90'
                />
                <p className='meta-line mt-5'>{item.meta}</p>
                <h3 className='mt-2 flex items-center justify-between gap-4 text-[1.0625rem] text-ink'>
                  {item.title}
                  <span className='text-[0.9rem] text-ink-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'>
                    <ArrowUpRight />
                  </span>
                </h3>
                <p className='mt-2 max-w-[24rem] text-[0.8125rem] leading-relaxed text-ink-600'>
                  {item.body}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- 4 Sitzung: Was passiert in einer Sitzung? ---------------------------- */

const STEPS = [
  {
    title: 'Vorgespräch',
    body: 'Wir sprechen in Ruhe über dein Anliegen, deine Geschichte und das, was du dir wünschst.',
  },
  {
    title: 'Behandlung',
    body: 'Du liegst bequem auf der Liege. Ich arbeite mit sanften craniosacralen Techniken — die Berührung bleibt leicht.',
  },
  {
    title: 'Nachruhe',
    body: 'Danach bleibt Zeit zum Nachspüren, damit die Behandlung in Ruhe nachwirken kann.',
  },
  {
    title: 'Nachbesprechung',
    body: 'Wir schauen gemeinsam, was du wahrgenommen hast, und ich gebe dir Empfehlungen für zu Hause mit.',
  },
];

function Session() {
  const [open, setOpen] = React.useState(0);

  return (
    <section
      id='sitzung'
      className='relative overflow-hidden bg-[var(--olive)] text-[var(--cream)]'>
      <div className='grid lg:grid-cols-2'>
        {/* Bild links, randlos, die Überschrift liegt oben auf dem Bild */}
        <div className='relative min-h-[26rem] lg:min-h-[44rem]'>
          <Image
            src='/image/behandlung.webp'
            alt='Stefanie Kaindl während einer Behandlung an der Liege'
            fill
            sizes='(max-width: 1024px) 100vw, 50vw'
            className='object-cover'
            style={{ objectPosition: '40% 50%' }}
          />
          <span
            aria-hidden
            className='absolute inset-x-0 top-0 h-2/5 bg-[linear-gradient(to_bottom,rgba(35,30,20,0.55),rgba(35,30,20,0))]'
          />
          <div className='relative px-6 pt-10 md:px-10 md:pt-12'>
            <span className='label label-inverse'>Deine Sitzung</span>
            <h2 className='display display-serif d2 mt-5 max-w-md text-[var(--cream)] [text-shadow:0_1px_14px_rgba(20,16,10,0.35)]'>
              Was dich in einer Sitzung erwartet.
            </h2>
          </div>

          {/* Rundes Bildelement auf der Kante zwischen Foto und Olive */}
          <span className='absolute right-0 top-1/2 hidden h-48 w-48 -translate-y-1/2 translate-x-1/2 overflow-hidden rounded-full border border-[var(--cream-line)] lg:block xl:h-56 xl:w-56'>
            <Image
              src='/image/behandlung_3.webp'
              alt=''
              aria-hidden
              fill
              sizes='224px'
              className='object-cover'
              style={{ objectPosition: '60% 40%' }}
            />
          </span>
        </div>

        {/* Ablauf rechts: aktive Station hell, die übrigen zurückgenommen */}
        <div className='flex flex-col justify-center px-6 py-14 md:px-10 lg:py-20 lg:pl-[clamp(7rem,10vw,10rem)] lg:pr-[clamp(2.5rem,6vw,6rem)]'>
          <ol className='max-w-md'>
            {STEPS.map((step, i) => {
              const active = i === open;
              return (
                <li key={step.title} className='border-t border-[var(--cream-line)] last:border-b'>
                  <button
                    type='button'
                    onClick={() => setOpen(i)}
                    aria-expanded={active}
                    className='flex w-full items-center gap-3 py-5 text-left'>
                    <span
                      aria-hidden
                      className={`h-1 w-1 flex-none rounded-full bg-[var(--cream)] transition-opacity duration-300 ${
                        active ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    <span
                      className={`text-[0.9375rem] transition-colors duration-300 ${
                        active ? 'text-[var(--cream)]' : 'text-[var(--cream-70)] hover:text-[var(--cream)]'
                      }`}>
                      {step.title}
                    </span>
                    <span className='ml-auto text-[0.6875rem] tabular-nums text-[var(--cream-45)]'>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}>
                    <p className='overflow-hidden pl-4 text-[0.875rem] leading-relaxed text-[var(--cream-70)]'>
                      <span className='block pb-6'>{step.body}</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className='mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-3'>
            <a href={CALENDLY} target='_blank' rel='noopener noreferrer' className='cta-link'>
              Termin vereinbaren <ArrowUpRight />
            </a>
            <span className='text-[0.75rem] text-[var(--cream-70)]'>
              Erst kennenlernen? Erstberatung, 30 Min · 40 €
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- 5 Über mich: Wer behandelt mich? ------------------------------------- */

const QUALIFICATIONS = [
  { title: 'Craniosacrale Körperarbeit', detail: 'Katharina Bähner, Stuttgart · 2024' },
  { title: 'Kinder-Cranio', detail: 'Weiterbildung für Babys & Kinder' },
  { title: 'Vinyasa-Yogalehrerin, 300 h', detail: 'Lovelysita, Prien · 2026' },
];

function About() {
  return (
    <section className='section' id='ueber-mich'>
      <div className='shell'>
        <div className='grid items-center gap-12 lg:grid-cols-12 lg:gap-0'>
          <div className='lg:col-span-5' data-reveal>
            <Photo
              src='/image/ueber-mich.webp'
              alt='Stefanie Kaindl sitzt lächelnd auf einem Sessel in ihrer Praxis'
              ratio='aspect-[4/5]'
              position='50% 30%'
              sizes='(max-width: 1024px) 100vw, 40vw'
            />
          </div>

          <div className='lg:col-span-6 lg:col-start-7'>
            <span className='label'>Über mich</span>
            <h2 className='display display-serif d2 mt-6'>Hallo, ich bin Steffi.</h2>
            <p className='lead-lg mt-7 max-w-xl'>
              Craniosacral-Praktikerin aus Leidenschaft und zweifache Mama. Ich begleite Menschen
              dabei, wieder in Kontakt mit ihrer Ruhe, ihrer Kraft und ihrem eigenen Rhythmus zu
              kommen — in einem Raum, in dem du dich sicher und geborgen fühlen darfst.
            </p>

            <dl className='mt-10 max-w-xl'>
              {QUALIFICATIONS.map((q) => (
                <div
                  key={q.title}
                  className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-[var(--line)] py-4 last:border-b'>
                  <dt className='text-[0.9375rem] text-ink'>{q.title}</dt>
                  <dd className='text-[0.8125rem] text-ink-500'>{q.detail}</dd>
                </div>
              ))}
            </dl>

            <Link href='/ueber-mich' className='cta-link cta-link-ink mt-9'>
              Mehr über mich <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- 6 Stimmen: Was sagen andere? ----------------------------------------- */

const QUOTES = [
  {
    text: 'Die Behandlung bei Steffi ist eine Wohltat für Körper, Geist und Seele. Nach der Cranio fühle ich mich viel leichter und meine Gedanken kommen zur Ruhe.',
    name: 'Kathi P.',
    initials: 'KP',
    role: 'Stress & Verspannungen',
  },
  {
    text: 'Nach jahrelangen Kopfschmerzen habe ich endlich Linderung gefunden. Die Behandlungen haben mir geholfen, wieder schmerzfrei zu leben.',
    name: 'Maria S.',
    initials: 'MS',
    role: 'Chronische Kopfschmerzen',
  },
  {
    text: 'Die Cranio Sacrale Körperarbeit hat mir und meinen Kindern geholfen, wieder ins Gleichgewicht zu kommen. Bei Stefanie findet man einen sicheren Raum.',
    name: 'Kathi G.',
    initials: 'KG',
    role: 'Mutter mit Kindern',
  },
  {
    text: 'Einfühlsam, sensibel, mitfühlend, intensiv, wohltuend, geborgen — hier fühle ich mich beschützt und von Herzen willkommen.',
    name: 'Regina',
    initials: 'R',
    role: 'Emotionale Belastung',
  },
];

function Voices() {
  const { ref, onScroll, step, active } = useScroller(QUOTES.length);

  return (
    <section className='section bg-[var(--paper-deep)]' aria-label='Stimmen'>
      <div className='shell'>
        {/* Label (3/12), Zähler (2/12), Zitat (7/12) — dieselbe Flucht wie in der Referenz */}
        <div className='grid gap-8 lg:grid-cols-12 lg:gap-0'>
          <div className='lg:col-span-3'>
            <span className='label'>Stimmen</span>
          </div>
          <div className='lg:col-span-2'>
            <span className='text-[1.25rem] font-light tabular-nums text-ink'>
              {String(active + 1).padStart(2, '0')}
              <span className='text-ink-400'>/{String(QUOTES.length).padStart(2, '0')}</span>
            </span>
          </div>

          <div className='min-w-0 lg:col-span-7'>
            <div ref={ref} onScroll={onScroll} className='scroller'>
              {QUOTES.map((quote) => (
                <blockquote key={quote.name} data-card className='slide-full'>
                  <p className='quote'>&bdquo;{quote.text}&ldquo;</p>

                  <div className='hairline mt-14' />
                  <footer className='mt-5 flex flex-wrap items-center justify-between gap-x-10 gap-y-4'>
                    <div className='flex items-center gap-3'>
                      <span aria-hidden className='initials'>
                        {quote.initials}
                      </span>
                      <span>
                        <span className='block text-[0.9375rem] text-ink'>{quote.name}</span>
                        <span className='mt-0.5 block text-[0.75rem] text-ink-500'>
                          {quote.role}
                        </span>
                      </span>
                    </div>
                    <p className='text-[0.75rem] leading-relaxed text-ink-500 md:max-w-[16rem] md:text-right'>
                      Echte Rückmeldungen aus der Praxis.
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

/* --- 7 Preise: Was kostet es? --------------------------------------------- */

const PLANS = [
  {
    name: 'Erwachsene',
    meta: 'ca. 60 Min.',
    intro: 'Eine Behandlung mit ausführlichem Vorgespräch und Nachruhe.',
    features: [
      'Vorgespräch & Nachbesprechung inklusive',
      'Zeit zum Nachspüren',
      'Online oder telefonisch buchbar',
    ],
    price: '73 €',
    unit: 'Behandlung',
    cta: 'Termin buchen',
    href: CALENDLY,
    featured: false,
  },
  {
    name: '5er-Paket',
    meta: '5 Behandlungen',
    intro: 'Für einen Prozess, der sich über mehrere Wochen entfalten darf.',
    features: ['5 Behandlungen für Erwachsene', '50 € gespart', 'Flexible Terminplanung'],
    price: '400 €',
    unit: 'Paket',
    cta: 'Paket anfragen',
    href: CALENDLY_OVERVIEW,
    featured: true,
  },
  {
    name: 'Kinder',
    meta: '20 – 40 Min.',
    intro: 'Sanft, spielerisch und altersgerecht — mit viel Zeit und Ruhe.',
    features: ['Für Kinder jeden Alters', 'Weiterbildung in Kinder-Cranio', 'Online buchbar'],
    price: '53 €',
    unit: 'Behandlung',
    cta: 'Termin buchen',
    href: CALENDLY_KIDS,
    featured: false,
  },
];

const GOOD_TO_KNOW = [
  ['Erstberatung', '30 Minuten · 40 €'],
  ['Stornierung', 'Kostenfrei bis 24 h vorher'],
  ['Zahlung', 'Bar oder per PayPal'],
  ['Rechnung', 'Für Steuer & Krankenkasse auf Wunsch'],
];

function Prices() {
  return (
    <section className='section' id='preise'>
      <div className='shell'>
        <SectionHead label='Preise' title='Was eine Behandlung kostet.' />

        {/* Die mittlere Karte ist breiter und höher — wie in der Referenz */}
        {/* Alle Karten gleich hoch (Liste wächst, CTA und Preis sitzen auf einer
            Linie); die mittlere ragt oben und unten um 2rem heraus. */}
        <div className='mt-16 grid gap-5 lg:grid-cols-[1fr_1.08fr_1fr] lg:py-8'>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              data-reveal
              className={`flex flex-col bg-[var(--olive)] p-7 text-[var(--cream)] md:p-8 ${
                plan.featured
                  ? 'shadow-[0_30px_60px_-30px_rgba(40,36,24,0.55)] lg:-my-8 lg:py-16'
                  : ''
              }`}>
              <span className={`label label-inverse mb-5 ${plan.featured ? '' : 'invisible'}`}>
                Empfohlen
              </span>
              <h3 className='serif text-[clamp(1.4rem,1.9vw,1.75rem)] leading-tight'>
                {plan.name}
                <span className='text-[var(--cream-45)]'> / {plan.meta}</span>
              </h3>
              <p className='mt-3 text-[0.8125rem] leading-relaxed text-[var(--cream-70)]'>
                {plan.intro}
              </p>
              <ul className='mt-6 flex-1 space-y-2.5'>
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className='flex items-start gap-2.5 text-[0.8125rem] text-[var(--cream-70)]'>
                    <span aria-hidden className='mt-[0.05rem] text-[0.6875rem]'>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-10 flex items-center justify-between border-t border-[var(--cream-line)] pt-4 text-[0.75rem] text-[var(--cream)] transition-opacity hover:opacity-75'>
                {plan.cta} <ArrowUpRight />
              </a>
              <p className='serif mt-6 text-[clamp(1.6rem,2.3vw,2.1rem)] leading-none'>
                {plan.price}
                <span className='text-[0.55em] text-[var(--cream-70)]'> / {plan.unit}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Was man vor dem ersten Termin wissen will */}
        <dl className='mt-16 grid gap-x-8 gap-y-6 border-t border-[var(--line)] pt-8 sm:grid-cols-2 lg:grid-cols-4'>
          {GOOD_TO_KNOW.map(([title, value]) => (
            <div key={title}>
              <dt className='meta-line'>{title}</dt>
              <dd className='mt-1.5 text-[0.875rem] text-ink'>{value}</dd>
            </div>
          ))}
        </dl>
        <div className='mt-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4'>
          <p className='text-[0.8125rem] text-ink-600'>
            Manche Zusatzversicherungen übernehmen die Kosten. Hausbesuche auf Anfrage.
          </p>
          <Link href='/angebote-preise' className='cta-link cta-link-ink'>
            Alle Angebote &amp; Details <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --- 8 Termin: Wo ist die Praxis, wie buche ich? -------------------------- */

function Booking() {
  return (
    <section
      id='termin'
      className='relative isolate overflow-hidden bg-[#241a11] text-[var(--cream)]'>
      <Image
        src='/image/behandlung_3.webp'
        alt=''
        aria-hidden
        fill
        sizes='100vw'
        className='object-cover'
        style={{ objectPosition: '50% 35%', filter: 'brightness(0.62) saturate(0.9)' }}
      />
      <span aria-hidden className='absolute inset-0 bg-[rgba(36,26,17,0.38)]' />

      <div className='shell relative z-10 py-[clamp(5rem,11vw,10rem)]'>
        <div className='mx-auto max-w-[36rem] bg-[var(--paper)] p-8 text-ink md:p-10'>
          <span className='label'>Dein erster Termin</span>
          <h2 className='display display-serif d2 mt-5'>
            Dein Körper weiß es bereits. Gib ihm Raum.
          </h2>

          <div className='mt-8 grid gap-6 border-t border-[var(--line)] pt-6 sm:grid-cols-2'>
            <div>
              <p className='meta-line'>Praxis</p>
              <p className='mt-1.5 text-[0.875rem] leading-relaxed text-ink'>
                Bahnstraße 2a
                <br />
                85276 Pfaffenhofen a. d. Ilm
                <br />
                <span className='text-ink-500'>Ortsteil Uttenhofen</span>
              </p>
            </div>
            <div>
              <p className='meta-line'>Termine</p>
              <p className='mt-1.5 text-[0.875rem] leading-relaxed text-ink'>
                Mo – Fr nach Vereinbarung
                <br />
                <a href='tel:+4917663094476' className='hover:underline'>
                  0176 63094476
                </a>
              </p>
            </div>
          </div>

          <div className='mt-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4'>
            <Link href='/kontakt' className='text-[0.8125rem] text-ink-600 hover:text-ink'>
              Anfahrt &amp; Kontakt
            </Link>
            <a href={CALENDLY} target='_blank' rel='noopener noreferrer' className='cta-link cta-link-ink'>
              Termin online buchen <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
