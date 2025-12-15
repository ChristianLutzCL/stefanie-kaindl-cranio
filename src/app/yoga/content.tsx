'use client';

import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../../public/image/yoga.webp";
import practiceImage from "../../../public/image/yoga_raum.webp";

const pillars = [
  {
    title: "Regulierung",
    description:
      "Bewusster Atem, sanfte Übergänge und craniosacrale Stillpoints helfen deinem Nervensystem, sicher zu landen.",
  },
  {
    title: "Verkörperung",
    description:
      "Sequenzen folgen dem Verlauf der Faszienlinien – du lernst, dich von innen heraus zu bewegen.",
  },
  {
    title: "Integration",
    description:
      "Jede Stunde endet mit Journaling-Impulsen oder Klang. So überträgst du das Erlebte in deinen Alltag.",
  },
];

const scheduleHighlights = [
  {
    title: "Sanftes Ankommen",
    time: "17:30 – 18:30",
    detail: "Regenerative Sequenzen, Breathwork & Stillpoints für einen ruhigen Start in den Abend",
  },
  {
    title: "Tiefe Flow-Praxis",
    time: "19:00 – 20:00",
    detail: "Fließende Vinyasa- und Faszien-Elemente mit Cranio-Impulsen für Klarheit und Kraft",
  },
];

function Content() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-cream-50 to-cream-100 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-10 rounded-2xl bg-gradient-to-r from-[#67B1B1] to-[#5a9a9a] text-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 warm-shadow">
          <div>
            <Typography className="font-inter text-sm uppercase tracking-[0.3em] text-white/80 mb-1">
              Neu ab Januar
            </Typography>
            <Typography variant="h2" className="font-inter text-2xl md:text-3xl font-light">
              Donnerstags-Yoga um 17:30 & 19:00 Uhr
            </Typography>
            <Typography className="font-inter text-white/90 mt-2">
              Zwei Termine pro Abend, kleine Gruppen, Cranio-inspirierte Flows.
            </Typography>
          </div>
          <Link href="https://wa.me/4917663094476" target="_blank" rel="noopener noreferrer" className="self-start md:self-center">
            <Button className="bg-white text-[#5a9a9a] hover:bg-white/90 border border-transparent font-inter px-6 py-3 rounded-full">
              Platz reservieren
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 pt-10">
          <div>
            <Typography variant="h1" className="font-inter text-taupe-800 text-3xl md:text-4xl font-light mb-6">
              Yoga für dein Nervensystem
            </Typography>
            <Typography className="font-inter text-taupe-700 text-lg leading-relaxed mb-6">
              Sanfte Sequenzen, somatische Flows und Cranio-inspirierte Stillpoints schenken dir ein Yoga, das
              dein Nervensystem reguliert und dich mit deinem Körper verbindet. Du übst in kleinen Gruppen,
              findest Ruhe, Kraft und ein Gefühl von zu Hause in dir.
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
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-white rounded-2xl p-6 warm-shadow border border-cream-200">
              <Typography className="font-inter text-[#67B1B1] text-sm uppercase tracking-wide mb-3">
                {pillar.title}
              </Typography>
              <Typography className="font-inter text-taupe-700 leading-relaxed">
                {pillar.description}
              </Typography>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="lg:order-2">
            <Typography variant="h2" className="font-inter text-taupe-800 text-2xl md:text-3xl font-light mb-4">
              Was dich erwartet
            </Typography>
            <Typography className="font-inter text-taupe-700 leading-relaxed mb-6">
              Jede Klasse folgt einer klaren Dramaturgie: Ankommen, Mobilisieren, Flow, Integration. Hands-On
              Impulse aus der Craniosacralen Körperarbeit öffnen Raum für Regulation und tiefe Ruhe.
            </Typography>
            <div className="border border-cream-200 rounded-2xl bg-white/70 divide-y divide-cream-200">
              {["Somatische Aufwärmsequenzen", "Regenerative Yin-Elemente", "Atem- & Klangreisen"]
                .map((item) => (
                  <div key={item} className="flex items-center gap-3 py-4 px-5">
                    <span className="w-2 h-2 rounded-full bg-[#67B1B1]" aria-hidden="true"></span>
                    <Typography className="font-inter text-taupe-700 leading-relaxed">
                      {item}
                    </Typography>
                  </div>
                ))}
            </div>
          </div>
          <div className="lg:order-1">
            <div className="relative rounded-3xl overflow-hidden warm-shadow border border-cream-200 aspect-[4/3]">
              <Image 
                src={practiceImage} 
                alt="Sanfte Yogapraxis"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </div>
        </div>

        <div className="mb-20 bg-white rounded-3xl p-10 md:p-12 warm-shadow border border-cream-200">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-10">
            <div className="flex-1">
              <Typography variant="h2" className="font-inter text-taupe-800 text-2xl md:text-3xl font-light mb-6">
                Deine Stunde Entspannung
              </Typography>
              <div className="divide-y divide-cream-200">
                {scheduleHighlights.map((entry) => (
                  <div key={entry.title} className="py-4 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="sm:w-48">
                      <Typography className="font-inter text-[#67B1B1] text-lg font-medium">
                        {entry.time}
                      </Typography>
                      <Typography className="font-inter text-taupe-500 text-sm uppercase tracking-[0.2em]">
                        {entry.title}
                      </Typography>
                    </div>
                    <Typography className="font-inter text-taupe-800 leading-relaxed">
                      {entry.detail}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block w-px bg-cream-200" aria-hidden="true" />
            <div className="lg:w-64 w-full flex flex-col gap-3 items-center text-center justify-center self-start lg:self-stretch">
              <Typography className="font-inter text-sm uppercase tracking-[0.3em] text-taupe-500 mb-2">
                Preis pro Stunde
              </Typography>
              <Typography className="font-inter text-5xl font-light text-[#67B1B1]">
                14€
              </Typography>
              <Typography className="font-inter text-taupe-600 text-sm mt-2">
                Kleine Gruppe, persönliche Begleitung, Cranio-Impuls inklusive.
              </Typography>
            </div>
          </div>
        </div>

        <div className="rounded-3xl p-12 warm-shadow border border-cream-200 bg-gradient-to-r from-[#67B1B1] to-[#5a9a9a] text-white">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1">
              <Typography className="font-inter text-sm uppercase tracking-[0.3em] text-white/80 mb-2">
                Plätze limitiert
              </Typography>
              <Typography variant="h2" className="font-inter text-2xl md:text-3xl font-light mb-4">
                Bereit für deinen Donnerstag?
              </Typography>
              <Typography className="font-inter text-white/90 leading-relaxed max-w-2xl">
                Sichere dir deinen Platz und erlebe, wie Yoga und Cranio dich regulieren, erden und stärken.
                Ich melde mich persönlich bei dir mit allen Details.
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
