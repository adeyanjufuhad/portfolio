import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export function StaggerText({ text, className, stagger = 0.06, delay = 1.95, y = '0.7em' }) {
  const words = text.split(' ');
  return (
    <motion.span
      className={className}
      style={{ display: 'inline-block' }}
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      <span className="sr-only">{text}</span>
      {words.map((word, wIdx) => (
        <span key={wIdx}>
          <span aria-hidden="true" className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, cIdx) => (
              <motion.span
                key={cIdx}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          {wIdx < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </motion.span>
  );
}

export function Pop({ children, className, delay = 1.7, from = 0.55 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: from }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function DropIn({ children, className, rotate = -4, y = -28, delay = 0, damping = 13 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, rotate: 1.8 * rotate }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ type: 'spring', stiffness: 210, damping, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Float({ children, className, amplitude = 6, duration = 4, rotate = 0, delay = 0 }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0],
        rotate: rotate ? [-rotate, rotate, -rotate] : 0,
      }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({ children, className, delay = 0, y = 28 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function useLens(bounds) {
  const lensRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const onMove = (e) => {
    const lens = lensRef.current;
    if (!lens) return;
    const target = e.currentTarget;
    const { clientX, clientY } = e;

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = target.getBoundingClientRect();
      let x = ((clientX - rect.left) / rect.width) * 100;
      let y = ((clientY - rect.top) / rect.height) * 100;
      if (bounds) {
        x = Math.min(bounds[1], Math.max(bounds[0], x));
        y = Math.min(bounds[1], Math.max(bounds[0], y));
      }
      lens.style.left = `${x}%`;
      lens.style.top = `${y}%`;
    });
  };

  return { lensRef, onMove };
}

export function SeeLensImage({ src, alt, isLogo, className, aspectClass = 'aspect-[16/9]' }) {
  const { lensRef, onMove } = useLens();

  return (
    <div className="relative overflow-hidden w-full h-full" onMouseMove={onMove}>
      <div className="transition-transform duration-500 ease-out group-hover:scale-[1.05] h-full w-full">
        <div className={`relative overflow-hidden ${aspectClass} w-full flex items-center justify-center ${isLogo ? 'bg-[#141416] p-4' : 'bg-white'}`}>
          <img
            src={src}
            alt={alt}
            className={`h-full w-full ${isLogo ? 'object-contain' : 'object-cover'} ${className || ''}`}
          />
        </div>
      </div>

      <span
        ref={lensRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 scale-50 items-center justify-center rounded-full opacity-0 transition-[opacity,scale] duration-300 ease-out [backdrop-filter:invert(1)] border border-white/40 group-hover:scale-100 group-hover:opacity-100 lg:flex shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
      >
        <span className="ca-mono text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)]">
          See
        </span>
      </span>
    </div>
  );
}

export function HomeProjectImage({ src, alt, isLogo, isYellowBg }) {
  const { lensRef, onMove } = useLens();

  return (
    <div
      className="group/img relative block overflow-hidden border-4 bg-[var(--ca-surface)] aspect-square w-full lg:aspect-auto lg:h-[calc(100vh-21rem)]"
      style={{ borderColor: isYellowBg ? 'var(--ca-ink)' : '#ffffff' }}
      onMouseMove={onMove}
    >
      <div className={`relative overflow-hidden h-full w-full flex items-center justify-center transition-transform duration-500 group-hover/img:scale-105 ${isLogo ? 'bg-[#141416] p-8' : ''}`}>
        <img
          src={src}
          alt={alt}
          className={`transition-transform duration-500 ${
            isLogo ? 'max-h-full max-w-full object-contain' : 'h-full w-full object-cover'
          }`}
        />
      </div>
      <span
        ref={lensRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 scale-50 items-center justify-center rounded-full opacity-0 transition-[opacity,scale] duration-300 ease-out [backdrop-filter:invert(1)] border border-white/40 group-hover/img:scale-100 group-hover/img:opacity-100 lg:flex shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
      >
        <span className="ca-mono text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)]">
          See
        </span>
      </span>
    </div>
  );
}

export function Polaroid({ src, caption, photos, initialIndex = 0, tilt = '-rotate-3', className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const hasPhotos = photos && photos.length > 0;
  const activeItem = hasPhotos ? photos[currentIndex % photos.length] : { src, caption };
  const activeSrc = activeItem?.src || src;
  const activeCaption = activeItem?.caption || caption;
  const isLogo = activeSrc && (activeSrc.includes('logo') || activeSrc.endsWith('.svg'));
  const hasMultiple = hasPhotos && photos.length > 1;

  const handleNext = (e) => {
    if (hasMultiple) {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }
  };

  return (
    <figure
      onClick={handleNext}
      title={hasMultiple ? 'Click to cycle through photos & project builds' : undefined}
      className={`relative inline-block bg-white p-2 pb-1 shadow-[0_6px_18px_rgba(17,18,18,0.22)] ${
        hasMultiple ? 'cursor-pointer select-none transition-transform hover:scale-[1.02] active:scale-[0.98]' : ''
      } ${tilt} ${className}`}
    >
      <span aria-hidden="true" className="absolute -left-4 -top-2 z-10 h-5 w-16 -rotate-[38deg] bg-[var(--ca-cyan)]/70 shadow-[0_1px_3px_rgba(17,18,18,0.15)]" />
      <span aria-hidden="true" className="absolute -right-4 -top-2 z-10 h-5 w-16 rotate-[38deg] bg-[var(--ca-yellow-soft)]/70 shadow-[0_1px_3px_rgba(17,18,18,0.15)]" />
      
      {hasMultiple && (
        <span className="ca-mono absolute right-2 top-2 z-20 rounded-full bg-black/65 px-2 py-0.5 text-[9px] font-semibold text-white backdrop-blur-sm shadow-sm flex items-center gap-1">
          <span>{(currentIndex % photos.length) + 1}/{photos.length}</span>
          <span className="text-[10px]">↻</span>
        </span>
      )}

      <div className={`aspect-[4/5] w-full overflow-hidden ${isLogo ? 'bg-[#141416] p-3 flex items-center justify-center' : 'bg-[#ededeb]'}`}>
        {activeSrc ? (
          <img
            key={activeSrc}
            src={activeSrc}
            alt={activeCaption || ''}
            className={`h-full w-full transition-opacity duration-200 ${isLogo ? 'object-contain' : 'object-cover'}`}
          />
        ) : (
          <div className="h-full w-full bg-[var(--ca-ink)]/5" />
        )}
      </div>
      {activeCaption && (
        <figcaption className="ca-hand mt-1 text-center text-lg leading-tight text-[var(--ca-ink)]/80 truncate px-1">
          {activeCaption}
        </figcaption>
      )}
    </figure>
  );
}

export function HeroOrb({ src, className = 'h-20 w-20' }) {
  return (
    <span className={`flex items-center justify-center rounded-full bg-[var(--ca-orange)] p-1.5 shadow-[2px_4px_12px_rgba(25,21,16,0.18)] ${className}`}>
      {src ? (
        <img src={src} alt="" className="h-full w-full rounded-full object-cover" />
      ) : null}
    </span>
  );
}
