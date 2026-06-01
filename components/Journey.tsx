'use client';

import { motion } from 'motion/react';
import { Award, GraduationCap, Telescope, Shield, Network, Zap, Brain } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const milestones = [
  {
    icon: <Brain className="w-5 h-5 text-orange-600" />,
    title: 'Generative AI & Machine Learning Journey',
    school: 'Self-Directed AI Engineering Path',
    time: '2026 - Present',
    desc: 'Exploring Machine Learning, Deep Learning, PyTorch, Transformer architectures, LLM systems, Retrieval-Augmented Generation (RAG), vector databases, AI agents, and modern Generative AI workflows. Building the foundation toward becoming an AI Engineer capable of designing intelligent, production-ready systems.',
    badge: 'AI Engineer',
    badgeColor: 'border-orange-250 text-orange-600 bg-orange-50',
  },
  {
    icon: <Network className="w-5 h-5 text-zinc-650" />,
    title: 'Full Stack System Architecture Expansion',
    school: 'Self-Directed Engineering & Exploration',
    time: '2023 - Present',
    desc: 'Designed asynchronous event systems, multi-tier database configurations, MVC structure migrations, and REST/WebSocket architectures. Built scalable full-stack applications using React, Next.js, Express.js, Prisma, PostgreSQL, MySQL, MongoDB, and cloud-based services while continuously refining software architecture and engineering practices.',
    badge: 'Architect',
    badgeColor: 'border-zinc-200 text-zinc-700 bg-zinc-100/60',
  },
  {
    icon: <Telescope className="w-5 h-5 text-orange-600" />,
    title: 'Lead Researcher | Team StarPlex',
    school: 'All World Asteroid Search Campaign IASC 2023',
    time: 'July 2023 - Oct 2023',
    desc: 'Led the Bangladesh team "StarPlex" in real-time astrometry analysis. Analyzed dark-sky FITS datasets for near-earth objects (NEOs). Achieved 2nd Place Nationally and qualified Bangladesh for the prestigious All World main round.',
    badge: 'National Achievement',
    badgeColor: 'border-orange-250 text-orange-600 bg-orange-50',
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-orange-600" />,
    title: 'Advanced Full Stack Training',
    school: 'Programming Hero (Level 1 & 2)',
    time: 'Jan 2023 - June 2023',
    desc: 'Completed intensive full-stack development training focused on React, Redux, TypeScript, Node.js, Express.js, MongoDB, authentication systems, REST APIs, and modern software development practices through extensive project-based learning.',
    badge: 'Elite Academy',
    badgeColor: 'border-orange-250 text-orange-600 bg-orange-50',
  },
  {
    icon: <Zap className="w-5 h-5 text-zinc-650" />,
    title: 'Self-Teaching & First Prototypes',
    school: 'Self-Guided Exploration',
    time: '2021',
    desc: 'Started learning programming fundamentals, web development, algorithms, and responsive design. Built early web projects, utility applications, and Arduino-based IoT prototypes while developing strong problem-solving skills.',
    badge: 'First Codes',
    badgeColor: 'border-zinc-200 text-zinc-700 bg-zinc-100/60',
  },
];

