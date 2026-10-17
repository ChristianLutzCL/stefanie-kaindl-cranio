Olive-Fläche mit Laufschrift am oberen Rand, zwei Linkspalten, Aussage und
Kontaktspalten, darunter die Wortmarke über die volle Inhaltsbreite und die
Rechts-Zeile.

## Aufbau
- **Laufschrift**: 11 px, Versalien, 0.4em Sperrung, `cream-45`, 189 s linear,
  zwei identische Spuren (`translateX(0 → -100%)`) für den nahtlosen Übergang.
  `aria-hidden` — sie trägt keine Information. Bei `prefers-reduced-motion` steht sie.
- **Eine Spur muss breiter sein als der Bildschirm.** 27 Wiederholungen à 190 px = 5135 px;
  mit den früheren 6 (1141 px) lief sie ab 1440 px leer — auf 1920 px blieben bis zu 778 px
  ohne Text, auf 3840 px bis zu 2698 px. Die Dauer muss mit der Spurlänge wachsen, sonst
  wird die Schrift schneller: 5135 px / 189 s ≈ 27 px/s (vorher 1141 px / 42 s).
- **Links**: Spalten „Seiten" und „Angebote" — genau die vier Angebote des Betriebs
  (Cranio für Erwachsene · Cranio für Babys & Kinder · Erstberatung & 5er-Paket ·
  Yoga am Donnerstag). Kein „Hausbesuche", kein „Praxis".
- **Rechts**: Aussage in der Serif, Adresse, Öffnungszeiten, Instagram.
- **Wortmarke**: Größe = Inhaltsbreite / 10,898 über eine Container-Query; dahinter
  die Blume des Lebens (19 Kreise — `editorial.tsx` generiert sie) als Linienzeichnung
  mit `radial-gradient`-Maske in 5 % Cream, die nach außen ausläuft.
- **Rechts-Zeile**: 11 px `cream-45` (2,3:1 auf Olive) — bewusst Dekor; die Links
  werden beim Hover `cream`.

## Offener Punkt (gemessen)
`cream-70` (3,5:1) und `cream-45` (2,3:1) auf Olive liegen **unter AA**, tragen im
Bestand aber Kleinschrift: die Linktexte (14 px) und die Zeiten
(„Mo – Fr nach Vereinbarung", 13 px). Wer den Footer anfasst, hebt sie auf
`cream-80` (4,6:1) oder volles `cream` (5,1:1). Siehe „Offene Punkte" im README.

## Props
`marquee` · `year`
