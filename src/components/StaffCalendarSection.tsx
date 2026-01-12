import Link from "next/link";

export default function StaffCalendarSection() {
  return (
    <section className="bg-black">
      {/* Images Row */}
      <div className="grid grid-cols-2">
        <div className="relative h-64 md:h-80">
          <img
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop"
            alt="Church community gathering"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-64 md:h-80">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
            alt="Church worship"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Row */}
      <div className="grid md:grid-cols-2">
        {/* Staff & Leaders */}
        <div id="staff" className="px-8 lg:px-16 py-16">
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-3">
            MEET OUR TEAM
          </p>

          <h2 className="text-white text-3xl md:text-4xl font-medium mb-6">
            Staff & Leaders
          </h2>

          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm">
            Our dedicated team of pastors and staff are here to provide
            spiritual guidance and support - as well as resources to help you on
            your faith journey.
          </p>

          <Link
            href="#staff"
            className="inline-block bg-white text-black py-4 px-8 font-medium hover:bg-gray-200 transition-colors"
          >
            Our Staff & Leaders
          </Link>
        </div>

        {/* Calendar */}
        <div id="calendar" className="px-8 lg:px-16 py-16">
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-3">
            OUR CALENDAR
          </p>

          <h2 className="text-white text-3xl md:text-4xl font-medium mb-6">
            See What&apos;s
            <br />
            Happening
          </h2>

          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm">
            Check out this month&apos;s events to find out what&apos;s happening
            and how you can be involved. Explore the full list of upcoming
            ministries and services.
          </p>

          <Link
            href="#calendar"
            className="inline-block bg-white text-black py-4 px-8 font-medium hover:bg-gray-200 transition-colors"
          >
            Our Calendar
          </Link>
        </div>
      </div>
    </section>
  );
}
