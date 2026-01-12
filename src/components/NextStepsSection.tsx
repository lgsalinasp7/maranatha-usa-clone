import Link from "next/link";

export default function NextStepsSection() {
  return (
    <section id="next-steps" className="bg-white">
      <div className="grid lg:grid-cols-2">
        {/* Content Side */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-24 order-2 lg:order-1">
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-3">
            GET INVOLVED
          </p>

          <h2 className="text-black text-4xl md:text-5xl font-medium mb-6">
            Next Steps
          </h2>

          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
            Explore the life of our church including our vibrant ministries,
            upcoming events, and service opportunities.
          </p>

          <Link
            href="#next-steps"
            className="inline-block bg-black text-white py-4 px-10 font-medium hover:bg-gray-800 transition-colors w-fit"
          >
            Take Your Next Step
          </Link>
        </div>

        {/* Image Side */}
        <div className="relative h-80 lg:h-auto lg:min-h-[500px] order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
            alt="Church member"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
}
