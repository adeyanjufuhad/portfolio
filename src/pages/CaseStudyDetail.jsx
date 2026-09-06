import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

import { SeeLensImage, StaggerText } from '../components/motion';

function MoreProjectCard({ otherProject }) {
  const isLogo = otherProject.heroImages[0]?.src.includes('logo');

  return (
    <div>
      <Link to={`/case-studies/${otherProject.slug}`} className="group block">
        <div className="flex">
          <span className="ca-mono inline-flex items-center gap-3.5 bg-[var(--ca-chrome)] py-6 pl-9 pr-28 text-base font-bold uppercase tracking-[0.2em] text-[var(--ca-ink)] transition-colors duration-700 ease-in-out [clip-path:polygon(0_0,calc(100%-76px)_0,100%_100%,0_100%)] group-hover:bg-[var(--ca-ink)] group-hover:text-white">
            <span className="h-3.5 w-3.5 rounded-full bg-[var(--ca-ink)] transition-colors duration-700 ease-in-out group-hover:bg-white" />
            Project {otherProject.num}
          </span>
        </div>

        <div className="bg-[var(--ca-chrome)] p-5 transition-colors duration-700 ease-in-out group-hover:bg-[var(--ca-ink)]">
          <SeeLensImage
            src={otherProject.heroImages[0].src}
            alt={otherProject.title}
            isLogo={isLogo}
          />
        </div>

        <div className="pt-7 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--ca-ink)] sm:text-4xl group-hover:text-[var(--ca-blue)]">
            {otherProject.title}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-[var(--ca-ink)]/70">
            {otherProject.description}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const { case_studies } = portfolioData;

  let targetSlug = slug;
  if (slug === 'project-1') targetSlug = 'blaze';
  if (slug === 'project-2') targetSlug = 'kuza-store';

  const project = case_studies.items.find(p => p.slug === targetSlug) || case_studies.items[0];
  const otherProjects = case_studies.items.filter(p => p.slug !== project.slug);
  const isLogo = project.heroImages[0]?.src.includes('logo');

  return (
    <div className="t-creative-artsy min-h-screen">
      <main className="ca-grid px-4 pb-24 pt-14 sm:px-8 sm:pt-20 lg:px-20">
        <div className="mb-4">
          <Link
            to="/case-studies"
            className="ca-mono inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)]/70 hover:text-[var(--ca-blue)]"
          >
            ← Back to all projects
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-10">
          <div>
            <span className="ca-mono inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--ca-ink)]">
              <span className="h-3.5 w-3.5 rounded-full bg-[var(--ca-ink)]" />
              Project {project.num} · {project.subtitle}
            </span>

            <h1 className="ca-display mt-4 uppercase leading-[0.92] tracking-tight text-[var(--ca-ink)] [font-size:clamp(3.5rem,9vw,11rem)]">
              <StaggerText
                text={project.title.toUpperCase()}
                stagger={0.04}
                delay={0.05}
              />
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--ca-ink)]/75 sm:text-xl">
              {project.description}
            </p>

            {/* Links */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ca-mono inline-flex items-center gap-2 border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[3px_3px_0_var(--ca-ink)] transition-transform hover:-translate-y-0.5"
                  >
                    Visit Live Site ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ca-mono inline-flex items-center gap-2 border-2 border-[var(--ca-ink)] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[3px_3px_0_var(--ca-ink)] transition-transform hover:-translate-y-0.5"
                  >
                    Source Code ↗
                  </a>
                )}
              </div>
            )}

            {/* Category Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="ca-mono bg-[var(--ca-chrome)] px-3.5 pb-2 pt-2.5 text-sm font-bold uppercase tracking-wide text-[var(--ca-ink)] [clip-path:polygon(0_28%,12%_0,100%_0,100%_100%,0_100%)] sm:px-5 sm:pb-2.5 sm:pt-3 sm:text-base"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Polygon Facts Boxes */}
          <div className="grid max-w-lg grid-cols-2 gap-5 lg:w-[32rem] lg:pt-8">
            {project.facts.map((fact, idx) => (
              <div key={idx} className={`relative ${fact.rotate}`}>
                <span
                  aria-hidden="true"
                  className={`absolute -top-2 z-10 h-5 w-14 bg-white/60 shadow-[0_1px_3px_rgba(17,18,18,0.15)] ${
                    idx % 2 === 0 ? '-left-3 -rotate-[36deg]' : '-right-3 rotate-[36deg]'
                  }`}
                />
                <div
                  className={`px-6 py-5 [filter:drop-shadow(2px_4px_5px_rgba(17,18,18,0.16))] ${fact.clip}`}
                  style={{ backgroundColor: fact.color }}
                >
                  <p className="ca-mono text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)]">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-base font-semibold text-[var(--ca-ink)]/90">
                    {fact.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image with Tape Accents */}
        <div className="mt-12">
          <div className="relative">
            <span aria-hidden="true" className="absolute -left-5 -top-3 z-10 h-6 w-24 -rotate-[9deg] bg-white/55 shadow-[0_1px_3px_rgba(17,18,18,0.15)]" />
            <span aria-hidden="true" className="absolute -right-5 -top-3 z-10 h-6 w-24 rotate-[9deg] bg-white/55 shadow-[0_1px_3px_rgba(17,18,18,0.15)]" />
            <div
              className={`relative overflow-hidden border-4 border-[var(--ca-ink)] h-[45vh] w-full sm:h-[65vh] lg:h-[75vh] shadow-[8px_12px_0_var(--ca-ink)] flex items-center justify-center ${
                isLogo ? 'bg-[#141416] p-8 sm:p-14' : 'bg-[var(--ca-surface)]'
              }`}
            >
              <img
                src={project.heroImages[0].src}
                alt={project.title}
                className={`transition-transform duration-700 hover:scale-102 ${
                  isLogo ? 'max-h-full max-w-full object-contain' : 'h-full w-full object-cover'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Challenge Section */}
        <section className="mt-20 sm:mt-28">
          <div className="mx-auto max-w-3xl">
            <p className="ca-hand text-3xl text-[var(--ca-ink)] sm:text-4xl">
              {case_studies.challengeLabel}
            </p>
            <div className="mt-6 flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-[var(--ca-ink)]/85">
                {project.story.problem.description}
              </p>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="mt-20 sm:mt-28">
          <div className="mx-auto max-w-3xl">
            <p className="ca-hand text-3xl text-[var(--ca-ink)] sm:text-4xl">
              {case_studies.approachLabel}
            </p>
            <div className="mt-6 flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-[var(--ca-ink)]/85">
                {project.story.solution.description}
              </p>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="mt-20 sm:mt-28">
          <div className="mx-auto max-w-3xl">
            <p className="ca-hand text-3xl text-[var(--ca-ink)] sm:text-4xl">
              {case_studies.resultLabel}
            </p>
            <div className="mt-6 flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-[var(--ca-ink)]/85">
                {project.story.result.description}
              </p>
            </div>

            {/* 3 Metric Result Cards */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {project.story.result.facts.map((fact, idx) => (
                <div
                  key={idx}
                  className={`p-5 [filter:drop-shadow(2px_4px_5px_rgba(17,18,18,0.14))] ${fact.rotate} ca-clip-blob-${(idx % 3) + 1}`}
                  style={{ backgroundColor: fact.color }}
                >
                  <p className="leading-tight text-[var(--ca-ink)] text-5xl font-bold tracking-tight">
                    {fact.value}
                  </p>
                  <p className="ca-mono mt-3 text-[11px] font-bold uppercase tracking-widest text-[var(--ca-ink)]/80">
                    {fact.desc || fact.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Projects Section */}
        {otherProjects.length > 0 && (
          <div className="mt-24 sm:mt-32">
            <p className="ca-hand text-3xl text-[var(--ca-ink)] sm:text-4xl">
              {case_studies.relatedTitle}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2">
              {otherProjects.slice(0, 2).map((other) => (
                <MoreProjectCard key={other.slug} otherProject={other} />
              ))}
            </div>
          </div>
        )}
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}
