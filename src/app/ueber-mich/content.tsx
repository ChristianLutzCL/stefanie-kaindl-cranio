'use client';

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import logo from "../../../public/image/3.jpg";


function Content() {
  return (
    <section className="flex pt-40 h-screen">
      <div className="flex flex-grid justify-between mx-auto max-w-screen-2xl gap-y-12 items-center w-full">
        <div className="h-full md:w-1/2 px-6 md:px-0">
          <Typography variant="h3" className="font-inter text-white pb-12">
            Über Mich
          </Typography>
          <Typography className="font-normal text-gray-300 font-inter pb-6">
            Mein Name ist Stefanie Kaindl, ich wurde 1990 in Pfaffenhofen an der Ilm geboren und...
          </Typography>
          <Typography className="font-normal text-gray-300 font-inter pb-6">
          Vor einigen Jahren führten meine persönlichen Lebensumstände dazu, dass ich mich für Cranio entschied. Über viele Jahre hinweg habe ich nach Möglichkeiten gesucht, mein Leiden zu lindern, jedoch ohne Erfolg. Als ich dann erstmals Cranio-Behandlungen erhielt, erlebte ich positive Veränderungen in meinem Wohlbefinden. Ich war so beeindruckt von dieser Methode, dass ich den Wunsch verspürte, mehr über diese Form der Körperarbeit zu erfahren.
          </Typography>
          <Typography className="font-normal text-gray-300 font-inter pb-6">
          Ich habe mich dazu entschieden, mich an der Cranio-Schule in Stuttgart anzumelden, und bin dankbar dafür, diesen Schritt gemacht zu haben. Diese Arbeit bereichert mein Leben auf vielfältige Weise.
          </Typography>
        </div>
        <div className="h-full w-1/2 invisible md:visible">
          <div className="flex justify-end">
            <div className="w-2/3 rounded-md overflow-hidden shadow-lg">
              <Image src={logo} alt="logo" className="antialiased bg-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content;