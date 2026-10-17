import Link from 'next/link';
import { Photo } from '@/components/editorial';
import { ArrowUpRight } from '@/components/icons';

/**
 * 404 — im System der übrigen Seiten.
 *
 * Erscheint für jede unbekannte Adresse und für die Seiten, die in
 * src/site-config.ts abgeschaltet sind (der Retreat ruft notFound(), solange
 * RETREAT_ENABLED false ist). Der Retreathinweis steht deshalb ausdrücklich im
 * Text: wer über einen alten Link kommt, soll erfahren, warum dort nichts ist.
 *
 * Mit `output: 'export'` entsteht daraus out/404.html, das der statische Hoster
 * (DigitalOcean App Platform, `error_document: 404.html`) für unbekannte Pfade
 * ausliefert — die Seite bringt ihre Navigation also selbst mit. Kopf- und
 * Fußzeile kommen vom Wurzel-Layout, hier steht nur der Inhalt.
 */

const LINKS = [
  {
    href: '/cranio/',
    label: 'Craniosacrale Körperarbeit',
    meta: 'Behandlung für Erwachsene, Babys und Kinder',
  },
  {
    href: '/yoga/',
    label: 'Yoga am Donnerstag',
    meta: 'Zwei Kurse in Paunzhausen',
  },
  {
    href: '/kontakt/',
    label: 'Kontakt',
    meta: 'Telefon, E-Mail und Anfahrt',
  },
];

export default function NotFound() {
  return (
    <main>
      <header className='shell pb-[clamp(2.5rem,5vw,4rem)] pt-[clamp(8.5rem,14vw,12rem)]'>
        <span className='label'>Fehler 404</span>
        <h1 className='display display-serif d2 mt-6 max-w-3xl'>Diese Seite gibt es hier nicht.</h1>
        <p className='lead-lg mt-7 max-w-2xl'>
          Vielleicht wurde sie verschoben oder der Link ist veraltet. Einen Retreat gibt es derzeit
          nicht — hier geht es zu den beiden Angeboten.
        </p>
      </header>

      <section className='shell pb-[clamp(4rem,8vw,8rem)]'>
        <div className='grid items-start gap-12 lg:grid-cols-12 lg:gap-0'>
          {/* Kein data-reveal: diese Seite wird nie über useReveal() eingeblendet,
              ein gesetztes Attribut ließe das Bild unsichtbar. */}
          <div className='lg:col-span-6'>
            <Photo
              src='/image/hero.webp'
              alt='Stefanie Kaindl bei einer Behandlung'
              ratio='aspect-[4/3]'
              position='50% 35%'
              sizes='(max-width: 1024px) 100vw, 50vw'
              priority
            />
          </div>

          <div className='lg:col-span-5 lg:col-start-8'>
            <ul className='border-t border-[var(--line)]'>
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='flex items-baseline justify-between gap-6 border-b border-[var(--line)] py-4 transition-colors hover:text-ink-600'>
                    <span>
                      <span className='serif block text-[1.25rem] leading-snug text-ink'>
                        {link.label}
                      </span>
                      <span className='mt-1 block text-[0.8125rem] text-ink-600'>{link.meta}</span>
                    </span>
                    <span aria-hidden className='text-[0.85rem] text-ink-400'>
                      <ArrowUpRight />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className='mt-9 flex flex-wrap items-center gap-x-10 gap-y-4'>
              <Link href='/' className='cta-link cta-link-ink'>
                Zur Startseite <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
