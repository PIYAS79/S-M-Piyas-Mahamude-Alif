'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const [isTelegramModalOpen, setIsTelegramModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`border-t pt-16 pb-8 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-black border-zinc-900/40' : 'bg-white border-zinc-200'
      }`}>

      {/* Footer Ambient Light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-orange-500/[0.01] rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Logo brand & short summary */}
          <div className="md:col-span-2 space-y-4">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className={`inline-flex items-center gap-1 text-base font-display font-medium tracking-widest italic transition-colors ${isDark ? 'text-white' : 'text-zinc-900'
                }`}
            >
              <span className="text-orange-500 font-mono not-italic">&lt;</span>
              PIYAS M. ALIF
              <span className="text-orange-500 font-mono not-italic">/&gt;</span>
            </a>
            <p className={`text-xs font-sans max-w-sm leading-relaxed transition-colors ${isDark ? 'text-zinc-500' : 'text-zinc-550'
              }`}>
              Top 1% targeted Full Stack Developer & AI Enthusiast. Building optimized browser layouts and high reliability API systems with meticulous craftsmanship.
            </p>
          </div>

          {/* Quick linkages column */}
          <div className="space-y-4">
            <h4 className={`text-xs font-mono font-bold uppercase tracking-widest transition-colors ${isDark ? 'text-zinc-650' : 'text-zinc-400'
              }`}>
              QUICK SECTIONS
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#about'); }}
                className={`transition-colors font-medium ${isDark ? 'text-zinc-500 hover:text-orange-400' : 'text-zinc-500 hover:text-orange-600'}`}
              >
                {"# ABOUT"}
              </a>
              <a
                href="#skills"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#skills'); }}
                className={`transition-colors font-medium ${isDark ? 'text-zinc-500 hover:text-orange-400' : 'text-zinc-500 hover:text-orange-600'}`}
              >
                {"# SKILLS"}
              </a>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#projects'); }}
                className={`transition-colors font-medium ${isDark ? 'text-zinc-500 hover:text-orange-400' : 'text-zinc-500 hover:text-orange-600'}`}
              >
                {"# PROJECTS"}
              </a>
              <a
                href="#journey"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#journey'); }}
                className={`transition-colors font-medium ${isDark ? 'text-zinc-500 hover:text-orange-400' : 'text-zinc-500 hover:text-orange-600'}`}
              >
                {"# TRAJECTORY"}
              </a>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#services'); }}
                className={`transition-colors font-medium ${isDark ? 'text-zinc-500 hover:text-orange-400' : 'text-zinc-500 hover:text-orange-600'}`}
              >
                {"# SERVICES"}
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
                className={`transition-colors font-medium ${isDark ? 'text-zinc-500 hover:text-orange-400' : 'text-zinc-500 hover:text-orange-600'}`}
              >
                {"# CONTACT"}
              </a>
            </div>
          </div>

          {/* Connected social badge buttons */}
          <div className="space-y-4">
            <h4 className={`text-xs font-mono font-bold uppercase tracking-widest transition-colors ${isDark ? 'text-zinc-650' : 'text-zinc-400'
              }`}>
              COMMUNITIES
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/PIYAS79"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-2.5 py-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all shadow-sm ${isDark ? 'bg-stone-900 hover:border-orange-500/30 border-zinc-700 text-zinc-300 hover:text-orange-400' : 'bg-zinc-50 border-zinc-200 hover:border-zinc-305 hover:bg-zinc-100 text-zinc-650 hover:text-zinc-950'
                  }`}
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/piyasmahamudealif/"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-2.5 py-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all shadow-sm ${isDark ? 'bg-stone-900 hover:border-blue-500 border-zinc-700 text-zinc-300 hover:text-blue-400' : 'bg-zinc-50 border-zinc-200 hover:border-zinc-305 hover:bg-zinc-100 text-zinc-650 hover:text-zinc-950'
                  }`}
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/PIYAS79"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-2.5 py-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all shadow-sm ${isDark ? 'bg-stone-900 hover:border-red-800 border-zinc-700 text-zinc-300 hover:text-red-400' : 'bg-zinc-50 border-zinc-200 hover:border-zinc-305 hover:bg-zinc-100 text-zinc-650 hover:text-zinc-950'
                  }`}
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setIsPhoneModalOpen(true)}
                className={`px-2.5 py-2 rounded-xl cursor-pointer border text-xs font-mono flex items-center gap-1.5 transition-all shadow-sm ${isDark
                  ? 'bg-stone-900 hover:border-green-700 border-zinc-700 text-zinc-300 hover:text-green-400'
                  : 'bg-zinc-50 border-zinc-200 hover:border-zinc-305 hover:bg-zinc-100 text-zinc-650 hover:text-zinc-950'
                  }`}
              >
                <Phone className="w-3.5 h-3.5" />
              </button>
              {isPhoneModalOpen && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                  onClick={() => setIsPhoneModalOpen(false)}
                >
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className={`relative w-full max-w-sm rounded-2xl border shadow-2xl p-6 ${isDark
                      ? 'bg-zinc-900 border-zinc-800'
                      : 'bg-white border-zinc-200'
                      }`}
                  >
                    {/* Close */}
                    <button
                      onClick={() => setIsPhoneModalOpen(false)}
                      className="absolute top-3 right-3 text-lg opacity-70 hover:opacity-100"
                    >
                      ✕
                    </button>

                    <h3 className="text-lg font-semibold mb-2">
                      Phone Number
                    </h3>

                    <p
                      className={`font-mono text-xl ${isDark ? 'text-orange-400' : 'text-orange-600'
                        }`}
                    >
                      +880 1321-086103
                    </p>

                    <a
                      href="tel:+8801321086103"
                      className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 text-white text-sm hover:opacity-90 transition"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </div>
                </div>
              )}
              <button
                onClick={() => setIsTelegramModalOpen(true)}
                className={`px-2.5 py-2 rounded-xl cursor-pointer border text-xs font-mono flex items-center gap-1.5 transition-all shadow-sm ${isDark
                  ? 'bg-stone-900 hover:border-sky-500 border-zinc-700 text-zinc-300 hover:text-sky-400'
                  : 'bg-zinc-50 border-zinc-200 hover:border-zinc-305 hover:bg-zinc-100 text-zinc-650 hover:text-zinc-950'
                  }`}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
              {isTelegramModalOpen && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-2"
                  onClick={() => setIsTelegramModalOpen(false)}
                >
                  <div
                    className={`relative w-full max-w-xs rounded-2xl border shadow-2xl overflow-hidden ${isDark
                      ? 'bg-zinc-900 border-zinc-800'
                      : 'bg-white border-zinc-200'
                      }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setIsTelegramModalOpen(false)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center hover:bg-zinc-200/20"
                    >
                      ✕
                    </button>

                    {/* Header */}
                    <div className="p-5 border-b border-zinc-200/10">
                      <h3 className="font-semibold text-lg">
                        Telegram Contact
                      </h3>
                    </div>

                    {/* Image */}
                    <div className="p-5">
                      <img
                        src="https://res.cloudinary.com/do7nin6oo/image/upload/v1780246355/telegram_hfecou.jpg"
                        alt="Telegram QR Code"
                        className="w-full rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Bottom copyright metadata row */}
        <div className={`border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors ${isDark ? 'border-zinc-900' : 'border-zinc-200'
          }`}>
          <p className={`text-[10px] font-mono uppercase tracking-widest text-center sm:text-left transition-colors ${isDark ? 'text-zinc-600' : 'text-zinc-400'
            }`}>
            &copy; {new Date().getFullYear()} S M Piyas Mahamude Alif. All rights reserved.
          </p>
          <div className={`flex items-center gap-6 text-[10px] font-mono uppercase tracking-widest transition-colors ${isDark ? 'text-zinc-650' : 'text-zinc-400'
            }`}>
            <span>TERMS: GPL CONTRACT</span>
            <span>BUILT WITH CRAFT & CARE</span>
          </div>
        </div>

      </div>

      {/* Dynamic Scroll to Top overlay button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 p-4 rounded-xl z-40 shadow-lg cursor-pointer transition-all hover:-translate-y-1 ${isDark ? 'bg-orange-600 hover:bg-orange-500/90 text-stone-950' : 'bg-zinc-900/90 hover:bg-orange-600 text-white'
              }`}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </footer>
  );
}
