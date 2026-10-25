Stefanie Kaindl — Craniosacrale Körperarbeit & Yoga in Pfaffenhofen an der Ilm. Zwei
gleichwertige Angebote (**Cranio** und **Yoga**), eine Person, ein ruhiger Ton. Das
Aussehen ist **Papier, Tinte und eine einzige Olive**: warme Papierfläche statt Weiß,
Tinte statt Schwarz, große Serif-Überschriften in niedrigem Gewicht, Haarlinien statt
Rahmen, und Olive (`#616949`) als einzige Akzentfarbe.

Dieses Bundle beschreibt das System „Editorial Olive" so, wie es im Repo
`stefanie-kaindl-cranio` tatsächlich steht — Tokens, Komponenten-Verträge, Assets.
Es ist aus dem Bestand abgeleitet, nicht entworfen: jeder Wert hat eine Quelle.

**Zum Ansehen: `overview.html` öffnen** — eine Seite mit Tokens, Typografie, Formen,
allen achtzehn Renditionen, Stimme, Assets und den offenen Punkten. Sie braucht keinen
Server und kein Build, nur einen Browser.

## Inhalt & Stimme

- **Anrede ist immer `du`** — „Bei mir findest du zwei Wege, wieder bei dir anzukommen."
  Das `Sie` gibt es nur in den Rechtstexten (Impressum, Datenschutz,
  Cookie-Einstellungen), wo es hingehört.
- **Keine Ausrufezeichen, keine Emoji, keine Werbeadjektive.** Der Ton ist leise: „Es
  muss nicht perfekt sein. Es muss nur beginnen."
- **Nie „Praxis".** Es ist keine Praxis. Erlaubt sind „Adresse", „Seiten",
  „Behandlungsraum", „Einblicke in die Räume", „Über mich & Kontakt".
- **„Hausbesuche" ist kein Angebot** und kommt nirgends vor. Die Angebote, wie der
  Footer sie listet: Cranio für Erwachsene · Cranio-Intensiv · Cranio für Babys &
  Kinder · Fußreflexzonenmassage · Yoga am Donnerstag. **Kein Paket, keine
  Erstberatung** — beides hat die Kundin im Okt 2026 streichen lassen.
- **Wortmarke: „Cranio Sacral".** Das Angebot heißt ausgeschrieben „Craniosacrale
  Körperarbeit" (in der Hero-Eyebrow als „Craniosacrale Körperarbeit & Yoga").
- **Zahlen sind exakt und stammen aus ihrem Material:** Cranio für Erwachsene 73 €
  (ca. 60 Min), Cranio-Intensiv 100 € (90 Min), Babys & Kinder 53 € (20–40 Min),
  Fußreflexzonenmassage mit kurzer Cranio 50 € (ca. 40 Min), Yoga 14 €/h, Do 17:30 &
  19:00 in Paunzhausen. Die Preisliste spiegelt ihre Calendly-Terminarten 1:1. Keine
  erfundenen Preise, Termine oder Stimmen — die vier Zitate des Bestands sind die
  einzigen.
- **Sektionslabels sind nummerierte Eyebrows** — `01 · Cranio`, `02 · Yoga` auf der
  Startseite; auf den Unterseiten ohne Nummer (`Cranio`, `Termine`, `Stimmen`).
- **Überschriften sind kurze Aussagesätze mit Punkt** — „Raum, um anzukommen.",
  „Zwei Kurse am Donnerstag.", „Zur Ruhe kommen."

## Farbe

- Grundfläche ist `paper` (`#f3f0e9`); `paper-soft` für aufgehellte Flächen,
  `paper-deep` für das Zitatband, die Formularsektion und den Bildgrund.
- Text in drei Stufen: `ink` (Überschriften, 15:1) → `ink-60` (Lese- und
  Sekundärtext, 5,5:1 auf Papier / 5,3:1 auf `paper-deep`) → `ink-45` (Metazeilen,
  Platzhalter, 5,0:1). `ink-400` (3,2:1) ist **nur für große Schrift**.
