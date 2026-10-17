Zitatband auf `paper-deep`: Zitat in der **Sans** (nicht in der Serif), darunter eine
Haarlinie, dann Initialen-Kachel, Name und Anlass. Zähler „01 / 04" auf der linken
Viertellinie.

## Regeln
- Zitat 43 px (fluid), Gewicht **300**, `line-height 1.26`, `letter-spacing -0.01em`,
  deutsche Anführung unten/oben (`&bdquo;…&ldquo;`). Max ein Zitat pro Bildschirm.
- Auf Olive oder dunklem Foto: `.quote-cream`. `text-[var(--cream)]` am Element wirkt
  **nicht** — unlayered CSS schlägt Tailwind-Utilities.
- Die Initialen-Kachel ist 1,9 rem im Quadrat, **ohne** Radius, Olive-Fläche,
  Cormorant 13 px. Sie ersetzt ein Porträt, für das keine Bildrechte vorliegen —
  kein Buchstabenkreis, keine Ersatz-Silhouette.
- Der Slider scrollt seitenweise (`scroll-snap-type: x mandatory`, `flex: 0 0 100%`),
  die Pfeile stehen unter dem Band in `ink-500` und werden beim Hover `ink`.

## Nicht
Keine erfundenen Stimmen. Die vier Zitate des Bestands (Kathi P., Maria S.,
Kathi G., Regina) sind die einzigen.

## Props
`text` · `name` · `initials` · `role`
