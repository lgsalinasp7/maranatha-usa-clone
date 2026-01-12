import Link from "next/link";

export default function PlanVisitSection() {
  return (
    <section id="visit" className="bg-white">
      <div className="grid lg:grid-cols-2">
        {/* Image Side */}
        <div className="relative h-80 lg:h-auto lg:min-h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
            alt="Church community"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-24">
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-3">
            11:00 A.M. ON SUNDAYS
          </p>

          <h2 className="text-black text-4xl md:text-5xl font-medium mb-6">
            Plan Your
            <br />
            Visit
          </h2>

          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
            Join us in person! We&apos;d love to host you. Find service times,
            directions, and everything else you need to know when visiting us
            for the first time by clicking the button below.
          </p>

          <Link
            href="#visit"
            className="inline-block bg-black text-white py-4 px-10 font-medium hover:bg-gray-800 transition-colors w-fit"
          >
            Plan A Visit
          </Link>
        </div>
      </div>
    </section>
  );
}
