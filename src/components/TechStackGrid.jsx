import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techStackIcons } from '../data/techStackIcons';
import { StaggerText, DropIn } from './motion';

export default function TechStackGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    { label: 'All', count: techStackIcons.length },
    { label: 'Languages', count: techStackIcons.filter(i => i.isLanguage).length },
    { label: 'Frameworks', count: techStackIcons.filter(i => i.category === 'Frameworks').length },
    { label: 'Backend', count: techStackIcons.filter(i => i.category === 'Backend').length },
    { label: 'Databases & DevOps', count: techStackIcons.filter(i => i.category === 'Databases & DevOps').length },
  ];

  const filteredIcons = activeFilter === 'All'
    ? techStackIcons
    : activeFilter === 'Languages'
    ? techStackIcons.filter(i => i.isLanguage)
    : techStackIcons.filter(i => i.category === activeFilter);

  const getCategoryBadgeClass = (category, isLanguage) => {
    if (isLanguage) return 'bg-[var(--ca-yellow-soft)] text-[var(--ca-ink)]';
    if (category === 'Frameworks') return 'bg-[var(--ca-cyan)] text-[var(--ca-ink)]';
    if (category === 'Backend') return 'bg-[var(--ca-mint)] text-[var(--ca-ink)]';
    return 'bg-[var(--ca-pink-soft)] text-[var(--ca-ink)]';
  };

  return (
    <section id="stack" className="ca-grid relative scroll-mt-24 border-t-2 border-[var(--ca-ink)] py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
        {/* Handwritten Label */}
        <div className="flex flex-col items-center">
          <p className="ca-hand text-2xl text-[var(--ca-ink)] sm:text-3xl">
            what I build with
          </p>
          <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="mt-1 h-3 w-20" aria-hidden="true">
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
        </div>

        {/* Display Title */}
        <span className="mt-6 block text-center">
          <StaggerText
            text="TECH STACK & LANGUAGES"
            className="ca-display max-w-[14ch] text-center text-5xl leading-[0.92] tracking-tight text-[var(--ca-ink)] sm:text-7xl lg:text-8xl select-none"
            stagger={0.04}
            delay={0.05}
          />
        </span>

        {/* Tilted Tape Subtitle */}
        <DropIn rotate={-1.5} y={-16} delay={0.15}>
          <div className="mt-6 max-w-2xl">
            <span className="ca-tape inline-block px-5 py-2 text-sm sm:text-base font-medium text-[var(--ca-ink)] shadow-sm bg-[var(--ca-yellow-soft)] [clip-path:polygon(1.5%_0,100%_8%,98.5%_100%,0_92%)] leading-snug">
              Languages & tech stacks used across projects I built and pushed to GitHub
            </span>
          </div>
        </DropIn>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {filters.map((f) => {
            const isActive = activeFilter === f.label;
            return (
              <button
                key={f.label}
                onClick={() => setActiveFilter(f.label)}
                className={`ca-mono inline-flex items-center gap-1.5 rounded-full border-2 border-[var(--ca-ink)] px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-150 active:scale-95 ${
                  isActive
                    ? 'bg-[var(--ca-ink)] text-white shadow-[2px_2px_0_var(--ca-yellow)] -translate-y-0.5'
                    : 'bg-white text-[var(--ca-ink)] shadow-[2px_2px_0_var(--ca-ink)] hover:bg-[var(--ca-surface)] hover:-translate-y-0.5'
                }`}
              >
                <span>{f.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[var(--ca-ink)]/10 text-[var(--ca-ink)]'}`}>
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid of Simple Icons */}
        <motion.div
          layout
          className="mt-12 grid w-full grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredIcons.map((item, idx) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25, delay: idx * 0.02 }}
                className="group relative flex flex-col items-center justify-between rounded-xl border-2 border-[var(--ca-ink)] bg-white p-4 text-center shadow-[3px_3px_0_var(--ca-ink)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[5px_5px_0_var(--ca-ink)]"
              >
                {/* Category Pill */}
                <div className="mb-2 w-full flex items-center justify-between">
                  <span
                    className={`ca-mono inline-block rounded border border-[var(--ca-ink)]/30 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider shadow-[0.5px_0.5px_0_var(--ca-ink)] ${getCategoryBadgeClass(
                      item.category,
                      item.isLanguage
                    )}`}
                  >
                    {item.isLanguage ? 'Language' : item.category.replace(' & DevOps', '')}
                  </span>

                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Project"
                      className="text-[var(--ca-ink)]/40 hover:text-[var(--ca-ink)] transition-colors p-0.5"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Simple Icon Container */}
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-[var(--ca-ink)] shadow-[1.5px_1.5px_0_var(--ca-ink)] transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: `#${item.hex}18` }}
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 transition-transform group-hover:scale-105"
                    style={{ fill: `#${item.hex}` }}
                  >
                    <path d={item.path} />
                  </svg>
                </div>

                {/* Name */}
                <h4 className="ca-mono mt-3 text-sm font-bold text-[var(--ca-ink)] tracking-tight">
                  {item.name}
                </h4>

                {/* Note */}
                <p className="ca-mono mt-0.5 text-[10px] font-medium text-[var(--ca-ink)]/65 line-clamp-1">
                  {item.note}
                </p>

                {/* Projects Built & Pushed to GitHub */}
                <div className="mt-3 w-full border-t border-dashed border-[var(--ca-ink)]/20 pt-2.5 flex flex-col items-center gap-1">
                  <span className="ca-mono text-[9px] font-bold uppercase tracking-widest text-[var(--ca-ink)]/50">
                    Used In
                  </span>
                  <div className="flex flex-wrap justify-center gap-1">
                    {item.projects.map((proj, pIdx) => (
                      <span
                        key={pIdx}
                        className="ca-mono text-[9.5px] font-bold text-[var(--ca-ink)] bg-[var(--ca-yellow-soft)] px-1.5 py-0.5 rounded border border-[var(--ca-ink)]/30"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom GitHub Callout */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow-soft)] p-5 sm:p-6 shadow-[3.5px_3.5px_0_var(--ca-ink)] w-full">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <span className="text-3xl hidden sm:inline" aria-hidden="true">🐙</span>
            <div>
              <p className="ca-mono text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)]">
                Tested & Deployed in Real Codebases
              </p>
              <p className="ca-hand text-xl sm:text-2xl text-[var(--ca-ink)] leading-snug">
                All listed languages & tools are actively used across my public repositories.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/adeyanjufuhad"
            target="_blank"
            rel="noopener noreferrer"
            className="ca-mono shrink-0 inline-flex items-center gap-2 rounded-full border-2 border-[var(--ca-ink)] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[2.5px_2.5px_0_var(--ca-ink)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[var(--ca-yellow)] sm:text-sm"
          >
            <span>Explore GitHub Repos</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5 sm:h-4 sm:w-4">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
