export default function NewsTicker() {
  return (
    <div className="w-full bg-yellow-400 text-black text-sm sm:text-base font-medium py-1.5 px-4 overflow-hidden z-50 relative">
      <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
        <span>
          Pago por <strong>Bizum anticipado o contra reembolso</strong>
        </span>
        <span>Envío rápido a toda España. ¡Embalaje seguro incluido!</span>
        <span>
          Contáctame por Telegram: <strong>@Axel3dModels</strong>
        </span>
        {/* Repetimos para bucle continuo */}
        <span>
          Pago por <strong>Bizum anticipado o contra reembolso</strong>
        </span>
        <span>Envío rápido a toda España. ¡Embalaje seguro incluido!</span>
        <span>
          Contáctame por Telegram: <strong>@Axel3dModels</strong>
        </span>
      </div>
    </div>
  );
}
