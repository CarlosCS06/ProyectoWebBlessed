"use client";
import Image from "next/image";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const clasificacion = [
  { pos: 1, equipo: "Real Madrid", pts: 30, pj: 11, pg: 10, pe: 0, pp: 1, gf: 26, gc: 10, escudo: "/images/equiposfutbol/primera division/real de madrid.png" },
  { pos: 2, equipo: "Villarreal", pts: 23, pj: 11, pg: 7, pe: 2, pp: 2, gf: 22, gc: 10, escudo: "/images/equiposfutbol/primera division/villarreal.png" },
  { pos: 3, equipo: "Barcelona", pts: 22, pj: 10, pg: 7, pe: 1, pp: 2, gf: 25, gc: 12, escudo: "/images/equiposfutbol/primera division/barça.png" },
  { pos: 4, equipo: "Atlético de Madrid", pts: 22, pj: 11, pg: 6, pe: 4, pp: 1, gf: 21, gc: 10, escudo: "/images/equiposfutbol/primera division/atleti.png" },
  { pos: 5, equipo: "Espanyol", pts: 18, pj: 10, pg: 5, pe: 3, pp: 2, gf: 14, gc: 11, escudo: "/images/equiposfutbol/primera division/espanyol.png" },
  { pos: 6, equipo: "Getafe", pts: 17, pj: 11, pg: 5, pe: 2, pp: 4, gf: 14, gc: 13, escudo: "/images/equiposfutbol/primera division/getafe.png" },
  { pos: 7, equipo: "Real Betis", pts: 16, pj: 10, pg: 4, pe: 4, pp: 2, gf: 12, gc: 12, escudo: "/images/equiposfutbol/primera division/real betis.png" },
  { pos: 8, equipo: "Elche CF", pts: 14, pj: 10, pg: 3, pe: 5, pp: 2, gf: 11, gc: 10, escudo: "/images/equiposfutbol/primera division/elche.png" },
  { pos: 9, equipo: "Rayo Vallecano", pts: 14, pj: 11, pg: 4, pe: 2, pp: 5, gf: 12, gc: 14, escudo: "/images/equiposfutbol/primera division/rayo vallecano.png" },
  { pos: 10, equipo: "Athletic Club", pts: 14, pj: 11, pg: 4, pe: 2, pp: 5, gf: 11, gc: 13, escudo: "/images/equiposfutbol/primera division/bilbao.png" },
  { pos: 11, equipo: "Sevilla", pts: 13, pj: 11, pg: 4, pe: 1, pp: 6, gf: 17, gc: 19, escudo: "/images/equiposfutbol/primera division/sevilla.png" },
  { pos: 12, equipo: "Alavés", pts: 12, pj: 10, pg: 3, pe: 3, pp: 4, gf: 9, gc: 9, escudo: "/images/equiposfutbol/primera division/alaves.png" },
  { pos: 13, equipo: "Real Sociedad", pts: 12, pj: 11, pg: 3, pe: 3, pp: 5, gf: 13, gc: 16, escudo: "/images/equiposfutbol/primera division/real sociedad.png" },
  { pos: 14, equipo: "Celta de Vigo", pts: 10, pj: 11, pg: 3, pe: 1, pp: 7, gf: 11, gc: 12, escudo: "/images/equiposfutbol/primera division/celta.png" },
  { pos: 15, equipo: "Osasuna", pts: 10, pj: 11, pg: 3, pe: 1, pp: 7, gf: 9, gc: 12, escudo: "/images/equiposfutbol/primera division/osasuna.png" },
  { pos: 16, equipo: "Levante", pts: 9, pj: 10, pg: 2, pe: 3, pp: 5, gf: 14, gc: 18, escudo: "/images/equiposfutbol/primera division/levante.png" },
  { pos: 17, equipo: "Mallorca", pts: 9, pj: 11, pg: 2, pe: 3, pp: 6, gf: 15, gc: 15, escudo: "/images/equiposfutbol/primera division/mallorca.png" },
  { pos: 18, equipo: "Valencia", pts: 9, pj: 11, pg: 2, pe: 3, pp: 6, gf: 9, gc: 20, escudo: "/images/equiposfutbol/primera division/valencia.png" },
  { pos: 19, equipo: "Real Oviedo", pts: 7, pj: 11, pg: 2, pe: 1, pp: 8, gf: 7, gc: 19, escudo: "/images/equiposfutbol/primera division/oviedo.png" },
  { pos: 20, equipo: "Girona", pts: 7, pj: 11, pg: 1, pe: 4, pp: 6, gf: 10, gc: 24, escudo: "/images/equiposfutbol/primera division/girona.png" },
];

export default function ClasificacionPrimera() {
  const getRowColor = (pos) => {
    if (pos <= 5) return "bg-blue-300"; // Champions
    if (pos === 6 || pos === 7) return "bg-orange-300"; // Europa League
    if (pos === 8) return "bg-green-300"; // Conference League
    if (pos >= 18) return "bg-red-400 text-white"; // Descenso
    return "";
  };

  return (
    <main className="bg-base-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-primary text-center mb-10">
        🏆 Clasificación - LaLiga EA Sports
      </h1>

      <div className="overflow-x-auto max-w-5xl mx-auto">
        <table className="table w-full shadow-md bg-white rounded-lg overflow-hidden">
          <thead className="bg-primary text-white text-center">
            <tr>
              <th>Pos</th>
              <th>Equipo</th>
              <th>PT</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PE</th>
              <th>PP</th>
              <th>GF</th>
              <th>GC</th>
            </tr>
          </thead>
          <tbody>
            {clasificacion.map((e) => (
              <tr key={e.pos} className={`${getRowColor(e.pos)} text-center`}>
                <td className="font-bold">{e.pos}</td>
                <td className="flex items-center gap-2 justify-start">
                  <Image src={e.escudo} alt={e.equipo} width={24} height={24} />
                  {e.equipo}
                </td>
                <td>{e.pts}</td>
                <td>{e.pj}</td>
                <td>{e.pg}</td>
                <td>{e.pe}</td>
                <td>{e.pp}</td>
                <td>{e.gf}</td>
                <td>{e.gc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="max-w-5xl mx-auto mt-6 text-sm text-gray-700">
        <p>🟦 Champions League</p>
        <p>🟧 Europa League</p>
        <p>🟩 Conference League</p>
        <p>🟥 Descenso</p>
      </div>
      {/* Botón de volver */}
      <div className="flex justify-center mt-10">
        <Link
          href="/ligas/laliga"
          className="btn btn-outline btn-primary flex items-center gap-2"
        >
          <FaArrowLeft /> Volver a LaLiga
        </Link>
      </div>
    </main>
  );
}
