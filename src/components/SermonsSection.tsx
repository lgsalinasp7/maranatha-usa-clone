import Link from "next/link";

export default function SermonsSection() {
  return (
    <section id="sermons" className="bg-[#2d3033] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-medium mb-6">
            Únete a la
            <br />
            Conversación
          </h2>

          <p className="text-gray-400 text-base leading-relaxed max-w-xl mx-auto">
            Haz clic aquí para escuchar la última predicación, enseñanza o
            evento de nuestros servicios. Sigue tomando tus propias notas y
            únete al diálogo que estamos teniendo sobre Jesús.
          </p>
        </div>

        {/* Sermon Card */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Video Thumbnail */}
          <div className="relative w-full md:w-[400px] h-64 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=2070&auto=format&fit=crop"
              alt="Miniatura de predicación"
              className="w-full h-full object-cover"
            />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white">
                <svg
                  className="w-6 h-6 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Sermon Info */}
          <div className="flex-1">
            <h3 className="text-white text-2xl md:text-3xl font-medium mb-3">
              Herido por la
              <br />
              Comunidad
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              ¿Has sido herido por la comunidad? ¿Cómo respondes cuando eres
              lastimado por las personas más cercanas a ti? ¿Cómo puedes
              comenzar...
            </p>

            <p className="text-gray-500 text-sm mb-6">
              <span className="underline">Pastor Principal</span> &middot;
              6/4/2023
            </p>

            <Link
              href="#sermons"
              className="inline-block bg-white text-black py-4 px-8 font-medium hover:bg-gray-200 transition-colors"
            >
              Ver Predicación
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
