"use client";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ResultadosSegunda() {
  const liga = "segunda";

  const resultados = [
    { local: "Espanyol", marcador: "1 - 1", visitante: "Racing Ferrol" },
    { local: "Eibar", marcador: "0 - 2", visitante: "Sporting" },
    { local: "Tenerife", marcador: "2 - 0", visitante: "Mirandés" },
    { local: "Levante", marcador: "3 - 2", visitante: "Cartagena" },
    { local: "Valladolid", marcador: "1 - 1", visitante: "Burgos" },
    { local: "Huesca", marcador: "0 - 0", visitante: "Zaragoza" },
    { local: "Racing", marcador: "2 - 1", visitante: "Elche" },
    { local: "Albacete", marcador: "1 - 2", visitante: "Amorebieta" },
    { local: "Leganés", marcador: "3 - 0", visitante: "Eldense" },
    { local: "Oviedo", marcador: "0 - 1", visitante: "Villarreal B" },
  ];

  return (
    <main className="bg-base-200 min-h-screen p-8">
      {/* Encabezado */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-sky-600 flex justify-center items-center gap-2 mb-3">
          <FaFutbol /> Resultados recientes - Jornada 10
        </h1>
        <p className="text-gray-600">
          Consulta los últimos marcadores de LaLiga Hypermotion.
        </p>
      </section>

      {/* Tabla de resultados */}
      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-lg p-6">
        <table className="table w-full text-center">
          <thead>
            <tr className="text-sky-600 text-lg border-b">
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
                    src={`/escudos/${liga}/${r.local}.png`}
                    alt={r.local}
                    className="w-6 h-6 object-contain"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </td>

                {/* Marcador */}
                <td className="px-4 py-2 text-lg font-bold">{r.marcador}</td>

                {/* Visitante */}
                <td className="text-right px-4 py-2 font-semibold flex items-center justify-end gap-2">
                  <img
                    src={`/escudos/${liga}/${r.visitante}.png`}
                    alt={r.visitante}
                    className="w-6 h-6 object-contain"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  <span>{r.visitante}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
