'use client';

import { motion } from 'motion/react';
import { Award, GraduationCap, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const educations = [
  {
  institution: 'Daffodil International University',
  degree: 'Bachelor of Science in Computer Science & Engineering',
  timeline: 'April 2022 - April 2026',
  status: 'Graduated',
  research: 'Focused on Software Engineering, System Architecture, Full-Stack Web Development, Database Systems, and Artificial Intelligence fundamentals.',
  highlights: [
    'Database Management Systems (PostgreSQL, MySQL, MongoDB)',
    'Data Structures, Algorithms & Computational Problem Solving',
    'Software Architecture & Design Patterns (MVC, Layered Architecture)',
    'Artificial Intelligence & Machine Learning Fundamentals'
  ],
  grade: 'Academic Core - UNIVERSITY',
  type: 'university',
},
  {
    institution: 'Shaheed Police Smrity College',
    degree: 'Higher Secondary School Certificate (HSC & SSC)',
    timeline: 'Completed Primary College Cohort',
    status: 'Science Major',
    research: 'Foundation classes in Advanced Mathematics, Physics, and ICT Logic systems.',
    highlights: [
      'Advanced Mathematics (Calculus, Linear Algebra)',
      'Computer Science foundational operations',
      'Analytical Logic and Physics modeling'
    ],
    grade: 'Science Distinction - COLLEGE ',
    type: 'college',
  },
];

export default function Education() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="education" className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
      isDark ? 'bg-black border-zinc-900/40' : 'bg-white border-zinc-200'
    }`}>
      {/* Decorative Glow */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-orange-500/[0.02] rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className={`text-xs font-mono tracking-widest uppercase mb-3 block font-bold ${
            isDark ? 'text-orange-400' : 'text-orange-655'
          }`}>
            05 / ACADEMIC PROFILE
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight transition-colors ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            Education & Foundations
          </h2>
          <div className="w-12 h-[2px] bg-orange-50 mx-auto mt-4"></div>
        </div>

        {/* Academic Bento Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              className={`p-8 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between shadow-sm group ${
                isDark
                  ? 'bg-gradient-to-b from-stone-950 to-stone-900/60 border-stone-900/80 hover:border-orange-500/30 hover:bg-black shadow-none'
                  : 'bg-white border-zinc-200 hover:border-orange-400'
              }`}
            >
              {/* Outer Academic Header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl border flex items-center justify-center w-12 h-12 transition-colors ${
                    isDark ? 'bg-stone-900 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                  }`}>
                    {edu.type === 'university' ? (
                      <GraduationCap className={`w-6 h-6 transition-colors ${isDark ? 'text-orange-400' : 'text-orange-600'}`} />
                    ) : (
                      <BookOpen className={`w-6 h-6 transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`} />
                    )}
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-md border font-semibold transition-colors ${
                    isDark ? 'bg-orange-950/20 border-orange-550/20 text-orange-400' : 'bg-zinc-50 border-zinc-200 text-zinc-600'
                  }`}>
                    {edu.grade}
                  </span>
                </div>

                <h3 className={`text-xl font-display font-bold mb-1 transition-colors ${
                  isDark ? 'text-white' : 'text-zinc-900'
                }`}>
                  {edu.institution}
                </h3>
                <h4 className={`text-sm font-mono font-semibold mb-2 transition-colors ${
                  isDark ? 'text-orange-400' : 'text-orange-655'
                }`}>
                  {edu.degree}
                </h4>
                <p className={`text-xs font-mono mb-6 uppercase tracking-wider transition-colors ${
                  isDark ? 'text-zinc-500' : 'text-zinc-400'
                }`}>
                  {edu.timeline} <span className="mx-1">|</span> {edu.status}
                </p>

                <p className={`text-xs sm:text-sm leading-relaxed font-sans mb-6 transition-colors ${
                  isDark ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  {edu.research}
                </p>

                {/* Academic Highlights bullet points */}
                <div className="space-y-3">
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    KEY CURRICULUM CONCEPTS:
                  </p>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight) => (
                      <li key={highlight} className={`flex items-start gap-2.5 text-xs transition-colors ${
                        isDark ? 'text-zinc-400' : 'text-zinc-650'
                      }`}>
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          isDark ? 'text-orange-400' : 'text-orange-600'
                        }`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verified academic state footer indicator */}
              <div className={`mt-8 pt-4 border-t flex items-center justify-between text-[10px] font-mono transition-colors ${
                isDark ? 'border-zinc-900/60 text-zinc-600' : 'border-zinc-200/80 text-zinc-400'
              }`}>
                <span>SECTOR: ACADEMIC CREDENTIAL</span>
                <span>STATUS: STABLE</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
