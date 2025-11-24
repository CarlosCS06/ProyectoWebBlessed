"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaFutbol, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openLigas, setOpenLigas] = useState(false);

  return (
    <nav className="bg-base-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <FaFutbol className="text-primary" />
          <span>FutbolTotal</span>
        </Link>

        {/* MENU EN ESCRITORIO */}
        <div className="hidden md:flex items-center gap-6 text-lg">

          <Link href="/" className="hover:text-primary transition">Inicio</Link>

          <Link href="/plantilla" className="hover:text-primary transition">
            Plantilla
          </Link>
          <Link href="/jugadores" className="hover:text-primary transition">
            Jugadores
          </Link>


          {/* LIGAS dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-primary transition">
              Ligas <FaChevronDown className="text-xs" />
            </button>

            <div className="absolute hidden group-hover:block bg-base-200 shadow-lg rounded-md mt-2 p-3 min-w-[160px]">
              <Link href="/ligas/acp" className="block hover:text-primary mb-2">
                ACP
              </Link>
              <Link href="/ligas/vpcl" className="block hover:text-primary">
                VPCL
              </Link>
            </div>
          </div>
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MENU EN MÓVIL */}
      {open && (
        <div className="md:hidden bg-base-100 shadow-md p-4 text-lg flex flex-col gap-4">

          <Link href="/" onClick={() => setOpen(false)}>
            Inicio
          </Link>

          <Link href="/plantilla" onClick={() => setOpen(false)}>
            Plantilla
          </Link>

          {/* Dropdown móvil */}
          <div>
            <button
              className="flex items-center gap-2"
              onClick={() => setOpenLigas(!openLigas)}
            >
              Ligas <FaChevronDown
                className={`text-xs transition ${openLigas && "rotate-180"}`}
              />
            </button>

            {openLigas && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <Link href="/ligas/acp" onClick={() => setOpen(false)}>ACP</Link>
                <Link href="/ligas/vpcl" onClick={() => setOpen(false)}>VPCL</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
