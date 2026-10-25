/**
 * Platzhalter für die Rückmeldungs-Ebene.
 *
 * `next.config.js` schreibt jede Auflösung von
 * `@/components/review/review-layer` auf diese Datei um, sobald
 * NEXT_PUBLIC_REVIEW nicht gesetzt ist (Produktion). Damit liegen weder der
 * Code der Ebene noch ihr CSS im Build-Graph der Live-Seite — kein Bündel,
 * kein Stylesheet, kein Wort im Markup.
 */
export default function ReviewLayer() {
  return null;
}