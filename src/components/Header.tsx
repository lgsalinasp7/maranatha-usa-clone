"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [nosotrosOpen, setNosotrosOpen] = useState(false);

  // Evitar scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Cerrar menú con Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Cerrar submenú cuando se cierra el menú
  useEffect(() => {
    if (!menuOpen) setNosotrosOpen(false);
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 backdrop-blur-md bg-brand-dark/80">
      <Link href="/" className="relative z-50">
        <div className="w-20 h-20 flex items-center justify-center">
          <Image
            src="/images/logoMaranatha.png"
            alt="Maranatha Logo"
            width={70}
            height={70}
            className="object-contain"
            style={{ width: "80px" }}
          />
        </div>
      </Link>

      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center gap-2 text-brand-light text-sm tracking-wide relative z-50"
      >
        <span>Menú</span>
        <div
          className={`w-10 h-5 rounded-full border border-brand-light/50 flex items-center px-0.5 transition-all ${
            menuOpen ? "bg-brand-light" : "bg-transparent"
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full transition-all ${
              menuOpen ? "bg-brand-dark translate-x-4" : "bg-brand-light translate-x-0"
            }`}
          />
        </div>
      </button>

      {/* Overlay estilo Nucleus: backdrop (izq) + panel (der) */}
      <div
        className={`fixed inset-0 z-40 flex transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop: mitad izquierda, cierra al clic */}
        <div
          className="flex-1 bg-brand-dark/50"
          onClick={() => setMenuOpen(false)}
          onKeyDown={(e) => e.key === "Enter" && setMenuOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Cerrar menú"
        />
        {/* Panel del menú: mitad derecha, desliza desde la derecha */}
        <div
          className={`w-full md:w-1/2 h-screen bg-brand-dark shadow-2xl rounded-bl-3xl flex flex-col transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-6 py-8">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-brand-light text-2xl hover:opacity-70 transition-opacity"
            >
              Inicio
            </Link>

            {/* Nosotros con submenú */}
            <div className="flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={() => setNosotrosOpen(!nosotrosOpen)}
                className="text-brand-light text-2xl hover:opacity-70 transition-opacity flex items-center gap-2"
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
                  <Link
                    href="#about"
                    onClick={() => { setMenuOpen(false); setNosotrosOpen(false); }}
                    className="text-brand-light/90 text-lg hover:opacity-70 transition-opacity"
                  >
                    Quienes somos?
                  </Link>
                  <Link
                    href="#staff"
                    onClick={() => { setMenuOpen(false); setNosotrosOpen(false); }}
                    className="text-brand-light/90 text-lg hover:opacity-70 transition-opacity"
                  >
                    Nuestros Pastores
                  </Link>
                  <Link
                    href="#vision-gade"
                    onClick={() => { setMenuOpen(false); setNosotrosOpen(false); }}
                    className="text-brand-light/90 text-lg hover:opacity-70 transition-opacity"
                  >
                    Vision GADE
                  </Link>
                  <Link
                    href="#ruta-del-creyente"
                    onClick={() => { setMenuOpen(false); setNosotrosOpen(false); }}
                    className="text-brand-light/90 text-lg hover:opacity-70 transition-opacity"
                  >
                    Ruta del Creyente
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="#staff"
              onClick={() => setMenuOpen(false)}
              className="text-brand-light text-2xl hover:opacity-70 transition-opacity"
            >
              Cobertura
            </Link>
            <Link
              href="#next-steps"
              onClick={() => setMenuOpen(false)}
              className="text-brand-light text-2xl hover:opacity-70 transition-opacity"
            >
              Reflexiones
            </Link>
            <Link
              href="#next-steps"
              onClick={() => setMenuOpen(false)}
              className="text-brand-light text-2xl hover:opacity-70 transition-opacity"
            >
              PoimenSoft
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
