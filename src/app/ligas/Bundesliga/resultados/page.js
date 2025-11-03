import Image from "next/image";

export default function ResultadosBundesliga() {
  const partidos = [
    { local: "Augsburgo", escudoLocal: "/images/equiposfutbol/bundesliga/augsburgo.png", resultado: "0-1", visitante: "Borussia Dortmund", escudoVisitante: "/images/equiposfutbol/bundesliga/dortmund.png" },
    { local: "1. FC Heidenheim 1846", escudoLocal: "/images/equiposfutbol/bundesliga/heidenheim.png", resultado: "1-1", visitante: "Eintracht Frankfurt", escudoVisitante: "/images/equiposfutbol/bundesliga/eintracht.png" },
    { local: "1. FC Union Berlin", escudoLocal: "/images/equiposfutbol/bundesliga/union.png", resultado: "0-0", visitante: "Friburgo", escudoVisitante: "/images/equiposfutbol/bundesliga/friburgo.png" },
    { local: "Mainz 05", escudoLocal: "/images/equiposfutbol/bundesliga/mainz.png", resultado: "1-1", visitante: "Werder Bremen", escudoVisitante: "/images/equiposfutbol/bundesliga/bremen.png" },
    { local: "FC St. Pauli", escudoLocal: "/images/equiposfutbol/bundesliga/pauli.png", resultado: "0-4", visitante: "Borussia M'gladbach", escudoVisitante: "/images/equiposfutbol/bundesliga/mgladbach.png" },
    { local: "Leipzig", escudoLocal: "/images/equiposfutbol/bundesliga/leipzig.png", resultado: "3-1", visitante: "VfB Stuttgart", escudoVisitante: "/images/equiposfutbol/bundesliga/stuttgart.png" },
    { local: "Bayern Munich", escudoLocal: "/images/equiposfutbol/bundesliga/bayern.png", resultado: "3-0", visitante: "Bayer Leverkusen", escudoVisitante: "/images/equiposfutbol/bundesliga/leverkusen.png" },
    { local: "Colonia", escudoLocal: "/images/equiposfutbol/bundesliga/colonia.png", resultado: "4-1", visitante: "Hamburgo", escudoVisitante: "/images/equiposfutbol/bundesliga/hamburgo.png" },
    { local: "Wolfsburgo", escudoLocal: "/images/equiposfutbol/bundesliga/wolfsburgo.png", resultado: "2-3", visitante: "TSG Hoffenheim", escudoVisitante: "/images/equiposfutbol/bundesliga/hoffenheim.png" },
  ];

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-[#dc2626] text-center mb-8">
        Resultados recientes - Bundesliga
      </h1>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
        {partidos.map((p, i) => (
          <div key={i} className="flex justify-between items-center border-b py-3">
            <div className="flex items-center gap-3">
              <Image src={p.escudoLocal} width={28} height={28} alt={p.local} />
              <span>{p.local}</span>
            </div>
            <strong>{p.resultado}</strong>
            <div className="flex items-center gap-3">
              <span>{p.visitante}</span>
              <Image src={p.escudoVisitante} width={28} height={28} alt={p.visitante} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
