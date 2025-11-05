"use client";
import Image from "next/image";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function EquiposSerieA() {
  const equipos = [
    "Atalanta", "Bolonia", "Cagliari", "Como", "Cremonese", "Fiorentina", "Genoa",
    "Hellas Verona", "Inter Milán", "Juventus", "Lazio", "Lecce", "Milan", "Nápoles",
    "Parma", "Pisa", "Roma", "Sassuolo", "Torino", "Udinese"
  ];

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-[#0D9488] text-center mb-8">Equipos de la Serie A</h1>
      <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {equipos.map((e) => (
          <div key={e} className="bg-white p-4 rounded-lg shadow hover:shadow-md text-center transition">
            <Image
              src={`/images/equiposfutbol/seriea/${e.toLowerCase().replace(/\s/g, "")}.png`}
              alt={e}
              width={80}
              height={80}
              className="mx-auto"
            />
            <h2 className="font-semibold mt-3">{e}</h2>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/ligas/seriea" className="btn btn-outline text-green-600 border-green-600 flex items-center gap-2">
          <FaArrowLeft /> Volver a la Serie A
        </Link>
      </div>
    </main>
  );
}
