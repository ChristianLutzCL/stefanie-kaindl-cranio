# Design-Brief — „Editorial Olive" (Redesign-Test)

Branch: `redesign/editorial-olive` · Basis: `main` (Stand: Retire-Retreat / 404-Page)

## 1. Referenz

Vorlage ist die Design-Vorlage „OVIA" (Yoga-/Bewegungsstudio, geliefert als
Ganzseiten-Screenshot). Sie ist die Quelle für **Palette, Typografie, Rhythmus
und die Bild-Devices** — nicht für Inhalte, Struktur der Navigation oder
Marken-Sprache. Alles Sichtbare wird mit den echten Inhalten der Praxis
(Leistungen, Preise, Adresse, Öffnungszeiten, Stimmen) neu geschrieben.

### Was die Vorlage strukturell macht

| Abschnitt | Device |
|---|---|
| Hero | Vollbild-Foto, Wortmarke zentriert oben, Navigation links/rechts davon aufgefächert, **Eyebrow als Pille**, zentrierte zweizeilige Display-Headline mit einem *kursiven* Wort, Pfeil-Link darunter |
| Story | zentriertes Label, darunter eine Display-Zeile, ein zentrierter Absatz und ein zentrierter Pfeil-Link |
| Bildband | randloses Karussell: mittleres Bild größer, äußere angeschnitten, **Pfeile zentriert darunter** |
| Praxis | zentriertes Label + zentrierte Headline, drei Fotokarten mit Titel und zwei Zeilen Text **unter** dem Bild (keine Overlays) |
| Ablauf | flache olivgrüne Fläche: Label + Headline oben links, Foto links, drei Punkt-Positionen mit Haarlinien rechts |
| Stimmen | Label links, Zähler „01 / 04" rechts, großes Zitat mit kursivem Serif-Akzent, Name · Anliegen, Pfeile + Segmentlinie unten |
| Raum-Band | vollflächiges dunkles Foto, Overlay-Text oben links, zwei Bildkarten mit Bildunterschrift, dekorative Kreisbögen |
| Angebote | drei Olivkarten (Radius 8 px), mittlere höher und mit „● Empfohlen"; im Kartenfuß Haarlinie, Pfeil-Link und der große Serif-Preis |
| Für dich | drei Karten mit Bild, Titel, Text und Pfeil-Link |
| CTA | vollflächig dunkel, **Papierkarte** mittig, Label + Display-Headline + Button |
| Footer | olivgrün, Laufschrift oben, Link-Spalten, „Bewegung für jeden Tag.", Adresse/Zeiten, **riesige Wortmarke** über die volle Breite, Zeile „Cranio Sacrale · Yoga · Pfaffenhofen", Legal-Zeile |

Wiederkehrende Devices: das Punkt-Label `● Section`, die Eyebrow-**Pille** auf Foto/Olive,
Haarlinien statt Rahmen, Pfeil-Links (`Mehr über mich ↗`), papillose Flächen mit 6–8 px
Radius an Bildern und Karten, dekorative Kreisbögen im dunklen Bereich, Laufschrift am Footer-Rand,
Karussells mit Pfeilen (Bildband ohne Segmentlinie, Zitate mit Segmentlinie + Zähler).

### Palette (aus der Vorlage abgeleitet)

| Rolle | Wert |
|---|---|
| Papier | `#f3f0e9` (tiefer `#eae6db`) |
| Tinte | `#1d1c17` |
| Olive (Primär) | `#616949`, tief `#4d5438` |
| Text gedämpft | `rgba(29,28,23,.6)` auf Papier, `rgba(243,240,233,.7)` auf Olive |
| Linien | `rgba(29,28,23,.13)` / `rgba(243,240,233,.20)` |

### Typografie

