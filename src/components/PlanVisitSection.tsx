import Link from "next/link";

export default function PlanVisitSection() {
  return (
    <section id="visit" className="bg-neutral-50">
      <div className="grid lg:grid-cols-2">
        {/* Image Side */}
        <div className="relative h-80 lg:h-auto lg:min-h-[500px] overflow-hidden lg:rounded-r-2xl">
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
            alt="Comunidad de la iglesia"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-16">
          <p className="text-neutral-500 text-sm tracking-widest uppercase mb-3">
            10:00 A.M. LOS DOMINGOS
          </p>

          <h2 className="text-neutral-900 text-4xl md:text-5xl font-medium mb-6">
            Visitanos
          </h2>

          <p className="text-neutral-600 text-base leading-relaxed mb-8 max-w-md">
            ¡Únete a nosotros en persona! Nos encantaría recibirte. Encuentra los
            horarios de los servicios, direcciones y todo lo que necesitas saber
            al visitarnos por primera vez haciendo clic en el botón de abajo.
          </p>

          <Link
            href="#visit"
            className="btn-pill inline-block bg-neutral-900 text-white py-4 px-10 hover:bg-neutral-800 w-fit"
          >
            Contactanos
          </Link>
        </div>
      </div>
    </section>
  );
}
