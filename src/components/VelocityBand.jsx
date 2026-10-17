import React from 'react';
import ScrollVelocity from './bits/ScrollVelocity';

// Two rows of display type that drift in opposite directions and speed up with scroll velocity.
export default function VelocityBand({ texts, className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden border-y-2 border-[var(--ca-ink)] bg-[var(--ca-ink)] py-4 text-[var(--ca-surface)] sm:py-6 ${className}`}
    >
      <ScrollVelocity
        texts={texts}
        velocity={42}
        numCopies={4}
        separator="✦"
        gap={28}
        skewWithVelocity={8}
        fadeEdges
        pauseOnHover
        className="ca-display uppercase [&:nth-child(even)]:text-[var(--ca-yellow)]"
        scrollerClassName="py-1 [&>span]:tracking-tight"
        fontSize="clamp(2.75rem, 8vw, 6.5rem)"
        fontWeight={800}
      />
    </div>
  );
}
