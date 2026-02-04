"use client";

import { useState } from "react";

export default function ContactoPage() {
    const [formData, setFormData] = useState({
        discord: "",
        fc26Id: "",
        posiciones: "",
        experiencia: "",
        telefono: "",
    });
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);
        setEnviado(true);
        // Aquí podrías enviar los datos a un servidor o API
    };

    return (
        <div className="p-6 flex flex-col items-center min-h-screen">
            <h1 className="text-3xl font-bold mb-2 text-white">Contacto</h1>
            <p className="text-gray-300 mb-8 text-center max-w-md">
                ¿Quieres unirte a Blessed Club? Rellena el formulario y nos pondremos en contacto contigo.
            </p>

            {enviado ? (
                <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg max-w-md text-center">
                    <h2 className="text-2xl font-bold mb-2">¡Solicitud enviada!</h2>
                    <p>Se te contactará por Discord en el caso de ser escogido.</p>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#1c542d] p-6 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-4 border-2 border-[#0f4d1a]"
                >
                    {/* Discord */}
                    <div className="flex flex-col gap-1">
                        <label className="text-white font-semibold">Nombre de Discord</label>
                        <input
                            type="text"
                            name="discord"
                            placeholder="Ejemplo: Usuario#1234"
                            className="input input-bordered w-full bg-white text-black"
                            value={formData.discord}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* ID FC26 */}
                    <div className="flex flex-col gap-1">
                        <label className="text-white font-semibold">ID de FC26</label>
                        <input
                            type="text"
                            name="fc26Id"
                            placeholder="Tu ID de EA FC 26"
                            className="input input-bordered w-full bg-white text-black"
                            value={formData.fc26Id}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Posiciones */}
                    <div className="flex flex-col gap-1">
                        <label className="text-white font-semibold">Posición/es (por orden de preferencia)</label>
                        <input
                            type="text"
                            name="posiciones"
                            placeholder="Ej: MC, MCD, DFC"
                            className="input input-bordered w-full bg-white text-black"
                            value={formData.posiciones}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Experiencia */}
                    <div className="flex flex-col gap-1">
                        <label className="text-white font-semibold">Experiencias anteriores en clubes pro</label>
                        <textarea
                            name="experiencia"
                            placeholder="Cuéntanos tu experiencia en otros equipos..."
                            className="textarea textarea-bordered w-full bg-white text-black min-h-[100px]"
                            value={formData.experiencia}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Teléfono */}
                    <div className="flex flex-col gap-1">
                        <label className="text-white font-semibold">Número de teléfono</label>
                        <input
                            type="tel"
                            name="telefono"
                            placeholder="Ej: 612345678"
                            className="input input-bordered w-full bg-white text-black"
                            value={formData.telefono}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Botón */}
                    <button
                        type="submit"
                        className="btn bg-[#ff3333] hover:bg-[#cc0000] text-white border-none mt-2"
                    >
                        Enviar solicitud
                    </button>
                </form>
            )}
        </div>
    );
}
