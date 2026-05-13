import Image from 'next/image';
import Link from 'next/link';
import BookingButton from './booking-button';
import BookingStatus from './booking-status';

const highlights = [
  'Tägliche Yogapraxis',
  'Einblicke in Meditation',
  'Craniosacrale Körperarbeit',
  'Vegetarisch/vegane Küche',
  'Freiraum für See, Natur und Ruhe',
  'Yin Yoga mit Sound Bath',
];

const bookingDetails = [
  ['Datum', '8.10. - 11.10.2026'],
  ['Ort', 'Casa San Tome, Gardasee'],
  ['Preis gesamt', '600€'],
  ['Anzahlung heute', '200€'],
];

const schedule = [
  {
    day: 'Tag 1',
    date: '8. Okt',
    title: 'Anreise & Ankommen',
    entries: [
      ['ab 15:00', 'Check-in'],
      ['17:00 - 18:30', 'Yogapraxis'],
      ['ab 18:30', 'Abendessen'],
      ['20:00', 'Willkommensrunde'],
    ],
  },
  {
    day: 'Tag 2',
    date: '9. Okt',
    title: 'Yoga, freie Zeit & Meditation',
    entries: [
      ['8:00', 'Obst/Snack, Kaffee, Tee'],
      ['8:30 - 10:30', 'Yogapraxis'],
      ['10:30', 'Brunch'],
      ['Nachmittag', 'Zeit zur freien Gestaltung'],
      ['17:00 - 18:30', 'Yin Yoga und Sound Bath mit Kristallklangschalen'],
      ['18:30', 'Abendessen'],
      ['20:00', 'Meditation'],
    ],
  },
  {
    day: 'Tag 3',
    date: '10. Okt',
    title: 'Vertiefung & sanfte Praxis',
    entries: [
      ['8:00', 'Obst/Snack, Kaffee, Tee'],
      ['8:30 - 10:30', 'Yogapraxis'],
      ['10:30', 'Brunch'],
      ['Nachmittag', 'Zeit zur freien Gestaltung'],
      ['17:00 - 18:30', 'Sanfte Yogapraxis'],
      ['18:30', 'Abendessen'],
    ],
  },
  {
    day: 'Tag 4',
    date: '11. Okt',
    title: 'Ausklang & Heimreise',
    entries: [
      ['8:00', 'Obst/Snack, Kaffee, Tee'],
      ['8:30 - 10:30', 'Yogapraxis'],
      ['10:30', 'Brunch und gemeinsamer Ausklang'],
    ],
  },
];

const faqs = [
  [
    'Wie hoch ist der Preis für das Retreat?',
    'Der Gesamtpreis beträgt 600€. Die Anzahlung beträgt 200€.',
  ],
  [
    'Wann ist die Restzahlung fällig?',
    'Nach der Anzahlung von 200€ erhältst du eine Bestätigung. Die restlichen 400€ bezahlst du beim Retreat vor Ort in bar.',
  ],
  [
    'Wann findet das Retreat statt?',
    'Das Retreat findet vom 8.10.2026 bis 11.10.2026 statt.',
  ],
  ['Wo findet das Retreat statt?', 'Im Casa San Tome am nördlichen Ende des Gardasees.'],
  [
    'Für wen ist das Retreat geeignet?',
    'Für alle, die sich eine bewusste Auszeit wünschen: bei Stress, mentaler Überlastung, körperlicher Erschöpfung oder einfach zur Regeneration.',
  ],
  [
    'Was ist im Retreat enthalten?',
    'Im Preis enthalten sind Unterkunft, 3 x Brunch, 3 x Abendessen, Obst, Wasser und Tee sowie das Yogaprogramm mit Barbara und Steffi.',
  ],
  [
    'Sind Bettwäsche und Handtücher inklusive?',
    'Bettwäsche und Handtücher sind nicht im Preis inkludiert. Du kannst sie selbst mitbringen oder für 20€ Aufpreis vor Ort erhalten.',
  ],
  [
    'Können Allergien oder Unverträglichkeiten berücksichtigt werden?',
    'Ja. Bekannte Allergien oder Unverträglichkeiten werden von unserem Koch berücksichtigt. Bitte gib sie bei der Anmeldung an.',
  ],
  [
    'Welche Zimmer gibt es?',
    'Es sind nur Mehrbettzimmer vorhanden. Einzelzimmer sind leider nicht verfügbar.',
  ],
  [
    'Brauche ich Yoga-Erfahrung?',
    'Nein. Das Retreat ist so gestaltet, dass du gut mitkommen kannst, auch wenn du wenig oder keine Yoga-Erfahrung hast.',
  ],
  [
    'Kann ich alleine teilnehmen?',
    'Ja. Du kannst sehr gerne alleine teilnehmen. Der Rahmen ist ruhig, persönlich und auf eine kleine Gruppe ausgelegt.',
  ],
  [
    'Was soll ich mitbringen?',
    'Bequeme Kleidung, etwas Warmes für ruhigere Einheiten, persönliche Dinge für deine Auszeit und alles, was dir beim Entspannen guttut.',
  ],
  [
    'Wie läuft die Buchung ab?',
    'Mit der Anzahlung von 200€ sicherst du dir deinen Platz. Die restlichen 400€ bezahlst du beim Retreat vor Ort in bar.',
  ],
  [
    'Wie komme ich zur Location?',
    'Bitte bildet nach Möglichkeit Fahrgemeinschaften, da es vor der Location nicht genügend Stellplätze gibt. Im Abschnitt Location & Anreise findest du die Karte und einen Link zur Routenplanung.',
  ],
];

