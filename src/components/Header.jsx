import { useEffect, useState } from "react";
import icono from "/bustos/axel-icono.webp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-[32px] left-0 w-full pt-6 z-40 flex justify-center pointer-events-none">
      <div
        className={`flex items-center gap-3 px-4 py-2 rounded-full shadow-lg transition-all duration-500 pointer-events-auto cursor-pointer ${
          scrolled ? "bg-black/80 backdrop-blur-md" : "bg-black/50"
        }`}
      >
        <img
          src={icono}
          alt="Logo Axel 3D"
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full shadow hover:scale-105 transition-transform duration-300"
        />
        <p className="text-sm text-white font-medium" onClick={scrollToTop}>
          Impresiones 3D de alta calidad
        </p>
      </div>
    </header>
  );
}
