"use client";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ResultadosSerieA() {
  const resultados = [
    { local: "Udinese", marcador: "1 - 0", visitante: "Atalanta" },
    { local: "Nápoles", marcador: "0 - 0", visitante: "Como" },
    { local: "Cremonese", marcador: "1 - 2", visitante: "Juventus" },
    { local: "Hellas Verona", marcador: "1 - 2", visitante: "Inter Milán" },
    { local: "Fiorentina", marcador: "0 - 1", visitante: "Lecce" },
    { local: "Torino", marcador: "2 - 2", visitante: "Pisa" },
    { local: "Parma", marcador: "1 - 3", visitante: "Bolonia" },
    { local: "Milan", marcador: "1 - 0", visitante: "Roma" },
    { local: "Sassuolo", marcador: "–", visitante: "Genoa" },
    { local: "Lazio", marcador: "–", visitante: "Cagliari" },
  ];

  return (
    <main className="bg-base-200 min-h-screen p-8">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-600 flex justify-center items-center gap-2 mb-3">
          <FaFutbol /> Resultados recientes - Jornada 10
        </h1>
        <p className="text-gray-600">
          Consulta los últimos marcadores de la Serie A TIM.
        </p>
      </section>

      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-lg p-6">
        <table className="table w-full text-center">
          <thead>
            <tr className="text-green-600 text-lg border-b">
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
        <Link href="/ligas/seriea" className="btn btn-outline text-green-600 border-green-600 flex items-center gap-2">
          <FaArrowLeft /> Volver a la Serie A
        </Link>
      </div>
    </main>
  );
}
