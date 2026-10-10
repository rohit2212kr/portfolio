import React, { useState, useEffect } from 'react';
import { Terminal, Shield, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar({ onOpenContact }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' UTC'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-mono font-black text-xs transition-transform group-hover:rotate-90">
              R
            </div>
            <span className="font-mono text-sm tracking-widest font-semibold text-white">
              ROHIT<span className="text-[#8c8c8c]">.DEV</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-2 pl-4 border-l border-[#262626]">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] font-mono text-[#8c8c8c] tracking-wider">
              SYS_ACTIVE // {time || '00:00:00 UTC'}
            </span>
          </div>
        </div>

        {/* Center: Monochromatic Section Jumps */}
        <nav className="hidden lg:flex items-center gap-8 font-mono text-xs tracking-wider">
          <a
            href="#projects"
            className="text-[#8c8c8c] hover:text-white transition-colors duration-150"
          >
            //01 PROJECTS
          </a>
          <a
            href="#arsenal"
            className="text-[#8c8c8c] hover:text-white transition-colors duration-150"
          >
            //02 ARSENAL
          </a>
          <a
            href="#terminal"
            className="text-[#8c8c8c] hover:text-white transition-colors duration-150"
          >
            //03 TERMINAL
          </a>
        </nav>

        {/* Right: Quick actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/rohit2212kr"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-1.5 text-[#8c8c8c] hover:text-white hover:bg-[#141414] border border-transparent hover:border-[#262626] rounded transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-kumar-896187214"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-1.5 text-[#8c8c8c] hover:text-white hover:bg-[#141414] border border-transparent hover:border-[#262626] rounded transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenContact}
            className="ml-2 px-3 py-1 bg-[#ffffff] hover:bg-[#000000] text-black hover:text-white border border-[#ffffff] font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200"
          >
            CONNECT
          </button>
        </div>
      </div>
    </header>
  );
}
