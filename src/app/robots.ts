import type { MetadataRoute } from 'next';

/**
 * robots.txt — Crawling erlaubt, Sitemap verlinkt.
 * /cookie-einstellungen ist eine Funktionsseite und bleibt draußen (nofollow),
 * /api/ (n8n-Weiterleitung des Kontaktformulars) ebenfalls.
 */
export const dynamic = 'force-static';

/* Im Export-Modus erwartet Next für Metadata-Routen diese Funktion; ohne sie
   antwortet der Dev-Server (/sitemap.xml) mit 500 statt der Datei. */
export function generateStaticParams() {
  return [];
}

export default function robots(): MetadataRoute.Robots {
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
