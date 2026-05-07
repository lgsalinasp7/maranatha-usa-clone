"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SCROLL_THRESHOLD_PX = 60;

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [nosotrosOpen, setNosotrosOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = pathname === "/";

  // Scroll solo en home: glassmorphism oscuro → blanco
  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!menuOpen) setNosotrosOpen(false);
  }, [menuOpen]);

  // Estilos del bar según ruta y scroll
  const getBarStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      boxSizing: "border-box",
      padding: "0 clamp(1rem, 4vw, 2.5rem)",
      transition: "all 0.35s ease",
    };
    if (isHome && !isScrolled) {
      return {
        ...base,
        background: "rgba(10, 20, 40, 0.45)",
        backdropFilter: "blur(14px) saturate(160%)",
        WebkitBackdropFilter: "blur(14px) saturate(160%)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      };
    }
    if (isHome && isScrolled) {
      return {
        ...base,
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      };
    }
    return {
      ...base,
      background: "linear-gradient(135deg, #01639C 0%, #023f6b 100%)",
    };
  };

  const isLightBar = isHome && isScrolled;
  const textColorClass = isLightBar
    ? "text-[#1a2940]"
    : "text-white";
  const textShadowStyle = isHome && !isScrolled
    ? { textShadow: "0 1px 3px rgba(0,0,0,0.4)" }
    : undefined;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[1000] w-full max-w-[100vw] overflow-hidden font-playfair"
        style={{ boxSizing: "border-box" }}
      >
        {/* Barra principal */}
        <div
          className="flex w-full items-center justify-between min-h-14 h-14 sm:min-h-16 sm:h-16 lg:min-h-[72px] lg:h-[72px]"
          style={getBarStyle()}
        >
          <Link
            href="/"
            className="relative z-50 flex items-center shrink-0 transition-all duration-300 ease-out"
            style={isLightBar ? { opacity: 1 } : {}}
          >
            <span
              className={`inline-flex items-center justify-center transition-all duration-300 ${isLightBar ? "brightness-0" : ""}`}
              style={{
                width: "clamp(40px, 10vw, 64px)",
                height: "clamp(40px, 10vw, 64px)",
              }}
            >
              <Image
                src="/images/logoMaranatha.png"
                alt="Maranatha Logo"
                width={64}
                height={64}
                className="h-full w-auto max-h-12 sm:max-h-14 lg:max-h-16 object-contain"
                style={{ width: "auto", height: "100%" }}
              />
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex items-center gap-2 text-sm tracking-wide relative z-50 transition-all duration-300 ease-out ${textColorClass}`}
            style={textShadowStyle}
          >
            <span>Menú</span>
            <div
              className={`w-9 h-5 sm:w-10 sm:h-5 rounded-full border flex items-center px-0.5 transition-all ${
                isLightBar ? "border-[#1a2940]/50" : "border-white/50"
              } ${menuOpen ? (isLightBar ? "bg-[#1a2940]" : "bg-white") : "bg-transparent"}`}
            >
              <div
                className={`w-4 h-4 rounded-full transition-all ${
                  menuOpen
                    ? isLightBar ? "bg-white translate-x-4" : "bg-[#023f6b] translate-x-4"
                    : isLightBar ? "bg-[#1a2940] translate-x-0" : "bg-white translate-x-0"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Overlay del menú: backdrop + panel */}
      <div
        className={`fixed inset-0 z-[999] flex transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="flex-1 bg-black/50"
          onClick={() => setMenuOpen(false)}
          onKeyDown={(e) => e.key === "Enter" && setMenuOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Cerrar menú"
        />
        <div
          className={`w-full md:w-1/2 h-screen bg-[#023f6b] shadow-2xl rounded-bl-3xl flex flex-col transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-6 py-8 text-white">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-xl sm:text-2xl hover:opacity-80 transition-opacity"
            >
              Inicio
            </Link>

            <div className="flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={() => setNosotrosOpen(!nosotrosOpen)}
                className="text-xl sm:text-2xl hover:opacity-80 transition-opacity flex items-center gap-2"
              >
                Nosotros
                <svg
                  className={`w-5 h-5 transition-transform ${nosotrosOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {nosotrosOpen && (
                <div className="flex flex-col items-center gap-2 pl-4">
                  <Link href="/nosotros" onClick={() => { setMenuOpen(false); setNosotrosOpen(false); }} className="text-white/90 text-lg hover:opacity-80 transition-opacity">
                    Quienes somos?
                  </Link>
                  <Link href="/nosotros#pastores" onClick={() => { setMenuOpen(false); setNosotrosOpen(false); }} className="text-white/90 text-lg hover:opacity-80 transition-opacity">
                    Nuestros Pastores
                  </Link>
                  <Link href="#vision-gade" onClick={() => { setMenuOpen(false); setNosotrosOpen(false); }} className="text-white/90 text-lg hover:opacity-80 transition-opacity">
                    Vision GADE
                  </Link>
                  <Link href="#ruta-del-creyente" onClick={() => { setMenuOpen(false); setNosotrosOpen(false); }} className="text-white/90 text-lg hover:opacity-80 transition-opacity">
                    Ruta del Creyente
                  </Link>
                </div>
              )}
            </div>

            <Link href="/nosotros#pastores" onClick={() => setMenuOpen(false)} className="text-xl sm:text-2xl hover:opacity-80 transition-opacity">
              Cobertura
            </Link>
            <Link href="https://maranatha.com.co/blog/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="text-xl sm:text-2xl hover:opacity-80 transition-opacity">
              Reflexiones
            </Link>
            <Link href="#next-steps" onClick={() => setMenuOpen(false)} className="text-xl sm:text-2xl hover:opacity-80 transition-opacity">
              PoimenSoft
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
