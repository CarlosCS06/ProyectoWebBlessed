"use client";

import LeagueLayout from "@/components/LeagueLayout";
import LeagueCard from "@/components/LeagueCard";
import { FaListOl, FaTable, FaUsers } from "react-icons/fa";

export default function SerieAPage() {
  return (
    <LeagueLayout
      titulo="Serie A TIM"
      color="text-[#00796B]"
      descripcion="Resultados, clasificación y noticias del campeonato italiano de fútbol."
    >
      <LeagueCard
        href="/ligas/seriea/resultados"
        icon={FaListOl}
        title="Resultados recientes"
        description="Consulta los resultados más recientes de la Serie A."
        color="text-[#00796B]"
      />
      <LeagueCard
        href="/ligas/seriea/clasificacion"
        icon={FaTable}
        title="Clasificación actual"
        description="Descubre cómo va la tabla de posiciones en la Serie A TIM."
        color="text-[#00796B]"
      />
      <LeagueCard
        href="/ligas/seriea/equipos"
        icon={FaUsers}
        title="Equipos"
        description="Conoce todos los clubes que forman parte de la Serie A."
        color="text-[#00796B]"
      />
    </LeagueLayout>
  );
}
