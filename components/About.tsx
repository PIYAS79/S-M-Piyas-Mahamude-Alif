'use client';

import { motion } from 'motion/react';
import { Award, Briefcase, Code, Brain, Compass, HelpCircle, Layers, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const stats = [
  {
    icon: <Briefcase className="w-5 h-5 text-orange-500" />,
    value: '3+ Years',
    label: 'Personal Work Experience',
    desc: 'Systems & App Architecture',
  },
  {
    icon: <Award className="w-5 h-5 text-orange-500" />,
    value: '10+',
    label: 'Completed Builds',
    desc: 'Full Stack & APIs',
  },
  {
    icon: <Code className="w-5 h-5 text-orange-500" />,
    value: '25+ Techs',
    label: 'Modern Ecosystem',
    desc: 'React, Node.js, DBs, Python',
  },
  {
    icon: <Brain className="w-5 h-5 text-orange-500" />,
    value: 'Top Tier',
    label: 'Problem Solving Mindset',
    desc: 'Research and Competitive Programming',
  },
];

const timeline = [
  {
    year: '2021',
    title: 'Began Software Engineering Journey',
    desc: 'Dived headfirst into programming concepts, web architectures, and algorithms. Mastered modern JavaScript dialects and C99 & C++ foundation classes.',
  },
  {
    year: '2022',
    title: 'Learned React & Frontend Ecosystems',
    desc: 'Architected client-focused SPAs and complex UI state models. Participated as Lead in the IASC All World Asteroid Search, winning 2nd Place nationally.',
  },
  {
    year: '2023',
    title: 'Scaled Full Stack Platforms',
    desc: 'Deep dived into Node.js, SQL, Express, databases (PostgreSQL, MongoDB), ORMs (Prisma, TypeORM), and secure token based authentication patterns.',
  },
  {
    year: 'Present',
    title: 'AI Engineering & System Architecture',
    desc: 'Executing smart features with LLM integration, exploring retrieval-augmented generation (RAG), high-performance databases, and hybrid system flows.',
  },
];

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
      isDark ? 'bg-black border-zinc-900/40' : 'bg-white border-zinc-200/60'
    }`}>
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-500/[0.03] rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-xs font-mono tracking-widest uppercase mb-3 block ${
              isDark ? 'text-orange-400' : 'text-orange-600'
            }`}
          >
            01 / INSIDE THE ENGINEER
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight transition-colors ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            The Developer Story
          </motion.h3>
          <div className="w-12 h-[2px] bg-orange-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Column: Story Core */}
          <div className={`lg:col-span-7 space-y-6 transition-colors ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`text-xl sm:text-2xl font-display font-semibold transition-colors ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}
            >
              Engineering with <span className="text-orange-600 font-mono font-medium">Clarity</span>, Purpose, and Speed.
            </motion.h4>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`leading-relaxed text-justify transition-colors ${isDark ? 'text-zinc-300' : 'text-zinc-805'}`}
            >
              I am S M Piyas Mahamude Alif, a Full Stack Developer, system builder, and AI enthusiast based in Dhaka, Bangladesh. Over the past 3+ years, I have calibrated my expertise to design, build, and deploy high-performance applications that deliver bulletproof backend architecture alongside pixel-perfect client interactions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`leading-relaxed text-justify transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-650'}`}
            >
              My passion lies in parsing raw complexity into clean modular structures. Whether database optimization, secure authentication structures, or developing next-generation intelligent services, I build with a clean-code culture and a research first mindset. 
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`leading-relaxed text-justify transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-650'}`}
            >
              Beyond standard software, I hold a deep appreciation for collaborative problem-solving, science, and space observation. Leading the IASC Asteroid Search Campaign national team is a testament to my dedication to technical rigor, system orchestration, and detail precision.
            </motion.p>

            {/* Quick Signature Indicators */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg border transition-all ${
                  isDark
                    ? 'bg-orange-950/20 border-orange-500/20 text-orange-400'
                    : 'bg-orange-50 border-orange-200 text-orange-600'
                }`}>
                  <Compass className="w-4 h-4" />
                </div>
                <span className={`text-sm font-mono transition-colors ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>System Exploration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg border transition-all ${
                  isDark
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-400'
                    : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                }`}>
                  <Layers className="w-4 h-4" />
                </div>
                <span className={`text-sm font-mono transition-colors ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>Clean Architecture</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium CSS Graphic placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative w-full max-w-sm aspect-square border rounded-3xl p-8 overflow-hidden glow-border flex flex-col items-center justify-center text-center shadow-inner transition-colors ${
                isDark
                  ? 'bg-[#09090b] border-stone-900'
                  : 'bg-[#fafafc] border-orange-500/10'
              }`}
            >
              <div className="absolute inset-0 grid-bg opacity-40"></div>
              
              {/* Spinning Neon Core */}
              <div className="relative w-36 h-36 mb-6">
                <div className="absolute inset-0 rounded-full border border-dashed border-orange-500/35 animate-spin-slow"></div>
                <div className={`absolute inset-2 rounded-full border border-double animate-spin-slow ${
                  isDark ? 'border-zinc-800' : 'border-zinc-200/60'
                }`} style={{ animationDirection: 'reverse' }}></div>
                <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-orange-600 to-orange-500 opacity-25 filter blur-xl animate-pulse"></div>
                
                {/* Center Core Node */}
                <div className={`absolute inset-10 rounded-full border flex items-center justify-center transition-all ${
                  isDark
                    ? 'bg-stone-950 border-orange-500/20 shadow-[0_4px_15px_rgba(234,88,12,0.15)]'
                    : 'bg-white border-orange-500/30'
                }`}>
                  <Brain className="w-8 h-8 animate-pulse text-orange-600" />
                </div>
              </div>

              <div className="relative z-10 text-xs font-mono tracking-widest text-orange-605 mb-2 uppercase">SYSTEM ENGINE CORE</div>
              <h5 className={`text-lg font-display font-bold transition-all ${isDark ? 'text-white' : 'text-zinc-900'}`}>S M Piyas Mahamude Alif</h5>
              <p className={`text-xs font-mono mt-1 transition-all ${isDark ? 'text-stone-500' : 'text-zinc-500'}`}>STATUS: CORE ENGINE ACTIVE</p>
            </motion.div>
          </div>

        </div>

        {/* Statistic Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`p-6 border rounded-xl transition-all duration-305 flex flex-col justify-between shadow-sm ${
                isDark
                  ? 'bg-zinc-950/60 border-zinc-900 hover:border-orange-500/30 hover:bg-black text-white'
                  : 'bg-white border-zinc-200 hover:border-orange-450 hover:bg-zinc-50/50'
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <span className={`p-2 rounded-lg border transition-all ${
                  isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                }`}>{stat.icon}</span>
                <span className="text-zinc-400 font-mono text-xs">0{idx + 1}</span>
              </div>
              <div>
                <div className={`text-2xl sm:text-3xl font-display font-bold mb-1 transition-colors ${
                  isDark ? 'text-white' : 'text-zinc-900'
                }`} style={{ textShadow: '0 0 10px rgba(0,0,0,0.01)' }}>
                  {stat.value}
                </div>
                <div className={`text-xs font-mono tracking-wider uppercase mb-2 transition-colors ${
                  isDark ? 'text-stone-400' : 'text-zinc-700'
                }`}>
                  {stat.label}
                </div>
                <p className={`text-xs leading-relaxed font-sans transition-colors ${
                  isDark ? 'text-zinc-400' : 'text-zinc-500'
                }`}>{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Beautiful Timeline Journey */}
        <div className={`border-t pt-20 transition-colors ${isDark ? 'border-zinc-900/40' : 'border-zinc-200'}`}>
          <div className="text-center mb-16">
            <h4 className={`text-xs font-mono tracking-widest uppercase mb-2 ${
              isDark ? 'text-orange-400' : 'text-orange-600'
            }`}>CALIBRATION TIMELINE</h4>
            <h5 className={`text-2xl font-display font-bold transition-all ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>Engineering Growth Journey</h5>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Timeline horizontal background rail */}
            <div className={`hidden md:block absolute top-[28px] left-8 right-8 h-[2px] z-0 transition-all ${
              isDark ? 'bg-zinc-900' : 'bg-zinc-200'
            }`}></div>

            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative z-10 p-6 rounded-2xl transition-all duration-300 shadow-sm border ${
                  isDark
                    ? 'bg-zinc-950/80 border-zinc-900 hover:border-orange-500/30 hover:bg-black text-white'
                    : 'bg-white border-zinc-200 hover:border-orange-400 hover:bg-zinc-50/40'
                }`}
              >
                {/* Year Badge Node */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 border text-xs font-mono tracking-widest font-bold rounded-lg mb-4 transition-all ${
                  isDark
                    ? 'bg-orange-950/20 border-orange-550/20 text-orange-400'
                    : 'bg-orange-50 border-orange-200 text-orange-600'
                }`}>
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  {item.year}
                </div>
                
                <h6 className={`text-sm font-display font-bold mb-2 transition-colors ${
                  isDark ? 'text-white hover:text-orange-400' : 'text-zinc-900 hover:text-orange-600'
                }`}>
                  {item.title}
                </h6>
                <p className={`text-xs leading-relaxed transition-colors text-justify ${
                  isDark ? 'text-zinc-400' : 'text-zinc-505'
                }`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
