import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { StaggerText, Reveal } from '../components/motion';

export default function CaseStudies() {
  const { case_studies } = portfolioData;
  const [params, setParams] = useSearchParams();
  const query = params.get('q') || '';
  const category = params.get('category') || '';
  const categories = [...new Set(case_studies.items.map(project => project.category))].sort();
  const projects = case_studies.items.filter(project => (!category || project.category === category) && [project.title, project.subtitle, project.description, ...project.tags].join(' ').toLowerCase().includes(query.trim().toLowerCase()));
  function updateFilter(key, value) {
    setParams(current => { const next = new URLSearchParams(current); value ? next.set(key, value) : next.delete(key); return next; }, { replace: true });
  }

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

        <form role="search" className="mb-12 grid gap-5 border-y-2 border-[var(--ca-ink)] py-6 sm:grid-cols-[1fr_240px]" onSubmit={event => event.preventDefault()}>
          <label className="ca-mono text-xs font-bold uppercase tracking-widest">Search projects
            <input type="search" name="q" value={query} onChange={event => updateFilter('q', event.target.value)} placeholder="Name, technology, or idea" className="mt-3 block min-h-12 w-full border-2 border-[var(--ca-ink)] bg-white px-4 text-base font-normal normal-case tracking-normal" />
          </label>
          <label className="ca-mono text-xs font-bold uppercase tracking-widest">Category
            <select name="category" value={category} onChange={event => updateFilter('category', event.target.value)} className="mt-3 block min-h-12 w-full border-2 border-[var(--ca-ink)] bg-white px-3 text-base font-normal normal-case tracking-normal"><option value="">All categories</option>{categories.map(value => <option key={value} value={value}>{value}</option>)}</select>
          </label>
          <p className="ca-mono text-xs sm:col-span-2" role="status">Showing {projects.length} of {case_studies.items.length} projects</p>
        </form>
        {projects.length === 0 && <div className="py-16 text-center"><p>No projects match these filters.</p><button type="button" onClick={() => setParams({})} className="mt-5 min-h-12 border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-5">Clear filters</button></div>}
        {/* 2-Column Projects Grid matching reference website */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2">
          {projects.map((project, idx) => {
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
                              loading="lazy"
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
