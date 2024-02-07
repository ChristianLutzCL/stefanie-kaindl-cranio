'use client';

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../public/logos/sk_logo_5.png";
import Link from "next/link";

const NAV_MENU = ["Home", "Über Mich", "Angebot & Preise", "Kontakt"];

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <Typography
        as="a"
        href=""
        variant="paragraph"
        className="flex items-center gap-2 font-light font-inter transition-all duration-100 underline-offset-1 decoration-transparent decoration-0 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-[#9dccccff] hover:text-[#9dccccff]"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      color="transparent"
      // blurred={true}
      // color={isScrolling ? "blue-gray" : "brown"}
      className={isScrolling ? "fixed top-0 z-50 border-0 bg-outer-space-900 transition-all duration-200" : "fixed top-0 z-50 border-0 bg-transparent transition-all duration-500"}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={'/'}>
            <Image src={logo} height="75" alt="logo" className="antialiased" />
          </Link>
        </div>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-white" : "text-white"
            }`}
        >
          {NAV_MENU.map((name) => (
            <NavItem key={name}>{name}</NavItem>
          ))}
        </ul>
        <IconButton
          variant="text"
          onClick={handleOpen}
          color={isScrolling ? "white" : "white"}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container bg-outer-space-900 mx-auto rounded-md py-4 px-6 mt-3 text-white">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((name) => (
              <NavItem key={name}>{name}</NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
