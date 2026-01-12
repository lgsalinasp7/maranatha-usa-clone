"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5">
      <Link href="/" className="relative z-50">
        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
          <span className="text-white text-xl font-bold">LA</span>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center gap-2 text-white text-sm tracking-wide relative z-50"
      >
        <span>Menu</span>
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
        className={`fixed inset-0 bg-black z-40 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:opacity-70 transition-opacity"
          >
            About Us
          </Link>
          <Link
            href="#visit"
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:opacity-70 transition-opacity"
          >
            Plan A Visit
          </Link>
          <Link
            href="#sermons"
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:opacity-70 transition-opacity"
          >
            Sermons
          </Link>
          <Link
            href="#staff"
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:opacity-70 transition-opacity"
          >
            Staff & Leaders
          </Link>
          <Link
            href="#calendar"
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:opacity-70 transition-opacity"
          >
            Calendar
          </Link>
          <Link
            href="#next-steps"
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:opacity-70 transition-opacity"
          >
            Next Steps
          </Link>
        </nav>
      </div>
    </header>
  );
}
