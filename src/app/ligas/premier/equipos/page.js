"use client";

const equiposPremier = [
  "Arsenal",
  "Aston Villa",
  "Bournemouth",
  "Brentford",
  "Brighton",
  "Burnley",
  "Chelsea",
  "Crystal Palace",
  "Everton",
  "Fulham",
  "Leeds United",
  "Liverpool",
  "Manchester City",
  "Manchester United",
  "Newcastle",
  "Nottingham Forest",
  "Sunderland",
  "Tottenham",
  "West Ham",
  "Wolves",
].sort();

export default function EquiposPremier() {
  return (
    <main className="bg-base-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-[#6A0DAD] text-center mb-10">
        🏟️ Equipos - Premier League
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {equiposPremier.map((equipo) => (
          <div
            key={equipo}
            className="card bg-white shadow-md p-4 text-center hover:scale-105 transition-transform"
          >
            <h2 className="font-semibold">{equipo}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
