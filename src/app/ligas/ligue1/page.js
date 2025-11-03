"use client";
import Link from "next/link";
import { FaTable, FaListOl, FaUsers } from "react-icons/fa";

export default function Ligue1Page() {
  return (
    <main className="bg-base-200 min-h-screen p-8 space-y-20">
      {/* === LIGUE 1 UBER EATS === */}
      <section className="text-center">
        <h1 className="text-5xl font-bold text-[#1E3A8A] text-center mb-10">
          ⚽Ligue 1 Uber Eats
        </h1>
        <p className="text-gray-600 text-lg mt-2">
          Resultados, clasificación y noticias del campeonato francés de fútbol.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Link
          href="/ligas/ligue1/resultados"
          className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center">
            <FaListOl className="text-5xl text-primary mb-3" />
            <h2 className="card-title">Resultados recientes</h2>
            <p>Consulta los resultados más recientes de la Ligue 1 Uber Eats.</p>
          </div>
        </Link>

        <Link
          href="/ligas/ligue1/clasificacion"
          className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center">
            <FaTable className="text-5xl text-secondary mb-3" />
            <h2 className="card-title">Clasificación actual</h2>
            <p>Descubre cómo va la tabla de posiciones en la Ligue 1 Uber Eats.</p>
          </div>
        </Link>

        <Link
          href="/ligas/ligue1/equipos"
          className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center">
            <FaUsers className="text-5xl text-accent mb-3" />
            <h2 className="card-title">Equipos</h2>
            <p>Conoce todos los clubes que forman parte de esta temporada.</p>
          </div>
        </Link>
      </section>
    </main>
  );
}
