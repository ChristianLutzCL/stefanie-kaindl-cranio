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
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
