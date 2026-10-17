---
version: alpha
name: Editorial Olive
description: >-
  Ruhige redaktionelle Praxis-Website: Papier statt Weiß, Tinte statt Schwarz,
  eine einzige Akzentfarbe (Olive). Haarlinien statt Rahmen, zwei Schriften mit
  klarer Rollenteilung, viel Weißraum, Bewegung nur als leises Einblenden.
colors:
  primary: "#616949"
  primary-deep: "#4d5438"
  primary-soft: "#8d9375"
  primary-tint: "#e5e7db"
  neutral: "#f3f0e9"
  paper-soft: "#f8f6f1"
  paper-deep: "#eae6db"
  paper-dark: "#ded9cb"
  ink: "#1d1c17"
  ink-stark: "#3a3830"
  ink-muted: "#57554d"
  ink-body: "#67655d"
  ink-faint: "#8a877b"
  on-dark: "#f3f0e9"
  on-dark-muted: "rgba(243, 240, 233, 0.72)"
  on-dark-faint: "rgba(243, 240, 233, 0.45)"
  on-dark-veil: "rgba(243, 240, 233, 0.12)"
  line: "rgba(29, 28, 23, 0.13)"
  line-inverse: "rgba(243, 240, 233, 0.2)"
  white: "#ffffff"
typography:
  display-1:
    fontFamily: Hanken Grotesk
    fontSize: 60px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  display-1-serif:
    fontFamily: Cormorant Garamond
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "0em"
  display-2:
    fontFamily: Cormorant Garamond
    fontSize: 46px
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "0em"
  display-3:
    fontFamily: Cormorant Garamond
    fontSize: 29px
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "0em"
  quote:
    fontFamily: Hanken Grotesk
    fontSize: 43px
    fontWeight: 300
    lineHeight: 1.26
    letterSpacing: "-0.01em"
  lead-lg:
    fontFamily: Hanken Grotesk
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: "0em"
  lead:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  body:
    fontFamily: Hanken Grotesk
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0em"
  meta:
    fontFamily: Hanken Grotesk
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.02em"
  label:
    fontFamily: Hanken Grotesk
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.055em"
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.18em"
  serif-title:
    fontFamily: Cormorant Garamond
    fontSize: 26px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "0em"
    fontFeature: lining-nums
  brand-mark:
    fontFamily: Cormorant Garamond
    fontSize: 21px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.18em"
  brand-sub:
    fontFamily: Cormorant Garamond
    fontSize: 9px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.36em"
  button:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
rounded:
  none: 0px
  xs: 6px
  sm: 8px
  full: 9999px
spacing:
  3xs: 4px
  2xs: 8px
  xs: 12px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  2xl: 64px
  3xl: 96px
  section-y: 136px
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.neutral}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 16px 28px
    height: 46px
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
  button-accent:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 16px 28px
  button-accent-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
  button-inverse:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 16px 28px
  button-inverse-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
  button-outline:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 16px 28px
    size: 46px
  button-outline-hover:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
  button-outline-inverse:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 16px 28px
  card-price:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.serif-title}"
    rounded: "{rounded.sm}"
    padding: 32px
  card-paper:
    backgroundColor: "{colors.paper-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 32px
  card-photo:
    backgroundColor: "{colors.paper-deep}"
    rounded: "{rounded.xs}"
  quote-block:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.ink}"
    typography: "{typography.quote}"
    rounded: "{rounded.none}"
  field:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 8px 0
  label-dot:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
  label-inverse:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
  pill-on-photo:
    backgroundColor: "{colors.ink-stark}"
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: 7px 14px
  nav-link:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink-stark}"
    typography: "{typography.body}"
  nav-link-inverse:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
---

## Overview

„Editorial Olive" ist das Gestaltungssystem der Praxis-Website von Stefanie
Kaindl (Craniosacrale Körperarbeit & Yoga). Es ist aus einer redaktionellen
Studio-Vorlage abgeleitet, aber inhaltlich und strukturell eigenständig.

Drei Entscheidungen tragen das ganze System:

1. **Papier statt Weiß, Tinte statt Schwarz.** Die Grundfläche ist ein warmes
   Papier (`#f3f0e9`), die Schrift ein warmes Tinte-Schwarz (`#1d1c17`). Reines
   Weiß und reines Schwarz kommen nur in Ausnahmefällen vor.
2. **Eine einzige Akzentfarbe: Olive (`#616949`).** Es gibt keine zweite
   Markenfarbe. Olive ist Fläche (Bänder, Footer, Preiskarten), Text (Links auf
   Papier) und Hover-Ziel. Alles andere ist Papier oder Tinte.
3. **Keine Kästen.** Flächen statt Karten, Haarlinien statt Rahmen, Weißraum
   statt Schatten. Ein Block ist entweder eine ruhige Fläche oder eine dünne
   Linie — niemals ein umrandeter Kasten mit Schatten.

