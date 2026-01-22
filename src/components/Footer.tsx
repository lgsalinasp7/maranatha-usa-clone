import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src="/images/logoMaranatha.png"
                  alt="Maranatha Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                  style={{ width: "80px" }}
                />
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4">
              Nos reunimos los domingos a las 11:00 a.m.
            </p>

            <p className="text-gray-400 text-sm mb-8">
              No importa la situación, siempre puedes sentirte libre de
              contactarnos, incluso si solo es para saludar.
            </p>

            <div className="flex flex-col gap-4">
              <Link
                href="#"
                className="inline-block bg-white text-black py-3 px-8 text-center font-medium hover:bg-gray-200 transition-colors"
              >
                Saluda
              </Link>
              <Link
                href="#next-steps"
                className="inline-block border border-white text-white py-3 px-8 text-center font-medium hover:bg-white hover:text-black transition-colors"
              >
                Da tu Próximo Paso
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <a
                href="mailto:contacto@maranathamc.com"
                className="block text-white underline hover:no-underline"
              >
                contacto@maranathamc.com
              </a>

              <a
                href="tel:+573046532363"
                className="block text-white underline hover:no-underline"
              >
                +57 3046532363
              </a>

              <address className="not-italic text-white">
                Centro, calle 30 # 10-109
                <br />
                Montería - Córdoba
              </address>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <nav className="space-y-4">
              <Link
                href="#visit"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Visitanos
              </Link>
              <Link
                href="#sermons"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Predicaciones
              </Link>
              <Link
                href="#calendar"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Calendario
              </Link>
            </nav>
          </div>

          {/* More Links */}
          <div className="lg:col-span-1">
            <nav className="space-y-4 mb-8">
              <Link
                href="#about"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Acerca de Nosotros
              </Link>
              <Link
                href="#staff"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Personal y Líderes
              </Link>
              <Link
                href="#next-steps"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Próximos Pasos
              </Link>
              <Link
                href="#"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Oración
              </Link>
              <Link
                href="#"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Ofrendar
              </Link>
            </nav>

            <div>
              <h4 className="text-white font-semibold mb-4">Redes Sociales</h4>
              <nav className="space-y-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white underline hover:no-underline"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white underline hover:no-underline"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white underline hover:no-underline"
                >
                  YouTube
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Copyright 2026 Iglesia Maranatha
          </p>
          <p className="text-gray-500 text-sm">Todos los Derechos Reservados.</p>
          <a
            href="https://www.nucleus.church"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-sm underline hover:no-underline mt-4 inline-block"
          >
            Desarrollado por Nucleus
          </a>
        </div>
      </div>
    </footer>
  );
}
