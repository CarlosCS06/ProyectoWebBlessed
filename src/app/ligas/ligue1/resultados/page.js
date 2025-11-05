"use client";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ResultadosLigue1() {
  const resultados = [
    { local: "PSG", marcador: "1 - 0", visitante: "Niza" },
    { local: "Monaco", marcador: "0 - 1", visitante: "Paris FC" },
    { local: "Auxerre", marcador: "0 - 1", visitante: "Marsella" },
    { local: "Rennes", marcador: "4 - 1", visitante: "Strasbourg" },
    { local: "Lens", marcador: "3 - 0", visitante: "Lorient" },
    { local: "Lille", marcador: "1 - 0", visitante: "Angers" },
    { local: "Nantes", marcador: "0 - 2", visitante: "Metz" },
    { local: "Toulouse", marcador: "0 - 0", visitante: "Le Havre" },
    { local: "Brest", marcador: "0 - 0", visitante: "O. Lyon" },
  ];

  return (
    <main className="bg-base-200 min-h-screen p-8">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 flex justify-center items-center gap-2 mb-3">
          <FaFutbol /> Resultados recientes - Jornada 11
        </h1>
        <p className="text-gray-600">
          Consulta los últimos marcadores de la Ligue 1 Uber Eats.
        </p>
      </section>

      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-lg p-6">
        <table className="table w-full text-center">
          <thead>
            <tr className="text-blue-600 text-lg border-b">
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
        <Link href="/ligas/ligue1" className="btn btn-outline text-blue-600 border-blue-600 flex items-center gap-2">
          <FaArrowLeft /> Volver a la Ligue 1
        </Link>
      </div>
    </main>
  );
}
