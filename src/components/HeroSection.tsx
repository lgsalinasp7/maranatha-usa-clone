import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
          alt="Church gathering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
            Grow in
            <br />
            faith with
            <br />
            people
            <br />
            who love
            <br />
            Jesus.
          </h1>
        </div>

        <div className="lg:max-w-md">
          <h2 className="text-white text-xl font-semibold mb-4">
            Join us this week
          </h2>
          <p className="text-white/80 text-base mb-8 leading-relaxed">
            Our church is dedicated to creating a space that encourages
            spiritual growth and connection.
          </p>

          <div className="flex flex-col gap-4 max-w-xs">
            <Link
              href="#visit"
              className="bg-white text-black py-4 px-8 text-center font-medium hover:bg-white/90 transition-colors"
            >
              Plan a Visit
            </Link>
            <Link
              href="#next-steps"
              className="border border-white text-white py-4 px-8 text-center font-medium hover:bg-white hover:text-black transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <a
        href="https://www.nucleus.church/get-started"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 left-6 bg-white/95 rounded-lg py-3 px-4 flex items-center gap-3 hover:bg-white transition-colors"
      >
        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">N</span>
        </div>
        <div>
          <p className="text-black text-sm font-semibold">Get started today</p>
          <p className="text-gray-600 text-xs">
            Join thousands of churches on Nucleus.
          </p>
        </div>
      </a>
    </section>
  );
}
