Cookie-Hinweis am unteren Rand: dunkle Fläche (`rgba(29,28,23,.95)`) mit
`blur(12px)`, obere Haarlinie in `cream-line`, Einfahren von unten in 500 ms
(`banner-in`).

## Aufbau
- Text links in 13 px `cream-70`, darüber das Label „Cookies" als `.label-caps`.
  Max 42 rem, damit die Zeile auf breiten Bildschirmen nicht läuft.
- Drei Handlungen, absteigend gewichtet: „Einstellungen" und „Nur notwendige
  akzeptieren" als `.cta-link`, „Akzeptieren" als `btn-cream`.
- Der Hinweis liegt über dem Inhalt (z-60) und erscheint erst, wenn
  `localStorage.cookieConsentGiven` fehlt — nie im Seitenfluss.

## Wichtig (Recht und Technik)
- Speicher-Schlüssel: `cookiePreferences`, `cookieConsentGiven`,
  `cookieConsentTimestamp`. Der Google-Consent-Mode in `layout.tsx` liest
  **denselben** Schlüssel `cookiePreferences`; `analytics_storage` bleibt `denied`,
  bis zugestimmt wurde. Ein anderer Name bricht die Kette.
- Der Text ist Rechtstext — restylen, nicht umschreiben. Fehlt eine Angabe, gehört
  sie zur Klientin, nicht in den Code.
- `role="dialog"` + `aria-label="Cookie-Hinweis"` bleiben.

## Props
`onAccept`
