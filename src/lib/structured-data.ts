/**
 * Strukturierte Daten (Schema.org / JSON-LD) für Google Rich Results.
 *
 * Alle Angaben stammen aus dem Bestand — nichts davon ist geschätzt:
 *   · Adresse, Telefon, E-Mail, Instagram  → src/components/footer.tsx, editorial.tsx
 *   · Koordinaten                          → OSM/Nominatim, Bahnstraße 2a (Hausgenau:
 *                                            OSM-Way 46770487, „detached"), 48.5608048 / 11.5367675
 *   · Preise                               → src/app/cranio/content.tsx (Preisblock)
 *   · Yoga-Zeiten, -Ort und Yoga Day       → src/app/yoga/content.tsx (COURSES, YOGA_DAY)
 *
 * Bewusst NICHT enthalten (und warum):
 *   · aggregateRating / review — die vier Stimmen auf der Startseite sind eigene
 *     Referenzen. Google verbietet selbstbezogene Bewertungen für LocalBusiness;
 *     Markup dafür kann zu einer manuellen Maßnahme führen.
 *   · openingHoursSpecification — die Seite sagt „Mo – Fr nach Vereinbarung".
 *     Feste Öffnungszeiten wären erfunden. Sobald die Klientin echte Zeiten
 *     veröffentlicht, gehört `openingHoursSpecification` hierher.
 *   · logo — die einzige Logodatei ist noch die alte teal-farbene Marke
 *     (siehe design-system/README.md, offene Punkte). Ein Bild, das nicht mehr
 *     die Marke ist, wäre schlechter als kein Bild.
 */

/** Basis-URL: auf der Review-Instanz die Dev-Domain, sonst Produktion (siehe .env.local). */
export const SITE = process.env.SITE_URL ?? 'https://stefanie-kaindl-cranio.de';

/** Absolute URL bauen — `trailingSlash: true` im Export, also Seitenpfade mit `/` übergeben. */
export const abs = (path = '/') => new URL(path, SITE).toString();

export const BUSINESS_ID = abs('/#business');
export const PERSON_ID = abs('/#stefanie-kaindl');
export const WEBSITE_ID = abs('/#website');

/** Buchungslinks — Calendly, wie in src/components/editorial.tsx (BOOKING). */
const BOOKING = 'https://calendly.com/stefanie-kaindl-cranio';

type Node = Record<string, unknown>;

/**
 * Achtung beim Erweitern: dieses Objekt ruft `offers()` schon beim Laden des Moduls
 * auf. Funktionsdeklarationen sind gehoisted, **Konstanten nicht** — jede neue
 * Variable, die hier gebraucht wird (wie BOOKING), muss deshalb über diesem Objekt
 * stehen, sonst bricht jede Seite mit „Cannot access … before initialization" ab.
 */
export const BUSINESS: Node = {
  '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
  '@id': BUSINESS_ID,
  name: 'Stefanie Kaindl — Craniosacrale Körperarbeit & Yoga',
  alternateName: 'Cranio Sacral',
  description:
    'Craniosacrale Körperarbeit für Erwachsene, Babys und Kinder sowie Yoga am Donnerstag — in Pfaffenhofen an der Ilm (Ortsteil Uttenhofen) und Paunzhausen.',
  url: abs('/'),
  telephone: '+4917663094476',
  email: 'info@stefanie-kaindl-cranio.de',
  image: [abs('/og-image.jpg'), abs('/image/hero-stefanie.webp'), abs('/image/behandlung.webp')],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bahnstraße 2a',
    addressLocality: 'Pfaffenhofen an der Ilm',
    addressRegion: 'Bayern',
    postalCode: '85276',
    addressCountry: 'DE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 48.5608048, longitude: 11.5367675 },
  areaServed: [
    { '@type': 'City', name: 'Pfaffenhofen an der Ilm' },
    { '@type': 'City', name: 'Paunzhausen' },
  ],
  sameAs: ['https://instagram.com/stefanie_kaindl_cranio'],
  priceRange: '14–73 €',
  makesOffer: offers(),
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Bar, PayPal',
  founder: { '@id': PERSON_ID },
  employee: { '@id': PERSON_ID },
};

