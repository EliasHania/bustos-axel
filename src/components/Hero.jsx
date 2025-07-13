export default function Hero() {
  return (
    <section className="text-center px-6 py-10  max-w-3xl mx-auto">
      <p className="text-lg text-gray-300 mb-4">
        Bienvenido a mi colección de bustos 3D. Todos los modelos están ya
        impresos y disponibles para envío a cualquier parte de España.
      </p>
      <p className="text-base text-gray-400 mb-10">
        Si estás interesado en adquirir uno, contáctame directamente por
        Telegram. Puedes pagar por <strong>Bizum anticipado</strong> o{" "}
        <strong>contra reembolso</strong> cuando recibas el paquete. Yo me
        encargo del embalaje y envío por mensajería local.
      </p>

      {/* Sección profesional de la impresora */}
      <div className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 p-6 rounded-2xl shadow-2xl backdrop-blur-sm border border-gray-700">
        <p className="text-sm text-gray-400 tracking-wider uppercase font-medium mb-2">
          Tecnología de impresión
        </p>
        <h3 className="text-emerald-400 text-2xl font-semibold mb-4">
          Bambu Lab A1 Mini
        </h3>
        <img
          src="/bustos/A1-mini-2.webp"
          alt="Impresora Bambu Lab A1 Mini"
          className="mx-auto rounded-xl shadow-xl w-full max-w-sm mb-4"
        />
        <p className="text-gray-400 text-sm leading-relaxed">
          Todos los bustos han sido impresos con esta impresora de última
          generación, reconocida por su{" "}
          <span className="text-white font-medium">
            alta precisión, velocidad y fiabilidad
          </span>
          . Utiliza sistema de calibración automática, múltiples materiales y
          calidad profesional en cada capa.
        </p>
      </div>
    </section>
  );
}
