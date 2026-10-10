import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Shield, Cpu, ExternalLink } from 'lucide-react';

export default function LanyardBadge() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  // Drag offsets
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // Springs for drop and oscillation physics (damping: 15, stiffness: 100 as requested)
  const springX = useSpring(dragX, { damping: 15, stiffness: 100 });
  const springY = useSpring(dragY, { damping: 15, stiffness: 100 });

  // Mouse tilt tracking
  const mouseTiltX = useMotionValue(0);
  const mouseTiltY = useMotionValue(0);
  const smoothTiltX = useSpring(mouseTiltX, { damping: 20, stiffness: 150 });
  const smoothTiltY = useSpring(mouseTiltY, { damping: 20, stiffness: 150 });

  // Glare coordinates
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Dynamic strap calculation relative to drag
  const [strapEnd, setStrapEnd] = useState({ x: 150, y: 95 });

  // Update strap endpoint as card is dragged or moves
  useEffect(() => {
    const unsubscribeX = springX.on('change', (latestX) => {
      setStrapEnd((prev) => ({ ...prev, x: 150 + latestX }));
    });
    const unsubscribeY = springY.on('change', (latestY) => {
      setStrapEnd((prev) => ({ ...prev, y: 95 + latestY }));
    });
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [springX, springY]);

  // Handle cursor 3D tilt
  const handleMouseMove = (e) => {
    if (!cardRef.current || isDragging) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1; // -1 to 1
    const normY = (y / rect.height) * 2 - 1; // -1 to 1

    // rotateX is driven by Y, rotateY is driven by X (up to 25 deg as requested)
    mouseTiltX.set(-normY * 22);
    mouseTiltY.set(normX * 22);

    // Dynamic specular holographic glare position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.8 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseTiltX.set(0);
    mouseTiltY.set(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[360px] h-[520px] flex flex-col items-center justify-start select-none perspective-container"
      onMouseMove={handleMouseMove}
    >
      {/* 1. TOP CEILING MOUNT BRACKET */}
      <div className="absolute top-0 z-30 flex flex-col items-center">
        {/* Metal ceiling clamp with screws */}
        <div className="w-24 h-5 bg-[#1a1a1a] border border-[#333333] flex items-center justify-between px-2 shadow-2xl">
          <div className="w-2 h-2 rounded-full bg-[#3a3a3a] border border-black flex items-center justify-center">
            <div className="w-1 h-[1px] bg-black rotate-45" />
          </div>
          <span className="text-[8px] font-mono tracking-widest text-[#8c8c8c] uppercase">
            #RH-2026
          </span>
          <div className="w-2 h-2 rounded-full bg-[#3a3a3a] border border-black flex items-center justify-center">
            <div className="w-1 h-[1px] bg-black -rotate-45" />
          </div>
        </div>
        {/* Anchor loop */}
        <div className="w-4 h-3.5 border-2 border-[#555] rounded-b-md bg-[#0d0d0d]" />
      </div>

      {/* 2. DYNAMIC STRAP / LANYARD (SVG) */}
      <svg
        className="absolute top-0 left-0 w-full h-[140px] pointer-events-none z-10 overflow-visible"
        viewBox="0 0 300 140"
      >
        <defs>
          <linearGradient id="strapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="50%" stopColor="#2e2e2e" />
            <stop offset="100%" stopColor="#141414" />
          </linearGradient>
        </defs>

        {/* Dynamic curved ribbon connecting top (150, 14) to card clip (strapEnd.x, strapEnd.y) */}
        <path
          d={`M 150 14 Q ${150 + (strapEnd.x - 150) * 0.4} ${strapEnd.y * 0.55} ${strapEnd.x} ${strapEnd.y}`}
          stroke="url(#strapGrad)"
          strokeWidth="16"
          strokeLinecap="square"
          fill="none"
        />
        <path
          d={`M 150 14 Q ${150 + (strapEnd.x - 150) * 0.4} ${strapEnd.y * 0.55} ${strapEnd.x} ${strapEnd.y}`}
          stroke="#404040"
          strokeWidth="1"
          strokeDasharray="2 3"
          fill="none"
        />

        {/* Ribbon tech typography path */}
        <text
          fill="#8c8c8c"
          fontSize="7"
          fontFamily="monospace"
          letterSpacing="2"
          textAnchor="middle"
        >
          <textPath href="#textCurve" startOffset="50%">
            ROHIT KUMAR // DEV PASS 2026
          </textPath>
        </text>
        <path
          id="textCurve"
          d={`M 150 14 Q ${150 + (strapEnd.x - 150) * 0.4} ${strapEnd.y * 0.55} ${strapEnd.x} ${strapEnd.y}`}
          fill="none"
        />
      </svg>

      {/* 3. DROPPING & OSCILLATING CARD CONTAINER WITH HARMONIC PENDULUM INITIAL ENTRY */}
      <motion.div
        initial={{ y: -340, rotate: -16, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          damping: 15,
          stiffness: 100,
          mass: 1.2,
          delay: 0.15,
        }}
        drag
        dragConstraints={{ left: -80, right: 80, top: -30, bottom: 90 }}
        dragElastic={0.45}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        style={{
          x: springX,
          y: springY,
          cursor: isDragging ? 'grabbing' : 'grab',
          touchAction: 'none',
        }}
        className="relative z-20 mt-16 flex flex-col items-center"
      >
        {/* METALLIC SWIVEL CLIP & CARABINER */}
        <div className="flex flex-col items-center -mb-2 z-30">
          {/* Swivel Ring */}
          <div className="w-8 h-4 border-2 border-[#555] rounded-full bg-[#1c1c1c] shadow-md" />
          {/* Metal Spring Hook */}
          <div className="w-3.5 h-6 bg-gradient-to-b from-[#444] to-[#222] border border-[#555] rounded-sm relative flex items-center justify-center">
            <div className="w-1 h-3 bg-[#666] rounded-full" />
          </div>
          {/* Plastic Adapter Clip */}
          <div className="w-7 h-2.5 bg-[#0d0d0d] border border-[#333] rounded-t-sm" />
        </div>

        {/* 4. THE 3D TILT ID CARD ITSELF */}
        <motion.div
          ref={cardRef}
          style={{
            rotateX: smoothTiltX,
            rotateY: smoothTiltY,
            transformPerspective: 1200,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-[290px] sm:w-[310px] bg-[#0d0d0d] border border-[#262626] rounded-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(255,255,255,0.03)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(255,255,255,0.08)] hover:border-[#404040]"
        >
          {/* Specular Holographic Glare Layer */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(400px circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.05) 30%, transparent 70%)`,
              mixBlendMode: 'screen',
            }}
          />

          {/* Holographic Prismatic Edge Sheen */}
          <div className="absolute inset-0 pointer-events-none glare-shimmer opacity-40 z-20" />

          {/* CARD TOP EYELET PUNCH-HOLE */}
          <div className="w-full flex items-center justify-center -mt-2 mb-3">
            <div className="w-12 h-3 bg-[#000000] border border-[#262626] rounded-full flex items-center justify-center">
              <div className="w-8 h-1 bg-[#1a1a1a] rounded-full" />
            </div>
          </div>

          {/* CARD HEADER & SECURITY CHIP */}
          <div className="flex items-center justify-between border-b border-[#262626] pb-3 mb-4">
            <div className="flex items-center gap-2">
              {/* Microchip Graphic */}
              <div className="w-6 h-5 rounded bg-[#1c1c1c] border border-[#333] p-0.5 flex flex-col justify-between">
                <div className="h-[2px] w-full bg-[#444]" />
                <div className="flex justify-between">
                  <div className="w-1.5 h-1.5 bg-[#555] rounded-xs" />
                  <div className="w-1.5 h-1.5 bg-[#555] rounded-xs" />
                </div>
                <div className="h-[2px] w-full bg-[#444]" />
              </div>
              <div>
                <div className="text-[10px] font-mono tracking-wider text-white font-bold">
                  VERIFIED // ENG
                </div>
                <div className="text-[8px] font-mono text-[#8c8c8c]">
                  SEC_LEVEL: 04 // 2026
                </div>
              </div>
            </div>

            <span className="text-[9px] font-mono text-white/50 border border-white/10 px-1.5 py-0.5 rounded uppercase">
              ID: RH-94820
            </span>
          </div>

          {/* AVATAR PHOTO WITH BRUTALIST FRAME */}
          <div className="relative mb-4 group">
            {/* Corner registration marks */}
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-white/60 z-20" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-white/60 z-20" />
            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-white/60 z-20" />
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-white/60 z-20" />

            <div className="relative w-full h-44 bg-[#050505] border border-[#262626] overflow-hidden flex items-center justify-center">
              <img
                src="/avatar.jpg"
                alt="Rohit Kumar"
                className="w-full h-full object-cover grayscale contrast-125 object-top"
                loading="eager"
              />
              {/* Scanline CRT overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.04] to-transparent pointer-events-none opacity-50" />
              
              {/* In-photo watermark */}
              <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-xs border border-white/20 px-1.5 py-0.5 text-[8px] font-mono text-white/80">
                REC 04.10.26
              </div>
            </div>
          </div>

          {/* NAME & ROLE */}
          <div className="space-y-1 mb-3">
            <h3 className="text-xl font-mono font-bold tracking-tight text-white flex items-center justify-between">
              ROHIT KUMAR
              <span className="text-[10px] text-zinc-500 font-normal">DEV.SYS</span>
            </h3>
            <div className="inline-block bg-[#171717] border border-[#2d2d2d] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-zinc-300">
              Full Stack Engineer
            </div>
          </div>

          {/* PULSED STATUS INDICATOR */}
          <div className="flex items-center gap-2 mb-4 bg-black/60 border border-[#262626] px-2.5 py-1.5 rounded-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-wider">
              Available for Opportunities
            </span>
          </div>

          {/* MINIMALIST BARCODE & FOOTER SERIAL */}
          <div className="pt-2 border-t border-[#262626] flex flex-col items-center gap-1.5">
            {/* SVG Authentic Barcode */}
            <svg
              className="w-full h-7 opacity-85"
              viewBox="0 0 240 28"
              fill="currentColor"
            >
              {/* Generated vertical barcode bars */}
              <rect x="0" y="0" width="3" height="28" fill="#ffffff" />
              <rect x="5" y="0" width="1.5" height="28" fill="#ffffff" />
              <rect x="8" y="0" width="4" height="28" fill="#ffffff" />
              <rect x="14" y="0" width="1" height="28" fill="#ffffff" />
              <rect x="17" y="0" width="2.5" height="28" fill="#ffffff" />
              <rect x="22" y="0" width="5" height="28" fill="#ffffff" />
              <rect x="29" y="0" width="2" height="28" fill="#ffffff" />
              <rect x="33" y="0" width="1" height="28" fill="#ffffff" />
              <rect x="36" y="0" width="3.5" height="28" fill="#ffffff" />
              <rect x="42" y="0" width="2" height="28" fill="#ffffff" />
              <rect x="46" y="0" width="4" height="28" fill="#ffffff" />
              <rect x="52" y="0" width="1.5" height="28" fill="#ffffff" />
              <rect x="56" y="0" width="3" height="28" fill="#ffffff" />
              <rect x="61" y="0" width="5" height="28" fill="#ffffff" />
              <rect x="68" y="0" width="1" height="28" fill="#ffffff" />
              <rect x="71" y="0" width="2" height="28" fill="#ffffff" />
              <rect x="75" y="0" width="4" height="28" fill="#ffffff" />
              <rect x="81" y="0" width="2" height="28" fill="#ffffff" />
              <rect x="85" y="0" width="1.5" height="28" fill="#ffffff" />
              <rect x="88" y="0" width="3" height="28" fill="#ffffff" />
              <rect x="93" y="0" width="4.5" height="28" fill="#ffffff" />
              <rect x="100" y="0" width="1" height="28" fill="#ffffff" />
              <rect x="103" y="0" width="3" height="28" fill="#ffffff" />
              <rect x="108" y="0" width="2" height="28" fill="#ffffff" />
              <rect x="112" y="0" width="5" height="28" fill="#ffffff" />
              <rect x="119" y="0" width="1.5" height="28" fill="#ffffff" />
              <rect x="123" y="0" width="3.5" height="28" fill="#ffffff" />
              <rect x="129" y="0" width="2" height="28" fill="#ffffff" />
              <rect x="133" y="0" width="4" height="28" fill="#ffffff" />
              <rect x="139" y="0" width="1" height="28" fill="#ffffff" />
              <rect x="142" y="0" width="3" height="28" fill="#ffffff" />
              <rect x="147" y="0" width="5" height="28" fill="#ffffff" />
              <rect x="154" y="0" width="2" height="28" fill="#ffffff" />
              <rect x="158" y="0" width="1.5" height="28" fill="#ffffff" />
              <rect x="161" y="0" width="3.5" height="28" fill="#ffffff" />
              <rect x="166" y="0" width="2" height="28" fill="#ffffff" />
              <rect x="170" y="0" width="4" height="28" fill="#ffffff" />
              <rect x="176" y="0" width="1" height="28" fill="#ffffff" />
              <rect x="179" y="0" width="3" height="28" fill="#ffffff" />
              <rect x="184" y="0" width="2" height="28" fill="#ffffff" />
              <rect x="188" y="0" width="5" height="28" fill="#ffffff" />
              <rect x="195" y="0" width="1.5" height="28" fill="#ffffff" />
              <rect x="198" y="0" width="3" height="28" fill="#ffffff" />
              <rect x="203" y="0" width="4" height="28" fill="#ffffff" />
              <rect x="209" y="0" width="1" height="28" fill="#ffffff" />
              <rect x="212" y="0" width="3.5" height="28" fill="#ffffff" />
              <rect x="217" y="0" width="2" height="28" fill="#ffffff" />
              <rect x="221" y="0" width="4" height="28" fill="#ffffff" />
              <rect x="227" y="0" width="2" height="28" fill="#ffffff" />
              <rect x="231" y="0" width="5" height="28" fill="#ffffff" />
              <rect x="238" y="0" width="2" height="28" fill="#ffffff" />
            </svg>
            <div className="w-full flex items-center justify-between text-[8px] font-mono text-[#8c8c8c] tracking-widest">
              <span>*94820-2026-RH*</span>
              <span>AUTHENTIC DEV PASS</span>
            </div>
          </div>
        </motion.div>

        {/* Micro instructions under badge */}
        <div className="mt-3 text-[10px] font-mono text-zinc-600 flex items-center gap-1.5 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <span>DRAG / FLICK OR HOVER BADGE</span>
        </div>
      </motion.div>
    </div>
  );
}
