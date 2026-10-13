import React, { useState } from 'react';
import { DrinkCupDoodle, FriesDoodle, CoffeeCupDoodle, CocktailDoodle } from './DoodleIcons';
import { X, CheckCircle2 } from 'lucide-react';

export default function CareersSection() {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [applyForm, setApplyForm] = useState({
    name: '',
    email: '',
    role: 'Sous Chef / Line Cook',
    experience: '2-4 years',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setShowApplyModal(false);
  };

  return (
    <section id="careers" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto overflow-hidden">
      {/* 4 Decorative Corner Doodles matching original design */}
      <div className="absolute top-8 left-4 sm:left-12 opacity-80 pointer-events-none">
        <DrinkCupDoodle className="w-14 h-14 sm:w-16 sm:h-16 text-[#3A1E14]" />
      </div>

      <div className="absolute top-8 right-4 sm:right-12 opacity-80 pointer-events-none">
        <FriesDoodle className="w-14 h-14 sm:w-16 sm:h-16 text-[#3A1E14]" />
      </div>

      <div className="absolute bottom-8 left-4 sm:left-14 opacity-80 pointer-events-none">
        <CoffeeCupDoodle className="w-14 h-14 sm:w-16 sm:h-16 text-[#3A1E14]" />
      </div>

      <div className="absolute bottom-8 right-4 sm:right-14 opacity-80 pointer-events-none">
        <CocktailDoodle className="w-14 h-14 sm:w-16 sm:h-16 text-[#3A1E14]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        {/* Pill Badge */}
        <div className="inline-block border border-[#D8CEBE] bg-[#FCFAF6] rounded-full px-5 py-1.5 mb-6 shadow-xs">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#5C4D44]">
            Career Opportunity
          </span>
        </div>

        {/* Headline with playful sticker tags */}
        <div className="relative font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal leading-[1.25] text-[#241614] mb-8">
          <span>We're always looking for </span>
          <br className="hidden sm:inline" />
          
          {/* Tag: HONEST */}
          <span className="relative inline-block mx-1 align-middle">
            <span className="inline-block text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider text-[#D96B27] border border-[#E8935D] bg-[#FDF5ED] px-2.5 py-0.5 rounded-full transform -rotate-3">
              HONEST
            </span>
          </span>

          {/* Tag: FRIENDLY */}
          <span className="relative inline-block mx-1 align-middle">
            <span className="inline-block text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider text-[#A67C1E] border border-[#D6AE56] bg-[#FCF8EE] px-2.5 py-0.5 rounded-full transform rotate-2">
              FRIENDLY
            </span>
          </span>

          {/* Tag: PASSIONATE */}
          <span className="relative inline-block mx-1 align-middle">
            <span className="inline-block text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider text-[#B83A28] border border-[#DE6F60] bg-[#FDF0EE] px-2.5 py-0.5 rounded-full transform -rotate-2">
              PASSIONATE
            </span>
          </span>

          <br className="hidden sm:inline" />
          <span>passionate, dedicated people to join </span>
          <br className="hidden sm:inline" />

          {/* Tag: ADAPTABLE */}
          <span className="relative inline-block mx-1 align-middle">
            <span className="inline-block text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider text-[#3D7A68] border border-[#74B5A3] bg-[#EFF8F5] px-2.5 py-0.5 rounded-full transform -rotate-3">
              ADAPTABLE
            </span>
          </span>

          <span>our growing team. </span>

          {/* Tag: APPLY NOW */}
          <span className="relative inline-block mx-1 align-middle">
            <span className="inline-block text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider text-[#7B4D99] border border-[#B38CCD] bg-[#F7F2FA] px-2.5 py-0.5 rounded-full transform rotate-3">
              APPLY NOW
            </span>
          </span>

          {/* Tag: CREATIVE */}
          <span className="relative inline-block mx-1 align-middle">
            <span className="inline-block text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider text-[#B83A28] border border-[#DE6F60] bg-[#FDF0EE] px-2.5 py-0.5 rounded-full transform -rotate-4">
              CREATIVE
            </span>
          </span>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={() => setShowApplyModal(true)}
            className="bg-[#B83A28] hover:bg-[#A02F1F] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            APPLY NOW
          </button>
        </div>
      </div>

      {/* Career Application Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-lg bg-[#FAF6EE] border border-[#E5DCCE] rounded-3xl p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleReset}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#EFE6D7] hover:bg-[#B83A28] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-[#B83A28]/10 text-[#B83A28] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-3xl text-[#241614]">Application Received!</h3>
                <p className="text-xs text-[#6B5B52] leading-relaxed max-w-sm mx-auto">
                  Thank you for your interest in joining Drizzle, <span className="font-semibold text-[#241614]">{applyForm.name}</span>. Our hiring manager will review your submission and contact you soon.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="bg-[#B83A28] hover:bg-[#A02F1F] text-white px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B83A28]">Join Our Culinary Team</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#241614] mt-1 mb-4">Apply for a Position</h3>
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#5C4D44] uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={applyForm.name}
                      onChange={(e) => setApplyForm({...applyForm, name: e.target.value})}
                      className="w-full bg-[#FCFAF6] border border-[#E0D5C3] rounded-xl px-3.5 py-2 text-xs text-[#241614] focus:outline-none focus:border-[#B83A28]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#5C4D44] uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={applyForm.email}
                      onChange={(e) => setApplyForm({...applyForm, email: e.target.value})}
                      className="w-full bg-[#FCFAF6] border border-[#E0D5C3] rounded-xl px-3.5 py-2 text-xs text-[#241614] focus:outline-none focus:border-[#B83A28]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#5C4D44] uppercase tracking-wider mb-1">
                        Role
                      </label>
                      <select
                        value={applyForm.role}
                        onChange={(e) => setApplyForm({...applyForm, role: e.target.value})}
                        className="w-full bg-[#FCFAF6] border border-[#E0D5C3] rounded-xl px-3 py-2 text-xs text-[#241614] focus:outline-none focus:border-[#B83A28]"
                      >
                        <option>Sous Chef / Line Cook</option>
                        <option>Pastry Chef</option>
                        <option>Sommelier / Bartender</option>
                        <option>Host / Floor Server</option>
                        <option>Restaurant Manager</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#5C4D44] uppercase tracking-wider mb-1">
                        Experience
                      </label>
                      <select
                        value={applyForm.experience}
                        onChange={(e) => setApplyForm({...applyForm, experience: e.target.value})}
                        className="w-full bg-[#FCFAF6] border border-[#E0D5C3] rounded-xl px-3 py-2 text-xs text-[#241614] focus:outline-none focus:border-[#B83A28]"
                      >
                        <option>Entry Level / Enthusiast</option>
                        <option>1-2 years</option>
                        <option>2-4 years</option>
                        <option>5+ years</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#5C4D44] uppercase tracking-wider mb-1">
                      Cover Note or Portfolio Link
                    </label>
                    <textarea
                      rows="2"
                      placeholder="Tell us about yourself and why you'd love to join Drizzle..."
                      value={applyForm.message}
                      onChange={(e) => setApplyForm({...applyForm, message: e.target.value})}
                      className="w-full bg-[#FCFAF6] border border-[#E0D5C3] rounded-xl p-3 text-xs text-[#241614] focus:outline-none focus:border-[#B83A28] resize-none"
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#B83A28] hover:bg-[#A02F1F] text-white py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer shadow-md"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
