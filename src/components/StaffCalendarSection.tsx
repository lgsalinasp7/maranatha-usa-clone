import Link from "next/link";
import Image from "next/image";

export default function StaffCalendarSection() {
  return (
    <section className="bg-[#0a0a0a]">
      {/* Images Row */}
      <div className="grid grid-cols-2">
        <div className="relative h-64 md:h-80">
          <Image
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop"
            alt="Reunión de la comunidad"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-64 md:h-80">
          <Image
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
            alt="Adoración"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Row */}
      <div className="grid md:grid-cols-2">
        {/* Staff & Leaders */}
        <div id="staff" className="px-8 lg:px-16 py-12">
          <p className="text-neutral-500 text-sm tracking-widest uppercase mb-3">
            CONOCE NUESTRA COVERTURA
          </p>

          <h2 className="text-neutral-900 text-3xl md:text-4xl font-medium mb-6">
            NUESTROS PASTORES
          </h2>

          <p className="text-neutral-600 text-base leading-relaxed mb-8 max-w-sm">
            Somos una iglesia internacional formada por Apostoles y pastores regionales,
            que nos unen en el amor de Cristo y la misión de llevar el evangelio a todo el mundo.
          </p>

          <Link
            href="#staff"
            className="btn-pill inline-block bg-white text-black py-4 px-8 hover:bg-neutral-100"
          >
            Nuestro Personal y Líderes
          </Link>
        </div>

        {/* Calendar */}
        <div id="calendar" className="px-8 lg:px-16 py-12">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-3">
            NUESTRO CALENDARIO
          </p>

          <h2 className="text-white text-3xl md:text-4xl font-medium mb-6">
            Descubre lo que
            <br />
            está Sucediendo
          </h2>

          <p className="text-neutral-400 text-base leading-relaxed mb-8 max-w-sm">
            Revisa los eventos de este mes para descubrir qué está pasando y
            cómo puedes involucrarte. Explora la lista completa de ministerios
            y servicios próximos.
          </p>

          <Link
            href="#calendar"
            className="btn-pill inline-block bg-white text-black py-4 px-8 hover:bg-neutral-100"
          >
            Nuestro Calendario
          </Link>
        </div>
      </div>
    </section>
  );
}
