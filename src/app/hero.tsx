'use client';

import {Typography, Button} from '@material-tailwind/react';
import Link from 'next/link';

function Hero() {
  return (
    <div className="relative min-h-[860px] w-full bg-[url('/image/hero.webp')] bg-cover bg-[33%_center] bg-no-repeat sm:min-h-screen md:bg-center">
      <div className='absolute inset-0 h-full w-full bg-gradient-to-b from-taupe-900/40 via-taupe-900/60 to-taupe-900/70' />
      <div className='absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_40%,rgba(0,0,0,0.4)_100%)]' />
      <div className='grid min-h-[860px] px-5 pb-72 pt-24 sm:min-h-screen sm:px-8 sm:pb-60 md:pb-36'>
        <div className='container relative z-10 mx-auto my-auto grid max-w-4xl place-items-center text-center'>
          <div className='space-y-6 md:space-y-10'>
            <Typography
              variant='h1'
              color='white'
              className='font-inter text-3xl font-light leading-tight sm:text-4xl md:text-5xl lg:text-6xl'>
              Dein Weg zur inneren Balance
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='font-inter mx-auto w-full text-base leading-relaxed text-sage-100 sm:text-lg md:max-w-3xl md:text-xl'>
              Durch achtsame Berührungen und sanfte Techniken der Craniosacralen
              Körperarbeit unterstütze ich Sie dabei, Stress abzubauen, Verspannungen zu
              lösen und Ihr natürliches Gleichgewicht wiederzufinden.
            </Typography>
            <div className='flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-12 md:gap-4'>
              <Link href='/kontakt'>
                <Button
                  size='lg'
                  className='font-inter rounded-full bg-[#67B1B1] px-6 py-3 text-base text-white shadow-lg transition-all duration-300 hover:bg-[#5a9999] hover:shadow-xl md:px-8 md:py-4 md:text-lg'>
                  Jetzt Termin buchen
                </Button>
              </Link>
              <Link href='/ueber-mich'>
                <Button
                  variant='outlined'
                  size='lg'
                  className='font-inter rounded-full border-2 border-cream-100 px-6 py-3 text-base text-cream-100 transition-all duration-300 hover:bg-cream-100 hover:text-taupe-800 md:px-8 md:py-4 md:text-lg'>
                  Mehr über mich
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute inset-x-0 bottom-0 z-10 px-4 pb-5 md:pb-6'>
        <div className='container mx-auto max-w-6xl'>
          <div className='bg-white/15 rounded-2xl border border-white/25 p-4 text-white shadow-xl backdrop-blur-md md:flex md:items-center md:justify-between md:gap-6 md:p-5'>
            <div className='mb-3 md:mb-0'>
              <p className='font-inter mb-1 text-xs uppercase tracking-[0.18em] text-cream-100/80'>
                Retreat 2026
              </p>
              <p className='font-inter text-base font-light leading-snug sm:text-lg md:text-xl'>
                Golden Summer Retreat am Gardasee
              </p>
            </div>
            <div className='grid grid-cols-2 gap-3 text-sm sm:grid-cols-3 md:flex md:items-center md:gap-5'>
              {[
                ['Datum', '8. - 11. Okt'],
                ['Ort', 'Casa San Tome'],
                ['Anzahlung', '200€'],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className='font-inter text-[10px] uppercase tracking-[0.14em] text-cream-100/70'>
                    {label}
                  </p>
                  <p className='font-inter font-medium text-white'>{value}</p>
                </div>
              ))}
              <Link
                href='/retreat'
                className='font-inter col-span-2 inline-flex items-center justify-center rounded-full bg-[#67B1B1] px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#5a9999] sm:col-span-3 md:ml-2 md:whitespace-nowrap'>
                Retreat ansehen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
