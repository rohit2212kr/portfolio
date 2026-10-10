import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Terminal, ShieldCheck, Code, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import LanyardBadge from './LanyardBadge';

export default function HeroSection({ onOpenContact }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[92vh] pt-24 pb-16 flex items-center justify-center border-b border-[#262626]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: MINIMALIST INTRO & CALL TO ACTIONS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Tagline pill */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <span className="brutalist-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                FREELANCE FULL-STACK DEVELOPER // 2026
              </span>
              <span className="text-xs font-mono text-[#8c8c8c] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Available for Client Projects & Contracts
              </span>
            </motion.div>

            {/* Bold Brutalist Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] uppercase"
            >
              Engineering robust full-stack applications & developer tools.
            </motion.h1>

            {/* Summary description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#8c8c8c] leading-relaxed max-w-2xl font-sans"
            >
              Delivering custom full-stack web applications, high-converting interfaces, and resilient API integrations for founders, startups, and clients with zero technical debt and uncompromising speed.
            </motion.p>

            {/* Quick architectural spec tags */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs"
            >
              <div className="p-2.5 bg-[#0d0d0d] border border-[#262626] rounded-sm">
                <div className="text-[#8c8c8c] text-[10px] uppercase">Core Focus</div>
                <div className="text-white font-medium mt-0.5">MERN Architecture</div>
              </div>
              <div className="p-2.5 bg-[#0d0d0d] border border-[#262626] rounded-sm">
                <div className="text-[#8c8c8c] text-[10px] uppercase">Client Delivery</div>
                <div className="text-white font-medium mt-0.5">Fast Turnaround</div>
              </div>
              <div className="p-2.5 bg-[#0d0d0d] border border-[#262626] rounded-sm col-span-2 sm:col-span-1">
                <div className="text-[#8c8c8c] text-[10px] uppercase">Standards</div>
                <div className="text-white font-medium mt-0.5">95+ Lighthouse Score</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              {/* View Projects */}
              <a href="#projects" className="brutalist-btn">
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* GitHub Profile */}
              <a
                href="https://github.com/rohit2212kr"
                target="_blank"
                rel="noreferrer"
                className="brutalist-btn-secondary"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              {/* LinkedIn Icon Link */}
              <a
                href="https://www.linkedin.com/in/rohit-kumar-896187214"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 bg-[#0d0d0d] hover:bg-[#1a1a1a] text-[#8c8c8c] hover:text-white border border-[#262626] hover:border-white transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: INTERACTIVE 3D HANGING LANYARD BADGE */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <LanyardBadge />
          </div>

        </div>
      </div>
    </section>
  );
}
