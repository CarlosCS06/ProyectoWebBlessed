"use client";
import Image from "next/image";

export default function EquiposBundesliga() {
  const equipos = [
    { nombre: "Augsburgo", escudo: "/images/equiposfutbol/bundesliga/augsburgo.png" },
    { nombre: "Bayer Leverkusen", escudo: "/images/equiposfutbol/bundesliga/leverkusen.png" },
    { nombre: "Bayern Munich", escudo: "/images/equiposfutbol/bundesliga/bayern.png" },
    { nombre: "Borussia Dortmund", escudo: "/images/equiposfutbol/bundesliga/dortmund.png" },
    { nombre: "Borussia M'gladbach", escudo: "/images/equiposfutbol/bundesliga/mgladbach.png" },
    { nombre: "Colonia", escudo: "/images/equiposfutbol/bundesliga/colonia.png" },
    { nombre: "Eintracht Frankfurt", escudo: "/images/equiposfutbol/bundesliga/eintracht.png" },
    { nombre: "FC St. Pauli", escudo: "/images/equiposfutbol/bundesliga/pauli.png" },
    { nombre: "Friburgo", escudo: "/images/equiposfutbol/bundesliga/friburgo.png" },
    { nombre: "Hamburgo", escudo: "/images/equiposfutbol/bundesliga/hamburgo.png" },
    { nombre: "1. FC Heidenheim 1846", escudo: "/images/equiposfutbol/bundesliga/heidenheim.png" },
    { nombre: "Leipzig", escudo: "/images/equiposfutbol/bundesliga/leipzig.png" },
    { nombre: "Mainz 05", escudo: "/images/equiposfutbol/bundesliga/mainz.png" },
    { nombre: "TSG Hoffenheim", escudo: "/images/equiposfutbol/bundesliga/hoffenheim.png" },
    { nombre: "Union Berlin", escudo: "/images/equiposfutbol/bundesliga/union.png" },
    { nombre: "VfB Stuttgart", escudo: "/images/equiposfutbol/bundesliga/stuttgart.png" },
    { nombre: "Werder Bremen", escudo: "/images/equiposfutbol/bundesliga/bremen.png" },
    { nombre: "Wolfsburgo", escudo: "/images/equiposfutbol/bundesliga/wolfsburgo.png" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-[#dc2626] text-center mb-10">
        Equipos de la Bundesliga
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {equipos.map((e, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white rounded-2xl shadow-md p-4 hover:shadow-xl hover:scale-105 transition-transform w-32"
          >
            <Image
              src={e.escudo}
              alt={e.nombre}
              width={70}
              height={70}
              className="mb-2"
            />
            <p className="text-sm font-semibold text-gray-800 text-center">
              {e.nombre}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
