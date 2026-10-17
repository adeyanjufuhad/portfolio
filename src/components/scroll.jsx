import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

let lenis = null;

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Smooth, inertia-based page scrolling. Skipped entirely for visitors who prefer reduced motion.
export function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: { offset: -96 } });
    return () => {
      lenis.destroy();
      lenis = null;
    };
  }, []);
  return null;
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo({ top: 0, behavior: 'instant' });
}

export function scrollToId(id, offset = -96) {
  const element = document.getElementById(id);
  if (!element) return;
  if (lenis) lenis.scrollTo(element, { offset });
  else element.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
}

function RevealWord({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <span className="relative inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

// Words light up one by one as the paragraph scrolls through the viewport.
export function ScrollRevealText({ text, className = '', as: Tag = 'p' }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.55'] });
  const words = text.split(' ');

  if (reduceMotion) return <Tag className={className}>{text}</Tag>;

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        return (
          <React.Fragment key={i}>
            <RevealWord progress={scrollYProgress} range={[start, start + 1 / words.length]}>{word}</RevealWord>
            {i < words.length - 1 ? ' ' : null}
          </React.Fragment>
        );
      })}
    </Tag>
  );
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => setMatches(media.matches);
    onChange();
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

// Progress of a stack of sticky cards, so each card can recede as the next one slides over it.
export function useStackProgress() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  return { ref, progress: scrollYProgress };
}

export function StackCard({ index, total, progress, className, style, children }) {
  const reduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const enabled = isDesktop && !reduceMotion;
  const targetScale = 1 - (total - index - 1) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, enabled ? targetScale : 1]);
  const filter = useTransform(progress, [index / total, 1], enabled && index < total - 1 ? ['brightness(1)', 'brightness(0.82)'] : ['brightness(1)', 'brightness(1)']);

  return (
    <motion.article className={className} style={{ ...style, scale, filter, transformOrigin: 'center top' }}>
      {children}
    </motion.article>
  );
}

// Fades and lifts content in, with a little parallax drift while it stays on screen.
export function ParallaxReveal({ children, className = '', distance = 60 }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [distance, -distance]);
  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
