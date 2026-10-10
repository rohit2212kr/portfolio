import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Layout, Code2, Check, Award, Flame, Binary, GitBranch } from 'lucide-react';

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

  const categories = [
    {
      title: 'FRONTEND ARCHITECTURE',
      icon: <Layout className="w-4 h-4 text-white" />,
      tag: 'CLIENT-TIER',
      skills: [
        { name: 'React', level: '94%' },
        { name: 'Vite', level: '90%' },
        { name: 'Tailwind CSS', level: '95%' },
        { name: 'JavaScript (ES6+)', level: '92%' },
        { name: 'Framer Motion', level: '88%' },
        { name: 'Redux / State', level: '85%' },
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
        { name: 'JWT & Auth', level: '91%' },
        { name: 'Microservice Design', level: '82%' },
      ],
    },
    {
      title: 'DATABASES & INFRA',
      icon: <Database className="w-4 h-4 text-white" />,
      tag: 'DATA-TIER',
      skills: [
        { name: 'MongoDB', level: '90%' },
        { name: 'Mongoose ODM', level: '92%' },
        { name: 'SQL / PostgreSQL', level: '84%' },
        { name: 'Schema Modeling', level: '88%' },
        { name: 'Index Optimization', level: '80%' },
        { name: 'Redis Caching', level: '75%' },
      ],
    },
    {
      title: 'PROBLEM SOLVING & CS',
      icon: <Binary className="w-4 h-4 text-white" />,
      tag: 'ALGORITHMIC',
      skills: [
        { name: 'Data Structures', level: '92%' },
        { name: 'Algorithms (DSA)', level: '89%' },
        { name: 'LeetCode 300+', level: 'Top 12%' },
        { name: 'Time & Space Analysis', level: '95%' },
        { name: 'System Design', level: '82%' },
        { name: 'Git & CLI Mastery', level: '94%' },
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
                SECTION // 02
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-white uppercase">
              TECHNICAL ARSENAL
            </h2>
          </div>
          <p className="text-sm font-mono text-[#8c8c8c] mt-4 md:mt-0 max-w-md">
            Engineered capabilities across full-stack systems, distributed persistence, and algorithmic performance.
          </p>
        </div>

        {/* Top: LeetCode Graphic Banner & Solved Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 bg-[#0d0d0d] border border-white/10 p-6 sm:p-8 rounded-xl shadow-2xl relative overflow-hidden"
        >
          {/* Technical Grid background */}
          <div className="absolute inset-0 dense-grid-bg opacity-15 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left metric: 300+ LeetCode Solved */}
            <div className="lg:col-span-5 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#262626] pb-6 lg:pb-0 lg:pr-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-mono text-[#8c8c8c] uppercase tracking-wider">
                  ALGORITHMIC PROFICIENCY // LEETCODE
                </span>
              </div>
              <div className="flex items-baseline gap-4 mt-1">
                <span className="text-5xl sm:text-6xl font-black font-mono tracking-tighter text-white">
                  300+
                </span>
                <span className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
                  Problems Solved
                </span>
              </div>
              <p className="text-xs font-mono text-[#8c8c8c] mt-3 leading-relaxed">
                Consistent algorithmic training focusing on dynamic programming, graph traversals, trees, heaps, and array manipulation.
              </p>
              
              <div className="mt-4 flex items-center gap-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black border border-[#333] text-[11px] font-mono text-zinc-300">
                  <Flame className="w-3.5 h-3.5 text-white" />
                  <span>CONSISTENCY: ACTIVE</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black border border-[#333] text-[11px] font-mono text-zinc-300">
                  <Award className="w-3.5 h-3.5 text-white" />
                  <span>ACCEPTANCE: 84.6%</span>
                </div>
              </div>
            </div>

            {/* Right: Brutalist Categorized Breakdown Bars */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono text-white uppercase tracking-wider flex justify-between">
                <span>CATEGORY BREAKDOWN</span>
                <span className="text-[#8c8c8c]">RATIO DISTRIBUTION</span>
              </div>

              {/* Easy */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-300">EASY TIER</span>
                  <span className="text-zinc-400">120+ / 140 SOLVED (85%)</span>
                </div>
                <div className="w-full h-3 bg-[#171717] border border-[#2d2d2d] rounded-xs overflow-hidden">
                  <div className="h-full bg-white transition-all duration-1000" style={{ width: '85%' }} />
                </div>
              </div>

              {/* Medium */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-300">MEDIUM TIER (CORE DSA)</span>
                  <span className="text-zinc-400">155+ / 200 SOLVED (77%)</span>
                </div>
                <div className="w-full h-3 bg-[#171717] border border-[#2d2d2d] rounded-xs overflow-hidden">
                  <div className="h-full bg-[#b8b8b8] transition-all duration-1000" style={{ width: '77%' }} />
                </div>
              </div>

              {/* Hard */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-300">HARD TIER</span>
                  <span className="text-zinc-400">28+ / 50 SOLVED (56%)</span>
                </div>
                <div className="w-full h-3 bg-[#171717] border border-[#2d2d2d] rounded-xs overflow-hidden">
                  <div className="h-full bg-[#666666] transition-all duration-1000" style={{ width: '56%' }} />
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* 4 Categorized Arsenal Cards */}
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
    </section>
  );
}
