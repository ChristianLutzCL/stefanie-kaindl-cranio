'use client'

import { Typography } from "@material-tailwind/react";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20 bottom-0 w-full">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-end justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50/10 py-6 md:justify-between">
          <div className="text-center md:text-start">
            <Typography
              className="text-center font-sm text-sm font-inter text-gray-300"
            >
              &copy; {CURRENT_YEAR} · Stefanie Kaindl
            </Typography>
          </div>
          <div>
            <Link className="hover:underline font-inter font-sm text-sm text-gray-300" href={'/impressum'}>Impressum</Link>
          </div>
          <div className="text-center font-sm font-inter text-sm text-gray-300">
            Created by {" "}
            <Link className="hover:underline" href={'mailto:chris@inspiredprogrammer.com'}>Christian Lutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
