"use client";
import Image from "next/image";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const clasificacion = [
  { pos: 1, equipo: "Racing de Santander", pts: 25, pj: 12, pg: 8, pe: 1, pp: 3, gf: 28, gc: 18, escudo: "/images/equiposfutbol/segunda division/racing de santander.png" },
  { pos: 2, equipo: "Almería", pts: 22, pj: 12, pg: 6, pe: 4, pp: 2, gf: 18, gc: 10, escudo: "/images/equiposfutbol/segunda division/almeria.png" },
  { pos: 3, equipo: "Burgos CF", pts: 22, pj: 12, pg: 6, pe: 3, pp: 3, gf: 19, gc: 12, escudo: "/images/equiposfutbol/segunda division/burgos.png" },
  { pos: 4, equipo: "Deportivo", pts: 20, pj: 12, pg: 5, pe: 5, pp: 2, gf: 21, gc: 12, escudo: "/images/equiposfutbol/segunda division/deportivo.png" },
  { pos: 5, equipo: "Las Palmas", pts: 20, pj: 12, pg: 5, pe: 5, pp: 2, gf: 22, gc: 7, escudo: "/images/equiposfutbol/segunda division/las palmas.png" },
  { pos: 6, equipo: "Cádiz", pts: 20, pj: 12, pg: 5, pe: 5, pp: 2, gf: 11, gc: 9, escudo: "/images/equiposfutbol/segunda division/cadiz.png" },
  { pos: 7, equipo: "Córdoba", pts: 19, pj: 12, pg: 5, pe: 4, pp: 3, gf: 16, gc: 14, escudo: "/images/equiposfutbol/segunda division/cordoba.png" },
  { pos: 8, equipo: "Sporting", pts: 19, pj: 12, pg: 5, pe: 4, pp: 3, gf: 17, gc: 17, escudo: "/images/equiposfutbol/segunda division/sporting de gijon.png" },
  { pos: 9, equipo: "AD Ceuta FC", pts: 18, pj: 12, pg: 5, pe: 3, pp: 4, gf: 14, gc: 11, escudo: "/images/equiposfutbol/segunda division/ceuta.png" },
  { pos: 10, equipo: "Real Valladolid", pts: 16, pj: 11, pg: 4, pe: 3, pp: 4, gf: 13, gc: 10, escudo: "/images/equiposfutbol/segunda division/valladolid.png" },
  { pos: 11, equipo: "Albacete", pts: 16, pj: 12, pg: 4, pe: 4, pp: 4, gf: 18, gc: 14, escudo: "/images/equiposfutbol/segunda division/albacete.png" },
  { pos: 12, equipo: "FC Andorra", pts: 16, pj: 12, pg: 4, pe: 4, pp: 4, gf: 14, gc: 17, escudo: "/images/equiposfutbol/segunda division/andorra.png" },
  { pos: 13, equipo: "Leganés", pts: 15, pj: 12, pg: 3, pe: 6, pp: 3, gf: 13, gc: 9, escudo: "/images/equiposfutbol/segunda division/leganes.png" },
  { pos: 14, equipo: "Castellón", pts: 15, pj: 12, pg: 3, pe: 6, pp: 3, gf: 15, gc: 15, escudo: "/images/equiposfutbol/segunda division/castellon.png" },
  { pos: 15, equipo: "Cultural Leonesa", pts: 14, pj: 12, pg: 3, pe: 5, pp: 4, gf: 16, gc: 15, escudo: "/images/equiposfutbol/segunda division/cultural leonesa.png" },
  { pos: 16, equipo: "Málaga", pts: 14, pj: 12, pg: 3, pe: 5, pp: 4, gf: 16, gc: 15, escudo: "/images/equiposfutbol/segunda division/malaga.png" },
  { pos: 17, equipo: "Huesca", pts: 14, pj: 12, pg: 3, pe: 5, pp: 4, gf: 15, gc: 15, escudo: "/images/equiposfutbol/segunda division/huesca.png" },
  { pos: 18, equipo: "Eibar", pts: 13, pj: 12, pg: 3, pe: 4, pp: 5, gf: 12, gc: 13, escudo: "/images/equiposfutbol/segunda division/eibar.png" },
  { pos: 19, equipo: "Granada", pts: 11, pj: 12, pg: 2, pe: 5, pp: 5, gf: 14, gc: 15, escudo: "/images/equiposfutbol/segunda division/granada.png" },
  { pos: 20, equipo: "Real Sociedad B", pts: 9, pj: 12, pg: 2, pe: 3, pp: 7, gf: 16, gc: 20, escudo: "/images/equiposfutbol/segunda division/real sociedad b.png" },
  { pos: 21, equipo: "Mirandés", pts: 9, pj: 12, pg: 2, pe: 3, pp: 7, gf: 12, gc: 20, escudo: "/images/equiposfutbol/segunda division/mirandes.png" },
  { pos: 22, equipo: "Real Zaragoza", pts: 6, pj: 12, pg: 1, pe: 3, pp: 8, gf: 8, gc: 20, escudo: "/images/equiposfutbol/segunda division/real zaragoza.png" },
];

export default function ClasificacionHypermotion() {
  const getRowColor = (pos) => {
    if (pos <= 2) return "bg-green-700 text-white"; // Ascenso directo
    if (pos >= 3 && pos <= 6) return "bg-green-200"; // Playoffs
    if (pos >= 19) return "bg-red-400 text-white"; // Descenso
    return "";
  };

  return (
    <main className="bg-base-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-primary text-center mb-10">
        🏆 Clasificación - LaLiga Hypermotion
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
        <p>🟩 Ascenso directo</p>
        <p>🟩 Playoffs (verde claro)</p>
        <p>🟥 Descenso</p>
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
