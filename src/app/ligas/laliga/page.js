"use client";
import Link from "next/link";
import { FaFutbol, FaTable, FaListOl, FaUsers } from "react-icons/fa";

export default function LaLigaPage() {
  return (
    <main className="bg-base-200 min-h-screen p-8 space-y-20">
      {/* === LALIGA EA SPORTS === */}
      <section className="text-center">
        <h1 className="text-5xl font-bold text-[#E94E1B] text-center mb-10">
          ⚽LaLiga EA Sports
        </h1>
        <p className="text-gray-600 text-lg mt-2">
          Resultados, clasificación y noticias de la liga más seguida del mundo.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Link
          href="/ligas/laliga/resultados"
          className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center">
            <FaListOl className="text-5xl text-primary mb-3" />
            <h2 className="card-title">Resultados recientes</h2>
            <p>Consulta los últimos resultados de la jornada en LaLiga EA Sports.</p>
          </div>
        </Link>

        <Link
          href="/ligas/laliga/clasificacion"
          className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center">
            <FaTable className="text-5xl text-secondary mb-3" />
            <h2 className="card-title">Clasificación actual</h2>
            <p>Descubre cómo va la tabla de posiciones en LaLiga EA Sports.</p>
          </div>
        </Link>

        <Link
          href="/ligas/laliga/equipos"
          className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center">
            <FaUsers className="text-5xl text-accent mb-3" />
            <h2 className="card-title">Equipos</h2>
            <p>Conoce todos los clubes que forman parte de esta temporada.</p>
          </div>
        </Link>
      </section>

      {/* === LALIGA HYPERMOTION === */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-primary flex justify-center items-center gap-2">
          <FaFutbol /> LaLiga Hypermotion
        </h2>
        <p className="text-gray-600 text-lg mt-2">
          La emoción de la Segunda División española: resultados, clasificación
          y equipos que luchan por el ascenso.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Link
          href="/ligas/laliga/hypermotion/resultados"
          className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center">
            <FaListOl className="text-5xl text-primary mb-3" />
            <h2 className="card-title">Resultados recientes</h2>
            <p>
              Revisa los resultados más recientes de la jornada en LaLiga
              Hypermotion.
            </p>
          </div>
        </Link>

        <Link
          href="/ligas/laliga/hypermotion/clasificacion"
          className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center">
            <FaTable className="text-5xl text-secondary mb-3" />
            <h2 className="card-title">Clasificación actual</h2>
            <p>
              Consulta cómo va la tabla de posiciones en LaLiga Hypermotion.
            </p>
          </div>
        </Link>

        <Link
          href="/ligas/laliga/hypermotion/equipos"
          className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center">
            <FaUsers className="text-5xl text-accent mb-3" />
            <h2 className="card-title">Equipos</h2>
            <p>
              Descubre todos los clubes que compiten en la Segunda División esta
              temporada.
            </p>
          </div>
        </Link>
      </section>
    </main>
  );
}
