import Content from "./content";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbs } from "@/lib/structured-data";

export const metadata = {
  title: 'Kontakt & Anfahrt | Stefanie Kaindl, Pfaffenhofen',
  description:
    'Bahnstraße 2a in 85276 Pfaffenhofen a. d. Ilm, Ortsteil Uttenhofen: Telefon, E-Mail, Anfahrt und Kontaktformular — ich melde mich persönlich bei dir.',
};

export default function Kontakt() {
  return (
    <>
      <JsonLd
        nodes={[
          breadcrumbs([
            ['Start', '/'],
            ['Kontakt', '/kontakt/'],
          ]),
        ]}
      />
      <Content />
    </>
  );
}
