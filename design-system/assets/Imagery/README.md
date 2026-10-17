# Imagery

Fünf Aufnahmen aus ihren Räumen, unverändert übernommen — als Referenz für die
Gradiation und als Bildmaterial für die Vorschauen (`components/Hero`,
`components/Photo`, `components/Label`).

| Datei | Motiv |
|---|---|
| `hero-stefanie.webp` | Hero-Porträt (Kopfzeilen-Hintergrund, `background-position: 38% 50%`) |
| `behandlung.webp` | Behandlungsraum, ruhige Fläche — trägt das Buchungsband |
| `behandlung_2.webp` | Hände halten die Füße während einer Behandlung — Arbeitsweise-Sektion |
| `yoga.webp` | Yoga-Haltung auf der Matte |
| `kopf.webp` | Anatomisches Modell, Erklärung der Schädelknochen |

## Die Gradiation (Pflicht für jedes Bild)
Alle Fotos laufen durch `.ph`:

```css
.ph img { filter: sepia(0.16) saturate(0.86) contrast(1.03) brightness(0.99); }
.ph::after { background: #6b7250; mix-blend-mode: multiply; opacity: 0.14; }
.ph-deep::after { opacity: 0.42; }
```

Der Hero hat eine eigene Stufe (`brightness(0.76) saturate(0.96) contrast(1.08)`),
weil er als dunkle Fläche tragen muss, während der Text darüber liegt.

## Regeln
- **Nur echte Aufnahmen.** Keine Stockfotos, keine KI-Bilder, keine Symbolbilder.
- Kein Bild trägt Text. Beschriftung steht unter oder neben dem Bild.
- Über einem Gesicht liegt nie Schrift (deshalb ist der Hero-Text unten verankert und
  mobil von einem weichen Band hinterlegt, nicht von einem flächigen Schleier).
- Die Bilder sind zwischen 26 KB und 96 KB optimiert (WebP); im Repo liegen die
  Originale unter `public/image/`.
