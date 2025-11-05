"use client";
import { useEffect, useState } from "react";

export default function HeroCarousel() {
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
    }, 5000); // cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden rounded-xl shadow-lg">
      {/* Imagen activa */}
      <img
        src={images[current]}
        alt={`Portada ${current + 1}`}
        className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
      />

      {/* Degradado oscuro para texto */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold drop-shadow-lg">¡Vive el Fútbol!</h1>
        <p className="text-xl mt-4 opacity-90">Toda la emoción del fútbol europeo y mundial</p>
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
  );
}
