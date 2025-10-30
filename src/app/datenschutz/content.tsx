'use client';

import { Typography } from "@material-tailwind/react";
import Link from "next/link";

function Content() {
  return (
    <section className="pt-40 pb-12 px-12 therapeutic-gradient min-h-screen">
      <div className="flex flex-col mx-auto max-w-screen-md gap-y-12">
        <Typography variant="h2" className="mt-8 mb-6 font-inter text-taupe-800">
          Datenschutzerklärung
        </Typography>

        <div>
          <Typography variant="h5" className="font-inter text-therapeutic-700 mb-4">
            1. Datenschutz auf einen Blick
          </Typography>
          <Typography variant="h6" className="font-inter text-taupe-800 mb-2">
            Allgemeine Hinweise
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
            persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
            Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </Typography>
        </div>

        <div>
          <Typography variant="h6" className="font-inter text-taupe-800 mb-2">
            Datenerfassung auf dieser Website
          </Typography>
          <Typography className="font-inter text-taupe-800 font-medium mb-2">
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
            können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
          </Typography>

          <Typography className="font-inter text-taupe-800 font-medium mb-2">
            Wie erfassen wir Ihre Daten?
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um 
            Daten handeln, die Sie in ein Kontaktformular eingeben.
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme 
            erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des 
            Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </Typography>

          <Typography className="font-inter text-taupe-800 font-medium mb-2">
            Wofür nutzen wir Ihre Daten?
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere 
            Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </Typography>

          <Typography className="font-inter text-taupe-800 font-medium mb-2">
            Welche Rechte haben Sie bezüglich Ihrer Daten?
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
            gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder 
            Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, 
            können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter 
            bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
            Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-inter text-therapeutic-700 mb-4">
            2. Hosting
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </Typography>
          <Typography variant="h6" className="font-inter text-taupe-800 mb-2">
            Externes Hosting
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
            werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, 
            Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und 
            sonstige Daten, die über eine Website generiert werden, handeln.
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und 
            bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und 
            effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 
            lit. f DSGVO).
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-inter text-therapeutic-700 mb-4">
            3. Allgemeine Hinweise und Pflichtinformationen
          </Typography>
          
          <Typography variant="h6" className="font-inter text-taupe-800 mb-2">
            Datenschutz
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
            personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
            dieser Datenschutzerklärung.
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene 
            Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende 
            Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, 
            wie und zu welchem Zweck das geschieht.
          </Typography>

          <Typography variant="h6" className="font-inter text-taupe-800 mb-2">
            Hinweis zur verantwortlichen Stelle
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter">
            <ul className="list-none">
              <li>Stefanie Kaindl</li>
              <li>Bahnstraße 2a</li>
              <li>85276 Pfaffenhofen a.d. Ilm</li>
              <li className="mt-2">Telefon: 0176 63094476</li>
              <li>E-Mail: info@stefanie-kaindl-cranio.de</li>
            </ul>
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen 
            über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) 
            entscheidet.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-inter text-therapeutic-700 mb-4">
            4. Datenerfassung auf dieser Website
          </Typography>
          
          <Typography variant="h6" className="font-inter text-taupe-800 mb-2">
            Kontaktformular
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
            von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage 
            mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen 
            erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an 
            der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer 
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung 
            auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt 
            (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere 
            Aufbewahrungsfristen – bleiben unberührt.
          </Typography>

          <Typography variant="h6" className="font-inter text-taupe-800 mb-2">
            Anfrage per E-Mail oder Telefon
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus 
            hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei 
            uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage 
            mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen 
            erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an 
            der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer 
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
          </Typography>
        </div>

        <div>
          <Typography variant="h5" className="font-inter text-therapeutic-700 mb-4">
            5. Plugins und Tools
          </Typography>
          
          <Typography variant="h6" className="font-inter text-taupe-800 mb-2">
            Calendly
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Wir nutzen auf unserer Website Calendly zur Terminvereinbarung. Anbieter ist Calendly LLC, 271 17th St 
            NW, 10th Floor, Atlanta, Georgia 30363, USA.
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Wenn Sie einen Termin über Calendly buchen, werden Ihre eingegebenen Daten (z. B. Name, E-Mail-Adresse, 
            Telefonnummer) und der gewählte Termin bei Calendly gespeichert. Die Datenverarbeitung erfolgt auf 
            Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur 
            Erfüllung eines Vertrags).
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Weitere Informationen zum Datenschutz bei Calendly finden Sie unter:{' '}
            <Link 
              href="https://calendly.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#67B1B1] hover:text-[#5a9999] underline"
            >
              https://calendly.com/privacy
            </Link>
          </Typography>
        </div>

        <Typography className="my-10 font-normal text-xs text-taupe-600 font-inter">
          Quelle: <Link href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-[#67B1B1] hover:text-[#5a9999] underline">https://www.e-recht24.de</Link>
        </Typography>
      </div>
    </section>
  )
}

export default Content;