- **Olive ist knapp.** Es gibt keine zweite Markenfarbe. Olive ist Fläche
  (Bänder, Footer), Text-Link auf Papier (5,1:1), Button-Variante und Fokusring;
  `olive-deep` ist ausschließlich das Hover-Ziel, `olive-soft` ausschließlich Dekor.
- **Invers** (Olive oder dunkles Foto) läuft über Cream-Stufen: voll (5,1:1 auf
  Olive), `cream-80` (4,6:1 — die kleinste Stufe, die dort AA hält), `cream-70`
  (3,5:1 — nur auf dunklem Foto, dort 8,3:1), `cream-45`/`cream-60` (Dekor).
- Es gibt **keinen Dark-Mode**. Die „zweite Fläche" ist Olive bzw. das Foto, keine
  Theme-Umschaltung.
- Gedämpfte Töne entstehen **über Alpha aus `ink` oder `cream`** — nicht als neue
  Hex-Werte. Jede neue Textfarbe wird gegen die *tatsächliche* Fläche gemessen.

## Typografie

Zwei Familien, zwei Rollen, keine dritte — und kein Mono:

- **Hanken Grotesk** (300/400/500 + Kursiv) — alles Lesbare: Hero- und
  Sektionsüberschriften, Fließtext, Navigation, Labels, Zitate, Buttons.
- **Cormorant Garamond** (300–600 + Kursiv) — Wortmarke, große Überschriften,
  Preise, Tage und Zeiten, CTA- und Footer-Zeile, kursive Akzente. Sie ist
  feingliedrig mit kleiner x-Höhe: große Grade brauchen sie, kleine nicht. Deshalb
  steht sie auf 400/500 und immer eine Stufe **größer** als die Sans. In Zahlen
  immer `font-variant-numeric: lining-nums` — Cormorant setzt sonst Mediävalziffern
  (3, 4, 5, 7, 9 mit Unterlänge), was bei Preisen unruhig wirkt.

Eine Skala, zentral definiert:

| Rolle | Klasse | Größe | Familie |
|---|---|---|---|
| Hero | `.d1-hero` | `clamp(1.95rem, 3.9vw, 3.75rem)` | Serif 400 |
| Unterseiten-Hero | `.d1-hero.d1` | `clamp(2.35rem, 6vw, 5.5rem)` | Serif 400 |
| Sektion | `.d2` | `clamp(1.7rem, 3vw, 2.9rem)` | Serif 400 |
| Fläche (Footer, CTA-Band) | `.display-serif.d2` | `clamp(2.15rem, 4.5vw, 4rem)` | Serif 400 |
| Karte | `.d3` | `clamp(1.3rem, 1.9vw, 1.8rem)` | Serif 400 |
| Preis | `.serif` | `clamp(1.5rem, 2vw, 1.85rem)` | Serif 500 |
| Zitat | `.quote` | `clamp(1.45rem, 2.9vw, 2.7rem)` | Sans 300 |
| Einstieg | `.lead-lg` | `clamp(1.05rem, 1.5vw, 1.4rem)` | Sans 400 |
| Vorlauf | `.lead` | `clamp(0.95rem, 1vw, 1.125rem)` | Sans 400 |
| Fließtext | `.body-copy` | `0.9375rem` | Sans 400 |
| Button/CTA | — | `0.8125rem` | Sans 400 |
| Metazeile | `.meta-line` | `0.6875rem` | Sans 400 |
| Label | `.label` | `0.625rem` | Sans 400 |

Regeln: Display-Headlines laufen auf `line-height: 1.06`, `letter-spacing: -0.015em`
und `text-wrap: balance`; kursive Akzente erben Familie, Gewicht und Größe ihres Textes
(`font-size: 1em`) — sie sind Auszeichnung, nie eine zweite Stimme. Jede Zeile der
zweizeiligen Hero-Headline ist ein eigener `<span>`, damit der Browser die Zeilen
einzeln ausbalanciert.

