import React from 'react';

// Cute hand-drawn style outline doodles matching the design
export const DrinkCupDoodle = ({ className = "w-12 h-12 text-[#241614]" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Straw */}
    <path d="M38 6 L44 14 L36 30" />
    {/* Lid */}
    <ellipse cx="32" cy="22" rx="18" ry="4" />
    <path d="M14 22 L17 18 L47 18 L50 22" />
    {/* Cup body */}
    <path d="M18 24 L22 56 L42 56 L46 24" />
    {/* Cup details */}
    <line x1="21" y1="38" x2="43" y2="38" strokeDasharray="3 3" />
  </svg>
);

export const FriesDoodle = ({ className = "w-12 h-12 text-[#241614]" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Fries */}
    <rect x="22" y="10" width="5" height="24" rx="2" />
    <rect x="29" y="6" width="5" height="28" rx="2" />
    <rect x="36" y="12" width="5" height="22" rx="2" />
    <rect x="17" y="14" width="4" height="20" rx="2" transform="rotate(-6 17 14)" />
    <rect x="42" y="13" width="4" height="21" rx="2" transform="rotate(7 42 13)" />
    {/* Box */}
    <path d="M14 34 L18 56 L46 56 L50 34 C43 38 35 38 32 36 C29 38 21 38 14 34 Z" fill="#FDFBF7" />
    <path d="M22 46 C28 50 36 50 42 46" strokeWidth="1.8" />
  </svg>
);

export const CoffeeCupDoodle = ({ className = "w-12 h-12 text-[#241614]" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Steam */}
    <path d="M24 10 Q28 6 24 2" />
    <path d="M32 10 Q36 6 32 2" />
    <path d="M40 10 Q44 6 40 2" />
    {/* Cup */}
    <path d="M16 16 L18 42 C18 48 24 50 32 50 C40 50 46 48 46 42 L48 16 Z" />
    {/* Handle */}
    <path d="M47 22 C53 22 55 32 46 36" />
    {/* Saucer */}
    <path d="M12 52 C12 52 20 56 32 56 C44 56 52 52 52 52" />
  </svg>
);

export const CocktailDoodle = ({ className = "w-12 h-12 text-[#241614]" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Straw */}
    <line x1="32" y1="26" x2="44" y2="6" />
    {/* Glass */}
    <path d="M16 16 L48 16 L32 38 Z" />
    {/* Stem */}
    <line x1="32" y1="38" x2="32" y2="56" />
    {/* Base */}
    <line x1="22" y1="56" x2="42" y2="56" />
    {/* Slice */}
    <circle cx="44" cy="16" r="6" />
  </svg>
);

export const BurritoWrapDoodle = ({ className = "w-10 h-10 text-[#241614]" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Wrap roll angled */}
    <rect x="14" y="20" width="36" height="24" rx="10" transform="rotate(-25 32 32)" />
    <path d="M20 28 L28 44" strokeDasharray="3 3" />
    <path d="M32 22 L40 38" strokeDasharray="3 3" />
  </svg>
);

// Faint background watermark doodles for the gallery section
export const GalleryBackgroundDoodles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5 text-white">
    {/* Pizza */}
    <svg className="absolute -top-10 -left-10 w-64 h-64" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 20 Q50 10 90 20 L50 90 Z" />
      <circle cx="45" cy="40" r="6" />
      <circle cx="60" cy="50" r="5" />
      <circle cx="38" cy="60" r="4" />
    </svg>
    {/* Wine glass & bottle */}
    <svg className="absolute top-1/4 -right-12 w-72 h-72" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M30 20 L50 20 L40 45 L40 70 L30 70 L50 70" />
      <rect x="65" y="30" width="18" height="40" rx="3" />
      <path d="M70 30 L70 15 L78 15 L78 30" />
    </svg>
    {/* Fork and knife */}
    <svg className="absolute bottom-10 left-12 w-56 h-56" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 15 L20 40 Q20 50 30 50 L30 85" />
      <path d="M25 15 L25 40" />
      <path d="M30 15 L30 40" />
      <path d="M55 15 L55 85" />
    </svg>
    {/* Burger doodle */}
    <svg className="absolute -bottom-8 right-1/4 w-60 h-60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 40 Q50 15 80 40 Z" />
      <rect x="18" y="44" width="64" height="10" rx="4" />
      <path d="M22 60 Q50 75 78 60 Z" />
    </svg>
  </div>
);
