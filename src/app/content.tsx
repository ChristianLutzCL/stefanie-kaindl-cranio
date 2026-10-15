'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from '@/components/icons';
import { BOOKING, CONTACT, Photo, useReveal } from '@/components/editorial';

/**
 * Startseite — zwei gleichwertige Angebote und die Person dahinter.
 *
 *   Hero          Cranio & Yoga, zwei Buchungswege       (hero.tsx)
 *   1 Einstieg    Zwei Wege zur Ruhe
 *   2 Bildband    Drei Aufnahmen aus der Praxis, mit Pfeilen
 *   3 Cranio      Was es ist, für wen, Eckdaten   → /cranio
 *   4 Yoga        Was es ist, wann, Eckdaten      → /yoga
 *   5 Herangehen  Olive-Fläche mit Akkordeon
 *   6 Über mich   Wer Steffi ist, Ausbildungen
 *   7 Stimmen     Rückmeldungen aus der Praxis
 *   8 Raum        Vollbild-Band mit kleinen Labels
 *   9 Termin      Weiße Karte auf dem Foto, beide Wege
 *
 * Ausführliches (Ablauf, alle Preise, Termine) steht auf /cranio und /yoga.
 * Alle Fakten stammen aus den bestehenden Seiten der Praxis.
 */

export function Content() {
  useReveal();

  return (
    <>
      <Intro />
      <ImageBand />
      <CranioFeature />
      <YogaFeature />
      <Approach />
      <About />
      <Voices />
      <Studio />
      <Booking />
    </>
  );
}

/* --- 1 Einstieg ----------------------------------------------------------- */

