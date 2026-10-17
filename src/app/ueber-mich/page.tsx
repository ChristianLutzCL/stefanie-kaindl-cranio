import Content from "./content";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbs } from "@/lib/structured-data";

export const metadata = {
  title: 'Über mich — Stefanie Kaindl | Craniosacrale Körperarbeit',
  description:
    'Stefanie Kaindl, Craniosacral-Praktikerin in Pfaffenhofen an der Ilm: ihr Weg zur Arbeit mit Erwachsenen, Babys und Kindern, Ausbildungen und Arbeitsweise.',
};

export default function UeberMich() {
  return (
    <>
      <JsonLd
        nodes={[
          breadcrumbs([
            ['Start', '/'],
            ['Über mich', '/ueber-mich/'],
          ]),
        ]}
      />
      <Content />
    </>
  );
}
