'use client';

import Link from 'next/link';
import { ArrowUpRight } from '@/components/icons';
import { BOOKING, Photo, PriceRow, SectionHead, useReveal } from '@/components/editorial';

/**
 * Cranio — Angebotsseite: was Craniosacrale Körperarbeit ist, wobei sie hilft,
 * wie eine Sitzung abläuft, was sie kostet und wie man bucht.
 *
 * Alle Preise, Zeiten und Bedingungen stammen aus der Praxis (vormals
 * /angebote-preise); die Ausbildungen von /ueber-mich.
 */

const STEPS = [
  {
    title: 'Vorgespräch',
    body: 'Ausführliche Anamnese und Klärung deiner Anliegen — in Ruhe, mit so viel Zeit wie nötig.',
  },
  {
    title: 'Behandlung',
    body: 'Sanfte craniosacrale Techniken in entspannter Atmosphäre. Die Berührung bleibt leicht.',
  },
  {
    title: 'Nachruhe',
    body: 'Zeit zum Nachspüren und Ankommen, ohne aufstehen zu müssen.',
  },
  {
    title: 'Nachbesprechung',
    body: 'Reflexion und Empfehlungen für zu Hause.',
  },
];

const ADULTS = [
  'Chronische Schmerzen und Verspannungen',
  'Stress und Burnout-Symptome',
  'Schlafstörungen und innere Unruhe',
  'Migräne und Kopfschmerzen',
  'Beschwerden in der Schwangerschaft',
  'Allgemeine Entspannung und Prävention',
];

const KIDS = [
  'Schlafprobleme und Unruhe',
  'Konzentrationsschwierigkeiten',
  'Nach der Geburt und bei Geburtstrauma-Folgen',
  'Entwicklungsverzögerungen',
  'Emotionale Belastungen',
];

