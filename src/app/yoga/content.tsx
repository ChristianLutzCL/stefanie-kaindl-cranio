'use client';

import Link from 'next/link';
import React from 'react';
import { ArrowUpRight } from '@/components/icons';
import { BOOKING, Photo, SectionHead, useReveal } from '@/components/editorial';

/**
 * Yoga — Angebotsseite: was erwartet wird, die beiden Donnerstagskurse mit
 * Preis, die nächsten Termine, der Yoga Day und die Platzreservierung.
 *
 * Kurszeiten, Preis, Ort (Paunzhausen), EGYM Wellpass und die Terminliste
 * stammen aus der bestehenden Yoga-Seite. Die Terminliste wird weiterhin von
 * Hand gepflegt.
 */

const COURSES = [
  {
    title: 'Kurs 1',
    time: '17:30 – 18:30 Uhr',
    detail: 'Sanfte Praxis zum bewussten Ankommen und Entspannen.',
  },
  {
    title: 'Kurs 2',
    time: '19:00 – 20:00 Uhr',
    detail: 'Fließende Sequenzen für Klarheit, Kraft und Ruhe.',
  },
];

const EXPECT = [
  'Sanfte bis dynamische Yoga-Einheiten',
  'Achtsame Atemtechniken',
  'Tiefenentspannung für mehr innere Ruhe',
  'Beweglichkeit, Kraft und Körperwahrnehmung',
  'Für Anfänger und Fortgeschrittene geeignet',
];

/* Termine von Hand pflegen (jeweils Donnerstage). */
const YOGA_DATES = [
  '15.10.2026',
  '22.10.2026',
  '29.10.2026',
  '12.11.2026',
  '26.11.2026',
  '03.12.2026',
  '10.12.2026',
];

const MONTHS: Record<string, string> = {
  '01': 'Januar',
  '02': 'Februar',
  '03': 'März',
  '04': 'April',
  '05': 'Mai',
  '06': 'Juni',
  '07': 'Juli',
  '08': 'August',
  '09': 'September',
  '10': 'Oktober',
  '11': 'November',
  '12': 'Dezember',
};

const YOGA_DAY = {
  title: 'Yoga Day – Wurzeln & Loslassen',
  date: 'Samstag, 07.11.2026',
  time: '10:00 – 17:00 Uhr',
  place: 'Yogaraum Paunzhausen · genauer Ort bei Anmeldung',
  /* Frühbucherpreis bis zum Stichtag, danach der reguläre Preis. */
  priceEarly: '111 € bei Anmeldung bis 30.09.2026, danach 129 €',
  priceRegular: '129 €',
  body: 'Ein Tag, um anzukommen, loszulassen und neue Kraft zu schöpfen. Herbstlicher Vinyasa Flow, Yin Yoga, Herzchakra-Meditation und Kristallklangschalen — mit vegetarischem Mittagessen, Tee, Wasser und kleinen Snacks sowie einem Armband mit deiner Intention. Maximal 10 Plätze.',
};

