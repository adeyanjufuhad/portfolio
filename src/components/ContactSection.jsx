import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLens } from './motion';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { contact } = portfolioData;
  const [reactionCount, setReactionCount] = useState(1);
  const [reacted, setReacted] = useState(false);
  const { lensRef, onMove } = useLens([3, 97]);

  const handleReact = () => {
    if (!reacted) {
      setReactionCount(prev => prev + 1);
      setReacted(true);
    } else {
      setReactionCount(prev => prev - 1);
      setReacted(false);
    }
  };

  return (
    <section id="contact" className="ca-grid relative scroll-mt-24">
      <div
        className="group/talk relative mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 pb-4 pt-16 text-center sm:gap-6 sm:pt-20"
        onMouseMove={onMove}
      >
        {/* Interactive Invert Hover Lens over Mascot tracking cursor */}
        <span
          ref={lensRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 scale-[0.35] opacity-0 transition-[opacity,scale] duration-300 ease-out [backdrop-filter:invert(1)] group-hover/talk:scale-100 group-hover/talk:opacity-100 lg:block"
        >
          <span className="absolute -left-2 -top-2 h-4 w-4 bg-[var(--ca-ink)]" />
          <span className="absolute -right-2 -top-2 h-4 w-4 bg-[var(--ca-ink)]" />
          <span className="absolute -bottom-2 -left-2 h-4 w-4 bg-[var(--ca-ink)]" />
          <span className="absolute -bottom-2 -right-2 h-4 w-4 bg-[var(--ca-ink)]" />
        </span>

        {/* Animated Big Blinking Face */}
        <div className="transition-transform duration-300 hover:scale-105">
          <svg viewBox="0 0 200 200" className="overflow-visible h-52 w-52 sm:h-64 sm:w-64" aria-hidden="true">
            <circle cx="100" cy="100" r="88" fill="var(--ca-yellow)" stroke="var(--ca-ink)" strokeWidth="3" />
            <circle cx="56" cy="120" r="12" fill="var(--ca-magenta)" opacity="0.45" />
            <circle cx="144" cy="120" r="12" fill="var(--ca-magenta)" opacity="0.45" />
            <g className="ca-blink">
              <rect x="65" y="68" width="16" height="42" rx="8" fill="var(--ca-ink)" />
              <rect x="119" y="68" width="16" height="42" rx="8" fill="var(--ca-ink)" />
            </g>
            <path d="M62 130 Q100 172 138 130" fill="none" stroke="var(--ca-ink)" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>

        <span>
          <span className="ca-display text-7xl uppercase leading-[0.9] tracking-tight text-[var(--ca-ink)] sm:text-9xl block">
            Let's talk
          </span>
        </span>

        <div>
          <p className="ca-hand mx-auto max-w-xl text-2xl leading-snug text-[var(--ca-ink)]/80 sm:text-3xl">
            Got an idea, a collab, or just want to geek out about something? Send a message.
          </p>
        </div>
      </div>

      <div className="px-4 pb-20 pt-10 sm:px-8 lg:px-20">
        <div className="relative mx-auto max-w-4xl">
          {/* Quip note bubble */}
          <div className="relative z-20 mb-6 flex justify-center lg:absolute lg:-left-24 lg:-top-14 lg:mb-0 lg:block lg:w-80">
            <div className="relative w-full max-w-sm -rotate-2 bg-[var(--ca-cyan)] p-5 pt-6 shadow-[2px_6px_18px_rgba(17,18,18,0.22)]">
              {/* Tape accents */}
              <span aria-hidden="true" className="absolute -left-4 -top-2 z-10 h-5 w-16 -rotate-[38deg] bg-[var(--ca-yellow-soft)]/70 shadow-[0_1px_3px_rgba(17,18,18,0.15)]"></span>
              <span aria-hidden="true" className="absolute -right-4 -top-2 z-10 h-5 w-16 rotate-[38deg] bg-[var(--ca-pink-soft)]/70 shadow-[0_1px_3px_rgba(17,18,18,0.15)]"></span>
              
              <div className="flex items-start gap-3">
                <span className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-black/10 bg-white">
                  <img src={contact.comment?.avatar || "/images/fuhad-portrait.jpg"} alt="Avatar" className="h-full w-full object-cover" />
                </span>
                <div>
                  <p className="font-semibold text-[var(--ca-ink)]">Collaborator Review</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--ca-ink)]/75">
                    "Adeyanju writes clean, robust code and makes the process genuinely enjoyable."
                  </p>
                  <button
                    onClick={handleReact}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[var(--ca-blue)] bg-white/70 px-2.5 py-1 text-xs font-bold text-[var(--ca-ink)] transition-transform hover:scale-105 active:scale-95"
                  >
                    <svg viewBox="0 0 24 24" fill={reacted ? "var(--ca-yellow)" : "none"} stroke="var(--ca-ink)" strokeWidth="1.5" className="h-3.5 w-3.5">
                      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
                    </svg>
                    {reactionCount}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Banner Box */}
          <Link to="/contact" aria-label="Go to contact page" className="group block relative">
            <span aria-hidden="true" className="absolute -left-5 -top-3 z-10 h-6 w-28 -rotate-[8deg] bg-white/60 shadow-[0_1px_3px_rgba(17,18,18,0.15)]"></span>
            <span aria-hidden="true" className="absolute -right-5 -top-3 z-10 h-6 w-28 rotate-[8deg] bg-white/60 shadow-[0_1px_3px_rgba(17,18,18,0.15)]"></span>
            <div className="ca-doodle-box relative flex flex-col items-center gap-2 border-[3px] border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-6 py-16 text-center shadow-[8px_12px_0_var(--ca-ink)] transition-transform duration-200 group-hover:-translate-y-1 sm:gap-3 sm:py-24">
              <p className="ca-hand text-3xl text-[var(--ca-ink)] sm:text-4xl">
                let's build something worth showing
              </p>
              <span className="ca-display text-7xl uppercase leading-none tracking-tight text-[var(--ca-ink)] sm:text-[9rem]">
                CONTACT
              </span>
              <span className="ca-mono mt-3 inline-flex items-center gap-2 border-b-2 border-[var(--ca-ink)] pb-1 text-sm font-bold uppercase tracking-[0.2em] text-[var(--ca-ink)] transition-transform duration-200 group-hover:translate-x-1">
                drop a line
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-4 w-4">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
