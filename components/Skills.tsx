'use client';

import { motion } from 'motion/react';
import { Layout, Server, Database, BrainCircuit, Terminal, Cpu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const skillCategories = [
  {
    title: 'Frontend Architecture',
    icon: <Layout className="w-5 h-5 text-orange-600" />,
    color: 'from-orange-50/50 to-zinc-50/40 border-orange-200/50',
    skills: [
      { name: 'React', level: 92, badge: 'Proficient' },
      { name: 'Next.js 15', level: 80, badge: 'Enthusiast' },
      { name: 'TypeScript', level: 88, badge: 'Proficient' },
      { name: 'Tailwind CSS', level: 95, badge: 'Expert' },
      { name: 'Redux Toolkit', level: 85, badge: 'Proficient' },
      { name: 'DaisyUI & Ant Design', level: 88, badge: 'Proficient' },
    ],
  },
  {
    title: 'Backend Systems & APIs',
    icon: <Server className="w-5 h-5 text-zinc-700" />,
    color: 'from-zinc-50/50 to-orange-50/30 border-zinc-205/60',
    skills: [
      { name: 'Node.js Core', level: 90, badge: 'Proficient' },
      { name: 'Express.js Framework', level: 92, badge: 'Expert' },
      { name: 'RESTful API Engineering', level: 95, badge: 'Expert' },
      { name: 'Token Security (JWT)', level: 88, badge: 'Proficient' },
      { name: 'Security & Auth Middleware', level: 86, badge: 'Proficient' },
    ],
  },
  {
    title: 'Database & ORM Layer',
    icon: <Database className="w-5 h-5 text-orange-600" />,
    color: 'from-orange-50/60 to-zinc-100/30 border-orange-200/50',
    skills: [
      { name: 'PostgreSQL Relational', level: 85, badge: 'Proficient' },
      { name: 'MySQL Database', level: 83, badge: 'Proficient' },
      { name: 'Prisma ORM engine', level: 89, badge: 'Proficient' },
      { name: 'MongoDB Document', level: 85, badge: 'Proficient' },
      { name: 'Mongoose ODM', level: 85, badge: 'Proficient' },
      { name: 'TypeORM Schema mapping', level: 70, badge: 'Familiar' },
    ],
  },
  {
    title: 'Core Programming Languages',
    icon: <Terminal className="w-5 h-5 text-zinc-650" />,
    color: 'from-zinc-50/50 to-orange-50/30 border-zinc-205/60',
    skills: [
      { name: 'TypeScript', level: 88, badge: 'Proficient' },
      { name: 'JavaScript ESNext', level: 94, badge: 'Familiar' },
      { name: 'C Language Fundamentals', level: 98, badge: 'Academic Core' },
      { name: 'Python Engineering', level: 80, badge: 'Enthusiast' },
      { name: 'Bash Scripting', level: 83, badge: 'Academic Core' },
    ],
  },
  {
    title: 'Orchestration & DevOps',
    icon: <BrainCircuit className="w-5 h-5 text-orange-600" />,
    color: 'from-orange-50/50 to-zinc-50/40 border-orange-200/50',
    skills: [
      { name: 'Git & GitHub Workflows', level: 90, badge: 'Enthusiast' },
      { name: 'Firebase Backend Suite', level: 77, badge: 'Familiar' },
      { name: 'MVC System Patterns', level: 88, badge: 'Expert' },
      { name: 'Interactive System Design', level: 84, badge: 'Enthusiast' },
    ],
  },
  {
    title: 'Operating Systems, Hardware & IoT Prototyping',
    icon: <Cpu className="w-5 h-5 text-orange-600" />,
    color: 'from-orange-50/60 to-zinc-100/30 border-orange-200/50',
    skills: [
      { name: 'Linux (default)', level: 85, badge: 'Enthusiast' },
      { name: 'Windows', level: 86, badge: 'Proficient' },
      { name: 'Arduino Circuit Boards', level: 85, badge: 'Enthusiast' },
      { name: 'Hardware Signal Mapping', level: 78, badge: 'Academic Core' },
      { name: 'Embedded logic controls', level: 75, badge: 'Academic Core' },
    ],
  },
];

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="skills" className={`py-24 relative overflow-hidden grid-bg border-t transition-colors duration-300 ${
      isDark ? 'bg-black border-zinc-900/40' : 'bg-white border-zinc-200'
    }`}>
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-550/[0.02] rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-600/[0.015] rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className={`text-xs font-mono tracking-widest uppercase mb-3 block ${
            isDark ? 'text-orange-400' : 'text-orange-650'
          }`}>
            02 / TECH MATRIX
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight transition-colors ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            The Production-Grade Stack
          </h2>
          <div className="w-12 h-[2px] bg-orange-500 mx-auto mt-4"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl border backdrop-blur-md shadow-sm transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? 'bg-gradient-to-br from-stone-950 to-stone-900/50 border-stone-900 hover:border-orange-500/30 shadow-none'
                  : `bg-gradient-to-br ${cat.color} border-zinc-200 hover:border-orange-400`
              }`}
            >
              <div>
                {/* Panel Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border transition-all ${
                      isDark
                        ? 'bg-stone-900/60 border-stone-900'
                        : 'bg-zinc-50 border-zinc-200/60 shadow-inner'
                    }`}>
                      {cat.icon}
                    </div>
                    <h3 className={`text-xs font-mono tracking-widest font-bold uppercase transition-colors ${
                      isDark ? 'text-zinc-300' : 'text-zinc-900'
                    }`}>
                      {cat.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-zinc-500">0{catIdx + 1}</span>
                </div>

                {/* Skill Item List */}
                <div className="space-y-5">
                  {cat.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className={`font-medium transition-colors ${
                          isDark ? 'text-white' : 'text-zinc-850'
                        }`}>{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium uppercase transition-all ${
                            isDark
                              ? 'text-orange-400 bg-orange-950/40 border border-orange-550/20'
                              : 'text-zinc-500 bg-zinc-50 border border-zinc-200'
                          }`}>
                            {skill.badge}
                          </span>
                          <span className={`${isDark ? 'text-zinc-400' : 'text-zinc-650'}`}>{skill.level}%</span>
                        </div>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className={`w-full h-[4px] rounded-full overflow-hidden transition-colors ${
                        isDark ? 'bg-stone-900' : 'bg-zinc-100'
                      }`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIdx * 0.1 }}
                          className="h-full bg-gradient-to-r from-orange-600 to-orange-500 rounded-full shadow-[0_0_10px_rgba(234,88,12,0.15)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Tech Status */}
              <div className={`mt-8 pt-4 border-t flex justify-between items-center transition-colors ${
                isDark ? 'border-zinc-900/40' : 'border-zinc-200/60'
              }`}>
                <span className={`text-[10px] font-mono transition-colors ${
                  isDark ? 'text-zinc-500' : 'text-zinc-400'
                }`}>ENGINE STATE: ARMED</span>
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
