import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Maximize2, Minimize2, Circle, Copy, Check } from 'lucide-react';
import { ASCII_BANNER, ASCII_LANYARD, ASCII_LEETCODE } from '../utils/asciiArt';

export default function TerminalWidget({ onOpenContact }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isCopied, setIsCopied] = useState(false);
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  // Initial welcome sequence
  useEffect(() => {
    setHistory([
      {
        type: 'ascii',
        content: ASCII_BANNER,
      },
      {
        type: 'output',
        content: 'ROHIT KUMAR [PORTFOLIO TERMINAL v2.6.0-monochrome]\nType "help" or click suggested command chips below to inspect system.',
      },
    ]);
  }, []);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const executeCommand = (cmdRaw) => {
    const cmd = cmdRaw.trim();
    if (!cmd) return;

    // Add to command history for arrow navigation
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: 'prompt', content: cmd }];

    const lowerCmd = cmd.toLowerCase();

    if (lowerCmd === 'clear' || lowerCmd === 'cls') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (lowerCmd === 'help') {
      newHistory.push({
        type: 'output',
        content: `AVAILABLE COMMANDS:
  ls                 - List directory files & architectural modules
  cat about.txt      - Display engineering bio and philosophy
  skills             - Inspect frontend, backend & database arsenal
  cat axora          - View Axora MERN e-commerce architecture specs
  run api-explorer   - Execute simulated REST client engine diagnostics
  contact            - View email, social links & trigger dispatch
  banner             - Print stark ASCII art identity banner
  whoami             - Query current shell user identity
  date               - Print system timestamp
  clear              - Wipe terminal buffer`,
      });
    } else if (lowerCmd === 'ls' || lowerCmd === 'dir') {
      newHistory.push({
        type: 'output',
        content: `drwxr-xr-x  axora/             [MERN E-Commerce Core]
drwxr-xr-x  api-explorer/      [REST Testing Engine]
-rw-r--r--  about.txt          [Engineering Ethos & Bio]
-rw-r--r--  skills.json        [Arsenal Matrix]
-rw-r--r--  leetcode_stats.md  [300+ Solved Metrics]
-rwxr-xr-x  contact.sh         [rohit2212kr@gmail.com]
-rw-r--r--  resume.pdf         [Technical Resume]`,
      });
    } else if (lowerCmd === 'cat about.txt') {
      newHistory.push({
        type: 'output',
        content: `[ABOUT // ROHIT KUMAR]
------------------------------------------------------------
Role:       Full Stack Engineer & Developer Tooling Architect
Focus:      High-throughput web applications, clean API design,
            and strictly minimalist, high-performance interfaces.
Experience: Engineering end-to-end full-stack systems using React,
            Node.js, Express, and MongoDB.
Philosophy: Zero bloat. Pure brutalist clarity. Every byte and every
            millisecond counts.`,
      });
    } else if (lowerCmd === 'skills' || lowerCmd === 'cat skills.json') {
      newHistory.push({
        type: 'output',
        content: `[TECHNICAL ARSENAL // STACK MATRIX]
============================================================
Frontend:    React, Vite, Tailwind CSS, JavaScript (ES6+), Framer Motion, Redux
Backend:     Node.js, Express.js, REST APIs, Stripe Payment Gateways, JWT
Database:    MongoDB, Mongoose ODM, SQL, PostgreSQL, Data Modeling
Problem Solv: Data Structures & Algorithms, LeetCode 300+ Solved, System Design
Dev Tools:   Git, GitHub, Docker, Postman, Linux CLI, Vercel`,
      });
    } else if (lowerCmd === 'cat axora') {
      newHistory.push({
        type: 'output',
        content: `[PROJECT // AXORA ARCHITECTURAL MANIFEST]
============================================================
Deployment:  https://axora-dlb6.vercel.app/
Repository:  https://github.com/rohit2212kr/Axora
Stack:       React, Vite, Node.js, Express, MongoDB, Stripe API, Tailwind
Pipeline:    
  [Browser UI] 
    ➔ Global Cart State 
    ➔ Bearer JWT Auth Guard 
    ➔ Stripe Checkout Session API 
    ➔ Webhook HMAC SHA256 Signature Verification 
    ➔ Atomic Order Commit to MongoDB Atlas
Status:      ACTIVE // IN PRODUCTION`,
      });
    } else if (lowerCmd === 'run api-explorer') {
      newHistory.push({
        type: 'output',
        content: `[DISPATCHING API-EXPLORER ENGINE...]
============================================================
Target:      https://api-explorer-lsa7.vercel.app/
Repository:  https://github.com/rohit2212kr/API-Explorer
Benchmarking active endpoints:
  [200 OK] GET  /v1/auth/session          (28ms)
  [201 OK] POST /v1/requests/dispatch     (45ms)
  [200 OK] GET  /v1/headers/inspect       (19ms)
Features:    Authentication testing, zero-telemetry request history,
             real-time latency profiling, and dynamic JSON streaming.
Diagnostic:  ALL SYSTEMS NOMINAL (0 packet loss)`,
      });
    } else if (lowerCmd === 'contact' || lowerCmd === './contact.sh') {
      newHistory.push({
        type: 'output',
        content: `[CONNECT WITH ROHIT KUMAR]
============================================================
Email:      rohit2212kr@gmail.com (Click button or use footer)
GitHub:     https://github.com/rohit2212kr
LinkedIn:   https://www.linkedin.com/in/rohit-kumar-896187214
Status:     OPEN FOR FULL-STACK & DEVELOPER TOOLING ROLES`,
      });
      if (onOpenContact) {
        setTimeout(() => onOpenContact(), 600);
      }
    } else if (lowerCmd === 'banner') {
      newHistory.push({
        type: 'ascii',
        content: ASCII_BANNER,
      });
    } else if (lowerCmd === 'whoami') {
      newHistory.push({
        type: 'output',
        content: 'rohit // full_stack_engineer // uid=1000(rohit) gid=1000(dev)',
      });
    } else if (lowerCmd === 'date') {
      newHistory.push({
        type: 'output',
        content: new Date().toUTCString(),
      });
    } else if (lowerCmd.startsWith('sudo')) {
      newHistory.push({
        type: 'output',
        content: 'rohit is not in the sudoers file. This incident will be reported to root.',
      });
    } else {
      newHistory.push({
        type: 'output',
        content: `command not found: "${cmd}". Type "help" to list available commands.`,
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInputVal(commandHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistory.length === 0 || historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    }
  };

  const quickCommands = [
    'ls',
    'cat about.txt',
    'skills',
    'cat axora',
    'run api-explorer',
    'contact',
    'clear',
  ];

  return (
    <section id="terminal" className="py-24 border-b border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#262626]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#8c8c8c]">
                SECTION // 03
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-white uppercase">
              INTERACTIVE TERMINAL
            </h2>
          </div>
          <p className="text-sm font-mono text-[#8c8c8c] mt-4 md:mt-0 max-w-md">
            Type commands or trigger quick chips to execute live CLI routines, inspect system specs, and view ASCII outputs.
          </p>
        </div>

        {/* Quick Command Suggestion Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[11px] font-mono text-[#8c8c8c] uppercase mr-2">
            Suggested Routines:
          </span>
          {quickCommands.map((qCmd) => (
            <button
              key={qCmd}
              onClick={() => {
                setInputVal(qCmd);
                executeCommand(qCmd);
                inputRef.current?.focus();
              }}
              className="px-2.5 py-1 bg-[#0d0d0d] hover:bg-white text-zinc-300 hover:text-black border border-[#262626] hover:border-white font-mono text-xs transition-all duration-150 cursor-pointer"
            >
              $ {qCmd}
            </button>
          ))}
        </div>

        {/* TERMINAL WINDOW CONTAINER */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="w-full bg-[#050505] border border-white/20 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.95)] font-mono text-xs sm:text-sm cursor-text transition-all duration-300 hover:border-white/40"
        >
          {/* Terminal Window Header Bar */}
          <div className="bg-[#111111] border-b border-[#262626] px-4 py-2.5 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#2a2a2a] border border-[#444] flex items-center justify-center">
                <div className="w-1 h-1 bg-black rounded-full" />
              </div>
              <div className="w-3 h-3 rounded-full bg-[#2a2a2a] border border-[#444] flex items-center justify-center">
                <div className="w-1 h-1 bg-black rounded-full" />
              </div>
              <div className="w-3 h-3 rounded-full bg-[#2a2a2a] border border-[#444] flex items-center justify-center">
                <div className="w-1 h-1 bg-black rounded-full" />
              </div>
              <span className="text-[11px] text-[#8c8c8c] ml-2 font-mono">
                rohit@portfolio: ~ (bash)
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-[#8c8c8c]">
              <span>60 FPS // MONOCHROME</span>
              <TerminalIcon className="w-3.5 h-3.5 text-white opacity-60" />
            </div>
          </div>

          {/* Terminal Screen Body */}
          <div className="p-4 sm:p-6 min-h-[340px] max-h-[500px] overflow-y-auto space-y-4">
            {history.map((item, index) => {
              if (item.type === 'ascii') {
                return (
                  <pre
                    key={index}
                    className="text-[8px] sm:text-[10px] md:text-xs leading-none text-white font-mono select-none overflow-x-auto whitespace-pre pb-2"
                  >
                    {item.content}
                  </pre>
                );
              }

              if (item.type === 'prompt') {
                return (
                  <div key={index} className="flex items-center gap-2 text-white">
                    <span className="text-zinc-500 select-none">rohit@portfolio:~$</span>
                    <span className="font-semibold text-white">{item.content}</span>
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className="text-zinc-300 font-mono text-xs sm:text-[13px] leading-relaxed whitespace-pre-wrap pl-2 border-l border-zinc-700"
                >
                  {item.content}
                </div>
              );
            })}

            {/* Active Input Line */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-zinc-500 font-mono select-none flex-shrink-0">
                rohit@portfolio:~$
              </span>
              <div className="relative flex-1 flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  spellCheck={false}
                  autoComplete="off"
                  className="w-full bg-transparent text-white font-mono text-xs sm:text-[13px] outline-none border-none p-0 focus:ring-0"
                  aria-label="Terminal command input"
                />
                {/* Flashing block cursor indicator */}
                <span className="inline-block w-2 h-4 bg-white animate-pulse ml-0.5 pointer-events-none" />
              </div>
            </div>

            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Footer Info */}
          <div className="bg-[#0a0a0a] border-t border-[#1e1e1e] px-4 py-2 flex items-center justify-between text-[10px] text-[#666] font-mono">
            <span>PRESS TAB OR ARROWS FOR COMMAND HISTORY</span>
            <span>CLI ACTIVE • STDIN OPEN</span>
          </div>
        </div>

      </div>
    </section>
  );
}
