'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDownRight, FolderGit2, FileDown, PhoneCall } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const techStack = [
  { name: 'Next.js', color: 'text-zinc-800 border-zinc-200 bg-zinc-100/40' },
  { name: 'React', color: 'text-orange-600 border-orange-200 bg-orange-50/50' },
  { name: 'TypeScript', color: 'text-orange-600 border-orange-200 bg-orange-50/50' },
  { name: 'Node.js', color: 'text-zinc-700 border-zinc-200 bg-zinc-100/30' },
  { name: 'Express.js', color: 'text-orange-600 border-orange-200 bg-orange-50/40' },
  { name: 'MongoDB', color: 'text-orange-600 border-orange-200 bg-orange-50/55' },
  { name: 'PostgreSQL', color: 'text-zinc-800 border-zinc-200 bg-zinc-100/40' },
  { name: 'Prisma', color: 'text-zinc-700 border-zinc-200 bg-zinc-100/30' },
  { name: 'Tailwind CSS', color: 'text-orange-600 border-orange-200 bg-orange-50/50' },
  { name: 'SQL', color: 'text-orange-600 border-orange-200 bg-orange-50/55' },
  { name: 'Python', color: 'text-zinc-800 border-zinc-200 bg-zinc-100/30' },
  { name: 'Linux', color: 'text-orange-600 border-orange-200 bg-orange-50/55' },
  { name: 'Git', color: 'text-zinc-800 border-zinc-200 bg-zinc-100/30' },
];

