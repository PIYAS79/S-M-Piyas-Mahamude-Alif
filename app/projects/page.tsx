'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Github,
    ArrowUpRight,
    Search,
    X,
    Layers,
    Code2,
    Server,
    Brain,
    ExternalLink,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Link from 'next/link';
import { allProjects } from '@/assets/datas/datas';
import ProjectCard from '@/components/PCard';



// ─────────────────────────────────────────────────────────────────────────────
//  FILTER CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const FILTERS = [
    { key: 'All', label: 'ALL', Icon: Layers },
    { key: 'Full Stack', label: 'FULL STACK', Icon: Code2 },
    { key: 'Frontend', label: 'FRONTEND', Icon: ExternalLink },
    { key: 'Backend', label: 'BACKEND', Icon: Server },
    { key: 'AI', label: 'AI', Icon: Brain },
] as const;

// Terminal colour map
const previewColors = {
    cmd: { dark: '#71717a', light: '#52525b' },
    ok: { dark: '#4ade80', light: '#16a34a' },
    data: { dark: '#e4e4e7', light: '#18181b' },
    info: { dark: '#f97316', light: '#ea580c' },
} as const;


// ─────────────────────────────────────────────────────────────────────────────
//  MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function ProjectsPage() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const [activeFilter, setActiveFilter] = useState<string>('All');
    const [query, setQuery] = useState('');

    const filtered = useMemo(() => {
        return allProjects.filter((p) => {
            const matchesFilter = activeFilter === 'All' || p.category === activeFilter;
            const q = query.toLowerCase();
            const matchesSearch =
                !q ||
                p.title.toLowerCase().includes(q) ||
                p.subtitle.toLowerCase().includes(q) ||
                p.tags.some((t) => t.toLowerCase().includes(q)) ||
                p.desc.toLowerCase().includes(q);
            return matchesFilter && matchesSearch;
        });
    }, [activeFilter, query]);

    const counts = useMemo(() => {
        const map: Record<string, number> = { All: allProjects.length };
        allProjects.forEach((p) => {
            map[p.category] = (map[p.category] ?? 0) + 1;
        });
        return map;
    }, []);

    return (
        <main
            className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${theme === 'dark'
                    ? 'bg-[#000000] text-[#f5f5f0]'
                    : 'bg-[#fafafc] text-zinc-900'
                }`}
        >
            {/* ── AMBIENT BACKGROUND ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Top-left orange fog */}
                <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-orange-500/[0.04] blur-[120px]" />
                {/* Bottom-right subtle glow */}
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-600/[0.03] blur-[100px]" />
                {/* Grid lines — very subtle */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: isDark
                            ? `linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.4) 1px, transparent 1px)`
                            : `linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* ── HERO HEADER ── */}
                <div className="pt-6 pb-10">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-2 mb-3 justify-between"
                    >
                        <div>
                            <span className={`text-[10px] font-mono tracking-widest ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
                            PORTFOLIO
                        </span>
                        <span className={`text-[10px] font-mono ${isDark ? 'text-zinc-700' : 'text-zinc-300'}`}>/</span>
                        <span className="text-[10px] font-mono tracking-widest text-orange-500">PROJECTS</span>
                        </div>
                        <Link href="/"><button className='bg-orange-600 hover:bg-orange-500 text-[12px] px-4 py-1 rounded-lg text-white cursor-pointer'>Back To Home</button></Link>
                    </motion.div>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: 0.05 }}
                                className={`text-xs font-mono tracking-widest uppercase mb-2 ${isDark ? 'text-orange-400' : 'text-orange-600'}`}
                            >
                                03 / ALL WORK
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.08 }}
                                className={`text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight leading-none ${isDark ? 'text-white' : 'text-zinc-900'
                                    }`}
                            >
                                Every
                                <span
                                    className="relative inline-block mx-3"
                                    style={{ color: '#f97316' }}
                                >
                                    Project
                                    {/* Underline squiggle */}
                                    <span
                                        className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                                        style={{ background: 'linear-gradient(90deg, #f97316, #fb923c, transparent)' }}
                                    />
                                </span>
                                I've Built
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.14 }}
                                className={`mt-3 text-sm font-mono max-w-xl ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}
                            >
                                From full-stack platforms to AI sandboxes — {allProjects.length} projects, all open source.
                            </motion.p>
                        </div>

                        {/* Stats bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.18 }}
                            className={`flex items-center gap-4 px-5 py-3 rounded-2xl border ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                                }`}
                        >
                            {[
                                { label: 'Total', value: allProjects.length },
                                { label: 'Featured', value: allProjects.filter(p => p.highlight).length },
                                { label: 'Years', value: '3+' },
                            ].map((s, i) => (
                                <div key={i} className={`flex flex-col items-center ${i > 0 ? `border-l pl-4 ${isDark ? 'border-zinc-800' : 'border-zinc-200'}` : ''}`}>
                                    <span className={`text-xl font-mono font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>{s.value}</span>
                                    <span className={`text-[9px] font-mono tracking-widest uppercase ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>{s.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.22 }}
                        className={`mt-6 h-px origin-left ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`}
                    />
                </div>

                {/* ── FILTER + SEARCH BAR ── */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8"
                >
                    {/* Filters — LEFT */}
                    <div className={`flex items-center gap-1.5 p-1 rounded-xl border ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
                        {FILTERS.map(({ key, label, Icon: FIcon }) => {
                            const isActive = activeFilter === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveFilter(key)}
                                    className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider transition-all duration-200 ${isActive
                                            ? 'text-white'
                                            : isDark
                                                ? 'text-zinc-500 hover:text-zinc-300'
                                                : 'text-zinc-500 hover:text-zinc-700'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="filter-pill"
                                            className="absolute inset-0 rounded-lg bg-orange-500"
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <FIcon className="relative z-10 w-3 h-3" />
                                    <span className="relative z-10 hidden sm:inline">{label}</span>
                                    <span
                                        className={`relative z-10 text-[9px] px-1 py-0.5 rounded-md font-mono ${isActive
                                                ? 'bg-white/20 text-white'
                                                : isDark ? 'bg-zinc-800 text-zinc-500' : 'bg-zinc-200 text-zinc-500'
                                            }`}
                                    >
                                        {counts[key] ?? 0}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Search — RIGHT */}
                    <div className={`relative flex items-center rounded-xl border transition-all duration-200 ${isDark
                            ? 'bg-zinc-950 border-zinc-800 focus-within:border-orange-500/40'
                            : 'bg-zinc-50 border-zinc-200 focus-within:border-orange-400/60'
                        }`}>
                        <Search className={`absolute left-3 w-3.5 h-3.5 pointer-events-none ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`} />
                        <input
                            type="text"
                            placeholder="Search projects, tags..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className={`w-full sm:w-56 bg-transparent pl-9 pr-8 py-2.5 text-xs font-mono outline-none placeholder:text-zinc-600 ${isDark ? 'text-zinc-300' : 'text-zinc-700'
                                }`}
                        />
                        {query && (
                            <button
                                onClick={() => setQuery('')}
                                className={`absolute right-2.5 ${isDark ? 'text-zinc-600 hover:text-zinc-400' : 'text-zinc-400 hover:text-zinc-600'}`}
                            >
                                <X className="w-3 h-3" />
                            </button>
                        )}
                    </div>
                </motion.div>

                {/* ── RESULTS META ── */}
                <div className="flex items-center gap-3 mb-5">
                    <span className={`text-[10px] font-mono ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
                        {filtered.length} result{filtered.length !== 1 ? 's' : ''}
                        {activeFilter !== 'All' && ` in ${activeFilter}`}
                        {query && ` for "${query}"`}
                    </span>
                    <div className={`flex-1 h-px ${isDark ? 'bg-zinc-900' : 'bg-zinc-100'}`} />
                </div>

                {/* ── CARD GRID ── */}
                <AnimatePresence mode="popLayout">
                    {filtered.length > 0 ? (
                        <motion.div
                            layout
                            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 pb-20"
                        >
                            <AnimatePresence>
                                {filtered.map((project, idx) => (
                                    <ProjectCard key={project.id} project={project} idx={idx} isDark={isDark} />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center py-32 gap-4"
                        >
                            <div
                                className={`w-16 h-16 rounded-2xl border flex items-center justify-center ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                                    }`}
                            >
                                <Search className={`w-6 h-6 ${isDark ? 'text-zinc-700' : 'text-zinc-300'}`} />
                            </div>
                            <p className={`text-sm font-mono ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
                                No projects match your search.
                            </p>
                            <button
                                onClick={() => { setQuery(''); setActiveFilter('All'); }}
                                className="text-xs font-mono text-orange-500 hover:text-orange-400 underline underline-offset-2"
                            >
                                Clear filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </main>
    );
}