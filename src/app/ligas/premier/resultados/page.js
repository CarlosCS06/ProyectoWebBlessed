"use client";

const resultados = [
  { local: "Brighton", visitante: "Leeds United", resultado: "3 - 0" },
  { local: "Burnley", visitante: "Arsenal", resultado: "0 - 2" },
  { local: "Crystal Palace", visitante: "Brentford", resultado: "2 - 0" },
  { local: "Fulham", visitante: "Wolves", resultado: "3 - 0" },
  { local: "Nottingham Forest", visitante: "Manchester United", resultado: "2 - 2" },
  { local: "Tottenham", visitante: "Chelsea", resultado: "0 - 1" },
  { local: "Liverpool", visitante: "Aston Villa", resultado: "2 - 0" },
  { local: "West Ham", visitante: "Newcastle", resultado: "3 - 1" },
  { local: "Manchester City", visitante: "Bournemouth", resultado: "3 - 1" },
  { local: "Sunderland", visitante: "Everton", resultado: "03/11 21:00" },
];

export default function ResultadosPremier() {
  return (
    <main className="bg-base-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-[#6A0DAD] text-center mb-10">
        ⚽ Resultados Recientes - Premier League
      </h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {resultados.map((p, i) => (
          <div
            key={i}
            className="card bg-white shadow-lg p-6 text-center hover:shadow-xl transition"
          >
            <h2 className="font-bold text-xl mb-2">{p.local}</h2>
            <p className="text-2xl font-semibold text-[#6A0DAD]">{p.resultado}</p>
            <h2 className="font-bold text-xl mt-2">{p.visitante}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
