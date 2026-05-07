"use client";

import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="visit"
      className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Fondo alineado con la paleta */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fondo.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-brand-dark/85" aria-hidden />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-brand-light text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-3">
            Cuéntanos
          </h2>
          <p className="text-brand-light/80 text-base md:text-lg max-w-xl mx-auto">
            Déjanos tu información y tu petición de oración. Estamos aquí para ti.
          </p>
        </div>

        <div className="bg-brand-dark/40 backdrop-blur-sm border border-brand-purple/30 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
