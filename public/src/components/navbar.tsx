import React, { useState, useEffect } from 'react';
import Image from "next/image";

import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  setOpen?: Function;
}
function NavItem({ children, href, setOpen }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={"_self"}
        variant="h5"
        className="font-medium "
        onClick={setOpen ? () => setOpen(false) : () => false}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMouseOverDelayed, setIsMouseOverDelayed] = useState(false);
  
  const [adminTitktok, setAdminTitktok] = useState("");
  const [adminFacebook, setAdminFacebook] = useState("");
  const [adminInstagram, setAdminInstagram] = useState("");

  let mouseLeaveTimeout: NodeJS.Timeout;

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tiktok = localStorage.getItem("set_tiktok");
      const facebook = localStorage.getItem("set_facebook");
      const instagram = localStorage.getItem("set_instagram");

      if (tiktok) setAdminTitktok(JSON.parse(tiktok));
      if (facebook) setAdminFacebook(JSON.parse(facebook));
      if (instagram) setAdminInstagram(JSON.parse(instagram));
    }
  }, []);

  useEffect(() => {
    if (isMouseOver) {
      clearTimeout(mouseLeaveTimeout);
      setIsMouseOverDelayed(true);
    } else {
      mouseLeaveTimeout = setTimeout(() => {
        setIsMouseOverDelayed(false);
      }, 3000);
    }

    return () => clearTimeout(mouseLeaveTimeout);
  }, [isMouseOver]);

  return (
    <div
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      className={`fixed top-0 z-50 w-full transition-all duration-1000 ${isMouseOverDelayed ? 'h-32' : 'opacity-0'} ${isScrolling ? "" : "!opacity-100"}`}
    >
      <MTNavbar
        fullWidth
        shadow={false}
        blurred={false}
        color={isScrolling ? "white" : "transparent"}
        className={`fixed top-0 z-50 border-0 transition-all duration-1000 ${isScrolling ? "shadow-2xl" : "shadow-none"}`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <Image
              width={182}
              height={82}
              src="/logos/logo_safir.webp"
              alt="$AFIR"
              className=""
            />
          </div>
          <ul
            className={`ml-10 hidden items-center gap-6 lg:flex ${
              isScrolling ? "text-gray-900" : "text-white"
            }`}
          >
            <NavItem href="/#">Inicio</NavItem>
            <NavItem href="/#servicios">Servicios</NavItem>
            <NavItem href="/#quienes-somos">¿Quiénes somos?</NavItem>
            <NavItem href="#fin">Contáctanos</NavItem>
          </ul>
          <div className="hidden gap-2 lg:flex lg:items-center">
            <IconButton variant="text" color={isScrolling ? "gray" : "white"} size="sm">
              <a href={`${adminTitktok}`} target="_blank"><i className="fa-brands fa-tiktok text-base" /></a>
            </IconButton>
            <IconButton variant="text" color={isScrolling ? "gray" : "white"} size="sm">
              <a href={`${adminFacebook}`} target="_blank"><i className="fa-brands fa-facebook text-base" /></a>
            </IconButton>
            <IconButton variant="text" color={isScrolling ? "gray" : "white"} size="sm">
              <a href={`${adminInstagram}`} target="_blank">
                <i className="fa-brands fa-instagram text-base" /></a>
            </IconButton>
            { /*
            <a href="#" target="_blank">
              <Button color={isScrolling ? "gray" : "white"} size="sm">
                Iniciar Sesión
              </Button>
            </a>
          */ }
          </div>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            onClick={handleOpen}
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
          <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
            <ul className="flex flex-col gap-4 text-gray-900">
              <NavItem href="/#" setOpen={setOpen}>Inicio</NavItem>
              <NavItem href="/#servicios" setOpen={setOpen}>Servicios</NavItem>
              <NavItem href="/#quienes-somos" setOpen={setOpen}>¿Quiénes somos?</NavItem>
              <NavItem href="#fin" setOpen={setOpen}>Contáctanos</NavItem>
            </ul>
            <div className="mt-4 flex items-center gap-2">
              <a href={`${adminTitktok}`} target="_blank">
                <IconButton variant="text" color="gray" size="sm">
                  <i className="fa-brands fa-tiktok text-base" />
                </IconButton>
              </a>
              <a href={`${adminFacebook}`} target="_blank">
                <IconButton variant="text" color="gray" size="sm">
                  <i className="fa-brands fa-facebook text-base" />
                </IconButton>
              </a>
              <a href={`${adminInstagram}`} target="_blank">
                <IconButton variant="text" color="gray" size="sm">
                  <i className="fa-brands fa-instagram text-base" />
                </IconButton>
              </a>
              { /*
              <a href="https://www.material-tailwind.com/blocks" target="_blank">
                <Button color="gray" size="sm" className="ml-auto">
                  Iniciar Sesión
                </Button>
              </a>
              */ }
            </div>
          </div>
        </Collapse>
      </MTNavbar>
      </div>
  );
}

export default Navbar;
