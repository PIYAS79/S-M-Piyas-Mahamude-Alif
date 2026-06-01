'use client';

import { motion } from 'motion/react';
import { Layers, Server, Sparkles, Database, Laptop, ShieldCheck, Cloud } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const services = [
  {
    iconType: 'laptop',
    title: 'Full Stack Web Development',
    desc: 'Building scalable web platforms using React, Next.js, TypeScript, and modern frontend architectures for exceptional user experiences.',
    outcome: 'SEO-ready applications with optimized performance and accessibility standards.',
  },
  {
    iconType: 'server',
    title: 'Backend API Engineering',
    desc: 'Developing secure Node.js, Express, and Python backend services with authentication, real-time communication, and API integrations.',
    outcome: 'Reliable APIs with JWT security, validation, and middleware optimization.',
  },
  {
    iconType: 'database',
    title: 'Database Architecture',
    desc: 'Designing efficient PostgreSQL, MySQL, and MongoDB schemas with Prisma ORM for scalable and maintainable applications.',
    outcome: 'Optimized queries, structured migrations, and high-performance data access.',
  },
  {
    iconType: 'sparkles',
    title: 'AI-Powered Web Applications',
    desc: 'Integrating LLMs, vector search systems, and AI workflows into modern applications with intelligent automation features.',
    outcome: 'Custom AI experiences powered by Gemini APIs and retrieval pipelines.',
  },
  {
    iconType: 'cloud',
    title: 'Cloud & Deployment Engineering',
    desc: 'Deploying production-ready applications using Firebase, cloud services, CI/CD workflows, and modern hosting infrastructures.',
    outcome: 'Reliable deployments, automated delivery pipelines, and scalable hosting.',
  },
  {
    iconType: 'layers',
    title: 'Modern UI/UX Development',
    desc: 'Crafting responsive interactions, elegant micro-animations, and premium interfaces that create engaging user experiences.',
    outcome: 'Mobile-first layouts, polished visuals, and smooth performance.',
  },
];

export default function Services() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const renderIcon = (type: string) => {
    switch (type) {
      case 'laptop':
        return <Laptop className={`w-6 h-6 transition-colors ${isDark ? 'text-orange-400' : 'text-orange-600'}`} />;
      case 'server':
        return <Server className={`w-6 h-6 transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-650'}`} />;
      case 'database':
        return <Database className={`w-6 h-6 transition-colors ${isDark ? 'text-orange-400' : 'text-orange-600'}`} />;
      case 'sparkles':
        return <Sparkles className={`w-6 h-6 transition-colors ${isDark ? 'text-zinc-400' : 'text-orange-655'}`} />;
      case 'cloud':
        return <Cloud className={`w-6 h-6 transition-colors ${isDark ? 'text-orange-400' : 'text-orange-600'}`} />;
      case 'layers':
        return <Layers className={`w-6 h-6 transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-655'}`} />;
    }
  };

  return (
    <section id="services" className={`py-24 relative overflow-hidden grid-bg border-t transition-colors duration-300 ${
      isDark ? 'bg-black border-zinc-900/40' : 'bg-white border-zinc-200'
    }`}>
      {/* Back glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/[0.02] rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className={`text-xs font-mono tracking-widest uppercase mb-3 block font-bold ${
            isDark ? 'text-orange-400' : 'text-orange-650'
          }`}>
            06 / CAPABILITIES
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight transition-colors ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            Professional Offerings
          </h2>
          <div className="w-12 h-[2px] bg-orange-500 mx-auto mt-4"></div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-[300px] shadow-sm ${
                isDark
                  ? 'bg-gradient-to-b from-stone-950 to-stone-900/60 border-stone-900/80 hover:border-orange-500/30 hover:bg-black shadow-none'
                  : 'bg-white border-zinc-200 hover:border-orange-400'
              }`}
            >
              <div>
                {/* Header info */}
                <div className="flex justify-between items-center mb-6">
                  <div className={`p-3 rounded-xl border flex items-center justify-center w-12 h-12 transition-colors ${
                    isDark ? 'bg-stone-900 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                  }`}>
                    {renderIcon(svc.iconType)}
                  </div>
                  <span className="font-mono text-xs text-zinc-400">0{idx + 1}</span>
                </div>

                <h3 className={`text-lg font-display font-bold mb-2 transition-colors ${
                  isDark ? 'text-white' : 'text-zinc-900'
                }`}>
                  {svc.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed font-sans mb-4 transition-colors text-justify ${
                  isDark ? 'text-zinc-400' : 'text-zinc-650'
                }`}>
                  {svc.desc}
                </p>
              </div>

              {/* Outcome pill footer */}
              <div className={`flex items-start gap-2 border-t pt-4 mt-auto transition-colors ${
                isDark ? 'border-zinc-900/60' : 'border-zinc-100'
              }`}>
                <ShieldCheck className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isDark ? 'text-orange-400' : 'text-orange-605'}`} />
                <span className={`text-[10px] font-mono leading-tight transition-colors ${
                  isDark ? 'text-zinc-400' : 'text-zinc-500'
                }`}>
                  <span className={`transition-colors ${isDark ? 'text-orange-400' : 'text-zinc-800 font-semibold'}`}>OUTCOME: </span>
                  {svc.outcome}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
