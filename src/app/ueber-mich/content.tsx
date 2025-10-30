'use client';

import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/image/ueber-mich.png";


function Content() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-cream-100 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 pt-20">
          <div className="order-2 lg:order-1">
            <Typography variant="h1" className="font-inter text-taupe-800 text-3xl md:text-4xl font-light mb-8">
              Über mich
            </Typography>
            <Typography className="font-inter text-taupe-700 text-lg leading-relaxed mb-6">
              Mein Name ist Stefanie Kaindl – ich bin Craniosacral-Praktikerin aus Leidenschaft.
              Mit 34 Jahren habe ich meine Berufung gefunden: Menschen dabei zu begleiten, in Kontakt 
              mit ihrer inneren Kraft, Ruhe und Balance zu kommen.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt">
                <Button 
                  size="lg" 
                  className="bg-[#67B1B1] hover:bg-[#5a9999] text-white font-inter px-6 py-3 rounded-full"
                >
                  Termin vereinbaren
                </Button>
              </Link>
              <Link href="/angebote-preise">
                <Button 
                  variant="outlined" 
                  size="lg" 
                  className="border-2 border-taupe-400 text-taupe-700 hover:bg-taupe-100 font-inter px-6 py-3 rounded-full"
                >
                  Meine Angebote
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative max-w-md mx-auto">
              <div className="rounded-2xl overflow-hidden warm-shadow">
                <Image 
                  src={logo} 
                  alt="Stefanie Kaindl - Craniosacrale Therapeutin" 
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#67B1B1] rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-sage-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Personal Journey Section */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl p-8 md:p-12 warm-shadow border border-cream-200">
            <Typography variant="h3" className="font-inter text-taupe-800 text-2xl md:text-3xl font-light mb-8 text-center">
              Mein Weg
            </Typography>
            <div className="space-y-6 max-w-4xl mx-auto">
              <Typography className="font-inter text-taupe-700 leading-relaxed">
                Meine fundierte Ausbildung bei Katharina Bähner in Stuttgart, die ich im März 2024 
                abgeschlossen habe, war für mich ein intensiver Transformationsprozess – fachlich wie 
                auch persönlich. Ergänzend dazu habe ich eine Weiterbildung in Kinder-Cranio absolviert, 
                um auch Babys und Kinder mit besonderer Achtsamkeit und Einfühlungsvermögen begleiten zu können.
              </Typography>
              
              <Typography className="font-inter text-taupe-700 leading-relaxed">
                Derzeit vertiefe ich mein Verständnis für Körper, Atem und Energie durch eine 
                300-Stunden-Vinyasa-Yogalehrerausbildung bei Lovelysita in Prien, die ich im Januar 2026 
                abschließen werde. Yoga und Craniosacralarbeit ergänzen sich für mich auf wunderbare 
                Weise – beide schaffen Raum für Präsenz, Bewusstsein und Heilung auf allen Ebenen.
              </Typography>
              
              <Typography className="font-inter text-taupe-700 leading-relaxed">
                Als zweifache Mama weiß ich aus eigener Erfahrung, wie wertvoll es ist, Körper und 
                Seele mit Respekt und Sanftheit zu begegnen. Die Craniosacrale Arbeit ist für mich 
                weit mehr als eine Technik – sie ist eine Begegnung auf Augenhöhe, eine Einladung zum 
                Loslassen, zur inneren Ruhe und Selbstheilung.
              </Typography>
              
              <Typography className="font-inter text-taupe-700 leading-relaxed">
                In meiner Praxis möchte ich einen Raum schaffen, in dem du dich sicher und geborgen 
                fühlst – einen Ort, an dem du zur Ruhe kommen und wieder in Verbindung mit deinem eigenen 
                Rhythmus treten kannst. Mit großer Leidenschaft bilde ich mich kontinuierlich weiter, 
                um mein Wissen zu vertiefen und dir die bestmögliche Erfahrung zu ermöglichen.
              </Typography>
              
              <Typography className="font-inter text-taupe-700 leading-relaxed">
                Ich freue mich darauf, dich auf deinem Weg zu mehr Klarheit, Lebenskraft und innerer 
                Balance zu begleiten.
              </Typography>
              
              <div className="mt-12 pt-6">
                <Typography className="font-inter text-taupe-600 text-base italic mb-1">
                  Von Herzen,
                </Typography>
                <Typography className="font-inter text-therapeutic-700 text-xl font-light italic tracking-wide" style={{ fontFamily: 'cursive' }}>
                  Steffi
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="mb-20">
          <Typography variant="h3" className="font-inter text-taupe-800 text-2xl md:text-3xl font-light mb-12 text-center">
            Ausbildung & Qualifikationen
          </Typography>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream-50 rounded-2xl p-6 warm-shadow border border-cream-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#67B1B1] rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography className="text-white font-bold">CS</Typography>
                </div>
                <div>
                  <Typography className="font-inter font-medium text-taupe-800 text-lg mb-2">
                    Craniosacrale Körperarbeit
                  </Typography>
                  <Typography className="font-inter text-taupe-600 mb-2">
                    Katharina Bähner, Stuttgart – Abschluss März 2024
                  </Typography>
                  <Typography className="font-inter text-taupe-700 text-sm">
                    Fundierte Ausbildung in Craniosacraler Körperarbeit mit intensivem 
                    Transformationsprozess auf fachlicher und persönlicher Ebene.
                  </Typography>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 warm-shadow border border-cream-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sage-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography className="text-white font-bold">KC</Typography>
                </div>
                <div>
                  <Typography className="font-inter font-medium text-taupe-800 text-lg mb-2">
                    Kinder-Cranio
                  </Typography>
                  <Typography className="font-inter text-taupe-600 mb-2">
                    Weiterbildung
                  </Typography>
                  <Typography className="font-inter text-taupe-700 text-sm">
                    Spezialisierung auf die achtsame Begleitung von Babys und Kindern 
                    mit besonderem Einfühlungsvermögen.
                  </Typography>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 warm-shadow border border-cream-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-therapeutic-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography className="text-white font-bold">YL</Typography>
                </div>
                <div>
                  <Typography className="font-inter font-medium text-taupe-800 text-lg mb-2">
                    Vinyasa-Yogalehrerin (in Ausbildung)
                  </Typography>
                  <Typography className="font-inter text-taupe-600 mb-2">
                    Lovelysita, Prien – Abschluss Januar 2026
                  </Typography>
                  <Typography className="font-inter text-taupe-700 text-sm">
                    300-Stunden-Ausbildung zur Vertiefung des Verständnisses für 
                    Körper, Atem und Energie.
                  </Typography>
                </div>
              </div>
            </div>

            <div className="bg-cream-50 rounded-2xl p-6 warm-shadow border border-cream-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8B9A7C] rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography className="text-white font-bold">WB</Typography>
                </div>
                <div>
                  <Typography className="font-inter font-medium text-taupe-800 text-lg mb-2">
                    Kontinuierliche Weiterbildung
                  </Typography>
                  <Typography className="font-inter text-taupe-600 mb-2">
                    Laufend
                  </Typography>
                  <Typography className="font-inter text-taupe-700 text-sm">
                    Mit großer Leidenschaft kontinuierliche Weiterbildung zur 
                    Vertiefung des Wissens und bestmöglicher Begleitung.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl p-8 md:p-12 warm-shadow border border-cream-200">
            <Typography variant="h3" className="font-inter text-taupe-800 text-2xl md:text-3xl font-light mb-8 text-center">
              Meine Behandlungsphilosophie
            </Typography>
            <div className="max-w-4xl mx-auto">
              <Typography className="font-inter text-taupe-700 text-lg leading-relaxed mb-6 text-center italic">
                "Die Craniosacrale Arbeit ist für mich weit mehr als eine Technik – sie ist eine 
                Begegnung auf Augenhöhe, eine Einladung zum Loslassen, zur inneren Ruhe und Selbstheilung."
              </Typography>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    title: "Sicher & Geborgen",
                    desc: "Ein Raum, in dem du zur Ruhe kommen und in Verbindung mit deinem eigenen Rhythmus treten kannst"
                  },
                  {
                    title: "Achtsam & Einfühlsam", 
                    desc: "Respektvolle Begegnung mit Körper und Seele in sanfter, liebevoller Begleitung"
                  },
                  {
                    title: "Präsenz & Bewusstsein",
                    desc: "Raum für Heilung auf allen Ebenen – körperlich, emotional und energetisch"
                  }
                ].map((principle, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-therapeutic-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-therapeutic-600 rounded-full"></div>
                    </div>
                    <Typography className="font-inter font-medium text-taupe-800 mb-2">
                      {principle.title}
                    </Typography>
                    <Typography className="font-inter text-taupe-600 text-sm">
                      {principle.desc}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-cream-100 rounded-2xl p-12 warm-shadow border border-cream-300">
          <Typography variant="h3" className="font-inter text-taupe-800 text-2xl font-light mb-4">
            Lass uns sprechen
          </Typography>
          <Typography className="font-inter text-taupe-700 mb-8 max-w-2xl mx-auto">
            Hast du Fragen zur Craniosacralen Körperarbeit oder möchtest du einen Termin vereinbaren? 
            Ich freue mich darauf, dich kennenzulernen und dich auf deinem Weg zu begleiten.
          </Typography>
          <Link href="/kontakt">
            <Button 
              size="lg" 
              className="bg-[#67B1B1] hover:bg-[#5a9999] text-white font-inter px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Jetzt Kontakt aufnehmen
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Content;