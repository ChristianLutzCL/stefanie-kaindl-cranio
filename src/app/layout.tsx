import "./globals.css";
import type { Metadata } from "next";
import { Hanken_Grotesk, Cormorant_Garamond } from "next/font/google";
import { Footer, Layout, Navbar, CookieBanner } from "@/components";
import Script from "next/script";

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
  description: "Craniosacrale Körperarbeit und Yoga in Pfaffenhofen an der Ilm: sanfte Behandlung für Erwachsene, Babys und Kinder, dazu Yoga donnerstags in Paunzhausen. Preise, Termine und Buchung.",
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
  metadataBase: new URL('https://stefanie-kaindl-cranio.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://stefanie-kaindl-cranio.de',
    title: 'Craniosacrale Körperarbeit & Yoga | Stefanie Kaindl',
    description: 'Craniosacrale Körperarbeit und Yoga in Pfaffenhofen an der Ilm: sanfte Behandlung für Erwachsene, Babys und Kinder, dazu Yoga donnerstags in Paunzhausen. Preise, Termine und Buchung.',
    siteName: 'Stefanie Kaindl — Craniosacrale Körperarbeit & Yoga',
    images: [
      {
        url: '/image/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Craniosacrale Körperarbeit Stefanie Kaindl',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Craniosacrale Körperarbeit & Yoga | Stefanie Kaindl',
    description: 'Sanfte Behandlung für Erwachsene, Babys und Kinder — und Yoga donnerstags in Paunzhausen. Preise, Termine und Buchung.',
    images: ['/image/hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#616949" />
      </head>
      <body className={`${sans.variable} ${serif.variable} font-sans`}>
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
