import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import ReservationSection from './components/ReservationSection';
import GallerySection from './components/GallerySection';
import CareersSection from './components/CareersSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#241614] flex flex-col font-sans selection:bg-[#B83A28] selection:text-white">
      {/* Navbar with centered logo & grid border items */}
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Menu Categories Section */}
        <MenuSection />

        {/* 4. Table Reservation Mosaic Section */}
        <ReservationSection onOpenReservation={() => setIsReservationOpen(true)} />

        {/* 5. Dark Burgundy Gallery Section with Fanned Polaroid Cards */}
        <GallerySection />

        {/* 6. Careers Section with playful sticker badges & corner doodles */}
        <CareersSection />

        {/* 7. Customer Reviews Section with Burgundy Accent Card */}
        <ReviewsSection />
      </main>

      {/* 8. Dark Burgundy Footer Section */}
      <Footer onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
