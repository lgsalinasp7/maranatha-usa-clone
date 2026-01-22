import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-white text-4xl md:text-5xl font-medium mb-8">
          Mas que una Iglesia somos una Familia
        </h2>

        <p className="text-gray-400 text-base leading-relaxed mb-6">
        En la Iglesia Maranatha MC, creemos que el verdadero crecimiento
        en la fe ocurre cuando adoramos a Dios y caminamos juntos en Su Palabra.
        </p>

        <p className="text-gray-400 text-base leading-relaxed mb-6">
        Somos una iglesia comprometida con crear un ambiente donde el Espíritu Santo
        transforma vidas, fortalece la comunión y despierta el propósito de Dios en cada persona.
        </p>

        <p className="text-gray-400 text-base leading-relaxed mb-10">
        Aquí encontrarás oportunidades para conocer las Escrituras, crecer como discípulo de Jesús y adorarle en comunidad.
        Nuestra iglesia está abierta para personas de todas las edades y trasfondos, unidas por un mismo amor: Jesús.
        </p>

        <Link
          href="#about"
          className="inline-block bg-[#1a1a1a] text-white py-4 px-10 font-medium hover:bg-[#2a2a2a] transition-colors"
        >
          Acerca de Nosotros
        </Link>
      </div>
    </section>
  );
}
