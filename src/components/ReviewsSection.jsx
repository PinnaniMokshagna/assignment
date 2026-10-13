import React from 'react';
import { Star, Quote } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      quote: "Every bite was a burst of flavor! The ambiance, service, and presentation were flawless. Definitely one of the best dining experiences I've had in a long time.",
      author: "Daniel Johnson",
      location: "California, USA",
      rating: "5.0",
      theme: "light",
      avatar: getAssetUrl('/images/avatar-1.jpg')
    },
    {
      id: 2,
      quote: "The staff was incredibly welcoming, and the dishes were beautifully prepared. You can tell they use the freshest ingredients. Highly recommend the chef's.",
      author: "Sophia Lee",
      location: "New York, USA",
      rating: "5.0",
      theme: "dark", // High contrast deep burgundy card!
      avatar: getAssetUrl('/images/avatar-2.jpg')
    },
    {
      id: 3,
      quote: "We celebrated my parents' anniversary here and everything was perfect. From the decor to the desserts—was an unforgettable evening.",
      author: "Emily Carter",
      location: "Texas, USA",
      rating: "5.0",
      theme: "light",
      avatar: getAssetUrl('/images/avatar-3.jpg')
    }
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-[#E8E0D2]">
      {/* Pill Badge */}
      <div className="mb-6">
        <span className="inline-block border border-[#D8CEBE] bg-[#FCFAF6] rounded-full px-4 py-1.5 text-[11px] font-medium tracking-wider uppercase text-[#5C4D44]">
          Customer Reviews
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Headline */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal leading-[1.15] tracking-tight text-[#241614]">
            Where every visit <br />
            becomes a great <br />
            <span className="italic">Memory</span>
          </h2>
          <p className="text-xs text-[#7A6B63] mt-4 leading-relaxed max-w-sm">
            Discover why our guests return time and time again to create memorable milestones with us.
          </p>
        </div>

        {/* Right 3 Review Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {reviews.map((rev) => {
            const isDark = rev.theme === 'dark';

            return (
              <div
                key={rev.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${
                  isDark
                    ? 'bg-[#38080C] text-white border border-[#4F1016] shadow-md'
                    : 'bg-[#FCFAF6] text-[#241614] border border-[#E8E0D2] shadow-xs'
                }`}
              >
                <div>
                  <div className="mb-4 opacity-30">
                    <Quote size={22} className={isDark ? 'text-white' : 'text-[#241614]'} />
                  </div>
                  <p className={`text-xs sm:text-[13px] leading-relaxed mb-6 ${isDark ? 'text-[#FAF6EE]' : 'text-[#4A3B34]'}`}>
                    "{rev.quote}"
                  </p>
                </div>

                <div className={`pt-4 border-t flex items-center justify-between gap-2 ${isDark ? 'border-white/15' : 'border-[#EFE7D8]'}`}>
                  <div className="flex items-center gap-2.5">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-9 h-9 rounded-full object-cover border border-[#E5DCCE] shadow-2xs"
                    />
                    <div>
                      <h4 className={`text-xs font-bold ${isDark ? 'text-white' : 'text-[#241614]'}`}>
                        {rev.author}
                      </h4>
                      <span className={`text-[10px] block ${isDark ? 'text-[#D8CEBE]' : 'text-[#8C7A70]'}`}>
                        {rev.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-amber-400 fill-amber-400" />
                    <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-[#241614]'}`}>
                      {rev.rating}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
