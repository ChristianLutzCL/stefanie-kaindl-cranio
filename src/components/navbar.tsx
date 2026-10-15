'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, ArrowUpRight } from '@/components/icons';
import { BOOKING, CONTACT } from '@/components/editorial';
import { RETREAT_ENABLED } from '@/site-config';

/**
 * Kopfzeile „Editorial Olive" — eine Zeile:
 *
 *      Cranio   Yoga          STEFANIE KAINDL          Über mich   Kontakt
 *
 * Links die beiden Angebote, rechts die Person (wer, wie erreichbar). Die
 * Wortmarke sitzt unabhängig davon exakt mittig.
 *
 * Auf der Startseite transparent über dem Hero, sonst auf Papier.
 */
const NAV_MENU = [
  { title: 'Cranio', href: '/cranio' },
  { title: 'Yoga', href: '/yoga' },
  { title: 'Über mich', href: '/ueber-mich' },
  { title: 'Kontakt', href: '/kontakt' },
  { title: 'Retreat', href: '/retreat' },
].filter((item) => RETREAT_ENABLED || item.href !== '/retreat');

const NAV_ITEMS = NAV_MENU.slice(0, 4).map((item, i) => ({
  ...item,
  /* Ausrichtung innerhalb der Viertelzellen: die äußeren Punkte liegen an den
     Rändern, die inneren an der Außenkante ihrer Zelle — so bleibt zur
     Wortmarke in der Mitte bewusst Abstand. */
  align: i === 0 || i === 1 ? 'lg:justify-self-start' : 'lg:justify-self-end',
}));

