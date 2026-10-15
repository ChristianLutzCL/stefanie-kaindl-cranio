'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RETREAT_ENABLED } from '@/site-config';

/**
 * Kopfzeile „Editorial Olive" — eine Zeile:
 *
 *      Über mich   Cranio          STEFANIE KAINDL          Yoga   Kontakt     Menü
 *
 * Die Wortmarke sitzt in der Mitte, die Navigation fächert sich links und
 * rechts davon auf. Ein Drei-Spalten-Raster (`1fr auto 1fr`) hält die
 * Wortmarke exakt mittig, ohne absolute Positionierung — auch auf Mobil, wo
 * nur die Wortmarke und der Menü-Schalter sichtbar sind.
 *
 * Auf der Startseite transparent über dem Hero, sonst auf Papier.
 */
const NAV_MENU = [
  { title: 'Über mich', href: '/ueber-mich' },
  { title: 'Cranio', href: '/angebote-preise' },
  { title: 'Yoga', href: '/yoga' },
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
            Die Menüzeile steht auf der Höhe der Hauptzeile der Wortmarke, nicht
            auf der Mitte des zweizeiligen Blocks. */}
        <nav
          aria-label='Hauptnavigation'
          className='hidden w-full -translate-y-[0.4rem] grid-cols-4 lg:grid'>
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
          aria-label='Stefanie Kaindl — Cranio Sacrale, zur Startseite'
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
            Cranio Sacrale
          </span>
        </Link>

        <button
          type='button'
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          className={`ml-auto text-[0.8125rem] lg:hidden ${
            inverse ? 'text-[var(--cream)]' : 'text-ink'
          }`}>
          {open ? 'Schließen' : 'Menü'}
        </button>
      </div>

      {/* Abschlusslinie der festen Kopfzeile (nur wenn sie auf Papier liegt) */}
      <div
        className={`h-px w-full transition-colors duration-300 ${
          solid ? 'bg-[var(--line)]' : 'bg-transparent'
        }`}
      />

      {/* Mobil-Menü */}
      {open && (
        <div
          className={`fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-[var(--paper)] ${
            solid ? 'top-[65px] md:top-[71px]' : 'top-[74px] md:top-[92px]'
          }`}>
          <div className='shell flex min-h-full flex-col justify-between py-10'>
            <nav aria-label='Navigation (mobil)' className='flex flex-col'>
              {NAV_MENU.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className='hairline display py-4 text-center text-[1.9rem] leading-[1.1] text-ink'>
                  {item.title}
                </Link>
              ))}
              <div className='hairline' />
            </nav>
            <div className='mt-10 space-y-3'>
              <span className='label'>Kontakt</span>
              <a href='tel:+4917663094476' className='block text-[0.9375rem] text-ink'>
                0176 63094476
              </a>
              <a
                href='mailto:info@stefanie-kaindl-cranio.de'
                className='block text-[0.9375rem] text-ink'>
                info@stefanie-kaindl-cranio.de
              </a>
              <p className='body-copy max-w-sm'>
                Bahnstraße 2a, 85276 Pfaffenhofen a. d. Ilm — Ortsteil Uttenhofen. Termine Mo – Fr
                nach Vereinbarung.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
