import Link from 'next/link';

/**
 * Hero „Editorial Olive" — nach der Referenz:
 * vollflächiges Foto, darüber das Vier-Spalten-Haarlinienraster (das in der
 * Kopfzeile weiterläuft), ein großer dünner Kreis hinter der Überschrift und
 * mittig: Segment-Pillen der Disziplinen, die Serif-Headline in zwei Zeilen und
 * ein schlichter Pfeil-Link. Am unteren Rand die Meta-Zeile.
 */

const PILLS = ['Cranio', 'Yoga', 'Babys & Kinder'];

export default function Hero() {
  return (
    <section className='relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#22241a] text-[var(--cream)]'>
      <div
        aria-hidden
        className='absolute inset-0 bg-cover bg-no-repeat'
        style={{
          backgroundImage: "url('/image/hero.webp')",
          backgroundPosition: '50% 38%',
        }}
      />
      <span aria-hidden className='absolute inset-0 bg-[#211c15]/45' />
      <span aria-hidden className='absolute inset-0 bg-[#6b7250] mix-blend-multiply opacity-20' />
      <span
        aria-hidden
        className='absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(29,28,23,0.55)_0%,rgba(29,28,23,0.3)_48%,rgba(29,28,23,0.12)_72%,rgba(29,28,23,0.05)_100%)]'
      />
      <span
        aria-hidden
        className='absolute inset-0 bg-gradient-to-b from-[#1d1c17]/45 via-[#1d1c17]/10 to-[#1d1c17]/85'
      />

      {/* Spaltenraster — dieselben Linien wie in der Kopfzeile */}
      <div aria-hidden className='colgrid colgrid-inverse pointer-events-none absolute inset-0 grid'>
        {[0, 1, 2, 3].map((i) => (
          <span key={i} />
        ))}
      </div>

      {/* Großer dünner Kreis hinter der Überschrift */}
      <span
        aria-hidden
        className='pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(150vw,1040px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--cream-15)]'
      />

      <div className='shell relative z-10 flex flex-1 flex-col justify-center pb-16 pt-32 text-center md:pt-40'>
        {/* Segment-Pillen */}
        <div className='mx-auto inline-flex items-center rounded-full border border-[var(--cream-line)] bg-[#1d1c17]/35 backdrop-blur-sm'>
          {PILLS.map((item, i) => (
            <span
              key={item}
              className={`px-4 py-2 text-[0.6875rem] text-[var(--cream-70)] md:px-5 ${
                i > 0 ? 'border-l border-[var(--cream-line)]' : ''
              }`}>
              {item}
            </span>
          ))}
        </div>

        <h1 className='display display-serif d1-hero mt-8 text-[var(--cream)]'>
          Raum, um anzukommen.
          <br />
          Zeit, um <em>loszulassen</em>.
        </h1>

        <div className='mt-9'>
          <a
            href='https://calendly.com/stefanie-kaindl-cranio'
            target='_blank'
            rel='noopener noreferrer'
            className='arrow-link arrow-link-inverse'>
            Termin vereinbaren <span aria-hidden>↗</span>
          </a>
        </div>
      </div>

      {/* Meta-Zeile */}
      <div className='shell relative z-10 pb-10'>
        <div className='hairline-inverse' />
        <dl className='grid gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-4'>
          {[
            ['Behandlung', 'ca. 60 Minuten · 73 €'],
            ['Termine', 'Mo – Fr nach Vereinbarung'],
            ['Yoga', 'Donnerstag 17:30 & 19:00'],
            ['Praxis', 'Bahnstraße 2a · Pfaffenhofen'],
          ].map(([term, value]) => (
            <div key={term}>
              <dt className='text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--cream-60)]'>
                {term}
              </dt>
              <dd className='mt-2 text-[0.875rem] text-[var(--cream)]'>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
