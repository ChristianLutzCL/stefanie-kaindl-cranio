'use client';

import Image from 'next/image';
import {useState} from 'react';

type FloorPlan = {
  src: string;
  alt: string;
};

type FloorPlanGalleryProps = {
  images: FloorPlan[];
};

export default function FloorPlanGallery({images}: FloorPlanGalleryProps) {
  const [activePlan, setActivePlan] = useState<FloorPlan | null>(null);

  return (
    <>
      <div className='grid gap-5 lg:grid-cols-3'>
        {images.map((plan, index) => (
          <button
            key={plan.src}
            type='button'
            onClick={() => setActivePlan(plan)}
            className='overflow-hidden rounded-lg border border-cream-200 bg-cream-50 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-[#67B1B1]/50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#67B1B1] focus:ring-offset-2'>
            <div className='flex items-center justify-between gap-3 border-b border-cream-200 px-4 py-3'>
              <p className='font-inter text-sm font-medium text-taupe-800'>
                Grundriss Seite {index + 1}
              </p>
              <span className='font-inter text-xs text-[#4f8e8e]'>Vergrößern</span>
            </div>
            <Image
              src={plan.src}
              alt={plan.alt}
              width={1191}
              height={1684}
              className='h-auto w-full bg-white'
              sizes='(max-width: 1024px) 100vw, 360px'
            />
          </button>
        ))}
      </div>

      {activePlan && (
        <div
          className='fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm'
          role='dialog'
          aria-modal='true'
          aria-label={activePlan.alt}
          onClick={() => setActivePlan(null)}>
          <div
            className='relative max-h-[92vh] w-full max-w-5xl overflow-auto rounded-lg bg-white p-3 shadow-2xl'
            onClick={(event) => event.stopPropagation()}>
            <button
              type='button'
              onClick={() => setActivePlan(null)}
              className='font-inter sticky top-0 z-10 mb-3 ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-cream-100 text-xl leading-none text-taupe-800 shadow-sm transition-colors duration-200 hover:bg-cream-200'
              aria-label='Vergrößerte Ansicht schließen'>
              ×
            </button>
            <Image
              src={activePlan.src}
              alt={activePlan.alt}
              width={1191}
              height={1684}
              className='h-auto w-full rounded-md bg-white'
              sizes='100vw'
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
