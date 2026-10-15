'use client';

import Link from 'next/link';
import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from '@/components/icons';
import { BOOKING, CONTACT, Photo, SectionHead, useReveal } from '@/components/editorial';

/**
 * Startseite — zwei gleichwertige Angebote und die Person dahinter.
 *
 *   Hero          Cranio & Yoga, zwei Buchungswege       (hero.tsx)
 *   1 Einstieg    Zwei Wege zur Ruhe: Berührung und Bewegung
 *   2 Cranio      Was es ist, für wen, Eckdaten  → /cranio
 *   3 Yoga        Was es ist, wann, Eckdaten     → /yoga
 *   4 Über mich   Wer Steffi ist, Ausbildungen
 *   5 Stimmen     Rückmeldungen aus der Praxis
 *   6 Buchen      Beide Wege nebeneinander
 *
 * Ausführliches (Ablauf, alle Preise, Termine) steht auf /cranio und /yoga.
 * Alle Fakten stammen aus den bestehenden Seiten der Praxis.
 */

export function Content() {
  useReveal();

  return (
    <>
      <Intro />
      <CranioFeature />
      <YogaFeature />
      <About />
      <Voices />
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
    facts: [
      ['Wo', 'Bahnstraße 2a, Pfaffenhofen-Uttenhofen'],
      ['Wann', 'Mo – Fr nach Vereinbarung'],
    ],
    cta: 'Termin online buchen',
    href: BOOKING.cranioOverview,
    more: { text: 'Alles zu Cranio', href: '/cranio/' },
  },
  {
    label: 'Yoga',
    title: 'Platz reservieren',
    body: 'Schreib mir kurz per WhatsApp, an welchem Donnerstag und zu welcher Uhrzeit du kommen möchtest — ich melde mich persönlich mit allen Details.',
    facts: [
      ['Wo', 'Paunzhausen'],
      ['Wann', 'Donnerstags 17:30 & 19:00 Uhr'],
    ],
    cta: 'Per WhatsApp reservieren',
    href: BOOKING.yoga,
    more: { text: 'Alles zu Yoga', href: '/yoga/' },
  },
];

function Booking() {
  return (
    <section id='termin' className='section'>
      <div className='shell'>
        <SectionHead label='Termin' title='Dein erster Schritt.' />

        <div className='mt-16 grid border-t border-[var(--line)] md:grid-cols-2'>
          {BOOK_PATHS.map((path, i) => (
            <div
              key={path.label}
              className={`py-10 md:py-12 ${
                i === 0
                  ? 'md:border-r md:border-[var(--line)] md:pr-[clamp(2rem,5vw,5rem)]'
                  : 'border-t border-[var(--line)] md:border-t-0 md:pl-[clamp(2rem,5vw,5rem)]'
              }`}>
              <span className='label'>{path.label}</span>
              <h3 className='serif mt-5 text-[clamp(1.6rem,2.4vw,2.2rem)] leading-tight text-ink'>
                {path.title}
              </h3>
              <p className='mt-4 max-w-md text-[0.9375rem] leading-relaxed text-ink-600'>
                {path.body}
              </p>
              <dl className='mt-7 space-y-2'>
                {path.facts.map(([k, v]) => (
                  <div key={k} className='flex gap-4 text-[0.875rem]'>
                    <dt className='w-12 flex-none text-ink-500'>{k}</dt>
                    <dd className='text-ink'>{v}</dd>
                  </div>
                ))}
              </dl>
              <div className='mt-9 flex flex-wrap items-center gap-x-10 gap-y-4'>
                <a
                  href={path.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='cta-link cta-link-ink'>
                  {path.cta} <ArrowUpRight />
                </a>
                <Link
                  href={path.more.href}
                  className='text-[0.875rem] text-ink-600 transition-colors hover:text-ink'>
                  {path.more.text}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className='mt-2 border-t border-[var(--line)] pt-6 text-center text-[0.8125rem] text-ink-500'>
          Fragen vorab? Ruf mich an unter{' '}
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
    </section>
  );
}

export default Content;
