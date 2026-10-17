Seitenkopf jeder Unterseite (`/cranio`, `/yoga`, `/ueber-mich`, `/kontakt`):
Label, große Serif-Zeile, Einstiegstext — zentriert, max 48 rem.

## Use
- Abstände: `padding-top: clamp(8.5rem, 14vw, 12rem)` (Platz unter der festen
  Kopfzeile), darunter `padding-bottom: clamp(3rem, 6vw, 5.5rem)`.
- Die Headline kombiniert `.d1-hero` **und** `.d1` — Hero-Größe plus die
  Unterseiten-Stufe `clamp(2.35rem, 6vw, 5.5rem)`.
- Einstieg in `.lead-lg` (22 px), max 42 rem; darunter kann eine Aktionsreihe folgen.

## Props
`label` · `title` · `lead` · `children`
