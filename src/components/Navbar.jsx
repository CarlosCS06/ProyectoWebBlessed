"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaFutbol, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [openLigas, setOpenLigas] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const menuRef = useRef(null);

  // 🔒 Cierra los menús si haces clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenLigas(false);
        setOpenSub(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ⚽ Ligas principales
  const leagues = [
    { id: "laliga", name: "LaLiga EA Sports" },
    { id: "premier", name: "Premier League" },
    { id: "seriea", name: "Serie A" },
    { id: "bundesliga", name: "Bundesliga" },
    { id: "ligue1", name: "Ligue 1" },
  ];

  // 📊 Subopciones
  const subOptions = [
    { id: "clasificacion", name: "Clasificación" },
    { id: "resultados", name: "Resultados" },
    { id: "equipos", name: "Equipos" },
  ];

  return (
    <nav className="navbar bg-base-100 shadow-md px-6 sticky top-0 z-50" ref={menuRef}>
      {/* Logo */}
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          <FaFutbol /> Fútbol Europeo
        </Link>
      </div>

      {/* Menú principal */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-md font-semibold">
          <li>
            <Link href="/">Inicio</Link>
          </li>

          <li>
            <Link href="/noticias">Noticias</Link>
          </li>

          {/* === LIGAS === */}
          <li className="relative">
            <button
              onClick={() => {
                setOpenLigas(!openLigas);
                setOpenSub(null);
              }}
              className="flex items-center gap-1 hover:text-primary transition"
            >
              Ligas <FaChevronDown className="text-xs" />
            </button>

            {openLigas && (
              <ul className="absolute top-full left-0 bg-base-100 shadow-lg rounded-box w-64 mt-2 border border-base-300 z-40">
                {leagues.map((liga) => (
                  <li key={liga.id} className="relative group">
                    <div className="flex justify-between items-center">
                      {/* Enlace directo a la liga */}
                      <Link
                        href={`/ligas/${liga.id}`}
                        className="flex-1 px-4 py-2 hover:bg-base-200"
                        onClick={() => {
                          setOpenLigas(false);
                          setOpenSub(null);
                        }}
                      >
                        {liga.name}
                      </Link>

                      {/* Botón para abrir submenú */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenSub(openSub === liga.id ? null : liga.id);
                        }}
                        className="px-2 hover:text-primary"
                      >
                        <FaChevronDown className="text-xs" />
                      </button>
                    </div>

                    {/* Submenú */}
                    {openSub === liga.id && (
                      <ul className="absolute left-full top-0 bg-base-100 shadow-md rounded-box w-56 border border-base-300 z-50">
                        {subOptions.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              href={`/ligas/${liga.id}/${sub.id}`}
                              className="block px-4 py-2 hover:bg-base-200"
                              onClick={() => {
                                setOpenLigas(false);
                                setOpenSub(null);
                              }}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link href="/selecciones">Selecciones</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
