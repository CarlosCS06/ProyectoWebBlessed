"use client";
import { FaFutbol, FaRegNewspaper, FaUsers, FaTrophy } from "react-icons/fa";
import NewsCard from "@/components/NewsCard";
import MatchCard from "@/components/MatchCard";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const images = [
    "/images/Portada/laliga.png",
    "/images/Portada/premier.png",
    "/images/Portada/serie a.png",
    "/images/Portada/bundesliga.png",
    "/images/Portada/ligue1.png",
    "/images/Portada/champions league.png",
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="bg-base-200 min-h-screen pt-4">
      {/* === HERO CON CARRUSEL === */}
      <section className="relative w-full h-[80vh] overflow-hidden rounded-xl shadow-lg mb-12">
        <img
          src={images[current]}
          alt={`Portada ${current + 1}`}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />

        {/* Overlay de texto */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold drop-shadow-lg">
            ¡Vive el Fútbol!
          </h1>
          <p className="text-xl mt-4 opacity-90">
            Toda la emoción del fútbol europeo y mundial
          </p>
        </div>

        {/* Indicadores inferiores */}
        <div className="absolute bottom-6 flex justify-center w-full gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrent(i)}
            ></button>
          ))}
        </div>
      </section>

      {/* === RESULTADOS === */}
      <section id="resultados" className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2 text-primary">
          <FaTrophy className="text-yellow-500 text-3xl" />
          Últimos Resultados
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <MatchCard team1="Real Madrid" team2="Barcelona" score="2 - 1" />
          <MatchCard team1="Betis" team2="Sevilla" score="1 - 1" />
          <MatchCard team1="Atlético" team2="Valencia" score="3 - 1" />
        </div>
      </section>

      {/* === NOTICIAS === */}
      <section id="noticias" className="p-8 bg-base-100">
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2 text-primary">
          <FaRegNewspaper className="text-secondary text-3xl" />
          Noticias Recientes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <NewsCard
            title="LaLiga 2025/26 arranca con nuevos fichajes estrella"
            image="/news1.jpg"
            date="28/10/2025"
          />
          <NewsCard
            title="España se consolida como potencia en fútbol femenino"
            image="/news2.jpg"
            date="27/10/2025"
          />
          <NewsCard
            title="Un clásico vibrante deja a los aficionados sin aliento"
            image="/news3.jpg"
            date="26/10/2025"
          />
          <NewsCard
            title="Betis presenta su nuevo estadio sostenible"
            image="/news4.jpg"
            date="25/10/2025"
          />
          <NewsCard
            title="La tecnología VAR cumple cinco años en España"
            image="/news5.jpg"
            date="24/10/2025"
          />
          <NewsCard
            title="Girona sorprende al mundo con su estilo ofensivo"
            image="/news6.jpg"
            date="23/10/2025"
          />
        </div>
      </section>

      {/* === FOOTER === */}
      <Footer />
    </main>
  );
}
