"use client";
import Image from "next/image";

const equiposPrimera = [
  { nombre: "Deportivo Alavés", escudo: "/images/equiposfutbol/primera division/alaves.png" },
  { nombre: "Athletic Club", escudo: "/images/equiposfutbol/primera division/bilbao.png" },
  { nombre: "Atlético de Madrid", escudo: "/images/equiposfutbol/primera division/atleti.png" },
  { nombre: "FC Barcelona", escudo: "/images/equiposfutbol/primera division/barça.png" },
  { nombre: "Real Betis", escudo: "/images/equiposfutbol/primera division/real betis.png" },
  { nombre: "RC Celta", escudo: "/images/equiposfutbol/primera division/celta.png" },
  { nombre: "Elche CF", escudo: "/images/equiposfutbol/primera division/elche.png" },
  { nombre: "RCD Espanyol", escudo: "/images/equiposfutbol/primera division/espanyol.png" },
  { nombre: "Getafe CF", escudo: "/images/equiposfutbol/primera division/getafe.png" },
  { nombre: "Girona FC", escudo: "/images/equiposfutbol/primera division/girona.png" },
  { nombre: "Levante UD", escudo: "/images/equiposfutbol/primera division/levante.png" },
  { nombre: "RCD Mallorca", escudo: "/images/equiposfutbol/primera division/mallorca.png" },
  { nombre: "CA Osasuna", escudo: "/images/equiposfutbol/primera division/osasuna.png" },
  { nombre: "Rayo Vallecano", escudo: "/images/equiposfutbol/primera division/rayo vallecano.png" },
  { nombre: "Real Madrid", escudo: "/images/equiposfutbol/primera division/real de madrid.png" },
  { nombre: "Real Sociedad", escudo: "/images/equiposfutbol/primera division/real sociedad.png" },
  { nombre: "Sevilla FC", escudo: "/images/equiposfutbol/primera division/sevilla.png" },
  { nombre: "Valencia CF", escudo: "/images/equiposfutbol/primera division/valencia.png" },
  { nombre: "Villarreal CF", escudo: "/images/equiposfutbol/primera division/villarreal.png" },
  { nombre: "Real Oviedo", escudo: "/images/equiposfutbol/primera division/oviedo.png" },
];

export default function EquiposPrimera() {
  return (
    <main className="bg-base-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-primary text-center mb-10">
        ⚽ Equipos de LaLiga EA Sports
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {equiposPrimera.map((equipo) => (
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
    </main>
  );
}