Der Ton ist leise und ruhig: große Serif-Überschriften mit niedrigem Gewicht,
viel Luft, eine einzige Schriftfamilie für alles Lesbare und eine zweite nur für
Wortmarke, Zitate, Preise und kursive Akzente. Bewegung ist immer ein
Einblenden, nie ein Effekt.

**Für KI-Modelle / Agenten:** Dieses Dokument ist die einzige Quelle der
Wahrheit. Werte aus dem YAML oben sind normativ; Hex-Werte nie neu erfinden.
Wenn eine benötigte Rolle nicht existiert, eine bestehende wiederverwenden —
nicht eine neue Farbe einführen.

## Colors

- **Primary `#616949` (Olive):** die eine Akzentfarbe. Trägt die Olive-Bänder
  (`/yoga`, „Meine Arbeitsweise", Footer), Preiskarten, Buttons auf Olive und
  Text-Links auf Papier (5,1:1 auf Papier). Tief `#4d5438` ist der
  Hover-Zustand, weich `#8d9375` nur für Dekor (Kreisbögen, Punkte).
- **Neutral `#f3f0e9` (Papier):** Standardhintergrund des `body`. Abstufungen:
  `#f8f6f1` (aufgehellte Fläche, Karten), `#eae6db` (gedämpft — Zitatband,
  Formulare), `#ded9cb` (dunkelste Papierstufe, Bildplatzhalter).
- **Ink `#1d1c17`:** Überschriften und Primärtext (15:1 auf Papier). Gedämpft
  wird über Alpha, nicht über neue Hex-Werte: `--ink-80` `rgba(29,28,23,.8)` (8,3:1),
  `--ink-60` `rgba(29,28,23,.68)` (5,3:1 auf `#eae6db`), `--ink-45`
  `rgba(29,28,23,.65)` (5,0:1 auf Papier), `--ink-400` `#8a877b` (3,2:1).
- **On-dark (`#f3f0e9`, „Cream"):** Text auf Olive und auf dunklen Fotos. Rollen:
  voll (5,1:1 auf Olive), `rgba(243,240,233,.72)` für sekundären Text,
  `rgba(243,240,233,.45)` nur für Zierzeilen in Großschrift.
- **Lines:** `rgba(29,28,23,.13)` auf Papier, `rgba(243,240,233,.2)` auf Olive.
  Haarlinien sind 1 px und immer horizontal.

Kontrast-Regel: **Nie `--ink-400` unter 24 px** (3,2:1) und **nie
`--cream-70` für Kleinschrift auf Olive** (3,5:1). Beides ist im Bestand an
fünf Stellen vorhanden (`.label-inverse`, 10 px) — wer neu baut, nimmt dort
volles `--cream` (5,1:1).

## Typography

Zwei Schriften, zwei klar getrennte Rollen. Nie eine dritte Familie, nie eine
zweite Familie innerhalb derselben Zeile.

- **Hanken Grotesk** (300/400/500 + Kursiv) — alles Lesbare: Überschriften der
  Hero, Fließtext, Navigation, Labels, Zitate, Buttons. Humanistische Grotesk,
  die bei großen Graden redaktionell statt nach Standard-UI aussieht.
- **Cormorant Garamond** (300–600 + Kursiv) — Wortmarke, Sektions- und
  Karten-Überschriften, Zitate, Preise, CTA- und Footer-Zeile, kursive Akzente.
  Feingliedrig mit kleiner x-Höhe: große Grade brauchen sie, kleine nicht.
  Deshalb steht sie auf Gewicht 400/500 und immer eine Stufe größer als die
  Sans. `font-variant-numeric: lining-nums` ist Pflicht — Cormorant setzt sonst
  Mediävalziffern (3, 4, 5, 7, 9 mit Unterlänge), was bei Preisen unruhig wirkt.

Eine Skala, zentral definiert (`.d1` → `.d2` → `.d3`), dazu Textgrade:

| Rolle | Klasse | Größe | Familie |
|---|---|---|---|
| Hero | `.d1-hero` | `clamp(1.95rem, 3.9vw, 3.75rem)` | Serif, 400 |
| Unterseiten-Hero | `.d1-hero` + `.d1` | `clamp(2.35rem, 6vw, 5.5rem)` | Serif, 400 |
| Sektion | `.d2` | `clamp(1.7rem, 3vw, 2.9rem)` | Serif, 400 |
| Karte | `.d3` | `clamp(1.3rem, 1.9vw, 1.8rem)` | Serif, 400 |
| Zitat | `.quote` | `clamp(1.45rem, 2.9vw, 2.7rem)` | Sans, 300 |
| Einstieg | `.lead-lg` | `clamp(1.05rem, 1.5vw, 1.4rem)` | Sans, 400 |
| Vorlauf | `.lead` | `clamp(0.95rem, 1vw, 1.125rem)` | Sans, 400 |
| Fließtext | `.body-copy` | `0.9375rem` | Sans, 400 |
| Metazeile | `.meta-line` | `0.6875rem` | Sans, 400 |
| Label | `.label` | `0.625rem` | Sans, 400 |

Regeln: Display-Headlines laufen auf `line-height: 1.06` und
`letter-spacing: -0.015em` mit `text-wrap: balance`. Kursive Akzente (`.accent`,
`em` in einer Display-Zeile) erben Familie, Gewicht und Größe ihres Textes
(`font-size: 1em`) — sie sind Auszeichnung, nie eine zweite Stimme. Jede Zeile
einer zweizeiligen Hero-Headline ist ein eigener `<span>`-Block, damit der
Browser die Zeilen einzeln ausbalanciert.

## Layout

- **Ein Container für alles:** `.shell` = `max-width: 1560px`, zentriert,
  `padding-inline` 24 px (Mobil) / 40 px (ab 768 px) / 56 px (ab 1280 px).
  Kopfzeile und Sektionen teilen exakt dieses Raster.
- **Vertikaler Rhythmus:** `.section` = `clamp(4rem, 8vw, 8.5rem)` (64–136 px),
  `.section-tight` = `clamp(3rem, 5.5vw, 6rem)` (48–96 px). Sektionen atmen groß;
  Abstände innerhalb einer Sektion kommen aus der Spacing-Skala.
- **Spacing-Skala:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px. Zwischenwerte
  (10 px, 28 px) sind erlaubt, aber nicht als neue Stufe.
- **Raster:** 12 Spalten für redaktionelle Sektionen (Label links, Inhalt
  rechts), `lg:grid-cols-12`; Kartenreihen als 2/3 Spalten. Kein 5-Spalten- oder
  asymmetrisches Sonderraster.
- **Sprungmarken:** `section[id]`, `div[id]` → `scroll-margin-top: 6.5rem`, sonst
  landet ein Anker unter der festen Kopfzeile.
- **Kopfzeile:** fix, transparent über dem Hero mit einem Verlauf nach unten
  (`.nav-clear`), im gescrollten Zustand Papier mit 92 % Deckkraft, Blur 10 px
  (`.nav-solid`). Höhe 74/92 px transparent, 64/70 px gescrollt.

## Elevation & Depth

Tiefe entsteht **fast nie** über Schatten. Hierarchie kommt aus Fläche
(Papier → Olive → dunkles Foto), Haarlinien und Weißraum.

- Einziger Schatten: `.warm-shadow` =
  `0 1px 2px rgba(29,28,23,.04), 0 12px 32px -24px rgba(29,28,23,.35)` — warm,
  weit und sehr schwach. Nur für schwebende Elemente (Overlay, Popover,
  mobile Menüfläche).
- Ein Overlay liegt unter einer Abdunklung, nicht über einem Schatten:
  `.hero-scrim` / `.nav-clear` sind Verläufe in `rgba(40,27,16,…)`.
- Schrift über Foto bekommt einen weichen Hof (`.on-photo`:
  `0 1px 14px rgba(18,14,10,.5), 0 1px 3px rgba(18,14,10,.35)`), nicht zusätzliche
  Abdunklung.

## Shapes

- **Radius ist selten.** Flächen, Haarlinien, Felder, Bilderrahmen: 0 px.
  Karten und Bilder: 6–8 px (`rounded.xs` / `rounded.sm`) — gerade genug, um
  nicht scharf zu wirken.
- **Alles Runde ist vollrund:** Buttons, Pills, Punkte, Kreise, runde
  Bildausschnitte, die dekorativen Kreisbögen → `9999px`.
- **Dekor:** dünne Kreisbögen (`1px`, `--cream-line` / `--cream-15`, außerhalb
  des Sichtfelds angeschnitten) und die Blume des Lebens als Linienzeichnung
  hinter der Footer-Wortmarke. Immer `pointer-events: none`, immer sehr leise.
- **Icons:** nur Pfeile (`.icon-arrow`, `0.68em` mit der Schrift skalierend,
  auf der Grundlinie). Keine gefüllten oder farbigen Icon-Sets.

## Components

- `button-primary` — die Hauptaktion („Termin buchen"), schwarze Tinte auf
  Papier, vollrund, 13 px. Hover wird Olive-tief. **Genau eine pro Ansicht.**
- `button-accent` — Olive auf Olive-Flächen (Footer, Buchungsband).
- `button-inverse` — Papier auf dunklem Foto/Overlay; Hover geht auf reines Weiß.
- `button-outline` / `button-outline-inverse` — sekundäre Aktion: 1 px Linie,
  transparent, Hover füllt (Tinte bzw. Papier). Nie mit primärer Aktion
  gleichzeitig gleich gewichtet.
- `card-price` — Preiskarte: Olive-Fläche, `rounded.sm`, Serif-Titel, Preis als
  große Serif-Zeile mit Einheit in `0.55em`; Fußzeile mit Haarlinie.
- `card-paper` — die einzige Papierkarte (CTA-Block), 8 px, kein Schatten.
- `card-photo` — Bildfläche `.ph`: `rounded.xs`, warmer Gradiation-Filter
  (`sepia(.16) saturate(.86) contrast(1.03)` plus Olive-Multiplikation 14 %,
  tief 42 %). Bilder sitzen **ohne** Overlay-Titel; Text steht unter dem Bild.
- `quote-block` — Zitat in der Sans (43 px, Gewicht 300), Name und Anliegen
  unter einer Haarlinie, Zähler „01 / 04" auf der Viertellinie.
- `field` — Formularfeld ohne Box: nur eine 1-px-Linie unten, Fokus färbt sie
  Olive. Kein Rahmen, kein Hintergrund, kein Placeholder-Grau unter 4,5:1.
- `label-dot` / `label-inverse` / `pill-on-photo` — der Eyebrow: 10 px mit
  vorangestelltem Punkt (2,2 px, `currentColor`, 75 % Deckkraft). Auf Papier
  gedämpfte Tinte, auf Olive/Foto Papier-Creme; als Pille auf Foto zusätzlich
  `rgba(243,240,233,.12)` Fläche, 1 px Rand `.28` und `backdrop-filter: blur(6px)`.
- `nav-link` — Menüpunkt, dessen 1-px-Linie beim Hover von der Mitte aufwächst
  (`scaleX(0 → 1)`, 350 ms); die aktive Seite trägt sie fest.
- `footer` — Olive-Fläche, Laufschrift am oberen Rand, Adress- und Zeitspalten,
  die Wortmarke über die volle Inhaltsbreite (Größe = Inhaltsbreite / 10,898),
  darunter „Cranio Sacrale · Yoga · Pfaffenhofen" und die Legal-Zeile.

Interaktions- und Bewegungsregeln: Übergänge 200–350 ms; Einblenden beim
Scrollen 900 ms mit `cubic-bezier(0.2, 0.7, 0.2, 1)` und 16 px Versatz
(`[data-reveal]`). Fokus ist immer `outline: 2px solid var(--primary)` mit
3 px Offset. `prefers-reduced-motion: reduce` schaltet jede Animation und
Laufschrift ab — verpflichtend, nicht optional.

## Do's and Don'ts

**Do**

- Olive einmal pro Ansicht als Akzent einsetzen; Olive ist Primär, nicht Deko.
- Hierarchie über Größe, Gewicht und Weißraum herstellen (Papier → Olive →
  dunkles Foto), nicht über Schatten und Rahmen.
- Gedämpfte Töne über Alpha aus `--ink` / `--cream` mischen, nicht als neue
  Hex-Werte anlegen.
- Bei jeder Textfarbe den Kontrast gegen die **tatsächliche** Fläche prüfen
  (transparente Flächen bis zur ersten deckenden Farbe auflösen).
- Bilder über `.ph` laufen lassen, damit alle Fotos denselben warmen Ton haben.
- `text-wrap: balance` für Überschriften, `lining-nums` für Zahlen in Serif.

**Don't**

- Keine zweite Akzentfarbe. Türkis, Blau, Rot, Korall gibt es nicht — es gab
  sie (Legacy-Tokens `sage` / `therapeutic` / `taupe`, türkis `#67B1B1`), sie
  sind auf Papier/Tinte/Olive umgestimmt und dürfen nicht zurückkommen.
- Keine weißen Karten mit `rounded-2xl` und Schatten — das war der Zustand vor
  dem Redesign. (Noch im Bestand: `/retreat` und die 404-Seite; beim Anfassen
  auf dieses System umbauen.)
- Keine Schatten außer `.warm-shadow` und `.on-photo`.
- Keine Schrift außerhalb der zwei Familien, keine dritte oder vierte
  Schriftgröße pro Block, keine Kursiv-Serif als zweite Stimme in einer
  Sans-Überschrift (kursiv erbt immer die Familie des Textes).
- Keine Emoji als Icons, keine Buchstabenkreise als Platzhalter, keine
  Verlaufsflächen als Hero-Hintergrund.
- `--ink-400` nicht für Kleinschrift (3,2:1); `--cream-70` nicht für
  Kleinschrift auf Olive (3,5:1).
- Keine zweite Akzentfarbe in Fotos: Gradiation ist Teil des Systems, nicht
  eine Bildfilter-Spielwiese.
