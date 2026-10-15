'use client';

import Link from 'next/link';
import { ArrowUpRight } from '@/components/icons';
import { BOOKING, Photo, SectionHead, useReveal } from '@/components/editorial';

/**
 * Über mich — wer hinter beiden Angeboten steht.
 *
 * Die Texte stammen unverändert aus der bisherigen Seite (ihre eigenen Worte),
 * Ausbildungen und Stationen ebenso. Neu ist nur die Form: eine ruhige
 * Erzählspalte, eine Faktenliste statt Karten, und die Philosophie als
 * Zitat mit drei Grundsätzen.
 */

const JOURNEY = [
  'Meine fundierte Ausbildung bei Katharina Bähner in Stuttgart, die ich im März 2024 abgeschlossen habe, war für mich ein intensiver Transformationsprozess – fachlich wie auch persönlich. Ergänzend dazu habe ich eine Weiterbildung in Kinder-Cranio absolviert, um auch Babys und Kinder mit besonderer Achtsamkeit und Einfühlungsvermögen begleiten zu können.',
  'Mit dem erfolgreichen Abschluss meiner 300-Stunden-Vinyasa-Yogalehrerausbildung bei Lovelysita in Prien am 10.01.2026 hat sich mein Weg mit Körper, Atem und Energie noch einmal vertieft. Für mich verbinden sich Yoga und Craniosacralarbeit auf besondere Weise – sie schaffen Raum für achtsame Präsenz, Bewusstsein und ganzheitliche Heilung.',
  'Als zweifache Mama weiß ich aus eigener Erfahrung, wie wertvoll es ist, Körper und Seele mit Respekt und Sanftheit zu begegnen. Die Craniosacrale Arbeit ist für mich weit mehr als eine Technik – sie ist eine Begegnung auf Augenhöhe, eine Einladung zum Loslassen, zur inneren Ruhe und Selbstheilung.',
  'In meiner Praxis möchte ich einen Raum schaffen, in dem du dich sicher und geborgen fühlst – einen Ort, an dem du zur Ruhe kommen und wieder in Verbindung mit deinem eigenen Rhythmus treten kannst. Mit großer Leidenschaft bilde ich mich kontinuierlich weiter, um mein Wissen zu vertiefen und dir die bestmögliche Erfahrung zu ermöglichen.',
];

const QUALIFICATIONS = [
  {
    title: 'Craniosacrale Körperarbeit',
    detail: 'Katharina Bähner, Stuttgart · Abschluss März 2024',
    body: 'Fundierte Ausbildung mit intensivem Transformationsprozess auf fachlicher und persönlicher Ebene.',
  },
  {
    title: 'Kinder-Cranio',
    detail: 'Weiterbildung',
    body: 'Spezialisierung auf die achtsame Begleitung von Babys und Kindern.',
  },
  {
    title: 'Vinyasa-Yogalehrerin, 300 Stunden',
    detail: 'Lovelysita, Prien · Abschluss Januar 2026',
    body: 'Ausbildung zur Vertiefung des Verständnisses für Körper, Atem und Energie.',
  },
  {
    title: 'Kontinuierliche Weiterbildung',
    detail: 'Laufend',
    body: 'Weiterbildung zur Vertiefung des Wissens und für eine bessere Begleitung.',
  },
];

const PRINCIPLES = [
  {
    title: 'Sicher & geborgen',
    body: 'Ein Raum, in dem du zur Ruhe kommen und in Verbindung mit deinem eigenen Rhythmus treten kannst.',
  },
  {
    title: 'Achtsam & einfühlsam',
    body: 'Respektvolle Begegnung mit Körper und Seele, in sanfter Begleitung.',
  },
  {
    title: 'Präsenz & Bewusstsein',
    body: 'Raum für Heilung auf allen Ebenen — körperlich, emotional und energetisch.',
  },
];

