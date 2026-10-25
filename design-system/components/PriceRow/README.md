Eine Angebotszeile mit Preis. Der Baustein für jede Preisliste — `/cranio`,
`/angebote-preise`, Kursliste.

## Aufbau
- Zwei Spalten ab `md`: links Titel und Beschreibung, rechts Preis und Handlung.
  Trennung durch eine 1-px-Haarlinie **über** der Zeile, kein Rahmen.
- Titel in Cormorant 500 mit `lining-nums` (Cormorant setzt sonst Mediävalziffern);
  der Zusatz („ca. 60 Min") steht in `ink-500` hinter einem Schrägstrich.
- Preis rechtsbündig in `clamp(1.5rem, 2vw, 1.85rem)`, die Einheit in `0.55em` und
  `ink-500`. Der Preis ist immer die größte Zahl im Block.
- Die Handlung ist ein `.cta-link-ink` in 14 px — kein Button. Eine Preisliste mit
  lauter Buttons liest sich wie ein Shop.

## Nicht
Keine Preise erfinden: die Werte stammen aus dem Bestand — und zwar aus ihren
Calendly-Terminarten, die die Liste 1:1 spiegelt (Erwachsene 73 €, Intensiv
100 €, Babys & Kinder 53 €, Fußreflex mit kurzer Cranio 50 €, Yoga 14 €/h).
Kein „ab"-Preis, keine Streichpreise. Paket und Erstberatung wurden auf
Kundenwunsch gestrichen (Okt 2026).

## Props
`title` · `meta` · `body` · `price` · `unit` · `cta` · `href`
