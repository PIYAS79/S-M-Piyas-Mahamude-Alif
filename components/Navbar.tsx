'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Services', href: '#services' },
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      setScrolled(window.scrollY > 20);

      // Simple active link detector
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-black/90 backdrop-blur-md border-b border-zinc-900 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-white/85 backdrop-blur-md border-b border-zinc-200/80 shadow-[0_4px_30px_rgba(0,0,0,0.02)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className={`group flex items-center gap-2 font-display text-xl font-bold italic tracking-wider transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-zinc-900'
            }`}
          >
            <span className="text-orange-500 font-mono not-italic font-medium text-lg">&lt;</span>
            <span className="relative">
              PIYAS M. ALIF
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
            <span className="text-orange-500 font-mono not-italic font-medium text-lg">/&gt;</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-4 py-2 font-mono text-xs tracking-widest transition-colors duration-300 rounded-lg ${
                    isActive
                      ? 'text-orange-600 font-semibold'
                      : theme === 'dark'
                      ? 'text-zinc-400 hover:text-white'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  {item.name.toUpperCase()}
                  {isActive && (
                    <motion.span
                      layoutId="navGlow"
                      className="absolute inset-0 bg-orange-500/10 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Theme Switcher & Hire Me CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme switcher on left side of HIRE ME */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full border transition-all duration-300 hover:scale-[1.08] active:scale-95 cursor-pointer shadow-sm ${
                theme === 'dark'
                  ? 'bg-zinc-900 border-zinc-800 text-orange-400 hover:bg-zinc-805 hover:text-orange-350'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
              title={theme === 'dark' ? 'Switch to Light Theme (White Version)' : 'Switch to Dark Theme (Black Design)'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-mono font-bold tracking-wider rounded-full group bg-gradient-to-br from-orange-600 via-orange-400 to-zinc-90 hover:text-white focus:outline-none"
            >
              <span className={`relative px-5 py-2 transition-all ease-in duration-75 rounded-full group-hover:bg-opacity-0 flex items-center gap-1 ${
                theme === 'dark' ? 'bg-[#000000] text-white' : 'bg-zinc-950 text-white'
              }`}>
                HIRE ME <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Theme Switcher Icon */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full border transition-colors cursor-pointer ${
                theme === 'dark'
                  ? 'bg-zinc-900 border-zinc-800 text-orange-400'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-500'
              }`}
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                  : 'text-zinc-605 hover:text-zinc-950 hover:bg-zinc-100'
              }`}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-lg overflow-hidden border-b transition-colors ${
              theme === 'dark'
                ? 'bg-black/95 border-zinc-900'
                : 'bg-white/95 border-zinc-200'
            }`}
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`block px-4 py-3 rounded-xl font-mono text-sm tracking-widest transition-all ${
                      isActive
                        ? 'bg-orange-50 text-orange-600 border-l-2 border-orange-500 pl-6 font-semibold'
                        : theme === 'dark'
                        ? 'text-zinc-450 hover:text-white hover:bg-zinc-900 pl-4'
                        : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 pl-4'
                    }`}
                  >
                    {item.name.toUpperCase()}
                  </a>
                );
              })}
              <div className="pt-4 px-4 flex items-center gap-3">
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsOpen(false);
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-mono text-xs border transition-colors cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-zinc-900 border-zinc-800 text-orange-400'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-650'
                  }`}
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-4 h-4" /> LIGHT
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4" /> DARK
                    </>
                  )}
                </button>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="flex-1 flex items-center justify-center gap-1 py-3 text-center rounded-full font-mono text-xs font-bold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-zinc-900 hover:opacity-90 active:scale-98 transition-all"
                >
                  HIRE ME <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