## Raster, Radius, Tiefe

- **Ein Container für alles:** `.shell` — `max-width: 1560px`, zentriert,
  `padding-inline` 24 px / 40 px (ab 768) / 56 px (ab 1280). Kopfzeile und Sektionen
  teilen exakt dieses Raster.
- **Vertikaler Rhythmus:** `.section` = `clamp(4rem, 8vw, 8.5rem)`,
  `.section-tight` = `clamp(3rem, 5.5vw, 6rem)`. Sektionen atmen groß; Abstände
  innerhalb einer Sektion kommen aus der 4-px-Skala.
- **Raster:** 12 Spalten für redaktionelle Sektionen (Label links, Inhalt rechts),
  2/3 Spalten für Kartenreihen. Kein asymmetrisches Sonderraster.
- **Radius ist selten:** Flächen, Preiszeilen, Felder, Bildrahmen sind 0 px. Die
  wenigen echten Karten nehmen 6–8 px. **Alles Runde ist vollrund** (`9999px`):
  jeder Button, jede Pille, jeder Punkt, die Kreisbögen.
- **Tiefe kommt aus Fläche, Haarlinie und Weißraum** — nicht aus Schatten. Es gibt
  genau zwei: `.warm-shadow` (Overlay, Popover, mobile Menüfläche) und den Schatten
  des Papierblocks auf dem dunklen Buchungsfoto. Dazu `.on-photo` — ein weicher Hof
  hinter Schrift auf Bildern, kein Abdunkeln des Bildes.

## Bewegung

Alles ist ein Einblenden, nie ein Effekt. `cubic-bezier(0.2, 0.7, 0.2, 1)` für jede
Bewegung; 200 ms für Hover, 300 ms für Zustandswechsel, 900 ms mit 16 px Versatz für
`[data-reveal]` beim Scrollen, 1,1 s für den gestaffelten Hero-Auftritt. Hover-Bewegungen
sind winzig (Pfeil 2 px, Menülinie `scaleX 0→1`). Fokus ist immer
`outline: 2px solid var(--olive)` mit 3 px Offset.
**`prefers-reduced-motion: reduce` schaltet jede Animation, die Laufschrift und alle
Reveals ab** — verpflichtend, nicht optional.

## Komponenten