export default function Journey() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="journey" className={`py-24 relative overflow-hidden border-t transition-all duration-300 ${isDark ? 'bg-black border-zinc-900/40' : 'bg-white border-zinc-200'
      }`}>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-500/[0.02] rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className={`text-xs font-mono tracking-widest uppercase mb-3 block font-bold ${isDark ? 'text-orange-400' : 'text-orange-655'
            }`}>
            04 / TRAJECTORY
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight transition-colors ${isDark ? 'text-white' : 'text-zinc-900'
            }`}>
            Journey & Experience
          </h2>
          <div className="w-12 h-[2px] bg-orange-500 mx-auto mt-4"></div>
        </div>

        {/* Asteroid Mission Showcase High-Contrast Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`mb-16 p-6 sm:p-8 rounded-2xl border border-orange-400 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-6 transition-colors ${isDark ? 'bg-[#09090b] border-orange-550/30' : 'bg-[#fbfbfc] border-orange-200'
            }`}
        >
          {/* Mission backdrop graphics */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-orange-500/[0.015] rounded-full filter blur-2xl pointer-events-none animate-pulse"></div>

          <div className={`p-4 rounded-2xl border text-orange-600 flex-shrink-0 transition-all ${isDark ? 'bg-orange-950/20 border-orange-500/20' : 'bg-orange-55/80 border-orange-200'
            }`}>
            <Telescope className="w-10 h-10" />
          </div>

          <div className="space-y-2 flex-grow text-center md:text-left">
            <div className={`inline-flex px-2 py-0.5 rounded border text-[10px] font-mono tracking-widest font-semibold transition-all ${isDark ? 'bg-orange-950/20 border-orange-550/20 text-orange-400' : 'bg-orange-50 border-orange-200 text-orange-600'
              }`}>
              FEATURED SCIENTIFIC CAMPAIGN
            </div>
            <h3 className={`text-lg sm:text-xl font-display font-bold transition-colors ${isDark ? 'text-white' : 'text-zinc-900'
              }`}>
              IASC All World Asteroid Search Campaign 2023
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed max-w-2xl font-sans transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-650'
              }`}>
              Led team <strong className="text-orange-605 font-mono">“StarPlex”</strong> representing Bangladesh. Executed precise astronomic telemetry algorithms using astrometric suites to search for near-earth objects (NEOs). Succeeded in securing <strong className={`transition-colors ${isDark ? 'text-white font-bold' : 'text-zinc-950 font-bold'}`}>2nd Place Nationally</strong> and qualified for the international finals.
            </p>
          </div>

          <div className="text-center md:text-right flex-shrink-0">
            <p className="font-mono text-xs text-orange-655 font-bold uppercase">TEAM LEADER</p>
            <p className={`font-mono text-4xl font-black leading-none mt-1 transition-colors ${isDark ? 'text-white' : 'text-zinc-900'
              }`}>2ND</p>
            <p className="font-mono text-[9px] text-zinc-500 uppercase mt-1">PLACE NATIONALLY</p>
          </div>
        </motion.div>

        {/* Vertical Timeline Structure */}
        <div className={`relative border-l md:ml-32 pl-6 sm:pl-8 space-y-12 transition-all ${isDark ? 'border-zinc-900' : 'border-zinc-200/80'
          }`}>
          {milestones.map((milestone, idx) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative relative-timeline-card group"
            >
              {/* Timeline outer node circle */}
              <div className={`absolute -left-[39px] sm:-left-[45px] top-1.5 p-1.5 rounded-full border z-20 shadow-sm transition-all ${isDark
                  ? 'bg-stone-950 border-zinc-900 group-hover:border-orange-500 group-hover:bg-orange-950/40'
                  : 'bg-white border-zinc-200 group-hover:border-orange-500 group-hover:bg-orange-50'
                }`}>
                <div className={`w-2.5 h-2.5 rounded-full transition-colors ${isDark ? 'bg-stone-850 group-hover:bg-orange-500' : 'bg-zinc-300 group-hover:bg-orange-500'
                  }`}></div>
              </div>

              {/* Absolute Time Badge on the left for Larger Screens */}
              <div className={`hidden md:block absolute -left-48 top-1.5 w-32 text-right font-mono text-xs font-medium transition-colors ${isDark ? 'text-zinc-500 group-hover:text-orange-400' : 'text-zinc-500 group-hover:text-orange-600'
                }`}>
                {milestone.time}
              </div>

              {/* Card Container */}
              <div className={`p-6 border rounded-2xl transition-all duration-300 shadow-sm ${isDark
                  ? 'bg-[#09090b] hover:bg-black border-zinc-900 hover:border-orange-500/30'
                  : 'bg-white hover:bg-zinc-50/50 border-zinc-200 hover:border-orange-400'
                }`}>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                  <div>
                    {/* Only show time on small screens where the left sidebar is hidden */}
                    <p className="block md:hidden text-[10px] font-mono text-zinc-400 uppercase mb-1">
                      {milestone.time}
                    </p>
                    <h4 className={`text-base sm:text-lg font-display font-bold transition-colors ${isDark ? 'text-white group-hover:text-orange-400' : 'text-zinc-900 group-hover:text-orange-600'
                      }`}>
                      {milestone.title}
                    </h4>
                    <p className={`text-xs font-mono mt-0.5 font-semibold transition-colors ${isDark ? 'text-orange-400' : 'text-orange-605'
                      }`}>
                      {milestone.school}
                    </p>
                  </div>

                  {/* Category Pill Tag */}
                  <span className={`px-2.5 py-0.5 rounded border text-[10px] sm:text-xs font-mono font-medium transition-all ${isDark
                      ? milestone.badge === 'National Achievement' || milestone.badge === 'First Codes'|| milestone.badge === 'AI Engineer'
                        ? 'text-orange-400 border-orange-500/20 bg-orange-950/20'
                        : 'text-zinc-405 border-zinc-800 bg-zinc-900/30'
                      : milestone.badgeColor
                    }`}>
                    {milestone.badge.toUpperCase()}
                  </span>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed font-sans transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                  {milestone.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
