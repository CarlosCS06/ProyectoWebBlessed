"use client";

import LeagueLayout from "@/components/LeagueLayout";
import LeagueCard from "@/components/LeagueCard";
import { FaListOl, FaTable, FaUsers } from "react-icons/fa";

export default function BundesligaPage() {
  return (
    <LeagueLayout
      titulo="Bundesliga"
      color="text-[#D32F2F]"
      descripcion="Resultados, clasificación y noticias de la máxima categoría del fútbol alemán."
    >
      <LeagueCard
        href="/ligas/bundesliga/resultados"
        icon={FaListOl}
        title="Resultados recientes"
        description="Consulta los resultados más recientes de la Bundesliga."
        color="text-[#D32F2F]"
      />
      <LeagueCard
        href="/ligas/bundesliga/clasificacion"
        icon={FaTable}
        title="Clasificación actual"
        description="Descubre cómo va la tabla de posiciones en la Bundesliga."
        color="text-[#D32F2F]"
      />
      <LeagueCard
        href="/ligas/bundesliga/equipos"
        icon={FaUsers}
        title="Equipos"
        description="Conoce todos los clubes que forman parte de la Bundesliga."
        color="text-[#D32F2F]"
      />
    </LeagueLayout>
  );
}