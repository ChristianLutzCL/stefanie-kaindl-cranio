import Link from 'next/link';

/**
 * Hero „Editorial Olive" — nach der Referenz, ohne Spaltenlinien:
 * vollflächiges Foto, dahinter eine sehr zurückhaltende „Blume des Lebens" als
 * Linienzeichnung. Mittig: die beiden Disziplinen durch eine Haarlinie
 * getrennt („Cranio | Yoga"), die Serif-Headline in zwei Zeilen und ein
 * hervorgehobener Text-Link. Am unteren Rand nur eine Haarlinie.
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
      stroke='rgba(243, 240, 233, 0.06)'
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
    <section className='relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#22241a] text-[var(--cream)]'>
      <div aria-hidden className='hero-photo absolute inset-0' />
      {/* Ein flacher Schleier plus ein weicher, mittiger Verlauf hinter dem
          Textblock — die zentrierte Headline braucht das. Nach außen läuft der
          Verlauf aus, oben und unten nur so viel wie für Navigation und Rahmen. */}
      <span aria-hidden className='absolute inset-0 bg-[#211c15]/30' />
      <span
        aria-hidden
        className='absolute inset-0 bg-[radial-gradient(ellipse_66%_64%_at_50%_50%,rgba(29,28,23,0.48)_0%,rgba(29,28,23,0.36)_55%,rgba(29,28,23,0.14)_80%,rgba(29,28,23,0)_100%)]'
      />
      <span
        aria-hidden
        className='absolute inset-x-0 top-0 h-[22%] bg-[linear-gradient(to_bottom,rgba(29,28,23,0.38)_0%,rgba(29,28,23,0)_100%)]'
      />
      <span
        aria-hidden
        className='absolute inset-x-0 bottom-0 h-[36%] bg-[linear-gradient(to_top,rgba(29,28,23,0.35)_0%,rgba(29,28,23,0)_100%)]'
      />

      {/* Blume des Lebens als Zeichnung hinter der Überschrift — größer als der
          Viewport und mit einer Maske nach außen zu transparent ausblendend,
          damit sie das Bild und das Gesicht nicht überlagert */}
      <FlowerOfLife className='flower-fade pointer-events-none absolute left-1/2 top-1/2 w-[min(150vw,2100px)] -translate-x-1/2 -translate-y-1/2' />

      <div className='on-photo shell relative z-10 flex flex-1 flex-col items-center justify-center pb-24 pt-32 text-center'>
        {/* Disziplinen, durch eine Haarlinie getrennt */}
        <p className='flex items-center text-[0.75rem] tracking-[0.06em] text-[var(--cream-70)]'>
          <span>Cranio</span>
          <span aria-hidden className='mx-3 inline-block h-3 w-px bg-[var(--cream-line)]' />
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
          Termin vereinbaren <span aria-hidden>↗</span>
        </a>
      </div>
    </section>
  );
}
