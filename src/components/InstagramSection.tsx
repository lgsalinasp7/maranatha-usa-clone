"use client";

import React from "react";
import Script from "next/script";

const INSTAGRAM_PROFILE = "https://www.instagram.com/maranathamc/";

export default function InstagramSection() {
  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h3 className="text-brand-dark text-3xl sm:text-4xl md:text-5xl font-medium mb-2 tracking-tight">
            Síguenos en Instagram
          </h3>
          <p className="text-brand-dark/80 text-base md:text-lg">
            Descubre las últimas novedades de <a href={INSTAGRAM_PROFILE} target="_blank" rel="noopener noreferrer" className="text-brand-mid font-medium hover:underline">@maranathamc</a>
          </p>
        </div>

        <div className="w-full min-h-[320px] md:min-h-[480px] bg-neutral-50/50 rounded-2xl p-4 sm:p-6 border border-neutral-200 shadow-sm flex justify-center items-center overflow-hidden">
          <div className="w-full">
            {React.createElement("behold-widget", { "feed-id": "kDsiTDeSzT4WDitNZH9s" })}
          </div>
        </div>

        <Script
          src="https://w.behold.so/widget.js"
          strategy="afterInteractive"
          type="module"
        />
      </div>
    </section>
  );
}
