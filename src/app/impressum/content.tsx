'use client';

import { Typography } from "@material-tailwind/react";


function Content() {
  return (
    <section className="pt-40 pb-12 px-12 therapeutic-gradient min-h-screen">
      <div className="flex flex-col mx-auto max-w-screen-md gap-y-12">
        <Typography variant="h2" className="mt-8 mb-6 font-inter text-taupe-800">
        Impressum
        </Typography>

        <div>
        <Typography variant="h5" className="font-inter text-therapeutic-700">
        Angaben gemäß § 5 TMG
        </Typography>
        <Typography className="my-5 font-normal text-taupe-700 font-inter">
          <ul>
            <li>Stefanie Kaindl</li>
            <li>Name</li>
            <li>Adresse 1</li>
            <li>Adresse 2</li>
          </ul>
        </Typography>
        </div>

        <div>
        <Typography variant="h5" className="font-inter text-therapeutic-700">
        Kontakt
        </Typography>
        <Typography className="my-5 font-normal text-taupe-700 font-inter">
          <ul>
            <li>Telefon: 00000000</li>
            <li>E-Mail: email@email.com</li>
          </ul>
        </Typography>
        </div>

        <div>
        <Typography variant="h5" className="font-inter text-therapeutic-700">
        EU-Streitschlichtung
        </Typography>
        <Typography className="my-5 font-normal text-taupe-700 font-inter">
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
        https://ec.europa.eu/consumers/odr/.
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </Typography>
        </div>
       
       <div>
       <Typography variant="h5" className="font-inter text-therapeutic-700">
        Verbraucherstreitbeilegung/Universalschlichtungsstelle
        </Typography>
        <Typography className="my-5 font-normal text-taupe-700 font-inter">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
        </Typography>
       </div>


        <Typography className="my-10 font-normal text-xs text-taupe-600 font-inter">
        Quelle: https://www.e-recht24.de
        </Typography>

        
        </div>
    </section>
  )
}

export default Content;