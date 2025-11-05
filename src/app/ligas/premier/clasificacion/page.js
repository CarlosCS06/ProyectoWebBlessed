"use client";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const clasificacion = [
  { pos: 1, equipo: "Arsenal", pts: 25, pj: 10, pg: 8, pe: 1, pp: 1, gf: 18, gc: 3 },
  { pos: 2, equipo: "Manchester City", pts: 19, pj: 10, pg: 6, pe: 1, pp: 3, gf: 20, gc: 8 },
  { pos: 3, equipo: "Liverpool", pts: 18, pj: 10, pg: 6, pe: 0, pp: 4, gf: 18, gc: 14 },
  { pos: 4, equipo: "Bournemouth", pts: 18, pj: 10, pg: 5, pe: 3, pp: 2, gf: 17, gc: 14 },
  { pos: 5, equipo: "Tottenham", pts: 17, pj: 10, pg: 5, pe: 2, pp: 3, gf: 17, gc: 8 },
  { pos: 6, equipo: "Chelsea", pts: 17, pj: 10, pg: 5, pe: 2, pp: 3, gf: 18, gc: 11 },
  { pos: 7, equipo: "Sunderland", pts: 17, pj: 9, pg: 5, pe: 2, pp: 2, gf: 11, gc: 7 },
  { pos: 8, equipo: "Manchester United", pts: 17, pj: 10, pg: 5, pe: 2, pp: 3, gf: 17, gc: 16 },
  { pos: 9, equipo: "Crystal Palace", pts: 16, pj: 10, pg: 4, pe: 4, pp: 2, gf: 12, gc: 8 },
  { pos: 10, equipo: "Brighton", pts: 15, pj: 10, pg: 4, pe: 3, pp: 3, gf: 17, gc: 15 },
  { pos: 11, equipo: "Aston Villa", pts: 15, pj: 10, pg: 4, pe: 3, pp: 3, gf: 9, gc: 10 },
  { pos: 12, equipo: "Brentford", pts: 13, pj: 10, pg: 3, pe: 4, pp: 3, gf: 14, gc: 16 },
  { pos: 13, equipo: "Newcastle", pts: 12, pj: 10, pg: 3, pe: 3, pp: 4, gf: 10, gc: 11 },
  { pos: 14, equipo: "Fulham", pts: 11, pj: 9, pg: 3, pe: 2, pp: 4, gf: 12, gc: 14 },
  { pos: 15, equipo: "Everton", pts: 11, pj: 9, pg: 3, pe: 2, pp: 4, gf: 9, gc: 12 },
  { pos: 16, equipo: "Leeds United", pts: 11, pj: 10, pg: 3, pe: 2, pp: 5, gf: 9, gc: 17 },
  { pos: 17, equipo: "Burnley", pts: 10, pj: 10, pg: 3, pe: 1, pp: 6, gf: 12, gc: 18 },
  { pos: 18, equipo: "West Ham", pts: 8, pj: 10, pg: 2, pe: 2, pp: 6, gf: 10, gc: 21 },
  { pos: 19, equipo: "Nottingham Forest", pts: 7, pj: 10, pg: 1, pe: 4, pp: 5, gf: 7, gc: 19 },
  { pos: 20, equipo: "Wolves", pts: 2, pj: 10, pg: 0, pe: 2, pp: 8, gf: 7, gc: 22 },
];

export default function ClasificacionPremier() {
  const getRowColor = (pos) => {
    if (pos <= 5) return "bg-purple-300"; // Champions League
    if (pos <= 7) return "bg-orange-300"; // Europa League
    if (pos === 8) return "bg-green-300"; // Conference
    if (pos >= 18) return "bg-red-400 text-white"; // Descenso
    return "";
  };

  return (
    <main className="bg-base-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-[#6A0DAD] text-center mb-10">
        🏆 Clasificación - Premier League
      </h1>

      <div className="overflow-x-auto max-w-5xl mx-auto">
        <table className="table w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#6A0DAD] text-white text-center">
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
                <td>{e.equipo}</td>
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
        <p>🟣 Champions League</p>
        <p>🟧 Europa League</p>
        <p>🟩 Conference League</p>
        <p>🟥 Descenso</p>
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/ligas/premier" className="btn btn-outline text-purple-600 border-purple-600 flex items-center gap-2">
          <FaArrowLeft /> Volver a la Premier League
        </Link>
      </div>
    </main>
  );
}
