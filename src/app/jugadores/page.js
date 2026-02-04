"use client";

import { useEffect, useState } from "react";

export default function JugadoresPage() {
  // Lista inicial de jugadores (solo se carga la primera vez)
  const defaultPlayers = [
    { id: 1, name: "Iker", role: "Portero", speciality: "Portero TOP" },
    { id: 2, name: "Carlos", role: "Defensa", speciality: "DFC SOY MUUUY BUENO" },
    { id: 3, name: "Roakadi", role: "Defensa", speciality: "DFC" },
    { id: 4, name: "Davida", role: "Defensa", speciality: "LI / DFC" },
    { id: 5, name: "Mykel", role: "Defensa", speciality: "LI / LD" },
    { id: 6, name: "Manuel", role: "Defensa", speciality: "LD" },
    { id: 7, name: "Antonio", role: "Centrocampista", speciality: "MCD / MC" },
    { id: 8, name: "Jose", role: "Centrocampista", speciality: "MCD / MC" },
    { id: 9, name: "Vitti", role: "Centrocampista", speciality: "MCO / MC" },
    { id: 10, name: "Nivek", role: "Delantero", speciality: "EI" },
    { id: 11, name: "AngelCurry", role: "Delantero", speciality: "EI" },
    { id: 12, name: "Rodri (MAGO)", role: "Delantero", speciality: "ED / DC" },
    { id: 13, name: "TERRE", role: "Delantero", speciality: "DC (Capitán)" }
  ];

  const [players, setPlayers] = useState([]);

  // Solo carga datos precargados si NO existe localStorage
  useEffect(() => {
    // Siempre cargar desde defaultPlayers para reflejar cambios en el código
    localStorage.setItem("jugadores", JSON.stringify(defaultPlayers));
    setPlayers(defaultPlayers);
  }, []);


  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-white">Jugadores</h1>

      <div className="flex flex-col gap-4 w-full max-w-xl">
        {players.map((p) => (
          <div
            key={p.id}
            className="p-4 border rounded-xl bg-[#FFFFFF] shadow flex justify-between items-center"
          >
            <div>
              <p className="font-bold text-red-600">{p.name}</p>
              <p className="text-sm text-green-900">{p.role}</p>
              {p.speciality && <p className="text-xs text-green-900">Posición: {p.speciality}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
