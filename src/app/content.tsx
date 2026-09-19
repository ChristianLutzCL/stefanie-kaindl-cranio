import Image from 'next/image';
import Link from 'next/link';

const offerings = [
  {
    number: '01',
    title: 'Craniosacrale Körperarbeit',
    detail: 'Für Erwachsene, Kinder & Babys',
    image: '/image/behandlung.webp',
    alt: 'Sanfte Berührung bei einer Craniosacral-Behandlung',
    text: 'Ein achtsamer Kontakt mit deinem Körper. Sanfte Berührungen und Zeit zum Nachspüren schaffen Raum für Ruhe und Entspannung.',
    href: '/angebote-preise',
    link: 'Cranio kennenlernen',
  },
  {
    number: '02',
    title: 'Yoga',
    detail: 'Bewegung. Atem. Bewusstsein.',
    image: '/image/yoga.webp',
    alt: 'Stefanie bei der Yogapraxis',
    text: 'Fließende Bewegung, bewusster Atem und ein Moment nur für dich. Finde deine eigene Balance zwischen Kraft und Leichtigkeit.',
    href: '/yoga',
    link: 'Yoga entdecken',
  },
  {
    number: '03',
    title: 'Retreats & Auszeiten',
    detail: 'Abstand vom Alltag. Nähe zu dir.',
    image: '/image/retreat/casa-san-tome-location.jpg',
    alt: 'Casa San Tome, der Ort für das Retreat am Gardasee',
    text: 'Neue Orte, liebevolle Begegnungen und Zeit zum Durchatmen. Eine Einladung, dir selbst wieder ein Stück näherzukommen.',
    href: '/retreat',
    link: 'Zum Retreat',
  },
];

export function Content() {
  return (
    <div className='editorial-home'>
      <div className='practice-strip'>
        <span>Achtsame Begleitung</span>
        <i aria-hidden='true'>✳</i>
        <span>Für Groß & Klein</span>
        <i aria-hidden='true'>✳</i>
        <span>Raum für deinen Rhythmus</span>
      </div>
      <section id='angebote' className='editorial-section offerings'>
        <div className='section-intro'>
          <div>
            <p className='eyebrow'>Mein Angebot</p>
            <h2>
              So individuell wie du.
              <br />
              <em>So achtsam wie möglich.</em>
            </h2>
          </div>
          <p>
            Es gibt viele Wege, wieder bei sich anzukommen.
            <br />
            Gemeinsam finden wir den, der zu dir passt.
          </p>
        </div>
        <div className='offering-grid'>
          {offerings.map((item) => (
            <article className='offering' key={item.number}>
              <Link href={item.href} className='offering-image' aria-label={item.link}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes='(max-width: 760px) 100vw, 33vw'
                />
                <span>{item.number}</span>
              </Link>
              <p className='offering-detail'>{item.detail}</p>
              <h3>{item.title}</h3>
              <p className='offering-description'>{item.text}</p>
              <Link className='text-link' href={item.href}>
                {item.link}
                <span aria-hidden='true'>↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className='about-section'>
        <div className='editorial-section about-grid'>
          <div className='about-photo'>
            <Image
              src='/image/ueber-mich.webp'
              alt='Stefanie Kaindl in ihrer Praxis'
              fill
              sizes='(max-width: 760px) 100vw, 42vw'
            />
            <span>Schön, dass du da bist.</span>
          </div>
          <div className='about-copy'>
            <p className='eyebrow'>Der Mensch hinter der Berührung</p>
            <h2>
              Ich bin Stefanie.
              <br />
              <em>
                Und ich nehme mir
                <br />
                Zeit für dich.
              </em>
            </h2>
            <p>
              Als Craniosacral-Praktikerin, Yogalehrerin und zweifache Mama weiß ich, wie
              wertvoll ein Ort ist, an dem man einfach sein darf.
            </p>
            <p>
              In meiner Praxis begegne ich dir mit Offenheit, Einfühlungsvermögen und
              Respekt für deinen ganz eigenen Weg. Bei mir stehst du als Mensch im
              Mittelpunkt.
            </p>
            <Link className='text-link' href='/ueber-mich'>
              Lerne mich kennen <span aria-hidden='true'>↗</span>
            </Link>
            <div className='signature'>Von Herzen, Steffi</div>
          </div>
        </div>
      </section>
      <section className='editorial-section process-section'>
        <div className='section-intro'>
          <div>
            <p className='eyebrow'>Dein erster Termin</p>
            <h2>
              Du darfst erst einmal
              <br />
              <em>ankommen.</em>
            </h2>
          </div>
          <Link className='text-link' href='/angebote-preise'>
            Ablauf & Preise <span aria-hidden='true'>↗</span>
          </Link>
        </div>
        <div className='process-grid'>
          {[
            [
              '01',
              'Wir lernen uns kennen.',
              'In einem persönlichen Gespräch ist Zeit für deine Wünsche, deine Fragen und das, was dich gerade beschäftigt.',
            ],
            [
              '02',
              'Du kommst zur Ruhe.',
              'In entspannter Atmosphäre begleite ich dich mit sanften Berührungen. Dein Wohlbefinden steht dabei im Mittelpunkt.',
            ],
            [
              '03',
              'Du spürst nach.',
              'Zum Abschluss bleibt Raum zum Nachruhen und für ein gemeinsames Gespräch über deine Erfahrung.',
            ],
          ].map(([number, title, description]) => (
            <div key={number}>
              <span className='process-number'>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='testimonial'>
        <p className='eyebrow'>Worte aus der Praxis</p>
        <span className='quote-mark' aria-hidden='true'>
          “
        </span>
        <blockquote>
          Hier fühle ich mich beschützt
          <br />
          und von Herzen willkommen.
        </blockquote>
        <p className='quote-author'>
          Regina <span>· Craniosacrale Körperarbeit</span>
        </p>
      </section>
      <section className='editorial-section retreat-section'>
        <div className='retreat-photo'>
          <Image
            src='/image/retreat/gardasee-hero.jpg'
            alt='Ausblick auf den Gardasee'
            fill
            sizes='(max-width: 760px) 100vw, 50vw'
          />
        </div>
        <div className='retreat-copy'>
          <p className='eyebrow'>Eine besondere Auszeit · 2026</p>
          <h2>
            Golden Summer
            <br />
            <em>Retreat am Gardasee.</em>
          </h2>
          <p>
            Yoga, Ruhe und neue Verbindung – umgeben von der besonderen Atmosphäre der
            Casa San Tome.
          </p>
          <p className='retreat-date'>08. – 11. Oktober 2026 · Casa San Tome</p>
          <Link className='editorial-button' href='/retreat'>
            Die Auszeit entdecken <span aria-hidden='true'>↗</span>
          </Link>
        </div>
      </section>
      <section className='contact-invitation'>
        <p className='eyebrow'>Dein Moment beginnt hier</p>
        <h2>
          Vielleicht ist jetzt die Zeit.
          <br />
          <em>Für eine kleine Pause. Für dich.</em>
        </h2>
        <p>Ich freue mich darauf, dich kennenzulernen.</p>
        <Link className='editorial-button light' href='/kontakt'>
          Lass uns einen Termin finden <span aria-hidden='true'>↗</span>
        </Link>
      </section>
    </div>
  );
}
export default Content;
