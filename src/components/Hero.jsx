import React from 'react';
import { ArrowDown } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function Hero({ onOpenReservation }) {
  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      {/* Top Tagline Pill */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 border border-[#DFD5C4] bg-[#FCFAF6] rounded-full px-5 py-1.5 shadow-xs">
          <span className="text-[11px] md:text-xs font-medium tracking-wide text-[#5C4D44]">
            Made with <span className="text-[#B83A28] font-semibold">Love</span> Served with <span className="text-[#241614] font-semibold">Joy</span>
          </span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-normal leading-[1.05] tracking-[-0.02em] text-[#241614] max-w-4xl mx-auto">
          Experience the <br className="hidden sm:inline" />
          <span className="italic font-serif">Language of Taste</span>
        </h1>
      </div>

      {/* Hero Image Container with overlapping Circular CTA Button */}
      <div className="relative mx-auto mt-8 md:mt-12">
        {/* Overlapping Circular Reserve Button */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <button
            onClick={onOpenReservation}
            className="group w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#B83A28] hover:bg-[#A02F1F] text-white flex flex-col items-center justify-center p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer ring-4 ring-[#FAF6EE]"
            aria-label="Reserve a Table"
          >
            <div className="mb-1 transform group-hover:translate-y-0.5 transition-transform duration-200">
              <ArrowDown size={18} strokeWidth={2.5} />
            </div>
            <span className="text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-wider text-center leading-tight">
              RESERVE A<br />TABLE
            </span>
          </button>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[360px] sm:h-[460px] md:h-[540px] lg:h-[620px] rounded-2xl md:rounded-[36px] overflow-hidden shadow-md border border-[#E5DCCE] relative">
          <img
            src={getAssetUrl('/images/hero-restaurant.jpg')}
            alt="Drizzle luxury restaurant dining interior"
            className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 hover:scale-102"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
