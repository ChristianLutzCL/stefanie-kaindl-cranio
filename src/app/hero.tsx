import Link from 'next/link';
import { ArrowRight } from '@/components/icons';

/**
 * Hero — vollflächiges Foto, mittig der Text:
 *   · Kopfzeile: die beiden Disziplinen ausgeschrieben
 *   · Serif-Headline in zwei Zeilen, passend für beide Angebote
 *   · zwei gleichwertige Wege, je einer pro Angebot, und beide führen auf die
 *     passende Seite (dort steht der Termin-Abschnitt)
 */

export default function Hero() {
  return (
    <section className='relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#241a11] text-[var(--cream)]'>
      <div aria-hidden className='hero-photo absolute inset-0' />
      {/* Verlauf statt flächigem Schleier: links kräftig (dort steht die
          Schrift), nach rechts über der Person zurückgenommen. */}
      <span aria-hidden className='hero-scrim absolute inset-0' />

      {/* Auf Mobil wird der Text unten verankert: das Foto ist auf die Höhe
          skaliert, sein Gesicht liegt deshalb immer in den oberen ~41 % des
          Viewports — ein unten sitzender Block kann es nie berühren (auch bei
          kurzen Viewports, wo ein zentrierter Block nach oben rutschen würde). */}
      <div className='on-photo shell relative z-10 flex flex-1 flex-col items-center justify-end pb-24 pt-32 text-center md:justify-center'>
        {/* Mobil liegt der Schleier NUR hinter diesen drei Zeilen (weich
            auslaufendes Band, siehe .hero-text-band) — das Foto bleibt sonst
            unverdeckt. Das Band hängt am Textblock, nicht an Viewport-Prozenten,
            wandert also mit, wenn die Headline umbricht. */}
        <div className='hero-text-band w-full'>
          <p className='hero-in hero-in-1 whitespace-nowrap text-[0.625rem] uppercase tracking-[0.14em] text-[rgba(243,240,233,0.9)] md:text-[0.6875rem] md:tracking-[0.2em]'>
            Craniosacrale Körperarbeit
            <span aria-hidden className='mx-2 text-[rgba(243,240,233,0.55)]'>
              &amp;
            </span>
            Yoga
          </p>

          <h1 className='hero-in hero-in-2 display display-serif d1-hero mt-6 text-[var(--cream)]'>
            <span>Raum, um anzukommen.</span>
            <span>Zeit, um loszulassen.</span>
          </h1>

          {/* Zwei gleichwertige Wege — je einer pro Angebot, jeweils auf die
              passende Seite (dort steht der Termin-Abschnitt). */}
          <div className='hero-in hero-in-3 mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4'>
            <Link href='/cranio/' className='cta-link'>
              Mehr zu Cranio <ArrowRight />
            </Link>
            <Link href='/yoga/' className='cta-link'>
              Mehr zu Yoga <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
