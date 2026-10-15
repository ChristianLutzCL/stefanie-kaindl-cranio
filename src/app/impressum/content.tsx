'use client';

import { PageIntro } from '@/components/editorial';
import {
  LegalBody,
  LegalLines,
  LegalLink,
  LegalP,
  LegalSection,
  LegalSource,
} from '@/components/legal';

/**
 * Impressum — nur das Layout ist neu; jede Angabe steht unverändert wie zuvor.
 */

const TOC = [
  { id: 'angaben', title: 'Angaben gemäß § 5 TMG' },
  { id: 'kontakt', title: 'Kontakt' },
  { id: 'streitschlichtung', title: 'EU-Streitschlichtung' },
  { id: 'verbraucher', title: 'Verbraucherstreitbeilegung' },
  { id: 'bildnachweis', title: 'Bildnachweis' },
  { id: 'umsetzung', title: 'Website / Umsetzung' },
];

function Content() {
  return (
    <>
      <PageIntro
        label='Impressum'
        title='Impressum'
        lead='Wer diese Website betreibt, wer die Fotos gemacht hat und wie du Kontakt aufnimmst.'
      />

      <LegalBody toc={TOC}>
        <LegalSection id='angaben' title='Angaben gemäß § 5 TMG'>
          <LegalLines
            lines={[
              'Stefanie Kaindl',
              'Bahnstraße 2a',
              '85276 Pfaffenhofen a.d. Ilm',
              'Ortsteil Uttenhofen',
            ]}
          />
        </LegalSection>

        <LegalSection id='kontakt' title='Kontakt'>
          <LegalLines
            lines={[
              <>
                Telefon: <LegalLink href='tel:+4917663094476'>0176 63094476</LegalLink>
              </>,
              <>
                E-Mail:{' '}
                <LegalLink href='mailto:info@stefanie-kaindl-cranio.de'>
                  info@stefanie-kaindl-cranio.de
                </LegalLink>
              </>,
            ]}
          />
        </LegalSection>

        <LegalSection id='streitschlichtung' title='EU-Streitschlichtung'>
          <LegalP>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <LegalLink href='https://ec.europa.eu/consumers/odr/' external>
              https://ec.europa.eu/consumers/odr/
            </LegalLink>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </LegalP>
        </LegalSection>

        <LegalSection
          id='verbraucher'
          title='Verbraucherstreitbeilegung/Universalschlichtungsstelle'>
          <LegalP>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </LegalP>
        </LegalSection>

        <LegalSection id='bildnachweis' title='Bildnachweis'>
          <LegalP>Die auf dieser Website verwendeten Fotos wurden erstellt von:</LegalP>
          <LegalLines
            lines={[
              'Andrea Kieferl',
              'Kapellenweg 12',
              '85301 Schweitenkirchen',
              <>
                E-Mail:{' '}
                <LegalLink href='mailto:hallo@andrea-kieferl.de'>hallo@andrea-kieferl.de</LegalLink>
              </>,
              <>Telefon: 0163 9047817</>,
            ]}
          />
        </LegalSection>

        <LegalSection id='umsetzung' title='Website / Umsetzung'>
          <LegalLines
            lines={[
              'Christian Lutz',
              'Schulstraße 4',
              '85307 Paunzhausen',
              <>
                E-Mail: <LegalLink href='mailto:hallo@chrislutz.me'>hallo@chrislutz.me</LegalLink>
              </>,
              <>
                Website:{' '}
                <LegalLink href='https://chrislutz.me' external>
                  chrislutz.me
                </LegalLink>
              </>,
            ]}
          />
        </LegalSection>

        <LegalSource>
          Quelle:{' '}
          <LegalLink href='https://www.e-recht24.de' external>
            https://www.e-recht24.de
          </LegalLink>
        </LegalSource>
      </LegalBody>
    </>
  );
}

export default Content;
