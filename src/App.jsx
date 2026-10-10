import React, { useState } from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ArsenalSection from './components/ArsenalSection';
import TerminalWidget from './components/TerminalWidget';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* 1. Global Monochromatic Background, Dot Grid Canvas & Matte Grain Texture */}
      <BackgroundEffects />

      {/* 2. Top Header Navigation Bar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* 3. Main Portfolio Application Flow */}
      <main className="relative z-10">
        {/* Section 1: Hero & Hanging 3D Lanyard ID Card */}
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />

        {/* Section 2: Projects Showcase (3D Perspective Tilt Bento-Grid) */}
        <ProjectsSection />

        {/* Section 3A: Technical Arsenal & LeetCode 300+ Solved Graphic */}
        <ArsenalSection />

        {/* Section 3B: Interactive Monochrome Terminal Widget */}
        <TerminalWidget onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* 4. Minimalist Glass Footer, Magnetic Copy Button & Social Connects */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* 5. Grain-Textured Contact Form Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
