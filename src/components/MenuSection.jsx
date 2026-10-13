import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Utensils, Soup, Leaf, Wine } from 'lucide-react';
import { BurritoWrapDoodle } from './DoodleIcons';
import { getAssetUrl } from '../utils/assets';

export default function MenuSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const mainCourseItems = [
    "1. Seafood Delights",
    "2. Pasta & Risotto",
    "3. Chef's Signature Dishes"
  ];

  return (
    <section id="menu" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-[#E8E0D2]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FCFAF6] border border-[#E0D5C3] flex items-center justify-center p-2 text-[#241614] shadow-xs">
            <BurritoWrapDoodle className="w-8 h-8 text-[#241614]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-normal tracking-tight text-[#241614]">
            Your next favorite meal awaits
          </h2>
        </div>

        <div>
          <button className="border border-[#D8CEBE] bg-[#FCFAF6] hover:border-[#241614] hover:bg-[#FAF6EE] text-[#5C4D44] hover:text-[#241614] rounded-full px-5 py-2 text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer shadow-xs">
            Discover our Menu
          </button>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        
        {/* CARD 1: Main Course */}
        <div className="bg-[#FCFAF6] border border-[#E8E0D2] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300">
          <div>
            {/* Food Picture */}
            <div className="w-full h-36 rounded-2xl overflow-hidden mb-4 border border-[#E5DCCE] bg-[#FAF6EE]">
              <img
                src={getAssetUrl('/images/gallery-6.jpg')}
                alt="Main Course"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#E5DCCE] flex items-center justify-center text-[#241614] mb-3">
              <Utensils size={20} strokeWidth={1.75} />
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#241614] mb-1">
              Main Course
            </h3>
            <p className="text-xs text-[#7A6B63] italic mb-5">
              Where bold flavors and perfect meet
            </p>

            <div className="h-px bg-[#EFE7D8] mb-5" />

            {/* List */}
            <ul className="space-y-3.5 mb-6 text-xs text-[#241614] font-medium">
              {mainCourseItems.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`flex items-start gap-2 transition-colors cursor-pointer ${
                    activeSlide === idx ? 'text-[#B83A28] font-bold' : 'hover:text-[#B83A28]'
                  }`}
                >
                  <span className={activeSlide === idx ? 'text-[#B83A28]' : 'text-[#8C7A70] font-normal'}>
                    {item.split(' ')[0]}
                  </span>
                  <span>{item.substring(item.indexOf(' ') + 1)}</span>
                </li>
              ))}
            </ul>

            <p className="text-[11px] text-[#7A6B63] leading-relaxed mb-6">
              Deliciously crafted dish made with passion and finest ingredients.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 pt-2 border-t border-[#EFE7D8]">
            <button
              onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : 2))}
              className="w-8 h-8 rounded-full border border-[#D8CEBE] bg-white text-[#241614] hover:bg-[#FAF6EE] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous main course highlight"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              onClick={() => setActiveSlide((prev) => (prev < 2 ? prev + 1 : 0))}
              className="w-8 h-8 rounded-full bg-[#B83A28] hover:bg-[#A02F1F] text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              aria-label="Next main course highlight"
            >
              <ChevronRight size={15} />
            </button>
            <span className="text-[10px] text-[#8C7A70] ml-2 font-medium">
              {activeSlide + 1} of 3
            </span>
          </div>
        </div>

        {/* CARD 2: Soups & Salads */}
        <div className="bg-[#FCFAF6] border border-[#E8E0D2] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300">
          <div>
            {/* Food Picture */}
            <div className="w-full h-36 rounded-2xl overflow-hidden mb-4 border border-[#E5DCCE] bg-[#FAF6EE]">
              <img
                src={getAssetUrl('/images/gallery-4.jpg')}
                alt="Soups & Salads"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#E5DCCE] flex items-center justify-center text-[#241614] mb-3">
              <Soup size={20} strokeWidth={1.75} />
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#241614] mb-1">
              Soups & Salads
            </h3>
            <p className="text-xs text-[#7A6B63] italic mb-5">
              Light, healthy, and packed with flavor
            </p>

            <div className="h-px bg-[#EFE7D8] mb-5" />

            {/* List */}
            <ul className="space-y-3.5 mb-6 text-xs text-[#241614] font-medium">
              <li className="flex items-start gap-2 hover:text-[#B83A28] transition-colors cursor-pointer">
                <span className="text-[#8C7A70] font-normal">1.</span>
                <span>Signature Soups</span>
              </li>
              <li className="flex items-start gap-2 hover:text-[#B83A28] transition-colors cursor-pointer">
                <span className="text-[#8C7A70] font-normal">2.</span>
                <span>Seasonal Salads</span>
              </li>
              <li className="flex items-start gap-2 hover:text-[#B83A28] transition-colors cursor-pointer">
                <span className="text-[#8C7A70] font-normal">3.</span>
                <span>Classic Favorites</span>
              </li>
              <li className="flex items-start gap-2 hover:text-[#B83A28] transition-colors cursor-pointer">
                <span className="text-[#8C7A70] font-normal">4.</span>
                <span>Light & Healthy</span>
              </li>
            </ul>
          </div>

          <p className="text-[11px] text-[#7A6B63] leading-relaxed pt-4 border-t border-[#EFE7D8]">
            Fresh garden greens picked daily and served with artisan house dressings.
          </p>
        </div>

        {/* CARD 3: Vegan & Vegetarian (Deep Wine Highlight Card!) */}
        <div className="bg-[#38080C] text-white border border-[#4E0F14] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
          {/* Subtle glow / highlight */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B83A28]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            {/* Food Picture */}
            <div className="w-full h-36 rounded-2xl overflow-hidden mb-4 border border-white/10 bg-[#4A1016]">
              <img
                src={getAssetUrl('/images/gallery-3.jpg')}
                alt="Vegan & Vegetarian"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-[#4A1016] border border-[#681C24] flex items-center justify-center text-[#E5D5C5] mb-3">
              <Leaf size={20} strokeWidth={1.75} />
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
              Vegan & Vegetarian
            </h3>
            <p className="text-xs text-[#E5D5C5]/80 italic mb-5">
              Colorful creations inspired by nature
            </p>

            <div className="h-px bg-white/15 mb-5" />

            {/* List */}
            <ul className="space-y-3.5 mb-6 text-xs text-[#FAF6EE] font-medium">
              <li className="flex items-start gap-2 hover:text-[#FFB5A7] transition-colors cursor-pointer">
                <span className="text-white/50 font-normal">1.</span>
                <span>Hearty Bowls</span>
              </li>
              <li className="flex items-start gap-2 hover:text-[#FFB5A7] transition-colors cursor-pointer">
                <span className="text-white/50 font-normal">2.</span>
                <span>Wraps & Sandwiches</span>
              </li>
              <li className="flex items-start gap-2 hover:text-[#FFB5A7] transition-colors cursor-pointer">
                <span className="text-white/50 font-normal">3.</span>
                <span>Vegan Desserts</span>
              </li>
            </ul>
          </div>

          <p className="text-[11px] text-[#D8CEBE]/80 leading-relaxed pt-4 border-t border-white/15 relative z-10">
            Wholesome plant-forward culinary artistry that delights every palate.
          </p>
        </div>

        {/* CARD 4: Beverages / Drinks */}
        <div className="bg-[#FCFAF6] border border-[#E8E0D2] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300">
          <div>
            {/* Drink Picture */}
            <div className="w-full h-36 rounded-2xl overflow-hidden mb-4 border border-[#E5DCCE] bg-[#FAF6EE]">
              <img
                src={getAssetUrl('/images/gallery-1.jpg')}
                alt="Beverages and Drinks"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#E5DCCE] flex items-center justify-center text-[#241614] mb-3">
              <Wine size={20} strokeWidth={1.75} />
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#241614] mb-1">
              Beverages / Drinks
            </h3>
            <p className="text-xs text-[#7A6B63] italic mb-5">
              Sip, savor, and refresh your senses
            </p>

            <div className="h-px bg-[#EFE7D8] mb-5" />

            {/* List */}
            <ul className="space-y-3.5 mb-6 text-xs text-[#241614] font-medium">
              <li className="flex items-start gap-2 hover:text-[#B83A28] transition-colors cursor-pointer">
                <span className="text-[#8C7A70] font-normal">1.</span>
                <span>Mocktails & Specialty Drinks</span>
              </li>
              <li className="flex items-start gap-2 hover:text-[#B83A28] transition-colors cursor-pointer">
                <span className="text-[#8C7A70] font-normal">2.</span>
                <span>Juices & Smoothies</span>
              </li>
            </ul>
          </div>

          <p className="text-[11px] text-[#7A6B63] leading-relaxed pt-4 border-t border-[#EFE7D8]">
            Masterfully curated beverages crafted with botanicals, pure cold-pressed fruits, and fine vintage pairings.
          </p>
        </div>

      </div>
    </section>
  );
}
