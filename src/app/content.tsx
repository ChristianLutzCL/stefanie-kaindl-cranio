'use client';

import React from 'react';
import {Button, Typography} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';

export function Content() {
  const [showMoreTestimonials, setShowMoreTestimonials] = React.useState(false);
  
  const testimonials = [
    {
      text: "Die Behandlung bei Steffi ist eine Wohltat für Körper, Geist und Seele.\n\nDurch ihre empathische Art zaubert sie eine Wohlfühlatmosphäre und man kommt ganz bei sich an.\n\nNach der Cranio fühle ich mich viel leichter und meine Gedanken kommen zur Ruhe.",
      name: "Kathi P.",
      condition: "Stress & Verspannungen"
    },
    {
      text: "Einfühlsam, sensibel, mitfühlend, intensiv, wohltuend, geborgen – das sind die Eindrücke, die ich bei Steffi mit ihrer Cranio Körperarbeit jedes Mal erlebe.\n\nHier fühle ich mich beschützt und von Herzen willkommen.",
      name: "Regina",
      condition: "Emotionale Belastung"
    },
    {
      text: "Die Cranio Sacrale Körperarbeit hat mir und meinen Kindern geholfen, wieder ins Gleichgewicht zu kommen – ob körperlich oder seelisch.\n\nBei Stefanie findet man einen sicheren Raum.",
      name: "Kathi G.",
      condition: "Mutter mit Kindern"
    },
    {
      text: "Nach jahrelangen Kopfschmerzen habe ich endlich Linderung gefunden. Die Behandlungen haben mir geholfen, wieder schmerzfrei zu leben.",
      name: "Maria S.",
      condition: "Chronische Kopfschmerzen"
    },
    {
      text: "Meine Tochter war nach der Geburt sehr unruhig. Die Cranio-Behandlung hat ihr geholfen, besser zu schlafen und ausgeglichener zu sein.",
      name: "Julia M.",
      condition: "Baby (3 Monate)"
    },
    {
      text: "Bei Stefanie fühle ich mich verstanden und aufgehoben. Die Behandlungen helfen mir, meinen Stress abzubauen und zu entspannen.",
      name: "Thomas K.",
      condition: "Stressbedingte Beschwerden"
    },
    {
      text: "Meine Migräne-Attacken sind deutlich weniger geworden. Ich bin so dankbar für diese sanfte Therapieform.",
      name: "Lisa H.",
      condition: "Migräne"
    },
    {
      text: "Nach einem Schleudertrauma hatte ich starke Nackenschmerzen. Die Cranio-Behandlung hat mir sehr geholfen.",
      name: "Michael R.",
      condition: "Schleudertrauma"
    },
    {
      text: "Mein Sohn ist ruhiger geworden und kann sich besser konzentrieren. Die Behandlung bei Stefanie war ein Segen für uns.",
      name: "Sandra B.",
      condition: "Kind (8 Jahre) - ADHS"
    },
    {
      text: "Die Behandlung hilft mir bei meinen Verdauungsproblemen und ich fühle mich insgesamt ausgeglichener.",
      name: "Anna W.",
      condition: "Verdauungsbeschwerden"
    },
    {
      text: "Stefanie hat ein wunderbares Gespür für die Bedürfnisse meines Babys. Die Behandlung war sehr sanft und effektiv.",
      name: "Laura D.",
      condition: "Baby (6 Monate) - Schlafprobleme"
    },
    {
      text: "Nach der Behandlung fühle ich mich wie neugeboren. Die Verspannungen sind weg und ich kann wieder frei atmen.",
      name: "Peter L.",
      condition: "Rückenschmerzen"
    },
    {
      text: "Meine Tochter hatte Probleme nach der Geburt. Dank Stefanie geht es ihr jetzt viel besser.",
      name: "Christina F.",
      condition: "Baby (4 Monate) - Dreimonatskoliken"
    },
    {
      text: "Die Cranio-Behandlung hat mir geholfen, mein Trauma zu verarbeiten. Ich bin Stefanie sehr dankbar.",
      name: "Sophie M.",
      condition: "Traumaverarbeitung"
    },
    {
      text: "Nach Jahren mit Tinnitus habe ich endlich Ruhe gefunden. Die Behandlung war ein Wendepunkt für mich.",
      name: "Robert H.",
      condition: "Tinnitus"
    }
  ];
  
  return (
    <section className='py-20 bg-gradient-to-b from-cream-50 to-cream-100'>
      <div className='container mx-auto px-4 max-w-6xl'>
        {/* Introduction Section */}
        <div className='text-center mb-16'>
          <Typography variant='h2' className='font-inter mb-4 text-taupe-800 text-3xl md:text-4xl font-light'>
            Warum Craniosacrale Körperarbeit?
          </Typography>
          <Typography className='font-inter text-lg text-taupe-700 max-w-3xl mx-auto leading-relaxed'>
            Eine sanfte, aber äußerst wirkungsvolle Methode zur Linderung von Blockaden 
            und zur Wiederherstellung deiner inneren Balance.
          </Typography>
        </div>

        {/* Benefits Grid */}
        <div className='grid md:grid-cols-2 gap-8 mb-16'>
          {/* Applications Section */}
          <div className='bg-white rounded-2xl p-8 warm-shadow border border-cream-200 h-full'>
            <Typography variant='h3' className='font-inter mb-6 text-[#67B1B1] text-xl font-medium'>
              Anwendungsbereiche
            </Typography>
            <div className='space-y-3'>
              {[
                { title: 'Schmerzlinderung', desc: 'Kopf-, Migräne-, Nacken- und Rückenschmerzen' },
                { title: 'Stressreduktion', desc: 'Ängste, Traumata und emotionale Belastungen' },
                { title: 'Schlafverbesserung', desc: 'Schlaflosigkeit und Verdauungsstörungen' },
                { title: 'Entspannung', desc: 'Muskuläre Verspannungen und Tinnitus' },
                { title: 'Balance', desc: 'Hyperaktivität und Konzentrationsschwierigkeiten' }
              ].map((item, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-[#67B1B1] rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <Typography className='font-inter font-medium text-taupe-800 text-base'>
                      {item.title}
                    </Typography>
                    <Typography className='font-inter text-taupe-600 text-sm leading-relaxed'>
                      {item.desc}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className='bg-white rounded-2xl p-8 warm-shadow border border-cream-200 h-full'>
            <Typography variant='h3' className='font-inter mb-6 text-[#67B1B1] text-xl font-medium'>
              Deine Vorteile
            </Typography>
            <div className='space-y-3'>
              {[
                { title: 'Sanfte Methode', desc: 'Effektive Linderung durch behutsame Berührungen' },
                { title: 'Ganzheitlich', desc: 'Wirkt auf körperlicher und emotionaler Ebene' },
                { title: 'Vielseitig', desc: 'Von Schmerzen bis zu psychosomatischen Beschwerden' },
                { title: 'Nachhaltig', desc: 'Tiefgreifende und dauerhafte Veränderungen' }
              ].map((item, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-[#67B1B1] rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <Typography className='font-inter font-medium text-taupe-800 text-base'>
                      {item.title}
                    </Typography>
                    <Typography className='font-inter text-taupe-600 text-sm leading-relaxed'>
                      {item.desc}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Break 1 */}
        <div className='mb-16 -mx-4'>
          <div className='relative h-64 md:h-80 overflow-hidden md:rounded-2xl'>
            <Image 
              src='/image/behandlung.webp' 
              alt='Craniosacrale Behandlung' 
              fill
              className='object-cover object-[50%_30%]'
              sizes='(max-width: 768px) 100vw, 1200px'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className='mb-16'>
          <div className='text-center mb-10'>
            <Typography variant='h2' className='font-inter mb-3 text-taupe-800 text-2xl md:text-3xl font-light'>
              Wie funktioniert Craniosacrale Körperarbeit?
            </Typography>
            <Typography className='font-inter text-taupe-700 max-w-2xl mx-auto leading-relaxed'>
              Ein sanfter Weg zu tiefer Entspannung und natürlicher Heilung
            </Typography>
          </div>
          
          <div className='grid md:grid-cols-3 gap-6'>
            {[
              {
                step: '1',
                title: 'Sanfte Berührung',
                desc: 'Durch achtsame, leichte Berührungen wird der craniosacrale Rhythmus ertastet',
                detail: 'Mit einem Druck von nur 5 Gramm - so leicht wie das Gewicht einer Münze'
              },
              {
                step: '2', 
                title: 'Balance finden',
                desc: 'Blockaden und Spannungen werden erkannt und behutsam gelöst',
                detail: 'Der Therapeut folgt den natürlichen Bewegungen des Körpers'
              },
              {
                step: '3',
                title: 'Heilung fördern',
                desc: 'Der Körper aktiviert seine natürlichen Selbstheilungskräfte',
                detail: 'Tiefe Entspannung ermöglicht regenerative Prozesse'
              }
            ].map((item, index) => (
              <div key={index} className='text-center bg-white rounded-2xl p-6 warm-shadow border border-cream-200'>
                <div className='w-14 h-14 bg-[#67B1B1] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4'>
                  {item.step}
                </div>
                <Typography className='font-inter font-medium text-taupe-800 text-lg mb-2'>
                  {item.title}
                </Typography>
                <Typography className='font-inter text-taupe-600 text-sm leading-relaxed mb-2'>
                  {item.desc}
                </Typography>
                <Typography className='font-inter text-[#67B1B1] text-xs italic'>
                  {item.detail}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {/* Image Break 2 */}
        <div className='mb-16 -mx-4'>
          <div className='relative h-48 md:h-64 overflow-hidden md:rounded-2xl'>
            <Image 
              src='/image/behandlung_2.webp' 
              alt='Behandlungsraum' 
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 1200px'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className='mb-16'>
          <div className='text-center mb-10'>
            <Typography variant='h2' className='font-inter mb-3 text-taupe-800 text-2xl md:text-3xl font-light'>
              Erfahrungen
            </Typography>
            <Typography className='font-inter text-taupe-700 max-w-2xl mx-auto leading-relaxed'>
              Was meine Klienten sagen
            </Typography>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className='bg-white rounded-2xl p-6 warm-shadow border border-cream-200 flex flex-col hover:shadow-xl transition-shadow duration-300'>
                <div className='mb-4 flex-grow'>
                  <svg className='w-8 h-8 text-[#67B1B1] mb-3' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
                  </svg>
                  <Typography className='font-inter text-taupe-700 leading-relaxed text-sm whitespace-pre-line'>
                    {testimonial.text}
                  </Typography>
                </div>
                <div className='pt-3 border-t border-cream-200'>
                  <Typography className='font-inter font-medium text-taupe-800 text-sm'>
                    {testimonial.name}
                  </Typography>
                  {testimonial.condition && (
                    <Typography className='font-inter text-[#67B1B1] text-xs mt-1'>
                      {testimonial.condition}
                    </Typography>
                  )}
                </div>
              </div>
            ))}
          </div>

          {showMoreTestimonials && (
            <div className='grid md:grid-cols-3 gap-6 mt-6'>
              {testimonials.slice(3).map((testimonial, index) => (
                <div key={index + 3} className='bg-white rounded-2xl p-6 warm-shadow border border-cream-200 flex flex-col hover:shadow-xl transition-shadow duration-300'>
                  <div className='mb-4 flex-grow'>
                    <svg className='w-8 h-8 text-[#67B1B1] mb-3' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
                    </svg>
                    <Typography className='font-inter text-taupe-700 leading-relaxed text-sm whitespace-pre-line'>
                      {testimonial.text}
                    </Typography>
                  </div>
                  <div className='pt-3 border-t border-cream-200'>
                    <Typography className='font-inter font-medium text-taupe-800 text-sm'>
                      {testimonial.name}
                    </Typography>
                    {testimonial.condition && (
                      <Typography className='font-inter text-[#67B1B1] text-xs mt-1'>
                        {testimonial.condition}
                      </Typography>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className='text-center mt-6'>
            <Button
              onClick={() => setShowMoreTestimonials(!showMoreTestimonials)}
              className='bg-[#67B1B1] hover:bg-[#5a9a9a] text-white px-8 py-3 rounded-full font-inter font-medium transition-all duration-300 hover:shadow-lg'
            >
              {showMoreTestimonials ? 'Weniger anzeigen' : 'Mehr Erfahrungen'}
            </Button>
          </div>
        </div>

        {/* Image Break 3 */}
        <div className='mb-16 -mx-4'>
          <div className='relative h-56 md:h-72 overflow-hidden md:rounded-2xl'>
            <Image 
              src='/image/behandlung_3.webp' 
              alt='Craniosacrale Körperarbeit' 
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 1200px'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/25 to-transparent'></div>
          </div>
        </div>

        {/* Science Section */}
        <div className='mb-16'>
          <div className='bg-white rounded-2xl p-8 warm-shadow border border-cream-200'>
            <div className='max-w-3xl mx-auto text-center'>
              <Typography variant='h2' className='font-inter mb-4 text-[#67B1B1] text-xl font-medium'>
                Wissenschaftlich fundiert
              </Typography>
              <Typography className='font-inter text-taupe-700 leading-relaxed mb-6'>
                Die Craniosacrale Therapie basiert auf den Erkenntnissen des Osteopathen 
                Dr. William Sutherland und wurde von Dr. John Upledger weiterentwickelt. 
                Studien zeigen positive Effekte bei verschiedenen Beschwerdebildern.
              </Typography>
              <div className='grid md:grid-cols-3 gap-4 mt-6'>
                <div className='flex flex-col items-center'>
                  <div className='w-12 h-12 bg-[#67B1B1]/10 rounded-full flex items-center justify-center mb-2'>
                    <div className='w-3 h-3 bg-[#67B1B1] rounded-full'></div>
                  </div>
                  <Typography className='font-inter text-taupe-700 text-sm text-center'>
                    Evidenzbasierte Behandlungsmethode
                  </Typography>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='w-12 h-12 bg-[#67B1B1]/10 rounded-full flex items-center justify-center mb-2'>
                    <div className='w-3 h-3 bg-[#67B1B1] rounded-full'></div>
                  </div>
                  <Typography className='font-inter text-taupe-700 text-sm text-center'>
                    Kontinuierliche Weiterbildung
                  </Typography>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='w-12 h-12 bg-[#67B1B1]/10 rounded-full flex items-center justify-center mb-2'>
                    <div className='w-3 h-3 bg-[#67B1B1] rounded-full'></div>
                  </div>
                  <Typography className='font-inter text-taupe-700 text-sm text-center'>
                    International anerkannt
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center bg-white rounded-2xl p-12 warm-shadow border border-cream-200'>
          <Typography variant='h2' className='font-inter mb-4 text-taupe-800 text-2xl md:text-3xl font-light'>
            Bereit für deine Auszeit?
          </Typography>
          <Typography className='font-inter text-taupe-700 mb-8 max-w-2xl mx-auto leading-relaxed'>
            Investiere in dein Wohlbefinden und erlebe die transformative Kraft der Craniosacralen Körperarbeit.
          </Typography>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link href="/kontakt">
              <Button 
                size="lg" 
                className="bg-[#67B1B1] hover:bg-[#5a9a9a] text-white font-inter px-10 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Termin vereinbaren
              </Button>
            </Link>
            <Link href="/angebote-preise">
              <Button 
                size="lg" 
                className="bg-cream-200 hover:bg-cream-300 text-taupe-800 font-inter px-10 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Angebote & Preise
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
