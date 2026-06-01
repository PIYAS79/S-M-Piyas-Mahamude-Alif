'use client';

import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Journey from '../components/Journey';
import Education from '../components/Education';
import Services from '../components/Services';
import Philosophy from '../components/Philosophy';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen selection:bg-orange-500/25 selection:text-orange-850 antialiased overflow-x-hidden transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#000000] text-[#f5f5f0]'
          : 'bg-[#fafafc] text-zinc-900'
      }`}
    >
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Education />
        <Services />
        <Philosophy />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}