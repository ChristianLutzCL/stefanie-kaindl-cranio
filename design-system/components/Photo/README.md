Jedes Foto der Seite läuft über `.ph`. Der Filter ist Teil des Systems, nicht eine
Kein Filter, keine Fläche über dem Bild: die Aufnahme steht in ihrem eigenen Ton
(Filter und Olive-Multiplikation wurden im Okt 2026 auf Kundenwunsch entfernt —
im Bestand standen `sepia(.16) saturate(.86) contrast(1.03)` plus 14 % Olive, tief
42 %). Die Fläche rahmt und beschneidet nur.
Erst dadurch haben Aufnahmen aus verschiedenen Räumen und Jahren denselben Ton.

## Use
- Platzhalterfläche ist `paper-deep` — beim Laden steht dort nie Weiß.
- `object-position` ist Pflicht, wenn ein Gesicht im Bild ist: bei `aspect-[4/5]`
  und `cover` wandert der Ausschnitt sonst in die Bildmitte und schneidet den Kopf an.
- Verhältnisse im Bestand: `aspect-[4/5]` für Porträts, `aspect-[4/3]` für das
  Bildband, `aspect-video` für Raumblicke.
- Kein Radius (0 px), kein Schatten. Text steht **unter** dem Bild, nie darüber —
  die Ausnahme ist der Hero, wo `.on-photo` den Textkontrast trägt.

## Nicht
Keine bunten Filter, kein Duotone, kein Blur, kein Verlauf über dem Bild. Keine
Stockfotos: es gibt ausschließlich echte Aufnahmen aus ihren Räumen.

## Props
`src` · `alt` · `ratio` · `position` · `sizes` · `priority` · `fit` · `deep`
