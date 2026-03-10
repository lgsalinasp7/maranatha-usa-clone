import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Quiénes Somos | Iglesia Cristiana Maranatha Montería Central",
  description:
    "Conoce nuestra historia, visión, valores y a nuestros pastores. Somos una familia que cree, ama y camina unida hacia el propósito eterno de Dios.",
  openGraph: {
    title: "Quiénes Somos | Iglesia Cristiana Maranatha Montería Central",
    description:
      "Conoce nuestra historia, visión, valores y a nuestros pastores en Maranatha Montería Central.",
    url: "https://www.maranathamc.com/nosotros",
  },
};

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* ========== 1. HERO QUIÉNES SOMOS ========== */}
        <section className="relative bg-brand-dark text-brand-light overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/fondo.png"
              alt=""
              fill
              className="object-cover opacity-40"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-mid/40 to-brand-dark/60" aria-hidden />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-28 sm:pt-32 md:pt-36 pb-12 md:pb-20 lg:pb-24">
            <p className="font-playfair text-brand-light/90 text-center text-sm sm:text-base uppercase tracking-[0.2em] mb-4">
              Bienvenido a Maranatha MC
            </p>
            <p className="font-playfair text-[rgba(2,51,126,0.95)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 md:mb-10 tracking-tight drop-shadow-sm">
              Somos una iglesia
            </p>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-brand-light/90 text-base sm:text-lg leading-relaxed mb-6">
                Todo comienza con una pregunta que muchas personas llevan en el corazón:
              </p>
              <p
                className="text-cyan-200 font-medium text-base sm:text-lg leading-relaxed mb-6 transition-all duration-200 cursor-default hover:text-cyan-100 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                role="text"
                aria-label="Pregunta reflexiva"
              >
                ¿Existe un lugar donde pueda encontrar a Dios, ser amado tal como soy y descubrir el propósito para el cual fui creado?
              </p>
              <p className="text-brand-light/90 text-base sm:text-lg leading-relaxed mb-6">
                En Iglesia Cristiana Maranatha Montería Central creemos que sí. Porque más que una iglesia, somos una familia. Una familia que cree, ama y camina unida hacia el propósito eterno de Dios. Aquí cada persona encuentra un hogar espiritual, un lugar donde su historia importa y donde su vida puede ser transformada por el poder de Jesucristo. Somos una iglesia apasionada por Dios y comprometida con ver vidas restauradas, familias levantadas y generaciones caminando en el diseño que el Señor preparó desde la eternidad. Creemos que la iglesia no es solo un lugar al que se asiste, sino una casa donde se pertenece. Un lugar donde los corazones son sanados, la fe es fortalecida y las personas descubren el destino que Dios escribió para ellas.
              </p>
            </div>

            {/* Sub-sección Visión - dinámica y llamativa */}
            <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
              <div className="group relative overflow-hidden rounded-2xl border border-brand-light/20 bg-gradient-to-br from-brand-mid/40 via-brand-mid/25 to-brand-purple/30 p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:shadow-cyan-500/10">
                {/* Brillo sutil de fondo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-brand-mid/10 pointer-events-none" aria-hidden />
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-400/20 transition-colors duration-500 pointer-events-none" aria-hidden />

                <div className="relative z-10">
                  {/* Título con ícono */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:bg-cyan-400/30 transition-transform duration-300" aria-hidden>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </span>
                    <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-brand-light text-center">
                      Una Iglesia con Visión
                    </h2>
                  </div>

                  {/* Frase destacada */}
                  <p className="text-cyan-200 font-medium text-lg sm:text-xl text-center mb-6 leading-snug border-l-4 border-cyan-400/60 pl-4 py-2 bg-cyan-400/5 rounded-r-lg">
                    Llenar la tierra con la gloria de Dios
                  </p>

                  <p className="text-brand-light/90 text-sm sm:text-base leading-relaxed mb-4">
                    En Maranatha Montería Central caminamos con una visión clara. Creemos que Dios está levantando un mover poderoso en nuestra ciudad y que Montería está llamada a experimentar un avivamiento que transforme vidas, hogares y comunidades. Por eso trabajamos para llevar el evangelio del Reino a cada lugar posible, extendiendo el amor de Jesús más allá de las paredes de la iglesia.
                  </p>
                  <p className="text-brand-light/90 text-sm sm:text-base leading-relaxed">
                    Nuestra visión nos impulsa a ir por toda Córdoba y predicar el evangelio a toda criatura, llevando la Palabra de Dios por medio de nuestras Casas AMAR, donde muchas personas experimentan el amor, la restauración y el poder transformador de Dios. Creemos que cuando una vida es tocada por Dios, esa vida comienza a impactar su familia, su barrio y su generación.
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-sección ADN */}
            <div className="mt-16 md:mt-20">
              <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-brand-light text-center mb-8 md:mb-10">
                Nuestro ADN
              </h2>
              <p className="text-brand-light/80 text-center max-w-2xl mx-auto mb-10 text-sm sm:text-base">
                Lo que somos como iglesia nace del corazón de Dios. Nuestro ADN está marcado por valores que reflejan el carácter de Cristo:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {[
                  { emoji: "❤️", title: "Amor", text: "Amamos a Dios con todo nuestro corazón y amamos a las personas como Jesús nos enseñó." },
                  { emoji: "🔥", title: "Pasión", text: "Vivimos apasionados por la presencia de Dios y por su Reino." },
                  { emoji: "🤲", title: "Servicio", text: "Servimos con humildad, entendiendo que cada vida es valiosa." },
                  { emoji: "💙", title: "Compasión y restauración", text: "Creemos que nadie está demasiado lejos para ser restaurado por Dios." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-brand-dark/60 border border-brand-purple/50 rounded-xl p-6 flex flex-col items-center text-center hover:border-brand-mid/50 transition-colors"
                  >
                    <span className="text-4xl mb-3" aria-hidden>{item.emoji}</span>
                    <h3 className="text-brand-light font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-brand-light/80 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mensaje de Bienvenida - Banner */}
            <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
              <div className="group relative overflow-hidden rounded-2xl border-2 border-amber-400/40 bg-gradient-to-br from-amber-500/20 via-brand-mid/35 to-brand-purple/30 p-6 sm:p-8 md:p-10 text-center transition-all duration-500 hover:border-amber-400/60 hover:shadow-[0_0_36px_rgba(251,191,36,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-amber-400/5 pointer-events-none" aria-hidden />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition-colors duration-500 pointer-events-none" aria-hidden />

                <div className="relative z-10">
                  <p className="text-brand-light font-medium text-base sm:text-lg leading-relaxed mb-6">
                    Si hoy estás buscando esperanza o un nuevo comienzo: <span className="text-amber-200">Dios tiene un plan perfecto para tu vida.</span> Este puede ser el momento de encontrarte con Él.
                  </p>
                  <blockquote className="text-amber-200/95 font-playfair text-lg sm:text-xl italic mb-6 border-l-4 border-amber-400/70 pl-4 py-1 rounded-r-lg bg-amber-400/10 max-w-2xl mx-auto text-left">
                    &ldquo;Cosas que ojo no vio, ni oído oyó, ni han subido en corazón de hombre, son las que Dios ha preparado para los que le aman.&rdquo; — 1 Corintios 2:9
                  </blockquote>
                  <p className="text-brand-light font-semibold text-lg sm:text-xl">
                    ✨ Bienvenido a Maranatha Montería Central. Hoy puede comenzar la mejor historia de tu vida con Dios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 2. CREENCIAS ========== */}
        <section id="creencias" className="bg-neutral-50 py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-3xl sm:text-4xl text-brand-dark font-medium text-center mb-4">
              ¿En qué creemos?
            </h2>
            <p className="text-brand-dark/80 text-center text-lg mb-10 max-w-3xl mx-auto">
              Lo Que Creemos. Nuestra fe está firmemente fundamentada en la Palabra de Dios, que creemos es inspirada, verdadera e inmutable desde Génesis hasta Apocalipsis.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
              {[
                "Creemos en un Dios trino: Padre, Hijo y Espíritu Santo, que gobierna con amor, poder y verdad.",
                "Creemos que Jesucristo es el Hijo de Dios, quien murió en la cruz por nuestros pecados, resucitó al tercer día y hoy vive para darnos vida eterna.",
                "Creemos que la salvación es un regalo de gracia, recibido por fe en Jesús, y que toda persona puede experimentar una nueva vida en Él.",
                "Creemos en el poder transformador del Espíritu Santo, quien guía, capacita y llena a los creyentes para vivir una vida que honre a Dios.",
                "Creemos en el poder del Reino de Dios, que trae sanidad, libertad, milagros y restauración a las vidas.",
                "Creemos en la familia como un diseño divino, donde se levantan generaciones que aman y sirven al Señor.",
                "Y creemos que cada persona fue creada con un propósito eterno, que cuando es descubierto puede impactar al mundo.",
              ].map((belief, i) => (
                <li
                  key={i}
                  className={`flex gap-3 p-4 sm:p-5 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-md hover:border-brand-mid/30 transition-all ${i === 6 ? "md:col-span-2" : ""}`}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-mid text-white flex items-center justify-center text-sm font-semibold">
                    {i + 1}
                  </span>
                  <span className="text-brand-dark/90 text-sm sm:text-base leading-relaxed">{belief}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <Link
                href="https://maranatha.com.co/wp-content/uploads/2024/12/DECLARACION-DOCTRINAL-DEL-MINISTERIO-MUNDIAL-MARANATHA.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill inline-flex items-center justify-center bg-brand-dark text-brand-light py-4 px-8 font-semibold hover:bg-brand-mid transition-colors"
              >
                LEE TODA NUESTRA DECLARACIÓN AQUÍ
              </Link>
            </div>
          </div>
        </section>

        {/* ========== 3. LIDERAZGO - NUESTROS PASTORES ========== */}
        <section id="pastores" className="bg-white py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Encabezado de sección - moderno y llamativo */}
            <div className="text-center mb-16">
              <span className="inline-block text-brand-mid text-xs font-semibold uppercase tracking-[0.25em] mb-4">
                Nuestros pastores
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-brand-dark font-medium mb-6 tracking-tight">
                <span className="relative inline-block">
                  Pastor Luis Salinas
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-mid to-transparent" aria-hidden />
                </span>
                <span className="block sm:inline sm:mx-2 mt-2 sm:mt-0"> & </span>
                <span className="relative inline-block">
                  Pastora Lily Salinas
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-mid to-transparent" aria-hidden />
                </span>
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-brand-dark/85 text-base sm:text-lg leading-relaxed relative pl-6 pr-4 py-4 text-left border-l-4 border-brand-mid/60 bg-gradient-to-r from-brand-mid/5 to-transparent rounded-r-xl">
                  Dios siempre levanta hombres y mujeres con un llamado especial para guiar, cuidar y pastorear a Su pueblo. En Iglesia Cristiana Maranatha Montería Central, ese llamado ha sido confiado al Pastor Luis Salinas y a su esposa, la Pastora Lily Salinas, quienes hoy sirven como pastores principales de nuestra casa espiritual. Bajo la autoridad nacional del Apóstol Hugo López, ellos lideran esta iglesia con una palabra de fe, autoridad espiritual y dependencia total del Espíritu Santo, creyendo firmemente en el poder de Dios para transformar vidas, restaurar familias y levantar generaciones que amen profundamente a Jesús.
                </p>
              </div>
            </div>

            {/* Imagen de los pastores - arriba (tamaño contenido, efecto espacial) */}
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden border-2 border-brand-mid/30 shadow-[0_0_0_1px_rgba(42,75,143,0.2),0_8px_32px_rgba(17,24,39,0.25),0_20px_60px_-12px_rgba(42,75,143,0.35),inset_0_1px_0_rgba(255,255,255,0.05)] group transition-all duration-500 hover:shadow-[0_0_0_1px_rgba(42,75,143,0.3),0_12px_40px_rgba(17,24,39,0.3),0_28px_80px_-16px_rgba(42,75,143,0.4),0_0_40px_rgba(34,211,238,0.08),inset_0_1px_0_rgba(255,255,255,0.08)] hover:-translate-y-1">
                {/* Brillo espacial sutil */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-white/10 ring-inset pointer-events-none z-[1]" aria-hidden />
                <div className="absolute -inset-[1px] rounded-[18px] bg-gradient-to-br from-cyan-400/20 via-transparent to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm" aria-hidden />
                <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md mx-auto">
                  <Image
                    src="/images/pastores.png"
                    alt="Pastor Luis Salinas y Pastora Lily Salinas"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.02] block"
                    sizes="(max-width: 640px) 384px, 448px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden />
                </div>
              </div>
            </div>

            {/* Una columna unificada (bios) + columna comparativa */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
              {/* Columna izquierda: bios en un solo bloque dinámico */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-brand-mid/20 bg-gradient-to-b from-white via-brand-mid/5 to-white p-6 sm:p-8 shadow-xl shadow-brand-dark/5 transition-all duration-300 hover:border-brand-mid/40 hover:shadow-[0_20px_50px_rgba(42,75,143,0.12)]">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-mid/10 rounded-full blur-3xl pointer-events-none" aria-hidden />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" aria-hidden />
                <div className="relative z-10 space-y-8">
                  {/* Pastor Luis */}
                  <div>
                    <h3 className="font-playfair text-2xl sm:text-3xl text-brand-mid font-semibold mb-4 pb-2 border-b-2 border-brand-mid/30">
                      Pastor Luis Salinas
                    </h3>
                    <p className="text-brand-dark/85 text-sm sm:text-base leading-relaxed">
                      Hombre marcado por la fe y por el llamado de Dios. A los 21 años el Señor declaró sobre su vida el propósito que tenía preparado para él. Durante 25 años sirvió y lideró en diferentes iglesias, siendo preparado en cada etapa. Hoy, junto a la Pastora Lily, pastorea Maranatha Montería Central con una palabra de fe y dependencia total del Espíritu Santo.
                    </p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-brand-mid/30 to-transparent" aria-hidden />
                  {/* Pastora Lily */}
                  <div>
                    <h3 className="font-playfair text-2xl sm:text-3xl text-brand-purple font-semibold mb-4 pb-2 border-b-2 border-brand-purple/30">
                      Pastora Lily Salinas
                    </h3>
                    <p className="text-brand-dark/85 text-sm sm:text-base leading-relaxed">
                      Mujer de Dios y ayuda idónea para el ministerio pastoral. Su vida refleja amor por Dios, sensibilidad al Espíritu Santo y un deseo profundo de ver a las nuevas generaciones en el propósito divino. Dios la usa a través de Maranatha Kids, levantando una generación profética de niños que escuchen la voz de Dios y crezcan con identidad firme en Cristo.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Parte 2: Cómo Dios los llamó - bloque dinámico */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-cyan-400/30 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_48px_rgba(34,211,238,0.12)]">
              {/* Fondo con imagen */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/fondo.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 960px"
                  priority={false}
                />
                <div className="absolute inset-0 bg-brand-dark/70" aria-hidden />
              </div>
              <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top_right,_rgba(34,211,238,0.08)_0%,_transparent_50%)] pointer-events-none" aria-hidden />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none z-[1]" aria-hidden />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m18.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <h3 className="font-playfair text-2xl sm:text-3xl text-brand-light font-semibold">
                    Cómo Dios los llamó
                  </h3>
                </div>

                <p className="text-brand-light/90 text-sm sm:text-base leading-relaxed mb-5">
                  En 2020, durante un tiempo profundo de ayuno y oración, Dios comenzó a hablar claramente a sus corazones. El Señor les reveló que había llegado el tiempo de cumplir el llamado pastoral. A través de confirmaciones y palabras proféticas, Dios fue afirmando lo que ya había mostrado en su espíritu.
                </p>

                <blockquote className="border-l-4 border-cyan-400 pl-5 py-3 mb-6 rounded-r-lg bg-cyan-400/10 text-cyan-200 font-playfair text-lg sm:text-xl italic">
                  &ldquo;Esta ciudad está bañada con la sangre de Jesús.&rdquo;
                </blockquote>

                <p className="text-brand-light/90 text-sm sm:text-base leading-relaxed mb-5">
                  Una madrugada, mientras oraban y clamaban a Dios, el Espíritu Santo les dijo que buscaran un mapa: el lugar marcado en rojo sería la ciudad a la cual Él los enviaba. Cuando abrieron el mapa, la ciudad marcada en rojo era <strong className="text-cyan-200">Montería</strong>. La presencia de Dios fue tan fuerte que ambos experimentaron algo profundamente sobrenatural y supieron que Montería era el lugar donde Dios los estaba enviando.
                </p>

                <p className="text-brand-light/90 text-sm sm:text-base leading-relaxed">
                  Desde entonces han dedicado sus vidas a pastorear esta ciudad. Llevan más de tres años liderando Maranatha Montería Central, tiempo en el que muchas vidas han sido transformadas y familias levantadas. El Señor ha abierto puertas para predicar el evangelio en Planeta Rica, Caucasia y Tierralta, llevando el mensaje del Reino a nuevas ciudades y comunidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 4. HORARIOS (tarjetas + transmisión en vivo) ========== */}
        <section id="horarios" className="bg-brand-dark py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-3xl sm:text-4xl text-brand-light font-medium text-center mb-10">
              Horarios
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Servicio Dominical", time: "Domingo 9:00 am", color: "cyan" },
                { title: "Escuela de Oración", time: "Martes 6:30 pm", color: "blue" },
                { title: "Casas AMAR", time: "Jueves 7:00 pm", color: "orange" },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl p-6 border-2 bg-brand-dark/60 flex flex-col justify-between min-h-[180px] ${
                    item.color === "cyan"
                      ? "border-cyan-400/60 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]"
                      : item.color === "blue"
                      ? "border-blue-400/60 hover:shadow-[0_0_24px_rgba(59,130,246,0.25)]"
                      : "border-orange-400/60 hover:shadow-[0_0_24px_rgba(251,146,60,0.25)]"
                  } transition-all duration-300`}
                >
                  <div>
                    <h3 className="text-brand-light font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-brand-light/80 text-sm">{item.time}</p>
                  </div>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-brand-light text-brand-dark py-2.5 px-5 rounded-full text-sm font-medium hover:bg-white transition-colors w-full sm:w-auto"
                  >
                    Transmisión en vivo
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 5. BLOG / RECURSOS - Edifica tu fe ========== */}
        <section id="recursos" className="bg-neutral-50 py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl sm:text-4xl text-brand-dark font-medium text-center mb-4">
              Edifica tu fe
            </h2>
            <p className="text-brand-dark/70 text-center mb-10 max-w-2xl mx-auto">
              Recursos, reflexiones y contenido para fortalecer tu vida espiritual.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <article
                  key={n}
                  className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-brand-mid/20 relative" />
                  <div className="p-5">
                    <h3 className="font-playfair text-brand-dark font-semibold text-lg mb-2">
                      Título del recurso {n}
                    </h3>
                    <p className="text-brand-dark/70 text-sm leading-relaxed">
                      Breve descripción de relleno para la tarjeta de recursos. Puedes reemplazar con contenido real.
                    </p>
                    <Link
                      href="#"
                      className="inline-block mt-3 text-brand-mid font-medium text-sm hover:underline"
                    >
                      Leer más →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
