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
import logo from "../../public/image/sk_logo.png";

const NAV_MENU = ["Home", "Über Mich", "Angebot/Preise", "Kontakt"];

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        className="flex items-center gap-2 font-medium uppercase"
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
      blurred={true}
      color={isScrolling ? "blue-gray" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={logo} height="85" alt="logo" />
          {/* <Typography
            as="a"
            href="https://www.material-tailwind.com"
            target="_blank"
            className="text-lg font-serif font-normal"
            color={isScrolling ? "blue-gray" : "white"}
          >
            Stefanie Kaindl
          </Typography> */}
        </div>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-gray-900" : "text-white"
            }`}
        >
          {NAV_MENU.map((name) => (
            <NavItem key={name}>{name}</NavItem>
          ))}
        </ul>
        <IconButton
          variant="text"
          onClick={handleOpen}
          color={isScrolling ? "gray" : "white"}
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
        <div className="container mx-auto bg-white rounded-lg py-4 px-6 mt-3 border-t border-gray-200 text-black">
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
