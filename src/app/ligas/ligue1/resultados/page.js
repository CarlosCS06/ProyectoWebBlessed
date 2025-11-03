import Image from "next/image";

export default function ResultadosLigue1() {
  const partidos = [
    { local: "PSG", escudoLocal: "/images/equiposfutbol/ligue1/psg.png", resultado: "1-0", visitante: "Niza", escudoVisitante: "/images/equiposfutbol/ligue1/niza.png" },
    { local: "Monaco", escudoLocal: "/images/equiposfutbol/ligue1/monaco.png", resultado: "0-1", visitante: "Paris FC", escudoVisitante: "/images/equiposfutbol/ligue1/parisfc.png" },
    { local: "Auxerre", escudoLocal: "/images/equiposfutbol/ligue1/auxerre.png", resultado: "0-1", visitante: "O. Marseille", escudoVisitante: "/images/equiposfutbol/ligue1/marseille.png" },
    { local: "Rennes", escudoLocal: "/images/equiposfutbol/ligue1/rennes.png", resultado: "4-1", visitante: "Strasbourg", escudoVisitante: "/images/equiposfutbol/ligue1/strasbourg.png" },
    { local: "Lens", escudoLocal: "/images/equiposfutbol/ligue1/lens.png", resultado: "3-0", visitante: "Lorient", escudoVisitante: "/images/equiposfutbol/ligue1/lorient.png" },
    { local: "Lille", escudoLocal: "/images/equiposfutbol/ligue1/lille.png", resultado: "1-0", visitante: "Angers", escudoVisitante: "/images/equiposfutbol/ligue1/angers.png" },
    { local: "Nantes", escudoLocal: "/images/equiposfutbol/ligue1/nantes.png", resultado: "0-2", visitante: "Metz", escudoVisitante: "/images/equiposfutbol/ligue1/metz.png" },
    { local: "Toulouse", escudoLocal: "/images/equiposfutbol/ligue1/toulouse.png", resultado: "0-0", visitante: "Le Havre", escudoVisitante: "/images/equiposfutbol/ligue1/lehavre.png" },
    { local: "Brest", escudoLocal: "/images/equiposfutbol/ligue1/brest.png", resultado: "0-0", visitante: "O. Lyon", escudoVisitante: "/images/equiposfutbol/ligue1/lyon.png" },
  ];

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-[#1e3a8a] text-center mb-8">
        Resultados recientes - Ligue 1
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
