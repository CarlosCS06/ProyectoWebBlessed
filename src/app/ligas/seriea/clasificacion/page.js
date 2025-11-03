"use client";
import Image from "next/image";

export default function ClasificacionSerieA() {
  const equipos = [
    { pos: 1, nombre: "Nápoles", pts: 22, pj: 10, pg: 7, pe: 1, pp: 2, gf: 16, gc: 8, escudo: "/images/equiposfutbol/seriea/napoles.png" },
    { pos: 2, nombre: "Inter Milán", pts: 21, pj: 10, pg: 7, pe: 0, pp: 3, gf: 14, gc: 7, escudo: "/images/equiposfutbol/seriea/inter.png" },
    { pos: 3, nombre: "Milan", pts: 21, pj: 10, pg: 6, pe: 3, pp: 1, gf: 13, gc: 7, escudo: "/images/equiposfutbol/seriea/milan.png" },
    { pos: 4, nombre: "Roma", pts: 21, pj: 10, pg: 7, pe: 0, pp: 3, gf: 10, gc: 5, escudo: "/images/equiposfutbol/seriea/roma.png" },
    { pos: 5, nombre: "Bolonia", pts: 18, pj: 10, pg: 5, pe: 3, pp: 2, gf: 16, gc: 8, escudo: "/images/equiposfutbol/seriea/bolonia.png" },
    { pos: 6, nombre: "Juventus", pts: 18, pj: 10, pg: 5, pe: 3, pp: 2, gf: 14, gc: 10, escudo: "/images/equiposfutbol/seriea/juventus.png" },
    { pos: 7, nombre: "Como", pts: 17, pj: 10, pg: 5, pe: 2, pp: 3, gf: 12, gc: 6, escudo: "/images/equiposfutbol/seriea/como.png" },
    { pos: 8, nombre: "Udinese", pts: 15, pj: 10, pg: 4, pe: 3, pp: 3, gf: 12, gc: 15, escudo: "/images/equiposfutbol/seriea/udinese.png" },
    { pos: 9, nombre: "U.S. Cremonese", pts: 15, pj: 10, pg: 3, pe: 5, pp: 2, gf: 12, gc: 13, escudo: "/images/equiposfutbol/seriea/cremonese.png" },
    { pos: 10, nombre: "Sassuolo", pts: 13, pj: 9, pg: 4, pe: 1, pp: 4, gf: 10, gc: 10, escudo: "/images/equiposfutbol/seriea/sassuolo.png" },
    { pos: 11, nombre: "Atalanta", pts: 13, pj: 10, pg: 2, pe: 7, pp: 1, gf: 13, gc: 8, escudo: "/images/equiposfutbol/seriea/atalanta.png" },
    { pos: 12, nombre: "Torino", pts: 13, pj: 10, pg: 3, pe: 4, pp: 3, gf: 10, gc: 16, escudo: "/images/equiposfutbol/seriea/torino.png" },
    { pos: 13, nombre: "Lazio", pts: 12, pj: 9, pg: 3, pe: 3, pp: 3, gf: 11, gc: 7, escudo: "/images/equiposfutbol/seriea/lazio.png" },
    { pos: 14, nombre: "Cagliari", pts: 9, pj: 9, pg: 3, pe: 0, pp: 6, gf: 9, gc: 12, escudo: "/images/equiposfutbol/seriea/cagliari.png" },
    { pos: 15, nombre: "US Lecce", pts: 9, pj: 10, pg: 2, pe: 3, pp: 5, gf: 8, gc: 14, escudo: "/images/equiposfutbol/seriea/lecce.png" },
    { pos: 16, nombre: "Parma", pts: 7, pj: 10, pg: 1, pe: 4, pp: 5, gf: 7, gc: 12, escudo: "/images/equiposfutbol/seriea/parma.png" },
    { pos: 17, nombre: "Pisa", pts: 6, pj: 10, pg: 1, pe: 3, pp: 6, gf: 7, gc: 14, escudo: "/images/equiposfutbol/seriea/pisa.png" },
    { pos: 18, nombre: "Hellas Verona", pts: 4, pj: 10, pg: 1, pe: 1, pp: 8, gf: 5, gc: 16, escudo: "/images/equiposfutbol/seriea/verona.png" },
    { pos: 19, nombre: "Fiorentina", pts: 4, pj: 10, pg: 1, pe: 1, pp: 8, gf: 7, gc: 16, escudo: "/images/equiposfutbol/seriea/fiorentina.png" },
    { pos: 20, nombre: "Genoa", pts: 3, pj: 9, pg: 0, pe: 3, pp: 6, gf: 4, gc: 13, escudo: "/images/equiposfutbol/seriea/genoa.png" },
  ];

  const colorFila = (pos) => {
    if (pos <= 5) return "bg-blue-100"; // Champions League
    if (pos === 6 || pos === 7) return "bg-orange-100"; // Europa League
    if (pos === 8) return "bg-green-100"; // Conference League
    if (pos >= 18) return "bg-red-100"; // Descenso
    return "bg-white";
  };

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-[#0D9488] text-center mb-8">
        Clasificación Serie A TIM
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <thead className="bg-[#0D9488] text-white">
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
