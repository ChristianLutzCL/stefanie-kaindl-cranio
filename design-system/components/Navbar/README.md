Eine Zeile, vier Menüpunkte, die Wortmarke exakt in der Mitte — sie hängt an
`position: absolute; left: 50%` und bleibt unabhängig von der Breite der Menüpunkte
zentriert. Die vier Punkte liegen in vier gleich breiten Zellen; die äußeren sitzen am
Rand, die inneren an der Außenkante ihrer Zelle (deshalb bleibt zur Marke Luft).

## Zustände
- **Über dem Hero** (nur Startseite): transparent, `nav-clear` legt einen leichten
  Verlauf von oben darüber (40 % → 0 % in `rgba(30,22,14,…)`), Höhe 74 / 92 px,
  Text Cream.
- **Gescrollt oder Unterseite**: `nav-solid` — Papier mit 92 % Deckkraft und
  `blur(10px) saturate(1.1)`, Höhe 64 / 70 px, Text Tinte, darunter eine 1-px-Haarlinie.
  Der Wechsel liegt bei `scrollY > 24`.
- **Menüpunkt**: die 1-px-Linie wächst beim Hover von der Mitte (`scaleX 0 → 1`,
  350 ms) und bleibt auf der aktiven Seite stehen.

## Fallen (aus dem Bestand gelernt)
- Das Mobilmenü wird **neben** der Kopfzeile gerendert, nicht darin: `backdrop-filter`
  macht das Element zum Bezugsrahmen für feste Kinder — im Panel schrumpfte es sonst
  auf Höhe 0 und öffnete unsichtbar.
- Unter `lg` ersetzt ein Menüschalter (zwei Haarlinien, die sich zum Kreuz schließen,
  Trefferfläche 44×44) die Menüpunkte. Kein Textknopf — er kollidiert mit der Marke.
- Menüpunkte brauchen `aria-current="page"` für die aktive Seite, nicht nur die Linie.

## Props
`items` (Default: Cranio · Yoga · Über mich · Kontakt) · `overHero`
