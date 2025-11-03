"use client";
import Link from "next/link";
import { FaTable, FaListOl, FaUsers } from "react-icons/fa";

export default function SerieAPage() {
  return (
    <main className="bg-base-200 min-h-screen p-8 space-y-20">
      {/* === SERIE A TIM === */}
      <section className="text-center">
        <h1 className="text-5xl font-bold text-[#117A65] text-center mb-10">
          ⚽Serie A TIM
        </h1>
        <p className="text-gray-600 text-lg mt-2">
          Resultados, clasificación y noticias del campeonato italiano de fútbol.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Link
          href="/ligas/seriea/resultados"
          className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center">
            <FaListOl className="text-5xl text-primary mb-3" />
            <h2 className="card-title">Resultados recientes</h2>
            <p>Consulta los resultados más recientes de la Serie A TIM.</p>
          </div>
        </Link>

        <Link
          href="/ligas/seriea/clasificacion"
          className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
        >
          <div className="card-body items-center text-center">
            <FaTable className="text-5xl text-secondary mb-3" />
            <h2 className="card-title">Clasificación actual</h2>
            <p>Descubre cómo va la tabla de posiciones en la Serie A TIM.</p>
          </div>
        </Link>

        <Link
          href="/ligas/seriea/equipos"
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
