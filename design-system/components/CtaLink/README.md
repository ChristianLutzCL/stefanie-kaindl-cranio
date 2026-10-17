Der Textlink des Systems — die häufigste Handlung auf der Seite (19 Stellen).
Die Linie kommt aus `border-bottom`, **nicht** aus `text-decoration`: sonst entsteht
zwischen Wort und Pfeil eine Lücke im Strich.

## Verhalten
- Hover: die Linie wird dicker, ohne das Layout zu bewegen — `box-shadow: 0 1px 0 0
  currentColor` statt `border-width` (sonst rutscht der Link um 1 px).
- Der Pfeil wandert 2 px nach rechts oben (bzw. rechts bei `ArrowRight`), 250 ms.
- `::after { inset: -0.5rem -0.35rem }` vergrößert die Trefferfläche auf ~37 px Höhe
  (WCAG 2.2 verlangt 24 px für stehende Ziele), ohne die Linie vom Wort zu lösen.

## Varianten
- `.cta-link-ink` auf Papier (Tinte, 15:1), `.cta-link` auf Olive oder dunklem Foto
  (Cream, 5,1:1 bzw. 15:1).

## Nicht
- Nicht als Button-Ersatz für die Hauptaktion einer Ansicht.
- Kein zweiter Pfeiltyp in derselben Reihe (rechts oder rechts-oben, nie gemischt).
