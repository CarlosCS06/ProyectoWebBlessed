"use client";
import Image from "next/image";

export default function ClasificacionBundesliga() {
  const equipos = [
    { pos: 1, nombre: "Bayern Munich", pts: 27, pj: 9, pg: 9, pe: 0, pp: 0, gf: 33, gc: 4, escudo: "/images/equiposfutbol/bundesliga/bayern.png" },
    { pos: 2, nombre: "Leipzig", pts: 22, pj: 9, pg: 7, pe: 1, pp: 1, gf: 19, gc: 10, escudo: "/images/equiposfutbol/bundesliga/leipzig.png" },
    { pos: 3, nombre: "Borussia Dortmund", pts: 20, pj: 9, pg: 6, pe: 2, pp: 1, gf: 21, gc: 14, escudo: "/images/equiposfutbol/bundesliga/dortmund.png" },
    { pos: 4, nombre: "VfB Stuttgart", pts: 18, pj: 9, pg: 6, pe: 0, pp: 3, gf: 20, gc: 14, escudo: "/images/equiposfutbol/bundesliga/stuttgart.png" },
    { pos: 5, nombre: "Bayer Leverkusen", pts: 17, pj: 9, pg: 5, pe: 2, pp: 2, gf: 18, gc: 14, escudo: "/images/equiposfutbol/bundesliga/leverkusen.png" },
    { pos: 6, nombre: "TSG Hoffenheim", pts: 16, pj: 9, pg: 5, pe: 1, pp: 3, gf: 22, gc: 15, escudo: "/images/equiposfutbol/bundesliga/hoffenheim.png" },
    { pos: 7, nombre: "Colonia", pts: 14, pj: 9, pg: 4, pe: 2, pp: 3, gf: 16, gc: 12, escudo: "/images/equiposfutbol/bundesliga/colonia.png" },
    { pos: 8, nombre: "Eintracht Frankfurt", pts: 14, pj: 9, pg: 4, pe: 2, pp: 3, gf: 22, gc: 19, escudo: "/images/equiposfutbol/bundesliga/eintracht.png" },
    { pos: 9, nombre: "Werder Bremen", pts: 12, pj: 9, pg: 3, pe: 3, pp: 3, gf: 18, gc: 17, escudo: "/images/equiposfutbol/bundesliga/bremen.png" },
    { pos: 10, nombre: "Union Berlin", pts: 11, pj: 9, pg: 3, pe: 2, pp: 4, gf: 15, gc: 15, escudo: "/images/equiposfutbol/bundesliga/union.png" },
    { pos: 11, nombre: "Friburgo", pts: 10, pj: 9, pg: 3, pe: 1, pp: 5, gf: 11, gc: 13, escudo: "/images/equiposfutbol/bundesliga/friburgo.png" },
    { pos: 12, nombre: "Wolfsburgo", pts: 8, pj: 9, pg: 2, pe: 2, pp: 5, gf: 12, gc: 17, escudo: "/images/equiposfutbol/bundesliga/wolfsburgo.png" },
    { pos: 13, nombre: "Hamburgo", pts: 8, pj: 9, pg: 2, pe: 2, pp: 5, gf: 8, gc: 18, escudo: "/images/equiposfutbol/bundesliga/hamburgo.png" },
    { pos: 14, nombre: "Augsburgo", pts: 7, pj: 9, pg: 2, pe: 1, pp: 6, gf: 9, gc: 12, escudo: "/images/equiposfutbol/bundesliga/augsburgo.png" },
    { pos: 15, nombre: "St. Pauli", pts: 7, pj: 9, pg: 2, pe: 1, pp: 6, gf: 10, gc: 18, escudo: "/images/equiposfutbol/bundesliga/pauli.png" },
    { pos: 16, nombre: "Borussia M'gladbach", pts: 6, pj: 9, pg: 1, pe: 3, pp: 5, gf: 10, gc: 18, escudo: "/images/equiposfutbol/bundesliga/mgladbach.png" },
    { pos: 17, nombre: "Mainz 05", pts: 5, pj: 9, pg: 1, pe: 2, pp: 6, gf: 10, gc: 17, escudo: "/images/equiposfutbol/bundesliga/mainz.png" },
    { pos: 18, nombre: "1. FC Heidenheim 1846", pts: 5, pj: 9, pg: 1, pe: 2, pp: 6, gf: 8, gc: 17, escudo: "/images/equiposfutbol/bundesliga/heidenheim.png" },
  ];

  const colorFila = (pos) => {
    if (pos <= 4) return "bg-blue-100"; // Champions
    if (pos === 5) return "bg-orange-100"; // Europa League
    if (pos === 6) return "bg-green-100"; // Conference League
    if (pos === 16) return "bg-red-50"; // Promoción
    if (pos >= 17) return "bg-red-100"; // Descenso
    return "bg-white";
  };

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-[#dc2626] text-center mb-8">
        Clasificación Bundesliga
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <thead className="bg-[#dc2626] text-white">
            <tr>
              <th className="p-3 text-left">Pos</th>
              <th className="p-3 text-left">Equipo</th>
              <th className="p-3">PT</th>
              <th>PJ</th><th>PG</th><th>PE</th><th>PP</th><th>GF</th><th>GC</th>
            </tr>
          </thead>
          <tbody>
            {equipos.map((e) => (
              <tr key={e.pos} className={`${colorFila(e.pos)} border-b`}>
                <td className="p-2 text-center font-semibold">{e.pos}</td>
                <td className="flex items-center gap-3 p-2">
                  <Image src={e.escudo} alt={e.nombre} width={28} height={28} />
                  {e.nombre}
                </td>
                <td className="text-center">{e.pts}</td>
                <td className="text-center">{e.pj}</td>
                <td className="text-center">{e.pg}</td>
                <td className="text-center">{e.pe}</td>
                <td className="text-center">{e.pp}</td>
                <td className="text-center">{e.gf}</td>
                <td className="text-center">{e.gc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}