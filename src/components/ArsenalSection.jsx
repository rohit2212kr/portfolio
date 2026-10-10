import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  Layout, 
  Code2, 
  Check, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Smartphone, 
  Gauge, 
  ArrowUpRight, 
  GitBranch, 
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react';

export default function ArsenalSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const services = [
    {
      title: 'Custom Full-Stack Web Applications',
      stack: 'React • Node.js • Express • MongoDB',
      badge: 'FAST TURNAROUND',
      desc: 'Scalable, production-grade web applications engineered from scratch. Features clean component architecture, secure JWT authentication, robust state flows, and optimized MongoDB schemas.',
      features: ['SaaS MVPs & Client Portals', 'Responsive Dashboards & Admin Panels', 'RESTful Controller & Service Architecture'],
    },
    {
      title: 'High-Conversion Landing Pages & Modern UI',
      stack: 'Vite • Tailwind CSS • Framer Motion',
      badge: 'SEO READY // 60 FPS',
      desc: 'Pixel-perfect, hyper-aesthetic interfaces engineered to capture attention and convert visitors. Built with brutalist precision, fluid micro-interactions, responsive grids, and zero bloat.',
      features: ['High-Impact Visual Identity', 'Mobile-First Fluid Breakpoints', 'Sub-Second Page Load Optimization'],
    },
    {
      title: 'E-Commerce & Payment Gateway Integrations',
      stack: 'Stripe API • Webhooks • HMAC Signatures',
      badge: 'SECURE CHECKOUT',
      desc: 'Frictionless transaction workflows with atomic order validation, automated Stripe customer checkout sessions, and cryptographically verified webhook handlers for instant fulfillment.',
      features: ['One-Time & Recurring Subscriptions', 'Webhook HMAC Signature Verification', 'Cart State & Inventory Syncing'],
    },
    {
      title: 'API Engineering & Third-Party Services',
      stack: 'REST APIs • WhatsApp API • Postman',
      badge: 'HIGH THROUGHPUT',
      desc: 'Resilient API design and external tool integrations. Automated messaging pipelines (e.g. WhatsApp reservation alerts), rate limiting, and zero-downtime error resilience.',
      features: ['Third-Party Webhook Integrations', 'Custom REST Endpoints & Authentication', 'Structured Error Handling & Logging'],
    },
  ];

  const standards = [
    {
      metric: '95+',
      title: 'Lighthouse Score',
      subtitle: 'Speed & Performance Guarantee',
      badge: 'PERFORMANCE',
      desc: 'Sub-second First Contentful Paint (FCP), Core Web Vitals audited, optimized assets, zero layout shifts.',
      icon: <Gauge className="w-5 h-5 text-white" />,
    },
    {
      metric: '100%',
      title: 'Cross-Device Responsive',
      subtitle: 'Mobile, Tablet & Desktop Tested',
      badge: 'ADAPTIVE UI',
      desc: 'Fluid responsive breakpoints, touch-optimized ergonomics, high-DPI scaling, and cross-browser consistency.',
      icon: <Smartphone className="w-5 h-5 text-white" />,
    },
    {
      metric: 'PROD',
      title: 'Production Ready',
      subtitle: 'CI/CD & Zero-Downtime Handoff',
      badge: 'DEPLOYMENT',
      desc: 'Vercel cloud deployments, GitHub repo handoff, environment variable isolation, and clean maintenance documentation.',
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
    },
  ];

  const categories = [
    {
      title: 'FRONTEND ARCHITECTURE',
      icon: <Layout className="w-4 h-4 text-white" />,
      tag: 'CLIENT-TIER',
      skills: [
        { name: 'React', level: '94%' },
        { name: 'Vite', level: '92%' },
        { name: 'Tailwind CSS', level: '96%' },
        { name: 'JavaScript (ES6+)', level: '92%' },
        { name: 'Framer Motion', level: '90%' },
        { name: 'Responsive Systems', level: '95%' },
      ],
    },
    {
      title: 'BACKEND & APIS',
      icon: <Cpu className="w-4 h-4 text-white" />,
      tag: 'SERVER-TIER',
      skills: [
        { name: 'Node.js', level: '90%' },
        { name: 'Express.js', level: '92%' },
        { name: 'RESTful APIs', level: '95%' },
        { name: 'Stripe API / Webhooks', level: '88%' },
        { name: 'JWT & Auth Guards', level: '91%' },
        { name: 'WhatsApp API Sync', level: '86%' },
      ],
    },
    {
      title: 'DATABASES & PERSISTENCE',
      icon: <Database className="w-4 h-4 text-white" />,
      tag: 'DATA-TIER',
      skills: [
        { name: 'MongoDB Atlas', level: '92%' },
        { name: 'Mongoose ODM', level: '92%' },
        { name: 'Schema Architecture', level: '90%' },
        { name: 'SQL / Relational Basics', level: '82%' },
        { name: 'Query Optimization', level: '85%' },
        { name: 'Data Validation', level: '93%' },
      ],
    },
    {
      title: 'DEV & DEPLOYMENT TOOLING',
      icon: <GitBranch className="w-4 h-4 text-white" />,
      tag: 'DEVOPS-TIER',
      skills: [
        { name: 'Git & GitHub Workflow', level: '95%' },
        { name: 'Vercel Cloud Deploy', level: '94%' },
        { name: 'Postman API Auditing', level: '92%' },
        { name: 'CI/CD Pipelines', level: '88%' },
        { name: 'Linux CLI & Bash', level: '90%' },
        { name: 'Lighthouse Auditing', level: '95%' },
      ],
    },
  ];

  return (
    <section id="arsenal" className="py-24 border-b border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#262626]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#8c8c8c]">
                SECTION // 03 - SERVICES & ARSENAL
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-white uppercase">
              SERVICES & ARSENAL
            </h2>
          </div>
          <p className="text-sm font-mono text-[#8c8c8c] mt-4 md:mt-0 max-w-md">
            Production-grade engineering across custom full-stack web applications, conversion-driven landing pages, and battle-tested delivery standards.
          </p>
        </div>

        {/* 1. BENTO CARD: CLIENT SERVICES // DELIVERABLES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 bg-[#0d0d0d] border border-white/10 hover:border-white/20 p-6 sm:p-8 rounded-xl shadow-2xl relative overflow-hidden transition-all duration-300"
        >
          {/* Subtle Technical Grid background */}
          <div className="absolute inset-0 dense-grid-bg opacity-15 pointer-events-none" />

          {/* Card Header Bar */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#262626] gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <div>
                <h3 className="text-xl sm:text-2xl font-black font-mono tracking-tight text-white uppercase">
                  CLIENT SERVICES // DELIVERABLES
                </h3>
                <p className="text-xs font-mono text-[#8c8c8c] mt-0.5">
                  Full-cycle freelance development with rapid turnaround & zero technical debt.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white border border-white/20 px-2.5 py-1 bg-black">
                ENGAGEMENT: CONTRACT & FREELANCE
              </span>
            </div>
          </div>

          {/* 4 Services Bento Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((svc, sIdx) => (
              <div
                key={sIdx}
                className="bg-[#050505] border border-[#222] hover:border-white/30 p-5 sm:p-6 rounded-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#141414] border border-[#2d2d2d] text-zinc-300 group-hover:border-white/40 group-hover:text-white transition-colors">
                      {svc.badge}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-600">0{sIdx + 1}</span>
                  </div>

                  <h4 className="text-base sm:text-lg font-mono font-bold text-white mb-1.5 group-hover:text-white transition-colors">
                    {svc.title}
                  </h4>

                  <div className="text-[11px] font-mono text-[#8c8c8c] mb-3">
                    Stack: <span className="text-zinc-300">{svc.stack}</span>
                  </div>

                  <p className="text-xs font-sans text-zinc-400 leading-relaxed mb-4">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1a1a1a] space-y-1.5">
                  {svc.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                      <span className="w-1 h-1 bg-white" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 2. PRODUCTION STANDARDS MICRO-METRIC GRID (3 Brutalist Metric Cards) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-white" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8c8c8c]">
              PRODUCTION STANDARDS // VERIFIED GUARANTEES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {standards.map((std, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0d0d0d] border border-white/10 hover:border-white/25 p-6 rounded-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#222] mb-4">
                    <div className="flex items-center gap-2">
                      {std.icon}
                      <span className="text-[10px] font-mono text-[#8c8c8c] uppercase tracking-wider">
                        {std.badge}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500">STD.0{idx + 1}</span>
                  </div>

                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl sm:text-5xl font-black font-mono tracking-tighter text-white">
                      {std.metric}
                    </span>
                  </div>

                  <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wide mb-1">
                    {std.title}
                  </h4>
                  <div className="text-[11px] font-mono text-zinc-400 mb-3">
                    {std.subtitle}
                  </div>

                  <p className="text-xs font-sans text-zinc-400 leading-relaxed">
                    {std.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#1a1a1a] flex items-center justify-between text-[10px] font-mono text-[#666]">
                  <span>STANDARD: VERIFIED</span>
                  <span className="text-zinc-300">PASS</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. 4 CATEGORIZED ARSENAL CARDS */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-white" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8c8c8c]">
              TECHNICAL ARSENAL // CORE STACK MATRIX
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#0d0d0d] border border-white/10 hover:border-white/25 p-5 rounded-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#262626] mb-4">
                    <div className="flex items-center gap-2">
                      {cat.icon}
                      <span className="text-[10px] font-mono text-[#8c8c8c]">
                        {cat.tag}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500">0{idx + 1}</span>
                  </div>

                  <h3 className="font-mono font-bold text-sm text-white tracking-wide mb-4">
                    {cat.title}
                  </h3>

                  {/* Skills list */}
                  <ul className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex items-center justify-between text-xs font-mono border-b border-[#1a1a1a] pb-1.5"
                      >
                        <span className="text-zinc-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[11px] text-[#8c8c8c]">
                          {skill.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer status */}
                <div className="mt-5 pt-3 border-t border-[#1e1e1e] flex items-center justify-between text-[9px] font-mono text-[#666]">
                  <span>BENCHMARK: TESTED</span>
                  <span>STATUS: READY</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
