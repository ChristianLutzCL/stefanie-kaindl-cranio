import type { MetadataRoute } from 'next';

/**
 * robots.txt — Crawling erlaubt, Sitemap verlinkt.
 * /cookie-einstellungen ist eine Funktionsseite und bleibt draußen (nofollow),
 * /api/ (n8n-Weiterleitung des Kontaktformulars) ebenfalls.
 */
export const dynamic = 'force-static';

/* Läuft die Seite auf einem Review-Host (SITE_URL gesetzt, siehe .env.local),
   dann darf sie nicht indexiert werden: dieselben Inhalte liegen noch einmal auf
   der Produktions-Domain, und ein zweiter Eintrag im Index schadet der Klientin.
   Ohne SITE_URL — also im DigitalOcean-Build aus main — bleibt es unten beim
   erlaubenden robots.txt. */
const isReview = Boolean(process.env.SITE_URL);

/* Im Export-Modus erwartet Next für Metadata-Routen diese Funktion; ohne sie
   antwortet der Dev-Server (/sitemap.xml) mit 500 statt der Datei. */
export function generateStaticParams() {
  return [];
}

export default function robots(): MetadataRoute.Robots {
  if (isReview) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/cookie-einstellungen/'],
      },
    ],
    sitemap: 'https://stefanie-kaindl-cranio.de/sitemap.xml',
    host: 'https://stefanie-kaindl-cranio.de',
  };
}
