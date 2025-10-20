'use client';

import {Typography} from '@material-tailwind/react';
import Link from 'next/link';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className='bottom-0 mt-10 w-full px-8 pt-20 bg-taupe-50'>
      <div className='container mx-auto'>
        <div className='mt-16 flex flex-wrap items-end justify-center gap-x-8 gap-y-4 border-t border-sage-200 py-6 md:justify-between'>
          <div className='text-center md:text-start'>
            <Typography className='font-sm font-inter text-center text-sm text-taupe-600'>
              &copy; {CURRENT_YEAR} · Stefanie Kaindl
            </Typography>
          </div>
          <div>
            <Link
              className='font-inter font-sm text-sm text-taupe-600 sage-accent'
              href={'/impressum'}>
              Impressum
            </Link>
          </div>
          <div className='font-sm font-inter text-center text-sm text-taupe-600'>
            Created by{' '}
            <Link
              className='sage-accent'
              href={'mailto:chris@inspiredprogrammer.com'}>
              Christian Lutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
