import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { reflexiones, getReflexionBySlug } from "@/data/reflexiones";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return reflexiones.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const reflexion = getReflexionBySlug(slug);
  if (!reflexion) return {};
  return {
    title: `${reflexion.title} | Maranatha Montería Central`,
    description: reflexion.excerpt,
    openGraph: {
      title: reflexion.title,
      description: reflexion.excerpt,
      images: [reflexion.image],
    },
  };
}

export default async function ReflexionPage({ params }: Props) {
  const { slug } = await params;
  const reflexion = getReflexionBySlug(slug);

  if (!reflexion) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen">

        {/* HERO con imagen del artículo */}
        <section className="relative min-h-[60vh] flex items-end">
          <div className="absolute inset-0 z-0">
            <Image
              src={reflexion.image}
              alt={reflexion.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/30" />
          </div>
          <div className="relative z-10 container mx-auto px-6 pb-16 pt-36 max-w-4xl">
            <Link
              href="/reflexiones"
              className="inline-flex items-center gap-2 text-brand-light/60 hover:text-brand-light text-sm mb-6 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Volver a Reflexiones
            </Link>
            <p className="font-playfair text-brand-light/60 text-xs uppercase tracking-[0.25em] mb-4">
              {reflexion.date}
            </p>
            <h1 className="text-brand-light text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight">
              {reflexion.title}
            </h1>
          </div>
        </section>

        {/* CONTENIDO */}
        <section className="bg-white py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            {/* Excerpt destacado */}
            <p className="font-playfair text-brand-dark text-xl md:text-2xl leading-relaxed text-center italic mb-12 md:mb-16 text-brand-dark/80">
              &ldquo;{reflexion.excerpt}&rdquo;
            </p>

            <div className="h-px bg-neutral-100 mb-12" />

            {/* Párrafos del artículo */}
            <div className="space-y-6">
              {reflexion.content.map((paragraph, i) => {
                const isBibleVerse =
                  paragraph.includes("—") ||
                  paragraph.startsWith('"') ||
                  paragraph.startsWith("“");

                if (isBibleVerse) {
                  return (
                    <blockquote
                      key={i}
                      className="border-l-2 border-brand-mid pl-5 py-2 my-8"
                    >
                      <p className="font-playfair text-brand-dark text-base md:text-lg italic leading-relaxed">
                        {paragraph}
                      </p>
                    </blockquote>
                  );
                }

                return (
                  <p
                    key={i}
                    className="text-brand-dark/75 text-base md:text-lg leading-relaxed"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <div className="h-px bg-neutral-100 mt-12 mb-10" />

            {/* Navegación */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <Link
                href="/reflexiones"
                className="inline-flex items-center gap-2 text-brand-dark/60 hover:text-brand-dark text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Más reflexiones
              </Link>
              <a
                href={reflexion.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill inline-flex items-center gap-2 border border-brand-dark text-brand-dark py-3 px-7 text-sm font-semibold hover:bg-brand-dark hover:text-brand-light transition-colors"
              >
                Ver artículo original
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* OTRAS REFLEXIONES */}
        <section className="bg-neutral-50 py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-brand-dark text-2xl font-medium mb-8">
              Otras reflexiones
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reflexiones
                .filter((r) => r.slug !== reflexion.slug)
                .slice(0, 3)
                .map((r) => (
                  <Link
                    key={r.slug}
                    href={`/reflexiones/${r.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-brand-mid hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-brand-mid text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                        {r.date}
                      </p>
                      <h3 className="font-playfair text-brand-dark text-base font-medium leading-snug group-hover:text-brand-mid transition-colors">
                        {r.title}
                      </h3>
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
