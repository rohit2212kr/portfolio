import React, { useEffect, useState } from 'react';

export default function BackgroundEffects() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Base pure black background */}
      <div className="absolute inset-0 bg-black" />

      {/* 2. Monochromatic Dot Grid */}
      <div className="absolute inset-0 dot-grid-bg opacity-30" />

      {/* 3. Subtle Technical Grid Lines */}
      <div className="absolute inset-0 dense-grid-bg opacity-20" />

      {/* 4. White radial spotlight tracking cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.055) 0%, rgba(255, 255, 255, 0.015) 35%, transparent 70%)`,
        }}
      />

      {/* 5. Second sharper core spotlight for crisp illumination */}
      <div
        className="absolute inset-0 transition-opacity duration-150 pointer-events-none"
        style={{
          background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.04) 0%, transparent 80%)`,
        }}
      />

      {/* 6. Matte Film Grain Texture Overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none opacity-45 mix-blend-screen" />

      {/* 7. Subtle Corner Technical Crosshairs */}
      <div className="absolute top-6 left-6 text-[10px] font-mono text-zinc-700 select-none">
        + 00°00'00"N
      </div>
      <div className="absolute top-6 right-6 text-[10px] font-mono text-zinc-700 select-none">
        LAT_LON_SYS // 2026
      </div>
    </div>
  );
}
