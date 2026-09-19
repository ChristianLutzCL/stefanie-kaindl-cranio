import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logos/sk_logo_dark.webp';

export function Footer() {
  return (
    <footer className='site-footer'>
      <div className='footer-top'>
        <Link className='footer-brand' href='/'>
          <Image
            src={logo}
            alt='Stefanie Kaindl – Cranio Sacral'
            className='footer-logo'
          />
        </Link>
        <p>
          Mit Achtsamkeit verbunden.
          <br />
          Mit dir im Mittelpunkt.
        </p>
        <Link className='text-link' href='/kontakt'>
          Kontakt aufnehmen <span aria-hidden='true'>↗</span>
        </Link>
      </div>
      <div className='footer-bottom'>
        <span>© {new Date().getFullYear()} Stefanie Kaindl</span>
        <nav aria-label='Rechtliche Informationen'>
          <Link href='/impressum'>Impressum</Link>
          <Link href='/datenschutz'>Datenschutz</Link>
          <Link href='/cookie-einstellungen'>Cookie-Einstellungen</Link>
        </nav>
        <span>
          Created by{' '}
          <a href='https://chrislutz.me' target='_blank' rel='noopener noreferrer'>
            Christian Lutz
          </a>
        </span>
      </div>
    </footer>
  );
}
export default Footer;
