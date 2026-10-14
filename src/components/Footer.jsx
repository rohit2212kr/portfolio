import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Copy, Check, Mail, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './Icons';

// True Magnetic Button Component
function MagneticButton({ onClick, isCopied }) {
  const buttonRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Pull button up to 8px towards mouse
    x.set(distanceX * 0.25);
    y.set(distanceY * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: smoothX, y: smoothY }}
      className={`relative inline-flex items-center gap-2 px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
        isCopied
          ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]'
          : 'bg-[#121212] hover:bg-white text-zinc-300 hover:text-black border-[#262626] hover:border-white'
      }`}
    >
      {isCopied ? (
        <>
          <Check className="w-3.5 h-3.5" />
          <span>COPIED!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>COPY EMAIL</span>
        </>
      )}
    </motion.button>
  );
}

export default function Footer({ onOpenContact }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('rohit2212kr@gmail.com');
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      {/* 1. Extended Static Technical Colophon at page bottom */}
      <footer className="pt-16 pb-28 border-t border-[#262626] bg-[#050505] text-zinc-400 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white text-black font-black flex items-center justify-center text-[10px]">
                  R
                </div>
                <span className="font-bold text-white tracking-widest">
                  ROHIT KUMAR // 2026
                </span>
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed max-w-sm">
                Engineering full-stack architectures with brutalist minimalism, low latency, and uncompromising visual fidelity.
              </p>
              <div className="text-[11px] text-zinc-600">
                HOSTED ON VERCEL // 60 FPS ENGINE // REACT + VITE
              </div>
            </div>

            <div className="md:col-span-3 space-y-2">
              <div className="text-white text-[11px] uppercase font-bold tracking-wider mb-2">
                DIRECT CHANNELS
              </div>
              <div>
                <a
                  href="mailto:rohit2212kr@gmail.com"
                  className="text-zinc-400 hover:text-white transition flex items-center gap-1.5"
                >
                  <span>rohit2212kr@gmail.com</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/rohit2212kr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition flex items-center gap-1.5"
                >
                  <span>github.com/rohit2212kr</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/rohit-kumar-896187214"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition flex items-center gap-1.5"
                >
                  <span>linkedin.com/in/rohit-kumar</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 space-y-2">
              <div className="text-white text-[11px] uppercase font-bold tracking-wider mb-2">
                DEPLOYED REPOSITORIES
              </div>
              <div>
                <a
                  href="https://axoraa-gray.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition flex items-center gap-1.5"
                >
                  <span>Axora (E-Commerce)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
              <div>
                <a
                  href="https://api-explorer-lsa7.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition flex items-center gap-1.5"
                >
                  <span>API Explorer (Tooling)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
              <div>
                <a
                  href="https://cafe-sample-web.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition flex items-center gap-1.5"
                >
                  <span>Roast & Bloom Cafe (Booking)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

          </div>

          <div className="pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-600 gap-4">
            <div>© 2026 ROHIT KUMAR. ALL RIGHTS RESERVED.</div>
            <div className="flex items-center gap-4">
              <span>SECURITY LEVEL: 04</span>
              <span>•</span>
              <span>ZERO COLOR ACCENTS</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 2. CLEAN, FIXED BOTTOM NAVIGATION BAR WITH FROSTED GLASS EFFECT */}
      <aside aria-label="Bottom Navigation Bar" className="fixed bottom-0 left-0 right-0 z-40 bg-black/75 backdrop-blur-md border-t border-white/10 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Contact Trigger (Magnetic Button + Contact Form Trigger) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <MagneticButton onClick={copyEmail} isCopied={isCopied} />

            <button
              onClick={onOpenContact}
              className="px-3 py-1.5 bg-[#0d0d0d] hover:bg-[#1a1a1a] text-zinc-300 hover:text-white border border-[#262626] hover:border-zinc-500 font-mono text-xs uppercase tracking-wider transition-all duration-150 flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">MESSAGE FORM</span>
            </button>
          </div>

          {/* Center: Monochromatic Status */}
          <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-[#8c8c8c]">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>rohit2212kr@gmail.com</span>
          </div>

          {/* Right: Social Connect Icon Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* GitHub */}
            <a
              href="https://github.com/rohit2212kr"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xs transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rohit-kumar-896187214"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xs transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X Profile"
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xs transition-colors"
            >
              <TwitterXIcon className="w-4 h-4" />
            </a>
          </div>

        </div>
      </aside>
    </>
  );
}