export default function Hero() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const isDark = theme === 'dark';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden grid-bg transition-colors duration-300 ${isDark ? 'bg-[#000000]' : 'bg-white'
        } `}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      {isHovered && (
        <div
          className="absolute pointer-events-none inset-0 z-0 transition-opacity duration-300"
          style={{
            background: isDark
              ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(234, 88, 12, 0.12), rgba(0, 0, 0, 0.8), transparent 75%)`
              : `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(234, 88, 12, 0.08), rgba(9, 9, 11, 0.02), transparent 75%)`,
          }}
        />
      )}

      {/* Decorative Background Elements */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-[120px] pointer-events-none transition-colors ${isDark ? 'bg-orange-500/[0.03]' : 'bg-orange-500/5'
        }`}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full filter blur-[120px] pointer-events-none transition-colors ${isDark ? 'bg-orange-600/[0.02]' : 'bg-orange-600/[0.03]'
        }`} style={{ animationDelay: '2s' }}></div>

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Top Mini Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`mb-8 inline-flex items-center gap-2 px-3 py-1 border rounded-full text-xs font-mono tracking-widest uppercase shadow-sm transition-all ${isDark
              ? 'bg-orange-950/20 border-orange-500/20 text-orange-400'
              : 'bg-orange-50 border-orange-200 text-orange-600'
            }`}
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
          Available for international roles
        </motion.div>

        {/* Animated Developer Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-none mb-6 relative"
        >
          <span className={`block transition-all ${isDark ? 'text-white' : 'text-gradient'}`}>S M Piyas</span>
          <span className={`block text-gradient-neon filter transition-all ${isDark ? 'drop-shadow-[0_0_25px_rgba(234,88,12,0.3)]' : 'drop-shadow-[0_0_25px_rgba(234,88,12,0.15)]'
            }`}>Mahamude Alif</span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-lg sm:text-2xl font-mono max-w-3xl mb-6 tracking-wide transition-colors ${isDark ? 'text-zinc-300' : 'text-zinc-700'
            }`}
        >
          Full Stack Developer <span className="text-orange-500">|</span> AI Enthusiast <span className="text-orange-500">|</span> System Builder
        </motion.p>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`text-sm sm:text-base md:text-lg max-w-2xl mb-10 leading-relaxed font-sans transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-650'
            }`}
        >
          I build scalable digital systems, intelligent applications, and modern user experiences with performance-focused engineering. Dedicated to high-fidelity clean architecture.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={() => handleScrollTo('projects')}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-sm font-mono font-bold tracking-wider text-white rounded-xl shadow-[0_4px_25px_rgba(234,88,12,0.2)] transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
          >
            VIEW PROJECTS <FolderGit2 className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('contact');
            }}
            className={`w-full sm:w-auto px-8 py-4 border text-sm font-mono font-bold tracking-wider rounded-xl transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer shadow-md ${isDark
                ? 'bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-950 hover:border-orange-550/30'
                : 'bg-zinc-900 border-zinc-800 hover:border-orange-500/40 hover:bg-zinc-950 text-white'
              }`}
          >
            CONTACT ME <PhoneCall className="w-4 h-4" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full sm:w-auto px-8 py-4 bg-transparent border rounded-xl transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer ${isDark
                ? 'border-orange-500/40 text-orange-400 hover:bg-orange-950/20 hover:border-orange-500'
                : 'border-orange-400 text-orange-605 hover:bg-orange-50 hover:text-orange-650'
              }`}
          >
            RESUME <FileDown className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Animated Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-2 justify-center max-w-3xl mb-12"
        >
          {techStack.map((tech, idx) => {
            const isHighlight = tech.name === 'Next.js' || tech.name === 'TypeScript' || tech.name === 'Express.js' || 
            tech.name === 'PostgreSQL' || tech.name === 'Prisma' || tech.name === 'SQL' || tech.name === 'Linux';
            return (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  delay: 0.5 + idx * 0.04,
                }}
                whileHover={{ y: -3, scale: 1.05 }}
                className={`px-3 py-1.5 border rounded-lg text-xs font-mono font-medium tracking-wide transition-all ${isDark
                    ? isHighlight
                      ? 'text-orange-400 border-orange-500/20 bg-orange-950/20'
                      : 'text-zinc-400 border-zinc-800 bg-zinc-900/30'
                    : tech.color
                  }`}
              >
                #{tech.name.toUpperCase()}
              </motion.span>
            );
          })}
        </motion.div>

        {/* Social Link Nodes */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/PIYAS79"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 border rounded-xl transition-all duration-300 shadow-sm group ${isDark
                ? 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-850 hover:border-orange-500/30'
                : 'bg-white border-zinc-200 text-zinc-500 hover:text-zinc-950 hover:bg-zinc-50 hover:border-orange-450'
              }`}
            title="GitHub"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/piyasmahamudealif"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 border rounded-xl transition-all duration-300 shadow-sm group ${isDark
                ? 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-850 hover:border-orange-500/30'
                : 'bg-white border-zinc-200 text-zinc-500 hover:text-zinc-950 hover:bg-zinc-50 hover:border-orange-450'
              }`}
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="mailto:piyasmahmudealif@gmail.com"
            className={`p-3 border rounded-xl transition-all duration-300 shadow-sm group ${isDark
                ? 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-850 hover:border-orange-500/30'
                : 'bg-white border-zinc-200 text-zinc-500 hover:text-zinc-950 hover:bg-zinc-50 hover:border-orange-450'
              }`}
            title="Email"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <button
            onClick={() => handleScrollTo('contact')}
            className={`py-[14.5px] px-2.5 md:px-4 border rounded-xl transition-all duration-300 shadow-sm group font-mono text-xs flex items-center gap-2 cursor-pointer ${isDark
                ? 'bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-850 hover:border-orange-500/30'
                : 'bg-white border-zinc-200 text-zinc-650 hover:text-zinc-950 hover:bg-zinc-50 hover:border-orange-450'
              }`}
          >
            SECURE ROUTE <ArrowDownRight className="w-4 h-4 animate-bounce text-orange-500" />
          </button>
        </motion.div>
      </div>

      {/* Dynamic Background Bottom Grid Line Overlay */}
      <div className={`absolute bottom-0 left-0 right-0 h-24 pointer-events-none transition-colors duration-300 ${isDark ? 'bg-gradient-to-t from-[#000000] to-transparent' : 'bg-gradient-to-t from-white to-transparent'
        }`}></div>
    </section>
  );
}
