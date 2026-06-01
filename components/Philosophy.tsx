'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Quote } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const philosophies = [
  {
    quote: 'I believe scalable systems are built with clarity, not complexity.',
    category: 'SOCIETY & ARCHITECTURE',
    annotation: 'Engineering priority is long-term extensibility. Reducing architectural surface noise directly boosts container stability, index caching efficiency, and developer integration velocity.',
  },
  {
    quote: 'Code should feel elegant before it feels clever.',
    category: 'CODE CRAFTSMANSHIP',
    annotation: 'Clever configurations satisfy ego; elegant configurations satisfy systems. Standard abstractions, robust semantic interfaces, and complete typing ensure zero developer fatigue.',
  },
  {
    quote: 'Learning never stops in engineering.',
    category: 'CONTINUOUS CALIBRATION',
    annotation: 'Technology is a moving river. Keeping pace with deep optimization updates, browser sandbox limitations, and intelligent agent designs is mandatory for a top 1% engineer.',
  },
];

export default function Philosophy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % philosophies.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="philosophy" className={`py-28 relative overflow-hidden border-t transition-colors duration-300 ${
      isDark ? 'bg-black border-zinc-900/40' : 'bg-white border-zinc-200'
    }`}>
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/[0.02] rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Header indicator */}
        <div className="mb-12 flex justify-center items-center gap-2">
          <Quote className={`w-5 h-5 rotate-180 transition-colors ${isDark ? 'text-orange-400' : 'text-orange-605'}`} />
          <span className={`text-xs font-mono tracking-widest uppercase block font-bold transition-colors ${
            isDark ? 'text-orange-400' : 'text-orange-650'
          }`}>
            07 / ENGINEERING INDICES
          </span>
          <Quote className={`w-5 h-5 transition-colors ${isDark ? 'text-orange-400' : 'text-orange-605'}`} />
        </div>

        {/* Carousel Container */}
        <div className="min-h-[280px] flex flex-col justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className={`text-xs font-mono tracking-widest px-3 py-1 rounded-full border uppercase font-semibold transition-all ${
                isDark
                  ? 'text-orange-400 bg-orange-950/20 border-orange-550/20'
                  : 'text-orange-600 bg-orange-50 border-orange-200/60'
              }`}>
                {philosophies[activeIndex].category}
              </span>

              <blockquote className={`text-2xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight italic max-w-3xl mx-auto px-4 transition-colors ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}>
                &ldquo;{philosophies[activeIndex].quote}&rdquo;
              </blockquote>

              <p className={`text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed transition-colors ${
                isDark ? 'text-zinc-400' : 'text-zinc-500'
              }`}>
                {philosophies[activeIndex].annotation}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Manual Click Navigation Nodes */}
        <div className="flex justify-center items-center gap-3 mt-12 pb-4">
          {philosophies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-350 cursor-pointer ${
                activeIndex === idx
                  ? 'w-8 bg-orange-500'
                  : isDark
                    ? 'w-2 bg-zinc-800 hover:bg-zinc-700'
                    : 'w-2 bg-zinc-205 hover:bg-zinc-355'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Floating background citation badge */}
        <div className={`mt-8 border-t pt-8 max-w-sm mx-auto transition-colors ${
          isDark ? 'border-zinc-900' : 'border-zinc-200'
        }`}>
          <p className={`text-xs font-mono tracking-widest font-bold transition-colors ${
            isDark ? 'text-orange-400' : 'text-zinc-805'
          }`}>
            S M PIYAS MAHAMUDE ALIF
          </p>
          <p className={`text-[10px] font-mono mt-1 uppercase transition-colors ${
            isDark ? 'text-zinc-500' : 'text-zinc-400'
          }`}>
            Philosophic Code Manifesto
          </p>
        </div>

      </div>
    </section>
  );
}
