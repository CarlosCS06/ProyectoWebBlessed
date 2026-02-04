"use client";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-[#0b0b0b] text-white">

      {/* HERO */}
      <section className="flex flex-col items-center text-center mt-12 px-4">
        {/* ESCUDO */}
        <img 
          src="/images/blessed_logo.jpeg"   // ⬅️ Cambia esta ruta al nombre del archivo que me pasaste
          alt="Blessed Logo"
          className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl"
        />

        {/* TÍTULO */}
        <h1 className="text-4xl md:text-6xl font-extrabold mt-6 tracking-wide">
          <span className="text-red-500">BLESSED</span> CLUB
        </h1>

        {/* FRASES */}
        <p className="text-lg md:text-xl mt-4 text-gray-300">
          “Once bendecidos, una misión.”
        </p>

        <p className="text-md md:text-lg mt-2 text-gray-400 tracking-wide">
          #StayBlessed🙏
        </p>

        <p className="text-md md:text-lg mt-2 text-green-400 font-semibold">
          Equipo de Clubes Pro en FC26
        </p>
      </section>

      {/* CONTENIDO OPCIONAL / BOTONES */}
      <section className="mt-12 mb-20 flex flex-col gap-4 items-center">
        <a 
          href="/plantilla"
          className="px-8 py-4 bg-red-600 hover:bg-red-700 text-lg font-bold rounded-xl transition shadow-lg"
        >
          Ver Plantilla
        </a>

        <a 
          href="/jugadores"
          className="px-8 py-4 bg-green-600 hover:bg-green-700 text-lg font-bold rounded-xl transition shadow-lg"
        >
          Lista de Jugadores
        </a>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-6 bg-[#111] flex flex-col items-center gap-3 border-t border-gray-800">

        <p className="text-gray-500 text-sm tracking-wide">
          Blessed Club © {new Date().getFullYear()}
        </p>

        {/* ICONOS — Tú solo rellenas las rutas */}
        <div className="flex gap-6 mt-2">

          {/* X (Twitter) */}
          <a
            href="https://x.com/BlessedClubPRO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/images/x.png"
              alt="X"
              className="w-15 h-15 hover:opacity-70 transition"
            />
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@TU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/images/tiktok.png"
              alt="TikTok"
              className="w-15 h-15 hover:opacity-70 transition"
            />
          </a>

          {/* Twitch */}
          <a
            href="https://twitch.tv/terre_24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/images/twitch.png"
              alt="Twitch"
              className="w-15 h-15 hover:opacity-70 transition"
            />
          </a>

        </div>
      </footer>
    </div>
  );
}