Merkmal-Liste auf Olive (im Repo als `Approach` in `src/app/content.tsx`).
Immer nur **eine** Zeile offen — es ist eine Auswahl, kein FAQ.

## Aufbau
- Zeilen durch Haarlinien (`cream-line`) getrennt, die letzte mit Unterlinie.
- Zeile: Punkt (4 px, `cream`, nur in der offenen Zeile sichtbar) → Titel 15 px
  (`cream-70`, offen `cream`) → rechts der Index in `0.6875rem` / `cream-45`.
- Der Text öffnet über `grid-template-rows: 0fr → 1fr` in 500 ms — kein `height`,
  damit die Höhe nicht gemessen werden muss. Bei `prefers-reduced-motion` sofort.
- Der Knopf trägt `aria-expanded`, das Panel bleibt im DOM (kein `display: none`
  für Screenreader).

## Nicht
Keine Chevrons, keine Pluszeichen, keine Kartenschatten — die Haarlinie ist die
Interaktion. Kein zweites Akkordeon auf derselben Seite.

## Props
`items` · `defaultOpen`
