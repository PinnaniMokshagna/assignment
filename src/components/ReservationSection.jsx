import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function ReservationSection({ onOpenReservation }) {
  return (
    <section id="reserve" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-[#E8E0D2]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Headline and Call-to-Action */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="inline-block border border-[#D8CEBE] bg-[#FCFAF6] rounded-full px-4 py-1.5 text-[11px] font-medium tracking-wider uppercase text-[#5C4D44]">
              Reserve your Table
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.12] tracking-tight text-[#241614]">
            Reserve your spot! <br />
            <span className="italic">ultimate joy of dining</span> <br />
            done right
          </h2>

          <p className="text-xs sm:text-sm text-[#6B5B52] leading-relaxed max-w-md">
            Whether booking an intimate date night, family dinner, or celebratory banquet, our attentive hosts and sommeliers ensure your evening is seamless and unforgettable.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenReservation}
              className="bg-[#B83A28] hover:bg-[#A02F1F] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2"
            >
              <span>RESERVE YOUR TABLE</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Right Column: 3-Image Collage */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {/* Image 1: Toasting wine glasses */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#E5DCCE] shadow-xs group aspect-[4/3] sm:aspect-[4/3]">
              <img
                src={getAssetUrl('/images/reserve-1.jpg')}
                alt="Friends toasting wine glasses celebrating at restaurant"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Image 2: Smiling couple */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#E5DCCE] shadow-xs group aspect-[4/3] sm:aspect-[4/3]">
              <img
                src={getAssetUrl('/images/reserve-2.jpg')}
                alt="Smiling happy couple enjoying romantic evening dinner"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Image 3: Wide ambient dining room */}
            <div className="col-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#E5DCCE] shadow-xs group h-[200px] sm:h-[260px] md:h-[300px]">
              <img
                src={getAssetUrl('/images/reserve-3.jpg')}
                alt="Drizzle warm dining hall seating and ambient table decor"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
