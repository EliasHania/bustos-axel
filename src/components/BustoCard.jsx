import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function BustoCard({ imagenes, title }) {
  const [actual, setActual] = useState(0);
  const [lightboxAbierto, setLightboxAbierto] = useState(false);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const siguiente = () => setActual((prev) => (prev + 1) % imagenes.length);
  const anterior = () =>
    setActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);

  const abrirLightbox = () => setLightboxAbierto(true);
  const cerrarLightbox = () => setLightboxAbierto(false);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const delta = touchStartX.current - touchEndX.current;
    const umbral = 50;

    if (delta > umbral) {
      siguiente();
    } else if (delta < -umbral) {
      anterior();
    }
  };

  return (
    <>
      {/* Card del busto */}
      <div className="bg-gray-900 p-4 rounded-xl shadow-[0_0_30px_rgba(0,255,180,0.2)] hover:shadow-none transition-all duration-500 ease-in-out hover:scale-115 cursor-pointer">
        {/* Nombre del busto */}
        <h3 className="text-xl font-semibold text-center text-white mb-2">
          {title}
        </h3>

        {/* Imagen principal */}
        <div className="relative mb-4" onClick={abrirLightbox}>
          <img
            src={imagenes[actual]}
            alt={`Busto 3D - ${title}`}
            className="rounded-lg w-full h-64 object-cover"
          />
        </div>

        {/* Botón de Telegram centrado */}
        <div className="mt-4 flex justify-center">
          <a
            href={`https://t.me/Axel3dModels?text=${encodeURIComponent(
              `Estoy interesado en el busto ${title}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition"
          >
            Contactar por Telegram
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxAbierto && (
        <>
          {/* Ocultar el header mientras el lightbox está activo */}
          <style>{`header { display: none !important; }`}</style>

          <div className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center">
            {/* Botón cerrar */}
            <button
              onClick={cerrarLightbox}
              className="absolute top-16 left-1/2 -translate-x-1/2 text-white bg-black/50 hover:bg-black p-2 rounded-full z-50"
            >
              <X size={24} />
            </button>

            {/* Botón ← */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                anterior();
              }}
              className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full z-50"
            >
              <ChevronLeft size={28} className="text-white" />
            </button>

            {/* Imagen */}
            <div
              className="relative w-full max-w-4xl px-6"
              onClick={(e) => {
                e.stopPropagation();
                siguiente();
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={imagenes[actual]}
                alt={`Zoom busto - ${title}`}
                className="w-full h-auto max-h-[90vh] rounded-lg cursor-pointer"
              />
            </div>

            {/* Botón → */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                siguiente();
              }}
              className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full z-50"
            >
              <ChevronRight size={28} className="text-white" />
            </button>
          </div>
        </>
      )}
    </>
  );
}
