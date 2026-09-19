import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='editorial-hero'>
      <div className='hero-copy'>
        <p className='eyebrow'>
          <span /> Craniosacrale Körperarbeit & Yoga
        </p>
        <h1>
          Ein Raum für dich.
          <br />
          Ein Weg zurück
          <br />
          zu <em>deiner Balance.</em>
        </h1>
        <p className='hero-description'>
          Manchmal braucht es nur einen Moment der Ruhe.
          <br className='desktop-break' /> Und jemanden, der dir mit Achtsamkeit begegnet.
        </p>
        <p className='hero-description'>
          Ich begleite dich mit sanfter Körperarbeit und Yoga –
          <br className='desktop-break' /> in deinem Tempo, mit Raum für das, was dich
          bewegt.
        </p>
        <div className='hero-actions'>
          <Link className='editorial-button' href='/kontakt'>
            Termin vereinbaren <span aria-hidden='true'>↗</span>
          </Link>
          <Link className='text-link' href='#angebote'>
            Meine Angebote <span aria-hidden='true'>↓</span>
          </Link>
        </div>
        <div className='hero-signoff'>
          <span className='small-rule' /> Stefanie Kaindl · Pfaffenhofen a. d. Ilm
        </div>
      </div>
      <div className='hero-photo'>
        <Image
          src='/image/hero.webp'
          alt='Stefanie hält eine Klangschale in ihrer hellen Praxis'
          fill
          priority
          sizes='(max-width: 760px) 100vw, 48vw'
        />
        <div className='photo-note'>
          <span aria-hidden='true'>✳</span>
          <p>
            Ankommen.
            <br />
            Loslassen. Bei dir sein.
          </p>
        </div>
        <span className='photo-caption'>ACHTSAME BERÜHRUNG. NEUE VERBINDUNG.</span>
      </div>
    </section>
  );
}