function Intro() {
  return (
    <section className='section'>
      <div className='shell'>
        <div className='mx-auto max-w-[46rem] text-center'>
          <span className='label'>Zwei Wege zur Ruhe</span>
          <p className='lead-lg mt-7' data-reveal>
            Bei mir findest du zwei Wege, wieder bei dir anzukommen: die sanfte Berührung der
            Craniosacralen Körperarbeit — und die Bewegung im Yoga. Beides schafft Raum für achtsame
            Präsenz, für Ruhe und für deinen eigenen Rhythmus.
          </p>
          <div className='mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-4'>
            <a href='#cranio' className='cta-link cta-link-ink'>
              Cranio <ArrowRight />
            </a>
            <a href='#yoga' className='cta-link cta-link-ink'>
              Yoga <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Bildband: drei Aufnahmen, mit Pfeilen (Referenz-Device) --------------- */

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
        <div className='mt-8 flex justify-center gap-9'>
          {(['left', 'right'] as const).map((dir) => (
            <button
              key={dir}
              type='button'
              onClick={() => step(dir === 'left' ? -1 : 1)}
              aria-label={dir === 'left' ? 'Zurück' : 'Weiter'}
              className='text-[1.75rem] text-ink-500 transition-colors hover:text-ink'>
              {dir === 'left' ? <ArrowLeft /> : <ArrowRight />}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- 2 / 3 Die beiden Angebote --------------------------------------------- */

function Facts({ items, inverse = false }: { items: [string, string][]; inverse?: boolean }) {
  return (
    <dl
      className={`mt-9 grid grid-cols-2 gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-3 ${
        inverse ? 'border-[var(--cream-line)]' : 'border-[var(--line)]'
      }`}>
      {items.map(([title, value]) => (
        <div key={title}>
          <dt className={inverse ? 'text-[0.6875rem] text-[var(--cream-70)]' : 'meta-line'}>
            {title}
          </dt>
          <dd
            className={`mt-1.5 text-[0.875rem] leading-snug ${
              inverse ? 'text-[var(--cream)]' : 'text-ink'
            }`}>
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function CranioFeature() {
  return (
    <section id='cranio' className='section pt-0'>
      <div className='shell'>
        <div className='grid items-center gap-12 lg:grid-cols-12 lg:gap-0'>
          <div className='lg:col-span-6' data-reveal>
            <Photo
              src='/image/erwachsene.webp'
              alt='Stefanie Kaindl legt während einer Behandlung die Hände sanft an die Stirn'
              ratio='aspect-[4/5]'
              position='50% 35%'
              sizes='(max-width: 1024px) 100vw, 50vw'
            />
          </div>

          <div className='lg:col-span-5 lg:col-start-8'>
            <span className='label'>01 · Cranio</span>
            <h2 className='display display-serif d2 mt-6'>Craniosacrale Körperarbeit</h2>
            <p className='mt-6 text-[1rem] leading-relaxed text-ink-700'>
              Eine sanfte, achtsame Berührung — mit einem Druck von nur etwa fünf Gramm. Sie lädt
              deinen Körper ein, aus der Anspannung zu finden und zurück in seinen eigenen Rhythmus
              zu kommen.
            </p>
            <p className='mt-4 text-[1rem] leading-relaxed text-ink-700'>
              Für Erwachsene bei Stress, Verspannungen, Kopfschmerzen oder Schlafproblemen — und für
              Babys und Kinder, spielerisch und altersgerecht.
            </p>

            <Facts
              items={[
                ['Erwachsene', 'ca. 60 Min · 73 €'],
                ['Babys & Kinder', '20 – 40 Min · 53 €'],
                ['Praxis', 'Pfaffenhofen-Uttenhofen'],
              ]}
            />

            <div className='mt-9 flex flex-wrap items-center gap-x-10 gap-y-4'>
              <Link href='/cranio/' className='cta-link cta-link-ink'>
                Mehr zu Cranio <ArrowRight />
              </Link>
              <Link
                href='/cranio/#termin'
                className='text-[0.875rem] text-ink-600 transition-colors hover:text-ink'>
                Termin buchen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function YogaFeature() {
  return (
    <section id='yoga' className='bg-[var(--olive)] text-[var(--cream)]'>
      <div className='shell py-[clamp(4rem,8vw,8.5rem)]'>
        <div className='grid items-center gap-12 lg:grid-cols-12 lg:gap-0'>
          <div className='order-2 lg:order-1 lg:col-span-5'>
            <span className='label label-inverse'>02 · Yoga</span>
            <h2 className='display display-serif d2 mt-6 text-[var(--cream)]'>
              Yoga am Donnerstag
            </h2>
            <p className='mt-6 text-[1rem] leading-relaxed text-[var(--cream-80)]'>
              Eine bewusste Auszeit vom Alltag: Bewegung, Atmung und Entspannung, sanft bis dynamisch
              und achtsam an die Gruppe angepasst. Für Anfänger und Fortgeschrittene.
            </p>
            <p className='mt-4 text-[1rem] leading-relaxed text-[var(--cream-80)]'>
              Zwei Kurse am Abend, in kleinen Gruppen in Paunzhausen — du entscheidest, ob du ruhig
              ankommen oder mit einem Flow ausklingen möchtest.
            </p>

            <Facts
              inverse
              items={[
                ['Donnerstags', '17:30 & 19:00 Uhr'],
                ['Pro Stunde', '14 € · EGYM Wellpass'],
                ['Ort', 'Paunzhausen'],
              ]}
            />

            <div className='mt-9 flex flex-wrap items-center gap-x-10 gap-y-4'>
              <Link href='/yoga/' className='cta-link'>
                Mehr zu Yoga <ArrowRight />
              </Link>
              <Link
                href='/yoga/#termin'
                className='text-[0.875rem] text-[var(--cream-80)] transition-colors hover:text-[var(--cream)]'>
                Platz reservieren
              </Link>
            </div>
          </div>

          <div className='order-1 lg:order-2 lg:col-span-6 lg:col-start-7' data-reveal>
            <Photo
              src='/image/yoga.webp'
              alt='Stefanie Kaindl in einer Yoga-Haltung auf der Matte'
              ratio='aspect-[4/5]'
              position='38% 50%'
              sizes='(max-width: 1024px) 100vw, 50vw'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Herangehensweise: Olive-Fläche mit Akkordeon (Referenz-Device) -------- */

const APPROACH = [
  {
    title: 'Sanfte Berührung',
    body: 'Ein Druck von nur etwa fünf Gramm — so leicht wie das Gewicht einer Münze. Der craniosacrale Rhythmus wird ertastet, nicht gedrückt.',
  },
  {
    title: 'Ganzheitlich',
    body: 'Die Arbeit wirkt körperlich und emotional: bei Schmerzen, Migräne und Verspannungen ebenso wie bei Stress, Schlafproblemen und Belastendem.',
  },
  {
    title: 'Für Babys & Kinder',
    body: 'Spielerisch und altersgerecht, mit viel Zeit und Ruhe — von den ersten Wochen bis ins Schulalter. Dafür habe ich eine eigene Weiterbildung in Kinder-Cranio gemacht.',
  },
  {
    title: 'Yoga und Cranio',
    body: 'Zwei Wege mit derselben Haltung: achtsame Präsenz. In meinen Yogastunden fließen craniosacrale Impulse in die Praxis ein.',
  },
];

function Approach() {
  const [open, setOpen] = React.useState(0);

  return (
    <section id='herangehensweise' className='relative overflow-hidden bg-[var(--olive)] text-[var(--cream)]'>
      <div className='grid lg:grid-cols-2'>
        {/* Bild links, randlos; Überschrift liegt oben auf dem Bild */}
        <div className='relative min-h-[24rem] lg:min-h-[42rem]'>
          <Image
            src='/image/behandlung.webp'
            alt='Behandlungsraum mit Liege und warmem Licht'
            fill
            sizes='(max-width: 1024px) 100vw, 50vw'
            className='object-cover'
            style={{ objectPosition: '45% 50%' }}
          />
          <span
            aria-hidden
            className='absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(to_bottom,rgba(35,30,20,0.66),rgba(35,30,20,0))]'
          />
          <div className='relative px-6 pt-10 md:px-10 md:pt-12'>
            <span className='label label-inverse'>Herangehensweise</span>
            <h2 className='display display-serif d2 mt-5 max-w-md text-[var(--cream)] [text-shadow:0_1px_14px_rgba(20,16,10,0.35)]'>
              Was meine Arbeit trägt.
            </h2>
          </div>

          {/* Rundes Bildelement genau auf der Kante zwischen Foto und Olive */}
          <span className='absolute right-0 bottom-[18%] hidden h-52 w-52 translate-x-1/2 overflow-hidden rounded-full border border-[var(--cream-line)] lg:block xl:h-60 xl:w-60'>
            <Image
              src='/image/4.webp'
              alt='Klangschalen, Kerzen und Handtücher im Behandlungsraum'
              fill
              sizes='240px'
              className='object-cover'
              style={{ objectPosition: '50% 45%' }}
            />
          </span>
        </div>

        {/* Akkordeon rechts */}
        <div className='flex flex-col justify-center px-6 py-14 md:px-10 lg:py-20 lg:pl-[clamp(7rem,10vw,10rem)] lg:pr-[clamp(2.5rem,6vw,6rem)]'>
          <ol className='max-w-md'>
            {APPROACH.map((entry, i) => {
              const active = i === open;
              return (
                <li key={entry.title} className='border-t border-[var(--cream-line)] last:border-b'>
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
                        active
                          ? 'text-[var(--cream)]'
                          : 'text-[var(--cream-70)] hover:text-[var(--cream)]'
                      }`}>
                      {entry.title}
                    </span>
                    <span className='ml-auto text-[0.6875rem] tabular-nums text-[var(--cream-45)]'>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}>
                    <p className='overflow-hidden pl-4 text-[0.875rem] leading-relaxed text-[var(--cream-80)]'>
                      <span className='block pb-6'>{entry.body}</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <Link href='/cranio/' className='cta-link mt-10'>
            Mehr zu Cranio <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --- Raum: Vollbild-Band mit kleinen Labels (Referenz-Device) -------------- */

const STUDIO_LABELS = [
  { text: 'Behandlungsliege', position: 'left-[clamp(1.5rem,6vw,5rem)] bottom-[24%]' },
  { text: 'Klangschalen', position: 'right-[46%] bottom-[30%]' },
  { text: 'Warmes Licht', position: 'right-[clamp(1.5rem,8vw,6rem)] top-[26%]' },
];

function Studio() {
  return (
    <section aria-label='Die Praxis' className='relative isolate overflow-hidden bg-[#241a11]'>
      <Image
        src='/image/kontakt.webp'
        alt='Blick in die Praxis von Stefanie Kaindl'
        fill
        sizes='100vw'
        className='object-cover'
        style={{ objectPosition: '50% 42%', filter: 'brightness(0.66) saturate(0.94)' }}
      />
      <span aria-hidden className='absolute inset-0 bg-[rgba(36,26,17,0.4)]' />
      {/* Zusätzlicher Verlauf hinter der Textspalte, damit die helle Wand trägt */}
      <span
        aria-hidden
        className='absolute inset-0 bg-[linear-gradient(to_right,rgba(30,22,14,0.5)_0%,rgba(30,22,14,0.18)_45%,rgba(30,22,14,0)_62%)]'
      />
      {/* Sehr weite Kreisbögen, wie in der Referenz */}
      <span
        aria-hidden
        className='pointer-events-none absolute -left-40 -top-40 aspect-square w-[46rem] rounded-full border border-[var(--cream-line)]'
      />
      <span
        aria-hidden
        className='pointer-events-none absolute -bottom-[24rem] right-[-12rem] aspect-square w-[52rem] rounded-full border border-[var(--cream-15)]'
      />

      <div className='shell relative z-10 min-h-[32rem] py-[clamp(3rem,7vw,6rem)] lg:min-h-[40rem]'>
        {/* Text block oben links */}
        <div className='max-w-md text-[var(--cream)]'>
          <span className='label label-inverse'>Die Praxis</span>
          <p className='mt-5 text-[0.9375rem] leading-relaxed text-[var(--cream-80)]'>
            Ein ruhiger Raum im Ortsteil Uttenhofen: warmes Holz, natürliche Materialien und Zeit
            ohne Eile. Kein Wartezimmer, keine Hektik — nur du und dein eigenes Tempo.
          </p>
          <Link href='/kontakt/' className='cta-link mt-7'>
            Anfahrt ansehen <ArrowUpRight />
          </Link>
        </div>

        {/* Kleine Labels locker über dem Foto */}
        {STUDIO_LABELS.map((label) => (
          <span
            key={label.text}
            className={`absolute hidden text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--cream-70)] md:block ${label.position}`}>
            {label.text}
          </span>
        ))}

        {/* Fußzeile des Bands */}
        <div className='absolute inset-x-0 bottom-0'>
          <div className='shell flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-[var(--cream-line)] py-5 text-[0.75rem] text-[var(--cream-70)]'>
            <span>Bahnstraße 2a · 85276 Pfaffenhofen a. d. Ilm · Ortsteil Uttenhofen</span>
            <span>Termine Mo – Fr nach Vereinbarung</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- 4 Über mich ----------------------------------------------------------- */

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
              Craniosacral-Praktikerin aus Leidenschaft, Yogalehrerin und zweifache Mama. Für mich
              verbinden sich Yoga und Craniosacralarbeit auf besondere Weise — beide schaffen Raum
              für achtsame Präsenz und für deinen eigenen Rhythmus.
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

            <Link href='/ueber-mich/' className='cta-link cta-link-ink mt-9'>
              Mehr über mich <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- 5 Stimmen ------------------------------------------------------------- */

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

/** Slider-Zustand: Zielindex im Ref, damit schnelles Klicken keinen Schritt verliert. */
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
      const left = el.getBoundingClientRect().left;
      const current = cards.findIndex((c) => c.getBoundingClientRect().left >= left - 8);
      if (current >= 0) targetRef.current = current;
    }, 120);
  };

  return {
    ref,
    onScroll,
    step: (dir: number) => scrollToIndex(targetRef.current + dir),
    active: Math.round(progress * (count - 1)),
  };
}

function Voices() {
  const { ref, onScroll, step, active } = useScroller(QUOTES.length);

  return (
    <section className='section bg-[var(--paper-deep)]' aria-label='Stimmen'>
      <div className='shell'>
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
                        <span className='mt-0.5 block text-[0.75rem] text-ink-500'>{quote.role}</span>
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

        <div className='mt-12 flex items-center gap-9'>
          {(['left', 'right'] as const).map((dir) => (
            <button
              key={dir}
              type='button'
              onClick={() => step(dir === 'left' ? -1 : 1)}
              aria-label={dir === 'left' ? 'Zurück' : 'Weiter'}
              className='text-[1.75rem] text-ink-500 transition-colors hover:text-ink'>
              {dir === 'left' ? <ArrowLeft /> : <ArrowRight />}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- 6 Buchen -------------------------------------------------------------- */

const BOOK_PATHS = [
  {
    label: 'Cranio',
    title: 'Behandlung buchen',
    body: 'Wähle deinen Termin direkt online — für dich oder für dein Kind. Lieber erst kennenlernen? Dann ist die Erstberatung (30 Min · 40 €) ein guter Anfang.',
    facts: [['Wann', 'Mo – Fr nach Vereinbarung']],
    cta: 'Termin online buchen',
    href: BOOKING.cranioOverview,
    more: { text: 'Alles zu Cranio', href: '/cranio/' },
  },
  {
    label: 'Yoga',
    title: 'Platz reservieren',
    body: 'Schreib mir kurz per WhatsApp, an welchem Donnerstag und zu welcher Uhrzeit du kommen möchtest — ich melde mich persönlich mit allen Details.',
    facts: [['Wann', 'Donnerstags 17:30 & 19:00 Uhr']],
    cta: 'Per WhatsApp reservieren',
    href: BOOKING.yoga,
    more: { text: 'Alles zu Yoga', href: '/yoga/' },
  },
];

function Booking() {
  return (
    <section id='termin' className='relative isolate overflow-hidden bg-[#241a11]'>
      <Image
        src='/image/behandlung_3.webp'
        alt=''
        aria-hidden
        fill
        sizes='100vw'
        className='object-cover'
        style={{ objectPosition: '50% 40%', filter: 'brightness(0.6) saturate(0.9)' }}
      />
      <span aria-hidden className='absolute inset-0 bg-[rgba(36,26,17,0.34)]' />
      {/* Weite Kreisbögen wie im Referenz-Abschluss */}
      <span
        aria-hidden
        className='pointer-events-none absolute -left-48 -bottom-40 aspect-square w-[42rem] rounded-full border border-[var(--cream-line)]'
      />
      <span
        aria-hidden
        className='pointer-events-none absolute -right-40 -top-52 aspect-square w-[38rem] rounded-full border border-[var(--cream-15)]'
      />

      <div className='shell relative z-10 py-[clamp(4.5rem,9vw,9rem)]'>
        {/* Weiße Karte auf dem Foto — wie die Abschluss-Karte der Referenz */}
        <div className='mx-auto max-w-[38rem] bg-[var(--paper)] p-8 text-ink shadow-[0_40px_80px_-40px_rgba(20,16,10,0.6)] md:p-10'>
          <span className='label'>Termin</span>
          <h2 className='display display-serif d2 mt-5'>Dein erster Schritt.</h2>
          <p className='mt-5 max-w-md text-[0.875rem] leading-relaxed text-ink-600'>
            Deine Praxis muss nicht perfekt sein. Sie muss nur beginnen. Such dir den Weg aus, der
            gerade passt — oder ruf an, wenn du unsicher bist.
          </p>

          <div className='mt-8 border-t border-[var(--line)]'>
            {BOOK_PATHS.map((path) => (
              <div
                key={path.label}
                className='flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-b border-[var(--line)] py-5'>
                <div>
                  <span className='label'>{path.label}</span>
                  <p className='mt-2 text-[0.9375rem] text-ink'>{path.title}</p>
                  <p className='mt-1 text-[0.8125rem] text-ink-500'>
                    {path.facts.map(([k, v]) => `${k}: ${v}`).join(' · ')}
                  </p>
                </div>
                <a
                  href={path.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='cta-link cta-link-ink text-[0.875rem]'>
                  {path.cta} <ArrowUpRight />
                </a>
              </div>
            ))}
          </div>

          <p className='mt-6 text-[0.8125rem] leading-relaxed text-ink-500'>
            Fragen vorab? Ruf an unter{' '}
            <a href={CONTACT.phoneHref} className='text-ink hover:underline'>
              {CONTACT.phone}
            </a>{' '}
            oder schreib an{' '}
            <a href={`mailto:${CONTACT.email}`} className='text-ink hover:underline'>
              {CONTACT.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default Content;
