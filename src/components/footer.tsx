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
    }
  },
  developer: {
    text: 'Created by',
    name: 'Christian Lutz',
    email: 'chris@inspiredprogrammer.com'
  }
};

export function Footer() {
  return (
    <footer className="w-full bg-cream-100 mt-auto">
      <div className="container mx-auto px-8">
        <div className="border-t border-therapeutic-200 py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-between">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <Typography className="font-inter text-sm text-taupe-700">
                {footerData.copyright.text}
              </Typography>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link
                href={footerData.links.impressum.href}
                className="font-inter text-sm text-taupe-700 hover:text-[#67B1B1] transition-colors"
              >
                {footerData.links.impressum.text}
              </Link>
            </div>

            {/* Developer Credit */}
            <div className="text-center md:text-right">
              <Typography className="font-inter text-sm text-taupe-700">
                {footerData.developer.text}{' '}
                <Link
                  href={`mailto:${footerData.developer.email}`}
                  className="text-[#67B1B1] hover:text-[#5a9999] transition-colors"
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
