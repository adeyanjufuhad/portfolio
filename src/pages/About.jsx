import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { Polaroid, DropIn, StaggerText, Reveal } from '../components/motion';

export default function About() {
  const { bio, hero } = portfolioData;
  const [activeTab, setActiveTab] = useState('bio');

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['bio', 'milestones', 'story', 'work'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="t-creative-artsy min-h-screen">
      <main className="ca-grid relative px-4 pb-24 pt-10 sm:pt-14">
        {/* Desktop Side Navigation */}
        <nav className="fixed left-0 top-1/3 z-40 hidden flex-col gap-3 lg:flex" aria-label="About sections">
          <button
            onClick={() => scrollToSection('bio')}
            className={`ca-mono flex items-center gap-2 rounded-r-xl border-2 border-l-0 border-[var(--ca-ink)] py-3 pl-3 pr-5 text-[11px] font-bold uppercase tracking-widest shadow-[3px_3px_0_var(--ca-ink)] transition-transform duration-200 hover:translate-x-1 ${
              activeTab === 'bio' ? 'scale-105' : 'opacity-90'
            } text-[var(--ca-ink)]`}
            style={{ backgroundColor: 'var(--ca-yellow)' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="3.5" fill="white" />
            </svg>
            Bio
          </button>
          <button
            onClick={() => scrollToSection('milestones')}
            className={`ca-mono flex items-center gap-2 rounded-r-xl border-2 border-l-0 border-[var(--ca-ink)] py-3 pl-3 pr-5 text-[11px] font-bold uppercase tracking-widest shadow-[3px_3px_0_var(--ca-ink)] transition-transform duration-200 hover:translate-x-1 ${
              activeTab === 'milestones' ? 'scale-105' : 'opacity-90'
            } text-[var(--ca-ink)]`}
            style={{ backgroundColor: 'var(--ca-cyan)' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Milestones
          </button>
          <button
            onClick={() => scrollToSection('story')}
            className={`ca-mono flex items-center gap-2 rounded-r-xl border-2 border-l-0 border-[var(--ca-ink)] py-3 pl-3 pr-5 text-[11px] font-bold uppercase tracking-widest shadow-[3px_3px_0_var(--ca-ink)] transition-transform duration-200 hover:translate-x-1 ${
              activeTab === 'story' ? 'scale-105' : 'opacity-90'
            } text-white`}
            style={{ backgroundColor: 'var(--ca-magenta)' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M12 2l10 10-10 10L2 12z" />
            </svg>
            Principles
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className={`ca-mono flex items-center gap-2 rounded-r-xl border-2 border-l-0 border-[var(--ca-ink)] py-3 pl-3 pr-5 text-[11px] font-bold uppercase tracking-widest shadow-[3px_3px_0_var(--ca-ink)] transition-transform duration-200 hover:translate-x-1 ${
              activeTab === 'work' ? 'scale-105' : 'opacity-90'
            } text-white`}
            style={{ backgroundColor: 'var(--ca-blue)' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M12 2 15 9l7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" />
            </svg>
            Experience
          </button>
        </nav>

        <div className="mx-auto max-w-4xl">
          <span className="mt-4 inline-block">
            <StaggerText
              text="ABOUT"
              className="ca-display text-7xl leading-[0.9] tracking-tight text-[var(--ca-ink)] sm:text-9xl xl:text-[12rem] select-none"
              stagger={0.06}
              delay={0.05}
            />
          </span>

          {/* Mobile Tabs */}
          <div className="mt-6 flex flex-wrap gap-2 lg:hidden">
            <button
              onClick={() => scrollToSection('bio')}
              className={`ca-mono flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest ${
                activeTab === 'bio' ? 'bg-[var(--ca-yellow)] text-[var(--ca-ink)] border border-black/20 shadow-sm' : 'bg-[var(--ca-chrome)] text-[var(--ca-ink)]'
              }`}
            >
              Bio
            </button>
            <button
              onClick={() => scrollToSection('milestones')}
              className={`ca-mono flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest ${
                activeTab === 'milestones' ? 'bg-[var(--ca-cyan)] text-[var(--ca-ink)] border border-black/20 shadow-sm' : 'bg-[var(--ca-chrome)] text-[var(--ca-ink)]'
              }`}
            >
              Milestones
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className={`ca-mono flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest ${
                activeTab === 'story' ? 'bg-[var(--ca-magenta)] text-white shadow-sm' : 'bg-[var(--ca-chrome)] text-[var(--ca-ink)]'
              }`}
            >
              Principles
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className={`ca-mono flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest ${
                activeTab === 'work' ? 'bg-[var(--ca-blue)] text-white shadow-sm' : 'bg-[var(--ca-chrome)] text-[var(--ca-ink)]'
              }`}
            >
              Experience
            </button>
          </div>

          {/* SECTION 1: MAIN BIO */}
          <section id="bio" className="mt-14 scroll-mt-28 sm:mt-20">
            <span
              className="ca-mono -rotate-2 inline-block bg-[var(--ca-yellow)] px-4 py-2 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] [filter:drop-shadow(2px_3px_3px_rgba(17,18,18,0.18))] sm:text-base [clip-path:polygon(2%_6%,12%_0%,25%_4%,40%_1%,55%_5%,70%_0%,85%_4%,98%_1%,96%_15%,100%_30%,97%_45%,100%_60%,96%_75%,99%_90%,97%_98%,85%_96%,70%_100%,55%_96%,40%_100%,25%_95%,12%_100%,3%_97%,1%_85%,4%_70%,0%_55%,3%_40%,0%_25%,2%_12%)]"
            >
              {bio.cardLabel || 'Main bio'}
            </span>

            <div className="ca-doodle-box relative mt-6 border-2 border-[var(--ca-yellow)] p-6 sm:p-10">
              <div className="lg:pr-56">
                <p className="ca-hand text-2xl font-medium leading-snug text-[var(--ca-ink)] sm:text-4xl">
                  {bio.body}
                </p>

                <div className="mt-8 flex max-w-2xl flex-col gap-4 text-base leading-relaxed text-[var(--ca-ink)]/80">
                  {bio.story.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {bio.callout && (
                  <div className="relative mt-8 max-w-xl -rotate-1 bg-[var(--ca-yellow-soft)] p-5 text-sm leading-relaxed text-[var(--ca-ink)] shadow-[3px_5px_14px_rgba(17,18,18,0.18)] sm:text-base">
                    <span aria-hidden="true" className="absolute -left-4 -top-2 z-10 h-5 w-16 -rotate-[38deg] bg-white/55 shadow-[0_1px_3px_rgba(17,18,18,0.15)]" />
                    {bio.callout}
                  </div>
                )}

                {bio.note && (
                  <div className="mt-8 max-w-md -rotate-2 bg-[var(--ca-yellow-soft)] p-4 text-sm leading-relaxed text-[var(--ca-ink)] shadow-[2px_3px_10px_rgba(17,18,18,0.14)] sm:ml-16 sm:text-base">
                    {bio.note}
                  </div>
                )}

                {/* Tech Stack & Toolbelt */}
                {bio.stack && (
                  <div className="mt-10 border-t border-[var(--ca-ink)]/10 pt-8">
                    <p className="ca-mono text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)]/70">
                      Core Stack & Technologies
                    </p>
                    <div className="mt-4 flex flex-col gap-4">
                      {bio.stack.map((group, gIdx) => (
                        <div key={gIdx} className="flex flex-col gap-2 sm:flex-row sm:items-baseline">
                          <span className="ca-mono text-xs font-bold uppercase text-[var(--ca-ink)] min-w-[140px]">
                            {group.category}:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {group.items.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="ca-mono rounded-md border border-[var(--ca-ink)]/20 bg-white/80 px-2.5 py-1 text-xs font-medium text-[var(--ca-ink)] shadow-[1px_1px_0_var(--ca-ink)]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Polaroid Photo & Name Pill */}
              <div className="mt-10 flex items-end justify-center gap-4 lg:absolute lg:right-0 lg:top-1 lg:mt-0 lg:block">
                <DropIn rotate={6}>
                  <span className="block">
                    <Polaroid
                      src={bio.photo?.[0]?.src}
                      caption={bio.photo?.[0]?.caption || '2026 at OAU GDG build with AI'}
                      photos={bio.photo}
                      initialIndex={0}
                      tilt="rotate-0"
                      className="w-36 lg:w-44"
                    />
                  </span>
                </DropIn>

                <span className="relative mt-4 inline-block lg:mt-5">
                  <span
                    className="ca-mono inline-block rounded-full border-[3px] border-white px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[0_4px_10px_rgba(25,21,16,0.25)]"
                    style={{ backgroundColor: 'var(--ca-yellow)' }}
                  >
                    {hero.nameDisplay}
                  </span>
                  <svg viewBox="0 0 40 40" fill="none" stroke="var(--ca-ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="absolute -left-6 -top-5 h-8 w-8" aria-hidden="true">
                    <path d="M34 33 C 25 24, 15 21, 9 9" />
                    <path d="M8 21 L 7 7 L 21 11" />
                  </svg>
                </span>
              </div>
            </div>
          </section>

          {/* SECTION 2: MILESTONES & HONORS */}
          <section id="milestones" className="mt-16 scroll-mt-28 sm:mt-24">
            <span
              className="ca-mono inline-block rotate-1 bg-[var(--ca-cyan)] px-4 py-2 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] [filter:drop-shadow(2px_3px_3px_rgba(17,18,18,0.18))] sm:text-base [clip-path:polygon(3%_3%,16%_1%,28%_5%,44%_0%,58%_4%,72%_1%,84%_5%,97%_2%,100%_18%,96%_32%,100%_48%,97%_64%,100%_80%,96%_94%,98%_99%,84%_95%,68%_100%,52%_96%,38%_100%,22%_95%,8%_99%,1%_92%,4%_78%,0%_62%,3%_48%,0%_34%,4%_20%,1%_8%)]"
            >
              Milestones & Recognition
            </span>

            <div className="ca-doodle-box relative mt-6 border-2 border-[var(--ca-cyan)] p-6 sm:p-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {bio.milestones?.map((m, idx) => (
                  <div
                    key={idx}
                    className={`relative flex flex-col justify-between p-5 pt-6 shadow-[2px_4px_12px_rgba(17,18,18,0.15)] border-2 border-[var(--ca-ink)] ${m.rotate}`}
                    style={{ backgroundColor: m.color }}
                  >
                    <span aria-hidden="true" className="absolute -left-3 -top-2 z-10 h-4 w-12 -rotate-[30deg] bg-white/60 shadow-[0_1px_2px_rgba(17,18,18,0.1)]" />
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl">{m.emoji}</span>
                        <span className="ca-mono text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)]/70 bg-white/60 px-2 py-0.5 rounded">
                          {m.year}
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-bold tracking-tight text-[var(--ca-ink)]">
                        {m.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[var(--ca-ink)]/80">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3: STORY & PRINCIPLES */}
          <section id="story" className="mt-16 scroll-mt-28 sm:mt-24">
            <span
              className="ca-mono inline-block rotate-2 bg-[var(--ca-magenta)] px-4 py-2 text-sm font-bold uppercase tracking-widest text-white [filter:drop-shadow(2px_3px_3px_rgba(17,18,18,0.18))] sm:text-base [clip-path:polygon(1%_8%,10%_2%,22%_6%,35%_0%,48%_5%,62%_1%,76%_6%,90%_1%,99%_6%,97%_20%,100%_35%,98%_50%,100%_66%,97%_80%,99%_94%,88%_98%,74%_94%,60%_99%,46%_95%,32%_100%,18%_96%,6%_99%,2%_88%,5%_74%,1%_60%,4%_46%,0%_32%,3%_18%)]"
            >
              {bio.storyLabel || 'Principles'}
            </span>

            <div className="ca-doodle-box relative mt-6 border-2 border-[var(--ca-magenta)] p-6 sm:p-10">
              {/* Second polaroid in Story section */}
              <div className="pointer-events-none absolute -right-4 top-[32%] hidden lg:block" aria-hidden="true">
                <DropIn rotate={-6}>
                  <span className="pointer-events-auto block">
                    <Polaroid
                      src={bio.photo?.[1]?.src}
                      caption={bio.photo?.[1]?.caption || 'late night builds'}
                      photos={bio.photo}
                      initialIndex={1}
                      tilt="rotate-0"
                      className="w-36 xl:w-44"
                    />
                  </span>
                </DropIn>
              </div>

              <div className="pointer-events-none absolute -right-2 top-[68%] hidden rotate-[-8deg] lg:block" aria-hidden="true">
                <span className="relative">
                  <svg viewBox="0 0 40 40" fill="none" stroke="var(--ca-ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="absolute -left-6 -top-5 h-8 w-8" aria-hidden="true">
                    <path d="M34 33 C 25 24, 15 21, 9 9" />
                    <path d="M8 21 L 7 7 L 21 11" />
                  </svg>
                  <span
                    className="ca-mono inline-block rounded-full border-[3px] border-white px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-white shadow-[0_4px_10px_rgba(25,21,16,0.25)]"
                    style={{ backgroundColor: 'var(--ca-magenta)' }}
                  >
                    Principles
                  </span>
                </span>
              </div>

              <div className="flex flex-col gap-12 lg:gap-16 lg:pr-24">
                {bio.principles.map((p, i) => (
                  <div key={i} className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
                    <div
                      className={`relative w-full max-w-xl p-6 pt-7 shadow-[2px_6px_18px_rgba(17,18,18,0.22)] sm:p-8 sm:pt-9 ${p.rotate}`}
                      style={{ backgroundColor: p.color }}
                    >
                      <span aria-hidden="true" className="absolute z-10 bg-white/55 shadow-[0_1px_3px_rgba(17,18,18,0.15)] -left-5 -top-2 h-5 w-16 -rotate-[40deg]" />
                      <span aria-hidden="true" className="absolute z-10 bg-white/55 shadow-[0_1px_3px_rgba(17,18,18,0.15)] -right-4 bottom-8 h-5 w-14 rotate-[62deg]" />

                      <h3 className="text-2xl font-semibold tracking-tight text-[var(--ca-ink)] sm:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--ca-ink)]/85 sm:text-base">
                        {p.body}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 self-center">
                      <svg viewBox="0 0 48 24" fill="none" stroke="var(--ca-ink)" strokeWidth="1.8" strokeLinecap="round" className="h-6 w-12 shrink-0" aria-hidden="true">
                        <path d="M2 6c12 10 26 14 40 12" />
                        <path d="M36 14l6 4-7 3" />
                      </svg>
                      <p className="ca-hand whitespace-nowrap text-2xl text-[var(--ca-ink)] sm:text-3xl">
                        {p.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 4: WORK & EXPERIENCE */}
          <section id="work" className="mt-16 scroll-mt-28 sm:mt-24">
            <span
              className="ca-mono -rotate-2 inline-block bg-[var(--ca-blue)] px-4 py-2 text-sm font-bold uppercase tracking-widest text-white [filter:drop-shadow(2px_3px_3px_rgba(17,18,18,0.18))] sm:text-base [clip-path:polygon(3%_3%,16%_1%,28%_5%,44%_0%,58%_4%,72%_1%,84%_5%,97%_2%,100%_18%,96%_32%,100%_48%,97%_64%,100%_80%,96%_94%,98%_99%,84%_95%,68%_100%,52%_96%,38%_100%,22%_95%,8%_99%,1%_92%,4%_78%,0%_62%,3%_48%,0%_34%,4%_20%,1%_8%)]"
            >
              {bio.workLabel || 'Work'}
            </span>

            <div className="ca-doodle-box mt-6 flex flex-col gap-7 border-2 border-[var(--ca-blue)] p-6 sm:p-10">
              {bio.work.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 border-b border-[var(--ca-ink)]/10 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <div className="flex items-baseline gap-3 sm:gap-4">
                      <span className="h-3 w-3 shrink-0 translate-y-0.5 bg-[var(--ca-blue)]" aria-hidden="true" />
                      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                        <p className="text-lg font-semibold text-[var(--ca-ink)]">
                          {item.role}
                        </p>
                        <p className="text-sm text-[var(--ca-ink)]/70">
                          {item.company}
                        </p>
                      </div>
                    </div>
                    <span className="ca-mono ml-6 inline-block bg-[var(--ca-blue)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white sm:ml-0">
                      {item.period}
                    </span>
                  </div>
                  {item.note && (
                    <p className="ca-hand ml-6 mt-1 text-base text-[var(--ca-ink)]/80 sm:ml-7">
                      {item.note}
                    </p>
                  )}
                </div>
              ))}

              <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-[var(--ca-ink)]/10 pt-6">
                <a
                  href="/Adeyanju_Fuhad_Resume.pdf"
                  download="Adeyanju_Fuhad_Resume.pdf"
                  className="ca-mono inline-flex items-center gap-2 border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[3px_3px_0_var(--ca-ink)] transition-transform hover:-translate-y-0.5"
                >
                  Download Resume (PDF) ↗
                </a>
                <a
                  href="/resume"
                  className="ca-mono inline-flex items-center gap-2 border-2 border-[var(--ca-ink)] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[3px_3px_0_var(--ca-ink)] transition-transform hover:-translate-y-0.5"
                >
                  Interactive Resume View
                </a>
              </div>
            </div>
          </section>
        </div>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
