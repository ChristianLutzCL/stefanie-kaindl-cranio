'use client';

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../public/logos/sk_logo_6.png";
import Link from "next/link";


const NAV_MENU = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Über Mich',
    href: '/ueber-mich'
  },
  {
    title: 'Angebote & Preise',
    href: '/angebote-preise'
  },
  {
    title: 'Kontakt',
    href: '/kontakt'
  }
]

function NavItem({ title, href }: { title: string, href: string }) {
  return (
    <li>
      <Typography
        as="a"
        href={href}
        variant="paragraph"
        className="flex items-center gap-2 font-light font-inter transition-all duration-100 underline-offset-1 decoration-transparent decoration-0 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-[#9dccccff] hover:text-[#9dccccff]"
      >
        {title}
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
      className={isScrolling ? "fixed top-0 z-50 border-0 bg-outer-space-800 transition-all duration-200" : "fixed top-0 z-50 border-0 bg-transparent transition-all duration-500"}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={'/'}>
            <Image src={logo} height="55" alt="logo" className="antialiased" />
          </Link>
        </div>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-white" : "text-white"
            }`}
        >
          {NAV_MENU.map((item) => (
            <NavItem key={item.title} href={item.href} title={item.title} />
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
        <div className="container bg-outer-space-800 mx-auto rounded-md py-4 px-6 mt-3 text-white">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((item) => (
              <NavItem key={item.title} href={item.href} title={item.title} />
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