export function Content() {
  useReveal();

  /* „Heute" erst nach dem Mounten ermitteln: Das Server-Markup kennt kein
     Datum, ein sofortiger Filter würde eine Hydration-Abweichung erzeugen.
     Bis dahin zeigt die Seite die vollständige Liste. */
  const [heute, setHeute] = React.useState<Date | null>(null);
  React.useEffect(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    setHeute(now);
  }, []);

  /* Vergangene Donnerstage fallen aus der Liste. */
  const termine = YOGA_DATES.filter((date) => {
    if (!heute) return true;
    const [day, month, year] = date.split('.').map(Number);
    return new Date(year, month - 1, day) >= heute;
  });

  /* Frühbucherpreis nur bis zum Stichtag. */
  const fruehbucher = !heute || heute <= new Date(2026, 8, 30);
  const yogaDayPreis = fruehbucher ? YOGA_DAY.priceEarly : YOGA_DAY.priceRegular;

  return (
    <>
      {/* Einstieg */}
      <header data-review='Yoga · Seitenkopf' className='shell pb-[clamp(3rem,6vw,5rem)] pt-[clamp(8.5rem,14vw,12rem)]'>
        <div className='grid items-center gap-12 lg:grid-cols-12 lg:gap-0'>
          <div className='order-2 lg:order-1 lg:col-span-5'>
            <span className='label'>Yoga</span>
            <h1 className='display display-serif d1-hero mt-6'>Yoga am Donnerstag</h1>
            <p className='lead-lg mt-7'>
              Eine bewusste Auszeit vom Alltag. In meinen Stunden verbinden sich Bewegung, Atmung
              und Entspannung — sanft bis dynamisch, achtsam an die Gruppe angepasst und offen für
              alle, die Yoga gerade erst für sich entdecken.
            </p>
            <div className='mt-9 flex flex-wrap items-center gap-x-10 gap-y-4'>
              <a href='#termin' className='cta-link cta-link-ink'>
                Platz reservieren <ArrowUpRight />
              </a>
              <a
                href='#kurse'
                className='text-[0.875rem] text-ink-600 transition-colors hover:text-ink'>
                Kurszeiten ansehen
              </a>
            </div>
          </div>

          <div className='order-1 lg:order-2 lg:col-span-6 lg:col-start-7' data-reveal>
            <Photo
              src='/image/yoga.webp'
              alt='Stefanie Kaindl in einer Yoga-Haltung auf der Matte'
              ratio='aspect-[4/5]'
              position='38% 50%'
              sizes='(max-width: 1024px) 100vw, 50vw'
              priority
            />
          </div>
        </div>
      </header>

      {/* Was dich erwartet */}
      <section data-review='Yoga · Deine Stunde' className='section pt-0'>
        <div className='shell'>
          <div className='grid gap-12 lg:grid-cols-12 lg:gap-0'>
            <div className='lg:col-span-5'>
              <span className='label'>Deine Stunde</span>
              <h2 className='display display-serif d2 mt-6'>Yoga für Körper und Geist.</h2>
              <p className='mt-6 text-[0.9375rem] leading-relaxed text-ink-700'>
                Die Stunden sind sanft bis dynamisch und richten sich nach der Gruppe. Du
                entscheidest, wie viel du heute brauchst — nichts muss, alles darf.
              </p>
            </div>

            <div className='lg:col-span-6 lg:col-start-7'>
              <ul className='border-t border-[var(--line)]'>
                {EXPECT.map((item) => (
                  <li
                    key={item}
                    className='flex items-start gap-3 border-b border-[var(--line)] py-4 text-[0.9375rem] text-ink-700'>
                    <span
                      aria-hidden
                      className='mt-[0.6rem] h-1 w-1 flex-none rounded-full bg-ink-500'
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kurse */}
      <section data-review='Yoga · Kurse' className='section bg-[var(--paper-deep)]' id='kurse'>
        <div className='shell'>
          <SectionHead label='Kurse' title='Zwei Kurse am Donnerstag.'>
            <p className='mt-6 text-[0.9375rem] leading-relaxed text-ink-600'>
              Beide Kurse finden donnerstags in Paunzhausen statt, in kleinen Gruppen. Du kannst
              spontan kommen — zum ruhigen Ankommen oder für einen kraftvollen Flow zum Ausklang.
            </p>
          </SectionHead>

          <div className='mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2'>
            {COURSES.map((course) => (
              <div key={course.title} className='border-t border-[var(--line)] pt-6' data-reveal>
                <span className='label'>{course.title}</span>
                <p className='serif mt-4 text-[clamp(1.5rem,2.2vw,2rem)] leading-none text-ink'>
                  {course.time}
                </p>
                <p className='mt-3 text-[0.9375rem] leading-relaxed text-ink-600'>{course.detail}</p>
              </div>
            ))}
          </div>

          <div className='mx-auto mt-14 grid max-w-4xl gap-x-10 gap-y-6 border-t border-[var(--line)] pt-8 sm:grid-cols-3'>
            {[
              ['Preis', '14 € pro Stunde'],
              ['Ort', 'Paunzhausen · Yogaraum'],
              ['Zahlung', 'Vor Ort oder mit EGYM Wellpass'],
            ].map(([title, value]) => (
              <div key={title}>
                <p className='meta-line'>{title}</p>
                <p className='mt-1.5 text-[0.9375rem] text-ink'>{value}</p>
              </div>
            ))}
          </div>
          <p className='mx-auto mt-6 max-w-4xl text-[0.8125rem] text-ink-500'>
            Enthalten sind craniosacrale Impulse, persönliche Begleitung und eine ruhige
            Atmosphäre in kleinen Gruppen. Matten und Hilfsmittel sind vor Ort.
          </p>
        </div>
      </section>

      {/* Termine */}
      <section data-review='Yoga · Nächste Donnerstage' className='section'>
        <div className='shell'>
          <div className='grid gap-12 lg:grid-cols-12 lg:gap-0'>
            <div className='lg:col-span-5'>
              <span className='label'>Termine</span>
              <h2 className='display display-serif d2 mt-6'>Nächste Donnerstage.</h2>
              <p className='mt-6 text-[0.9375rem] leading-relaxed text-ink-700'>
                Kurs 1 startet um 17:30 Uhr, Kurs 2 um 19:00 Uhr. Sag mir einfach, welcher Termin
                und welche Uhrzeit dir passt — ich melde mich persönlich mit allen Details.
              </p>
              <a
                href={BOOKING.yoga}
                target='_blank'
                rel='noopener noreferrer'
                className='cta-link cta-link-ink mt-8'>
                Platz reservieren <ArrowUpRight />
              </a>
            </div>

            <div className='lg:col-span-6 lg:col-start-7'>
              {termine.length === 0 && (
                <p className='text-[0.9375rem] leading-relaxed text-ink-600'>
                  Die nächsten Termine sind noch nicht eingetragen.
                </p>
              )}
              <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
                {termine.map((date) => {
                  const [day, month, year] = date.split('.');
                  return (
                    <li
                      key={date}
                      className='border border-[var(--line)] px-4 py-5 text-center'
                      data-reveal>
                      <span className='serif block text-[1.75rem] leading-none text-ink'>
                        {parseInt(day, 10)}
                      </span>
                      <span className='mt-2 block text-[0.8125rem] text-ink-600'>
                        {MONTHS[month] ?? month}
                      </span>
                      <span className='meta-line mt-1 block'>{year}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga Day */}
      <section data-review='Yoga · Yoga Day' className='section pt-0'>
        <div className='shell'>
          <div className='grid gap-12 lg:grid-cols-12 lg:gap-0'>
            <div className='lg:col-span-6' data-reveal>
              {/* Der Flyer ist quadratisch (1254 × 1254). In einer 3:4-Box
                  bleiben mit `object-contain` oben und unten leere Streifen —
                  die Box muss das Format des Bildes haben. */}
              <Photo
                src='/image/yoga-day-wurzeln-loslassen.jpg'
                alt='Flyer zum Yoga Day – Wurzeln & Loslassen'
                ratio='aspect-square'
                fit='contain'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
            </div>

            <div className='lg:col-span-5 lg:col-start-8'>
              <span className='label'>Ein Tag nur für dich</span>
              <h2 className='display display-serif d3 mt-5'>{YOGA_DAY.title}</h2>
              <p className='mt-5 text-[0.9375rem] leading-relaxed text-ink-700'>{YOGA_DAY.body}</p>

              <dl className='mt-8 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-[var(--line)] pt-6'>
                {[
                  ['Datum', YOGA_DAY.date],
                  ['Uhrzeit', YOGA_DAY.time],
                  ['Ort', YOGA_DAY.place],
                  ['Preis', yogaDayPreis],
                ].map(([title, value]) => (
                  <div key={title}>
                    <dt className='meta-line'>{title}</dt>
                    <dd className='mt-1.5 text-[0.875rem] leading-snug text-ink'>{value}</dd>
                  </div>
                ))}
              </dl>

              <a
                href={BOOKING.yogaDay}
                target='_blank'
                rel='noopener noreferrer'
                className='cta-link cta-link-ink mt-8'>
                Zum Yoga Day anmelden <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Termin */}
      <section id='termin' data-review='Yoga · Platz reservieren' className='bg-[var(--olive)] text-[var(--cream)]'>
        <div className='shell py-[clamp(4rem,8vw,8rem)]'>
          <div className='mx-auto max-w-[40rem] text-center'>
            <span className='label label-inverse'>Platz reservieren</span>
            <h2 className='display display-serif d2 mt-6 text-[var(--cream)]'>
              Komm einfach vorbei.
            </h2>
            <p className='lead-lg lead-lg-cream mt-7'>
              Schreib mir kurz per WhatsApp, an welchem Donnerstag und zu welcher Uhrzeit du kommen
              möchtest — ich melde mich persönlich mit allen Details.
            </p>
            <div className='mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-4'>
              <a href={BOOKING.yoga} target='_blank' rel='noopener noreferrer' className='cta-link'>
                Platz per WhatsApp reservieren <ArrowUpRight />
              </a>
              <a href='tel:+4917663094476' className='cta-link'>
                Anrufen <ArrowUpRight />
              </a>
            </div>
            <p className='mt-12 border-t border-[var(--cream-line)] pt-6 text-[0.8125rem] text-[var(--cream-70)]'>
              Yoga gefällt dir, aber du möchtest lieber im Einzeltermin arbeiten?{' '}
              <Link href='/cranio/' className='text-[var(--cream)] underline underline-offset-4'>
                Zur Craniosacralen Körperarbeit
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
