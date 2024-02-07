"use client";

import { Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/5.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h1" color="white" className="font-inter">
          ~ Dein Weg zur inneren Balance ~
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-3xl font-inter text-[#9dccccff]"
          >
            Ganzheitliches Wohlbefinden mit der Craniosacralen Körperarbeit
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
