import { ArrowUpRight } from '@/components/icons';

/**
 * Hero — vollflächiges Foto, mittig der Text:
 *   · Kopfzeile: was und wo (Körperarbeit & Yoga · Pfaffenhofen)
 *   · Serif-Headline in zwei Zeilen, passend für beide Angebote
 *   · zwei gleichwertige Buchungswege: Cranio (Calendly) und Yoga (WhatsApp,
 *     wie auf der Yoga-Seite)
 */

const BOOK_CRANIO = 'https://calendly.com/stefanie-kaindl-cranio';
const BOOK_YOGA = 'https://wa.me/4917663094476';

export default function Hero() {
  return (
    <section className='relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#241a11] text-[var(--cream)]'>
      <div aria-hidden className='hero-photo absolute inset-0' />
      {/* Verlauf statt flächigem Schleier: links kräftig (dort steht die
          Schrift), nach rechts über der Person zurückgenommen. */}
      <span aria-hidden className='hero-scrim absolute inset-0' />

      <div className='on-photo shell relative z-10 flex flex-1 flex-col items-center justify-center pb-24 pt-32 text-center'>
        <p className='hero-in hero-in-1 text-[0.75rem] tracking-[0.08em] text-[rgba(243,240,233,0.95)]'>
          Cranio
          <span aria-hidden className='mx-2.5 text-[rgba(243,240,233,0.6)]'>
            &amp;
          </span>
          Yoga
        </p>

        <h1 className='hero-in hero-in-2 display display-serif d1-hero mt-6 text-[var(--cream)]'>
          <span>Raum, um anzukommen.</span>
          <span>Zeit, um loszulassen.</span>
        </h1>

        {/* Zwei gleichwertige Wege — je einer pro Angebot */}
        <div className='hero-in hero-in-3 mt-10 flex items-center gap-10'>
          <a href={BOOK_CRANIO} target='_blank' rel='noopener noreferrer' className='cta-link'>
            Cranio buchen <ArrowUpRight />
          </a>
          <a href={BOOK_YOGA} target='_blank' rel='noopener noreferrer' className='cta-link'>
            Yoga buchen <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
