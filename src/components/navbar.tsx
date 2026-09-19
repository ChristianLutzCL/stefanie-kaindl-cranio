'use client';

import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const links = [
  ['Über mich', '/ueber-mich'],
  ['Angebote & Preise', '/angebote-preise'],
  ['Yoga', '/yoga'],
  ['Retreat', '/retreat'],
  ['Kontakt', '/kontakt'],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1100) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);
  return (
    <header className='site-header'>
      <a className='skip-link' href='#main-content'>
        Zum Inhalt springen
      </a>
      <div className='header-inner'>
        <Link className='brand' href='/' aria-label='Stefanie Kaindl – Startseite'>
          <span className='brand-mark' aria-hidden='true'>
            sk<span>✳</span>
          </span>
          <span className='brand-name'>
            Stefanie Kaindl<small>CRANIO & YOGA</small>
          </span>
        </Link>
        <button
          ref={toggle}
          className='menu-toggle'
          type='button'
          aria-expanded={open}
          aria-controls='site-navigation'
          onClick={() => setOpen(!open)}>
          {open ? 'Schließen' : 'Menü'}
          <span aria-hidden='true'>{open ? '×' : '☰'}</span>
        </button>
        <nav
          id='site-navigation'
          aria-label='Hauptnavigation'
          className={`site-nav ${open ? 'is-open' : ''}`}>
          {links.map(([title, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname.replace(/\/$/, '') === href ? 'page' : undefined}
              onClick={() => setOpen(false)}>
              {title}
              {href === '/retreat' && <sup>2026</sup>}
            </Link>
          ))}
          <Link className='nav-booking' href='/kontakt' onClick={() => setOpen(false)}>
            Termin vereinbaren <span aria-hidden='true'>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
