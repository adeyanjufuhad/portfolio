import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { StaggerText, Reveal } from '../components/motion';

export default function CaseStudies() {
  const { case_studies } = portfolioData;

  return (
    <div className="t-creative-artsy min-h-screen">
      <main className="ca-grid px-4 pb-24 pt-14 sm:px-8 sm:pt-20 lg:px-20">
        {/* Header Section matching reference website */}
        <div className="mb-16">
          <p className="ca-hand text-2xl text-[var(--ca-ink)]">
            {case_studies.label || 'explore my work!'}
          </p>
          <span className="mt-3 inline-block">
            <StaggerText
              text={(case_studies.title || 'FEATURED WORKS').toUpperCase()}
              className="ca-display text-7xl leading-[0.92] tracking-tight text-[var(--ca-ink)] sm:text-9xl xl:text-[12rem] select-none"
              stagger={0.04}
              delay={0.05}
            />
          </span>
        </div>

        {/* 2-Column Projects Grid matching reference website */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2">
          {case_studies.items.map((project, idx) => {
            const isLogo = project.heroImages[0]?.src.includes('logo');

            return (
              <Reveal key={project.slug} delay={(idx % 2) * 0.08}>
                <div>
                  <Link to={`/case-studies/${project.slug}`} className="group block">
                    {/* Tab Header with Dot */}
                    <div className="flex">
                      <span className="ca-mono inline-flex items-center gap-3.5 bg-[var(--ca-chrome)] py-6 pl-9 pr-28 text-base font-bold uppercase tracking-[0.2em] text-[var(--ca-ink)] transition-colors duration-700 ease-in-out [clip-path:polygon(0_0,calc(100%-76px)_0,100%_100%,0_100%)] group-hover:bg-[var(--ca-ink)] group-hover:text-white">
                        <span className="h-3.5 w-3.5 rounded-full bg-[var(--ca-ink)] transition-colors duration-700 ease-in-out group-hover:bg-white" />
                      </span>
                    </div>

                    {/* Card Image Box with Invert Hover Lens */}
                    <div className="bg-[var(--ca-chrome)] p-5 transition-colors duration-700 ease-in-out group-hover:bg-[var(--ca-ink)]">
                      <div className="relative overflow-hidden">
                        <div className="transition-transform duration-500 ease-out group-hover:scale-[1.05]">
                          <div className={`relative overflow-hidden aspect-[16/9] w-full flex items-center justify-center ${isLogo ? 'bg-[#141416] p-4' : 'bg-white'}`}>
                            <img
                              src={project.heroImages[0].src}
                              alt={project.title}
                              className={`h-full w-full ${isLogo ? 'object-contain' : 'object-cover'}`}
                            />
                          </div>
                        </div>

                        {/* Pure CSS Invert Hover Lens */}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 scale-50 items-center justify-center rounded-full opacity-0 transition-[opacity,scale] duration-300 ease-out [backdrop-filter:invert(1)] border border-white/40 group-hover:scale-100 group-hover:opacity-100 lg:flex shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
                        >
                          <span className="ca-mono text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)]">
                            See
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="pt-7 text-center">
                      <h2 className="text-3xl font-semibold tracking-tight text-[var(--ca-ink)] sm:text-4xl group-hover:text-[var(--ca-blue)]">
                        {project.title}
                      </h2>
                      <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-[var(--ca-ink)]/70">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}
