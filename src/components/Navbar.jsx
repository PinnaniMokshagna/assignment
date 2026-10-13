import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenReservation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [reservationsDropdownOpen, setReservationsDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-[#FAF6EE] border-b border-[#E5DCCE] sticky top-0 z-40">
      <div className="max-w-[1440px] mx-auto">
        {/* Desktop Grid Layout matching screenshot */}
        <div className="hidden lg:grid grid-cols-7 items-center divide-x divide-[#E5DCCE] text-center min-h-[58px]">
          {/* 1. HOME */}
          <div className="h-full flex items-center justify-center px-4">
            <a 
              href="#home" 
              className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#241614] hover:text-[#B83A28] transition-colors py-4 w-full"
            >
              HOME
            </a>
          </div>

          {/* 2. OUR MENU */}
          <div 
            className="h-full flex items-center justify-center px-4 relative"
            onMouseEnter={() => setMenuDropdownOpen(true)}
            onMouseLeave={() => setMenuDropdownOpen(false)}
          >
            <a 
              href="#menu" 
              className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#241614] hover:text-[#B83A28] transition-colors py-4 w-full flex items-center justify-center gap-1.5"
            >
              <span>OUR MENU</span>
              <ChevronDown size={12} className={`transition-transform duration-200 ${menuDropdownOpen ? 'rotate-180 text-[#B83A28]' : ''}`} />
            </a>

            {/* Dropdown */}
            {menuDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-[#FAF6EE] border border-[#E5DCCE] shadow-xl rounded-b-2xl py-2 z-50 text-left animate-in fade-in slide-in-from-top-1 duration-150">
                <a href="#menu" className="block px-4 py-2.5 text-xs text-[#241614] hover:bg-[#F2EAE0] hover:text-[#B83A28] transition-colors">
                  Main Course
                </a>
                <a href="#menu" className="block px-4 py-2.5 text-xs text-[#241614] hover:bg-[#F2EAE0] hover:text-[#B83A28] transition-colors">
                  Soups & Salads
                </a>
                <a href="#menu" className="block px-4 py-2.5 text-xs text-[#241614] hover:bg-[#F2EAE0] hover:text-[#B83A28] transition-colors">
                  Vegan & Vegetarian
                </a>
                <a href="#menu" className="block px-4 py-2.5 text-xs text-[#241614] hover:bg-[#F2EAE0] hover:text-[#B83A28] transition-colors">
                  Beverages & Drinks
                </a>
              </div>
            )}
          </div>

          {/* 3. ABOUT US */}
          <div className="h-full flex items-center justify-center px-4">
            <a 
              href="#about" 
              className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#241614] hover:text-[#B83A28] transition-colors py-4 w-full"
            >
              ABOUT US
            </a>
          </div>

          {/* 4. LOGO (CENTER) */}
          <div className="h-full flex items-center justify-center px-6">
            <a href="#home" className="group py-2">
              <span className="font-serif text-3xl font-bold tracking-tight text-[#241614] group-hover:opacity-90 transition-opacity">
                Drizzle<span className="text-[#B83A28]">.</span>
              </span>
            </a>
          </div>

          {/* 5. GALLERY */}
          <div className="h-full flex items-center justify-center px-4">
            <a 
              href="#gallery" 
              className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#241614] hover:text-[#B83A28] transition-colors py-4 w-full"
            >
              GALLERY
            </a>
          </div>

          {/* 6. RESERVATIONS */}
          <div 
            className="h-full flex items-center justify-center px-4 relative"
            onMouseEnter={() => setReservationsDropdownOpen(true)}
            onMouseLeave={() => setReservationsDropdownOpen(false)}
          >
            <button 
              onClick={onOpenReservation}
              className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#241614] hover:text-[#B83A28] transition-colors py-4 w-full flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>RESERVATIONS</span>
              <ChevronDown size={12} className={`transition-transform duration-200 ${reservationsDropdownOpen ? 'rotate-180 text-[#B83A28]' : ''}`} />
            </button>

            {/* Dropdown */}
            {reservationsDropdownOpen && (
              <div className="absolute top-full left-0 w-52 bg-[#FAF6EE] border border-[#E5DCCE] shadow-xl rounded-b-2xl py-2 z-50 text-left animate-in fade-in slide-in-from-top-1 duration-150">
                <button 
                  onClick={onOpenReservation}
                  className="w-full text-left px-4 py-2.5 text-xs text-[#241614] hover:bg-[#F2EAE0] hover:text-[#B83A28] transition-colors cursor-pointer"
                >
                  Book a Table
                </button>
                <a href="#reserve" className="block px-4 py-2.5 text-xs text-[#241614] hover:bg-[#F2EAE0] hover:text-[#B83A28] transition-colors">
                  Private Dining
                </a>
                <a href="#careers" className="block px-4 py-2.5 text-xs text-[#241614] hover:bg-[#F2EAE0] hover:text-[#B83A28] transition-colors">
                  Join Our Team
                </a>
              </div>
            )}
          </div>

          {/* 7. CONTACT */}
          <div className="h-full flex items-center justify-center px-4">
            <a 
              href="#contact" 
              className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#241614] hover:text-[#B83A28] transition-colors py-4 w-full"
            >
              CONTACT
            </a>
          </div>
        </div>

        {/* Mobile & Tablet Header */}
        <div className="lg:hidden flex items-center justify-between px-5 py-3.5">
          <a href="#home" className="font-serif text-2xl font-bold tracking-tight text-[#241614]">
            Drizzle<span className="text-[#B83A28]">.</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenReservation}
              className="bg-[#B83A28] text-white text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full cursor-pointer"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full border border-[#D8CEBE] flex items-center justify-center text-[#241614] cursor-pointer hover:bg-[#F0E6D8] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF6EE] border-t border-[#E5DCCE] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3 divide-y divide-[#EFE7D8] text-sm">
              <a 
                href="#home" 
                onClick={() => setMobileMenuOpen(false)}
                className="pt-2 text-xs font-semibold tracking-widest uppercase text-[#241614] hover:text-[#B83A28]"
              >
                Home
              </a>
              <a 
                href="#menu" 
                onClick={() => setMobileMenuOpen(false)}
                className="pt-3 text-xs font-semibold tracking-widest uppercase text-[#241614] hover:text-[#B83A28]"
              >
                Our Menu
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="pt-3 text-xs font-semibold tracking-widest uppercase text-[#241614] hover:text-[#B83A28]"
              >
                About Us
              </a>
              <a 
                href="#gallery" 
                onClick={() => setMobileMenuOpen(false)}
                className="pt-3 text-xs font-semibold tracking-widest uppercase text-[#241614] hover:text-[#B83A28]"
              >
                Gallery
              </a>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="pt-3 text-left text-xs font-semibold tracking-widest uppercase text-[#241614] hover:text-[#B83A28] flex items-center justify-between w-full"
              >
                <span>Reservations</span>
                <ArrowRight size={14} />
              </button>
              <a 
                href="#careers" 
                onClick={() => setMobileMenuOpen(false)}
                className="pt-3 text-xs font-semibold tracking-widest uppercase text-[#241614] hover:text-[#B83A28]"
              >
                Careers
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="pt-3 text-xs font-semibold tracking-widest uppercase text-[#241614] hover:text-[#B83A28]"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
