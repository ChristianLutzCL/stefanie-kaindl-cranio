import { jsonLd } from '@/lib/structured-data';

/**
 * Rendert ein JSON-LD-Dokument (schema.org) als <script> im Markup.
 *
 * Bewusst nicht über `@/components` exportiert: dieses Barrel ist 'use client',
 * die Auszeichnung gehört ins Server-Markup. Google liest sie aus dem <body>.
 */
export function JsonLd({ nodes }: { nodes: Array<Record<string, unknown>> }) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: jsonLd(...nodes) }}
    />
  );
}
