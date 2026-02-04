import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-[95%] mx-auto mt-4 px-6 py-4 bg-[#1c542d] border-2 border-[#0f4d1a] rounded-2xl shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/blessed_logo.jpeg"
            alt="Blessed FC"
            className="h-12 w-auto drop-shadow-lg"
          />
          <span className="text-white text-2xl font-bold tracking-wide">
            Blessed Club
          </span>
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-8 text-white font-semibold">

          <a
            href="/"
            className="hover:text-[#15ff7f] transition duration-200"
          >
            Sobre nosotros
          </a>

          <a
            href="/contacto"
            className="hover:text-[#15ff7f] transition duration-200"
          >
            Contacto
          </a>

          <Link
            href="/jugadores"
            className="hover:text-[#15ff7f] transition duration-200"
          >
            Jugadores
          </Link>
        </div>
      </div>
    </nav>
  );
}
