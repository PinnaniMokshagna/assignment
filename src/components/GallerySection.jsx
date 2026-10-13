import React, { useState } from 'react';
import { GalleryBackgroundDoodles } from './DoodleIcons';
import { X, ZoomIn } from 'lucide-react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Good Vibe",
      image: "/images/gallery-1.jpg",
      rotation: "-rotate-6 sm:-rotate-8",
      offset: "translate-y-2 sm:translate-y-4"
    },
    {
      id: 2,
      title: "Burger",
      image: "/images/gallery-2.jpg",
      rotation: "-rotate-2 sm:-rotate-3",
      offset: "-translate-y-1 sm:-translate-y-2"
    },
    {
      id: 3,
      title: "Rice & More",
      image: "/images/gallery-3.jpg",
      rotation: "rotate-0",
      offset: "-translate-y-3 sm:-translate-y-5"
    },
    {
      id: 4,
      title: "Salad & Soup",
      image: "/images/gallery-4.jpg",
      rotation: "rotate-2 sm:rotate-3",
      offset: "-translate-y-1 sm:-translate-y-2"
    },
    {
      id: 5,
      title: "Special Burger",
      image: "/images/gallery-5.jpg",
      rotation: "rotate-5 sm:rotate-6",
      offset: "translate-y-2 sm:translate-y-3"
    },
    {
      id: 6,
      title: "Pasta",
      image: "/images/gallery-6.jpg",
      rotation: "rotate-8 sm:rotate-10",
      offset: "translate-y-4 sm:translate-y-6"
    }
  ];

  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-[#38080C] text-white overflow-hidden">
      {/* Background Watermark Doodles */}
      <GalleryBackgroundDoodles />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <div className="inline-block border border-white/20 bg-white/5 backdrop-blur-xs rounded-full px-5 py-1.5 mb-4">
            <span className="text-[11px] font-medium tracking-widest uppercase text-[#E5D5C5]">
              Feast for the Eyes
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal tracking-tight text-white leading-tight">
            Taste the vibes through our gallery
          </h2>
        </div>

        {/* Fanned Cards Showcase */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-3 sm:gap-4 md:gap-5 pb-8 pt-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`group relative flex-shrink-0 w-[140px] sm:w-[170px] md:w-[190px] lg:w-[195px] transform transition-all duration-300 hover:scale-108 hover:rotate-0 hover:z-30 cursor-pointer ${item.rotation} ${item.offset}`}
            >
              {/* Card Container */}
              <div className="bg-[#FAF6EE] p-2.5 sm:p-3 rounded-2xl md:rounded-3xl shadow-xl border border-white/20">
                {/* Image */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 bg-[#EAE2D5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center filter group-hover:brightness-105 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Card Bottom Label */}
                <div className="text-center pb-1">
                  <span className="text-xs sm:text-[13px] font-bold tracking-wide text-[#241614] block">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-xl w-full bg-[#FAF6EE] rounded-3xl p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-[#B83A28] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-3">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center py-2">
              <h3 className="font-serif text-2xl font-bold text-[#241614]">{selectedImage.title}</h3>
              <p className="text-xs text-[#6B5B52] mt-1">From our culinary gallery at Drizzle</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
