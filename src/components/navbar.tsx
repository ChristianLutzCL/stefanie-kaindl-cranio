'use client';

import React from 'react';
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import logoDark from '../../public/logos/sk_logo_dark.png';
import logoLight from '../../public/logos/sk_logo_light.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_MENU = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Über Mich',
    href: '/ueber-mich',
  },
  {
    title: 'Angebote & Preise',
    href: '/angebote-preise',
  },
  {
    title: 'Kontakt',
    href: '/kontakt',
  },
];

function NavItem({title, href, isScrolling, onClick}: {title: string; href: string; isScrolling?: boolean; onClick?: () => void}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={`font-inter flex items-center gap-2 font-light decoration-transparent decoration-0 underline-offset-1 transition-all duration-100 ${
          isScrolling 
            ? 'text-taupe-800 hover:text-[#5a9999] hover:decoration-[#5a9999]' 
            : 'hover:text-[#67B1B1] hover:decoration-[#67B1B1]'
        } hover:underline hover:decoration-2 hover:underline-offset-4`}>
        {title}
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const pathname = usePathname();
  
  // Pages with light backgrounds that need dark navbar from the start
  const lightBackgroundPages = ['/ueber-mich', '/kontakt', '/angebote-preise', '/impressum', '/datenschutz', '/cookie-einstellungen'];
  const hasLightBackground = lightBackgroundPages.some(page => pathname === page || pathname === `${page}/`);
  
  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpen(false));
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      color='transparent'
      className={
        isScrolling
          ? 'fixed top-0 z-50 border-0 bg-cream-100/95 backdrop-blur-sm transition-all duration-200'
          : 'fixed top-0 z-50 border-0 bg-transparent transition-all duration-500'
      }>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Link href={'/'}>
            <Image 
              src={isScrolling || hasLightBackground ? logoDark : logoLight} 
              height='55' 
              alt='logo' 
              className='antialiased' 
            />
          </Link>
        </div>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? 'text-taupe-800' : hasLightBackground ? 'text-taupe-800' : 'text-white'}`}>
          {NAV_MENU.map((item) => (
            <NavItem key={item.title} href={item.href} title={item.title} isScrolling={isScrolling || hasLightBackground} />
          ))}
        </ul>
        <IconButton
          variant='text'
          onClick={handleOpen}
          color={isScrolling || hasLightBackground ? 'gray' : 'white'}
          className='ml-auto inline-block lg:hidden'>
          {open ? (
            <XMarkIcon strokeWidth={2} className={`h-6 w-6 ${isScrolling || hasLightBackground ? 'text-taupe-800' : 'text-white'}`} />
          ) : (
            <Bars3Icon strokeWidth={2} className={`h-6 w-6 ${isScrolling || hasLightBackground ? 'text-taupe-800' : 'text-white'}`} />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className='container mx-auto mt-3 rounded-md bg-cream-100/95 backdrop-blur-sm px-6 py-4 text-taupe-800 warm-shadow'>
          <ul className='flex flex-col gap-4'>
            {NAV_MENU.map((item) => (
              <NavItem key={item.title} href={item.href} title={item.title} isScrolling={true} onClick={() => setOpen(false)} />
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
