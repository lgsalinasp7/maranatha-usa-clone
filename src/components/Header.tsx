"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5">
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
        className="flex items-center gap-2 text-white text-sm tracking-wide relative z-50"
      >
        <span>Menú</span>
        <div
          className={`w-10 h-5 rounded-full border border-white/50 flex items-center px-0.5 transition-all ${
            menuOpen ? "bg-white" : "bg-transparent"
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full transition-all ${
              menuOpen ? "bg-black translate-x-4" : "bg-white translate-x-0"
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full md:w-1/2 h-screen bg-black z-40 transition-transform duration-300 rounded-bl-3xl shadow-2xl ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:opacity-70 transition-opacity"
          >
            Nosotros
          </Link>
          <Link
            href="#visit"
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:opacity-70 transition-opacity"
          >
            Visitanos
          </Link>
          <Link
            href="#sermons"
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:opacity-70 transition-opacity"
          >
            Covertura y Pastores
          </Link>
          <Link
            href="#staff"
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:opacity-70 transition-opacity"
          >
            Personal y Líderes
          </Link>
          <Link
            href="#calendar"
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:opacity-70 transition-opacity"
          >
            Calendario
          </Link>
          <Link
            href="#next-steps"
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:opacity-70 transition-opacity"
          >
            Próximos Pasos
          </Link>
        </nav>
      </div>
    </header>
  );
}
