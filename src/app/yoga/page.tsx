import Content from './content';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbs, service, yogaDay } from '@/lib/structured-data';

export const metadata = {
  title: 'Yoga am Donnerstag | Stefanie Kaindl',
  description:
    'Yoga in Paunzhausen: zwei Kurse donnerstags um 17:30 und 19:00 Uhr, 14 € pro Stunde, für Anfänger und Fortgeschrittene. Platz per WhatsApp reservieren.',
};

export default function YogaPage() {
  return (
    <>
      <JsonLd
        nodes={[
          breadcrumbs([
            ['Start', '/'],
            ['Yoga', '/yoga/'],
          ]),
          service(
            'Yoga am Donnerstag',
            'Zwei Yogakurse donnerstags um 17:30 und 19:00 Uhr in Paunzhausen, 14 € pro Stunde, für Anfänger und Fortgeschrittene. Einstieg jederzeit möglich.',
            'Yoga',
            '/yoga/',
          ),
          yogaDay(),
        ]}
      />
      <Content />
    </>
  );
}
