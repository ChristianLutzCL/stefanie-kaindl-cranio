'use client';

import React from 'react';
import {Button, Typography} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';

export function Content() {
  return (
    <section className='py-20 bg-gradient-to-b from-cream-50 to-cream-100'>
      <div className='container mx-auto px-4 max-w-6xl'>
        {/* Introduction Section */}
        <div className='text-center mb-20'>
          <Typography variant='h2' className='font-inter mb-6 text-taupe-800 text-3xl md:text-4xl font-light'>
            Warum Craniosacrale Körperarbeit?
          </Typography>
          <Typography className='font-inter text-lg text-taupe-700 max-w-3xl mx-auto leading-relaxed mb-8'>
            Eine sanfte, aber äußerst wirkungsvolle Methode zur Linderung von Blockaden 
            und zur Wiederherstellung Ihrer inneren Balance.
          </Typography>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-white rounded-2xl p-8 warm-shadow'>
              <div className='h-64 bg-cream-200 rounded-xl mb-6 flex items-center justify-center'>
                {/* Placeholder for hero image */}
                <Typography className='text-sage-600 font-inter'>
                  Entspannende Craniosacrale Behandlung
                </Typography>
              </div>
              <Typography className='font-inter text-taupe-700 leading-relaxed'>
                Die Craniosacrale Körperarbeit ist eine sanfte, manuelle Therapieform, die durch 
                achtsame Berührungen das craniosacrale System - bestehend aus Schädel, Wirbelsäule 
                und Kreuzbein - harmonisiert und die körpereigenen Heilungsprozesse aktiviert.
              </Typography>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className='grid md:grid-cols-2 gap-12 mb-20'>
          {/* Applications Section */}
          <div className='bg-white rounded-2xl p-8 warm-shadow border border-cream-200'>
            <Typography variant='h4' className='font-inter mb-6 text-therapeutic-700 text-xl font-medium'>
              Anwendungsbereiche
            </Typography>
            <div className='space-y-4'>
              {[
                { title: 'Schmerzlinderung', desc: 'Kopf-, Migräne-, Nacken- und Rückenschmerzen' },
                { title: 'Stressreduktion', desc: 'Ängste, Traumata und emotionale Belastungen' },
                { title: 'Schlafverbesserung', desc: 'Schlaflosigkeit und Verdauungsstörungen' },
                { title: 'Entspannung', desc: 'Muskuläre Verspannungen und Tinnitus' },
                { title: 'Balance', desc: 'Hyperaktivität und Konzentrationsschwierigkeiten' }
              ].map((item, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-sage-600 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <Typography className='font-inter font-medium text-taupe-800 text-base'>
                      {item.title}
                    </Typography>
                    <Typography className='font-inter text-taupe-600 text-sm'>
                      {item.desc}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className='bg-cream-50 rounded-2xl p-8 warm-shadow border border-cream-200'>
            <Typography variant='h4' className='font-inter mb-6 text-therapeutic-700 text-xl font-medium'>
              Ihre Vorteile
            </Typography>
            <div className='space-y-4'>
              {[
                { title: 'Sanfte Methode', desc: 'Effektive Linderung durch behutsame Berührungen' },
                { title: 'Ganzheitlich', desc: 'Wirkt auf körperlicher und emotionaler Ebene' },
                { title: 'Vielseitig', desc: 'Von Schmerzen bis zu psychosomatischen Beschwerden' },
                { title: 'Nachhaltig', desc: 'Tiefgreifende und dauerhafte Veränderungen' }
              ].map((item, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-therapeutic-600 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <Typography className='font-inter font-medium text-taupe-800 text-base'>
                      {item.title}
                    </Typography>
                    <Typography className='font-inter text-taupe-600 text-sm'>
                      {item.desc}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <Typography variant='h3' className='font-inter mb-4 text-taupe-800 text-2xl md:text-3xl font-light'>
              Wie funktioniert Craniosacrale Körperarbeit?
            </Typography>
            <Typography className='font-inter text-taupe-700 max-w-2xl mx-auto'>
              Ein sanfter Weg zu tiefer Entspannung und natürlicher Heilung
            </Typography>
          </div>
          
          <div className='grid md:grid-cols-3 gap-8 mb-12'>
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
              <div key={index} className='text-center bg-white rounded-xl p-6 warm-shadow border border-cream-200'>
                <div className='w-16 h-16 bg-[#67B1B1] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4'>
                  {item.step}
                </div>
                <Typography className='font-inter font-medium text-taupe-800 text-lg mb-2'>
                  {item.title}
                </Typography>
                <Typography className='font-inter text-taupe-600 text-sm leading-relaxed mb-3'>
                  {item.desc}
                </Typography>
                <Typography className='font-inter text-sage-600 text-xs italic'>
                  {item.detail}
                </Typography>
              </div>
            ))}
          </div>

          {/* Process Image */}
          <div className='bg-white rounded-2xl p-8 warm-shadow border border-cream-200'>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div>
                <Typography variant='h4' className='font-inter mb-4 text-therapeutic-700 text-xl font-medium'>
                  Der craniosacrale Rhythmus
                </Typography>
                <Typography className='font-inter text-taupe-700 leading-relaxed mb-4'>
                  Jeder Körper hat einen eigenen, subtilen Rhythmus - den craniosacralen Rhythmus. 
                  Dieser entsteht durch die Bewegung der Gehirn-Rückenmarks-Flüssigkeit und ist 
                  unabhängig von Herzschlag und Atmung.
                </Typography>
                <Typography className='font-inter text-taupe-600 text-sm'>
                  Durch geschulte Hände kann dieser Rhythmus ertastet und Unregelmäßigkeiten 
                  erkannt werden, die auf Blockaden oder Spannungen hinweisen.
                </Typography>
              </div>
              <div className='h-64 bg-cream-200 rounded-xl flex items-center justify-center'>
                {/* Placeholder for process illustration */}
                <Typography className='text-taupe-600 font-inter text-center'>
                  Illustration des <br />craniosacralen Systems
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <Typography variant='h3' className='font-inter mb-4 text-taupe-800 text-2xl md:text-3xl font-light'>
              Was Klienten sagen
            </Typography>
            <Typography className='font-inter text-taupe-700 max-w-2xl mx-auto'>
              Erfahrungen und Erfolgsgeschichten aus der Praxis
            </Typography>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                text: "Nach Jahren chronischer Kopfschmerzen habe ich endlich Linderung gefunden. Die sanfte Behandlung hat mir geholfen, wieder schmerzfrei zu leben.",
                name: "Maria K.",
                condition: "Chronische Migräne"
              },
              {
                text: "Ich war skeptisch, aber die Cranio-Behandlung hat mir bei meinen Schlafproblemen sehr geholfen. Ich fühle mich ausgeglichener und entspannter.",
                name: "Thomas M.",
                condition: "Schlafstörungen"
              },
              {
                text: "Die einfühlsame Art und die sanften Berührungen haben mir geholfen, nach einem Trauma wieder Vertrauen in meinen Körper zu finden.",
                name: "Sandra L.",
                condition: "Trauma-Verarbeitung"
              }
            ].map((testimonial, index) => (
              <div key={index} className='bg-white rounded-xl p-6 warm-shadow border border-cream-200'>
                <Typography className='font-inter text-taupe-700 italic mb-4 leading-relaxed'>
                  "{testimonial.text}"
                </Typography>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-sage-200 rounded-full flex items-center justify-center'>
                    <Typography className='font-inter font-bold text-sage-700 text-sm'>
                      {testimonial.name.charAt(0)}
                    </Typography>
                  </div>
                  <div>
                    <Typography className='font-inter font-medium text-taupe-800 text-sm'>
                      {testimonial.name}
                    </Typography>
                    <Typography className='font-inter text-sage-600 text-xs'>
                      {testimonial.condition}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Science Section */}
        <div className='mb-20'>
          <div className='bg-white rounded-2xl p-8 warm-shadow border border-cream-200'>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div className='h-64 bg-cream-200 rounded-xl flex items-center justify-center'>
                {/* Placeholder for scientific illustration */}
                <Typography className='text-taupe-600 font-inter text-center'>
                  Wissenschaftliche Grundlagen <br />der Cranio-Therapie
                </Typography>
              </div>
              <div>
                <Typography variant='h4' className='font-inter mb-4 text-therapeutic-700 text-xl font-medium'>
                  Wissenschaftlich fundiert
                </Typography>
                <Typography className='font-inter text-taupe-700 leading-relaxed mb-4'>
                  Die Craniosacrale Therapie basiert auf den Erkenntnissen des Osteopathen 
                  Dr. William Sutherland und wurde von Dr. John Upledger weiterentwickelt. 
                  Studien zeigen positive Effekte bei verschiedenen Beschwerdebildern.
                </Typography>
                <div className='space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <div className='w-2 h-2 bg-therapeutic-600 rounded-full'></div>
                    <Typography className='font-inter text-taupe-600 text-sm'>
                      Evidenzbasierte Behandlungsmethode
                    </Typography>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='w-2 h-2 bg-therapeutic-600 rounded-full'></div>
                    <Typography className='font-inter text-taupe-600 text-sm'>
                      Kontinuierliche Weiterbildung und Zertifizierung
                    </Typography>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='w-2 h-2 bg-therapeutic-600 rounded-full'></div>
                    <Typography className='font-inter text-taupe-600 text-sm'>
                      Anerkannt von führenden Gesundheitsorganisationen
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center bg-cream-100 rounded-2xl p-12 warm-shadow border border-cream-300'>
          <Typography variant='h3' className='font-inter mb-4 text-taupe-800 text-2xl font-light'>
            Bereit für Ihre Auszeit?
          </Typography>
          <Typography className='font-inter text-taupe-700 mb-8 max-w-2xl mx-auto'>
            Erleben Sie die transformative Kraft der Craniosacralen Körperarbeit und 
            investieren Sie in Ihr Wohlbefinden.
          </Typography>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href="/kontakt">
              <Button 
                size="lg" 
                className="bg-[#67B1B1] hover:bg-[#5a9999] text-white font-inter px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Jetzt Termin vereinbaren
              </Button>
            </Link>
            <Link href="/angebote-preise">
              <Button 
                variant="outlined" 
                size="lg" 
                className="border-2 border-taupe-400 text-taupe-700 hover:bg-taupe-100 font-inter px-8 py-3 rounded-full transition-all duration-300"
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
