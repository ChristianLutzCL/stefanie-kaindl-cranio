'use client';

import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

// Data structures for better maintainability
const practiceHours = [
  { day: 'Montag - Donnerstag', time: '9:00 - 19:00 Uhr' },
  { day: 'Freitag', time: '9:00 - 16:00 Uhr' },
  { day: 'Samstag', time: '9:00 - 14:00 Uhr (nach Vereinbarung)' },
  { day: 'Sonntag', time: 'Geschlossen' }
];

const transportOptions = [
  {
    title: 'Mit dem Auto',
    description: 'Kostenlose Parkplätze direkt vor der Praxis verfügbar. A9 Ausfahrt Pfaffenhofen.'
  },
  {
    title: 'Öffentliche Verkehrsmittel',
    description: 'Bushaltestelle "Musterstraße" (Linie 123) nur 2 Gehminuten entfernt.'
  },
  {
    title: 'Zu Fuß',
    description: 'Zentrale Lage in Pfaffenhofen, alle wichtigen Geschäfte fußläufig erreichbar.'
  }
];

const faqData = [
  {
    question: 'Wie lange dauert eine Behandlung?',
    answer: 'Eine Behandlung für Erwachsene dauert 60-90 Minuten, für Kinder 30-45 Minuten, inklusive Vor- und Nachgespräch.'
  },
  {
    question: 'Muss ich etwas zur ersten Behandlung mitbringen?',
    answer: 'Bringen Sie bequeme Kleidung mit und falls vorhanden, relevante ärztliche Befunde oder Berichte.'
  },
  {
    question: 'Übernimmt die Krankenkasse die Kosten?',
    answer: 'Private Krankenversicherungen und Zusatzversicherungen übernehmen oft die Kosten. Gerne stelle ich Ihnen eine Rechnung aus.'
  },
  {
    question: 'Wie kurzfristig kann ich einen Termin bekommen?',
    answer: 'Je nach Verfügbarkeit sind auch kurzfristige Termine möglich. Kontaktieren Sie mich gerne telefonisch.'
  },
  {
    question: 'Was passiert, wenn ich den Termin absagen muss?',
    answer: 'Termine können bis 24 Stunden vorher kostenfrei storniert werden. Bei kurzfristigerer Absage berechne ich die volle Gebühr.'
  },
  {
    question: 'Ist Craniosacrale Therapie für jeden geeignet?',
    answer: 'Die Therapie ist sehr sanft und für Menschen jeden Alters geeignet. Bei akuten Erkrankungen sprechen Sie vorher mit Ihrem Arzt.'
  }
];

const contactInfo = {
  name: 'Stefanie Kaindl',
  title: 'Craniosacrale Therapeutin',
  address: {
    street: 'Musterstraße 123',
    city: '85276 Pfaffenhofen a.d. Ilm',
    country: 'Deutschland'
  },
  phone: '+49 (0) 123 456 789',
  email: 'info@stefanie-kaindl-cranio.de',
  phoneHours: 'Montag - Freitag: 9:00 - 18:00 Uhr',
  emailResponse: 'Ich antworte in der Regel innerhalb von 24 Stunden'
};

function ContactCard() {
  return (
    <div className="bg-white rounded-2xl p-8 warm-shadow border border-cream-200">
      <Typography variant="h3" className="font-inter mb-6 text-taupe-800 text-2xl font-medium">
        Kontaktinformationen
      </Typography>
      
      <div className="space-y-6">
        <div>
          <Typography className="font-inter font-medium text-therapeutic-700 mb-2">
            {contactInfo.title}
          </Typography>
          <Typography className="font-inter text-taupe-800 text-lg font-medium">
            {contactInfo.name}
          </Typography>
        </div>

        <div>
          <Typography className="font-inter font-medium text-therapeutic-700 mb-2">
            Praxisadresse
          </Typography>
          <div className="text-taupe-700">
            <Typography className="font-inter">{contactInfo.address.street}</Typography>
            <Typography className="font-inter">{contactInfo.address.city}</Typography>
            <Typography className="font-inter">{contactInfo.address.country}</Typography>
          </div>
        </div>

        <div>
          <Typography className="font-inter font-medium text-therapeutic-700 mb-2">
            Telefon
          </Typography>
          <Link href="tel:+49123456789" className="font-inter text-taupe-800 hover:text-[#67B1B1] transition-colors">
            {contactInfo.phone}
          </Link>
          <Typography className="font-inter text-taupe-600 text-sm mt-1">
            {contactInfo.phoneHours}
          </Typography>
        </div>

        <div>
          <Typography className="font-inter font-medium text-therapeutic-700 mb-2">
            E-Mail
          </Typography>
          <Link href="mailto:info@stefanie-kaindl-cranio.de" className="font-inter text-taupe-800 hover:text-[#67B1B1] transition-colors">
            {contactInfo.email}
          </Link>
          <Typography className="font-inter text-taupe-600 text-sm mt-1">
            {contactInfo.emailResponse}
          </Typography>
        </div>
      </div>
    </div>
  );
}

