# Share-Karten (og:image)

Zwei Karten im Format **1200 × 630** — das Format, das WhatsApp, X, LinkedIn,
Facebook, Slack und Signal unbeschnitten zeigen. Sie sind aus dem System gebaut,
nicht daneben: Farben, Schriften, Sperrungen und Bänder kommen aus
`../tokens.css`, die Bildsprache aus der Cover-Rendition (Papierkarte) und aus
`hero.tsx` (Fotokarte).

| Datei | Rolle | Ausgeliefert als |
|---|---|---|
| `og-image-foto.html` | **Die Karte, die die Website ausliefert.** Foto, Schleier, Bänder wie im Hero, darauf Wortmarke, „Craniosacrale Körperarbeit & Yoga", die Hero-Zeile und der CTA-Button. | `public/og-image.jpg` (88 KB) |
| `og-image.html` | Die Markenkarte auf Papier: Flächenband von der Oberkante angeschnitten, Haarlinie, Wortmarke, Angebotszeile, CTA-Button, Ort und Adresse. Kein Foto. | `public/og-image-papier.png` (76 KB) |

Beide sind **statisches HTML ohne Skripte**. Gerendert wird im echten Chromium,
weil die Karten `em`/`letter-spacing`-Feinheiten und Cormorant-Grade so exakt
abbilden — ein Bildprogramm würde die Wortmarke nachbauen müssen.

## Neu rendern

    cd design-system && python3 -m http.server 8099 --bind 127.0.0.1 &
    NODE_PATH=<pfad mit playwright> node .../og-render.js     # 2x-Master nach og/
    # dann auf 1200x630 herunterskalieren (LANCZOS) → public/og-image.jpg / og-image-papier.png

Die Master liegen als `master-og-image@2x.png` (flach, 78 KB) und
`master-og-image-foto@2x.jpg` (Foto, 2400 × 1260) daneben — daraus lassen sich
jederzeit 1x-, 1,5x- oder 2x-Fassungen ableiten. Der Foto-Master entsteht beim
Rendern zuerst als PNG (2,7 MB) und wird fürs Repo als JPEG q90 abgelegt.

Zum Messen schreibt dasselbe Skript zusätzlich eine Fassung **ohne Schrift**
(`master-og-image-foto-bg@2x.png`, wird nach der Messung gelöscht): nur damit lässt
sich der echte Kontrast der Buchstaben gegen ihren Hintergrund bestimmen (siehe unten).

## Text auf dem Foto — warum die Bänder da sind

Die Fotokarte war zuerst unlesbar, und zwar messbar: über dem hellen Bildbereich
mittig und unten rechts sank der Kontrast der Schrift auf **1,8:1** (Adresse) und
**2,9:1** (Headline) — AA verlangt 4,5:1 für Kleinschrift, 3:1 ab 24 px. Ein
Kontrast gegen den *mittleren* Bildton hätte das nie gezeigt; entscheidend ist der
hellste Bildpunkt **hinter den Buchstaben**.

Deshalb liegen drei weich auslaufende Bänder über dem Foto — dieselbe Lösung wie
`.hero-text-band` auf Mobil, nicht ein flächiger Schleier:

- `shade-top` hinter der Wortmarke, `shade-mid` (max. 0,2 — die Stärke des
  Hero-Bands) hinter Eyebrow und Headline, `shade-bottom` hinter der Fußzeile;
- Kleinschrift trägt zusätzlich den kräftigeren Schatten des Mobil-Rezepts
  (`.on-photo` in `globals.css`), nicht den leichteren der Desktop-Fassung;
- die 12-px-Unterzeile steht auf `--cream-80`, der kleinsten tragfähigen Stufe —
  `--cream-70` erreicht auf hellem Bild 4,45:1 und scheitert damit knapp.

Gemessen wird pro Buchstabenpixel: die Karte mit Schrift und dieselbe ohne Schrift
werden deckungsgleich gelegt, der hellste Nachbarpunkt in 2 px Umkreis ist der
Maßstab. Ergebnis (konservativ, der Schatten hilft zusätzlich, ist aber nicht
eingerechnet):

| Zeile | Größe | Kontrast | nötig |
|---|---|---|---|
| Wortmarke | 30 px | 7,5:1 | 3,0:1 |
| Unterzeile „Cranio Sacral" | 12 px | 6,3:1 | 4,5:1 |
| Eyebrow | 15 px | 4,8:1 | 4,5:1 |
| Headline | 58 px | 3,9:1 | 3,0:1 |
| Ort · Adresse | 13 px | 5,0–6,2:1 | 4,5:1 |

## CTA auf der Karte

Beide Karten tragen **„Termin vereinbaren"** mit dem Pfeil `ArrowUpRight` — wörtlich
die Beschriftung des Footer-Buttons der Seite (`btn btn-cream`, `src/components/footer.tsx`).
Der Stil ist `.btn` aus `globals.css` (vollrund, `padding: 1rem 1.75rem`, 13 px, `gap: .6rem`,
Label in 500), nur ohne Hover: auf der Fotokarte als `.btn-cream` (Cream-Fläche, Ink-Schrift,
15:1), auf der Papierkarte als `.btn-ink` (15:1). Die Pille liegt **außerhalb** von `.onphoto`,
damit der Textschatten nicht auf sie fällt.

Ein Share-Bild ohne Handlungsaufforderung wird von Auditoren als „missing conversion text"
gemeldet, und in einem Feed ist die Karte der einzige sichtbare Teil des Beitrags. Deshalb
steht der CTA auf dem Bild und nicht nur in der Beschreibung.

## Längen der Texte (Audit)

| Feld | Zeichen | Grenze |
|---|---|---|
| `description` (Meta) | 131 | ~150–160, danach schneidet Google ab |
| `og:description` | 87 | ~125, danach schneiden Social-Vorschauen ab |
| `twitter:description` | 87 | wie oben |
| `og:title` | 52 | — |

Vorher stand in `description` und `og:description` derselbe 182-Zeichen-Satz. Beide sind
jetzt getrennt: die Meta-Beschreibung nennt Ort und Zielgruppe, die Social-Beschreibung
ist knapp und endet mit der Handlung. **Bei jeder Textänderung die Länge mitzählen** —
die Zahlen stehen in `layout.tsx`, nicht in einer Tabelle, die veraltet.

## Regeln für Änderungen

- **Nichts nachrücken, was den Text aus der dunklen Zone schiebt.** Die Fußzeile
  liegt unten links und rechts; zöge man die Adresse in die Bildmitte, fällt sie
  unter AA.
- **Keine Zahlen, Termine oder Preise auf die Karte.** Die Karte veraltet sonst mit
  dem nächsten Kurs. Was sie sagt, muss in einem Jahr noch stimmen.
- **Den CTA nicht entfernen.** Ohne ihn gilt das Bild als handlungsfrei.
- **Kein Text auf dem Bild ist Werbetext.** Beide Karten zitieren nur, was auf der
  Website steht (Hero-Zeile, Angebotsliste des Footers, Ort, Adresse).
- **Der Foto-Ausschnitt hängt an `background-position: 38% 50%`** — dieselbe
  Position wie im Hero. Verschiebt man sie, wandert das Gesicht aus dem Bild.
- Nach jeder Änderung **neu messen**, nicht schätzen: `og-render.js` schreibt
  `og-report.json`, die Messung oben folgt daraus.
