"use client";
import Image from "next/image";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const equiposSegunda = [
  { nombre: "Albacete", escudo: "/images/equiposfutbol/segunda division/albacete.png" },
  { nombre: "Almería", escudo: "/images/equiposfutbol/segunda division/almeria.png" },
  { nombre: "Andorra", escudo: "/images/equiposfutbol/segunda division/andorra.png" },
  { nombre: "Burgos CF", escudo: "/images/equiposfutbol/segunda division/burgos.png" },
  { nombre: "Cádiz", escudo: "/images/equiposfutbol/segunda division/cadiz.png" },
  { nombre: "Castellón", escudo: "/images/equiposfutbol/segunda division/castellon.png" },
  { nombre: "Ceuta", escudo: "/images/equiposfutbol/segunda division/ceuta.png" },
  { nombre: "Córdoba CF", escudo: "/images/equiposfutbol/segunda division/cordoba.png" },
  { nombre: "Cultural Leonesa", escudo: "/images/equiposfutbol/segunda division/cultural leonesa.png" },
  { nombre: "Deportivo de la Coruña", escudo: "/images/equiposfutbol/segunda division/deportivo.png" },
  { nombre: "Eibar", escudo: "/images/equiposfutbol/segunda division/eibar.png" },
  { nombre: "Granada CF", escudo: "/images/equiposfutbol/segunda division/granada.png" },
  { nombre: "Huesca", escudo: "/images/equiposfutbol/segunda division/huesca.png" },
  { nombre: "Las Palmas", escudo: "/images/equiposfutbol/segunda division/las palmas.png" },
  { nombre: "Leganés", escudo: "/images/equiposfutbol/segunda division/leganes.png" },
  { nombre: "Málaga", escudo: "/images/equiposfutbol/segunda division/malaga.png" },
  { nombre: "Mirandés", escudo: "/images/equiposfutbol/segunda division/mirandes.png" },
  { nombre: "Racing de Santander", escudo: "/images/equiposfutbol/segunda division/racing de santander.png" },
  { nombre: "Real Sociedad B", escudo: "/images/equiposfutbol/segunda division/real sociedad b.png" },
  { nombre: "Real Valladolid", escudo: "/images/equiposfutbol/segunda division/valladolid.png" },
  { nombre: "Real Zaragoza", escudo: "/images/equiposfutbol/segunda division/real zaragoza.png" },
  { nombre: "Sporting de Gijón", escudo: "/images/equiposfutbol/segunda division/sporting de gijon.png" },
];

export default function EquiposSegunda() {
  return (
    <main className="bg-base-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-primary text-center mb-10">
        ⚽ Equipos de LaLiga Hypermotion
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {equiposSegunda.map((equipo) => (
          <div key={equipo.nombre} className="card bg-base-100 shadow-xl items-center text-center p-4 hover:scale-105 transition-transform">
            <Image
              src={equipo.escudo}
              alt={equipo.nombre}
              width={100}
              height={100}
              className="object-contain mb-2"
            />
            <h2 className="font-semibold">{equipo.nombre}</h2>
          </div>
        ))}
      </div>
      {/* Botón de volver */}
      <div className="flex justify-center mt-10">
        <Link
          href="/ligas/laliga"
          className="btn btn-outline text-sky-600 border-sky-600 flex items-center gap-2"
        >
          <FaArrowLeft /> Volver a LaLiga Hypermotion
        </Link>
      </div>
    </main>
  );
}
