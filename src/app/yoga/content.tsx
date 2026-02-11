'use client';

import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
// Uncomment below if using Notion integration
// import { useState, useEffect } from "react";
import heroImage from "../../../public/image/yoga.webp";
import practiceImage from "../../../public/image/yoga_raum.webp";

const pillars = [
  {
    title: "Bewusste Auszeit",
    description:
      "Gönn dir eine bewusste Auszeit vom Alltag und finde zurück zu mehr Ruhe, Kraft und Balance.",
  },
  {
    title: "Ganzheitliche Verbindung",
    description:
      "In meinen Yoga-Stunden erwartet dich eine harmonische Verbindung aus Bewegung, Atmung und Entspannung – für mehr Energie, Gelassenheit und Wohlbefinden.",
  },
  {
    title: "Offener Raum",
    description:
      "Egal, ob du Yoga gerade erst für dich entdeckst oder bereits Erfahrung hast: Du bist herzlich willkommen.",
  },
];

const scheduleHighlights = [
  {
    title: "Kurs 1",
    time: "17:30 – 18:30 Uhr",
    detail: "Sanfte Praxis zum bewussten Ankommen und Entspannen.",
  },
  {
    title: "Kurs 2",
    time: "19:00 – 20:00 Uhr",
    detail: "Fließende Sequenzen für Klarheit, Kraft und Ruhe.",
  },
];

// Static dates - manually update these (all Thursdays)
const upcomingDates = [
  "12.02.2026",
  "19.02.2026",
  "26.02.2026",
  "05.03.2026",
  "12.03.2026",
  "19.03.2026",
  "26.03.2026",
  "02.04.2026",
  "09.04.2026",
  "16.04.2026",
];

