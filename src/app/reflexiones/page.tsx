import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { reflexiones } from "@/data/reflexiones";

export const metadata: Metadata = {
  title: "Reflexiones | Iglesia Cristiana Maranatha Montería Central",
  description:
    "Enseñanzas bíblicas para tu vida diaria. Artículos que te ayudarán a crecer en tu fe y caminar más cerca de Dios.",
  openGraph: {
    title: "Reflexiones | Iglesia Cristiana Maranatha Montería Central",
    description:
      "Enseñanzas bíblicas para tu vida diaria desde Maranatha Montería Central.",
    url: "https://www.maranathamc.com/reflexiones",
  },
};

export default function ReflexionesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">

        {/* HERO */}
        <section className="relative min-h-[55vh] flex items-end">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/fondo.png"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-brand-dark/70" />
          </div>
          <div className="relative z-10 container mx-auto px-6 pb-16 pt-36">
            <p className="font-playfair text-brand-light/60 text-xs uppercase tracking-[0.25em] mb-4">
              Maranatha Montería Central
            </p>
            <h1 className="text-brand-light text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight max-w-3xl">
              Reflexiones
            </h1>
            <p className="text-brand-light/70 text-base mt-4 max-w-xl leading-relaxed">
              Enseñanzas bíblicas para fortalecer tu fe y caminar más cerca de Dios en el día a día.
            </p>
          </div>
        </section>

        {/* GRID DE ARTÍCULOS */}
        <section className="bg-neutral-50 py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {reflexiones.map((reflexion) => (
                <Link
                  key={reflexion.slug}
                  href={`/reflexiones/${reflexion.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-brand-mid hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  {/* Imagen */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={reflexion.image}
                      alt={reflexion.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-brand-mid text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                      {reflexion.date}
                    </p>
                    <h2 className="font-playfair text-brand-dark text-xl font-medium leading-snug mb-3 group-hover:text-brand-mid transition-colors">
                      {reflexion.title}
                    </h2>
                    <p className="text-brand-dark/65 text-sm leading-relaxed flex-1">
                      {reflexion.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-1 text-brand-mid text-sm font-semibold">
                      Leer más
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
