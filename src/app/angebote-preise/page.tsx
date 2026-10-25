import Link from 'next/link';

/**
 * /angebote-preise ist aufgeteilt: Cranio hat jetzt eine eigene Seite.
 *
 * Ein statischer Export kennt keine Server-Redirects, deshalb leitet diese
 * Seite per meta-refresh weiter und bietet zusätzlich Links an — für
 * Suchmaschinen und für den Fall, dass der Refresh nicht greift.
 */
export const metadata = {
  title: 'Craniosacrale Körperarbeit | Stefanie Kaindl',
  robots: { index: false, follow: true },
};

export default function AngebotePreisePage() {
  return (
    <>
      <meta httpEquiv='refresh' content='0; url=/cranio/' />
      <div data-review='Angebote & Preise · Weiterleitung' className='shell flex min-h-[70vh] flex-col items-center justify-center py-32 text-center'>
        <span className='label'>Weiterleitung</span>
        <h1 className='display display-serif d2 mt-6'>Craniosacrale Körperarbeit</h1>
        <p className='lead-lg mt-6 max-w-xl'>
          Diese Seite ist umgezogen. Angebote, Preise und Ablauf findest du jetzt auf der
          Cranio-Seite.
        </p>
        <div className='mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-4'>
          <Link href='/cranio/' className='cta-link cta-link-ink'>
            Zur Cranio-Seite
          </Link>
          <Link href='/yoga/' className='cta-link cta-link-ink'>
            Zur Yoga-Seite
          </Link>
        </div>
      </div>
    </>
  );
}
