'use client';

import { Typography } from "@material-tailwind/react";


function Content() {
  return (
    <section className="pt-40 pb-12 px-12">
      <div className="flex flex-col mx-auto max-w-screen-md gap-y-12">
        <Typography variant="h2" color="blue-gray" className="mt-8 mb-6 font-inter">
        Impressum
        </Typography>

        <div>
        <Typography variant="h5" color="blue-gray" className="font-inter">
        Angaben gemäß § 5 TMG
        </Typography>
        <Typography className="my-5 font-normal !text-gray-500 font-inter">
          <ul>
            <li>Stefanie Kaindl</li>
            <li>Name</li>
            <li>Adresse 1</li>
            <li>Adresse 2</li>
          </ul>
        </Typography>
        </div>

        <div>
        <Typography variant="h5" color="blue-gray" className="font-inter">
        Kontakt
        </Typography>
        <Typography className="my-5 font-normal !text-gray-500 font-inter">
          <ul>
            <li>Telefon: 00000000</li>
            <li>E-Mail: email@email.com</li>
          </ul>
        </Typography>
        </div>

        <div>
        <Typography variant="h5" color="blue-gray" className="font-inter">
        EU-Streitschlichtung
        </Typography>
        <Typography className="my-5 font-normal !text-gray-500 font-inter">
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
        https://ec.europa.eu/consumers/odr/.
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </Typography>
        </div>
       
       <div>
       <Typography variant="h5" color="blue-gray" className="font-inter">
        Verbraucherstreitbeilegung/Universalschlichtungsstelle
        </Typography>
        <Typography className="my-5 font-normal !text-gray-500 font-inter">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
        </Typography>
       </div>


        <Typography className="my-10 font-normal !text-gray-500 font-inter">
        Quelle: https://www.e-recht24.de
        </Typography>

        
        </div>
    </section>
  )
}

export default Content;