"use client";

import LeagueLayout from "@/components/LeagueLayout";
import LeagueCard from "@/components/LeagueCard";
import { FaListOl, FaTable, FaUsers } from "react-icons/fa";

export default function PremierLeaguePage() {
  return (
    <LeagueLayout
      titulo="Premier League"
      color="text-[#5B2C6F]"
      descripcion="Resultados, clasificación y noticias de la liga más competitiva del mundo."
    >
      <LeagueCard
        href="/ligas/premier/resultados"
        icon={FaListOl}
        title="Resultados recientes"
        description="Consulta los últimos resultados de la jornada en la Premier League."
        color="text-[#5B2C6F]"
      />
      <LeagueCard
        href="/ligas/premier/clasificacion"
        icon={FaTable}
        title="Clasificación actual"
        description="Descubre cómo va la tabla de posiciones en la Premier League."
        color="text-[#5B2C6F]"
      />
      <LeagueCard
        href="/ligas/premier/equipos"
        icon={FaUsers}
        title="Equipos"
        description="Conoce todos los clubes que forman parte de esta temporada."
        color="text-[#5B2C6F]"
      />
    </LeagueLayout>
  );
}
