Formularfeld **ohne Box**: keine Fläche, kein Rahmen, nur eine 1-px-Linie unter dem
Feld. Fokus färbt die Linie Olive (kein Ring, kein Halo).

## Aufbau
- Beschriftung ist eine `.meta-line` (11 px, `ink-45`) über dem Feld, kein Platzhalter
  als Ersatz für das Label. Platzhalter nur als Beispielwert („+49").
- Pflichtfelder mit `*` in der Beschriftung, nicht in der Farbe.
- Felder liegen 32 px auseinander, zwei Spalten ab `sm`, Textarea wächst vertikal
  (min. 7 rem).
- Unter dem Formular steht der Datenschutzsatz in 12 px `ink-500` mit Link in `ink`.

## Nicht
Keine gefüllten Felder, keine graue Platzhalterfarbe unter 4,5:1 (`ink-45` = 5,0:1),
keine Feldrahmen — die Linie ist das Feld. Kein `outline` beim Fokus: nur die
Linienfarbe wechselt.

## Props
`label` · `multiline` · `hint`
