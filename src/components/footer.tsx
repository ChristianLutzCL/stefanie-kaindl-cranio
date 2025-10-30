'use client';

import { Typography } from '@material-tailwind/react';
import Link from 'next/link';

const CURRENT_YEAR = new Date().getFullYear();

const footerData = {
  copyright: {
    text: `© ${CURRENT_YEAR} · Stefanie Kaindl`,
    name: 'Stefanie Kaindl'
  },
  links: {
    impressum: {
      href: '/impressum',
      text: 'Impressum'
    },
    datenschutz: {
      href: '/datenschutz',
      text: 'Datenschutz'
    },
    cookies: {
      href: '/cookie-einstellungen',
      text: 'Cookie-Einstellungen'
    }
  },
  developer: {
    text: 'Created by',
    name: 'Christian Lutz',
    email: 'hello@seventeenlabs.io'
  }
};

export function Footer() {
  return (
    <footer className="w-full bg-cream-100 mt-auto">
      <div className="container mx-auto px-8">
        <div className="py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-between">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <Typography className="font-inter text-xs text-taupe-600">
                {footerData.copyright.text}
              </Typography>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4">
              <Link
                href={footerData.links.impressum.href}
                className="font-inter text-xs text-taupe-600 hover:text-taupe-800 transition-colors"
              >
                {footerData.links.impressum.text}
              </Link>
              <Link
                href={footerData.links.datenschutz.href}
                className="font-inter text-xs text-taupe-600 hover:text-taupe-800 transition-colors"
              >
                {footerData.links.datenschutz.text}
              </Link>
              <Link
                href={footerData.links.cookies.href}
                className="font-inter text-xs text-taupe-600 hover:text-taupe-800 transition-colors"
              >
                {footerData.links.cookies.text}
              </Link>
            </div>

            {/* Developer Credit */}
            <div className="text-center md:text-right">
              <Typography className="font-inter text-xs text-taupe-600">
                {footerData.developer.text}{' '}
                <Link
                  href={`mailto:${footerData.developer.email}`}
                  className="text-taupe-600 hover:text-taupe-800 transition-colors underline"
                >
                  {footerData.developer.name}
                </Link>
              </Typography>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
