'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';

// ─────────────────────────────────────────────────────────────────────────────
//  PROJECT DATA ARRAY
//  To add a new project: copy one object, change the fields, done.
//  image: any https:// URL — use your own screenshots or placeholder services.
// ─────────────────────────────────────────────────────────────────────────────
import { allProjects as projects } from '@/assets/datas/datas';
import ProjectCard from './PCard';





// ─────────────────────────────────────────────────────────────────────────────
//  MAIN SECTION
// ─────────────────────────────────────────────────────────────────────────────
export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="projects"
      className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
        isDark ? 'bg-black border-zinc-900/45' : 'bg-white border-zinc-200'
      }`}
    >
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500/[0.025] rounded-full filter blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-orange-600/[0.02] rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-xs font-mono tracking-widest uppercase mb-3 block ${
              isDark ? 'text-orange-400' : 'text-orange-600'
            }`}
          >
            03 / ENGINEERING DEMOS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight transition-colors ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-12 h-[2px] bg-orange-500 mx-auto mt-4 origin-left"
          />
        </div>

        {/* ── CARD GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.filter((project) => project.highlight).map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} isDark={isDark} />
          ))}
        </div>

        {/* ── VIEW ALL BUTTON ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="/projects"
            className={`group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border text-sm font-mono font-bold tracking-wider transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]
              ${
                isDark
                  ? 'bg-zinc-900 border-zinc-800 text-white hover:border-orange-500/50 hover:bg-zinc-950'
                  : 'bg-zinc-900 border-zinc-800 text-white hover:bg-orange-600 hover:border-orange-600'
              }
            `}
          >
            VIEW ALL PROJECTS
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}