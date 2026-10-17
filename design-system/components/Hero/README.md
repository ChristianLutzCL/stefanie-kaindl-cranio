Vollflächiges Foto, mittig der Text: Eyebrow, zweizeilige Serif-Headline, zwei
gleichwertige Wege. Höhe `min-height: 100svh`.

## Geometrie
- Foto: `cover`, `background-position: 38% 50%` — auf schmalen Viewports `74% 50%`,
  damit der Ausschnitt auf die Person wandert. Filter
  `brightness(0.76) saturate(0.96) contrast(1.08)` bringt das helle Tageslichtporträt
  in den Helligkeitsbereich der Vorlage (mittlere Luma ≈ 0.12).
- Schleier (`hero-scrim`): links kräftig (52 %), nach rechts über der Person auf 12 %
  zurückgenommen, in `rgba(40,27,16,…)`. Kein flächiger Schleier.
- **Mobil** kein Schleier über dem ganzen Bild: ein weich auslaufendes Band hinter dem
  Textblock (`.hero-text-band::before`, `width: 100vw`, `left: 50%`,
  `translateX(-50%)` — negative Margins würden die Innenabstände von `.shell` nicht
  aufheben), Peak 20 %. Die Lesbarkeit trägt dort der `text-shadow` (`.on-photo`).

## Text
- Der Block ist **unten verankert** (`justify-content: flex-end`, ab md zentriert):
  bei `cover` skaliert das Foto auf die Viewporthöhe, das Gesicht liegt immer in den
  oberen ~41 % — ein unten sitzender Block kann es nie berühren.
- Die Eyebrow (`CRANIOSACRALE KÖRPERARBEIT & YOGA`) muss schmaler bleiben als die
  Headline und das Gesicht auf jeder Viewporthöhe freilassen (`white-space: nowrap`).
- Jede Headline-Zeile ist ein eigener `<span>`: so balanciert der Browser die Zeilen
  einzeln, und „Raum, um anzukommen." bricht nicht in drei Zeilen.
- Genau **zwei** Ziele — mehr zerstört die Gleichwertigkeit der beiden Angebote.

## Props
`eyebrow` · `headline` (zwei Zeilen) · `actions` (zwei Ziele)
