"use client";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ResultadosPremier() {
  const resultados = [
    { local: "Brighton", marcador: "3 - 0", visitante: "Leeds" },
    { local: "Burnley", marcador: "0 - 2", visitante: "Arsenal" },
    { local: "Crystal Palace", marcador: "2 - 0", visitante: "Brentford" },
    { local: "Fulham", marcador: "3 - 0", visitante: "Wolves" },
    { local: "Nottingham Forest", marcador: "2 - 2", visitante: "Man United" },
    { local: "Tottenham", marcador: "0 - 1", visitante: "Chelsea" },
    { local: "Liverpool", marcador: "2 - 0", visitante: "Aston Villa" },
    { local: "West Ham", marcador: "3 - 1", visitante: "Newcastle" },
    { local: "Man City", marcador: "3 - 1", visitante: "Bournemouth" },
    { local: "Sunderland", marcador: "1 – 1", visitante: "Everton" },
  ];

  return (
    <main className="bg-base-200 min-h-screen p-8">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-purple-600 flex justify-center items-center gap-2 mb-3">
          <FaFutbol /> Resultados recientes - Jornada 10
        </h1>
        <p className="text-gray-600">
          Consulta los últimos marcadores de la Premier League.
        </p>
      </section>

      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-lg p-6">
        <table className="table w-full text-center">
          <thead>
            <tr className="text-purple-600 text-lg border-b">
              <th className="text-left px-4 py-2">Local</th>
              <th className="px-4 py-2">Marcador</th>
              <th className="text-right px-4 py-2">Visitante</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((r, i) => (
              <tr key={i} className="hover:bg-base-300 transition-colors">
                {/* Local */}
                <td className="text-left px-4 py-2 font-semibold flex items-center gap-2">
                  <span>{r.local}</span>
                  <img
                    src={`/escudos/${r.local}.png`}
                    alt={r.local}
                    className="w-6 h-6"
                  />
                </td>

                {/* Marcador */}
                <td className="px-4 py-2 text-lg font-bold">{r.marcador}</td>

                {/* Visitante */}
                <td className="text-right px-4 py-2 font-semibold flex items-center justify-end gap-2">
                  <img
                    src={`/escudos/${r.visitante}.png`}
                    alt={r.visitante}
                    className="w-6 h-6"
                  />
                  <span>{r.visitante}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/ligas/premier" className="btn btn-outline text-purple-600 border-purple-600 flex items-center gap-2">
          <FaArrowLeft /> Volver a la Premier League
        </Link>
      </div>
    </main>
  );
}
