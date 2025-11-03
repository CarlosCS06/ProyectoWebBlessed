"use client";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ResultadosLaLiga() {
  const resultados = [
    { local: "R. Sociedad", marcador: "2 - 1", visitante: "Sevilla" },
    { local: "Girona", marcador: "3 - 3", visitante: "Oviedo" },
    { local: "Espanyol", marcador: "1 - 0", visitante: "Elche" },
    { local: "Athletic", marcador: "0 - 1", visitante: "Getafe" },
    { local: "Valencia", marcador: "0 - 2", visitante: "Villarreal" },
    { local: "Mallorca", marcador: "1 - 1", visitante: "Levante" },
    { local: "Real Madrid", marcador: "2 - 1", visitante: "Barcelona" },
    { local: "Osasuna", marcador: "2 - 3", visitante: "Celta" },
    { local: "Rayo", marcador: "1 - 0", visitante: "Alavés" },
    { local: "Betis", marcador: "0 - 2", visitante: "Atlético" },
  ];

  return (
    <main className="bg-base-200 min-h-screen p-8">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary flex justify-center items-center gap-2 mb-3">
          <FaFutbol /> Resultados recientes - Jornada 10
        </h1>
        <p className="text-gray-600">
          Consulta los últimos marcadores de LaLiga EA Sports.
        </p>
      </section>

      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-lg p-6">
        <table className="table w-full text-center">
          <thead>
            <tr className="text-primary text-lg border-b">
              <th className="text-left px-4 py-2">Local</th>
              <th className="px-4 py-2">Marcador</th>
              <th className="text-right px-4 py-2">Visitante</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((r, i) => (
              <tr key={i} className="hover:bg-base-300 transition-colors">
                <td className="text-left px-4 py-2 font-semibold">{r.local}</td>
                <td className="px-4 py-2 text-lg font-bold">{r.marcador}</td>
                <td className="text-right px-4 py-2 font-semibold">{r.visitante}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/ligas/laliga" className="btn btn-outline btn-primary flex items-center gap-2">
          <FaArrowLeft /> Volver a LaLiga
        </Link>
      </div>
    </main>
  );
}
