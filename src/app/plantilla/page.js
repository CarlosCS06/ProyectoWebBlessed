"use client";

import { useState, useRef } from "react";

export default function PlantillaPage() {
  const [players, setPlayers] = useState([]);
  const [role, setRole] = useState("Portero");
  const [modalOpen, setModalOpen] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [playerNumber, setPlayerNumber] = useState("");

  const fieldRef = useRef(null);

  // Colores por rol
  const roleColor = {
    Portero: "#ff66cc",
    Defensa: "#00cc44",
    Centrocampista: "#ffd700",
    Delantero: "#ff3333",
  };

  // Imagen por rol
  const roleImage = {
    Portero: "/images/shirt_gk.png",
    Defensa: "/images/shirt_player.png",
    Centrocampista: "/images/shirt_player.png",
    Delantero: "/images/shirt_player.png",
  };

  const openCreateModal = () => {
    setPlayerName("");
    setSpeciality("");
    setPlayerNumber("");
    setModalOpen(true);
  };

  const createPlayer = () => {
    const newPlayer = {
      name: playerName,
      speciality,
      role,
      number: playerNumber,
      img: roleImage[role],
      color: roleColor[role],
      x: 600,
      y: 350,
    };

    setPlayers((prev) => [...prev, newPlayer]);
    setModalOpen(false);
  };

  const resetPlayers = () => setPlayers([]);

  // CAPTURA
  const saveAsImage = async () => {
    const domtoimage = (await import("dom-to-image-more")).default;

    if (!fieldRef.current) return;

    domtoimage
      .toPng(fieldRef.current, {
        quality: 1,
        bgcolor: "#000000",
        width: fieldRef.current.offsetWidth,
        height: fieldRef.current.offsetHeight,
      })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "plantilla.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Error guardando imagen:", err);
      });
  };

  const startDrag = (e, index) => {
    const rect = fieldRef.current.getBoundingClientRect();

    const onMove = (ev) => {
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;

      setPlayers((prev) =>
        prev.map((p, i) => (i === index ? { ...p, x, y } : p))
      );
    };

    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  return (
    <div className="p-6 flex flex-col items-center">
      {/* SELECT Y BOTONES */}
      <div className="flex gap-4 mb-6">
        <select
          className="select select-bordered"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Portero</option>
          <option>Defensa</option>
          <option>Centrocampista</option>
          <option>Delantero</option>
        </select>

        <button className="btn btn-primary" onClick={openCreateModal}>
          Crear jugador
        </button>

        <button className="btn btn-error" onClick={resetPlayers}>
          Resetear
        </button>

        <button className="btn btn-secondary" onClick={saveAsImage}>
          Guardar plantilla
        </button>
      </div>

      {/* CAMPO */}
      <div
        ref={fieldRef}
        className="relative w-full max-w-[1500px] border-4 border-green-700 rounded-xl"
      >
        <img
          src="/images/campo_futbol.jfif"
          className="w-full h-auto object-cover"
        />

        {players.map((p, i) => (
          <div
            key={i}
            data-player
            className="absolute cursor-grab flex flex-col items-center text-center"
            style={{
              top: p.y,
              left: p.x,
              transform: "translate(-50%, -50%)",

              // ✅ FIX: eliminar fondos invisibles
              background: "transparent",
              padding: 0,
              margin: 0,

              // 🔥 FIX: asegurar que NO haya bordes ni sombras en la captura
              border: "none",
              borderRadius: "0px",
              boxShadow: "none",
            }}
            onMouseDown={(e) => startDrag(e, i)}
          >
            <div className="relative w-24 h-24">
              <img
                src={p.img}
                className="w-24 h-24 object-contain select-none"
                style={{
                  background: "transparent",
                  border: "none",
                  borderRadius: 0,
                  boxShadow: "none",
                }}
                draggable={false}
              />
              {p.number && (
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    background: "transparent",
                  }}
                >
                  {p.number}
                </span>
              )}
            </div>

            <p
              style={{
                color: p.color,
                fontWeight: "bold",
                fontSize: "1.1rem",

                // FIX TEXTO
                background: "transparent",
                padding: 0,
                margin: 0,
                border: "none",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              {p.name}
            </p>

            <p
              style={{
                color: p.color,
                fontSize: "0.9rem",

                // FIX TEXTO
                background: "transparent",
                padding: 0,
                margin: 0,
                border: "none",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              {p.role} — {p.speciality}
            </p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl w-80">
            <h3 className="text-x1 font-bold mb-4">Nuevo jugador</h3>

            <input
              type="text"
              placeholder="Nombre"
              className="input input-bordered w-full mb-3"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Especialización"
              className="input input-bordered w-full mb-3"
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
            />

            <input
              type="number"
              placeholder="Número de camiseta"
              className="input input-bordered w-full mb-4"
              value={playerNumber}
              onChange={(e) => setPlayerNumber(e.target.value)}
              min="1"
              max="99"
            />

            <div className="flex justify-end gap-3">
              <button className="btn" onClick={() => setModalOpen(false)}>
                Cancelar
              </button>
              <button
                className="btn btn-primary"
                onClick={createPlayer}
                disabled={!playerName}
              >
                Crear
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
