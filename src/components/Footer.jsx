import React, { useState } from 'react';
import { Check } from 'lucide-react';

const FacebookIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.738-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Footer({ onOpenReservation }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-[#38080C] text-white pt-16 md:pt-20 pb-8 border-t border-[#4A0E15]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-white/10">
          
          {/* Left Column: Big Brand Logo & Social Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Massive DRIZZLE. Logo matching screenshot */}
              <a href="#home" className="inline-block group mb-8">
                <span className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-white leading-none">
                  DRIZZLE<span className="text-[#B83A28]">.</span>
                </span>
              </a>

              {/* Social Media Section */}
              <div className="mt-4">
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#D4C3BC] mb-3">
                  Social Media
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full border border-white/20 bg-white/5 hover:bg-[#B83A28] hover:border-[#B83A28] flex items-center justify-center text-white transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full border border-white/20 bg-white/5 hover:bg-[#B83A28] hover:border-[#B83A28] flex items-center justify-center text-white transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full border border-white/20 bg-white/5 hover:bg-[#B83A28] hover:border-[#B83A28] flex items-center justify-center text-white transition-all duration-200"
                    aria-label="Twitter / X"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full border border-white/20 bg-white/5 hover:bg-[#B83A28] hover:border-[#B83A28] flex items-center justify-center text-white transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Newsletter & Navigation Links */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
            {/* Newsletter Subscription */}
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-1.5">
                Get tasty news straight to your inbox
              </h3>
              <p className="text-xs text-[#C8B8B0] mb-5">
                Be a part — Get fresh updates, special offers, and mouthwatering news.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-2.5 max-w-lg">
                <input
                  type="email"
                  required
                  placeholder="enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/20 rounded-full px-5 py-3 text-xs text-white placeholder-[#9C8580] focus:outline-none focus:border-[#B83A28] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#B83A28] hover:bg-[#A02F1F] text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center gap-1.5 shrink-0"
                >
                  {subscribed ? (
                    <>
                      <Check size={14} />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <span>SUBSCRIBE NOW</span>
                  )}
                </button>
              </form>
            </div>

            {/* Quick Links matching layout in screenshot */}
            <div className="space-y-3 pt-4">
              {/* Row 1 */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#D8CEBE]">
                <a href="#home" className="hover:text-white transition-colors">Home</a>
                <span className="text-white/20">•</span>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
                <span className="text-white/20">•</span>
                <a href="#menu" className="hover:text-white transition-colors">Our Menu</a>
                <span className="text-white/20">•</span>
                <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
                <span className="text-white/20">•</span>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#D8CEBE]">
                <button onClick={onOpenReservation} className="hover:text-white transition-colors cursor-pointer">
                  Book a Table
                </button>
                <span className="text-white/20">•</span>
                <a href="#about" className="hover:text-white transition-colors">Events</a>
                <span className="text-white/20">•</span>
                <a href="#careers" className="hover:text-white transition-colors">Careers</a>
                <span className="text-white/20">•</span>
                <a href="#about" className="hover:text-white transition-colors">Blogs</a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A6958E]">
          <div>
            All the rights reserved by <span className="text-white/80 font-medium">Drizzle Studio 2026</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#terms" className="hover:text-white transition-colors">Terms & Condition</a>
            <span className="text-white/20">•</span>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