export default function RetreatPage() {
  return (
    <main className='bg-cream-50'>
      <section className='relative min-h-[78vh] w-full'>
        <Image
          src='/image/retreat/lake-garda-unsplash-hero.jpg'
          alt='Retreat am Gardasee'
          fill
          priority
          className='object-cover object-center'
          sizes='100vw'
        />
        <div className='via-black/15 absolute inset-0 bg-gradient-to-b from-black/5 to-black/50' />
        <div className='container relative z-10 mx-auto flex min-h-[78vh] max-w-6xl items-end px-4 pb-16 pt-24'>
          <div className='max-w-3xl'>
            <div className='mb-5 inline-flex'>
              <Image
                src='/image/retreat/golden-summer-logo.png'
                alt='Golden Summer Retreat Logo'
                width={512}
                height={512}
                className='h-16 w-16 rounded-xl object-cover shadow-lg md:h-20 md:w-20'
              />
            </div>
            <h1 className='font-inter mb-5 text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl'>
              Golden Summer Retreat mit Barbara und Steffi
            </h1>
            <p className='font-inter mb-8 max-w-2xl text-lg leading-relaxed text-cream-100/95 md:text-xl'>
              4 Tage am Gardasee für Körper, Geist und Genuss. Komm mit uns vom{' '}
              <strong>8.10.2026 bis 11.10.2026</strong> ins Casa San Tome, verlängere das
              Prickeln des Sommers und lade dich noch einmal auf, bevor es in den Winter
              geht.
            </p>
            <div className='grid max-w-3xl gap-3 text-sm sm:grid-cols-3 md:text-base'>
              {[
                ['Location', 'Casa San Tome'],
                ['Datum', '8.10. - 11.10.2026'],
                ['Rahmen', 'Yoga, Meditation & Genuss'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className='bg-white/15 font-inter rounded-lg border border-white/25 px-4 py-3 text-white shadow-sm backdrop-blur-md'>
                  <p className='text-[10px] uppercase tracking-[0.16em] text-cream-100/75'>
                    {label}
                  </p>
                  <p className='mt-1 text-sm font-medium md:text-base'>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <BookingStatus />
          <div className='grid items-start gap-8 lg:grid-cols-[1.45fr_0.9fr]'>
            <div>
              <p className='font-inter mb-2 text-sm uppercase tracking-[0.15em] text-[#67B1B1]'>
                Retreat Überblick
              </p>
              <h2 className='font-inter mb-4 text-2xl font-light text-taupe-800 md:text-3xl'>
                Vier Tage zum Auftanken
              </h2>
              <p className='font-inter mb-8 max-w-3xl leading-relaxed text-taupe-700'>
                Dich erwartet tägliche Yogapraxis, Einblicke in Meditation und
                craniosacrale Körperarbeit sowie genügend Freiraum, um die Seele baumeln
                zu lassen. Neben der körperlichen Praxis sorgt unser eigener Koch für
                vegetarisch/vegane Gaumenfreuden.
              </p>
              <div className='grid gap-3 sm:grid-cols-2'>
                {highlights.map((item) => (
                  <div
                    key={item}
                    className='flex items-start gap-3 rounded-lg border border-cream-200 bg-white p-4'>
                    <span className='mt-2 block h-2 w-2 shrink-0 rounded-full bg-[#67B1B1]' />
                    <p className='font-inter text-taupe-700'>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className='warm-shadow overflow-hidden rounded-lg border border-cream-200 bg-white'>
              <div className='border-b border-cream-200 bg-cream-100 px-6 py-6'>
                <p className='font-inter mb-2 text-sm uppercase tracking-[0.15em] text-[#4f8e8e]'>
                  Buchung
                </p>
                <h2 className='font-inter text-2xl font-light text-taupe-800'>
                  Golden Summer Retreat
                </h2>
              </div>

              <div className='p-6'>
                <div className='mb-5 rounded-lg bg-cream-100 px-4 py-4'>
                  <p className='font-inter text-sm text-taupe-600'>Anzahlung heute</p>
                  <p className='font-inter text-3xl font-light text-taupe-800'>200€</p>
                  <p className='font-inter mt-1 text-sm leading-relaxed text-taupe-700'>
                    Restzahlung 400€ beim Retreat vor Ort in bar.
                  </p>
                </div>

                <div className='mb-5 space-y-3'>
                  {bookingDetails.map(([label, value]) => (
                    <div
                      key={label}
                      className='font-inter flex justify-between gap-4 border-b border-cream-200 pb-3 text-sm last:border-b-0 last:pb-0'>
                      <span className='text-taupe-600'>{label}</span>
                      <span className='text-right font-medium text-taupe-800'>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <BookingButton />

                <p className='font-inter mt-4 text-center text-xs leading-relaxed text-taupe-600'>
                  Sichere Buchung. Bestätigung direkt nach Abschluss.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className='bg-white py-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]'>
            <div className='relative h-80 overflow-hidden rounded-lg md:h-[460px]'>
              <Image
                src='/image/retreat/barbara-steffi.png'
                alt='Barbara und Steffi, die Veranstalterinnen des Retreats'
                fill
                className='object-cover object-center'
                sizes='(max-width: 1024px) 100vw, 520px'
              />
            </div>

            <div>
              <p className='font-inter mb-2 text-sm uppercase tracking-[0.15em] text-[#67B1B1]'>
                Mit Barbara & Steffi
              </p>
              <h2 className='font-inter mb-4 text-2xl font-light text-taupe-800 md:text-3xl'>
                Zwei Frauen, ein gemeinsamer Raum für deine Auszeit
              </h2>
              <p className='font-inter mb-6 leading-relaxed text-taupe-700'>
                Barbara und Steffi begleiten dich durch die vier Retreat-Tage am Gardasee.
                Ihre gemeinsame Haltung verbindet achtsame Yogapraxis, Meditation, Klang
                und craniosacrale Körperarbeit mit viel Wärme, Natürlichkeit und Raum für
                das, was gerade entstehen darf.
              </p>
              <div className='grid gap-3 sm:grid-cols-2'>
                {[
                  'Yoga, Meditation und Sound Bath mit Barbara und Steffi',
                  'Craniosacrale Impulse und Begleitung mit Steffi',
                  'Ein ruhiger Rahmen ohne Leistungsdruck',
                  'Persönliche Atmosphäre in kleiner Gruppe',
                ].map((item) => (
                  <div
                    key={item}
                    className='flex items-start gap-3 rounded-lg bg-cream-100 p-4'>
                    <span className='mt-2 block h-2 w-2 shrink-0 rounded-full bg-[#67B1B1]' />
                    <p className='font-inter text-sm leading-relaxed text-taupe-700'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]'>
            <div>
              <p className='font-inter mb-2 text-sm uppercase tracking-[0.15em] text-[#67B1B1]'>
                Leistungen
              </p>
              <h2 className='font-inter mb-4 text-2xl font-light text-taupe-800 md:text-3xl'>
                Was im Retreat enthalten ist
              </h2>
              <p className='font-inter leading-relaxed text-taupe-700'>
                Im Preis enthalten sind Unterkunft, 3 x Brunch, 3 x Abendessen, Obst,
                Wasser und Tee sowie das Yogaprogramm mit Barbara und Steffi.
              </p>
            </div>
            <div className='grid gap-3 sm:grid-cols-2'>
              {[
                [
                  'Tägliche Yogapraxis',
                  'Morgens und an ausgewählten Abenden mit Raum zum Ankommen und Vertiefen.',
                ],
                [
                  'Meditation & Sound Bath',
                  'Einblicke in Meditation und Yin Yoga mit Kristallklangschalen.',
                ],
                [
                  'Vegetarisch/vegane Küche',
                  'Unser eigener Koch sorgt für Brunch, Abendessen und kleine Stärkungen.',
                ],
                [
                  'Unterkunft & Freiraum',
                  'Zeit für die Umgebung, Ruhe und alles, was dein System auftanken lässt.',
                ],
              ].map(([title, text]) => (
                <div key={title} className='rounded-lg bg-cream-100 p-4'>
                  <p className='font-inter mb-1 font-medium text-taupe-800'>{title}</p>
                  <p className='font-inter text-sm leading-relaxed text-taupe-700'>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='mt-5 rounded-lg border border-[#67B1B1]/25 bg-[#67B1B1]/10 p-5'>
            <p className='font-inter mb-1 font-medium text-taupe-800'>
              Optional buchbar: Cranio Sacral Session mit Steffi
            </p>
            <p className='font-inter text-sm leading-relaxed text-taupe-700'>
              Es besteht die Möglichkeit, eine Cranio Sacral Session bei Steffi zu buchen.
              Bitte melde dich dafür vorab bei Steffi. Die Session ist nicht im
              Retreat-Preis enthalten.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-cream-50 py-20'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='mb-10 max-w-3xl'>
            <p className='font-inter mb-2 text-sm uppercase tracking-[0.15em] text-[#67B1B1]'>
              Ablauf
            </p>
            <h2 className='font-inter mb-4 text-2xl font-light text-taupe-800 md:text-3xl'>
              Vier Tage mit Struktur und Freiraum
            </h2>
            <p className='font-inter leading-relaxed text-taupe-700'>
              Die Tage verbinden gemeinsame Praxis, nährende Mahlzeiten und freie
              Nachmittage. So hast du einen klaren Rahmen und gleichzeitig genug Raum, um
              am Gardasee wirklich anzukommen.
            </p>
          </div>

          <div className='space-y-4'>
            {schedule.map((step, index) => (
              <details
                key={step.day}
                open={index === 0}
                className='group rounded-lg border border-cream-200 bg-white shadow-sm'>
                <summary className='flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 md:px-7 [&::-webkit-details-marker]:hidden'>
                  <div>
                    <p className='font-inter mb-2 text-xs uppercase tracking-[0.16em] text-[#67B1B1]'>
                      {step.day} · {step.date}
                    </p>
                    <h3 className='font-inter text-xl font-light text-taupe-800 md:text-2xl'>
                      {step.title}
                    </h3>
                  </div>
                  <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream-100 text-[#4f8e8e] transition-transform duration-200 group-open:rotate-45'>
                    +
                  </span>
                </summary>

                <div className='space-y-3 border-t border-cream-200 px-5 pb-5 pt-4 md:px-7 md:pb-6'>
                  {step.entries.map(([time, activity]) => (
                    <div
                      key={`${step.day}-${time}-${activity}`}
                      className='rounded-md bg-cream-50 px-4 py-3 md:flex md:items-baseline md:gap-4'>
                      <p className='font-inter mb-1 text-sm font-medium text-[#4f8e8e] md:mb-0 md:w-32 md:shrink-0'>
                        {time}
                      </p>
                      <p className='font-inter text-sm leading-relaxed text-taupe-700'>
                        {activity}
                      </p>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>

          <div className='mt-8 flex flex-col gap-4 rounded-lg border border-cream-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between md:p-6'>
            <div>
              <p className='font-inter mb-1 font-medium text-taupe-800'>
                Dein Platz für das Retreat
              </p>
              <p className='font-inter text-sm leading-relaxed text-taupe-700'>
                8.10. - 11.10.2026 · 600€ gesamt · 200€ Anzahlung
              </p>
            </div>
            <div className='md:min-w-64 w-full md:w-auto'>
              <BookingButton />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#67B1B1] py-14'>
        <div className='container mx-auto max-w-4xl px-4 text-center'>
          <p className='font-inter text-xl font-light leading-relaxed text-white md:text-2xl'>
            Verlängere das Prickeln des Sommers und lade dich noch einmal auf, bevor es in
            den Winter geht.
          </p>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid items-start gap-8 md:grid-cols-2'>
            <div>
              <p className='font-inter mb-2 text-sm uppercase tracking-[0.15em] text-[#67B1B1]'>
                Für dich
              </p>
              <h2 className='font-inter mb-4 text-2xl font-light text-taupe-800 md:text-3xl'>
                Körper, Geist und Genuss
              </h2>
              <p className='font-inter leading-relaxed text-taupe-700'>
                Dieses Retreat ist für Menschen gedacht, die sich noch einmal
                Sommerleichtigkeit, bewusste Bewegung, Stille und nährende Mahlzeiten
                schenken möchten.
              </p>
            </div>
            <div className='grid gap-3'>
              {[
                'Tägliche Praxis für Körper und Nervensystem',
                'Einblicke in Meditation und craniosacrale Körperarbeit',
                'Vegetarisch/vegane Gaumenfreuden von unserem eigenen Koch',
                'Freie Nachmittage für Ruhe, Natur und das, was dir guttut',
              ].map((item) => (
                <div
                  key={item}
                  className='flex items-start gap-3 rounded-lg border border-cream-200 bg-white p-4'>
                  <span className='mt-2 block h-2 w-2 shrink-0 rounded-full bg-[#67B1B1]' />
                  <p className='font-inter text-sm leading-relaxed text-taupe-700'>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='relative h-48 overflow-hidden rounded-lg'>
              <Image
                src='/image/retreat/fuer-dich-yoga-deck.jpg'
                alt='Yoga-Matten auf der Terrasse'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 33vw'
              />
            </div>
            <div className='relative h-48 overflow-hidden rounded-lg'>
              <Image
                src='/image/retreat/fuer-dich-pool.jpg'
                alt='Pool im Garten der Unterkunft'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 33vw'
              />
            </div>
            <div className='relative h-48 overflow-hidden rounded-lg sm:col-span-2 lg:col-span-1'>
              <Image
                src='/image/retreat/fuer-dich-room.jpg'
                alt='Heller Wohnraum in der Unterkunft'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 33vw'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
            <div className='max-w-3xl'>
              <p className='font-inter mb-2 text-sm uppercase tracking-[0.15em] text-[#67B1B1]'>
                Location & Anreise
              </p>
              <h2 className='font-inter mb-3 text-2xl font-light text-taupe-800 md:text-3xl'>
                Casa San Tome am Gardasee
              </h2>
              <p className='font-inter leading-relaxed text-taupe-700'>
                Das Casa San Tome liegt in den Bergen am nördlichen Ende des Gardasees mit
                Panoramablick auf das glitzernde Wasser und die majestätische Bergkulisse.
                Ein Rückzugsort, in dem die Zeit langsamer läuft und der Lärm des Alltags
                durch den Klang der umgebenden Natur ersetzt wird.
              </p>
            </div>
            <Link
              href='https://www.google.com/maps?q=VWJ3%2B965%20Mori%2C%20Autonome%20Provinz%20Trient%2C%20Italien'
              target='_blank'
              rel='noopener noreferrer'
              className='font-inter inline-flex items-center justify-center rounded-full bg-[#67B1B1] px-5 py-2.5 text-white transition-all duration-300 hover:bg-[#5a9999]'>
              Route in Google Maps öffnen
            </Link>
          </div>

          <div className='grid gap-6 lg:grid-cols-[1fr_1fr]'>
            <div>
              <div className='relative mb-4 h-64 overflow-hidden rounded-lg md:h-80'>
                <Image
                  src='/image/retreat/casa-san-tome-location.jpg'
                  alt='Casa San Tome und Umgebung'
                  fill
                  className='object-cover'
                  sizes='(max-width: 1024px) 100vw, 560px'
                />
              </div>
              <div className='grid gap-3 sm:grid-cols-2'>
                {[
                  [
                    'Ruhige Lage',
                    'Abseits vom Trubel, mit viel Natur und Blick auf See und Berge.',
                  ],
                  [
                    'Pool & Garten',
                    'Außenbereiche zum Entspannen, Nachspüren und Regenerieren.',
                  ],
                  [
                    'Retreat-Atmosphäre',
                    'Klarer, achtsamer Rahmen für Yoga, Körperarbeit und echte Auszeit.',
                  ],
                  [
                    'Anreise',
                    'Bitte bildet Fahrgemeinschaften, da vor Ort nur begrenzt Stellplätze verfügbar sind.',
                  ],
                ].map(([title, text]) => (
                  <div key={title} className='rounded-lg bg-cream-100 p-4'>
                    <p className='font-inter mb-1 font-medium text-taupe-800'>{title}</p>
                    <p className='font-inter text-sm leading-relaxed text-taupe-700'>
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className='min-h-[460px] overflow-hidden rounded-lg border border-cream-200 bg-cream-50'>
              <iframe
                title='Karte zur Retreat-Location'
                src='https://www.google.com/maps?q=VWJ3%2B965%20Mori%2C%20Autonome%20Provinz%20Trient%2C%20Italien&z=10&output=embed'
                className='h-full min-h-[460px] w-full'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>

          <div className='mt-5 flex flex-col gap-3 rounded-lg bg-cream-100 p-4 sm:flex-row sm:items-center sm:justify-between'>
            <p className='font-inter text-sm leading-relaxed text-taupe-700'>
              Mehr Informationen zur Unterkunft findest du auf der offiziellen Website von
              Casa San Tome.
            </p>
            <Link
              href='https://casasantome.it/de/'
              target='_blank'
              rel='noopener noreferrer'
              className='font-inter inline-flex items-center justify-center rounded-full border border-cream-300 bg-white px-4 py-2 text-taupe-800 transition-all duration-300 hover:bg-cream-50'>
              Zur Website
            </Link>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='mb-8 max-w-3xl'>
            <p className='font-inter mb-2 text-sm uppercase tracking-[0.15em] text-[#67B1B1]'>
              Gut zu wissen
            </p>
            <h2 className='font-inter text-2xl font-light text-taupe-800 md:text-3xl'>
              FAQ
            </h2>
          </div>
          <div className='divide-y divide-cream-200 rounded-lg border border-cream-200 bg-white'>
            {faqs.map(([question, answer]) => (
              <details key={question} className='group'>
                <summary className='font-inter flex cursor-pointer list-none items-center justify-between gap-6 p-5 font-medium text-taupe-800 transition-colors duration-200 hover:text-[#4f8e8e] md:p-6 [&::-webkit-details-marker]:hidden'>
                  <span>{question}</span>
                  <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream-100 text-[#4f8e8e] transition-transform duration-200 group-open:rotate-45'>
                    +
                  </span>
                </summary>
                <p className='font-inter px-5 pb-5 text-sm leading-relaxed text-taupe-700 md:px-6 md:pb-6'>
                  {answer}
                </p>
              </details>
            ))}
          </div>

          <div className='mt-8 rounded-lg bg-[#67B1B1] p-6 text-white md:flex md:items-center md:justify-between md:gap-8'>
            <div className='mb-5 md:mb-0'>
              <p className='font-inter mb-1 text-xl font-light'>
                Bereit für vier Tage am Gardasee?
              </p>
              <p className='font-inter text-white/85 text-sm leading-relaxed'>
                Mit der Anzahlung von 200€ sicherst du dir deinen Platz.
              </p>
            </div>
            <Link
              href='https://book.stripe.com/7sY4gy43abxQ27N6x8aEE00'
              target='_blank'
              rel='noopener noreferrer'
              className='font-inter inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-[#4f8e8e] shadow-md transition-all duration-300 hover:bg-cream-50 md:w-auto'>
              Retreat jetzt buchen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
