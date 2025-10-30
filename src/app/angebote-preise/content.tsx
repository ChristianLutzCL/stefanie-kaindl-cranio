'use client';

import { Typography, Button } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '../../../public/image/4.jpg';
import img2 from '../../../public/image/erwachsene.png';

// Service data
const mainServices = [
  {
    id: 'adults',
    title: 'Cranio für Erwachsene',
    duration: 'ca. 60 Minuten',
    price: '73€',
    image: img2,
    alt: 'Craniosacrale Behandlung für Erwachsene',
    badge: { text: 'Beliebt', color: 'bg-[#67B1B1]' },
    description: 'Eine tiefgreifende Behandlung für Erwachsene, die bei Stress, Verspannungen, Schmerzen und emotionalen Belastungen unterstützt.',
    benefits: [
      'Chronischen Schmerzen und Verspannungen',
      'Stress und Burnout-Symptomen',
      'Schlafstörungen und innerer Unruhe',
      'Migräne und Kopfschmerzen',
      'Trauma-Verarbeitung',
      'Allgemeiner Entspannung und Prävention',
      'Beschwerden in der Schwangerschaft'
    ],
    buttonColor: 'bg-[#67B1B1] hover:bg-[#5a9999]',
    bookingLink: 'https://calendly.com/stefanie-kaindl-cranio/cranio_session'
  },
  {
    id: 'children',
    title: 'Cranio für Kinder',
    duration: '20 - 40 Minuten',
    price: '53€',
    image: img1,
    alt: 'Craniosacrale Behandlung für Kinder',
    badge: { text: 'Sanft', color: 'bg-[#8B9A7C]' },
    description: 'Einfühlsame Behandlung für Kinder jeden Alters. Die Therapie erfolgt spielerisch und altersgerecht.',
    benefits: [
      'Schlafproblemen und Unruhe',
      'Konzentrationsschwierigkeiten',
      'Hyperaktivität (ADHS)',
      'Geburtstrauma-Folgen',
      'Entwicklungsverzögerungen',
      'Emotionalen Belastungen'
    ],
    buttonColor: 'bg-[#8B9A7C] hover:bg-[#7A8A6B]',
    bookingLink: 'https://calendly.com/stefanie-kaindl-cranio/cranio-kinder'
  }
];

const additionalServices = [
  {
    title: 'Erstberatung',
    duration: '30 Minuten',
    price: '40€',
    description: 'Unverbindliches Kennenlerngespräch mit Anamnese und Behandlungsplanung',
    features: ['Ausführliche Anamnese', 'Behandlungsplan', 'Fragen & Antworten']
  },
  {
    title: 'Paket (5 Sitzungen)',
    duration: 'Variable',
    price: '400€',
    description: 'Sparen Sie 50€ bei der Buchung von 5 Behandlungen im Voraus',
    features: ['5 Behandlungen', '50€ Ersparnis', 'Flexible Terminplanung']
  },
  {
    title: 'Hausbesuche',
    duration: 'Nach Absprache',
    price: 'Auf Anfrage',
    description: 'Behandlung in gewohnter Umgebung für besondere Situationen',
    features: ['Vertraute Umgebung', 'Für Senioren geeignet', 'Nach Terminvereinbarung']
  }
];

const treatmentSteps = [
  { step: '1', title: 'Vorgespräch', description: 'Ausführliche Anamnese und Klärung Ihrer Anliegen' },
  { step: '2', title: 'Behandlung', description: 'Sanfte craniosacrale Techniken in entspannter Atmosphäre' },
  { step: '3', title: 'Nachruhe', description: 'Zeit zum Nachspüren und Integration der Behandlung' },
  { step: '4', title: 'Nachbesprechung', description: 'Reflexion und Empfehlungen für zu Hause' }
];

const policies = {
  booking: [
    'Termine nach telefonischer Vereinbarung',
    'Kostenfreie Stornierung bis 24h vorher',
    'Bei kurzfristigerer Absage wird die volle Gebühr berechnet',
    'Termine können auch online gebucht werden'
  ],
  payment: [
    'Zahlung in bar oder per Paypal möglich',
    'Rechnung für Steuer/Krankenkasse auf Wunsch',
    'Manche Zusatzversicherungen übernehmen Kosten'
  ]
};

