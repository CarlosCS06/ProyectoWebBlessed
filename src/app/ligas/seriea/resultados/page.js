import Image from "next/image";

export default function ResultadosSerieA() {
  const partidos = [
    { local: "Udinese", escudoLocal: "/images/equiposfutbol/seriea/udinese.png", resultado: "1-0", visitante: "Atalanta", escudoVisitante: "/images/equiposfutbol/seriea/atalanta.png" },
    { local: "Nápoles", escudoLocal: "/images/equiposfutbol/seriea/napoles.png", resultado: "0-0", visitante: "Como", escudoVisitante: "/images/equiposfutbol/seriea/como.png" },
    { local: "Cremonese", escudoLocal: "/images/equiposfutbol/seriea/cremonese.png", resultado: "1-2", visitante: "Juventus", escudoVisitante: "/images/equiposfutbol/seriea/juventus.png" },
    { local: "Hellas Verona", escudoLocal: "/images/equiposfutbol/seriea/verona.png", resultado: "1-2", visitante: "Inter Milán", escudoVisitante: "/images/equiposfutbol/seriea/inter.png" },
    { local: "Fiorentina", escudoLocal: "/images/equiposfutbol/seriea/fiorentina.png", resultado: "0-1", visitante: "Lecce", escudoVisitante: "/images/equiposfutbol/seriea/lecce.png" },
    { local: "Torino", escudoLocal: "/images/equiposfutbol/seriea/torino.png", resultado: "2-2", visitante: "Pisa", escudoVisitante: "/images/equiposfutbol/seriea/pisa.png" },
    { local: "Parma", escudoLocal: "/images/equiposfutbol/seriea/parma.png", resultado: "1-3", visitante: "Bolonia", escudoVisitante: "/images/equiposfutbol/seriea/bolonia.png" },
    { local: "Milan", escudoLocal: "/images/equiposfutbol/seriea/milan.png", resultado: "1-0", visitante: "Roma", escudoVisitante: "/images/equiposfutbol/seriea/roma.png" },
    { local: "Sassuolo", escudoLocal: "/images/equiposfutbol/seriea/sassuolo.png", resultado: "vs", visitante: "Genoa", escudoVisitante: "/images/equiposfutbol/seriea/genoa.png" },
    { local: "Lazio", escudoLocal: "/images/equiposfutbol/seriea/lazio.png", resultado: "vs", visitante: "Cagliari", escudoVisitante: "/images/equiposfutbol/seriea/cagliari.png" },
  ];

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-[#0D9488] text-center mb-8">
        Resultados recientes - Serie A TIM
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
