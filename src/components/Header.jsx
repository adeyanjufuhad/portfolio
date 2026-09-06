import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      to: '/',
      label: 'Home',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="#ffffff" strokeWidth="3" strokeLinejoin="round" className="overflow-visible [filter:drop-shadow(1px_1.5px_0_rgba(25,21,16,0.28))] h-5 w-5 shrink-0" aria-hidden="true">
          <path d="M12 2l2.9 6.26 6.85.72-5.1 4.62 1.44 6.7L12 17.6l-6.09 3.7 1.44-6.7-5.1-4.62 6.85-.72z" />
        </svg>
      )
    },
    {
      to: '/about',
      label: 'About',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="#ffffff" strokeWidth="3" strokeLinejoin="round" className="overflow-visible [filter:drop-shadow(1px_1.5px_0_rgba(25,21,16,0.28))] h-5 w-5 shrink-0" aria-hidden="true">
          <path d="M12 3a3.6 3.6 0 100 7.2A3.6 3.6 0 0012 3zM4.8 20a7.2 7.2 0 0114.4 0z" />
        </svg>
      )
    },
    {
      to: '/case-studies',
      label: 'Case Study',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="#ffffff" strokeWidth="3" strokeLinejoin="round" className="overflow-visible [filter:drop-shadow(1px_1.5px_0_rgba(25,21,16,0.28))] h-5 w-5 shrink-0" aria-hidden="true">
          <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
        </svg>
      )
    },
    {
      to: '/playground',
      label: 'Playground',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="#ffffff" strokeWidth="3" strokeLinejoin="round" className="overflow-visible [filter:drop-shadow(1px_1.5px_0_rgba(25,21,16,0.28))] h-5 w-5 shrink-0" aria-hidden="true">
          <path d="M12 2l10 10-10 10L2 12z" />
        </svg>
      )
    },
    {
      to: '/resume',
      label: 'Resume',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="#ffffff" strokeWidth="3" strokeLinejoin="round" className="overflow-visible [filter:drop-shadow(1px_1.5px_0_rgba(25,21,16,0.28))] h-5 w-5 shrink-0" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
      )
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--ca-surface)]/95 backdrop-blur-sm">
      <div className="relative flex items-stretch justify-between border-b border-[var(--ca-ink)]/10 pl-4 pr-3 sm:pl-5">
        <div className="flex items-stretch gap-2">
          {/* Logo Smiley & Name */}
          <Link
            to="/"
            aria-label="Fuhad"
            className="flex items-center gap-2.5 pr-2 group transition-transform active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7 overflow-visible [filter:drop-shadow(1px_1.5px_0_rgba(25,21,16,0.28))] transition-transform group-hover:scale-110 group-active:rotate-12" aria-hidden="true">
              <circle cx="12" cy="12" r="10" fill="var(--ca-magenta)" stroke="#ffffff" strokeWidth="2.5" />
              <circle cx="8.5" cy="10.5" r="1.35" fill="#ffffff" />
              <circle cx="15.5" cy="10.5" r="1.35" fill="#ffffff" />
              <path d="M8 14Q12 18 16 14" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="ca-mono text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)]">
              Fuhad
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-stretch md:flex">
            {navItems.map((item) => {
              const isActive = item.to === '/' ? location.pathname === '/' : location.pathname.startsWith(item.to);
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={`ca-mono flex items-center justify-center gap-2.5 px-5 py-4 text-sm font-bold uppercase leading-none tracking-widest text-[var(--ca-ink)] transition-all duration-150 active:scale-95 active:translate-y-0.5 ${
                    isActive ? 'bg-[var(--ca-yellow)] shadow-inner' : 'hover:bg-[var(--ca-chrome)]'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 py-2">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/adeyanju-fuhad-206802320/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-[var(--ca-ink)] shadow-[1.5px_1.5px_0_rgba(25,21,16,0.25)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
            style={{ backgroundColor: 'var(--ca-yellow)' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/adeyanjufuhad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-[var(--ca-ink)] shadow-[1.5px_1.5px_0_rgba(25,21,16,0.25)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
            style={{ backgroundColor: 'var(--ca-magenta)' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* X (formerly Twitter) */}
          <a
            href="https://x.com/AdeyanjuFuhad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-[var(--ca-ink)] shadow-[1.5px_1.5px_0_rgba(25,21,16,0.25)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
            style={{ backgroundColor: 'var(--ca-green)' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Resume PDF Download Button */}
          <a
            href="/Adeyanju_Fuhad_Resume.pdf"
            download="Adeyanju_Fuhad_Resume.pdf"
            className="ca-mono hidden items-center gap-1.5 border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-4 py-2 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[2px_2px_0_var(--ca-ink)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 sm:inline-flex"
            title="Download PDF Resume"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="ca-mono hidden items-center gap-2.5 border-2 border-[var(--ca-ink)] px-5 py-2 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] transition-all duration-200 hover:bg-[var(--ca-ink)] hover:text-white active:scale-95 sm:inline-flex"
          >
            <svg viewBox="0 0 24 22" fill="currentColor" className="h-4 w-4">
              <path d="M12 21C5 16 1 12 1 7.5 1 4 3.6 1.5 6.8 1.5c2 0 3.9 1 5.2 2.6 1.3-1.6 3.2-2.6 5.2-2.6C20.4 1.5 23 4 23 7.5 23 12 19 16 12 21Z" />
            </svg>
            Contact
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            className="flex h-11 w-11 items-center justify-center border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] md:hidden transition-transform active:scale-90"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-[var(--ca-ink)]" /> : <Menu className="h-5 w-5 text-[var(--ca-ink)]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full z-50 flex flex-col border-b-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] p-2 md:hidden shadow-lg"
          >
            {navItems.map((item) => {
              const isActive = item.to === '/' ? location.pathname === '/' : location.pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`ca-mono flex items-center gap-3 border-2 border-[var(--ca-ink)] p-3 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] transition-colors active:translate-x-1 mb-1.5 ${
                    isActive ? 'bg-[var(--ca-yellow)]' : 'bg-white hover:bg-[var(--ca-chrome)]'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              );
            })}
            <a
              href="/Adeyanju_Fuhad_Resume.pdf"
              download="Adeyanju_Fuhad_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="ca-mono mt-1 flex items-center justify-center gap-2 border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[2px_2px_0_var(--ca-ink)] transition-transform active:scale-95"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-3.5 w-3.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume (PDF)
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="ca-mono mt-1 flex items-center justify-center gap-2 border-2 border-[var(--ca-ink)] bg-[var(--ca-blue)] px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] transition-transform active:scale-95"
            >
              <svg viewBox="0 0 24 22" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M12 21C5 16 1 12 1 7.5 1 4 3.6 1.5 6.8 1.5c2 0 3.9 1 5.2 2.6 1.3-1.6 3.2-2.6 5.2-2.6C20.4 1.5 23 4 23 7.5 23 12 19 16 12 21Z" />
              </svg>
              Contact
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
