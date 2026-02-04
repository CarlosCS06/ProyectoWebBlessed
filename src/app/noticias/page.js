"use client";
import FeaturedNewsCarousel from "@/components/FeaturedNewsCarousel";
import NewsList from "@/components/NewsList";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function NoticiasPage() {
  // Noticias reales recientes (actualizadas a noviembre 2025)
  const secciones = [
    {
      titulo: "Selecciones Nacionales",
      color: "text-red-600",
      noticias: [
        {
          titulo: "España prepara amistoso ante Alemania con una plantilla renovada",
          resumen:
            "Luis de la Fuente apuesta por jóvenes promesas como Lamine Yamal y Fermín López para el duelo frente a Alemania antes de la Eurocopa.",
          imagen: "/images/noticias/españa.png",
        },
        {
          titulo: "Francia busca consolidar su liderato en la Nations League",
          resumen:
            "Con Mbappé y Griezmann en gran momento, los franceses esperan asegurar su pase a la fase final del torneo.",
          imagen: "/images/noticias/francia.png",
        },
        {
          titulo: "Italia presenta nuevo proyecto con Thiago Motta al mando",
          resumen:
            "El exfutbolista apuesta por un estilo ofensivo y posesivo en la nueva etapa de la Azzurra.",
          imagen: "/images/noticias/italia.png",
        },
        {
          titulo: "Portugal, con Cristiano aún como líder, busca nuevo récord goleador",
          resumen:
            "El capitán lusitano sigue rompiendo marcas mientras prepara la clasificación rumbo al Mundial 2026.",
          imagen: "/images/noticias/cr7.png",
        },
        {
          titulo: "Alemania presenta su nueva generación con Musiala y Wirtz al frente",
          resumen:
            "La Mannschaft apuesta por la juventud y el talento técnico en su camino hacia la Euro 2028.",
          imagen: "/images/noticias/alemania.png",
        },
        {
          titulo: "Inglaterra confirma el regreso de Harry Kane tras su lesión",
          resumen:
            "El delantero del Bayern Múnich estará disponible para los próximos amistosos internacionales.",
          imagen: "/images/noticias/kane.png",
        },

      ],
    },
    {
      titulo: "Champions League",
      color: "text-purple-700",
      noticias: [
        {
          titulo: "Tottenham golea 4-0 al Copenhague en la Champions League",
          resumen:
            "El conjunto inglés, liderado por Heung-Min Son, firmó una actuación impecable para mantenerse líder de su grupo.",
          imagen: "/images/noticias/tottenham.png",
        },
        {
          titulo: "PSG vence al Bayern en un partido de infarto (3-2)",
          resumen:
            "Mbappé y Dembélé guiaron al PSG en una noche mágica en el Parque de los Príncipes.",
          imagen: "/images/noticias/psg-bayern.png",
        },
        {
          titulo: "Real Madrid y Barcelona buscan redención tras los tropiezos europeos",
          resumen:
            "Ambos gigantes españoles vuelven a la Liga con la misión de recuperar sensaciones positivas tras una semana difícil en Europa.",
          imagen: "/images/noticias/barça-madrid.png",
        },
        {
          titulo: "Inter y Juventus empatan en un clásico italiano de alto voltaje",
          resumen:
            "El derbi d’Italia terminó con tablas en un partido cargado de intensidad y polémicas arbitrales.",
          imagen: "/images/noticias/inter-juve.png",
        },
        {
          titulo: "El Barcelona remonta en Montjuïc y mantiene vivas sus opciones europeas",
          resumen:
            "Los blaugranas vencieron 3-2 al Benfica con un gol agónico de Fermín López en los minutos finales.",
          imagen: "/images/noticias/barça-benfica.png",
        },
        {
          titulo: "El Atlético logra un empate clave ante el Manchester United",
          resumen:
            "Un tanto de Griezmann en el descuento dejó vivo al equipo rojiblanco en la lucha por los octavos.",
          imagen: "/images/noticias/atleti-united.png",
        },
      ],
    },
  ];

  // Noticias destacadas para el carrusel
  const noticiasDestacadas = [
    {
      titulo: "El Real Madrid se lleva el Clásico con un golazo de Bellingham",
      resumen:
        "El inglés volvió a brillar en un Santiago Bernabéu lleno, consolidando el liderato blanco.",
      imagen: "/images/noticias/bellingham.png",
    },
    {
      titulo: "Tottenham golea 4-0 al Copenhague en la Champions League",
      resumen:
        "Los Spurs se consolidan en Europa con una actuación brillante de Son Heung-Min.",
      imagen: "/images/noticias/tottenham.png",
    },
    {
      titulo: "Francia busca consolidar su liderato en la Nations League",
      resumen:
        "La selección francesa sigue demostrando su solidez con Mbappé como protagonista.",
      imagen: "/images/noticias/francia-nations.png",
    },
  ];

  return (
    <main className="bg-base-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">
        📰 Noticias del Fútbol Europeo
      </h1>

      <FeaturedNewsCarousel noticias={noticiasDestacadas} />

      {secciones.map((seccion, i) => (
        <NewsList key={i} seccion={seccion} />
      ))}
    </main>
  );
}
