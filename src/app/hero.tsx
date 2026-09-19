import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='immersive-hero'>
      <Image
        className='hero-background'
        src='/image/hero.webp'
        alt='Stefanie hält eine Klangschale in ihrer Praxis'
        fill
        priority
        sizes='100vw'
      />
      <div className='hero-overlay' aria-hidden='true' />
      <div className='hero-content'>
        <p className='eyebrow'>Craniosacrale Körperarbeit & Yoga</p>
        <h1>
          Ein Raum für dich.
          <br />
          <em>Zurück in deine Balance.</em>
        </h1>
        <p className='hero-description'>
          Sanfte Berührung. Bewusste Bewegung. Zeit zum Durchatmen.
          <br className='desktop-break' /> Ich begleite dich auf deinem Weg – achtsam und
          in deinem Tempo.
        </p>
        <div className='hero-actions'>
          <Link className='editorial-button' href='/kontakt'>
            Termin vereinbaren <span aria-hidden='true'>↗</span>
          </Link>
          <Link className='hero-secondary' href='#angebote'>
            Meine Angebote entdecken <span aria-hidden='true'>↓</span>
          </Link>
        </div>
        <p className='hero-location'>Stefanie Kaindl · Pfaffenhofen a. d. Ilm</p>
      </div>
    </section>
  );
}
