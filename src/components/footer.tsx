'use client';

import Link from 'next/link';

/**
 * Fußbereich „Editorial Olive": olivgrüne Fläche, Laufschrift am oberen Rand,
 * Link-Spalten links, Kontakt/Zeiten rechts, darunter die riesige Wortmarke
 * über die volle Breite und die Rechts-Zeile.
 */
const CURRENT_YEAR = new Date().getFullYear();

const COLUMNS = [
  {
    title: 'Praxis',
    links: [
      { text: 'Über mich', href: '/ueber-mich' },
      { text: 'Cranio', href: '/angebote-preise' },
      { text: 'Yoga', href: '/yoga' },
      { text: 'Kontakt', href: '/kontakt' },
    ],
  },
  {
    title: 'Angebote',
    links: [
      { text: 'Cranio für Erwachsene', href: '/angebote-preise' },
      { text: 'Cranio für Kinder & Babys', href: '/angebote-preise' },
      { text: 'Erstberatung & Pakete', href: '/angebote-preise' },
      { text: 'Hausbesuche', href: '/kontakt' },
    ],
  },
];

const LEGAL = [
  { text: 'Impressum', href: '/impressum' },
  { text: 'Datenschutz', href: '/datenschutz' },
  { text: 'Cookie-Einstellungen', href: '/cookie-einstellungen' },
];

export function Footer() {
  return (
    <footer className='relative mt-auto overflow-hidden bg-[var(--olive)] text-[var(--cream)]'>
      {/* Laufschrift */}
      <div className='hairline-inverse overflow-hidden py-4'>
        <div className='marquee' aria-hidden>
          <div className='marquee-track'>
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className='px-6 text-[0.6875rem] uppercase tracking-[0.4em] text-[var(--cream-45)]'>
                Raum für dich
              </span>
            ))}
          </div>
          <div className='marquee-track'>
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className='px-6 text-[0.6875rem] uppercase tracking-[0.4em] text-[var(--cream-45)]'>
                Raum für dich
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className='shell pb-10 pt-14 md:pt-20'>
        <div className='grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-20'>
          {/* Links: Spalten */}
          <div className='grid grid-cols-2 gap-10'>
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title} className='space-y-5'>
                <p className='text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--cream-45)]'>
                  {col.title}
                </p>
                <ul className='space-y-2.5'>
                  {col.links.map((link) => (
                    <li key={link.text}>
                      <Link
                        href={link.href}
                        className='text-[0.875rem] text-[var(--cream-70)] transition-colors duration-200 hover:text-[var(--cream)]'>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <div className='col-span-2 mt-2 flex flex-wrap items-center gap-x-6 gap-y-3'>
              <a
                href='https://calendly.com/stefanie-kaindl-cranio'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-cream'>
                Termin vereinbaren <span aria-hidden>↗</span>
              </a>
              <a
                href='mailto:info@stefanie-kaindl-cranio.de'
                className='text-[0.875rem] text-[var(--cream-70)] underline decoration-[var(--cream-45)] underline-offset-4 transition-colors hover:text-[var(--cream)]'>
                info@stefanie-kaindl-cranio.de
              </a>
            </div>
          </div>

          {/* Rechts: Aussage + Praxis-Infos */}
          <div className='grid gap-10 sm:grid-cols-2'>
            <div className='sm:col-span-2'>
              <p className='display display-serif text-[clamp(1.75rem,3.2vw,3rem)] text-[var(--cream)]'>
                Bewegung für jeden Tag.
              </p>
              <p className='mt-5 max-w-md text-[0.875rem] leading-relaxed text-[var(--cream-70)]'>
                Craniosacrale Körperarbeit und Yoga in Pfaffenhofen an der Ilm. Ein ruhiger Raum, Zeit
                ohne Eile und eine Berührung, die nichts erzwingt.
              </p>
            </div>

            <div className='space-y-3'>
              <p className='text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--cream-45)]'>
                Praxis
              </p>
              <p className='text-[0.875rem] leading-relaxed text-[var(--cream-70)]'>
                Bahnstraße 2a
                <br />
                85276 Pfaffenhofen a. d. Ilm
                <br />
                Ortsteil Uttenhofen
              </p>
              <a
                href='tel:+4917663094476'
                className='block text-[0.875rem] text-[var(--cream-70)] transition-colors hover:text-[var(--cream)]'>
                0176 63094476
              </a>
            </div>

            <div className='space-y-3'>
              <p className='text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--cream-45)]'>
                Öffnungszeiten
              </p>
              {/* Tage als Kopf, Zeiten darunter — wie die Öffnungszeiten-Tabelle der Referenz */}
              <div className='grid grid-cols-2 gap-4'>
                {[
                  ['Termine', 'Mo – Fr nach Vereinbarung'],
                  ['Yoga', 'Do 17:30 & 19:00'],
                ].map(([day, time]) => (
                  <div key={day}>
                    <p className='font-serif text-[0.9375rem] text-[var(--cream-70)]'>{day}</p>
                    <p className='mt-1 text-[0.8125rem] text-[var(--cream-45)]'>{time}</p>
                  </div>
                ))}
              </div>
              <a
                href='https://instagram.com/stefanie_kaindl_cranio'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block pt-1 text-[0.875rem] text-[var(--cream-70)] transition-colors hover:text-[var(--cream)]'>
                Instagram ↗
              </a>
            </div>
          </div>
        </div>

        {/* Wortmarke mit weiten Kreisbögen */}
        <div className='relative mt-16 select-none pt-6 md:mt-20'>
          <div className='hairline-inverse absolute inset-x-0 top-0' />
          <span
            aria-hidden
            className='pointer-events-none absolute -bottom-[22rem] left-1/2 aspect-square w-[46rem] -translate-x-1/2 rounded-full border border-[var(--cream-line)]'
          />
          <span
            aria-hidden
            className='pointer-events-none absolute -bottom-[30rem] left-1/2 aspect-square w-[62rem] -translate-x-1/2 rounded-full border border-[var(--cream-15)]'
          />
          <p
            aria-hidden
            className='font-serif relative whitespace-nowrap uppercase leading-[0.8] tracking-[0.01em] text-[var(--cream)] text-[clamp(4rem,18vw,16.5rem)]'>
            Stefanie
          </p>
          <p className='relative mt-4 text-[0.5625rem] uppercase tracking-[0.4em] text-[var(--cream-45)] md:text-[0.625rem]'>
            Cranio Sacrale · Yoga · Pfaffenhofen an der Ilm
          </p>
        </div>

        {/* Rechts-Zeile */}
        <div className='mt-10 flex flex-col gap-4 text-[0.6875rem] text-[var(--cream-45)] md:flex-row md:items-center md:justify-between'>
          <p>
            © {CURRENT_YEAR} Stefanie Kaindl · Alle Rechte vorbehalten
          </p>
          <div className='flex flex-wrap items-center gap-x-6 gap-y-2'>
            {LEGAL.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='transition-colors hover:text-[var(--cream)]'>
                {item.text}
              </Link>
            ))}
            <a
              href='https://chrislutz.me'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-colors hover:text-[var(--cream)]'>
              Design: Christian Lutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
