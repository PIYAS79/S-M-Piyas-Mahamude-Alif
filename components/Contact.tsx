'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, Github, Linkedin, Check, Phone, AlertCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTelegramModalOpen, setIsTelegramModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 8000);
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-24 relative overflow-hidden grid-bg transition-colors duration-300 ${isDark ? 'bg-black border-zinc-900/40' : 'bg-white border-zinc-200'}`}>
      {/* Background glow node */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/[0.02] rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`text-xs font-mono tracking-widest uppercase mb-4 block font-bold ${isDark ? 'text-orange-400' : 'text-orange-650'}`}>
            08 / SECURE CORRESPONDENCE
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight transition-all ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            Get In Touch
          </h2>
          <div className="w-12 h-[2px] bg-orange-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className={`text-xl sm:text-2xl font-display font-bold transition-all ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                Let&rsquo;s engineer together.
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed font-sans transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-650'}`}>
                Are you looking to scale an application, integrate cognitive LLMs, deploy relational schemas, or acquire a high-performance engineer for your tech squad? Initialize a micro-communication below. I typically respond within 12 hours.
              </p>

              <div className="space-y-4 pt-4 text-xs font-mono">
                {/* Location */}
                <div className={`flex items-center gap-4 p-4 rounded-xl border transition-colors shadow-sm ${isDark ? 'bg-stone-950 border-zinc-900/80 hover:border-orange-500/30' : 'bg-zinc-50 border-zinc-200 hover:border-orange-400'}`}>
                  <div className={`p-2.5 rounded-lg border transition-colors ${isDark ? 'bg-stone-900 border-orange-500/30 text-orange-400' : 'bg-[#fefefe] border-orange-200 text-orange-605'}`}>
                    <MapPin className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-zinc-500 uppercase text-[9px] tracking-wider font-semibold">GEO LOCATION</p>
                    <p className={`font-semibold transition-colors ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>Dhaka, Bangladesh</p>
                  </div>
                </div>

                {/* Email */}
                <a
                  href="mailto:piyasmahamudealif@gmail.com"
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all group shadow-sm ${isDark ? 'bg-stone-950 border-zinc-900/80 hover:border-orange-500/30 hover:bg-stone-900' : 'bg-zinc-50 border-zinc-200 hover:border-orange-400 hover:bg-zinc-100/50'}`}
                >
                  <div className={`p-2.5 rounded-lg border transition-colors ${isDark ? 'bg-stone-900 border-orange-500/30 text-orange-400' : 'bg-[#fefefe] border-orange-200 text-orange-605'}`}>
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-zinc-500 uppercase text-[9px] tracking-wider font-semibold">SECURE DIRECT MAIL</p>
                    <p className={`hover:text-orange-600 transition-colors truncate font-semibold ${isDark ? 'text-zinc-250' : 'text-zinc-800'}`}>
                      piyasmahamudealif@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Networking links */}
            <div className={`pt-6 border-t space-y-4 ${isDark ? 'border-zinc-900' : 'border-zinc-205'}`}>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                EXTERNAL CONNECT CHANNELS:
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="https://github.com/PIYAS79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all shadow-sm ${isDark ? 'bg-stone-900 hover:border-orange-500/30 border-zinc-700 text-zinc-300 hover:text-orange-400' : 'bg-zinc-50 border-zinc-200 hover:border-zinc-305 hover:bg-zinc-100 text-zinc-650 hover:text-zinc-950'}`}
                >
                  GITHUB <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/piyasmahamudealif/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all shadow-sm ${isDark ? 'bg-stone-900 hover:border-blue-500 border-zinc-700 text-zinc-300 hover:text-blue-400' : 'bg-zinc-50 border-zinc-200 hover:border-zinc-305 hover:bg-zinc-100 text-zinc-650 hover:text-zinc-950'}`}
                >
                  LINKEDIN <Linkedin className="w-3.5 h-3.5" />
                </a>

                {/* Phone button */}
                <button
                  onClick={() => setIsPhoneModalOpen(true)}
                  className={`px-4 py-2 rounded-xl cursor-pointer border text-xs font-mono flex items-center gap-1.5 transition-all shadow-sm ${isDark ? 'bg-stone-900 hover:border-green-700 border-zinc-700 text-zinc-300 hover:text-green-400' : 'bg-zinc-50 border-zinc-200 hover:border-zinc-305 hover:bg-zinc-100 text-zinc-650 hover:text-zinc-950'}`}
                >
                  PHONE <Phone className="w-3.5 h-3.5" />
                </button>

                {/* Phone modal */}
                <AnimatePresence>
                  {isPhoneModalOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                      onClick={() => setIsPhoneModalOpen(false)}
                    >
                      <motion.div
                        initial={{ scale: 0.92, opacity: 0, y: 16 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.92, opacity: 0, y: 16 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        onClick={(e) => e.stopPropagation()}
                        className={`relative w-full max-w-sm rounded-2xl border shadow-2xl p-6 ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'}`}
                      >
                        <button onClick={() => setIsPhoneModalOpen(false)} className="absolute top-3 right-3 text-lg opacity-70 hover:opacity-100">✕</button>
                        <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
                        <p className={`font-mono text-xl ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>+880 1321-086103</p>
                        <a href="tel:+8801321086103" className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 text-white text-sm hover:opacity-90 transition">
                          <Phone className="w-4 h-4" /> Call Now
                        </a>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Telegram button */}
                <button
                  onClick={() => setIsTelegramModalOpen(true)}
                  className={`px-4 py-2 rounded-xl cursor-pointer border text-xs font-mono flex items-center gap-1.5 transition-all shadow-sm ${isDark ? 'bg-stone-900 hover:border-sky-500 border-zinc-700 text-zinc-300 hover:text-sky-400' : 'bg-zinc-50 border-zinc-200 hover:border-zinc-305 hover:bg-zinc-100 text-zinc-650 hover:text-zinc-950'}`}
                >
                  TELEGRAM <Send className="w-3.5 h-3.5" />
                </button>

                {/* Telegram modal */}
                <AnimatePresence>
                  {isTelegramModalOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-2"
                      onClick={() => setIsTelegramModalOpen(false)}
                    >
                      <motion.div
                        initial={{ scale: 0.92, opacity: 0, y: 16 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.92, opacity: 0, y: 16 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className={`relative w-full max-w-xs rounded-2xl border shadow-2xl overflow-hidden ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button onClick={() => setIsTelegramModalOpen(false)} className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center hover:bg-zinc-200/20">✕</button>
                        <div className="p-5 border-b border-zinc-200/10">
                          <h3 className="font-semibold text-lg">Telegram Contact</h3>
                        </div>
                        <div className="p-5">
                          <img src="https://res.cloudinary.com/do7nin6oo/image/upload/v1780246355/telegram_hfecou.jpg" alt="Telegram QR Code" className="w-full rounded-xl" />
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 border rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-sm transition-all ${isDark ? 'bg-[#09090b] border-zinc-900 hover:border-orange-500/30' : 'bg-white border-zinc-200 hover:border-orange-400'}`}>

              <div className={`absolute top-1 right-5 p-3 font-mono text-[10px] transition-colors ${isDark ? 'text-zinc-650' : 'text-zinc-400'}`}>
                SYSTEM: <span className='text-green-500'>ACTIVE</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className={`text-[10px] font-mono uppercase tracking-wider block font-semibold transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      Your Name <span className="text-orange-550">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Jane Doe"
                      className={`w-full border rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none transition-all shadow-inner ${isDark ? 'bg-[#000000] border-zinc-800 focus:border-orange-500/50 focus:bg-[#08080a] text-white placeholder-zinc-700' : 'bg-[#fafafb] border-zinc-200 focus:border-orange-400 focus:bg-white text-zinc-900 placeholder-zinc-400'}`}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className={`text-[10px] font-mono uppercase tracking-wider block font-semibold transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      Email Address <span className="text-orange-550">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., jane@company.com"
                      className={`w-full border rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none transition-all shadow-inner ${isDark ? 'bg-[#000000] border-zinc-800 focus:border-orange-500/50 focus:bg-[#08080a] text-white placeholder-zinc-700' : 'bg-[#fafafb] border-zinc-200 focus:border-orange-400 focus:bg-white text-zinc-900 placeholder-zinc-400'}`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className={`text-[10px] font-mono uppercase tracking-wider block font-semibold transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    Subject / Project scope
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g., Scalable Platform Architecture Integration"
                    className={`w-full border rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none transition-all shadow-inner ${isDark ? 'bg-[#000000] border-zinc-800 focus:border-orange-500/50 focus:bg-[#08080a] text-white placeholder-zinc-700' : 'bg-[#fafafb] border-zinc-200 focus:border-orange-400 focus:bg-white text-zinc-900 placeholder-zinc-400'}`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className={`text-[10px] font-mono uppercase tracking-wider block font-semibold transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    Your Message <span className="text-orange-550">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your goals, requirements, stack assumptions..."
                    className={`w-full border rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none resize-none transition-all shadow-inner ${isDark ? 'bg-[#000000] border-zinc-800 focus:border-orange-500/50 focus:bg-[#08080a] text-white placeholder-zinc-700' : 'bg-[#fafafb] border-zinc-200 focus:border-orange-400 focus:bg-white text-zinc-900 placeholder-zinc-400'}`}
                  />
                </div>

                {/* Error message */}
                <AnimatePresence>
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-xs font-mono ${isDark ? 'bg-red-950/30 border-red-500/30 text-red-400' : 'bg-red-50 border-red-200 text-red-600'}`}
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {submitError}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-between pt-2">
                  <span className={`text-[10px] font-mono font-medium transition-colors ${isDark ? 'text-zinc-550' : 'text-zinc-450'}`}>
                    ⚡ Usually responds within 12 hours
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white disabled:opacity-50 text-xs font-mono font-bold tracking-wider rounded-xl transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-orange-500/10"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        DISPATCHING PAYLOAD...
                      </span>
                    ) : (
                      <>TRANSMIT SECURELY <Send className="w-3.5 h-3.5" /></>
                    )}
                  </button>
                </div>
              </form>

              {/* ── Success Overlay ── */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 rounded-2xl z-20 flex flex-col items-center justify-center p-8 text-center overflow-hidden ${isDark ? 'bg-black/95' : 'bg-white/97'}`}
                  >
                    {/* Animated ring burst */}
                    <div className="relative flex items-center justify-center mb-8">
                      {/* Outer pulse rings */}
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full border border-orange-500/20"
                          initial={{ width: 56, height: 56, opacity: 0.6 }}
                          animate={{ width: 56 + (i + 1) * 32, height: 56 + (i + 1) * 32, opacity: 0 }}
                          transition={{ duration: 1.8, delay: i * 0.3, repeat: Infinity, ease: 'easeOut' }}
                        />
                      ))}
                      {/* Center icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                        className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center border-2 ${isDark ? 'bg-orange-950/40 border-orange-500/40 text-orange-400' : 'bg-orange-50 border-orange-300 text-orange-500'}`}
                      >
                        <Check className="w-6 h-6" strokeWidth={2.5} />
                      </motion.div>
                    </div>

                    {/* Text */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.4 }}
                      className="space-y-3"
                    >
                      <p className={`text-[10px] font-mono tracking-[0.2em] uppercase ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                        TRANSMISSION CONFIRMED
                      </p>
                      <h3 className={`text-xl sm:text-2xl font-display font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                        Message Dispatched
                      </h3>
                      <p className={`text-xs leading-relaxed max-w-xs font-sans mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Your payload has bypassed standard caching pipelines and is queued directly into S M Piyas Mahamude Alif&rsquo;s inbox. You will receive a response within 12 hours.
                      </p>
                    </motion.div>

                    {/* Animated data stream lines */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6 mb-6 w-full max-w-[200px] space-y-1.5"
                    >
                      {['SENDER VERIFIED', 'PAYLOAD ENCRYPTED', 'INBOX REACHED'].map((label, i) => (
                        <motion.div
                          key={label}
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: '100%', opacity: 1 }}
                          transition={{ delay: 0.55 + i * 0.18, duration: 0.5, ease: 'easeOut' }}
                          className="flex items-center gap-2"
                        >
                          <span className="text-green-500 text-[9px] font-mono shrink-0">✓</span>
                          <div className={`h-px flex-1 ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`}>
                            <motion.div
                              className="h-full bg-orange-500/50"
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{ delay: 0.55 + i * 0.18, duration: 0.5 }}
                            />
                          </div>
                          <span className={`text-[9px] font-mono shrink-0 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{label}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.button
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      type="button"
                      onClick={() => setSubmitSuccess(false)}
                      className={`px-5 py-2.5 rounded-xl text-[10px] font-mono font-bold tracking-wider transition-all cursor-pointer border ${isDark ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white' : 'bg-zinc-900 border-zinc-900 hover:bg-zinc-800 text-white'}`}
                    >
                      CLOSE TRANSMISSION LOG
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}