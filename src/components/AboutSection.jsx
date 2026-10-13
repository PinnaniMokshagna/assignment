import React, { useState } from 'react';
import { ArrowUpRight, Star, X } from 'lucide-react';

export default function AboutSection() {
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-[#E8E0D2]">
      {/* Top Header Row with Kicker on Right */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 md:mb-12">
        <div>
          <span className="inline-block border border-[#D8CEBE] bg-[#FCFAF6] rounded-full px-4 py-1.5 text-[11px] font-medium tracking-wider uppercase text-[#5C4D44]">
            Know About Us
          </span>
        </div>
        <div>
          <span className="text-xs sm:text-sm font-normal text-[#6B5B52] tracking-wide">
            Experience the perfect <span className="font-semibold text-[#241614]">harmony of heritage</span>
          </span>
        </div>
      </div>

      {/* Main 2-column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Headline, Story CTA, & Customer Social Proof */}
        <div className="lg:col-span-7 space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal leading-[1.15] tracking-tight text-[#241614]">
            Blending tradition & innovation to create unforgettable dining experiences
          </h2>

          <p className="text-xs sm:text-sm text-[#6B5B52] leading-relaxed max-w-xl">
            At Drizzle, every dish is an ode to timeless culinary craftsmanship reimagined through contemporary flair. We bring together artisanal heritage, seasonal market-fresh produce, and passionate gastronomy.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            {/* Read Story Button */}
            <button
              onClick={() => setShowStoryModal(true)}
              className="bg-[#B83A28] hover:bg-[#A02F1F] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <span>READ OUR STORY</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Satisfied Customers Social Proof */}
            <div className="flex items-center gap-3">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  src="/images/avatar-1.jpg"
                  alt="Satisfied customer review"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FAF6EE] object-cover"
                />
                <img
                  src="/images/avatar-2.jpg"
                  alt="Satisfied customer review"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FAF6EE] object-cover"
                />
                <img
                  src="/images/avatar-3.jpg"
                  alt="Satisfied customer review"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FAF6EE] object-cover"
                />
              </div>

              {/* Review Text */}
              <div className="text-left">
                <div className="text-xs font-bold text-[#241614] flex items-center gap-1">
                  <span>Satisfied Customers</span>
                  <div className="flex text-amber-500">
                    <Star size={11} fill="currentColor" />
                  </div>
                </div>
                <div className="text-[11px] text-[#6B5B52]">
                  Thousands 5-stars reviews from customers
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Framed Photo */}
        <div className="lg:col-span-5">
          <div className="relative group p-2 rounded-3xl border border-[#E5DCCE] bg-[#FCFAF6] shadow-sm">
            <div className="aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden relative">
              <img
                src="/images/about-experience.jpg"
                alt="Friends dining and enjoying moments together at Drizzle"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-104"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Story Modal */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#FAF6EE] border border-[#E5DCCE] rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setShowStoryModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#EFE6D7] hover:bg-[#B83A28] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B83A28]">Our Heritage</span>
            <h3 className="font-serif text-3xl font-normal text-[#241614] mt-1 mb-4">The Drizzle Philosophy</h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#6B5B52] leading-relaxed">
              <p>
                Founded on the belief that dining is an art form of connection, Drizzle began as an intimate sanctuary for food lovers seeking authenticity without pretense.
              </p>
              <p>
                Our culinary team marries time-honored artisanal cooking methods with bold contemporary flavor profiles. Every morning, our chefs source fresh regional produce, wild herbs, and premium ingredients to compose menus that evoke warmth and celebration.
              </p>
              <p>
                Whether it is an intimate date, a vibrant family gathering, or a milestone anniversary, we invite you to take a seat and savor each moment.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E8E0D2] flex justify-end">
              <button
                onClick={() => setShowStoryModal(false)}
                className="bg-[#241614] hover:bg-[#B83A28] text-white px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-colors cursor-pointer"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
