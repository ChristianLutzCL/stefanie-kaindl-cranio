Eyebrow des Systems: 10 px, mit einem 2,2-px-Punkt davor (`currentColor`, 75 %
Deckkraft). Drei Zustände:

- **Papier** — `.label`, Farbe `ink-60` (5,5:1). Mit `.label-caps` in Versalien
  (0.18em) als Sektionslabel oder Spaltenkopf.
- **Olive / dunkles Foto** — `.label-inverse`, Farbe `cream-70`. Achtung: auf Olive
  nur 3,5:1, deshalb steht sie dort **groß** (Footer-Aussage) oder als Zierzeile.
  Für Kleinschrift auf Olive `cream-80` (4,6:1) nehmen.
- **Auf Foto** — `.pill`: dieselbe Beschriftung in einer Kapsel mit
  `rgba(243,240,233,.28)` Rand, 12 % Fläche und `backdrop-filter: blur(6px)`.

## Nicht
Kein uppercase ohne Sperrung, keine zweite Punktgröße, kein Punkt ohne Label.
Das Label ist die kleinste Schrift der Seite — es trägt keine Information, die nicht
auch im Text steht.

## Props
`caps` · `inverse` · `pill`
