import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';

export default function ReservationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2 Guests',
    date: '2026-10-15',
    time: '19:30',
    specialRequests: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // after a moment allow user to close
    }, 1500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FAF6EE] border border-[#E5DCCE] rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#EFE6D7] text-[#241614] hover:bg-[#B83A28] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="text-center py-10 px-4 space-y-4">
            <div className="w-16 h-16 bg-[#B83A28]/10 text-[#B83A28] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-3xl font-serif text-[#241614]">Table Reserved!</h3>
            <p className="text-sm text-[#6B5B52] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-[#241614]">{formData.name || 'valued guest'}</span>! We have confirmed your table for <span className="font-semibold text-[#241614]">{formData.guests}</span> on <span className="font-semibold text-[#241614]">{formData.date}</span> at <span className="font-semibold text-[#241614]">{formData.time}</span>.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-[#B83A28] hover:bg-[#A02F1F] text-white px-8 py-3 rounded-full text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <span className="inline-block px-3 py-1 rounded-full border border-[#D8CEBE] text-[10px] uppercase tracking-widest font-semibold text-[#6B5B52] mb-2">
                Table Booking
              </span>
              <h2 className="text-3xl font-serif text-[#241614]">Reserve Your Table</h2>
              <p className="text-xs text-[#7A6B63] mt-1">Experience the unforgettable language of taste at Drizzle.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#5C4D44] uppercase tracking-wider mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#FCFAF6] border border-[#E0D5C3] rounded-xl px-3.5 py-2.5 text-xs text-[#241614] focus:outline-none focus:border-[#B83A28] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#5C4D44] uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-[#FCFAF6] border border-[#E0D5C3] rounded-xl px-3.5 py-2.5 text-xs text-[#241614] focus:outline-none focus:border-[#B83A28] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#5C4D44] uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Users size={12} /> Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full bg-[#FCFAF6] border border-[#E0D5C3] rounded-xl px-3 py-2.5 text-xs text-[#241614] focus:outline-none focus:border-[#B83A28] cursor-pointer"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>6 Guests</option>
                    <option>8+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#5C4D44] uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Calendar size={12} /> Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-[#FCFAF6] border border-[#E0D5C3] rounded-xl px-2.5 py-2.5 text-xs text-[#241614] focus:outline-none focus:border-[#B83A28]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#5C4D44] uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Clock size={12} /> Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full bg-[#FCFAF6] border border-[#E0D5C3] rounded-xl px-3 py-2.5 text-xs text-[#241614] focus:outline-none focus:border-[#B83A28] cursor-pointer"
                  >
                    <option>17:30</option>
                    <option>18:30</option>
                    <option>19:30</option>
                    <option>20:30</option>
                    <option>21:30</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#5C4D44] uppercase tracking-wider mb-1">
                  Special Notes / Dietary Requirements
                </label>
                <textarea
                  rows="2"
                  placeholder="Anniversary celebration, window table, allergies..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                  className="w-full bg-[#FCFAF6] border border-[#E0D5C3] rounded-xl p-3 text-xs text-[#241614] focus:outline-none focus:border-[#B83A28] resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#B83A28] hover:bg-[#A02F1F] text-white py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  Confirm Table Reservation
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
