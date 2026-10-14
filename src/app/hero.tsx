import Link from 'next/link';
import { ArrowUpRight } from '@/components/icons';

/**
 * Hero „Editorial Olive" — nach der Referenz:
 * vollflächiges Foto, dahinter eine sehr zurückhaltende „Blume des Lebens" als
 * Linienzeichnung. Mittig: die beiden Disziplinen durch ein „&" verbunden, die
 * Serif-Headline in zwei Zeilen und ein hervorgehobener Text-Link. Am unteren
 * Rand nur eine Haarlinie.
 */

/* Blume des Lebens: 19 Kreise gleichen Radius auf einem hexagonalen Gitter
   (Mittelpunkt, Ring 1 bei r, Ring 2 bei r·√3 und 2r) plus Umfassungskreis. */
const R = 50;
const CENTERS: [number, number][] = [[0, 0]];
for (let i = 0; i < 6; i++) {
  const a = (Math.PI / 3) * i;
  CENTERS.push([R * Math.cos(a), R * Math.sin(a)]);
}
for (let i = 0; i < 6; i++) {
  const a = (Math.PI / 3) * i + Math.PI / 6;
  CENTERS.push([Math.sqrt(3) * R * Math.cos(a), Math.sqrt(3) * R * Math.sin(a)]);
}
for (let i = 0; i < 6; i++) {
  const a = (Math.PI / 3) * i;
  CENTERS.push([2 * R * Math.cos(a), 2 * R * Math.sin(a)]);
}

function FlowerOfLife({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox={`${-3 * R} ${-3 * R} ${6 * R} ${6 * R}`}
      className={className}
      fill='none'
      stroke='rgba(245, 235, 222, 0.06)'
      strokeWidth={1}>
      <g>
        {CENTERS.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={R} vectorEffect='non-scaling-stroke' />
        ))}
        <circle r={3 * R} vectorEffect='non-scaling-stroke' />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className='relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#241a11] text-[var(--cream)]'>
      <div aria-hidden className='hero-photo absolute inset-0' />
      {/* Verlauf statt flächigem Schleier: links kräftig (dort steht die
          Schrift), nach rechts über der Person zurückgenommen. */}
      <span aria-hidden className='hero-scrim absolute inset-0' />

      {/* Blume des Lebens als Zeichnung hinter der Überschrift — größer als der
          Viewport und mit einer Maske nach außen zu transparent ausblendend,
          damit sie das Bild und das Gesicht nicht überlagert */}
      <FlowerOfLife className='flower-fade pointer-events-none absolute left-1/2 top-1/2 w-[min(150vw,2100px)] -translate-x-1/2 -translate-y-1/2' />

      <div className='on-photo shell relative z-10 flex flex-1 flex-col items-center justify-center pb-24 pt-32 text-center'>
        {/* Disziplinen, durch eine Haarlinie getrennt */}
        <p className='flex items-center text-[0.75rem] tracking-[0.06em] text-[rgba(243,240,233,0.95)]'>
          <span>Cranio</span>
          <span aria-hidden className='mx-3 text-[rgba(243,240,233,0.6)]'>
            &amp;
          </span>
          <span>Yoga</span>
        </p>

        <h1 className='display display-serif d1-hero mt-8 text-[var(--cream)]'>
          Raum, um anzukommen.
          <br />
          Zeit, um loszulassen.
        </h1>

        <a
          href='https://calendly.com/stefanie-kaindl-cranio'
          target='_blank'
          rel='noopener noreferrer'
          className='cta-link mt-9'>
          Termin vereinbaren <ArrowUpRight />
        </a>
      </div>
    </section>
  );
}
