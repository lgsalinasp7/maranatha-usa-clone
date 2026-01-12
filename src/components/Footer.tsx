import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-black text-lg font-bold">LA</span>
              </div>
              <div>
                <span className="text-lg font-medium">life abundant</span>
                <p className="text-xs text-gray-400">CHURCH</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4">
              Meeting at 11:00 a.m. on Sundays.
            </p>

            <p className="text-gray-400 text-sm mb-8">
              No matter the situation, you can always feel free to reach out,
              even if it&apos;s just to say hi
            </p>

            <div className="flex flex-col gap-4">
              <Link
                href="#"
                className="inline-block bg-white text-black py-3 px-8 text-center font-medium hover:bg-gray-200 transition-colors"
              >
                Say Hello
              </Link>
              <Link
                href="#next-steps"
                className="inline-block border border-white text-white py-3 px-8 text-center font-medium hover:bg-white hover:text-black transition-colors"
              >
                Take Your Next Step
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <a
                href="mailto:hello@lifeabundant.la"
                className="block text-white underline hover:no-underline"
              >
                hello@lifeabundant.la
              </a>

              <a
                href="tel:+12135554977"
                className="block text-white underline hover:no-underline"
              >
                +1 213-555-4977
              </a>

              <address className="not-italic text-white">
                727 Alexander Blvd.
                <br />
                Los Angeles, California 90066
                <br />
                USA
              </address>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <nav className="space-y-4">
              <Link
                href="#visit"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Plan A Visit
              </Link>
              <Link
                href="#sermons"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Sermons
              </Link>
              <Link
                href="#calendar"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Calendar
              </Link>
            </nav>
          </div>

          {/* More Links */}
          <div className="lg:col-span-1">
            <nav className="space-y-4 mb-8">
              <Link
                href="#about"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#staff"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Staff & Leaders
              </Link>
              <Link
                href="#next-steps"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Next Steps
              </Link>
              <Link
                href="#"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Prayer
              </Link>
              <Link
                href="#"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Give
              </Link>
            </nav>

            <div>
              <h4 className="text-white font-semibold mb-4">Social Media</h4>
              <nav className="space-y-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white underline hover:no-underline"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white underline hover:no-underline"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white underline hover:no-underline"
                >
                  YouTube
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Copyright 2026 Life Abundant Church
          </p>
          <p className="text-gray-500 text-sm">All Rights Reserved.</p>
          <a
            href="https://www.nucleus.church"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-sm underline hover:no-underline mt-4 inline-block"
          >
            Powered by Nucleus
          </a>
        </div>
      </div>
    </footer>
  );
}
