import Content from './content';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbs, service } from '@/lib/structured-data';

export const metadata = {
  title: 'Craniosacrale Körperarbeit | Stefanie Kaindl',
  description:
    'Craniosacrale Körperarbeit in Pfaffenhofen an der Ilm: sanfte Behandlung für Erwachsene, Babys und Kinder. Preise, Ablauf und Terminbuchung.',
};

export default function CranioPage() {
  return (
    <>
      <JsonLd
        nodes={[
          breadcrumbs([
            ['Start', '/'],
            ['Cranio', '/cranio/'],
          ]),
          service(
            'Craniosacrale Körperarbeit',
            'Sanfte Craniosacrale Körperarbeit für Erwachsene, Babys und Kinder in Pfaffenhofen an der Ilm. Behandlungen nach Vereinbarung, Termine online oder telefonisch.',
            'Craniosacrale Körperarbeit',
            '/cranio/',
          ),
        ]}
      />
      <Content />
    </>
  );
}
