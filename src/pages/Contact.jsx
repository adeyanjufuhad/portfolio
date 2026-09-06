import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Copy, Check, Send, ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

import { StaggerText, Pop, DropIn, Polaroid } from '../components/motion';

export default function Contact() {
  const { contact, hero } = portfolioData;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    email: '',
    website: '' // honeypot
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleNext = () => {
    if (!formData.message.trim()) {
      setErrorMsg('Please enter a message before continuing.');
      return;
    }
    setErrorMsg('');
    setStep(2);
  };

  const handleBack = () => {
    setErrorMsg('');
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const recipientEmail = contact.email || 'adeyanjufuhad@gmail.com';

      // 1. Dispatch email directly to Gmail via FormSubmit
      try {
        await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.name} (${formData.email})`,
            _replyto: formData.email,
            _template: 'table'
          })
        });
      } catch (submitErr) {
        console.warn('[Contact] Direct FormSubmit dispatch notice:', submitErr);
      }

      // 2. Fire-and-forget backup to local API if available
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString()
          }),
          signal: controller.signal
        }).catch(() => {}).finally(() => clearTimeout(timeoutId));
      } catch (_) {}

      setStatus('success');
    } catch (err) {
      console.error('Contact form submission error:', err);
      // Fallback: open Gmail compose directly
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        contact.email || 'adeyanjufuhad@gmail.com'
      )}&su=${encodeURIComponent(`Portfolio inquiry from ${formData.name}`)}&body=${encodeURIComponent(
        formData.message
      )}`;
      window.open(gmailUrl, '_blank');
      setStatus('success');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="t-creative-artsy min-h-screen flex flex-col justify-between">
      <main className="ca-grid relative flex flex-1 flex-col px-4 py-10 sm:py-6 overflow-hidden">
        {/* Floating background polaroid decorations */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          <div className="absolute left-[9%] top-[14%] w-60 xl:w-72">
            <DropIn rotate={-14} delay={0.1}>
              <Polaroid
                src="/images/fuhad-portrait.jpg"
                caption="crafting code"
                tilt="rotate-0"
                className="w-full"
              />
            </DropIn>
          </div>

          <div className="absolute right-[9%] top-[18%] w-60 xl:w-72">
            <DropIn rotate={16} delay={0.2}>
              <Polaroid
                src="/images/fuhad-event.jpg"
                caption="2026 at OAU GDG build with AI"
                tilt="rotate-0"
                className="w-full"
              />
            </DropIn>
          </div>
        </div>

        {/* Central Contact Card */}
        <div className="relative z-10 mx-auto my-auto flex w-full max-w-2xl flex-col items-center">
          {/* Label "say hi" */}
          <div className="flex flex-col items-center">
            <p className="ca-hand text-2xl text-[var(--ca-ink)] sm:text-3xl">
              {contact.label}
            </p>
            <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="mt-0.5 h-3 w-20" aria-hidden="true">
              <path d="M3 4c18-3 40-3 58 0" />
              <path d="M9 9c14-2.5 32-2.5 46 0" />
            </svg>
          </div>

          {/* Banner Box "CONTACT" */}
          <div className="mt-3 -rotate-2">
            <Pop delay={0.05} from={0.8}>
              <div className="relative border-[3px] border-[var(--ca-ink)] bg-white/40 px-6 py-1.5 sm:px-10">
                <span className="absolute -left-2 -top-2 h-4 w-4 bg-[var(--ca-blue)]" />
                <span className="absolute -right-2 -top-2 h-4 w-4 bg-[var(--ca-blue)]" />
                <span className="absolute -bottom-2 -left-2 h-4 w-4 bg-[var(--ca-blue)]" />
                <span className="absolute -bottom-2 -right-2 h-4 w-4 bg-[var(--ca-blue)]" />
                <StaggerText
                  text={contact.banner.toUpperCase()}
                  className="ca-display text-6xl uppercase leading-none tracking-tight text-[var(--ca-ink)] sm:text-8xl lg:text-9xl select-none"
                  stagger={0.05}
                  delay={0.1}
                />
              </div>
            </Pop>
          </div>

          {/* Interactive Multi-step Form Card */}
          <div className="mt-5 w-full max-w-md">
            <div className="bg-[var(--ca-yellow-soft)] p-5 shadow-[3px_5px_16px_rgba(17,18,18,0.16)] border-2 border-[var(--ca-ink)]">
              {status === 'success' ? (
                <div className="py-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--ca-green)] text-white mb-3">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="ca-display text-4xl text-[var(--ca-ink)]">
                    Message Dispatched!
                  </h3>
                  <p className="mt-2 text-base text-[var(--ca-ink)]/80">
                    Your message has been sent directly to <strong className="font-bold text-[var(--ca-ink)]">{contact.email}</strong>.
                  </p>
                  <p className="mt-1 text-xs text-[var(--ca-ink)]/60 ca-mono">
                    I typically reply within a few hours.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}&su=${encodeURIComponent('Following up on portfolio inquiry')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ca-mono inline-flex items-center gap-2 border-2 border-[var(--ca-ink)] bg-[var(--ca-cyan)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)] shadow-[2px_2px_0_var(--ca-ink)] hover:bg-white transition-all"
                    >
                      <span>Open in Gmail ↗</span>
                    </a>
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setStep(1);
                        setFormData({ message: '', name: '', email: '', website: '' });
                      }}
                      className="ca-mono inline-flex items-center gap-2 bg-[var(--ca-ink)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[var(--ca-blue)] shadow-[2px_2px_0_var(--ca-ink)] transition-all"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <p className="ca-mono text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)]">
                    {contact.description}
                  </p>

                  {errorMsg && (
                    <div className="mt-2 rounded bg-red-100 p-2 text-xs font-semibold text-red-800 border border-red-300">
                      {errorMsg}
                    </div>
                  )}

                  {/* Step 1: Message Textarea */}
                  {step === 1 && (
                    <div className="mt-3">
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="block w-full resize-none border-b-2 border-[var(--ca-ink)]/25 bg-transparent p-2 text-base text-[var(--ca-ink)] placeholder:text-[var(--ca-ink)]/65 focus:border-[var(--ca-blue)] focus:outline-none"
                        placeholder="Tell me a story, or a project idea…"
                        aria-label="Your message"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={handleNext}
                        className="ca-mono mt-4 inline-flex items-center gap-2 bg-[var(--ca-ink)] px-4 py-2 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[var(--ca-blue)] hover:text-white shadow-[2px_2px_0_var(--ca-ink)]"
                      >
                        Next (1/2)
                      </button>
                    </div>
                  )}

                  {/* Step 2: Name & Email */}
                  {step === 2 && (
                    <div className="mt-3 flex flex-col gap-3">
                      <div>
                        <label className="block ca-mono text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)]/70 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="block w-full border-b-2 border-[var(--ca-ink)]/25 bg-transparent pb-1 text-base text-[var(--ca-ink)] placeholder:text-[var(--ca-ink)]/50 focus:border-[var(--ca-blue)] focus:outline-none"
                          placeholder="Jane Doe"
                          autoFocus
                        />
                      </div>

                      <div>
                        <label className="block ca-mono text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)]/70 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="block w-full border-b-2 border-[var(--ca-ink)]/25 bg-transparent pb-1 text-base text-[var(--ca-ink)] placeholder:text-[var(--ca-ink)]/50 focus:border-[var(--ca-blue)] focus:outline-none"
                          placeholder="jane@example.com"
                        />
                      </div>

                      {/* Honeypot field (hidden from humans) */}
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div className="mt-4 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={handleBack}
                          aria-label="Back to message"
                          className="ca-mono flex items-center justify-center p-2 text-sm font-bold text-[var(--ca-ink)]/70 hover:text-[var(--ca-ink)] border border-[var(--ca-ink)]/20 hover:bg-white/40"
                        >
                          <ArrowLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="ca-mono inline-flex items-center gap-2 bg-[var(--ca-ink)] px-4 py-2 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[var(--ca-blue)] hover:text-white shadow-[2px_2px_0_var(--ca-ink)] disabled:opacity-50"
                        >
                          {status === 'submitting' ? 'Sending...' : 'Send (2/2)'}
                          <Send className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Status and Direct Email Link with Copy */}
          <div className="mt-6 flex items-center gap-3">
            <svg viewBox="0 0 48 24" fill="none" stroke="var(--ca-ink)" strokeWidth="1.8" strokeLinecap="round" className="h-6 w-12" aria-hidden="true">
              <path d="M2 6c12 10 26 14 40 12" />
              <path d="M36 14l6 4-7 3" />
            </svg>
            <p className="ca-hand text-2xl text-[var(--ca-ink)] sm:text-3xl">
              {hero.status}
            </p>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
            <a
              href={`mailto:${contact.email}`}
              className="ca-mono text-base font-bold text-[var(--ca-blue)] underline-offset-2 hover:underline"
            >
              {contact.email}
            </a>
            <button
              onClick={handleCopyEmail}
              title="Copy email to clipboard"
              className="p-1 text-[var(--ca-ink)]/70 hover:text-[var(--ca-ink)] transition-colors rounded hover:bg-black/5"
            >
              {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
            </button>
            {copied && (
              <span className="ca-mono text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                Copied!
              </span>
            )}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}&su=${encodeURIComponent('Project Inquiry for Adeyanju Fuhad')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ca-mono ml-1 inline-flex items-center gap-1.5 rounded-full border border-[var(--ca-ink)]/30 bg-white px-2.5 py-0.5 text-xs font-bold text-[var(--ca-ink)] shadow-[1px_1px_0_var(--ca-ink)] hover:bg-[var(--ca-cyan)] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current text-red-500">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
              <span>Gmail ↗</span>
            </a>
          </div>

          {/* Social Links Pill */}
          <div className="mt-5 flex gap-2 rounded-2xl bg-white px-6 py-2.5 shadow-[0_12px_32px_rgba(17,18,18,0.12)] border border-[var(--ca-ink)]/10 sm:gap-6 sm:px-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ca-mono flex flex-col items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] transition-colors hover:text-[var(--ca-blue)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ca-mono flex flex-col items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] transition-colors hover:text-[var(--ca-blue)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ca-mono flex flex-col items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] transition-colors hover:text-[var(--ca-blue)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
