'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RETREAT_ENABLED } from '@/site-config';

/**
 * Kopfzeile „Editorial Olive" — nach der Referenz:
 *
 *   ┌─────────────── Wortmarke (zentriert), Termin-Link rechts ─────────────┐
 *   │    Über mich     ·    Cranio    ·     Yoga     ·     Kontakt      │
 *   └──────────────────────────────────────────────────────────────────────┘
 *
 * Die Navigationszeile liegt mittig unter der Wortmarke: vier gleich breite
 * Spalten mit zentriertem Text, an den Spaltengrenzen nur ein subtiler Punkt —
 * keine Linien. Auf der Startseite transparent über dem Hero, sonst auf Papier.
 *
 * Benennung: vier gleichartige, kurze Substantive — „Angebote & Preise" fiel
 * raus, weil ein Und-Zeichen und zwei Substantive in einer Vierspalten-Zeile
 * wie ein Fremdkörper wirken. „Cranio" spiegelt die Disziplin-Zeile des Heros
 * („Cranio | Yoga") und ist ihrer Zielgruppe geläufig; die Seite darunter
 * trägt weiterhin den Titel „Angebote & Preise".
 */
const NAV_MENU = [
  { title: 'Über mich', href: '/ueber-mich' },
  { title: 'Cranio', href: '/angebote-preise' },
  { title: 'Yoga', href: '/yoga' },
  { title: 'Kontakt', href: '/kontakt' },
  { title: 'Retreat', href: '/retreat' },
].filter((item) => RETREAT_ENABLED || item.href !== '/retreat');

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'nav-solid' : 'bg-transparent'
      }`}>
      {/* Wortmarke */}
      <div className='relative'>
        <div className='shell flex h-[66px] items-center justify-center md:h-[80px]'>
          <Link
            href='/'
            aria-label='Stefanie Kaindl — Cranio Sacrale, zur Startseite'
            className='block text-center'>
            <span
              className={`serif block uppercase leading-none tracking-[0.18em] text-[1.05rem] transition-colors duration-300 md:text-[1.3rem] ${
                inverse ? 'text-[var(--cream)]' : 'text-ink'
              }`}>
              Stefanie Kaindl
            </span>
            <span
              className={`serif mt-[0.34rem] block text-[0.5rem] uppercase leading-none tracking-[0.34em] transition-colors duration-300 md:text-[0.5625rem] ${
                inverse ? 'text-[var(--cream-60)]' : 'text-[var(--olive)]'
              }`}>
              Cranio Sacrale
            </span>
          </Link>

          <Link
            href='/kontakt'
            className={`absolute right-6 top-1/2 hidden -translate-y-1/2 text-[0.8125rem] transition-colors duration-200 md:right-14 lg:inline-flex ${
              inverse
                ? 'text-[var(--cream-70)] hover:text-[var(--cream)]'
                : 'text-ink-700 hover:text-ink'
            }`}>
            Termin buchen <span aria-hidden className='ml-1'>↗</span>
          </Link>

          <button
            type='button'
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            className={`absolute right-6 top-1/2 -translate-y-1/2 text-[0.8125rem] lg:hidden ${
              inverse ? 'text-[var(--cream)]' : 'text-ink'
            }`}>
            {open ? 'Schließen' : 'Menü'}
          </button>
        </div>
      </div>

      {/* Navigationszeile: vier gleich breite Spalten, Text zentriert,
          an den Spaltengrenzen nur ein subtiler Punkt statt Linien */}
      <nav aria-label='Hauptnavigation' className='relative hidden lg:block'>
        <div className='grid grid-cols-4'>
          {NAV_MENU.slice(0, 4).map((item) => {
            const active = pathname === item.href || pathname === `${item.href}/`;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`flex items-center justify-center py-4 text-[0.8125rem] transition-colors duration-200 ${
                  active
                    ? inverse
                      ? 'text-[var(--cream)]'
                      : 'text-ink'
                    : inverse
                      ? 'text-[var(--cream-70)] hover:text-[var(--cream)]'
                      : 'text-ink-700 hover:text-ink'
                }`}>
                <span
                  className={`border-b pb-1 ${
                    active ? 'border-current' : 'border-transparent'
                  }`}>
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Punkte an den Spaltengrenzen (25 / 50 / 75 %) — flach und zurückhaltend */}
        <div aria-hidden className='pointer-events-none absolute inset-0'>
          {[25, 50, 75].map((position) => (
            <span
              key={position}
              className='absolute top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full'
              style={{
                left: `${position}%`,
                backgroundColor: inverse ? 'rgba(243,240,233,0.3)' : 'rgba(29,28,23,0.22)',
              }}
            />
          ))}
        </div>
      </nav>

      {/* Abschlusslinie der festen Kopfzeile (nur wenn sie auf Papier liegt) */}
      <div
        className={`h-px w-full transition-colors duration-300 ${
          solid ? 'bg-[var(--line)]' : 'bg-transparent'
        }`}
      />

      {/* Mobil-Menü */}
      {open && (
        <div className='fixed inset-x-0 top-[66px] bottom-0 z-40 overflow-y-auto bg-[var(--paper)] md:top-[80px]'>
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
