import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));

/**
 * Ist die Rückmeldungs-Ebene Teil dieses Builds?
 *
 * Sie gehört auf die Review-Instanz, nicht in die Produktion. Der DigitalOcean-
 * Build (aus `main`) hat weder die Umgebungsvariable noch eine `.env.local` —
 * dort wird das Modul auf den Platzhalter umgeschrieben, statt nur das Rendern
 * zu überspringen. Nur zu überspringen reicht nicht: für den dynamischen Import
 * legt Next ein eigenes Bündel UND ein eigenes Stylesheet an und verlinkt beide
 * im HTML jeder Seite.
 *
 * `.env.local` wird hier selbst gelesen, weil next.config nicht darauf bauen
 * kann, dass Next die Datei schon in process.env gestellt hat.
 */
function reviewEnabled() {
  if (process.env.NEXT_PUBLIC_REVIEW === '1') return true;
  try {
    const raw = fs.readFileSync(path.join(dir, '.env.local'), 'utf8');
    return /^\s*NEXT_PUBLIC_REVIEW\s*=\s*["']?1["']?\s*$/m.test(raw);
  } catch {
    return false;
  }
}

const REVIEW = reviewEnabled();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Dev-only. The review site is opened through the Traefik proxy on
  // dev-stefanie-kaindl-cranio.hub.chrislutz.me. Next.js blocks cross-origin dev
  // resources by default (since 15.2), which refuses the dev server's own HMR and
  // dev assets when the page is served on that host instead of localhost.
  allowedDevOrigins: ['dev-stefanie-kaindl-cranio.hub.chrislutz.me'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

if (!REVIEW) {
  nextConfig.turbopack = {
    resolveAlias: {
      '@/components/review/review-layer': './src/components/review/noop.tsx',
    },
  };
}

export default nextConfig;