import React from 'react';
import { portfolioData } from '../data/portfolioData';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { StaggerText, Reveal } from '../components/motion';
import { Download, ExternalLink } from 'lucide-react';

// One line with text on the left and text pinned to the right, like a LaTeX \hfill row.
function Row({ left, right, className = '' }) {
  return (
    <div className={`tex-row ${className}`}>
      <span>{left}</span>
      {right && <span className="ml-auto text-right">{right}</span>}
    </div>
  );
}

function Bullets({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

// Centred contact details separated by bullets; each item stays whole when the line wraps.
function ContactLine({ items, className = '' }) {
  return (
    <p className={`flex flex-wrap justify-center gap-x-3 text-[0.92em] sm:gap-x-0 ${className}`}>
      {items.map((item, i) => (
        <span key={i} className="whitespace-nowrap">
          {i > 0 && <span className="hidden px-1.5 sm:inline">•</span>}
          {item}
        </span>
      ))}
    </p>
  );
}

export default function Resume() {
  const { resume } = portfolioData;

  return (
    <div className="t-creative-artsy min-h-screen">
      <main className="ca-grid px-4 pb-24 pt-14 sm:px-8 sm:pt-20 lg:px-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center pb-10 text-center sm:pb-14">
          <div className="flex flex-col items-center">
            <p className="ca-hand text-2xl text-[var(--ca-ink)] sm:text-3xl">curriculum vitae</p>
            <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="mt-1 h-3 w-24" aria-hidden="true">
              <path d="M3 4c18-3 40-3 58 0" />
              <path d="M9 9c14-2.5 32-2.5 46 0" />
            </svg>
          </div>

          <span className="mt-4 block text-center">
            <StaggerText
              text="RESUME"
              className="ca-display text-7xl leading-[0.92] tracking-tight text-[var(--ca-ink)] sm:text-9xl xl:text-[11rem] select-none"
              stagger={0.06}
              delay={0.05}
            />
          </span>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={resume.pdfUrl}
              download={resume.filename}
              className="ca-mono inline-flex items-center gap-3 border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[4px_4px_0_var(--ca-ink)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--ca-ink)] active:scale-95"
            >
              <Download className="h-4 w-4" />
              Download Resume (PDF)
            </a>
            <a
              href={resume.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ca-mono inline-flex items-center gap-3 border-2 border-[var(--ca-ink)] bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[4px_4px_0_var(--ca-ink)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--ca-ink)] active:scale-95"
            >
              <ExternalLink className="h-4 w-4" />
              Open in New Tab
            </a>
          </div>
        </div>

        {/* The resume itself, set like the LaTeX PDF: Computer Modern, black on white. */}
        <Reveal delay={0.05}>
          <article className="tex-sheet mx-auto max-w-[860px] px-5 py-8 shadow-[0_2px_24px_rgba(17,18,18,0.16)] sm:px-14 sm:py-12">
            <header className="text-center">
              <h1 className="text-[1.75em] font-bold uppercase leading-tight tracking-[0.02em]">{resume.name}</h1>
              <p className="text-[1.08em]">{resume.headline}</p>
              <ContactLine
                className="mt-0.5"
                items={[
                  resume.location,
                  <a href={`tel:${resume.phone.replace(/\s/g, '')}`}>{resume.phone}</a>,
                  <a href={`mailto:${resume.email}`}>{resume.email}</a>,
                ]}
              />
              <ContactLine
                items={[
                  <a href={resume.portfolioUrl} target="_blank" rel="noopener noreferrer">{resume.portfolio}</a>,
                  <a href={resume.githubUrl} target="_blank" rel="noopener noreferrer">{resume.github}</a>,
                  <a href={resume.linkedinUrl} target="_blank" rel="noopener noreferrer">{resume.linkedin}</a>,
                ]}
              />
              {resume.openTo && <p className="text-[0.92em] italic">{resume.openTo}</p>}
            </header>

            <h2>Professional Summary</h2>
            <p>{resume.summary}</p>

            <h2>Technical Skills</h2>
            <Bullets
              items={resume.technicalSkills.map((g) => (
                <>
                  <b>{g.category}:</b> {g.skills.join(', ')}
                </>
              ))}
            />

            <h2>Professional Experience</h2>
            {resume.experience.map((e) => (
              <section key={e.company} className="mb-1.5">
                <Row className="font-bold" left={e.role} right={<span className="font-normal">{e.period}</span>} />
                <Row
                  className="text-[0.95em] italic"
                  left={
                    <>
                      {e.url ? (
                        <a href={e.url} target="_blank" rel="noopener noreferrer">{e.company}</a>
                      ) : (
                        e.company
                      )}
                      {e.tagline && <> — {e.tagline}</>}
                    </>
                  }
                  right={e.location}
                />
                <Bullets items={e.highlights} />
              </section>
            ))}

            <h2>Featured Projects</h2>
            {resume.projects.map((p) => {
              const [title, ...rest] = p.title.split(' — ');
              const subtitle = rest.join(' — ');
              return (
                <section key={p.title} className="mb-1.5">
                  <Row
                    left={
                      <>
                        <b>{title}{subtitle && ':'}</b> {subtitle}
                      </>
                    }
                    right={
                      <span className="text-[0.95em] italic">
                        {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>}
                        {p.liveUrl && p.githubUrl && ' | '}
                        {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">Code</a>}
                      </span>
                    }
                  />
                  <p className="text-[0.95em] italic">{p.stack}</p>
                  <Bullets items={p.highlights} />
                </section>
              );
            })}

            <h2>Awards &amp; Recognition</h2>
            {resume.achievements.map((a) => (
              <Row
                key={a.title}
                className="mb-0.5"
                left={
                  <>
                    <b>{a.title}</b> — {a.issuer}
                  </>
                }
                right={<i>{a.year}</i>}
              />
            ))}

            <h2>Education</h2>
            {resume.education.map((ed) => (
              <Row
                key={ed.institution}
                left={
                  <>
                    <b>{ed.degree}</b> • {ed.institution}
                  </>
                }
                right={<i>{ed.period}</i>}
              />
            ))}
            {resume.certifications.map((c) => {
              const cut = c.name.lastIndexOf(', ');
              const name = cut > -1 ? c.name.slice(0, cut) : c.name;
              const year = cut > -1 ? c.name.slice(cut + 2) : '';
              return (
                <Row
                  key={c.name}
                  className="mt-0.5"
                  left={
                    <>
                      <b>{name}</b> • {c.issuer}
                    </>
                  }
                  right={year && <i>{year}</i>}
                />
              );
            })}
          </article>
        </Reveal>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}