const monthNames: Record<string, string> = {
  "01": "Januar",
  "02": "Februar",
  "03": "März",
  "04": "April",
  "05": "Mai",
  "06": "Juni",
  "07": "Juli",
  "08": "August",
  "09": "September",
  "10": "Oktober",
  "11": "November",
  "12": "Dezember",
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
    <section className="pt-28 pb-16 bg-gradient-to-b from-cream-50 to-cream-100 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-10 rounded-3xl bg-gradient-to-br from-[#67B1B1] via-[#5f9f9f] to-[#4f8c8c] text-white p-6 md:p-8 warm-shadow relative overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-white/10 blur-3xl opacity-60 pointer-events-none" aria-hidden="true"></div>
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:max-w-2xl space-y-5">
              <div>
                <Typography className="font-inter text-xs uppercase tracking-[0.5em] text-white/70 mb-1">
                  Donnerstag in Paunzhausen
                </Typography>
                <Typography variant="h2" className="font-inter text-2xl md:text-3xl font-light mb-3">
                  Donnerstags-Yoga mit Steffi
                </Typography>
                <Typography className="font-inter text-white/90 leading-relaxed">
                  Achtsame Gruppen, Cranio-inspirierte Impulse und viel Raum für dich – genau der Ausklang, den dein Donnerstag verdient.
                </Typography>
              </div>
              <div>
                <Typography className="font-inter text-xs uppercase tracking-[0.4em] text-white/70 mb-2">
                  Kurszeiten
                </Typography>
                <div className="flex flex-wrap gap-3">
                  {scheduleHighlights.map((entry) => (
                    <div key={entry.title} className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2">
                      <span className="font-inter text-white/70 text-xs uppercase tracking-[0.3em]">
                        {entry.title}
                      </span>
                      <span className="font-inter text-white text-base font-semibold">
                        {entry.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full sm:w-auto flex flex-col gap-3 lg:w-64 lg:items-end lg:ml-12">
              <Link href="https://wa.me/4917663094476" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto lg:w-full">
                <Button className="w-full sm:w-auto lg:w-full bg-white text-[#5a9a9a] hover:bg-white/90 border border-transparent font-inter px-5 py-3 rounded-full text-base">
                  Platz reservieren
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 pt-10">
          <div>
            <Typography variant="h1" className="font-inter text-taupe-800 text-3xl md:text-4xl font-light mb-6">
              Yoga für Körper & Geist
            </Typography>
            <Typography className="font-inter text-taupe-700 text-lg leading-relaxed mb-4">
              Gönn dir eine bewusste Auszeit vom Alltag und finde zurück zu mehr Ruhe, Kraft und Balance.
            </Typography>
            <Typography className="font-inter text-taupe-700 text-lg leading-relaxed mb-4">
              In meinen Yoga-Stunden erwartet dich eine harmonische Verbindung aus Bewegung, Atmung und
              Entspannung – für mehr Energie, Gelassenheit und Wohlbefinden.
            </Typography>
            <Typography className="font-inter text-taupe-700 text-lg leading-relaxed mb-6">
              Egal, ob du Yoga gerade erst für dich entdeckst oder bereits Erfahrung hast: Du bist herzlich willkommen.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://wa.me/4917663094476" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#67B1B1] hover:bg-[#5a9a9a] text-white font-inter px-8 py-3 rounded-full">
                  Meine Yogazeit buchen
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden warm-shadow border border-cream-200">
                <Image src={heroImage} alt="Yoga Raum Stefanie Kaindl" className="w-full h-full object-cover" priority />
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#67B1B1] rounded-full opacity-30"></div>
              <div className="absolute -top-6 -right-10 w-28 h-28 bg-cream-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group h-full rounded-2xl border border-cream-200 bg-gradient-to-b from-cream-50 to-white p-6 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex items-center justify-center rounded-full bg-[#67B1B1]/10 text-[#67B1B1] text-sm font-semibold tracking-[0.2em] px-4 py-1 mb-4">
                0{index + 1}
              </span>
              <Typography className="font-inter text-xl text-taupe-900 mb-3">
                {pillar.title}
              </Typography>
              <Typography className="font-inter text-taupe-700 leading-relaxed">
                {pillar.description}
              </Typography>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center mb-20">
          <div className="relative rounded-3xl overflow-hidden warm-shadow border border-cream-200 aspect-[4/3] lg:aspect-[5/4]">
            <Image
              src={practiceImage}
              alt="Sanfte Yogapraxis"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="lg:pl-6">
            <Typography variant="h2" className="font-inter text-taupe-800 text-2xl md:text-3xl font-light mb-4">
              Donnerstags-Yoga mit Steffi in Paunzhausen
            </Typography>
            <Typography className="font-inter text-taupe-700 leading-relaxed mb-4">
              Meine Yogastunden am Donnerstagabend bieten dir einen geschützten Raum, um loszulassen, aufzutanken und ganz bei dir anzukommen.
            </Typography>
            <Typography className="font-inter text-taupe-700 leading-relaxed mb-6">
              Die Einheiten sind sanft bis dynamisch gestaltet und werden achtsam an die Bedürfnisse der Teilnehmenden angepasst.
            </Typography>
            <Typography className="font-inter text-taupe-600 text-sm uppercase tracking-[0.2em] mb-3">
              Das erwartet dich
            </Typography>
            <div className="space-y-3">
              {[
                "Sanfte bis dynamische Yoga-Einheiten",
                "Achtsame Atemtechniken",
                "Tiefenentspannung für mehr innere Ruhe",
                "Förderung von Beweglichkeit, Kraft und Körperwahrnehmung",
                "Für Anfänger und Fortgeschrittene geeignet",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#67B1B1]" aria-hidden="true"></span>
                  <Typography className="font-inter text-taupe-700 leading-relaxed">
                    {item}
                  </Typography>
                </div>
              ))}
            </div>
            <Typography className="font-inter text-taupe-700 leading-relaxed mt-6">
              Ich freue mich darauf, dich auf deinem Yogaweg zu begleiten.
            </Typography>
          </div>
        </div>

        <div className="mb-20 rounded-3xl border border-cream-200 warm-shadow overflow-hidden">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 md:p-12 bg-gradient-to-b from-cream-50 to-white border-b lg:border-b-0 lg:border-r border-cream-200">
              <Typography className="font-inter text-sm uppercase tracking-[0.3em] text-taupe-500 mb-2">
                Donnerstag
              </Typography>
              <Typography variant="h2" className="font-inter text-taupe-800 text-2xl md:text-3xl font-light mb-4">
                Kurszeiten & Ablauf
              </Typography>
              <Typography className="font-inter text-taupe-700 leading-relaxed">
                Zwei Slots pro Abend: Entscheide spontan, ob du entspannend ankommen oder mit einem kraftvollen Flow ausklingen möchtest. Beide Kurse finden in Paunzhausen statt.
              </Typography>
              <div className="mt-8 rounded-2xl border border-white/60 bg-white/70 backdrop-blur-sm p-6">
                <Typography className="font-inter text-xs uppercase tracking-[0.4em] text-taupe-500 mb-2">
                  Preis pro Stunde
                </Typography>
                <Typography className="font-inter text-5xl font-light text-[#67B1B1]">
                  14€
                </Typography>
                <Typography className="font-inter text-taupe-600 text-sm mt-3">
                  Enthalten sind Cranio-Impulse, persönliche Begleitung und eine ruhige Atmosphäre in kleinen Gruppen.
                </Typography>
              </div>
            </div>
            <div className="p-8 md:p-12 bg-white">
              <div className="space-y-5">
                {scheduleHighlights.map((entry) => (
                  <div key={entry.title} className="rounded-2xl border border-cream-200 p-6">
                    <Typography className="font-inter text-sm uppercase tracking-[0.3em] text-taupe-500 mb-1">
                      {entry.title}
                    </Typography>
                    <Typography className="font-inter text-2xl font-light text-[#67B1B1] mb-2">
                      {entry.time}
                    </Typography>
                    <Typography className="font-inter text-taupe-700 leading-relaxed">
                      {entry.detail}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20 rounded-3xl border border-cream-200 warm-shadow overflow-hidden bg-white">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-cream-200 bg-gradient-to-b from-cream-50 to-white">
              <Typography className="font-inter text-sm uppercase tracking-[0.4em] text-taupe-500 mb-3">
                Termine
              </Typography>
              <Typography variant="h2" className="font-inter text-taupe-800 text-2xl md:text-3xl font-light mb-4">
                Nächste Donnerstage in Paunzhausen
              </Typography>
              <Typography className="font-inter text-taupe-700 leading-relaxed mb-6">
                Kurs 1 startet jeweils um 17:30 Uhr, Kurs 2 um 19:00 Uhr. Wähle den Termin, der dir guttut, und reserviere deinen Platz frühzeitig.
              </Typography>
              <Link href="https://wa.me/4917663094476" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#67B1B1] hover:bg-[#5a9a9a] text-white font-inter px-6 py-3 rounded-full">
                  Termin anfragen
                </Button>
              </Link>
            </div>
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {upcomingDates.map((date) => {
                    const [day, month, year] = date.split(".");
                    const monthLabel = monthNames[month] ?? month;
                    const dayNumber = parseInt(day, 10);
                    return (
                      <div key={date} className="rounded-2xl border border-cream-200 bg-cream-50/70 px-4 py-5 text-center">
                        <Typography className="font-inter text-4xl font-light text-[#67B1B1]">
                          {dayNumber}
                        </Typography>
                        <Typography className="font-inter text-base text-taupe-700">
                          {monthLabel}
                        </Typography>
                        <Typography className="font-inter text-xs uppercase tracking-[0.4em] text-taupe-400 mt-1">
                          {year}
                        </Typography>
                      </div>
                    );
                  })}
                </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl p-12 warm-shadow border border-cream-200 bg-gradient-to-r from-[#67B1B1] to-[#5a9a9a] text-white">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1">
              <Typography className="font-inter text-sm uppercase tracking-[0.3em] text-white/80 mb-2">
                Yoga für Körper & Geist
              </Typography>
              <Typography variant="h2" className="font-inter text-2xl md:text-3xl font-light mb-4">
                Bereit für mehr Ruhe, Kraft und Balance?
              </Typography>
              <Typography className="font-inter text-white/90 leading-relaxed max-w-2xl">
                Sichere dir deinen Platz und erlebe, wie Bewegung, Atmung und Entspannung dich stärken. Ich melde mich persönlich bei dir mit allen Details.
              </Typography>
            </div>
            <div className="flex w-full lg:w-auto">
              <Link href="https://wa.me/4917663094476" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button size="lg" className="w-full bg-white text-[#5a9a9a] hover:bg-white/90 font-inter px-10 py-4 rounded-full">
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
