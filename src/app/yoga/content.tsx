'use client';

import {Typography, Button} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
// Uncomment below if using Notion integration
// import { useState, useEffect } from "react";
import heroImage from '../../../public/image/yoga.webp';
import practiceImage from '../../../public/image/yoga_raum.webp';

const pillars = [
  {
    title: 'Bewusste Auszeit',
    description:
      'Gönn dir eine bewusste Auszeit vom Alltag und finde zurück zu mehr Ruhe, Kraft und Balance.',
  },
  {
    title: 'Ganzheitliche Verbindung',
    description:
      'In meinen Yoga-Stunden erwartet dich eine harmonische Verbindung aus Bewegung, Atmung und Entspannung – für mehr Energie, Gelassenheit und Wohlbefinden.',
  },
  {
    title: 'Offener Raum',
    description:
      'Egal, ob du Yoga gerade erst für dich entdeckst oder bereits Erfahrung hast: Du bist herzlich willkommen.',
  },
];

const scheduleHighlights = [
  {
    title: 'Kurs 1',
    time: '17:30 – 18:30 Uhr',
    detail: 'Sanfte Praxis zum bewussten Ankommen und Entspannen.',
  },
  {
    title: 'Kurs 2',
    time: '19:00 – 20:00 Uhr',
    detail: 'Fließende Sequenzen für Klarheit, Kraft und Ruhe.',
  },
];

// Static dates - manually update these (all Thursdays)
const upcomingDates = [
  '16.04.2026',
  '23.04.2026',
  '30.04.2026',
  '07.05.2026',
  '21.05.2026',
  '11.06.2026',
  '18.06.2026',
  '25.06.2026',
  '02.07.2026',
  '09.07.2026',
];

const monthNames: Record<string, string> = {
  '01': 'Januar',
  '02': 'Februar',
  '03': 'März',
  '04': 'April',
  '05': 'Mai',
  '06': 'Juni',
  '07': 'Juli',
  '08': 'August',
  '09': 'September',
  '10': 'Oktober',
  '11': 'November',
  '12': 'Dezember',
};