function PracticeHoursCard() {
  return (
    <div className="bg-cream-50 rounded-2xl p-8 warm-shadow border border-cream-200">
      <Typography variant="h3" className="font-inter mb-6 text-taupe-800 text-2xl font-medium">
        Termine & Öffnungszeiten
      </Typography>
      
      <div className="space-y-6">
        <div>
          <Typography className="font-inter font-medium text-therapeutic-700 mb-3">
            Behandlungszeiten
          </Typography>
          <div className="space-y-2">
            {practiceHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center">
                <Typography className="font-inter text-taupe-700 font-medium">
                  {schedule.day}
                </Typography>
                <Typography className="font-inter text-taupe-600">
                  {schedule.time}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-cream-300">
          <Typography className="font-inter font-medium text-therapeutic-700 mb-3">
            Terminvereinbarung
          </Typography>
          <Typography className="font-inter text-taupe-700 text-sm leading-relaxed mb-4">
            Alle Termine erfolgen nach persönlicher Vereinbarung. Für Notfälle oder 
            dringende Anliegen bin ich auch außerhalb der regulären Zeiten erreichbar.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="tel:+49123456789" className="flex-1">
              <Button size="sm" className="w-full bg-[#67B1B1] hover:bg-[#5a9999] text-white font-inter rounded-full">
                Anrufen
              </Button>
            </Link>
            <Link href="mailto:info@stefanie-kaindl-cranio.de" className="flex-1">
              <Button variant="outlined" size="sm" className="w-full border-2 border-taupe-400 text-taupe-700 hover:bg-taupe-100 font-inter rounded-full">
                E-Mail schreiben
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationSection() {
  return (
    <div className="mb-16">
      <div className="bg-white rounded-2xl p-8 warm-shadow border border-cream-200">
        <Typography variant="h3" className="font-inter mb-6 text-taupe-800 text-2xl font-medium text-center">
          Anfahrt & Lage
        </Typography>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="h-64 bg-cream-200 rounded-xl flex items-center justify-center mb-4">
              <Typography className="text-taupe-600 font-inter text-center">
                Karte der Praxis <br />
                (Google Maps Integration)
              </Typography>
            </div>
            <Typography className="font-inter text-taupe-600 text-sm text-center">
              {contactInfo.address.street}, {contactInfo.address.city}
            </Typography>
          </div>

          <div>
            <Typography className="font-inter font-medium text-therapeutic-700 mb-4">
              Anfahrt mit verschiedenen Verkehrsmitteln
            </Typography>
            
            <div className="space-y-4">
              {transportOptions.map((transport, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-therapeutic-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <Typography className="font-inter font-medium text-taupe-800 mb-1">
                      {transport.title}
                    </Typography>
                    <Typography className="font-inter text-taupe-600 text-sm">
                      {transport.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-cream-50 rounded-lg border border-cream-300">
              <Typography className="font-inter font-medium text-therapeutic-700 mb-2">
                Barrierefreiheit
              </Typography>
              <Typography className="font-inter text-taupe-700 text-sm">
                Die Praxis ist ebenerdig zugänglich und barrierefrei eingerichtet. 
                Bei besonderen Bedürfnissen sprechen Sie mich gerne an.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  return (
    <div className="mb-16">
      <Typography variant="h3" className="font-inter mb-8 text-taupe-800 text-2xl md:text-3xl font-light text-center">
        Häufige Fragen
      </Typography>
      <div className="grid md:grid-cols-2 gap-6">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl p-6 warm-shadow border border-cream-200">
            <Typography className="font-inter font-medium text-taupe-800 mb-2">
              {faq.question}
            </Typography>
            <Typography className="font-inter text-taupe-700 text-sm leading-relaxed">
              {faq.answer}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <div className="text-center bg-cream-100 rounded-2xl p-12 warm-shadow border border-cream-300">
      <Typography variant="h2" className="font-inter mb-4 text-taupe-800 text-2xl font-light">
        Bereit für Ihren ersten Termin?
      </Typography>
      <Typography className="font-inter text-taupe-700 mb-8 max-w-2xl mx-auto">
        Zögern Sie nicht, mich zu kontaktieren. Gerne beantworte ich alle Ihre Fragen 
        und finde gemeinsam mit Ihnen den besten Weg für Ihre Behandlung.
      </Typography>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="tel:+49123456789">
          <Button 
            size="lg" 
            className="bg-[#67B1B1] hover:bg-[#5a9999] text-white font-inter px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Jetzt anrufen
          </Button>
        </Link>
        <Link href="mailto:info@stefanie-kaindl-cranio.de">
          <Button 
            variant="outlined" 
            size="lg" 
            className="border-2 border-taupe-400 text-taupe-700 hover:bg-taupe-100 font-inter px-8 py-4 rounded-full transition-all duration-300"
          >
            E-Mail schreiben
          </Button>
        </Link>
      </div>
    </div>
  );
}

function Content() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-cream-100 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <header className="text-center mb-16 pt-20">
          <Typography variant="h1" className="font-inter mb-6 text-taupe-800 text-3xl md:text-4xl font-light">
            Kontakt
          </Typography>
          <Typography className="font-inter text-lg text-taupe-700 max-w-3xl mx-auto leading-relaxed">
            Ich freue mich darauf, Sie kennenzulernen und Sie auf Ihrem Weg zu mehr Wohlbefinden zu begleiten. 
            Kontaktieren Sie mich gerne für Fragen oder zur Terminvereinbarung.
          </Typography>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ContactCard />
          <PracticeHoursCard />
        </div>

        <LocationSection />
        <FAQSection />
        <CTASection />

      </div>
    </section>
  );
}

export default Content;