import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { StaggerText, Reveal, Pop } from '../components/motion';
import { Download, ExternalLink, Briefcase, GraduationCap, Award, Wrench, CheckCircle2, FileText, Phone, Mail, MapPin, Github, Linkedin, FolderGit2 } from 'lucide-react';

export default function Resume() {
  const { resume } = portfolioData;

  return (
    <div className="t-creative-artsy min-h-screen">
      <main className="ca-grid px-4 pb-24 pt-14 sm:px-8 sm:pt-20 lg:px-20">
        {/* Header Section matching artsy typography */}
        <div className="mx-auto flex max-w-4xl flex-col items-center pb-12 text-center sm:pb-16">
          <div className="flex flex-col items-center">
            <p className="ca-hand text-2xl text-[var(--ca-ink)] sm:text-3xl">
              curriculum vitae
            </p>
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

          <p className="mt-4 text-base font-semibold uppercase tracking-widest text-[var(--ca-ink)]/75 sm:text-lg">
            {resume.headline}
          </p>

          {/* Contact Details Bar from Resume */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)]/80 ca-mono">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[var(--ca-ink)]" />
              {resume.location}
            </span>
            <span className="hidden sm:inline">•</span>
            <a
              href={resume.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--ca-blue)] underline underline-offset-2 transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              {resume.github}
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href={resume.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--ca-blue)] underline underline-offset-2 transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5" />
              {resume.linkedin}
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href={`mailto:${resume.email}`}
              className="inline-flex items-center gap-1.5 hover:text-[var(--ca-blue)] underline underline-offset-2 transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              {resume.email}
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href={`tel:${resume.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-[var(--ca-blue)] underline underline-offset-2 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {resume.phone}
            </a>
          </div>

          {/* Download and Print Actions */}
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

        <div className="mx-auto max-w-4xl flex flex-col gap-14 sm:gap-20">
          {/* Summary Card with tape decoration */}
          <Reveal delay={0.05}>
            <div className="relative -rotate-1 bg-[var(--ca-yellow-soft)] p-6 sm:p-10 shadow-[4px_6px_20px_rgba(17,18,18,0.14)] border-2 border-[var(--ca-ink)]/20">
              <span aria-hidden="true" className="absolute -left-4 -top-3 z-10 h-6 w-20 -rotate-[35deg] bg-white/70 shadow-[0_1px_3px_rgba(17,18,18,0.15)]" />
              <span aria-hidden="true" className="absolute -right-4 -top-3 z-10 h-6 w-20 rotate-[35deg] bg-[var(--ca-cyan)]/70 shadow-[0_1px_3px_rgba(17,18,18,0.15)]" />

              <span className="ca-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--ca-ink)]/70">
                Professional Summary
              </span>
              <p className="ca-hand mt-3 text-2xl font-medium leading-snug text-[var(--ca-ink)] sm:text-4xl">
                {resume.summary}
              </p>
            </div>
          </Reveal>

          {/* Technical Skills Section */}
          <Reveal delay={0.1}>
            <div>
              <div className="flex items-center gap-3">
                <span className="ca-mono inline-block -rotate-2 bg-[var(--ca-magenta)] px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-white shadow-[2px_2px_0_var(--ca-ink)]">
                  Technical Skills
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {resume.technicalSkills.map((group, idx) => (
                  <div
                    key={group.category}
                    className="ca-doodle-box border-2 border-[var(--ca-ink)] bg-white p-5 shadow-[4px_4px_0_var(--ca-ink)]"
                  >
                    <div className="flex items-center justify-between border-b-2 border-[var(--ca-ink)]/10 pb-3">
                      <h3 className="ca-mono text-base font-bold uppercase tracking-wider text-[var(--ca-ink)]">
                        {group.category}
                      </h3>
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: group.color }} />
                    </div>
                    <ul className="mt-4 flex flex-col gap-2">
                      {group.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-xs font-semibold text-[var(--ca-ink)]">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[var(--ca-ink)]/60" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Work Experience Timeline */}
          <Reveal delay={0.15}>
            <div>
              <div className="flex items-center gap-3">
                <span className="ca-mono inline-block rotate-1 bg-[var(--ca-blue)] px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-white shadow-[2px_2px_0_var(--ca-ink)]">
                  Work Experience
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-6">
                {resume.experience.map((exp, idx) => (
                  <div
                    key={exp.company}
                    className="ca-doodle-box border-2 border-[var(--ca-ink)] bg-white p-6 sm:p-8 shadow-[5px_5px_0_var(--ca-ink)]"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight text-[var(--ca-ink)]">
                          {exp.role}
                        </h3>
                        <p className="ca-mono mt-1 text-sm font-semibold uppercase tracking-wider text-[var(--ca-ink)]/70">
                          {exp.company} · {exp.location}
                          {exp.tagline && (
                            <span className="block sm:inline sm:ml-2 text-xs text-[var(--ca-ink)]/50 font-normal">
                              ({exp.tagline})
                            </span>
                          )}
                        </p>
                      </div>
                      <span className="ca-mono inline-block self-start bg-[var(--ca-chrome)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] border border-[var(--ca-ink)]">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="mt-4 flex flex-col gap-2 border-t border-[var(--ca-ink)]/10 pt-4">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-base leading-relaxed text-[var(--ca-ink)]/85">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ca-ink)]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Projects Section matching Resume PDF */}
          {resume.projects && resume.projects.length > 0 && (
            <Reveal delay={0.18}>
              <div>
                <div className="flex items-center gap-3">
                  <span className="ca-mono inline-block -rotate-1 bg-[var(--ca-green)] px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-white shadow-[2px_2px_0_var(--ca-ink)]">
                    Featured Projects
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-6">
                  {resume.projects.map((proj, idx) => (
                    <div
                      key={proj.title}
                      className="ca-doodle-box border-2 border-[var(--ca-ink)] bg-white p-6 sm:p-8 shadow-[5px_5px_0_var(--ca-ink)]"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h3 className="text-2xl font-bold tracking-tight text-[var(--ca-ink)]">
                              {proj.title}
                            </h3>
                            {proj.isLive && (
                              <span className="ca-mono inline-flex items-center gap-1 bg-[var(--ca-cyan)] px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)] border border-[var(--ca-ink)]">
                                ■ Live
                              </span>
                            )}
                          </div>
                          <p className="ca-mono mt-1 text-xs font-semibold text-[var(--ca-ink)]/70">
                            {proj.stack}
                          </p>
                        </div>
                      </div>

                      <ul className="mt-4 flex flex-col gap-2 border-t border-[var(--ca-ink)]/10 pt-4">
                        {proj.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-base leading-relaxed text-[var(--ca-ink)]/85">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ca-ink)]" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {/* Education & Achievements Grid */}
          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Education */}
              <div className="ca-doodle-box border-2 border-[var(--ca-ink)] bg-white p-6 sm:p-8 shadow-[4px_4px_0_var(--ca-ink)]">
                <span className="ca-mono inline-block bg-[var(--ca-cyan)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] border border-[var(--ca-ink)]">
                  Education
                </span>
                <div className="mt-4">
                  <h4 className="text-xl font-bold text-[var(--ca-ink)]">
                    {resume.education[0].institution}
                  </h4>
                  <p className="mt-1 text-base font-medium text-[var(--ca-ink)]/80">
                    {resume.education[0].degree}
                  </p>
                  <span className="ca-mono mt-2 inline-block text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)]/60">
                    {resume.education[0].period}
                  </span>
                </div>
              </div>

              {/* Achievements & Certifications */}
              <div className="ca-doodle-box border-2 border-[var(--ca-ink)] bg-white p-6 sm:p-8 shadow-[4px_4px_0_var(--ca-ink)]">
                <span className="ca-mono inline-block bg-[var(--ca-mint)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] border border-[var(--ca-ink)]">
                  Achievements & Certifications
                </span>
                <div className="mt-4 flex flex-col gap-4">
                  {resume.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Award className="h-5 w-5 shrink-0 text-[var(--ca-ink)] mt-0.5" />
                      <div>
                        <p className="text-base font-semibold text-[var(--ca-ink)]">
                          {ach.title}
                        </p>
                        <p className="ca-mono text-xs text-[var(--ca-ink)]/70">
                          {ach.issuer} ({ach.year})
                        </p>
                      </div>
                    </div>
                  ))}
                  {resume.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 border-t border-[var(--ca-ink)]/10 pt-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--ca-ink)] mt-0.5" />
                      <div>
                        <p className="text-base font-semibold text-[var(--ca-ink)]">
                          {cert.name}
                        </p>
                        <p className="ca-mono text-xs text-[var(--ca-ink)]/70">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bottom PDF Preview Box */}
          <Reveal delay={0.25}>
            <div className="border-2 border-[var(--ca-ink)] bg-[var(--ca-chrome)] p-6 sm:p-8 text-center shadow-[6px_6px_0_var(--ca-ink)]">
              <FileText className="mx-auto h-12 w-12 text-[var(--ca-ink)]" />
              <h3 className="mt-4 text-2xl font-bold text-[var(--ca-ink)]">
                Prefer a hard copy or recruiter PDF?
              </h3>
              <p className="mx-auto mt-2 max-w-lg text-base text-[var(--ca-ink)]/75">
                Download the single-page ATS-ready PDF resume formatted for engineering hiring managers.
              </p>
              <div className="mt-6">
                <a
                  href={resume.pdfUrl}
                  download={resume.filename}
                  className="ca-mono inline-flex items-center gap-3 border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[4px_4px_0_var(--ca-ink)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--ca-ink)] active:scale-95"
                >
                  <Download className="h-4 w-4" />
                  Download PDF Resume
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}
