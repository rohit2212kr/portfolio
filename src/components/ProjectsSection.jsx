import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight, Play, Database, Shield, Zap, Layers, RefreshCw, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

// Reusable 3D Perspective Tilt Card Component
function TiltCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    setGlarePos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative perspective-container bg-[#0d0d0d] border border-white/10 hover:border-white/25 transition-colors duration-300 rounded-xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8)] ${className}`}
    >
      {/* Specular White Holographic Glare Layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(500px circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.03) 40%, transparent 80%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

export default function ProjectsSection() {
  // AXORA Flow diagram interactive state
  const [activeFlowNode, setActiveFlowNode] = useState(0);
  const flowNodes = [
    { id: 0, title: 'Client UI', role: 'React + Vite', detail: 'Stateful cart & client-side caching' },
    { id: 1, title: 'Auth Guard', role: 'JWT & Bcrypt', detail: 'Protected headers & cookie exchange' },
    { id: 2, title: 'Stripe API', role: 'Checkout Session', detail: 'Secure PCI-compliant hosted intent' },
    { id: 3, title: 'Webhook Dispatch', role: 'HMAC SHA256', detail: 'Idempotent event listener & verification' },
    { id: 4, title: 'Order DB', role: 'MongoDB Atlas', detail: 'Atomically committed transaction' },
  ];

  // API EXPLORER interactive wireframe state
  const endpoints = [
    {
      method: 'GET',
      path: '/v1/users/current',
      status: 200,
      time: '34ms',
      json: `{\n  "status": "success",\n  "user": {\n    "id": "usr_9921",\n    "name": "Rohit Kumar",\n    "role": "system_architect",\n    "authenticated": true\n  }\n}`,
    },
    {
      method: 'POST',
      path: '/v1/auth/token/refresh',
      status: 201,
      time: '52ms',
      json: `{\n  "status": "authorized",\n  "access_token": "eyJhbGciOiJIUzI1Ni...",\n  "expires_in": 3600,\n  "scope": ["read", "write", "admin"]\n}`,
    },
    {
      method: 'GET',
      path: '/v1/metrics/latency',
      status: 200,
      time: '18ms',
      json: `{\n  "region": "ap-south-1",\n  "p50_latency": "12.4ms",\n  "p99_latency": "28.1ms",\n  "uptime": "99.98%"\n}`,
    },
    {
      method: 'POST',
      path: '/v1/stripe/webhook',
      status: 200,
      time: '41ms',
      json: `{\n  "event": "checkout.session.completed",\n  "processed": true,\n  "idempotency_key": "idemp_81029a"\n}`,
    },
  ];

  const [selectedEndpoint, setSelectedEndpoint] = useState(endpoints[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [responseOutput, setResponseOutput] = useState(endpoints[0].json);

  const triggerEndpointSimulation = (ep) => {
    setSelectedEndpoint(ep);
    setIsSimulating(true);
    setResponseOutput('// Requesting dispatch...\n// Verifying TLS 1.3 handshake...\n// Parsing byte buffer...');
    setTimeout(() => {
      setResponseOutput(ep.json);
      setIsSimulating(false);
    }, 280);
  };

  return (
    <section id="projects" className="py-24 border-b border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#262626]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#8c8c8c]">
                SECTION // 01
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-white uppercase">
              FEATURED PROJECTS
            </h2>
          </div>
          <p className="text-sm font-mono text-[#8c8c8c] mt-4 md:mt-0 max-w-md">
            Rigid 3D perspective cards with simulated architecture wireframes and dynamic monochrome interactions.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* ========================================================================= */}
          {/* PROJECT 1: AXORA */}
          {/* ========================================================================= */}
          <TiltCard className="flex flex-col justify-between p-6 sm:p-8">
            <div className="space-y-6">
              
              {/* Card Meta Top */}
              <div className="flex items-center justify-between border-b border-[#262626] pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono bg-[#171717] border border-[#2d2d2d] px-2 py-0.5 text-white">
                    PROJECT // 01
                  </span>
                  <span className="text-[10px] font-mono text-[#8c8c8c]">
                    FULL-STACK COMMERCE
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-400">PRODUCTION</span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-white uppercase">
                  Axora
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  High-Performance Modern E-Commerce Architecture
                </p>
                <p className="text-sm text-[#8c8c8c] mt-3 leading-relaxed">
                  Engineered with the MERN stack, featuring atomic cart state synchronization, secure Stripe API checkout workflows, signature-verified webhooks, and granular user authorization.
                </p>
              </div>

              {/* ARCHITECTURAL HIGHLIGHTS: INTERACTIVE E-COMMERCE FLOW DIAGRAM */}
              <div className="bg-[#050505] border border-[#262626] p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-[#8c8c8c]">
                  <span className="flex items-center gap-1.5 uppercase font-semibold text-zinc-300">
                    <Layers className="w-3.5 h-3.5" />
                    Architecture Flow Diagram
                  </span>
                  <span>CLICK NODE TO INSPECT</span>
                </div>

                {/* Flow Diagram Nodes */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {flowNodes.map((node) => {
                    const isSelected = activeFlowNode === node.id;
                    return (
                      <button
                        key={node.id}
                        onClick={() => setActiveFlowNode(node.id)}
                        className={`text-left p-2 border transition-all text-xs font-mono cursor-pointer rounded-xs flex flex-col justify-between h-20 ${
                          isSelected
                            ? 'bg-white text-black border-white shadow-lg'
                            : 'bg-[#0f0f0f] text-zinc-400 border-[#262626] hover:border-zinc-500 hover:text-white'
                        }`}
                      >
                        <div className="text-[9px] opacity-75 font-semibold">
                          0{node.id + 1}
                        </div>
                        <div>
                          <div className="font-bold text-[11px] leading-tight">
                            {node.title}
                          </div>
                          <div className={`text-[8px] truncate mt-0.5 ${isSelected ? 'text-zinc-800' : 'text-[#777]'}`}>
                            {node.role}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Active Node Detail Inspector */}
                <div className="mt-3 p-2.5 bg-[#0e0e0e] border border-[#222] rounded flex items-center justify-between font-mono text-xs">
                  <div>
                    <span className="text-[#8c8c8c] text-[10px] mr-2">PROTOCOL:</span>
                    <span className="text-white font-medium">
                      {flowNodes[activeFlowNode].title} ➔ {flowNodes[activeFlowNode].role}
                    </span>
                  </div>
                  <span className="text-[10px] text-zinc-400 hidden sm:inline">
                    {flowNodes[activeFlowNode].detail}
                  </span>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['MERN Stack', 'Stripe API', 'Redux Toolkit', 'JWT Auth', 'Tailwind CSS', 'Vite'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-[#121212] border border-[#262626] text-[11px] font-mono text-zinc-300 uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Links */}
            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#262626]">
              <a
                href="https://axora-dlb6.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="brutalist-btn flex-1 text-center"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/rohit2212kr/Axora"
                target="_blank"
                rel="noreferrer"
                className="brutalist-btn-secondary flex-1 text-center"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source</span>
              </a>
            </div>
          </TiltCard>


          {/* ========================================================================= */}
          {/* PROJECT 2: API EXPLORER */}
          {/* ========================================================================= */}
          <TiltCard className="flex flex-col justify-between p-6 sm:p-8">
            <div className="space-y-6">
              
              {/* Card Meta Top */}
              <div className="flex items-center justify-between border-b border-[#262626] pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono bg-[#171717] border border-[#2d2d2d] px-2 py-0.5 text-white">
                    PROJECT // 02
                  </span>
                  <span className="text-[10px] font-mono text-[#8c8c8c]">
                    DEVELOPER TOOLING
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-400">ACTIVE SUITE</span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-white uppercase">
                  API Explorer
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  High-Throughput Postman-Style REST Testing Suite
                </p>
                <p className="text-sm text-[#8c8c8c] mt-3 leading-relaxed">
                  Lightweight web-based API development and testing platform with zero telemetry bloat. Inspect response latency, manage authentication headers, and debug payloads.
                </p>
              </div>

              {/* POSTMAN-STYLE UI PREVIEW WIREFRAME */}
              <div className="bg-[#050505] border border-[#262626] rounded-lg overflow-hidden font-mono text-xs">
                
                {/* Wireframe Address Bar */}
                <div className="bg-[#0f0f0f] border-b border-[#262626] p-2 flex items-center gap-2">
                  <span className="bg-[#1f1f1f] text-white px-2 py-0.5 text-[10px] font-bold border border-[#333]">
                    {selectedEndpoint.method}
                  </span>
                  <div className="flex-1 bg-[#050505] border border-[#222] px-2 py-1 text-[11px] text-zinc-300 truncate">
                    https://api.explorer.io{selectedEndpoint.path}
                  </div>
                  <button
                    onClick={() => triggerEndpointSimulation(selectedEndpoint)}
                    className="px-2.5 py-1 bg-white text-black hover:bg-zinc-200 text-[10px] font-bold transition flex items-center gap-1 cursor-pointer"
                  >
                    <Play className="w-2.5 h-2.5 fill-current" />
                    SEND
                  </button>
                </div>

                {/* Wireframe Body: Endpoint History & Live JSON Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-12 min-h-[140px]">
                  
                  {/* Left: Endpoint History list */}
                  <div className="sm:col-span-5 border-b sm:border-b-0 sm:border-r border-[#262626] p-2 space-y-1 bg-[#0a0a0a]">
                    <div className="text-[9px] uppercase text-[#666] px-1 pb-1 font-semibold">
                      Endpoint History:
                    </div>
                    {endpoints.map((ep, idx) => {
                      const isActive = selectedEndpoint.path === ep.path;
                      return (
                        <div
                          key={idx}
                          onMouseEnter={() => triggerEndpointSimulation(ep)}
                          onClick={() => triggerEndpointSimulation(ep)}
                          className={`p-1.5 text-[10px] rounded cursor-pointer transition flex items-center justify-between ${
                            isActive
                              ? 'bg-[#1c1c1c] text-white border border-[#333]'
                              : 'text-[#888] hover:bg-[#121212] hover:text-white'
                          }`}
                        >
                          <div className="truncate flex items-center gap-1.5">
                            <span className="text-[9px] font-bold opacity-80">{ep.method}</span>
                            <span className="truncate">{ep.path}</span>
                          </div>
                          <span className="text-[9px] opacity-60 ml-1">{ep.time}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Right: Simulated Monochrome JSON Response */}
                  <div className="sm:col-span-7 p-2.5 bg-[#050505] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[9px] text-[#777] border-b border-[#1f1f1f] pb-1 mb-1.5">
                        <span className="flex items-center gap-1 text-zinc-300">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          STATUS: {selectedEndpoint.status} OK
                        </span>
                        <span>LATENCY: {selectedEndpoint.time}</span>
                      </div>
                      <pre className="text-[10px] text-zinc-300 font-mono overflow-x-auto leading-relaxed whitespace-pre select-text">
                        {responseOutput}
                      </pre>
                    </div>

                    <div className="text-[8px] text-[#555] text-right pt-1">
                      {isSimulating ? 'TRANSMITTING STREAM...' : '200 OK • 1.2KB • JSON'}
                    </div>
                  </div>

                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['React', 'Vite', 'Tailwind CSS', 'Axios Engine', 'Auth Testing', 'Endpoint History'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-[#121212] border border-[#262626] text-[11px] font-mono text-zinc-300 uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Links */}
            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#262626]">
              <a
                href="https://axoraa-gray.vercel.app/dashboard"
                target="_blank"
                rel="noreferrer"
                className="brutalist-btn flex-1 text-center"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/rohit2212kr/API-Explorer"
                target="_blank"
                rel="noreferrer"
                className="brutalist-btn-secondary flex-1 text-center"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source</span>
              </a>
            </div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}
