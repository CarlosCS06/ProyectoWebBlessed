"use client";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ResultadosBundesliga() {
  const resultados = [
    { local: "Augsburgo", marcador: "0 - 1", visitante: "Borussia Dortmund" },
    { local: "Heidenheim", marcador: "1 - 1", visitante: "Eintracht Frankfurt" },
    { local: "Union Berlin", marcador: "0 - 0", visitante: "Friburgo" },
    { local: "Mainz", marcador: "1 - 1", visitante: "Werder Bremen" },
    { local: "St. Pauli", marcador: "0 - 4", visitante: "Borussia M’gladbach" },
    { local: "Leipzig", marcador: "3 - 1", visitante: "Stuttgart" },
    { local: "Bayern Munich", marcador: "3 - 0", visitante: "Bayer Leverkusen" },
    { local: "Colonia", marcador: "4 - 1", visitante: "Hamburgo" },
    { local: "Wolfsburgo", marcador: "2 - 3", visitante: "TSG Hoffenheim" },
  ];

  return (
    <main className="bg-base-200 min-h-screen p-8">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-red-600 flex justify-center items-center gap-2 mb-3">
          <FaFutbol /> Resultados recientes - Jornada 9
        </h1>
        <p className="text-gray-600">
          Consulta los últimos marcadores de la Bundesliga.
        </p>
      </section>

      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-lg p-6">
        <table className="table w-full text-center">
          <thead>
            <tr className="text-red-600 text-lg border-b">
              <th className="text-left px-4 py-2">Local</th>
              <th className="px-4 py-2">Marcador</th>
              <th className="text-right px-4 py-2">Visitante</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((r, i) => (
              <tr key={i} className="hover:bg-base-300 transition-colors">
                <td className="text-left px-4 py-2 font-semibold flex items-center gap-2">
                  <img src={`/escudos/${r.local}.png`} alt={r.local} className="w-6 h-6" />
                  {r.local}
                </td>
                <td className="px-4 py-2 text-lg font-bold">{r.marcador}</td>
                <td className="text-right px-4 py-2 font-semibold flex items-center justify-end gap-2">
                  {r.visitante}
                  <img src={`/escudos/${r.visitante}.png`} alt={r.visitante} className="w-6 h-6" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/ligas/bundesliga" className="btn btn-outline text-red-600 border-red-600 flex items-center gap-2">
          <FaArrowLeft /> Volver a la Bundesliga
        </Link>
      </div>
    </main>
  );
}
