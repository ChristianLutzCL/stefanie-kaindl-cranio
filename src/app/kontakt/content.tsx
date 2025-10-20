'use client';

import { Typography } from "@material-tailwind/react";


function Content() {
  return (
    <section className="pt-40 pb-12 px-12 h-screen therapeutic-gradient">
      <div className="flex flex-col mx-auto max-w-screen-2xl gap-y-12">
        <Typography variant="h2" className="mt-8 mb-6 font-inter text-taupe-800">
        Kontakt
        </Typography>

        <div>
          <Typography variant="h5" className="font-inter text-therapeutic-700">
          Craniosacrale Körperarbeit
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter">
            <ul>
              <li>Stefanie Kaindl</li>
              <li>Name</li>
              <li>Adresse 1</li>
            </ul>
          </Typography>

          <Typography className="my-5 font-normal text-taupe-700 font-inter">
            <ul>
              <li>Telefon: 00000000</li>
              <li>E-Mail: mail@mail.de</li>
            </ul>
          </Typography>
        </div>

        <Typography variant="h5" className="font-inter text-therapeutic-700">
          Termine nach vereinbarung
          </Typography>
      </div>
    </section>
  )
}

export default Content;