export function Content() {
  useReveal();

  return (
    <>
      {/* Einstieg */}
      <header className='shell pb-[clamp(3rem,6vw,5rem)] pt-[clamp(8.5rem,14vw,12rem)]'>
        <div className='grid items-center gap-12 lg:grid-cols-12 lg:gap-0'>
          <div className='lg:col-span-6' data-reveal>
            <Photo
              src='/image/erwachsene.webp'
              alt='Stefanie Kaindl legt während einer Behandlung die Hände sanft an die Stirn'
              ratio='aspect-[4/5]'
              position='50% 35%'
              sizes='(max-width: 1024px) 100vw, 50vw'
              priority
            />
          </div>

          <div className='lg:col-span-5 lg:col-start-8'>
            <span className='label'>Cranio</span>
            <h1 className='display display-serif d1-hero mt-6'>Craniosacrale Körperarbeit</h1>
            <p className='lead-lg mt-7'>
              Eine sanfte, achtsame Berührung mit einem Druck von nur etwa fünf Gramm. Sie lädt
              deinen Körper ein, aus der Anspannung zu finden und zurück in seinen eigenen Rhythmus
              zu kommen — bei Schmerzen und Stress, nach der Geburt, oder einfach, um zur Ruhe zu
              kommen.
            </p>
            <div className='mt-9 flex flex-wrap items-center gap-x-10 gap-y-4'>
              <a href='#termin' className='cta-link cta-link-ink'>
                Termin buchen <ArrowUpRight />
              </a>
              <a href='#preise' className='text-[0.875rem] text-ink-600 transition-colors hover:text-ink'>
                Zu den Preisen
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Wobei sie hilft */}
      <section className='section pt-0'>
        <div className='shell'>
          <SectionHead label='Wobei sie hilft' title='Für Erwachsene und für Kinder.' />

          <div className='mt-14 grid gap-12 md:grid-cols-2 md:gap-16'>
            {[
              {
                title: 'Erwachsene',
                meta: 'ca. 60 Minuten · 73 €',
                src: '/image/behandlung_2.webp',
                alt: 'Sanfte Berührung an den Füßen während einer Behandlung',
                items: ADULTS,
              },
              {
                title: 'Babys & Kinder',
                meta: '20 – 40 Minuten · 53 €',
                src: '/image/4.webp',
                alt: 'Kerzen, Handtücher und eine kleine Pflanze im Behandlungsraum',
                items: KIDS,
              },
            ].map((group) => (
              <div key={group.title} data-reveal>
                <Photo
                  src={group.src}
                  alt={group.alt}
                  ratio='aspect-[4/3]'
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
                <p className='meta-line mt-5'>{group.meta}</p>
                <h3 className='display display-serif d3 mt-2'>{group.title}</h3>
                <ul className='mt-5 space-y-2.5'>
                  {group.items.map((item) => (
                    <li key={item} className='flex items-start gap-3 text-[0.875rem] text-ink-700'>
                      <span aria-hidden className='mt-[0.55rem] h-1 w-1 flex-none rounded-full bg-ink-500' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className='relative overflow-hidden bg-[var(--olive)] text-[var(--cream)]'>
        <div className='shell py-[clamp(4rem,8vw,8.5rem)]'>
          <span className='label label-inverse'>Ablauf</span>
          <h2 className='display display-serif d2 mt-6 max-w-2xl text-[var(--cream)]'>
            Was in einer Sitzung passiert.
          </h2>

          <ol className='mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
            {STEPS.map((step, i) => (
              <li key={step.title} className='border-t border-[var(--cream-line)] pt-6'>
                <span className='text-[0.6875rem] tabular-nums text-[var(--cream-70)]'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className='serif mt-3 text-[1.25rem] leading-tight text-[var(--cream)]'>
                  {step.title}
                </h3>
                <p className='mt-3 text-[0.875rem] leading-relaxed text-[var(--cream-80)]'>
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Preise */}
      <section className='section' id='preise'>
        <div className='shell'>
          <SectionHead label='Preise' title='Was eine Behandlung kostet.' />

          <div className='mx-auto mt-14 max-w-4xl'>
            <PriceRow
              title='Cranio für Erwachsene'
              meta='ca. 60 Minuten'
              body='Inklusive ausführlichem Vorgespräch, Nachruhe und Nachbesprechung. Termine nach Vereinbarung.'
              price='73 €'
              unit='Behandlung'
              cta='Termin buchen'
              href={BOOKING.cranioAdults}
            />
            <PriceRow
              title='5er-Paket'
              meta='5 Behandlungen'
              body='Fünf Behandlungen im Voraus — 50 € gespart, flexibel planbar. Auf Wunsch mit Rechnung für Steuer oder Krankenkasse.'
              price='400 €'
              unit='Paket'
              cta='Paket anfragen'
              href={BOOKING.cranioOverview}
            />
            <PriceRow
              title='Cranio für Babys & Kinder'
              meta='20 – 40 Minuten'
              body='Altersgerecht und spielerisch, mit viel Zeit und Ruhe. Termine online oder telefonisch.'
              price='53 €'
              unit='Behandlung'
              cta='Termin buchen'
              href={BOOKING.cranioKids}
            />
            <PriceRow
              title='Erstberatung'
              meta='30 Minuten'
              body='Unverbindliches Kennenlerngespräch mit Anamnese und Behandlungsplanung — wenn du erst schauen möchtest.'
              price='40 €'
              unit='Gespräch'
              cta='Kennenlernen'
              href={BOOKING.cranioOverview}
            />

            <dl className='mt-14 grid gap-x-10 gap-y-6 border-t border-[var(--line)] pt-8 sm:grid-cols-2'>
              {[
                ['Terminvereinbarung', 'Telefonisch oder online — Mo – Fr nach Vereinbarung.'],
                ['Stornierung', 'Kostenfrei bis 24 h vorher; danach wird die volle Gebühr fällig.'],
                ['Zahlung', 'Bar oder per PayPal. Rechnung für Steuer und Krankenkasse auf Wunsch.'],
                ['Kostenerstattung', 'Manche Zusatzversicherungen übernehmen die Kosten.'],
                ['Hausbesuche', 'In besonderen Situationen nach Absprache möglich.'],
                ['Qualifikation', 'Ausbildung bei Katharina Bähner (2024) und Weiterbildung Kinder-Cranio.'],
              ].map(([title, value]) => (
                <div key={title}>
                  <dt className='text-[0.9375rem] text-ink'>{title}</dt>
                  <dd className='mt-1.5 text-[0.875rem] leading-relaxed text-ink-600'>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Termin */}
      <section id='termin' className='bg-[var(--paper-deep)]'>
        <div className='shell py-[clamp(4rem,8vw,8rem)]'>
          <div className='mx-auto max-w-[40rem] text-center'>
            <span className='label'>Termin</span>
            <h2 className='display display-serif d2 mt-6'>Dein erster Termin.</h2>
            <p className='lead-lg mt-7'>
              Such dir einen Termin aus, der dir passt. Wenn du unsicher bist, ob Cranio das
              Richtige für dich ist, beginne mit der Erstberatung — oder ruf einfach an.
            </p>
            <div className='mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-4'>
              <a
                href={BOOKING.cranioAdults}
                target='_blank'
                rel='noopener noreferrer'
                className='cta-link cta-link-ink'>
                Termin online buchen <ArrowUpRight />
              </a>
              <a
                href={BOOKING.cranioKids}
                target='_blank'
                rel='noopener noreferrer'
                className='cta-link cta-link-ink'>
                Termin für Kinder <ArrowUpRight />
              </a>
            </div>

            <div className='mt-12 grid gap-6 border-t border-[var(--line)] pt-8 text-left sm:grid-cols-2'>
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
                <p className='meta-line'>Kontakt</p>
                <p className='mt-1.5 text-[0.875rem] leading-relaxed text-ink'>
                  <a href='tel:+4917663094476' className='hover:underline'>
                    0176 63094476
                  </a>
                  <br />
                  <a href='mailto:info@stefanie-kaindl-cranio.de' className='hover:underline'>
                    info@stefanie-kaindl-cranio.de
                  </a>
                </p>
                <Link
                  href='/kontakt/'
                  className='mt-2 inline-block text-[0.875rem] text-ink-600 hover:text-ink'>
                  Anfahrt ansehen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
