import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-neutral-50 py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl font-medium mb-8 md:mb-12 text-center leading-tight">
          Mas que una Iglesia somos una Familia
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {/* Columna 1: Mapa de Córdoba con 3 puntos */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-0 flex flex-col items-center justify-end min-h-[300px] sm:min-h-[350px] overflow-hidden relative group">
            <div className="absolute inset-0 w-full h-full p-4 flex items-center justify-center">
              <div className="relative w-full h-[120%] -top-5 sm:-top-10">
                <Image
                  src="/images/mapacordoba_v2.png"
                  alt="Mapa de Córdoba con 3 puntos de ubicación"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 mix-blend-screen"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center p-6 sm:p-8 mt-auto w-full text-center">
              <span className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-wide drop-shadow-lg">Córdoba</span>
              <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm text-neutral-300 font-medium">
                <span className="bg-white/10 px-2 sm:px-3 py-1 rounded-full border border-white/10">Montería</span>
                <span className="bg-white/10 px-2 sm:px-3 py-1 rounded-full border border-white/10">Planeta Rica</span>
                <span className="bg-white/10 px-2 sm:px-3 py-1 rounded-full border border-white/10">Tierralta</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Visión en Acción */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center text-center order-first lg:order-none shadow-sm">
            <h3 className="text-neutral-900 text-xl sm:text-2xl font-bold mb-4 sm:mb-6 tracking-wide">
              VISIÓN EN ACCIÓN
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-4">
              Ir por toda Córdoba<br className="hidden sm:block" /> y predicar el evangelio a toda criatura.
            </p>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Llevándoles la Palabra por medio de las casas<br className="hidden lg:block" /> amar{' '}
              con señales, prodigios y milagros,<br className="hidden lg:block" />
              para así establecer familias restauradas<br className="hidden lg:block" />
              que manifiesten el Reino de Dios en cada lugar.
            </p>
          </div>

          {/* Columna 3: Montería */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-0 flex flex-col items-center justify-end min-h-[300px] sm:min-h-[350px] relative overflow-hidden group">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/Monteria-parnoamica-rio-sinu.jpeg"
                alt="Montería Río Sinú"
                fill
                className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center p-6 sm:p-8 mt-auto w-full">
              <span className="text-2xl sm:text-3xl font-bold text-white mb-1 tracking-wide drop-shadow-lg text-center">Montería</span>
              <span className="text-base sm:text-lg text-gray-300 font-medium drop-shadow-md">Río Sinú</span>
            </div>
          </div>
        </div>

        {/* Anuncios - sección oscura, desde aquí se intercala */}
        <div className="mt-20 -mx-4 sm:-mx-6 px-4 sm:px-6 py-16 md:py-20 bg-[#0a0a0a]">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-white text-2xl sm:text-3xl font-medium mb-8 text-center">
              Anuncios
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Anuncio 1 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors duration-300 group overflow-hidden relative">
                <div className="w-24 h-24 relative mb-4 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 overflow-hidden rounded-full">
                  <Image
                    src="/images/praying_hands.png"
                    alt="Manos Orando"
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h4 className="text-white text-lg font-bold mb-2 relative z-10">Escuela de oración e intercesión</h4>
                <p className="text-neutral-400 font-medium relative z-10">Martes 6:30 pm</p>
              </div>

              {/* Anuncio 2 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors duration-300 group overflow-hidden relative">
                <div className="w-24 h-24 relative mb-4 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 overflow-hidden rounded-full">
                  <Image
                    src="/images/open_bible.png"
                    alt="Biblia Abierta"
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h4 className="text-white text-lg font-bold mb-2 relative z-10">Casas Amar</h4>
                <p className="text-neutral-400 font-medium relative z-10">Jueves 7:00 pm</p>
              </div>

              {/* Anuncio 3 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors duration-300 group overflow-hidden relative">
                <div className="w-24 h-24 relative mb-4 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 overflow-hidden rounded-full">
                  <Image
                    src="/images/flying_dove.png"
                    alt="Paloma Volando"
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h4 className="text-white text-lg font-bold mb-2 relative z-10">Servicio Dominical</h4>
                <p className="text-neutral-400 font-medium relative z-10">Domingo 9:00 am</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
