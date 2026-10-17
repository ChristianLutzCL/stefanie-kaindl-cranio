import "./globals.css";
import type { Metadata } from "next";
import { Hanken_Grotesk, Cormorant_Garamond } from "next/font/google";
import { Footer, Layout, Navbar, CookieBanner } from "@/components";
import Script from "next/script";
import { JsonLd } from "@/components/json-ld";
import { BUSINESS, person, website } from "@/lib/structured-data";

// Zwei Rollen, ein System (siehe research/design-brief-editorial-olive.md):
// Hanken Grotesk = alles Lesbare (Display, Text, Labels, Navigation),
// Cormorant Garamond = Wortmarke, Zitate, CTA- und Footer-Zeile, Preise,
// kursive Akzente in Überschriften.
//
// Cormorant Garamond ist feingliedrig und hat eine kleine x-Höhe: große Grade
// brauchen sie, kleine Textgrade nicht. Deshalb stehen die Serif-Rollen auf
// 400/500 und sind gegenüber der Sans-Größe angehoben (siehe globals.css).
const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Craniosacrale Körperarbeit & Yoga | Stefanie Kaindl",
  description: "Craniosacrale Körperarbeit und Yoga in Pfaffenhofen an der Ilm — für Erwachsene, Babys und Kinder. Yoga donnerstags in Paunzhausen.",
  keywords: [
    "Craniosacrale Therapie",
    "Craniosacrale Körperarbeit",
    "Cranio Pfaffenhofen",
    "Yoga Paunzhausen",
    "Yoga Pfaffenhofen",
    "Stefanie Kaindl",
    "Schmerztherapie",
    "Stressreduktion",
    "Migräne",
    "Kopfschmerzen",
    "Baby Cranio",
    "Kinder Cranio",
    "Entspannung",
    "Ganzheitliche Behandlung"
  ],
  authors: [{ name: "Stefanie Kaindl" }],
  creator: "Stefanie Kaindl",
  publisher: "Stefanie Kaindl",
  // Absolute URLs (og:image, canonical) folgen dem Host, auf dem die Seite läuft.
  // Produktion behält ihren Standard; die Review-Instanz setzt SITE_URL in .env.local —
  // sonst zeigen ihre Meta-Tags auf die Live-Domain, und jeder Share-Check auf dem
  // Dev-Host jagt eine 404-Seite statt der Karte.
  metadataBase: new URL(process.env.SITE_URL ?? 'https://stefanie-kaindl-cranio.de'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '500x500' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: process.env.SITE_URL ?? 'https://stefanie-kaindl-cranio.de',
    title: 'Craniosacrale Körperarbeit & Yoga | Stefanie Kaindl',
    description: 'Sanfte Craniosacrale Körperarbeit und Yoga in Pfaffenhofen — Termin online vereinbaren.',
    siteName: 'Stefanie Kaindl — Craniosacrale Körperarbeit & Yoga',
    images: [
      {
        // Eigene Share-Karte, 1200x630 — erzeugt aus design-system/og/og-image-foto.html.
        // Vorher stand hier /image/hero.webp: ein 2048x1365-Foto mit behaupteten
        // 1200x630, das die Plattformen selbst beschnitten haben.
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stefanie Kaindl — Craniosacrale Körperarbeit und Yoga',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Craniosacrale Körperarbeit & Yoga | Stefanie Kaindl',
    description: 'Sanfte Craniosacrale Körperarbeit und Yoga in Pfaffenhofen — Termin online vereinbaren.',
    images: ['/og-image.jpg'],
  },
  robots: {
    // Auf einem Review-Host (SITE_URL gesetzt) nicht indexieren: die Inhalte liegen
    // noch einmal auf der Produktions-Domain. Produktion behält index/follow.
    index: !process.env.SITE_URL,
    follow: !process.env.SITE_URL,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when ready
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#616949" />
      </head>
      <body className={`${sans.variable} ${serif.variable} font-sans`}>
        {/* Strukturierte Daten: Betrieb, Person und Website — einmal für alle Seiten.
            Die Seiten hängen ihr eigenes Dokument mit Brotkrumen und Angebot dazu. */}
        <JsonLd nodes={[BUSINESS, person(), website()]} />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-CV0R2VE8F2`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Einwilligung lesen — Schlüssel wie im Cookie-Banner (cookiePreferences).
            let analytics = false;
            try {
              const prefs = JSON.parse(localStorage.getItem('cookiePreferences'));
              analytics = !!(prefs && prefs.analytics);
            } catch (e) {
              analytics = false;
            }

            // Consent Mode: ohne Zustimmung bleibt Statistik abgelehnt, erst nach
            // „Akzeptieren" (oder „Analyse-Cookies" auf der Cookie-Seite) erlaubt.
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: analytics ? 'granted' : 'denied'
            });

            if (analytics) {
              gtag('config', 'G-CV0R2VE8F2', {
                page_path: window.location.pathname,
              });
            } else {
              gtag('config', 'G-CV0R2VE8F2', {
                'anonymize_ip': true
              });
            }
          `}
        </Script>
        
        <Layout>
          <Navbar />
          {children}
          <Footer />
          <CookieBanner />
        </Layout>
      </body>
    </html>
  );
}