Achtzehn Renditionen, jede mit `preview.html` (eigenständig: verlinkt `tokens.css` und
`bundle.css`) und `README.md` (Vertrag: Aufbau, Regeln, „Nicht", Props). Das Board
`components/index.html` zeigt alle auf einer Seite.

| Rendition | Gruppe | Quelle im Repo |
|---|---|---|
| `Cover` | Cover | — (Titelrendition, keine Komponente) |
| `Mark` | Brand | `navbar.tsx` · `footer.tsx` (Wortmarke im Fluss) |
| `Navbar` | Navigation | `src/components/navbar.tsx` |
| `Hero` | Layout | `src/app/hero.tsx` |
| `Label` | Text | `globals.css` (`.label`, `.label-caps`, `.pill`) |
| `SectionHead` | Layout | `src/components/editorial.tsx` |
| `PageIntro` | Layout | `src/components/editorial.tsx` |
| `Button` | Actions | `globals.css` (`.btn-*`) |
| `CtaLink` | Actions | `globals.css` (`.cta-link`, `.cta-link-ink`) |
| `PriceRow` | Content | `src/components/editorial.tsx` |
| `Facts` | Content | `src/app/content.tsx` |
| `Quote` | Content | `src/app/content.tsx` · `globals.css` (`.quote`, `.initials`) |
| `Accordion` | Content | `src/app/content.tsx` (`Approach`) |
| `CourseTable` | Content | `src/app/yoga/content.tsx` |
| `Field` | Form | `src/app/kontakt/content.tsx` · `globals.css` (`.field`) |
| `Photo` | Media | `src/components/editorial.tsx` · `globals.css` (`.ph`) |
| `Footer` | Navigation | `src/components/footer.tsx` |
| `CookieBanner` | Overlay | `src/components/cookie-banner.tsx` |

## Icons

Nur **Pfeile**, als SVG mit fester Strichstärke — keine Unicode-Glyphen („↗" fällt je
nach Systemschrift dünn aus und sitzt nicht auf der Grundlinie). `ArrowRight`,
`ArrowUpRight`, `ArrowLeft` in `src/components/icons.tsx`, `viewBox 0 0 16 16`,
`stroke-width 1.25`, `stroke-linecap: square`, Farbe über `currentColor`, Größe
`0.68em` — die Icons skalieren mit ihrer Schrift und sitzen auf der Grundlinie.
Keine Icon-Sets, keine gefüllten Icons, keine Emoji.

## Logo

Die Wortmarke ist **Satz, keine Datei**: Cormorant 500, Versalien, 0.18em gesperrt,
darunter „CRANIO SACRAL" in 0.36em. Im Footer steht dieselbe Marke über die volle
Inhaltsbreite (Größe = Inhaltsbreite / 10,898).

Die Rasterlogos in `assets/Logos/` sind der **alte Stand vor dem Redesign** und tragen
Teal (`#9dcdcd` / `#67b1b1`) — sie gehören nicht zu dieser Palette, und das Favicon der
Live-Seite ist noch teal. Das ist ein offener Punkt, keine Empfehlung; beide Wege
stehen in `assets/Logos/README.md`.

## Dateien

| Datei | Was sie ist |
|---|---|
| `overview.html` | **Der Einstieg** — das ganze System auf einer scrollbaren Seite, gerendert statt beschrieben. Eigenständig: keine Skripte, keine Server, Schriften von Google Fonts. |
| `tokens.css` | Drop-in: alle Werte aus `globals.css` plus die Rollen, die im Repo nur als Tailwind-Klasse oder CSS-Klasse existieren. |
| `tokens.json` | Dieselben Tokens maschinenlesbar: 31 Farben × zwei Flächen (Papier/Invers) **mit Nutzungshinweis und gemessenem Kontrast**, 20 Typostile, Spacing, Radien, Schatten, Easing. |
| `design-system.json` | Manifest des Bundles (Gruppen, Dateien, Prüfsummen, Stand). |
| `components/index.html` | Das Board — alle 18 Renditionen auf einer Seite. |
| `components/<Name>/preview.html` · `README.md` | Eine Rendition pro Komponente, eigenständig lauffähig. |
| `og/` | Die **Share-Karten** im Format 1200×630 (zwei Quellen plus 2x-Master). Ausgeliefert als `../public/og-image.jpg` und `og-image-papier.png`; der Kontrast jeder Zeile ist gemessen und im `og/README.md` belegt. |
| `components/bundle.css` | Die Übersetzung der Komponenten in CSS über den Tokens (`.eo-*`). |
| `components/index.d.ts` | Props aller Komponenten, abgeschrieben aus dem TypeScript des Repos. |
| `assets/Logos/` · `assets/Imagery/` | Bildbestand (unverändert) mit Herkunft und Regeln. |
| `../DESIGN.md` · `../docs/design-styleguide.html` | Die ausführliche Spezifikation und der einseitige Styleguide, die es schon gab. |

## Wie anwenden

**Im Repo** gilt weiterhin `src/app/globals.css` + `tailwind.config.ts` als Wahrheit —
dieses Bundle beschreibt sie, es ersetzt sie nicht. Wer eine Seite baut, nimmt die
Klassen des Repos (`.shell`, `.section`, `.d2`, `.label`, `.cta-link`, `.btn-*`,
`.field`, `.ph`).

**In einem anderen Projekt (Plain CSS):** `tokens.css` einbinden und mit den Variablen
arbeiten; die semantischen Aliase (`--canvas`, `--text`, `--text-2`, `--accent`,
`--border`) sind für Komponenten gedacht, die Farbnamen (`--paper`, `--ink-60`,
`--olive`) für redaktionelles Layout.

**In Tailwind v4** die Tokens in `@theme inline` abbilden, damit die Namen im Markup
dieselben bleiben:

```css
@theme inline {
  --color-paper: var(--paper);      --color-paper-deep: var(--paper-deep);
  --color-ink: var(--ink);          --color-ink-2: var(--ink-60);
  --color-olive: var(--olive);      --color-olive-deep: var(--olive-deep);
  --font-sans: var(--font-sans);    --font-serif: var(--font-serif);
}
```

## Offene Punkte (gemessen, nicht vermutet)

Diese Dinge stehen im Bestand anders, als das System sie will. Sie sind hier notiert,
damit sie nicht als Vorbild kopiert werden:

1. **Cream auf Olive hält kein AA.** `cream-70` = 3,5:1, `cream-60` = 2,9:1,
   `cream-45` = 2,3:1 auf `#616949`. Im Footer tragen diese Werte Kleinschrift
   (Linktexte 14 px, Zeiten 13 px, Spaltenköpfe 11 px). Kleinste tragfähige Stufe auf
   Olive ist `cream-80` (4,6:1). Betroffen: `footer.tsx` (mehrere Stellen),
   `label-inverse` (10 px), die Laufschrift.
2. **`--ink-80` ist kein Hex-Wert.** `DESIGN.md` nennt dafür `#3a3830` (10,3:1);
   tatsächlich ist `--ink-80` `rgba(29,28,23,.8)` = `#484641` (8,3:1). Beides hält,
   aber die Zahl im Dokument stimmt nicht.
3. **Favicon und Apple-Touch-Icon sind noch teal** (`#9dcdcd`) — siehe
   `assets/Logos/README.md`.
4. **`/retreat` und die 404-Seite** trugen zuletzt noch Karten mit `rounded-lg`,
   weißen Flächen und Schatten — nicht das System. `/retreat` ist über
   `src/site-config.ts` abgeschaltet und wird beim Build entfernt; die 404-Seite ist
   inzwischen umgestellt.
5. **Die Legacy-Tokens** `cream`, `sage`, `taupe`, `therapeutic` in
   `tailwind.config.ts` sind auf Papier/Tinte/Olive umgestimmt, damit alte Unterseiten
   ohne Einzeländerung im neuen Ton erscheinen. Sie sind **kein** Teil dieser Palette —
   neuer Code benutzt `paper`, `ink`, `olive`.

## Nicht übernommen

- **Die React-Komponenten wurden nicht gebaut.** Jede Rendition ist statisches Markup,
  von Hand aus `globals.css`, `src/components/**` und den Seiten geschrieben und über
  `bundle.css` gestaltet. Sie zeigt den Vertrag (Abstände, Farbgebrauch, Textregeln),
  nicht den laufenden Code. Quelle für Code ist das Repo.
- **Keine Dark-Theme-Spalte** — die Seite hat keine. `tokens.json` nennt die zweite
  Spalte „Invers" (Zustand auf Olive und dunklem Foto).
- **Kein Mono-Font, keine Code-Komponente** — es gibt keinen Code auf der Seite.
- **Keine Schriftdateien:** Hanken Grotesk und Cormorant Garamond kommen aus
  `next/font/google`; die Vorschauen laden sie von Google Fonts.
- **`/retreat`** (abgeschaltet) und die Flyer-/Druck-Assets des Yoga Days sind nicht
  Teil dieses Bundles.
- **Keine Bildrechte-Frage geklärt:** die Fotos in `assets/Imagery/` sind die ihres
  Betriebs; die Zitate im Bestand stehen ohne Porträt, dafür mit Initialen-Kachel.
