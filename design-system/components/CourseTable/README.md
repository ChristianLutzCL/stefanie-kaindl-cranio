Kurs- und Terminliste einer Kursseite (`/yoga`): zwei Kurse in zwei Spalten, darunter
die drei Eckdaten, dann die Termine als Kachelreihe.

## Aufbau
- Kurskarte: Label („Kurs 1 · Sanft") → Uhrzeit in Cormorant
  `clamp(1.5rem, 2.2vw, 2rem)` mit `lining-nums` → Beschreibung 15 px `ink-600`.
  Trennung durch eine Haarlinie über der Karte, kein Rahmen.
- Eckdaten als `.eo-facts`-Raster (Preis · Ort · Zahlung) in drei Spalten.
- Termine: 3 Spalten, jede Kachel 1 px `line`, **ohne** Radius und ohne Schatten.
  Tag in Cormorant 1.75 rem, Monat 13 px `ink-600`, Jahr in `.meta-line`.
  Das Datum wird im Code aus `TT.MM.JJJJ` zerlegt, nicht dreifach gepflegt.
- Ist die Terminliste leer, steht dort ein Satz („Die nächsten Termine sind noch
  nicht eingetragen.") — keine leere Fläche, kein Platzhalter-Raster.

## Nicht
Kein Kalender-Widget, keine Wochentags-Spalten, keine Termine erfinden. Yoga-Termine
kommen aus dem Bestand; Zeiten sind Do 17:30 & 19:00.

## Props
`courses` · `facts` · `termine` · `note`