/* Im Mobil-Menü zwei Gruppen: erst die Angebote, dann Person und Kontakt. */
const OFFER_HREFS = ['/cranio', '/yoga', '/retreat'];
const OFFERS = NAV_MENU.filter((item) => OFFER_HREFS.includes(item.href));
const PRACTICE = NAV_MENU.filter((item) => !OFFER_HREFS.includes(item.href));

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const isHome = pathname === '/' || pathname === '';
  const solid = scrolled || !isHome;
  const inverse = !solid;

  React.useEffect(() => {
    function onScroll() {
      setScrolled((window.scrollY || document.documentElement.scrollTop || 0) > 24);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  /* Unterstreichung als Pseudo-Linie, die beim Hover von der Mitte aus wächst;
     die aktive Seite trägt sie dauerhaft. */
  const navLinkClass = (href: string) => {
    const active = pathname === href || pathname === `${href}/`;
    const base = `nav-link text-[0.8125rem] tracking-[0.01em] whitespace-nowrap transition-colors duration-200 ${
      active ? 'is-active' : ''
    }`;
    if (active) return `${base} ${inverse ? 'text-[var(--cream)]' : 'text-ink'}`;
    return `${base} ${
      inverse ? 'text-[var(--cream-80)] hover:text-[var(--cream)]' : 'text-ink-700 hover:text-ink'
    }`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'nav-solid' : 'nav-clear'
      }`}>
      {/* Höhe: transparent über dem Hero großzügig, im festen Zustand kompakter */}
      <div
        className={`shell relative flex items-center transition-[height] duration-300 ${
          solid ? 'h-[64px] md:h-[70px]' : 'h-[74px] md:h-[92px]'
        }`}>
        {/* Vier gleich breite Zellen über die volle Breite, die Punkte nach außen
            gerückt; die Wortmarke sitzt unabhängig davon exakt in der Mitte.
            Die Menüzeile ist auf der Höhe der Kopfzeile zentriert — kein
            zusätzlicher Versatz, sonst sitzt sie im flachen Zustand zu hoch. */}
        <nav
          aria-label='Hauptnavigation'
          className='hidden w-full grid-cols-4 lg:grid'>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${item.align} ${navLinkClass(item.href)}`}>
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>

        {/* Wortmarke, exakt mittig */}
        <Link
          href='/'
          aria-label='Stefanie Kaindl — Cranio Sacral, zur Startseite'
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
          <span
            className={`serif block uppercase leading-none tracking-[0.18em] text-[1.05rem] transition-colors duration-300 md:text-[1.3rem] ${
              inverse ? 'text-[var(--cream)]' : 'text-ink'
            }`}>
            Stefanie Kaindl
          </span>
          <span
            className={`serif mt-[0.4rem] block text-[0.5625rem] uppercase leading-none tracking-[0.36em] transition-colors duration-300 md:text-[0.625rem] ${
              inverse ? 'text-[var(--cream-80)]' : 'text-[var(--olive)]'
            }`}>
            Cranio Sacral
          </span>
        </Link>

        {/* Menü-Schalter: zwei Haarlinien, die sich zum Kreuz schließen —
            gleiche Linienstärke wie die Trennlinien, kein Textknopf, der mit
            der Wortmarke kollidiert */}
        <button
          type='button'
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls='mobile-menu'
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          className={`ml-auto flex h-11 w-11 items-center justify-center transition-opacity duration-200 hover:opacity-70 lg:hidden ${
            inverse ? 'text-[var(--cream)]' : 'text-ink'
          }`}>
          <span aria-hidden className='relative block h-[11px] w-[22px]'>
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                open ? 'translate-y-[5px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300 ${
                open ? '-translate-y-[5px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Abschlusslinie der festen Kopfzeile (nur wenn sie auf Papier liegt) */}
      <div
        className={`h-px w-full transition-colors duration-300 ${
          solid ? 'bg-[var(--line)]' : 'bg-transparent'
        }`}
      />

      {/* Mobil-Menü: erst die Angebote, dann Person und Kontakt, unten der Termin */}
      {open && (
        <div
          id='mobile-menu'
          className={`fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-[var(--paper)] ${
            solid ? 'top-[65px] md:top-[71px]' : 'top-[74px] md:top-[92px]'
          }`}>
          <div className='shell flex min-h-full flex-col justify-between py-9'>
            <div>
              <nav aria-label='Angebote (mobil)'>
                <span className='label'>Angebote</span>
                <div className='mt-4 border-b border-[var(--line)]'>
                  {OFFERS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className='display display-serif flex items-center justify-between border-t border-[var(--line)] py-4 text-[1.75rem] leading-none text-ink'>
                      {item.title}
                      <span aria-hidden className='text-[0.9rem] text-ink-400'>
                        <ArrowRight />
                      </span>
                    </Link>
                  ))}
                </div>
              </nav>

              <nav aria-label='Über mich und Kontakt (mobil)' className='mt-8'>
                <span className='label'>Über mich &amp; Kontakt</span>
                <div className='mt-4 border-b border-[var(--line)]'>
                  {PRACTICE.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className='flex items-center justify-between border-t border-[var(--line)] py-3.5 text-[1.0625rem] text-ink'>
                      {item.title}
                      <span aria-hidden className='text-[0.75rem] text-ink-400'>
                        <ArrowRight />
                      </span>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            <div className='mt-10 pb-2'>
              <span className='label'>Termin</span>
              <div className='mt-4 flex flex-col items-start gap-3'>
                <a
                  href={BOOKING.cranioOverview}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() => setOpen(false)}
                  className='cta-link cta-link-ink'>
                  Cranio buchen <ArrowUpRight />
                </a>
                <a
                  href={BOOKING.yoga}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() => setOpen(false)}
                  className='cta-link cta-link-ink'>
                  Platz reservieren <ArrowUpRight />
                </a>
              </div>

              <div className='mt-8 border-t border-[var(--line)] pt-5 text-[0.8125rem] leading-relaxed'>
                <a
                  href={CONTACT.phoneHref}
                  className='block py-1 text-ink transition-colors hover:text-ink-600'>
                  {CONTACT.phone}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className='block py-1 text-ink transition-colors hover:text-ink-600'>
                  {CONTACT.email}
                </a>
                <a
                  href='https://instagram.com/stefanie_kaindl_cranio'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block py-1 text-ink transition-colors hover:text-ink-600'>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
