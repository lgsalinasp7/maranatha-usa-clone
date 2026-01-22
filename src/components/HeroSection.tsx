"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Asegurar que el video se reproduzca
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error al reproducir el video:", error);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Imagen de respaldo por si el video no carga */}
        <img
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
          alt="Reunión de la iglesia"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
          onError={(e) => {
            console.error("Error al cargar el video:", e);
            
            if (videoRef.current) {
              videoRef.current.style.display = "none";
            }
          }}
        >
          <source src="/video/backgraundHero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: 2 }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
            Una iglesia
            <br />
            de Fe Amor
            <br />
            y Poder.
          </h1>
        </div>

        <div className="lg:max-w-md">
          <h2 className="text-white text-xl font-semibold mb-4">
            Únete esta Semana
          </h2>
          <p className="text-white/80 text-base mb-8 leading-relaxed">
          Un lugar donde Dios transforma vidas y
          forma discípulos que aman a Jesús y caminan en Su verdad..
          </p>

          <div className="flex flex-col gap-4 max-w-xs">
            <Link
              href="#visit"
              className="bg-white text-black py-4 px-8 text-center font-medium hover:bg-white/90 transition-colors"
            >
              Visitanos
            </Link>
            <Link
              href="#next-steps"
              className="border border-white text-white py-4 px-8 text-center font-medium hover:bg-white hover:text-black transition-colors"
            >
              Involúcrate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
