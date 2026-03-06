import Link from "next/link";

export default function NextStepsSection() {
  return (
    <section id="next-steps" className="bg-neutral-50">
      <div className="grid lg:grid-cols-2">
        {/* Content Side */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-16 order-2 lg:order-1">
          <p className="text-neutral-500 text-sm tracking-widest uppercase mb-3">
            INVOLÚCRATE
          </p>

          <h2 className="text-neutral-900 text-4xl md:text-5xl font-medium mb-6">
            Próximos Pasos
          </h2>

          <p className="text-neutral-600 text-base leading-relaxed mb-8 max-w-md">
            Explora la vida de nuestra iglesia, incluyendo nuestros ministerios
            dinámicos, eventos próximos y oportunidades de servicio.
          </p>

          <Link
            href="#next-steps"
            className="btn-pill inline-block bg-neutral-900 text-white py-4 px-10 hover:bg-neutral-800 w-fit"
          >
            Da tu Próximo Paso
          </Link>
        </div>

        {/* Image Side */}
        <div className="relative h-80 lg:h-auto lg:min-h-[500px] order-1 lg:order-2 overflow-hidden lg:rounded-l-2xl">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
            alt="Miembro de la iglesia"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
}
