import Image from 'next/image';
import Link from 'next/link';

const quickLinks = [
  {href: '/angebote-preise', label: 'Angebote & Preise'},
  {href: '/yoga', label: 'Yoga'},
  {href: '/ueber-mich', label: 'Über Mich'},
  {href: '/kontakt', label: 'Kontakt'},
];

/**
 * 404 page (German, in the site's own design).
 *
 * Rendered for every unknown URL and for the pages that are switched off in
 * src/site-config.ts (the retreat calls notFound() while RETREAT_ENABLED is
 * false). A dark hero background is deliberate: the navbar is transparent with
 * white text on pages it does not know, so it stays legible here.
 *
 * With `output: 'export'` this becomes out/404.html, which the static host
 * (DigitalOcean App Platform, `error_document: 404.html`) serves for unknown
 * paths - so the page carries its own navigation back into the site.
 */
export default function NotFound() {
  return (
    <main className='relative isolate min-h-[86vh] w-full overflow-hidden bg-taupe-900'>
      <Image
        src='/image/hero.webp'
        alt=''
        fill
        priority
        sizes='100vw'
        className='-z-10 object-cover object-[33%_center] md:object-center'
      />
      <div className='absolute inset-0 -z-10 bg-gradient-to-b from-taupe-900/75 via-taupe-900/80 to-taupe-900/90' />

      <div className='container mx-auto flex min-h-[86vh] max-w-3xl flex-col items-center justify-center px-6 pb-28 pt-32 text-center text-white'>
        <p className='font-inter mb-4 text-xs uppercase tracking-[0.3em] text-cream-100/80'>
          Fehler 404
        </p>
        <h1 className='font-inter mb-5 text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl'>
          Diese Seite gibt es nicht mehr
        </h1>
        <p className='font-inter mb-9 max-w-xl text-base leading-relaxed text-cream-100/90 md:text-lg'>
          Die Seite wurde vielleicht verschoben – oder der Retreat ist für dieses Jahr
          vorbei. Alles Weitere findest du hier:
        </p>

        <div className='flex flex-col items-center gap-3 sm:flex-row md:gap-4'>
          <Link
            href='/'
            className='font-inter inline-flex items-center justify-center rounded-full bg-[#616949] px-7 py-3.5 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#4d5438] hover:shadow-xl md:px-8 md:py-4 md:text-lg'>
            Zur Startseite
          </Link>
          <Link
            href='/kontakt'
            className='font-inter inline-flex items-center justify-center rounded-full border-2 border-cream-100 px-7 py-3.5 text-base font-medium text-cream-100 transition-all duration-300 hover:bg-cream-100 hover:text-taupe-800 md:px-8 md:py-4 md:text-lg'>
            Termin anfragen
          </Link>
        </div>

        <nav aria-label='Weitere Seiten' className='mt-12 w-full border-t border-white/20 pt-8'>
          <ul className='flex flex-wrap items-center justify-center gap-x-7 gap-y-3'>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className='font-inter text-sm text-cream-100/90 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
