"use client";

import LeagueLayout from "@/components/LeagueLayout";
import LeagueCard from "@/components/LeagueCard";
import { FaListOl, FaTable, FaUsers } from "react-icons/fa";

export default function LaLigaPage() {
  return (
    <main className="bg-base-200 min-h-screen p-8 space-y-20">

      {/* === LALIGA EA SPORTS === */}
      <LeagueLayout
        titulo="LaLiga EA Sports"
        color="text-[#E94E1B]"
        descripcion="Resultados, clasificación y noticias de la liga más seguida del mundo."
      >
        <LeagueCard
          href="/ligas/laliga/resultados"
          icon={FaListOl}
          title="Resultados recientes"
          description="Consulta los últimos resultados de la jornada en LaLiga EA Sports."
          color="text-[#E94E1B]"
        />
        <LeagueCard
          href="/ligas/laliga/clasificacion"
          icon={FaTable}
          title="Clasificación actual"
          description="Descubre cómo va la tabla de posiciones en LaLiga EA Sports."
          color="text-[#E94E1B]"
        />
        <LeagueCard
          href="/ligas/laliga/equipos"
          icon={FaUsers}
          title="Equipos"
          description="Conoce todos los clubes que forman parte de esta temporada."
          color="text-[#E94E1B]"
        />
      </LeagueLayout>

      {/* === LALIGA HYPERMOTION === */}
      <LeagueLayout
        titulo="LaLiga Hypermotion"
        color="text-sky-600"
        descripcion="Toda la emoción de la Segunda División del fútbol español."
      >
        <LeagueCard
          href="/ligas/laliga/hypermotion/resultados"
          icon={FaListOl}
          title="Resultados recientes"
          description="Consulta los últimos resultados de la jornada en LaLiga Hypermotion."
          color="text-sky-600"
        />
        <LeagueCard
          href="/ligas/laliga/hypermotion/clasificacion"
          icon={FaTable}
          title="Clasificación actual"
          description="Descubre cómo va la tabla de posiciones en LaLiga Hypermotion."
          color="text-sky-600"
        />
        <LeagueCard
          href="/ligas/laliga/hypermotion/equipos"
          icon={FaUsers}
          title="Equipos"
          description="Conoce todos los clubes que forman parte de la Segunda División."
          color="text-sky-600"
        />
      </LeagueLayout>

    </main>
  );
}
