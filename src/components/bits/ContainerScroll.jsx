// Container Scroll Animation by Aceternity UI (https://21st.dev/@manuarora700/components/container-scroll-animation),
// restyled as an ink-bordered "paper" frame. The card starts tilted back in 3D and flattens as it scrolls into view.
import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

export default function ContainerScroll({ children, className = '' }) {
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'center center'] });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [24, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : isMobile ? [0.85, 1] : [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [60, 0]);

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ perspective: '1200px' }}>
      <motion.div
        style={{ rotateX: rotate, scale, y, transformOrigin: 'center top' }}
        className="relative w-full border-4 border-[var(--ca-ink)] bg-[var(--ca-ink)] p-2 shadow-[8px_12px_0_var(--ca-ink)] sm:p-3"
      >
        {children}
      </motion.div>
    </div>
  );
}
