// Editorial Olive — Props der Komponenten, abgeschrieben aus dem TypeScript des
// Repos (/opt/sites/stefanie-kaindl-cranio, redesign/editorial-olive). Nur Dokumentation:
// die Vorschauen sind statisches Markup, nicht die React-Komponenten.
import type * as React from "react";

/** Wortmarke „Stefanie Kaindl / Cranio Sacral" — im Bestand inline in Navbar und Footer. */
export interface MarkProps {
  /** Kopfzeile 1.05rem, ab md 1.3rem; im Footer die Größe aus der Inhaltsbreite. */
  size?: "nav" | "footer";
  /** cream auf Foto/Olive, ink auf Papier. */
  inverse?: boolean;
  /** Nur die Marke, ohne die zweite Zeile „Cranio Sacral". */
  bare?: boolean;
}

/** Kopfzeile: vier Menüpunkte, Wortmarke exakt mittig, Menüschalter unter lg. */
export interface NavbarProps {
  items?: { title: string; href: string }[];   // Default: Cranio · Yoga · Über mich · Kontakt
  /** Transparent über dem Hero (nav-clear) oder auf Papier (nav-solid). */
  overHero?: boolean;
}

/** Hero: vollflächiges Foto, mittig der Text, zwei gleichwertige Wege. */
export interface HeroProps {
  eyebrow: string;                    // „Craniosacrale Körperarbeit & Yoga"
  /** Genau zwei Zeilen — je ein <span>, damit jede Zeile einzeln balanciert. */
  headline: [string, string];
  /** Genau zwei Ziele (Cranio, Yoga). Mehr als zwei zerstören die Gleichwertigkeit. */
  actions: { label: string; href: string }[];
}

/** Eyebrow: 10 px mit vorangestelltem Punkt. */
export interface LabelProps extends React.ComponentProps<"span"> {
  /** Versalien mit 0.18em Sperrung — Sektionslabel, Spaltenkopf. */
  caps?: boolean;
  /** cream statt Tinte (auf Olive oder Foto). */
  inverse?: boolean;
  /** Pille mit Rand, Fläche und Blur — nur auf Foto oder Olive. */
  pill?: boolean;
}

/** Zentrierter Sektionskopf: Label, Serif-Headline, optional Text darunter. */
export interface SectionHeadProps {
  label: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  inverse?: boolean;
}

/** Seitenkopf der Unterseiten: Label, große Serif-Zeile, kurzer Einstieg. */
export interface PageIntroProps {
  label: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  children?: React.ReactNode;
}

/** Button — immer vollrund, immer 13 px. */
export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "ink" | "olive" | "cream" | "outline-ink" | "outline-cream";
  /** Volle Breite (mobiles Menü, Buchungskarte). */
  block?: boolean;
  /** Rendert das Kind (z. B. einen Link) mit Button-Styling. */
  asChild?: boolean;
  href?: string;
}

/** Ausgezeichneter Text-Link: Linie aus border-bottom, Pfeil wandert 2 px. */
export interface CtaLinkProps extends React.ComponentProps<"a"> {
  /** cream (auf Foto/Olive) oder ink (auf Papier). */
  tone?: "cream" | "ink";
  icon?: React.ReactNode;             // ArrowRight oder ArrowUpRight, 0.68em
}

/** Eine Angebotszeile mit Preis. */
export interface PriceRowProps {
  title: string;
  meta: string;                        // „ca. 60 Min" — steht in ink-500 hinter dem Titel
  body: string;
  price: string;                       // „73 €" — Serif, lining-nums
  unit?: string;                       // „Stunde" — 0.55em, ink-500
  cta?: string;
  href?: string;
}

/** Eckdaten unter einem Angebotstext: drei Paare, Haarlinie darüber. */
export interface FactsProps {
  items: [string, string][];
  inverse?: boolean;
}

/** Zitat mit Initialen-Kachel, Name und Anlass. */
export interface QuoteProps {
  text: string;
  name: string;
  initials: string;                    // 1–2 Buchstaben; die Kachel ist immer quadratisch
  role: string;
}

/** Akkordeon-Zeile einer Merkmal-Liste (im Bestand „Approach"). */
export interface AccordionProps {
  items: { title: string; body: string }[];
  /** Standard 0 — die erste Zeile ist offen. */
  defaultOpen?: number;
}

/** Kursliste und Termine einer Kursseite. */
export interface CourseTableProps {
  courses: { title: string; time: string; detail: string }[];
  facts: [string, string][];           // Preis · Ort · Zahlung
  termine: string[];                   // „07.11.2026" — wird zu Tag/Monat/Jahr zerlegt
  note?: string;
}

/** Formularfeld: keine Box, nur eine Linie unter dem Feld. */
export interface FieldProps extends React.ComponentProps<"input"> {
  label: string;                       // .meta-line über dem Feld
  /** textarea statt input. */
  multiline?: boolean;
  hint?: string;
}

/** Bildfläche mit dem einheitlichen Ton (.ph). */
export interface PhotoProps {
  src: string;
  alt: string;
  ratio?: string;                      // Tailwind-Verhältnis, Default aspect-[4/5]
  className?: string;
  sizes?: string;
  priority?: boolean;
  position?: string;                   // object-position
  fit?: "cover" | "contain";
  /** Verstärkte Olive-Multiplikation (42 % statt 14 %) für dunkle Motivlagen. */
  deep?: boolean;
}

export interface FooterProps {
  /** Laufschriftzeile am oberen Rand, aria-hidden. */
  marquee?: string;                    // „Raum für dich"
  year?: number;
}

export interface CookieBannerProps {
  /** localStorage-Schlüssel: cookiePreferences, cookieConsentGiven, cookieConsentTimestamp. */
  onAccept?: (prefs: { necessary: boolean; functional: boolean; analytics: boolean; marketing: boolean }) => void;
}

/** Cover-Rendition — nur für dieses Bundle, nicht im Repo. */
export interface CoverProps { title?: string; tagline?: string; }