function Content() {
  // NOTION INTEGRATION CODE (commented out - using static dates instead)
  // Uncomment below and set NEXT_PUBLIC_YOGA_DATES_WEBHOOK in .env.local to use n8n
  /*
  const [dates, setDates] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        // Fetch from n8n webhook - replace with your n8n webhook URL
        const webhookUrl = process.env.NEXT_PUBLIC_YOGA_DATES_WEBHOOK || 'https://your-n8n-instance.com/webhook/yoga-dates';
        const response = await fetch(webhookUrl);
        const data = await response.json();
        
        if (data.dates && Array.isArray(data.dates)) {
          // Additional client-side filtering for future dates only
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          
          const futureDates = data.dates.filter((dateStr: string) => {
            const [day, month, year] = dateStr.split('.');
            const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
            return date >= today;
          });
          
          setDates(futureDates);
        }
      } catch (error) {
        console.error('Error fetching yoga dates:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDates();
  }, []);
  */

  return (
    <section className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100 pb-16 pt-28'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='warm-shadow relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[#67B1B1] via-[#5f9f9f] to-[#4f8c8c] p-6 text-white md:p-8'>
          <div
            className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-white/10 opacity-60 blur-3xl'
            aria-hidden='true'></div>
          <div className='relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center'>
            <div className='space-y-5 lg:max-w-2xl'>
              <div>
                <Typography className='font-inter mb-1 text-xs uppercase tracking-[0.5em] text-white/70'>
                  Donnerstag in Paunzhausen
                </Typography>
                <Typography
                  variant='h2'
                  className='font-inter mb-3 text-2xl font-light md:text-3xl'>
                  Donnerstags-Yoga mit Steffi
                </Typography>
                <Typography className='font-inter leading-relaxed text-white/90'>
                  Achtsame Gruppen, Cranio-inspirierte Impulse und viel Raum für dich –
                  genau der Ausklang, den dein Donnerstag verdient.
                </Typography>
              </div>
              <div>
                <Typography className='font-inter mb-2 text-xs uppercase tracking-[0.4em] text-white/70'>
                  Kurszeiten
                </Typography>
                <div className='flex flex-wrap gap-3'>
                  {scheduleHighlights.map((entry) => (
                    <div
                      key={entry.title}
                      className='flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2'>
                      <span className='font-inter text-xs uppercase tracking-[0.3em] text-white/70'>
                        {entry.title}
                      </span>
                      <span className='font-inter text-base font-semibold text-white'>
                        {entry.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex w-full flex-col gap-3 sm:w-auto lg:ml-12 lg:w-64 lg:items-end'>
              <Link
                href='https://wa.me/4917663094476'
                target='_blank'
                rel='noopener noreferrer'
                className='w-full sm:w-auto lg:w-full'>
                <Button className='font-inter w-full rounded-full border border-transparent bg-white px-5 py-3 text-base text-[#5a9a9a] hover:bg-white/90 sm:w-auto lg:w-full'>
                  Platz reservieren
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className='warm-shadow mb-20 overflow-hidden rounded-3xl border border-cream-200 bg-white'>
          <div className='grid gap-0 lg:grid-cols-[0.9fr_1.1fr]'>
            <div className='border-b border-cream-200 bg-cream-50 lg:border-b-0 lg:border-r'>
              <Image
                src='/image/alpaka-yoga.jpeg'
                alt='Alpaka Yoga Flyer'
                width={1054}
                height={1492}
                className='h-auto w-full bg-cream-50'
                sizes='(max-width: 1024px) 100vw, 540px'
              />
            </div>
            <div className='flex h-full flex-col justify-between p-8 md:p-10'>
              <div>
                <Typography className='font-inter mb-2 text-sm uppercase tracking-[0.35em] text-taupe-500'>
                  Special Event
                </Typography>
                <Typography
                  variant='h2'
                  className='font-inter mb-4 text-2xl font-light text-taupe-800 md:text-3xl'>
                  Alpaka Yoga
                </Typography>
                <Typography className='font-inter mb-6 leading-relaxed text-taupe-700'>
                  Yoga inmitten der Alpaka-Herde: entspannen, lachen und verbinden. Ein
                  besonderes Erlebnis für Körper, Geist und Herz.
                </Typography>

                <div className='mb-6 grid gap-4 sm:grid-cols-2'>
                  <div className='rounded-2xl border border-cream-200 bg-cream-50/70 p-4'>
                    <Typography className='font-inter mb-1 text-xs uppercase tracking-[0.25em] text-taupe-500'>
                      Datum
                    </Typography>
                    <Typography className='font-inter text-lg text-taupe-800'>
                      13. September 2026
                    </Typography>
                  </div>
                  <div className='rounded-2xl border border-cream-200 bg-cream-50/70 p-4'>
                    <Typography className='font-inter mb-1 text-xs uppercase tracking-[0.25em] text-taupe-500'>
                      Uhrzeit
                    </Typography>
                    <Typography className='font-inter text-lg text-taupe-800'>
                      10:00 Uhr
                    </Typography>
                  </div>
                  <div className='rounded-2xl border border-cream-200 bg-cream-50/70 p-4'>
                    <Typography className='font-inter mb-1 text-xs uppercase tracking-[0.25em] text-taupe-500'>
                      Preis
                    </Typography>
                    <Typography className='font-inter text-lg text-taupe-800'>
                      20 Euro
                    </Typography>
                  </div>
                  <div className='rounded-2xl border border-cream-200 bg-cream-50/70 p-4'>
                    <Typography className='font-inter mb-1 text-xs uppercase tracking-[0.25em] text-taupe-500'>
                      Ort
                    </Typography>
                    <Typography className='font-inter text-lg text-taupe-800'>
                      Eckersberg
                    </Typography>
                  </div>
                </div>

                <Typography className='font-inter mb-6 leading-relaxed text-taupe-700'>
                  Für Groß und Klein, auch Anfänger sind willkommen. Bitte bring bequeme
                  Kleidung, eine Matte und gute Laune mit.
                </Typography>
              </div>

              <div>
                <Link
                  href='https://wa.me/4917663094476'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Button className='font-inter rounded-full bg-[#67B1B1] px-8 py-3 text-white hover:bg-[#5a9a9a]'>
                    Anmelden & Infos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-20 grid items-center gap-12 pt-10 lg:grid-cols-2'>
          <div>
            <Typography
              variant='h1'
              className='font-inter mb-6 text-3xl font-light text-taupe-800 md:text-4xl'>
              Yoga für Körper & Geist
            </Typography>
            <Typography className='font-inter mb-4 text-lg leading-relaxed text-taupe-700'>
              Gönn dir eine bewusste Auszeit vom Alltag und finde zurück zu mehr Ruhe,
              Kraft und Balance.
            </Typography>
            <Typography className='font-inter mb-4 text-lg leading-relaxed text-taupe-700'>
              In meinen Yoga-Stunden erwartet dich eine harmonische Verbindung aus
              Bewegung, Atmung und Entspannung – für mehr Energie, Gelassenheit und
              Wohlbefinden.
            </Typography>
            <Typography className='font-inter mb-6 text-lg leading-relaxed text-taupe-700'>
              Egal, ob du Yoga gerade erst für dich entdeckst oder bereits Erfahrung hast:
              Du bist herzlich willkommen.
            </Typography>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <Link
                href='https://wa.me/4917663094476'
                target='_blank'
                rel='noopener noreferrer'>
                <Button
                  size='lg'
                  className='font-inter rounded-full bg-[#67B1B1] px-8 py-3 text-white hover:bg-[#5a9a9a]'>
                  Meine Yogazeit buchen
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <div className='relative'>
              <div className='warm-shadow overflow-hidden rounded-3xl border border-cream-200'>
                <Image
                  src={heroImage}
                  alt='Yoga Raum Stefanie Kaindl'
                  className='h-full w-full object-cover'
                  priority
                />
              </div>
              <div className='absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-[#67B1B1] opacity-30'></div>
              <div className='absolute -right-10 -top-6 h-28 w-28 rounded-full bg-cream-200 opacity-60'></div>
            </div>
          </div>
        </div>

        <div className='mb-20 grid gap-6 md:grid-cols-3'>
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className='group h-full rounded-2xl border border-cream-200 bg-gradient-to-b from-cream-50 to-white p-6 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg'>
              <span className='mb-4 inline-flex items-center justify-center rounded-full bg-[#67B1B1]/10 px-4 py-1 text-sm font-semibold tracking-[0.2em] text-[#67B1B1]'>
                0{index + 1}
              </span>
              <Typography className='font-inter mb-3 text-xl text-taupe-900'>
                {pillar.title}
              </Typography>
              <Typography className='font-inter leading-relaxed text-taupe-700'>
                {pillar.description}
              </Typography>
            </div>
          ))}
        </div>

        <div className='mb-20 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16'>
          <div className='warm-shadow relative aspect-[4/3] overflow-hidden rounded-3xl border border-cream-200 lg:aspect-[5/4]'>
            <Image
              src={practiceImage}
              alt='Sanfte Yogapraxis'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 600px'
            />
          </div>
          <div className='lg:pl-6'>
            <Typography
              variant='h2'
              className='font-inter mb-4 text-2xl font-light text-taupe-800 md:text-3xl'>
              Donnerstags-Yoga mit Steffi in Paunzhausen
            </Typography>
            <Typography className='font-inter mb-4 leading-relaxed text-taupe-700'>
              Meine Yogastunden am Donnerstagabend bieten dir einen geschützten Raum, um
              loszulassen, aufzutanken und ganz bei dir anzukommen.
            </Typography>
            <Typography className='font-inter mb-6 leading-relaxed text-taupe-700'>
              Die Einheiten sind sanft bis dynamisch gestaltet und werden achtsam an die
              Bedürfnisse der Teilnehmenden angepasst.
            </Typography>
            <Typography className='font-inter mb-3 text-sm uppercase tracking-[0.2em] text-taupe-600'>
              Das erwartet dich
            </Typography>
            <div className='space-y-3'>
              {[
                'Sanfte bis dynamische Yoga-Einheiten',
                'Achtsame Atemtechniken',
                'Tiefenentspannung für mehr innere Ruhe',
                'Förderung von Beweglichkeit, Kraft und Körperwahrnehmung',
                'Für Anfänger und Fortgeschrittene geeignet',
              ].map((item) => (
                <div key={item} className='flex items-start gap-3'>
                  <span
                    className='mt-2 h-1.5 w-1.5 rounded-full bg-[#67B1B1]'
                    aria-hidden='true'></span>
                  <Typography className='font-inter leading-relaxed text-taupe-700'>
                    {item}
                  </Typography>
                </div>
              ))}
            </div>
            <Typography className='font-inter mt-6 leading-relaxed text-taupe-700'>
              Ich freue mich darauf, dich auf deinem Yogaweg zu begleiten.
            </Typography>
          </div>
        </div>

        <div className='warm-shadow mb-20 overflow-hidden rounded-3xl border border-cream-200'>
          <div className='grid lg:grid-cols-[1.05fr_0.95fr]'>
            <div className='border-b border-cream-200 bg-gradient-to-b from-cream-50 to-white p-8 md:p-12 lg:border-b-0 lg:border-r'>
              <Typography className='font-inter mb-2 text-sm uppercase tracking-[0.3em] text-taupe-500'>
                Donnerstag
              </Typography>
              <Typography
                variant='h2'
                className='font-inter mb-4 text-2xl font-light text-taupe-800 md:text-3xl'>
                Kurszeiten & Ablauf
              </Typography>
              <Typography className='font-inter leading-relaxed text-taupe-700'>
                Zwei Slots pro Abend: Entscheide spontan, ob du entspannend ankommen oder
                mit einem kraftvollen Flow ausklingen möchtest. Beide Kurse finden in
                Paunzhausen statt.
              </Typography>
              <div className='mt-8 rounded-2xl border border-white/60 bg-white/70 p-6 backdrop-blur-sm'>
                <Typography className='font-inter mb-2 text-xs uppercase tracking-[0.4em] text-taupe-500'>
                  Preis pro Stunde
                </Typography>
                <Typography className='font-inter text-5xl font-light text-[#67B1B1]'>
                  14€
                </Typography>
                <Typography className='font-inter mt-3 text-sm text-taupe-600'>
                  Enthalten sind Cranio-Impulse, persönliche Begleitung und eine ruhige
                  Atmosphäre in kleinen Gruppen.
                </Typography>
              </div>
              <div className='mt-6 flex flex-col gap-4 rounded-2xl border border-white/60 bg-white/70 p-6 backdrop-blur-sm'>
                <Typography className='font-inter text-xs uppercase tracking-[0.4em] text-taupe-500'>
                  Zahlung möglich
                </Typography>
                <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6'>
                  <div className='flex shrink-0 items-center'>
                    <Image
                      src='/logos/egym-wellpass-logo-dark.svg'
                      alt='EGYM Wellpass'
                      width={320}
                      height={48}
                      className='h-12 w-auto opacity-90'
                    />
                  </div>
                  <Typography className='font-inter max-w-md text-sm leading-relaxed text-taupe-700'>
                    Du kannst deine Stunde auch mit EGYM Wellpass bezahlen.
                  </Typography>
                </div>
              </div>
            </div>
            <div className='bg-white p-8 md:p-12'>
              <div className='space-y-5'>
                {scheduleHighlights.map((entry) => (
                  <div
                    key={entry.title}
                    className='rounded-2xl border border-cream-200 p-6'>
                    <Typography className='font-inter mb-1 text-sm uppercase tracking-[0.3em] text-taupe-500'>
                      {entry.title}
                    </Typography>
                    <Typography className='font-inter mb-2 text-2xl font-light text-[#67B1B1]'>
                      {entry.time}
                    </Typography>
                    <Typography className='font-inter leading-relaxed text-taupe-700'>
                      {entry.detail}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='warm-shadow mb-20 overflow-hidden rounded-3xl border border-cream-200 bg-white'>
          <div className='grid lg:grid-cols-[0.85fr_1.15fr]'>
            <div className='border-b border-cream-200 bg-gradient-to-b from-cream-50 to-white p-8 md:p-12 lg:border-b-0 lg:border-r'>
              <Typography className='font-inter mb-3 text-sm uppercase tracking-[0.4em] text-taupe-500'>
                Termine
              </Typography>
              <Typography
                variant='h2'
                className='font-inter mb-4 text-2xl font-light text-taupe-800 md:text-3xl'>
                Nächste Donnerstage in Paunzhausen
              </Typography>
              <Typography className='font-inter mb-6 leading-relaxed text-taupe-700'>
                Kurs 1 startet jeweils um 17:30 Uhr, Kurs 2 um 19:00 Uhr. Wähle den
                Termin, der dir guttut, und reserviere deinen Platz frühzeitig.
              </Typography>
              <Link
                href='https://wa.me/4917663094476'
                target='_blank'
                rel='noopener noreferrer'>
                <Button className='font-inter rounded-full bg-[#67B1B1] px-6 py-3 text-white hover:bg-[#5a9a9a]'>
                  Termin anfragen
                </Button>
              </Link>
            </div>
            <div className='p-8 md:p-12'>
              <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
                {upcomingDates.map((date) => {
                  const [day, month, year] = date.split('.');
                  const monthLabel = monthNames[month] ?? month;
                  const dayNumber = parseInt(day, 10);
                  return (
                    <div
                      key={date}
                      className='rounded-2xl border border-cream-200 bg-cream-50/70 px-4 py-5 text-center'>
                      <Typography className='font-inter text-4xl font-light text-[#67B1B1]'>
                        {dayNumber}
                      </Typography>
                      <Typography className='font-inter text-base text-taupe-700'>
                        {monthLabel}
                      </Typography>
                      <Typography className='font-inter mt-1 text-xs uppercase tracking-[0.4em] text-taupe-400'>
                        {year}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className='warm-shadow rounded-3xl border border-cream-200 bg-gradient-to-r from-[#67B1B1] to-[#5a9a9a] p-12 text-white'>
          <div className='flex flex-col items-start gap-8 lg:flex-row lg:items-center'>
            <div className='flex-1'>
              <Typography className='font-inter mb-2 text-sm uppercase tracking-[0.3em] text-white/80'>
                Yoga für Körper & Geist
              </Typography>
              <Typography
                variant='h2'
                className='font-inter mb-4 text-2xl font-light md:text-3xl'>
                Bereit für mehr Ruhe, Kraft und Balance?
              </Typography>
              <Typography className='font-inter max-w-2xl leading-relaxed text-white/90'>
                Sichere dir deinen Platz und erlebe, wie Bewegung, Atmung und Entspannung
                dich stärken. Ich melde mich persönlich bei dir mit allen Details.
              </Typography>
            </div>
            <div className='flex w-full lg:w-auto'>
              <Link
                href='https://wa.me/4917663094476'
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1'>
                <Button
                  size='lg'
                  className='font-inter w-full rounded-full bg-white px-10 py-4 text-[#5a9a9a] hover:bg-white/90'>
                  Jetzt buchen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
