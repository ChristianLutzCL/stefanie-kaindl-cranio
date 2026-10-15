'use client';

import { PageIntro } from '@/components/editorial';
import {
  LegalBody,
  LegalLines,
  LegalLink,
  LegalP,
  LegalSection,
  LegalSource,
  LegalSub,
} from '@/components/legal';

/**
 * Datenschutzerklärung — nur das Layout ist neu; jeder Satz steht unverändert
 * wie zuvor (e-recht24-Vorlage). Inhaltlich wurde nichts ergänzt oder gekürzt.
 */

const TOC = [
  { id: 'ueberblick', title: 'Datenschutz auf einen Blick' },
  { id: 'hosting', title: 'Hosting' },
  { id: 'pflicht', title: 'Hinweise und Pflichtinformationen' },
  { id: 'erfassung', title: 'Datenerfassung auf dieser Website' },
  { id: 'tools', title: 'Plugins und Tools' },
];

function Content() {
  return (
    <>
      <PageIntro
        label='Datenschutz'
        title='Datenschutzerklärung'
        lead='Was mit deinen Daten passiert, wenn du diese Website besuchst — und welche Rechte du hast.'
      />

      <LegalBody toc={TOC}>
        <LegalSection id='ueberblick' title='1. Datenschutz auf einen Blick'>
          <LegalSub>Allgemeine Hinweise</LegalSub>
          <LegalP>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
            sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
            Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
            Datenschutzerklärung.
          </LegalP>

          <LegalSub>Datenerfassung auf dieser Website</LegalSub>
          <LegalP>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</LegalP>
          <LegalP>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
            Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle&quot; in
            dieser Datenschutzerklärung entnehmen.
          </LegalP>

          <LegalP>Wie erfassen wir Ihre Daten?</LegalP>
          <LegalP>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
            es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </LegalP>
          <LegalP>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
            durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
            Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </LegalP>

          <LegalP>Wofür nutzen wir Ihre Daten?</LegalP>
          <LegalP>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
            gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </LegalP>

          <LegalP>Welche Rechte haben Sie bezüglich Ihrer Daten?</LegalP>
          <LegalP>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
            Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
            die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
            Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
            widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung
            der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
            Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </LegalP>
          <LegalP>
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns
            wenden.
          </LegalP>
        </LegalSection>

        <LegalSection id='hosting' title='2. Hosting'>
          <LegalP>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</LegalP>

          <LegalSub>Externes Hosting</LegalSub>
          <LegalP>
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
            erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann
            es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
            Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine
            Website generiert werden, handeln.
          </LegalP>
          <LegalP>
            Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
            potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer
            sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen
            professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          </LegalP>
        </LegalSection>

        <LegalSection id='pflicht' title='3. Allgemeine Hinweise und Pflichtinformationen'>
          <LegalSub>Datenschutz</LegalSub>
          <LegalP>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </LegalP>
          <LegalP>
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
            Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
            Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
            sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
          </LegalP>

          <LegalSub>Hinweis zur verantwortlichen Stelle</LegalSub>
          <LegalP>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </LegalP>
          <LegalLines
            lines={[
              'Stefanie Kaindl',
              'Bahnstraße 2a',
              '85276 Pfaffenhofen a.d. Ilm',
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
          <LegalP>
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
            gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
            Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </LegalP>
        </LegalSection>

        <LegalSection id='erfassung' title='4. Datenerfassung auf dieser Website'>
          <LegalSub>Kontaktformular</LegalSub>
          <LegalP>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
            wir nicht ohne Ihre Einwilligung weiter.
          </LegalP>
          <LegalP>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
            sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
            Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
            gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6
            Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
          </LegalP>
          <LegalP>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
            Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
            Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
            Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben
            unberührt.
          </LegalP>

          <LegalSub>Anfrage per E-Mail oder Telefon</LegalSub>
          <LegalP>
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller
            daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
            Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne
            Ihre Einwilligung weiter.
          </LegalP>
          <LegalP>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
            sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
            Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
            gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6
            Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
          </LegalP>
        </LegalSection>

        <LegalSection id='tools' title='5. Plugins und Tools'>
          <LegalSub>Calendly</LegalSub>
          <LegalP>
            Wir nutzen auf unserer Website Calendly zur Terminvereinbarung. Anbieter ist Calendly
            LLC, 271 17th St NW, 10th Floor, Atlanta, Georgia 30363, USA.
          </LegalP>
          <LegalP>
            Wenn Sie einen Termin über Calendly buchen, werden Ihre eingegebenen Daten (z. B. Name,
            E-Mail-Adresse, Telefonnummer) und der gewählte Termin bei Calendly gespeichert. Die
            Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und
            Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Erfüllung eines Vertrags).
          </LegalP>
          <LegalP>
            Weitere Informationen zum Datenschutz bei Calendly finden Sie unter:{' '}
            <LegalLink href='https://calendly.com/privacy' external>
              https://calendly.com/privacy
            </LegalLink>
          </LegalP>
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