function ServiceCard({ service }: { service: typeof mainServices[0] }) {
  return (
    <div className='bg-white rounded-2xl overflow-hidden warm-shadow border border-cream-200 flex flex-col h-full'>
      <div className='relative h-64'>
        <Image src={service.image} alt={service.alt} className='w-full h-full object-cover' />
        <div className={`absolute top-4 right-4 ${service.badge.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
          {service.badge.text}
        </div>
      </div>
      <div className='p-8 flex flex-col flex-grow'>
        <Typography variant='h3' className='font-inter mb-3 text-taupe-800 text-2xl font-medium'>
          {service.title}
        </Typography>
        <div className='flex items-center justify-between mb-4'>
          <Typography className='font-inter text-therapeutic-700 text-lg font-medium'>
            {service.duration}
          </Typography>
          <Typography className='font-inter text-2xl font-bold text-taupe-800'>
            {service.price}
          </Typography>
        </div>
        <Typography className='font-inter text-taupe-700 leading-relaxed mb-6'>
          {service.description}
        </Typography>
        
        <div className='mb-6 flex-grow'>
          <Typography className='font-inter font-medium text-taupe-800 mb-3'>
            Besonders hilfreich bei:
          </Typography>
          <div className='grid grid-cols-1 gap-2'>
            {service.benefits.map((benefit, index) => (
              <div key={index} className='flex items-center space-x-2'>
                <div className='w-2 h-2 bg-[#67B1B1] rounded-full flex-shrink-0'></div>
                <Typography className='font-inter text-taupe-600 text-sm'>
                  {benefit}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <Link href={service.bookingLink} className='mt-auto' target={service.bookingLink.startsWith('http') ? '_blank' : '_self'} rel={service.bookingLink.startsWith('http') ? 'noopener noreferrer' : undefined}>
          <Button className={`w-full ${service.buttonColor} text-white font-inter py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300`}>
            Termin vereinbaren
          </Button>
        </Link>
      </div>
    </div>
  );
}

function Content() {
  return (
    <section className='py-20 bg-gradient-to-b from-cream-50 to-cream-100 min-h-screen'>
      <div className='container mx-auto px-4 max-w-6xl'>
        
        {/* Header */}
        <header className='text-center mb-16 pt-20'>
          <Typography variant='h1' className='font-inter mb-6 text-taupe-800 text-3xl md:text-4xl font-light'>
            Angebote & Preise
          </Typography>
          <Typography className='font-inter text-lg text-taupe-700 max-w-3xl mx-auto leading-relaxed'>
            Individuelle Craniosacrale Behandlungen für jeden Lebensabschnitt. 
            Alle Preise verstehen sich inklusive ausführlichem Vorgespräch und Nachbetreuung.
          </Typography>
        </header>

        {/* Main Services */}
        <section className='grid lg:grid-cols-2 gap-8 mb-16'>
          {mainServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </section>

        {/* Treatment Process */}
        <div className='mb-16'>
          <div className='bg-white rounded-2xl p-8 md:p-12 warm-shadow border border-cream-200'>
            <Typography variant='h2' className='font-inter mb-8 text-taupe-800 text-2xl md:text-3xl font-light text-center'>
              Ablauf einer Behandlung
            </Typography>
            <div className='grid md:grid-cols-4 gap-6'>
              {[
                {
                  step: '1',
                  title: 'Vorgespräch',
                  desc: 'Ausführliche Anamnese und Klärung Ihrer Anliegen'
                },
                {
                  step: '2',
                  title: 'Behandlung',
                  desc: 'Sanfte craniosacrale Techniken in entspannter Atmosphäre'
                },
                {
                  step: '3',
                  title: 'Nachruhe',
                  desc: 'Zeit zum Nachspüren und Integration der Behandlung'
                },
                {
                  step: '4',
                  title: 'Nachbesprechung',
                  desc: 'Reflexion und Empfehlungen für zu Hause'
                }
              ].map((step, index) => (
                <div key={index} className='text-center'>
                  <div className='w-16 h-16 bg-[#67B1B1] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4'>
                    {step.step}
                  </div>
                  <Typography className='font-inter font-medium text-taupe-800 mb-2'>
                    {step.title}
                  </Typography>
                  <Typography className='font-inter text-taupe-600 text-sm leading-relaxed'>
                    {step.desc}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className='mb-16'>
          <div className='bg-white rounded-2xl p-8 warm-shadow border border-cream-200'>
            <Typography variant='h3' className='font-inter mb-6 text-taupe-800 text-xl font-medium'>
              Wichtige Informationen
            </Typography>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <Typography className='font-inter font-medium text-taupe-800 mb-3'>
                  Terminvereinbarung & Stornierung
                </Typography>
                <div className='space-y-2'>
                  {[
                    'Termine nach telefonischer Vereinbarung',
                    'Kostenfreie Stornierung bis 24h vorher',
                    'Bei kurzfristigerer Absage wird die volle Gebühr berechnet',
                    'Termine können auch online gebucht werden'
                  ].map((item, index) => (
                    <div key={index} className='flex items-start space-x-2'>
                      <div className='w-2 h-2 bg-[#67B1B1] rounded-full mt-2 flex-shrink-0'></div>
                      <Typography className='font-inter text-taupe-700 text-sm'>
                        {item}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Typography className='font-inter font-medium text-taupe-800 mb-3'>
                  Kostenübernahme & Zahlung
                </Typography>
                <div className='space-y-2'>
                  {[
                    'Zahlung in bar oder per Paypal möglich',
                    'Rechnung für Steuer/Krankenkasse auf Wunsch',
                    'Manche Zusatzversicherungen übernehmen Kosten'
                  ].map((item, index) => (
                    <div key={index} className='flex items-start space-x-2'>
                      <div className='w-2 h-2 bg-[#67B1B1] rounded-full mt-2 flex-shrink-0'></div>
                      <Typography className='font-inter text-taupe-700 text-sm'>
                        {item}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='text-center bg-white rounded-2xl p-12 warm-shadow border border-cream-200'>
          <Typography variant='h2' className='font-inter mb-4 text-taupe-800 text-2xl font-light'>
            Bereit für Ihre erste Behandlung?
          </Typography>
          <Typography className='font-inter text-taupe-700 mb-8 max-w-2xl mx-auto'>
            Vereinbaren Sie noch heute Ihren Termin und beginnen Sie Ihren Weg zu mehr Wohlbefinden. 
            Gerne beantworte ich vorab alle Ihre Fragen in einem unverbindlichen Gespräch.
          </Typography>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href="/kontakt">
              <Button 
                size="lg" 
                className="bg-[#67B1B1] hover:bg-[#5a9999] text-white font-inter px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Jetzt Termin buchen
              </Button>
            </Link>
            <Link href="/ueber-mich">
              <Button 
                variant="outlined" 
                size="lg" 
                className="border-2 border-taupe-400 text-taupe-700 hover:bg-taupe-100 font-inter px-8 py-4 rounded-full transition-all duration-300"
              >
                Mehr über mich
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Content;
