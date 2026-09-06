import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="ca-grid relative border-t border-[var(--ca-ink)]/10">
      {/* Curved Divider Line SVG */}
      <svg viewBox="0 0 1440 130" fill="none" preserveAspectRatio="none" className="h-16 w-full sm:h-24" aria-hidden="true">
        <path d="M-10 120C420 10 1030 4 1450 80" stroke="var(--ca-tick)" strokeWidth="1.5" />
      </svg>

      <div className="px-4 pb-10 pt-6 sm:px-8 lg:px-20">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="ca-display text-6xl uppercase leading-none tracking-tight text-[var(--ca-ink)] sm:text-8xl">
              Adeyanju Fuhad
            </p>
            <p className="ca-mono mt-4 inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.2em] text-[var(--ca-ink)]">
              <span className="h-3 w-3 rounded-full bg-[var(--ca-blue)]"></span>
              Full Stack Developer
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 md:items-end">
            <nav className="flex flex-wrap gap-1">
              <Link to="/about" className="ca-mono px-3.5 py-2 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] transition-colors hover:bg-[var(--ca-blue)] hover:text-white">
                About
              </Link>
              <Link to="/case-studies" className="ca-mono px-3.5 py-2 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] transition-colors hover:bg-[var(--ca-blue)] hover:text-white">
                Case Study
              </Link>
              <Link to="/playground" className="ca-mono px-3.5 py-2 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] transition-colors hover:bg-[var(--ca-blue)] hover:text-white">
                Playground
              </Link>
              <Link to="/resume" className="ca-mono px-3.5 py-2 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] transition-colors hover:bg-[var(--ca-yellow)] hover:text-[var(--ca-ink)]">
                Resume
              </Link>
            </nav>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/adeyanju-fuhad-206802320/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-[var(--ca-ink)] shadow-[1.5px_1.5px_0_rgba(25,21,16,0.25)] transition-transform duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--ca-yellow)' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/adeyanjufuhad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-[var(--ca-ink)] shadow-[1.5px_1.5px_0_rgba(25,21,16,0.25)] transition-transform duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--ca-magenta)' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://x.com/AdeyanjuFuhad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-[var(--ca-ink)] shadow-[1.5px_1.5px_0_rgba(25,21,16,0.25)] transition-transform duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--ca-green)' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 text-sm text-[var(--ca-ink)]/70 sm:flex-row">
          <span>© 2026 Adeyanju Fuhad</span>
          <span className="ca-mono inline-flex items-center gap-1.5 text-xs text-[var(--ca-ink)]/60">
            Lagos, Nigeria · Open to new builds
          </span>
        </div>
      </div>
    </footer>
  );
}
