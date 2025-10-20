"use client";

import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";


function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/8.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-taupe-900/40 via-taupe-900/60 to-taupe-900/70" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center max-w-4xl">
          <div className="space-y-10">
            <Typography variant="h1" color="white" className="font-inter text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Dein Weg zur inneren Balance
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="w-full md:max-w-3xl mx-auto font-inter text-lg md:text-xl text-sage-100 leading-relaxed"
            >
              Durch achtsame Berührungen und sanfte Techniken der Craniosacralen Körperarbeit 
              unterstütze ich Sie dabei, Stress abzubauen, Verspannungen zu lösen und Ihr 
              natürliches Gleichgewicht wiederzufinden.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link href="/kontakt">
                <Button 
                  size="lg" 
                  className="bg-[#67B1B1] hover:bg-[#5a9999] text-white font-inter px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
                >
                  Jetzt Termin buchen
                </Button>
              </Link>
              <Link href="/ueber-mich">
                <Button 
                  variant="outlined" 
                  size="lg" 
                  className="border-2 border-cream-100 text-cream-100 hover:bg-cream-100 hover:text-taupe-800 font-inter px-8 py-4 text-lg transition-all duration-300 rounded-full"
                >
                  Mehr über mich
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