/** Stefanie Kaindl als Person — Trägerin der Praxis, hilft beim Entity-Verständnis. */
export function person(): Node {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Stefanie Kaindl',
    jobTitle: 'Craniosacrale Körperarbeit & Yoga',
    url: abs('/ueber-mich/'),
    image: abs('/image/hero-stefanie.webp'),
    sameAs: ['https://instagram.com/stefanie_kaindl_cranio'],
    worksFor: { '@id': BUSINESS_ID },
    knowsAbout: ['Craniosacrale Körperarbeit', 'Yoga', 'Cranio für Babys und Kinder'],
  };
}

export function website(): Node {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: abs('/'),
    name: 'Stefanie Kaindl — Craniosacrale Körperarbeit & Yoga',
    inLanguage: 'de-DE',
    publisher: { '@id': BUSINESS_ID },
  };
}

/** Angebot als Offer mit Preis — die Preise stehen wörtlich in cranio/content.tsx. */
function offer(name: string, price: number, url: string, unit: string, description: string): Node {
  return {
    '@type': 'Offer',
    name,
    price,
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url,
    description,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price,
      priceCurrency: 'EUR',
      unitText: unit,
    },
    itemOffered: { '@type': 'Service', name, serviceType: name, description },
  };
}

/** Die vier Cranio-Angebote plus die Yogastunde — dieselben Zahlen wie auf den Seiten. */
export function offers(): Node[] {
  return [
    offer('Cranio für Erwachsene', 73, `${BOOKING}/cranio_session`, 'Behandlung (ca. 60 Minuten)',
      'Behandlung inklusive ausführlichem Vorgespräch, Nachruhe und Nachbesprechung.'),
    offer('5er-Paket Cranio', 400, BOOKING, 'Paket (5 Behandlungen)',
      'Fünf Behandlungen im Voraus, flexibel planbar, auf Wunsch mit Rechnung.'),
    offer('Cranio für Babys & Kinder', 53, `${BOOKING}/cranio-kinder`, 'Behandlung (20–40 Minuten)',
      'Altersgerechte, ruhige Behandlung für Babys und Kinder.'),
    offer('Erstberatung', 40, BOOKING, 'Gespräch (30 Minuten)',
      'Unverbindliches Kennenlerngespräch mit Anamnese und Behandlungsplanung.'),
    offer('Yoga am Donnerstag', 14, abs('/yoga/'), 'Stunde',
      'Zwei Kurse donnerstags um 17:30 und 19:00 Uhr in Paunzhausen, Einstieg jederzeit möglich.'),
  ];
}

export function service(name: string, description: string, serviceType: string, path: string): Node {
  return {
    '@type': 'Service',
    name,
    serviceType,
    description,
    url: abs(path),
    provider: { '@id': BUSINESS_ID },
    areaServed: [{ '@type': 'City', name: 'Pfaffenhofen an der Ilm' }, { '@type': 'City', name: 'Paunzhausen' }],
  };
}

/** Brotkrumen — Start ist immer Position 1. */
export function breadcrumbs(trail: Array<[name: string, path: string]>): Node {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: abs(path),
    })),
  };
}

/**
 * Yoga Day am 07.11.2026, 10:00–17:00 Uhr (CET, UTC+1 — die Sommerzeit endet am 25.10.2026).
 * Preise stehen in yoga/content.tsx: 111 € bis 30.09.2026, danach 129 €.
 */
export function yogaDay(): Node {
  return {
    '@type': 'Event',
    name: 'Yoga Day – Wurzeln & Loslassen',
    description:
      'Ein Tag zum Ankommen und Loslassen: herbstlicher Vinyasa Flow, Yin Yoga, Herzchakra-Meditation und Kristallklangschalen, mit vegetarischem Mittagessen. Maximal 10 Plätze.',
    startDate: '2026-11-07T10:00:00+01:00',
    endDate: '2026-11-07T17:00:00+01:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    url: abs('/yoga/#yoga-day'),
    image: abs('/image/yoga-day-wurzeln-loslassen.jpg'),
    location: {
      '@type': 'Place',
      name: 'Yogaraum Paunzhausen',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Paunzhausen',
        postalCode: '85307',
        addressCountry: 'DE',
      },
    },
    organizer: { '@id': BUSINESS_ID },
    performer: { '@id': PERSON_ID },
    offers: {
      '@type': 'Offer',
      price: 129,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: abs('/yoga/'),
      validFrom: '2026-10-01T00:00:00+02:00',
    },
  };
}

/**
 * Ein JSON-LD-Dokument als String für <script type="application/ld+json">.
 * `<` wird escaped, damit ein Wert im Datenobjekt das Skript nicht schließen kann.
 */
export function jsonLd(...nodes: Node[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(/</g, '\\u003c');
}
