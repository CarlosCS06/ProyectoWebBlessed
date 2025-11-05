"use client";
import Image from "next/image";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ClasificacionLigue1() {
  const equipos = [
    { pos: 1, nombre: "Paris Saint-Germain", pts: 24, pj: 11, pg: 7, pe: 3, pp: 1, gf: 21, gc: 9, escudo: "/images/equiposfutbol/ligue1/psg.png" },
    { pos: 2, nombre: "Marseille", pts: 22, pj: 11, pg: 7, pe: 1, pp: 3, gf: 25, gc: 11, escudo: "/images/equiposfutbol/ligue1/marseille.png" },
    { pos: 3, nombre: "Lens", pts: 22, pj: 11, pg: 7, pe: 1, pp: 3, gf: 17, gc: 10, escudo: "/images/equiposfutbol/ligue1/lens.png" },
    { pos: 4, nombre: "Lille", pts: 20, pj: 11, pg: 6, pe: 2, pp: 3, gf: 23, gc: 13, escudo: "/images/equiposfutbol/ligue1/lille.png" },
    { pos: 5, nombre: "Monaco", pts: 20, pj: 11, pg: 6, pe: 2, pp: 3, gf: 23, gc: 17, escudo: "/images/equiposfutbol/ligue1/monaco.png" },
    { pos: 6, nombre: "O. Lyon", pts: 20, pj: 11, pg: 6, pe: 2, pp: 3, gf: 36, gc: 12, escudo: "/images/equiposfutbol/ligue1/lyon.png" },
    { pos: 7, nombre: "Strasbourg", pts: 19, pj: 11, pg: 5, pe: 4, pp: 2, gf: 22, gc: 16, escudo: "/images/equiposfutbol/ligue1/strasbourg.png" },
    { pos: 8, nombre: "Niza", pts: 17, pj: 11, pg: 5, pe: 2, pp: 4, gf: 16, gc: 16, escudo: "/images/equiposfutbol/ligue1/niza.png" },
    { pos: 9, nombre: "Toulouse", pts: 15, pj: 11, pg: 4, pe: 3, pp: 4, gf: 17, gc: 15, escudo: "/images/equiposfutbol/ligue1/toulouse.png" },
    { pos: 10, nombre: "Rennes", pts: 14, pj: 11, pg: 3, pe: 5, pp: 3, gf: 18, gc: 17, escudo: "/images/equiposfutbol/ligue1/rennes.png" },
    { pos: 11, nombre: "Paris FC", pts: 14, pj: 11, pg: 4, pe: 2, pp: 5, gf: 18, gc: 20, escudo: "/images/equiposfutbol/ligue1/parisfc.png" },
    { pos: 12, nombre: "Le Havre", pts: 13, pj: 11, pg: 3, pe: 4, pp: 4, gf: 14, gc: 16, escudo: "/images/equiposfutbol/ligue1/lehavre.png" },
    { pos: 13, nombre: "Brest", pts: 10, pj: 11, pg: 2, pe: 4, pp: 5, gf: 14, gc: 18, escudo: "/images/equiposfutbol/ligue1/brest.png" },
    { pos: 14, nombre: "Angers", pts: 10, pj: 11, pg: 2, pe: 4, pp: 5, gf: 14, gc: 15, escudo: "/images/equiposfutbol/ligue1/angers.png" },
    { pos: 15, nombre: "Nantes", pts: 9, pj: 11, pg: 2, pe: 3, pp: 6, gf: 13, gc: 17, escudo: "/images/equiposfutbol/ligue1/nantes.png" },
    { pos: 16, nombre: "Lorient", pts: 9, pj: 11, pg: 2, pe: 3, pp: 6, gf: 13, gc: 25, escudo: "/images/equiposfutbol/ligue1/lorient.png" },
    { pos: 17, nombre: "Metz", pts: 8, pj: 11, pg: 2, pe: 2, pp: 7, gf: 20, gc: 26, escudo: "/images/equiposfutbol/ligue1/metz.png" },
    { pos: 18, nombre: "Auxerre", pts: 7, pj: 11, pg: 2, pe: 1, pp: 8, gf: 7, gc: 17, escudo: "/images/equiposfutbol/ligue1/auxerre.png" },
  ];

  const colorFila = (pos) => {
    if (pos <= 4) return "bg-blue-100";
    if (pos === 5) return "bg-orange-100";
    if (pos === 6) return "bg-green-100";
    if (pos === 16) return "bg-red-50";
    if (pos >= 17) return "bg-red-100";
    return "bg-white";
  };

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-[#1e3a8a] text-center mb-8">
        Clasificación Ligue 1 Uber Eats
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <thead className="bg-[#1e3a8a] text-white">
            <tr>
              <th className="p-3 text-left">Pos</th>
              <th className="p-3 text-left">Equipo</th>
              <th className="p-3">PT</th>
              <th>PJ</th><th>PG</th><th>PE</th><th>PP</th><th>GF</th><th>GC</th>
            </tr>
          </thead>
          <tbody>
            {equipos.map((e) => (
              <tr key={e.pos}className={`${colorFila(e.pos)} border-b hover:bg-gray-100 transition-colors duration-200 ease-in-out`}>
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
            <div className="flex justify-center mt-10">
        <Link href="/ligas/ligue1" className="btn btn-outline text-blue-600 border-blue-600 flex items-center gap-2">
          <FaArrowLeft /> Volver a la Ligue 1
        </Link>
      </div>
    </main>
  );
}
