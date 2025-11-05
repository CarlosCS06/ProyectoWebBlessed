"use client";

import LeagueLayout from "@/components/LeagueLayout";
import LeagueCard from "@/components/LeagueCard";
import { FaListOl, FaTable, FaUsers } from "react-icons/fa";

export default function Ligue1Page() {
  return (
    <LeagueLayout
      titulo="Ligue 1 Uber Eats"
      color="text-[#1A237E]"
      descripcion="Resultados, clasificación y noticias del fútbol francés con los mejores clubes y talentos emergentes."
    >
      <LeagueCard
        href="/ligas/ligue1/resultados"
        icon={FaListOl}
        title="Resultados recientes"
        description="Consulta los resultados más recientes de la Ligue 1."
        color="text-[#1A237E]"
      />
      <LeagueCard
        href="/ligas/ligue1/clasificacion"
        icon={FaTable}
        title="Clasificación actual"
        description="Descubre cómo va la tabla de posiciones en la Ligue 1 Uber Eats."
        color="text-[#1A237E]"
      />
      <LeagueCard
        href="/ligas/ligue1/equipos"
        icon={FaUsers}
        title="Equipos"
        description="Conoce todos los clubes que forman parte de la Ligue 1 Uber Eats."
        color="text-[#1A237E]"
      />
    </LeagueLayout>
  );
}
