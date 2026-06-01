import { Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

// Terminal line colour tokens
const previewColors = {
  cmd:  { dark: '#71717a', light: '#52525b' },
  ok:   { dark: '#4ade80', light: '#16a34a' },
  data: { dark: '#e4e4e7', light: '#18181b' },
  info: { dark: '#f97316', light: '#ea580c' },
} as const;
type ProjectCardProps = {
  project: any;
  idx: number;
  isDark: boolean;
};

function ProjectCard({
  project,
  idx,
  isDark,
}: ProjectCardProps) {
  const Icon = project.Icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-500
        ${
          isDark
            ? 'bg-[#0a0a0a] border-zinc-800/60 hover:border-orange-500/30'
            : 'bg-white border-zinc-200 hover:border-orange-400/50'
        }
      `}
      style={{
        boxShadow: isDark
          ? 'none'
          : '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
      }}
    >
      {/* Subtle top-glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(500px circle at 50% 0%, ${project.accentMuted}, transparent 65%)`,
        }}
      />

      {/* ── IMAGE BANNER ── */}
      <div className="relative h-52 overflow-hidden">
        {/* The image — zooms gently on hover */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Dark scrim so overlaid text is always legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        {/* Orange accent line at very bottom of image */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
        />

        {/* Index badge — top left */}
        <span
          className="absolute top-4 left-4 text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded-full border backdrop-blur-sm"
          style={{
            color: project.accent,
            borderColor: project.accent + '55',
            background: 'rgba(0,0,0,0.55)',
          }}
        >
          {project.index}
        </span>

        {/* Category pill — top right */}
        <span
          className="absolute top-4 right-4 text-[9px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-sm"
          style={{
            color: project.accent,
            borderColor: project.accent + '44',
            background: 'rgba(0,0,0,0.6)',
          }}
        >
          {project.category.toUpperCase()}
        </span>

        {/* Title + subtitle overlaid at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h3
                className="text-xl sm:text-2xl font-display font-bold text-white leading-tight drop-shadow-md transition-colors duration-300 group-hover:text-orange-300"
              >
                {project.title}
              </h3>
              <p className="text-[10px] font-mono tracking-wide text-white/50 mt-0.5">
                {project.subtitle}
              </p>
            </div>
            {/* Icon badge */}
            <div
              className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center border backdrop-blur-sm mb-0.5"
              style={{
                background: 'rgba(0,0,0,0.5)',
                borderColor: project.accent + '44',
              }}
            >
              <Icon className="w-4 h-4" style={{ color: project.accent }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="relative flex flex-col flex-1 px-6 pt-5 pb-2 gap-5 z-10">

        {/* Description */}
        <p
          className={`text-sm leading-relaxed font-sans text-justify ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}
        >
          {project.desc}
        </p>

        {/* ── TERMINAL PREVIEW ── */}
        <div className={`rounded-xl border overflow-hidden font-mono text-[11px] leading-relaxed ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-gradient-to-br from-orange-50/60 to-zinc-100/30 border-zinc-200'}`}>
          {/* macOS chrome dots */}
          <div className={`flex items-center gap-1.5 px-3 py-2 border-b ${isDark?'border-zinc-800/80':'border-zinc-200'} ${isDark ? 'bg-black/50' : 'bg-black/10'}`}>
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className={`ml-2 text-[9px] ${isDark ? 'text-zinc-600' : 'text-zinc-700'} tracking-wider select-none`}>
              zsh — ~/projects/{project.id}
            </span>
          </div>
          {/* Terminal lines */}
          <div className="px-4 py-3 space-y-1">
            {project.preview.map((line: { type: keyof typeof previewColors; text: string }, i: number) => (
              <p
                key={i}
                style={{
                  color:
                    previewColors[line.type as keyof typeof previewColors][
                      isDark ? 'dark' : 'light'
                    ],
                }}
              >
                {line.text}
              </p>
            ))}
            {/* Blinking cursor */}
            <p className="flex items-center gap-1 mt-1" style={{ color: project.accent }}>
              <span>$</span>
              <span
                className="inline-block w-1.5 h-3.5 ml-0.5 animate-pulse rounded-[1px]"
                style={{ background: project.accent }}
              />
            </p>
          </div>
        </div>

        {/* ── TECH TAGS ── */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag:any) => (
            <span
              key={tag}
              className={`px-2.5 py-1 text-[10px] font-mono rounded-md border transition-all duration-300
                ${
                  isDark
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-400 group-hover:border-zinc-700 group-hover:text-zinc-300'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-600 group-hover:border-zinc-300 group-hover:text-zinc-800'
                }
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div
        className={`relative z-10 px-6 py-4 mt-2 border-t flex items-center justify-between gap-4
          ${isDark ? 'border-zinc-800/60' : 'border-zinc-100'}
        `}
      >
        {/* Metrics */}
        <div className="flex items-center gap-5 flex-wrap">
          {project.metrics.map((m:any) => (
            <div key={m.label} className="flex flex-col">
              <span
                className={`text-[8px] font-mono uppercase tracking-widest ${
                  isDark ? 'text-zinc-600' : 'text-zinc-400'
                }`}
              >
                {m.label}
              </span>
              <span
                className={`text-[11px] font-mono font-bold ${
                  isDark ? 'text-zinc-300' : 'text-zinc-700'
                }`}
              >
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repository"
            className={`p-2 rounded-lg border transition-all duration-300
              ${
                isDark
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700'
                  : 'bg-zinc-100 border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300'
              }
            `}
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[10px] font-mono font-semibold border transition-all duration-300"
            style={{
              background: '#18181b',
              borderColor: '#3f3f46',
              color: '#ffffff',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = project.accent;
              (e.currentTarget as HTMLElement).style.borderColor = project.accent;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#18181b';
              (e.currentTarget as HTMLElement).style.borderColor = '#3f3f46';
            }}
            title="Live Demo"
          >
            LIVE <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;