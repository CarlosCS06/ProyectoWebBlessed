"use client";
import Image from "next/image";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function EquiposLigue1() {
  const equipos = [
    { nombre: "Angers", escudo: "/images/equiposfutbol/ligue1/angers.png" },
    { nombre: "Auxerre", escudo: "/images/equiposfutbol/ligue1/auxerre.png" },
    { nombre: "Brest", escudo: "/images/equiposfutbol/ligue1/brest.png" },
    { nombre: "Lens", escudo: "/images/equiposfutbol/ligue1/lens.png" },
    { nombre: "Le Havre", escudo: "/images/equiposfutbol/ligue1/lehavre.png" },
    { nombre: "Lille", escudo: "/images/equiposfutbol/ligue1/lille.png" },
    { nombre: "Lorient", escudo: "/images/equiposfutbol/ligue1/lorient.png" },
    { nombre: "Metz", escudo: "/images/equiposfutbol/ligue1/metz.png" },
    { nombre: "Monaco", escudo: "/images/equiposfutbol/ligue1/monaco.png" },
    { nombre: "Nantes", escudo: "/images/equiposfutbol/ligue1/nantes.png" },
    { nombre: "Niza", escudo: "/images/equiposfutbol/ligue1/niza.png" },
    { nombre: "O. Lyon", escudo: "/images/equiposfutbol/ligue1/lyon.png" },
    { nombre: "O. Marseille", escudo: "/images/equiposfutbol/ligue1/marseille.png" },
    { nombre: "Paris FC", escudo: "/images/equiposfutbol/ligue1/parisfc.png" },
    { nombre: "Paris Saint-Germain", escudo: "/images/equiposfutbol/ligue1/psg.png" },
    { nombre: "Rennes", escudo: "/images/equiposfutbol/ligue1/rennes.png" },
    { nombre: "Strasbourg", escudo: "/images/equiposfutbol/ligue1/strasbourg.png" },
    { nombre: "Toulouse", escudo: "/images/equiposfutbol/ligue1/toulouse.png" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-[#1e3a8a] text-center mb-10">
        Equipos de la Ligue 1
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
            <div className="flex justify-center mt-10">
        <Link href="/ligas/ligue1" className="btn btn-outline text-blue-600 border-blue-600 flex items-center gap-2">
          <FaArrowLeft /> Volver a la Ligue 1
        </Link>
      </div>
    </main>
  );
}
