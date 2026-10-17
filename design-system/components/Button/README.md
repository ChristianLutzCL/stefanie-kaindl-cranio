Vollrunder Button, 13 px, `padding: 1rem 1.75rem` (≈46 px Höhe). Fünf Varianten —
die Wahl hängt an der Fläche, nicht am Geschmack:

| Variante | Fläche | Farbe | Einsatz |
|---|---|---|---|
| `btn-ink` | Papier | Tinte auf Papier (15:1) | Die Hauptaktion („Termin online buchen"). Hover → `olive-deep`. |
| `btn-olive` | Papier | Cream auf Olive (5,1:1) | Zweite Aktion, wenn Olive die Marke tragen soll. Hover → `olive-deep` (7,0:1). |
| `btn-cream` | Olive, dunkles Foto | Tinte auf Cream (15:1) | Die Hauptaktion auf dunklem Grund. Hover → reines Weiß. |
| `btn-outline-ink` | Papier | 1 px `line`, Text `ink` | Sekundäre Aktion neben einer primären. Hover füllt die Linie auf Tinte. |
| `btn-outline-cream` | Olive, Foto | 1 px `cream-45` | Sekundäre Aktion auf dunklem Grund. Hover füllt die Fläche mit Cream. |

`btn-block` macht den Button volle Breite (mobiles Menü, Buchungskarte).

## Regeln
- **Nie zwei gleich gewichtete Buttons nebeneinander.** Zwei Aktionen = eine primär,
  eine als `.cta-link` oder Outline.
- Der Pfeil sitzt rechts am Text (16×16, Strichstärke 1.25, `stroke-linecap: square`).
- Beschriftung: Verb + Objekt („Platz reservieren"), nie „Hier klicken".

## Props
`variant` (ink · olive · cream · outline-ink · outline-cream) · `block` · `asChild` · `href`
