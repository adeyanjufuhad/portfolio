import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import SplashScreen from '../components/SplashScreen';
import TechStackGrid from '../components/TechStackGrid';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import {
  useLens,
  Pop,
  StaggerText,
  DropIn,
  Float,
  HomeProjectImage,
  Polaroid,
  HeroOrb,
} from '../components/motion';

export default function Home() {
  const { hero, bio, case_studies } = portfolioData;
  const { lensRef: heroLensRef, onMove: onHeroMouseMove } = useLens([3, 97]);

  return (
    <div className="t-creative-artsy min-h-screen">
      <SplashScreen />

      <main>
        {/* HERO SECTION */}
        <section className="ca-grid relative flex flex-col justify-center overflow-hidden px-4 min-h-[100svh] pb-12 pt-4 sm:pb-16">
          {/* Floating background decorative circles with user's photos */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
            <Float className="absolute left-[12%] top-[52%]" amplitude={8} rotate={4} duration={5}>
              <HeroOrb src={hero.media?.[0]?.src} className="h-20 w-20 -rotate-6" />
            </Float>
            <Float className="absolute right-[12%] top-[56%]" amplitude={7} rotate={4} duration={6} delay={0.4}>
              <HeroOrb src={hero.media?.[1]?.src} className="h-20 w-20 rotate-6" />
            </Float>
          </div>

          <div className="relative mx-auto flex max-w-5xl flex-col items-center pt-1 text-center sm:pt-2">
            <div
              className="group/name relative flex w-full flex-col items-center"
              onMouseMove={onHeroMouseMove}
            >
              {/* Interactive Invert Hover Lens tracking mouse */}
              <span
                ref={heroLensRef}
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 scale-[0.35] opacity-0 transition-[opacity,scale] duration-300 ease-out [backdrop-filter:invert(1)] group-hover/name:scale-100 group-hover/name:opacity-100 lg:block border border-white/20"
              >
                <span className="absolute -left-2 -top-2 h-4 w-4 bg-[var(--ca-ink)]" />
                <span className="absolute -right-2 -top-2 h-4 w-4 bg-[var(--ca-ink)]" />
                <span className="absolute -bottom-2 -left-2 h-4 w-4 bg-[var(--ca-ink)]" />
                <span className="absolute -bottom-2 -right-2 h-4 w-4 bg-[var(--ca-ink)]" />
              </span>

              {/* "my name is" doodle */}
              <div className="flex flex-col items-center text-[var(--ca-ink)]">
                <p className="ca-hand text-2xl sm:text-3xl">{hero.label}</p>
                <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="mt-1 h-3 w-20" aria-hidden="true">
                  <path d="M3 4c18-3 40-3 58 0" />
                  <path d="M9 9c14-2.5 32-2.5 46 0" />
                </svg>
              </div>

              {/* Mobile notes */}
              <div className="mt-4 flex flex-wrap justify-center gap-2 lg:hidden">
                {hero.notes && hero.notes.map((note, i) => (
                  <span
                    key={i}
                    className="ca-mono inline-block rounded-full border-[3px] border-white px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[0_4px_10px_rgba(25,21,16,0.25)]"
                    style={{ backgroundColor: note.color }}
                  >
                    {note.text}
                  </span>
                ))}
              </div>

              {/* Display Name Box with Pop and StaggerText */}
              <div className="relative mt-5">
                <Pop delay={1.7} from={0.55}>
                  <div className="ca-doodle-box relative inline-block border-[3px] px-5 py-1 sm:px-10 sm:py-2 border-[var(--ca-orange)] bg-white/40 shadow-[4px_6px_0_var(--ca-orange)]">
                    <StaggerText
                      text={(hero.nameDisplay || 'FUHAD').toUpperCase()}
                      className="ca-display text-[24vw] leading-[0.95] tracking-tight text-[var(--ca-ink)] sm:text-9xl lg:text-[12rem] select-none"
                      stagger={0.06}
                      delay={1.95}
                      y="0.7em"
                    />
                  </div>
                </Pop>
              </div>

              {/* Floating stickers for desktop with DropIn spring physics */}
              <div className="pointer-events-none absolute -inset-x-24 -inset-y-6 hidden lg:block">
                <div className="pointer-events-auto absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
                  <DropIn rotate={-8} delay={0}>
                    <span
                      className="ca-mono inline-block rounded-full border-[3px] border-white px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[0_4px_10px_rgba(25,21,16,0.25)] -rotate-12"
                      style={{ backgroundColor: hero.notes?.[0]?.color || 'var(--ca-purple)' }}
                    >
                      {hero.notes?.[0]?.text || 'Full Stack Developer'}
                    </span>
                  </DropIn>
                </div>
                <div className="pointer-events-auto absolute right-0 top-0 -translate-y-1/2 translate-x-1/2">
                  <DropIn rotate={7} delay={0.12}>
                    <span
                      className="ca-mono inline-block rounded-full border-[3px] border-white px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[0_4px_10px_rgba(25,21,16,0.25)] rotate-12"
                      style={{ backgroundColor: hero.notes?.[1]?.color || 'var(--ca-yellow-soft)' }}
                    >
                      {hero.notes?.[1]?.text || 'Lagos, Nigeria'}
                    </span>
                  </DropIn>
                </div>
                <div className="pointer-events-auto absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2">
                  <DropIn y={-140} rotate={-4} damping={8} delay={2}>
                    <span className="relative inline-block transition-transform hover:scale-105">
                      <span className="ca-hand inline-block px-4 py-2 leading-snug text-[var(--ca-ink)] shadow-[2px_3px_8px_rgba(17,18,18,0.18)] text-2xl bg-[var(--ca-yellow)]">
                        {hero.role}
                      </span>
                      <svg viewBox="0 0 40 40" fill="none" stroke="var(--ca-ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="absolute -right-7 -top-4 h-8 w-8 -scale-x-100" aria-hidden="true">
                        <path d="M34 33 C 25 24, 15 21, 9 9" />
                        <path d="M8 21 L 7 7 L 21 11" />
                      </svg>
                    </span>
                  </DropIn>
                </div>
                <div className="pointer-events-auto absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
                  <DropIn y={-140} rotate={2} damping={8} delay={2.15}>
                    <span className="relative inline-block transition-transform hover:scale-105">
                      <svg viewBox="0 0 40 40" fill="none" stroke="var(--ca-ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="absolute -left-6 -top-6 h-8 w-8" aria-hidden="true">
                        <path d="M34 33 C 25 24, 15 21, 9 9" />
                        <path d="M8 21 L 7 7 L 21 11" />
                      </svg>
                      <span className="ca-hand inline-block px-4 py-2 leading-snug text-[var(--ca-ink)] shadow-[2px_3px_8px_rgba(17,18,18,0.18)] text-2xl bg-[var(--ca-mint)]">
                        {hero.location}
                      </span>
                    </span>
                  </DropIn>
                </div>
              </div>

              {/* Status pill */}
              <p className="ca-mono mt-6 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--ca-ink)] sm:text-sm">
                <span className="h-3 w-3 rounded-full bg-[var(--ca-blue)] animate-pulse" />
                {hero.status}
              </p>
            </div>

            {/* Mobile stickers */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:hidden">
              <span className="ca-hand inline-block px-4 py-2 leading-snug text-[var(--ca-ink)] shadow-[2px_3px_8px_rgba(17,18,18,0.18)] text-xl bg-[var(--ca-yellow)] -rotate-3">
                {hero.role}
              </span>
              <span className="ca-hand inline-block px-4 py-2 leading-snug text-[var(--ca-ink)] shadow-[2px_3px_8px_rgba(17,18,18,0.18)] text-xl bg-[var(--ca-mint)] rotate-2">
                {hero.location}
              </span>
            </div>

            {/* Title with rotating gears/flowers */}
            <h1 className="mt-10 max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-[var(--ca-ink)] sm:mt-14 sm:text-6xl">
              <span>
                I build{' '}
                <svg viewBox="0 0 40 40" className="inline-block align-[-0.08em] ca-spin-slow h-[0.85em] w-[0.85em]" aria-hidden="true">
                  <circle cx="20" cy="20" r="18" fill="var(--ca-green)" stroke="var(--ca-ink)" strokeWidth="2" />
                  <circle cx="20" cy="20" r="11" fill="var(--ca-surface)" />
                  <circle cx="20" cy="20" r="5" fill="var(--ca-green)" />
                  <circle cx="14" cy="9" r="2.4" fill="var(--ca-ink)" />
                </svg>{' '}
                software, digital products, and applications that make people stop and stare{' '}
                <svg viewBox="0 0 40 40" className="inline-block align-[-0.08em] ca-spin-slow h-[0.85em] w-[0.85em]" aria-hidden="true">
                  <ellipse cx="20" cy="8" rx="4.6" ry="8" fill="var(--ca-magenta)" transform="rotate(0 20 20)" />
                  <ellipse cx="20" cy="8" rx="4.6" ry="8" fill="var(--ca-magenta)" transform="rotate(45 20 20)" />
                  <ellipse cx="20" cy="8" rx="4.6" ry="8" fill="var(--ca-magenta)" transform="rotate(90 20 20)" />
                  <ellipse cx="20" cy="8" rx="4.6" ry="8" fill="var(--ca-magenta)" transform="rotate(135 20 20)" />
                  <ellipse cx="20" cy="8" rx="4.6" ry="8" fill="var(--ca-magenta)" transform="rotate(180 20 20)" />
                  <ellipse cx="20" cy="8" rx="4.6" ry="8" fill="var(--ca-magenta)" transform="rotate(225 20 20)" />
                  <ellipse cx="20" cy="8" rx="4.6" ry="8" fill="var(--ca-magenta)" transform="rotate(270 20 20)" />
                  <ellipse cx="20" cy="8" rx="4.6" ry="8" fill="var(--ca-magenta)" transform="rotate(315 20 20)" />
                  <circle cx="20" cy="20" r="4" fill="var(--ca-ink)" />
                </svg>
                .
              </span>
            </h1>

            {/* Quick Link Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:mt-10 sm:gap-3.5">
              <a
                href="#work"
                className="ca-mono inline-flex items-center gap-2 rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[2.5px_2.5px_0_var(--ca-ink)] transition-transform duration-200 hover:-translate-y-0.5 sm:text-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5 sm:h-4 sm:w-4">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
                See Works
              </a>
              <Link
                to="/about"
                className="ca-mono inline-flex items-center gap-2 rounded-full border-2 border-[var(--ca-ink)] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[2.5px_2.5px_0_var(--ca-ink)] transition-transform duration-200 hover:-translate-y-0.5 sm:text-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5 sm:h-4 sm:w-4">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                </svg>
                Read Bio
              </Link>
              <Link
                to="/resume"
                className="ca-mono inline-flex items-center gap-2 rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-mint)] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[2.5px_2.5px_0_var(--ca-ink)] transition-transform duration-200 hover:-translate-y-0.5 sm:text-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5 sm:h-4 sm:w-4">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                Resume
              </Link>
              <Link
                to="/contact"
                className="ca-mono inline-flex items-center gap-2 rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-cyan)] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[2.5px_2.5px_0_var(--ca-ink)] transition-transform duration-200 hover:-translate-y-0.5 sm:text-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5 sm:h-4 sm:w-4">
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                Get in touch
              </Link>
            </div>
          </div>
        </section>

        {/* BIO OVERVIEW SECTION */}
        <section className="ca-grid relative scroll-mt-24 border-t-2 border-[var(--ca-ink)] py-20 sm:py-28 overflow-hidden">
          {/* Desktop floating polaroid photos BEHIND text (z-0) */}
          <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block" aria-hidden="true">
            <div className="absolute left-[1%] top-[30%] w-56 xl:left-[4%] xl:w-64">
              <DropIn rotate={-7}>
                <span className="pointer-events-auto block w-full">
                  <Polaroid
                    src={bio.photo?.[0]?.src}
                    caption={bio.photo?.[0]?.caption || '2026 at OAU GDG build with AI'}
                    photos={bio.photo}
                    initialIndex={0}
                    tilt="rotate-0"
                    className="w-full"
                  />
                </span>
              </DropIn>
            </div>
            <div className="absolute right-[1%] top-[18%] w-56 xl:right-[4%] xl:w-64">
              <DropIn rotate={8} delay={0.1}>
                <span className="pointer-events-auto block w-full">
                  <Polaroid
                    src={bio.photo?.[1]?.src}
                    caption={bio.photo?.[1]?.caption || 'late night builds'}
                    photos={bio.photo}
                    initialIndex={1}
                    tilt="rotate-0"
                    className="w-full"
                  />
                </span>
              </DropIn>
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-col items-center">
                <p className="ca-hand text-2xl text-[var(--ca-ink)] sm:text-3xl">
                  {bio.label || 'A quick note'}
                </p>
                <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="mt-1 h-3 w-20" aria-hidden="true">
                  <path d="M3 4c18-3 40-3 58 0" />
                  <path d="M9 9c14-2.5 32-2.5 46 0" />
                </svg>
              </div>

              <div className="relative z-10 mt-8 max-w-3xl">
                <p className="ca-hand text-3xl font-medium leading-snug text-[var(--ca-ink)] sm:text-5xl">
                  {bio.body}
                </p>
              </div>

              {/* Mobile polaroids */}
              <div className="mt-10 flex justify-center gap-6 lg:hidden">
                <Polaroid
                  src={bio.photo?.[0]?.src}
                  caption={bio.photo?.[0]?.caption || '2026 at OAU GDG build with AI'}
                  photos={bio.photo}
                  initialIndex={0}
                  tilt="-rotate-3"
                  className="w-40"
                />
                <Polaroid
                  src={bio.photo?.[1]?.src}
                  caption={bio.photo?.[1]?.caption || 'late night builds'}
                  photos={bio.photo}
                  initialIndex={1}
                  tilt="rotate-3"
                  className="w-40"
                />
              </div>

              <div className="mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3 sm:mt-14">
                {bio.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-14 items-center px-6 text-2xl font-semibold tracking-tight sm:h-[4.5rem] sm:px-8 sm:text-3xl ca-clip-blob-${index + 1} ${
                        skill.dark ? 'text-white' : 'text-[var(--ca-ink)]'
                      }`}
                      style={{ backgroundColor: skill.color }}
                    >
                      {skill.label}
                    </span>
                    <span
                      className={`relative inline-block h-14 w-14 shrink-0 sm:h-[4.5rem] sm:w-[4.5rem] ca-clip-blob-${index + 1}`}
                      style={{ backgroundColor: skill.color }}
                      aria-hidden="true"
                    >
                      <span className="ca-emoji-a absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl">
                        {skill.emojiA}
                      </span>
                      <span className="ca-emoji-b absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl">
                        {skill.emojiB}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK & LANGUAGES SECTION (SIMPLE ICONS GRID) */}
        <TechStackGrid />

        {/* FEATURED WORKS SECTION */}
        <section id="work" className="ca-grid scroll-mt-24 border-t-2 border-[var(--ca-ink)] pb-24 pt-10 sm:pt-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pb-16 text-center sm:pb-24">
            <div className="flex flex-col items-center">
              <p className="ca-hand text-2xl text-[var(--ca-ink)] sm:text-3xl">
                {case_studies.label}
              </p>
              <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="mt-1 h-3 w-24" aria-hidden="true">
                <path d="M3 4c18-3 40-3 58 0" />
                <path d="M9 9c14-2.5 32-2.5 46 0" />
              </svg>
            </div>

            <span className="mt-6 block text-center">
              <StaggerText
                text={(case_studies.title || 'FEATURED WORKS').toUpperCase()}
                className="ca-display max-w-[9ch] text-center text-6xl leading-[0.92] tracking-tight text-[var(--ca-ink)] sm:text-8xl lg:text-9xl select-none"
                stagger={0.05}
                delay={0.05}
              />
            </span>

            <DropIn rotate={-3} y={-28} delay={0.15}>
              <div className="mt-8 max-w-md">
                <span className="ca-tape inline-block px-6 py-2.5 text-base font-medium text-[var(--ca-ink)] shadow-sm bg-[var(--ca-yellow-soft)] [clip-path:polygon(1.5%_0,100%_8%,98.5%_100%,0_92%)] leading-snug">
                  {case_studies.description}
                </span>
              </div>
            </DropIn>
          </div>

          {/* Sticky Stacked Project Cards */}
          <div className="flex flex-col gap-16 px-4 sm:px-8 lg:px-20 lg:gap-[12vh]">
            {case_studies.items.map((project, idx) => {
              const isFirst = idx === 0;
              const tabMarginLeft = isFirst ? '0' : `min(calc(${idx * 21}% - 72px), calc(100% - 340px))`;
              const tabClipClass = isFirst
                ? 'pl-5 [clip-path:polygon(0_0,calc(100%-44px)_0,100%_100%,0_100%)] sm:pl-9 sm:[clip-path:polygon(0_0,calc(100%-76px)_0,100%_100%,0_100%)]'
                : 'pl-16 [clip-path:polygon(44px_0,calc(100%-44px)_0,100%_100%,0_100%)] sm:pl-[6.75rem] sm:[clip-path:polygon(76px_0,calc(100%-76px)_0,100%_100%,0_100%)]';

              const isYellowBg = project.color === 'var(--ca-yellow)' || project.color.includes('yellow');
              const contentTextColor = isYellowBg ? 'text-[var(--ca-ink)]' : 'text-white';
              const dateCircleBg = isYellowBg ? 'var(--ca-ink)' : '#ffffff';
              const tagBg = isYellowBg ? 'var(--ca-ink)' : '#ffffff';
              const tagText = isYellowBg ? 'text-white' : 'text-[var(--ca-ink)]';
              const isLogo = project.heroImages[0]?.src.includes('logo');

              return (
                <article
                  key={project.slug}
                  className="lg:sticky lg:top-28"
                  style={{ zIndex: idx + 1 }}
                >
                  {/* Tab Header */}
                  <div className="flex" style={{ marginLeft: tabMarginLeft }}>
                    <span
                      className={`ca-mono inline-flex items-center gap-2 py-3.5 pr-14 text-xs font-bold uppercase tracking-[0.2em] sm:gap-3.5 sm:py-6 sm:pr-28 sm:text-base ${contentTextColor} ${tabClipClass}`}
                      style={{ backgroundColor: project.color }}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true">
                        <path d="M12 2c1 5 4 8 9 9-5 1-8 4-9 9-1-5-4-8-9-9 5-1 8-4 9-9Z" />
                      </svg>
                      Project {project.num}
                    </span>
                  </div>

                  {/* Main Card Content */}
                  <div
                    className="grid grid-cols-1 gap-6 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:p-14 lg:min-h-[calc(100vh-14rem)] shadow-[8px_12px_0_rgba(25,21,16,0.3)]"
                    style={{ backgroundColor: project.color }}
                  >
                    <div className="flex flex-col">
                      <span className={`ca-mono inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] ${contentTextColor}`}>
                        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: dateCircleBg }} />
                        {project.subtitle}
                      </span>
                      <h2 className={`mt-6 text-5xl font-semibold tracking-tight sm:text-6xl xl:text-7xl ${contentTextColor}`}>
                        {project.title}
                      </h2>
                      <p className={`mt-5 max-w-lg text-lg leading-relaxed ${isYellowBg ? 'text-[var(--ca-ink)]/85' : 'text-white/90'}`}>
                        {project.description}
                      </p>

                      <Link
                        to={`/case-studies/${project.slug}`}
                        className={`ca-mono mt-8 inline-flex items-center gap-2.5 self-start border-b-2 pb-1 text-sm font-bold uppercase tracking-[0.2em] ${contentTextColor} transition-transform hover:translate-x-1`}
                        style={{ borderColor: isYellowBg ? 'var(--ca-ink)' : '#ffffff' }}
                      >
                        View project
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-4 w-4">
                          <path d="M7 17 17 7M9 7h8v8" />
                        </svg>
                      </Link>

                      <div className="mt-auto flex flex-wrap gap-2.5 pt-12">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className={`ca-mono px-4 pb-2 pt-2.5 text-base font-bold uppercase tracking-wide [clip-path:polygon(0_28%,12%_0,100%_0,100%_100%,0_100%)] ${tagText}`}
                            style={{ backgroundColor: tagBg }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Hero Preview with Tape Accents & Invert Hover Lens tracking cursor */}
                    <div className="lg:self-center">
                      <div className="relative">
                        <span aria-hidden="true" className="absolute -left-5 -top-3 z-10 h-6 w-24 -rotate-[9deg] bg-white/55 shadow-[0_1px_3px_rgba(17,18,18,0.15)]"></span>
                        <span aria-hidden="true" className="absolute -right-5 -top-3 z-10 h-6 w-24 rotate-[9deg] bg-white/55 shadow-[0_1px_3px_rgba(17,18,18,0.15)]"></span>
                        <Link to={`/case-studies/${project.slug}`}>
                          <HomeProjectImage
                            src={project.heroImages[0].src}
                            alt={project.title}
                            isLogo={isLogo}
                            isYellowBg={isYellowBg}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* REUSABLE CONTACT SECTION */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
