import React, { useState, useEffect } from 'react';

function CharStagger({ text, base }) {
  const chars = Array.from(text);
  return (
    <>
      {chars.map((char, a) => (
        <span
          key={a}
          className="ca-splash-char inline-block"
          style={{ animationDelay: `${(base + 0.045 * a).toFixed(3)}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
}

const SPLASH_BUBBLE_STYLE =
  'rounded-2xl rounded-tl-none border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-4 py-3 text-3xl font-medium leading-[1.1] text-[var(--ca-ink)] sm:text-[2.5rem]';

export default function SplashScreen() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    // Unmount after splash animation finishes (1.8s delay + 0.45s fade out = 2.25s)
    const timer = setTimeout(() => {
      setActive(false);
    }, 2350);
    return () => clearTimeout(timer);
  }, []);

  if (!active) return null;

  return (
    <div
      className="ca-splash ca-grid pointer-events-none fixed inset-0 z-[80] grid place-items-center"
      aria-hidden="true"
    >
      <span className={`ca-splash-b1 col-start-1 row-start-1 ${SPLASH_BUBBLE_STYLE}`}>
        <CharStagger text="Oh, hello!" base={0.15} />
      </span>
      <span className={`ca-splash-b2 col-start-1 row-start-1 ${SPLASH_BUBBLE_STYLE}`}>
        <CharStagger text="You found me!" base={0.95} />
      </span>
    </div>
  );
}
