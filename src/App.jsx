import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Playground from './pages/Playground';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import ClickSpark from './components/bits/ClickSpark';
import { SmoothScroll, ScrollProgress, scrollToTop } from './components/scroll';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <ClickSpark
      sparkColor={['#ff6a35', '#2b57d6', '#ff4d8d', '#f7c948']}
      shape="star"
      sparkCount={8}
      sparkSize={16}
      sparkRadius={36}
      duration={550}
      className="min-h-screen flex flex-col"
    >
      <SmoothScroll />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col relative">
        {/* Fractal Paper Noise Texture Overlay */}
        <div aria-hidden="true" className="ca-grain pointer-events-none fixed inset-0 z-[1] mix-blend-multiply" />

        {/* Global Header */}
        <Header />

        {/* Scroll restoration on route change */}
        <ScrollToTop />

        {/* Viewport Routes with Animated Page Transition */}
        <div className="flex-1 flex flex-col relative z-10 overflow-x-clip">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col"
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
                <Route path="/playground" element={<Playground />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </ClickSpark>
  );
}
