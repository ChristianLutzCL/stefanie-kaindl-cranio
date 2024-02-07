'use client';

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import logo from "../../../public/image/3.jpg";


function Content() {
  return (
    <section className="flex h-screen">
        <div className="flex flex-col justify-center items-center w-full">
        <Typography variant="h2" className="mt-8 mb-6 font-inter text-white">
        Angebote & Preise
        </Typography>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white h-64 w-64 rounded-md shadow-md"></div>
          <div className="bg-white h-64 w-64 rounded-md shadow-md"></div>
          <div className="bg-white h-64 w-64 rounded-md shadow-md"></div>
        </div>
      </div>
    </section>
  )
}

export default Content;