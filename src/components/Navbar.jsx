"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [openLigas, setOpenLigas] = useState(false);

  return (
    <nav className="w-[95%] mx-auto mt-4 px-6 py-4 bg-[#1c542d] border-2 border-[#0f4d1a] rounded-2xl shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/blessed_logo.jpeg"
            alt="Blessed FC"
            className="h-12 w-auto drop-shadow-lg"
          />
          <span className="text-white text-2xl font-bold tracking-wide">
            Blessed Club
          </span>
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-8 text-white font-semibold">

          <a
            href="/"
            className="hover:text-[#15ff7f] transition duration-200"
          >
            Sobre nosotros
          </a>

          <a
            href="/contacto"
            className="hover:text-[#15ff7f] transition duration-200"
          >
            Contacto
          </a>

          <Link
            href="/jugadores"
            className="hover:text-[#15ff7f] transition duration-200"
          >
            Jugadores
          </Link>

          {/* MENÚ LIGAS */}
          <div className="relative">
            <button
              className="flex items-center gap-2 hover:text-[#15ff7f] transition"
              onClick={() => setOpenLigas(!openLigas)}
            >
              Ligas
              <FaChevronDown
                className={`text-xs transition-transform duration-200 ${openLigas ? "rotate-180" : ""
                  }`}
              />
            </button>

            {openLigas && (
              <div className="absolute right-0 mt-2 bg-[#111] text-white shadow-lg rounded-xl p-3 flex flex-col gap-2 border border-[#0f4d1a]">
                <Link
                  href="/ligas/acp"
                  onClick={() => setOpenLigas(false)}
                  className="hover:text-[#15ff7f]"
                >
                  ACP
                </Link>

                <Link
                  href="/ligas/vpcl"
                  onClick={() => setOpenLigas(false)}
                  className="hover:text-[#15ff7f]"
                >
                  VPCL
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