export function Content() {
  useReveal();

  return (
    <>
      {/* Einstieg */}
      <header className='shell pb-[clamp(3rem,6vw,5rem)] pt-[clamp(8.5rem,14vw,12rem)]'>
        <div className='grid items-center gap-12 lg:grid-cols-12 lg:gap-0'>
          <div className='order-2 lg:order-1 lg:col-span-5'>
            <span className='label'>Über mich</span>
            <h1 className='display display-serif d1-hero mt-6'>Hallo, ich bin Steffi.</h1>
            <p className='lead-lg mt-7'>
              Mein Name ist Stefanie Kaindl – ich bin Craniosacral-Praktikerin aus Leidenschaft. Mit
              34 Jahren habe ich meine Berufung gefunden: Menschen dabei zu begleiten, in Kontakt
              mit ihrer inneren Kraft, Ruhe und Balance zu kommen.
            </p>
            <div className='mt-9 flex flex-wrap items-center gap-x-10 gap-y-4'>
              <a
                href={BOOKING.cranioOverview}
                target='_blank'
                rel='noopener noreferrer'
                className='cta-link cta-link-ink'>
                Termin vereinbaren <ArrowUpRight />
              </a>
              <Link
                href='/cranio/'
                className='text-[0.875rem] text-ink-600 transition-colors hover:text-ink'>
                Cranio ansehen
              </Link>
              <Link
                href='/yoga/'
                className='text-[0.875rem] text-ink-600 transition-colors hover:text-ink'>
                Yoga ansehen
              </Link>
            </div>
          </div>

          <div className='order-1 lg:order-2 lg:col-span-6 lg:col-start-7' data-reveal>
            <Photo
              src='/image/ueber-mich.webp'
              alt='Stefanie Kaindl sitzt lächelnd auf einem Sessel in ihrer Praxis'
              ratio='aspect-[4/5]'
              position='50% 30%'
              sizes='(max-width: 1024px) 100vw, 50vw'
              priority
            />
          </div>
        </div>
      </header>

      {/* Mein Weg */}
      <section className='section pt-0'>
        <div className='shell'>
          <div className='grid gap-12 lg:grid-cols-12 lg:gap-0'>
            <div className='lg:col-span-3'>
              <span className='label'>Mein Weg</span>
            </div>

            <div className='lg:col-span-8 lg:col-start-5'>
              <div className='max-w-2xl space-y-5 text-[1.0625rem] leading-relaxed text-ink-700'>
                {JOURNEY.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
                <p>
                  Ich freue mich darauf, dich auf deinem Weg zu mehr Klarheit, Lebenskraft und
                  innerer Balance zu begleiten.
                </p>
              </div>

              <p className='mt-10 max-w-2xl border-t border-[var(--line)] pt-6 text-[0.9375rem] text-ink-600'>
                Von Herzen,
                <span className='serif mt-1 block text-[1.5rem] leading-none text-ink'>Steffi</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ausbildung */}
      <section className='section bg-[var(--paper-deep)]'>
        <div className='shell'>
          <div className='grid gap-12 lg:grid-cols-12 lg:gap-0'>
            <div className='lg:col-span-5'>
              <span className='label'>Ausbildung</span>
              <h2 className='display display-serif d2 mt-6'>Ausbildung &amp; Qualifikationen.</h2>
            </div>

            <div className='lg:col-span-6 lg:col-start-7'>
              <dl>
                {QUALIFICATIONS.map((q) => (
                  <div
                    key={q.title}
                    className='border-t border-[var(--line)] py-6 last:border-b'
                    data-reveal>
                    <dt className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1'>
                      <span className='text-[1.0625rem] text-ink'>{q.title}</span>
                      <span className='text-[0.8125rem] text-ink-500'>{q.detail}</span>
                    </dt>
                    <dd className='mt-2 max-w-lg text-[0.875rem] leading-relaxed text-ink-600'>
                      {q.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section className='relative overflow-hidden bg-[var(--olive)] text-[var(--cream)]'>
        <div className='shell py-[clamp(4rem,8vw,8.5rem)]'>
          <div className='mx-auto max-w-[48rem] text-center'>
            <span className='label label-inverse'>Meine Haltung</span>
            <p className='quote quote-cream mt-8'>
              &bdquo;Die Craniosacrale Arbeit ist für mich weit mehr als eine Technik – sie ist eine
              Begegnung auf Augenhöhe, eine Einladung zum Loslassen, zur inneren Ruhe und
              Selbstheilung.&ldquo;
            </p>
            <p className='mt-6 text-[0.8125rem] text-[var(--cream-70)]'>Stefanie Kaindl</p>
          </div>

          <dl className='mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-3'>
            {PRINCIPLES.map((principle, i) => (
              <div key={principle.title} className='border-t border-[var(--cream-line)] pt-6'>
                <span className='text-[0.6875rem] tabular-nums text-[var(--cream-70)]'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <dt className='serif mt-3 text-[1.25rem] leading-tight text-[var(--cream)]'>
                  {principle.title}
                </dt>
                <dd className='mt-3 text-[0.875rem] leading-relaxed text-[var(--cream-80)]'>
                  {principle.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className='section'>
        <div className='shell'>
          <SectionHead label='Kennenlernen' title='Lass uns sprechen.'>
            <p className='lead-lg mt-7'>
              Hast du Fragen zur Craniosacralen Körperarbeit oder möchtest du einen Termin
              vereinbaren? Ich freue mich darauf, dich kennenzulernen und dich auf deinem Weg zu
              begleiten.
            </p>
            <div className='mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-4'>
              <Link href='/kontakt/' className='cta-link cta-link-ink'>
                Kontakt aufnehmen <ArrowUpRight />
              </Link>
              <a
                href={BOOKING.cranioOverview}
                target='_blank'
                rel='noopener noreferrer'
                className='cta-link cta-link-ink'>
                Termin buchen <ArrowUpRight />
              </a>
            </div>
          </SectionHead>
        </div>
      </section>
    </>
  );
}

export default Content;
