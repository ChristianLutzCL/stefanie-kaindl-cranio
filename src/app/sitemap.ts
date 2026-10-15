import type { MetadataRoute } from 'next';

/**
 * Sitemap der öffentlich erreichbaren Seiten.
 * /retreat ist abgeschaltet (src/site-config.ts → RETREAT_ENABLED) und wird hier
 * deshalb nicht aufgeführt; die Route liefert 404.
 */
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://stefanie-kaindl-cranio.de';
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/cranio/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/yoga/`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/ueber-mich/`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/kontakt/`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/impressum/`, lastModified, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${base}/datenschutz/`, lastModified, changeFrequency: 'yearly', priority: 0.1 },
  ];
}