- **Sans** (Überschriften, Text, Navigation, Labels): **Hanken Grotesk** 300/400/500 (+ Italic) —
  humanistische Grotesk, wirkt bei großen Graden ruhig und redaktionell, ohne nach Standard-UI-Schrift auszusehen.
  Display: 300, `letter-spacing:-.015em`, `line-height:1.06`
- **Serif** (Wortmarke, Zitate, CTA- und Footer-Zeile, Plannamen, Preise, kursive Akzente):
  **Cormorant Garamond** 300–600 (+ Italic) — feingliedrige Garamond-Revival, gibt der Seite den
  editoriale Zug; gegenüber der Sans in Größe und Gewicht angehoben
  (`.display em` 1.14em/400, `.serif` 500, `.quote` 1.6–2.85rem).
  Alternative aus dem Vergleich: Newsreader / Source Serif 4 (näher an Canela Text,
  der Referenz-Serife — Canela, Tiempos, Lyon, Ivar und Suisse Works sind kommerziell
  und daher nicht verwendbar)
- **Labels/„Eyebrows"**: 10 px, Punkt davor, Laufweite `.055em`, gedämpfte Tinte — die kleinste Schrift
  der Seite, wie „● How We Practice" in der Referenz. Auf dunklen Flächen `--cream-70`, auf Papier `rgba(29,28,23,.6)`
- **Logo-Lockup**: „STEFANIE KAINDL" in Cormorant Garamond (Versalien, Laufweite `.18em`, Gewicht 500) mit
  „CRANIO SACRALE" darunter in eigener Farbe — Olive auf Papier, abgeschwächtes Creme über dem Hero.
  Im Footer steht dieselbe Zeile unter der großen Wortmarke
- Eine Skala: `.d1` Hero → `.d2` Sektion → `.d3` Karte, plus `.lead` / `.body-copy` / `.label`

## 2. Aktuelle Fehler (main) → Fix

| Befund heute | Fix im Redesign |
|---|---|
| Türkis `#67B1B1` an Dutzenden Stellen (Buttons, Punkte, Ringe, Verläufe) konkurriert mit den Fotos | Eine Akzentfarbe: Olive. Türkis-Hex global ersetzt, Tokens `cream/sage/taupe/therapeutic` auf Papier/Tinte/Olive umgestimmt |
| Jeder Block ist eine weiße Karte mit `rounded-2xl` + `border-cream-200` + Schatten | Keine Kästen: Haarlinien, Fläche, Weißraum. Nur Preis-Karten und die CTA-Karte sind Flächen |
| Viele Schriftgrößen aus Tailwind-Utilities, Überschriften 2xl/3xl willkürlich | Eine Display-Skala, zentral in `globals.css` |
| Emoji-🍪-Banner, Kreise mit Buchstaben (CS/KC/YL/WB), Verlaufs-Hero in Türkis | Ruhige Flächen, ein Bild pro Aussage, Verlauf nur als Bild-Übergang |
| Startseite ist eine Liste von Abschnitten ohne Rhythmus | Abwechselnde Sektionen mit Label links / Inhalt rechts, vollflächige Bänder |

## 3. Grenzen dieses Tests

- **Fotos**: Der Bestand (ein helles Studio-Shooting) ist klinisch-hell, die
  Vorlage lebt von warmem, architektonischem Licht mit harten Schatten. Das
  Redesign vereinheitlicht die Bilder mit einer warmen Gradiation
  (`.ph`: leichte Sepia-/Olive-Multiplikation) — ein echtes Shooting mit
  gerichtetem Licht bleibt die eigentliche Lösung.
- Umgesetzt sind **globale Tokens, Header, Footer und die Startseite**. Die
  Unterseiten erben Palette, Header und Footer, ihre Sektionen sind aber noch
  nicht auf das neue Layout umgebaut.
- Nicht übernommen: Newsletter-Formular (kein Endpunkt in der Codebasis),
  Badge „2026", Shop-/Klassen-Buchung.
- Nicht angefasst: Rechtsseiten, Cookies, Stripe-Route, Notion-Anbindung.
