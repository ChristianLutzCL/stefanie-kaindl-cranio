'use client';

import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/image/3.jpg";


function Content() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-cream-100 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 pt-20">
          <div className="order-2 lg:order-1">
            <Typography variant="h1" className="font-inter text-taupe-800 text-3xl md:text-4xl font-light mb-6">
              Über mich
            </Typography>
            <Typography variant="h2" className="font-inter text-therapeutic-700 text-xl md:text-2xl font-light mb-8">
              Stefanie Kaindl
            </Typography>
            <Typography className="font-inter text-taupe-700 text-lg leading-relaxed mb-6">
              Mein Name ist Stefanie Kaindl und ich begleite Menschen auf ihrem Weg zu mehr 
              Wohlbefinden und innerer Balance. Als zertifizierte Craniosacrale Therapeutin 
              bringe ich nicht nur fachliche Kompetenz mit, sondern auch die persönliche 
              Erfahrung der heilsamen Wirkung dieser besonderen Therapieform.
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
            <div className="relative">
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
              Mein persönlicher Weg zur Cranio
            </Typography>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Typography className="font-inter text-taupe-700 leading-relaxed mb-6">
                  Vor einigen Jahren führten meine persönlichen Lebensumstände dazu, dass ich 
                  mich intensiv mit alternativen Heilmethoden beschäftigte. Über viele Jahre 
                  hinweg suchte ich nach Möglichkeiten, körperliche und emotionale Beschwerden 
                  zu lindern – jedoch zunächst ohne nachhaltigen Erfolg.
                </Typography>
                <Typography className="font-inter text-taupe-700 leading-relaxed">
                  Als ich dann erstmals eine Craniosacrale Behandlung erhielt, erlebte ich 
                  zum ersten Mal seit langem positive Veränderungen in meinem Wohlbefinden. 
                  Die sanfte, aber tiefgreifende Wirkung dieser Methode beeindruckte mich so sehr, 
                  dass der Wunsch entstand, mehr über diese besondere Form der Körperarbeit zu erfahren.
                </Typography>
              </div>
              <div>
                <Typography className="font-inter text-taupe-700 leading-relaxed mb-6">
                  Diese persönliche Erfahrung motivierte mich dazu, mich an der renommierten 
                  Cranio-Schule in Stuttgart anzumelden. Die fundierte Ausbildung dort hat 
                  nicht nur mein Verständnis für die Craniosacrale Arbeit vertieft, sondern 
                  auch meine eigene Heilungsreise unterstützt.
                </Typography>
                <Typography className="font-inter text-taupe-700 leading-relaxed">
                  Heute bin ich dankbar für diesen Weg, denn diese Arbeit bereichert mein Leben 
                  auf vielfältige Weise und ermöglicht es mir, andere Menschen bei ihrer 
                  Heilungsreise zu begleiten.
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
                    Craniosacrale Therapie
                  </Typography>
                  <Typography className="font-inter text-taupe-600 mb-2">
                    Cranio-Schule Stuttgart
                  </Typography>
                  <Typography className="font-inter text-taupe-700 text-sm">
                    Umfassende Ausbildung in Craniosacraler Körperarbeit mit Fokus auf 
                    ganzheitliche Behandlungsansätze und Traumaintegration.
                  </Typography>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 warm-shadow border border-cream-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sage-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography className="text-white font-bold">WB</Typography>
                </div>
                <div>
                  <Typography className="font-inter font-medium text-taupe-800 text-lg mb-2">
                    Kontinuierliche Weiterbildung
                  </Typography>
                  <Typography className="font-inter text-taupe-600 mb-2">
                    Verschiedene Institute
                  </Typography>
                  <Typography className="font-inter text-taupe-700 text-sm">
                    Regelmäßige Fortbildungen in speziellen Techniken und 
                    aktuellen Entwicklungen der Craniosacralen Therapie.
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
              <Typography className="font-inter text-taupe-700 text-lg leading-relaxed mb-6 text-center">
                "Jeder Mensch trägt in sich die Fähigkeit zur Heilung. Meine Aufgabe ist es, 
                einen sicheren Raum zu schaffen, in dem diese natürlichen Heilungsprozesse 
                aktiviert werden können."
              </Typography>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    title: "Individuell",
                    desc: "Jede Behandlung wird an Ihre persönlichen Bedürfnisse angepasst"
                  },
                  {
                    title: "Ganzheitlich", 
                    desc: "Körper, Geist und Seele werden als Einheit betrachtet"
                  },
                  {
                    title: "Respektvoll",
                    desc: "Ihre Grenzen und Ihr Tempo werden stets respektiert"
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
            Lassen Sie uns sprechen
          </Typography>
          <Typography className="font-inter text-taupe-700 mb-8 max-w-2xl mx-auto">
            Haben Sie Fragen zur Craniosacralen Therapie oder möchten Sie einen Termin vereinbaren? 
            Ich freue mich darauf, Sie kennenzulernen und Sie auf Ihrem Weg zu begleiten.
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