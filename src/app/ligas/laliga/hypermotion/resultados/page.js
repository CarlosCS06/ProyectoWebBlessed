"use client";
import Image from "next/image";

const resultados = [
  { local: "Racing de Santander", gl: 1, visitante: "Real Sociedad B", gv: 0 },
  { local: "Cultural Leonesa", gl: 3, visitante: "Mirandés", gv: 2 },
  { local: "Albacete", gl: 2, visitante: "Huesca", gv: 1 },
  { local: "Leganés", gl: 1, visitante: "Burgos CF", gv: 2 },
  { local: "Almería", gl: 3, visitante: "Eibar", gv: 1 },
  { local: "FC Andorra", gl: 0, visitante: "Cádiz", gv: 0 },
  { local: "Córdoba", gl: 2, visitante: "Ceuta", gv: 0 },
  { local: "Sporting de Gijón", gl: 0, visitante: "Las Palmas", gv: 0 },
  { local: "Castellón", gl: 2, visitante: "Málaga", gv: 1 },
  { local: "Zaragoza", gl: 0, visitante: "Deportivo", gv: 2 },
  { local: "Real Valladolid", gl: null, visitante: "Granada", gv: null }, 
];

export default function ResultadosHypermotion() {
  const getEscudoPath = (nombre) =>
    `/images/equiposfutbol/segunda division/${nombre.toLowerCase().replaceAll(" ", "")}.png`;

  return (
    <main className="bg-base-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-primary text-center mb-10">
        ⚽ Resultados recientes - Jornada 12
      </h1>

      <div className="max-w-3xl mx-auto space-y-3">
        {resultados.map((partido, i) => (
          <div key={i} className="card bg-white shadow-md p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={getEscudoPath(partido.local)}
                alt={partido.local}
                width={40}
                height={40}
              />
              <span>{partido.local}</span>
            </div>

            <div className="text-xl font-bold text-center w-20">
              {partido.gl !== null ? `${partido.gl} - ${partido.gv}` : "Pendiente"}
            </div>

            <div className="flex items-center gap-2">
              <span>{partido.visitante}</span>
              <Image
                src={getEscudoPath(partido.visitante)}
                alt={partido.visitante}
                width={40}
                height={40}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
