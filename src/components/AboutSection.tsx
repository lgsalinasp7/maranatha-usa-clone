import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-white text-4xl md:text-5xl font-medium mb-8">
          Live a Life Abundant in Jesus
        </h2>

        <p className="text-gray-400 text-base leading-relaxed mb-6">
          At Life Abundant Church, we believe that true growth in faith comes
          from worshipping and learning together. Our church is dedicated to
          creating a space that encourages spiritual growth and connection.
        </p>

        <p className="text-gray-400 text-base leading-relaxed mb-6">
          We offer opportunities to engage with scripture, to learn about Jesus
          and to worship Him with others. Our church is open to people of all
          ages and backgrounds.
        </p>

        <p className="text-gray-400 text-base leading-relaxed mb-10">
          Join us in growing in faith with people who love and obey Jesus.
        </p>

        <Link
          href="#about"
          className="inline-block bg-[#1a1a1a] text-white py-4 px-10 font-medium hover:bg-[#2a2a2a] transition-colors"
        >
          About Us
        </Link>
      </div>
    </section>
  );
}
