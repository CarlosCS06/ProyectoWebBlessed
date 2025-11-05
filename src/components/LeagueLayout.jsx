// components/LeagueLayout.jsx
"use client";

export default function LeagueLayout({ titulo, color, descripcion, children }) {
  return (
    <main className="bg-base-200 min-h-screen p-8 space-y-20">
      {/* Cabecera de la liga */}
      <section className="text-center">
        <h1 className={`text-5xl font-bold ${color} text-center mb-10`}>
          ⚽{titulo}
        </h1>
        <p className="text-gray-600 text-lg mt-2">{descripcion}</p>
      </section>

      {/* Contenido dinámico (cards, resultados, etc.) */}
      <section className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {children}
      </section>
    </main>
  );
}
