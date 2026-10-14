import Link from 'next/link';

/**
 * Hero „Editorial Olive" — zentrierte Komposition wie in der Referenz:
 * Eyebrow-Pille, zweizeilige Display-Headline mit kursivem Akzent, Pfeil-Link,
 * darunter eine Meta-Zeile auf Haarlinie.
 */
export default function Hero() {
  return (
    <section className='relative isolate flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-[#22241a] text-[var(--cream)]'>
      <div
        aria-hidden
        className='absolute inset-0 bg-cover bg-no-repeat'
        style={{
          backgroundImage: "url('/image/hero.webp')",
          backgroundPosition: '50% 38%',
        }}
      />
      <span aria-hidden className='absolute inset-0 bg-[#211c15]/40' />
      <span aria-hidden className='absolute inset-0 bg-[#6b7250] mix-blend-multiply opacity-20' />
      <span
        aria-hidden
        className='absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(29,28,23,0.6)_0%,rgba(29,28,23,0.34)_48%,rgba(29,28,23,0.12)_72%,rgba(29,28,23,0.04)_100%)]'
      />
      <span
        aria-hidden
        className='absolute inset-0 bg-gradient-to-b from-[#1d1c17]/45 via-[#1d1c17]/10 to-[#1d1c17]/80'
      />

      <div className='shell relative z-10 pb-10 pt-40 md:pb-14 md:pt-48'>
        <div className='mx-auto max-w-4xl text-center'>
          <span className='pill'>Craniosacrale Körperarbeit</span>
          <h1 className='display d1 d1-hero mt-8 text-[var(--cream)]'>
            Raum, um anzukommen.
            <br />
            Zeit, um <em>loszulassen</em>.
          </h1>
          <p className='mx-auto mt-8 max-w-xl text-[0.9375rem] leading-relaxed text-[var(--cream-70)] md:text-[1.0625rem]'>
            Sanfte Körperarbeit für Erwachsene, Kinder und Babys — und Yoga, das den Alltag trägt.
          </p>
          <div className='mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4'>
            <a
              href='https://calendly.com/stefanie-kaindl-cranio'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-cream'>
              Termin vereinbaren <span aria-hidden>↗</span>
            </a>
            <Link href='#story' className='arrow-link arrow-link-inverse'>
              Meine Arbeit <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>

        {/* Meta-Zeile */}
        <div className='mt-20 md:mt-28'>
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
      </div>
    </section>
  );
}
