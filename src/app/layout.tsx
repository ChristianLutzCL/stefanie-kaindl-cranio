import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Layout, Navbar } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Craniosacrale Körperarbeit | Stefanie Kaindl",
  description: "Craniosacrale Körperarbeit – Sanfte, ganzheitliche Behandlung für Erwachsene, Kinder und Babys. Schmerzlinderung, Stressreduktion und tiefe Entspannung.",
  keywords: [
    "Craniosacrale Therapie",
    "Craniosacrale Körperarbeit",
    "Salzburg",
    "Stefanie Kaindl",
    "Schmerztherapie",
    "Stressreduktion",
    "Migräne",
    "Kopfschmerzen",
    "Baby Cranio",
    "Kinder Cranio",
    "Entspannung",
    "Alternative Heilmethode",
    "Ganzheitliche Behandlung"
  ],
  authors: [{ name: "Stefanie Kaindl" }],
  creator: "Stefanie Kaindl",
  publisher: "Stefanie Kaindl",
  metadataBase: new URL('https://stefanie-kaindl-cranio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://stefanie-kaindl-cranio.com',
    title: 'Craniosacrale Körperarbeit | Stefanie Kaindl',
    description: 'Craniosacrale Körperarbeit – Sanfte, ganzheitliche Behandlung für Erwachsene, Kinder und Babys. Schmerzlinderung, Stressreduktion und tiefe Entspannung.',
    siteName: 'Stefanie Kaindl - Craniosacrale Körperarbeit',
    images: [
      {
        url: '/image/hero.png',
        width: 1200,
        height: 630,
        alt: 'Craniosacrale Körperarbeit Stefanie Kaindl',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Craniosacrale Körperarbeit | Stefanie Kaindl',
    description: 'Sanfte, ganzheitliche Behandlung für Erwachsene, Kinder und Babys. Schmerzlinderung, Stressreduktion und tiefe Entspannung.',
    images: ['/image/hero.png'],
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
        <meta name="theme-color" content="#67B1B1" />
      </head>
      <body className={inter.className}>
        <Layout>
          <Navbar />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
