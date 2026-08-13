"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-4 md:pt-6 pointer-events-none">
      <motion.header
        layout={!shouldReduceMotion}
        initial={false}
        animate={{
          width: "100%",
          maxWidth: isScrolled ? "768px" : "1024px",
          height: isScrolled ? 48 : 56,
          borderRadius: 9999,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          mass: 0.8
        }}
        className="pointer-events-auto flex flex-col justify-center bg-black/40 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30 overflow-hidden"
      >
        {/* TOP ROW */}
        <motion.div
          layout={!shouldReduceMotion}
          initial={false}
          className="flex items-center justify-between w-full"
          animate={{
            height: isScrolled ? 48 : 56,
            paddingLeft: isScrolled ? 20 : 32,
            paddingRight: isScrolled ? 20 : 32
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <a href="#top" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 bg-white">
              <img src="/logo.png" alt="nicolas.dev" className="w-full h-full object-cover scale-110" />
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] text-muted whitespace-nowrap">
            <a href="#sobre-mi" className="hover:text-text transition-colors">sobre mi</a>
            <a href="#proyectos" className="hover:text-text transition-colors">proyectos</a>
            <a href="#contacto" className="hover:text-text transition-colors">contacto</a>
          </nav>

          <a
            href="#contacto"
            className="hidden md:inline-flex items-center gap-2 bg-accent text-bg hover:bg-accent/90 rounded-full pl-4 pr-3 py-1.5 text-[13px] font-mono font-medium transition-colors group whitespace-nowrap"
          >
            Contactar
            <span className="text-bg/80 group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

          <button
            className="md:hidden text-text flex items-center justify-center p-1.5 transition-colors hover:text-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.svg key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.15 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></motion.svg>
              ) : (
                <motion.svg key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.15 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></motion.svg>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* MOBILE MENU IS NOW DETACHED FROM HEADER */}
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            layout={!shouldReduceMotion}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden pointer-events-auto mt-3 w-full flex flex-col items-stretch px-6 py-4 bg-black/40 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30 rounded-[28px]"
          >
            <a href="#sobre-mi" onClick={() => setIsMenuOpen(false)} className="w-full text-left py-4 text-[14px] text-muted hover:text-text font-mono transition-colors border-b border-white/5">sobre-mi</a>
            <a href="#proyectos" onClick={() => setIsMenuOpen(false)} className="w-full text-left py-4 text-[14px] text-muted hover:text-text font-mono transition-colors border-b border-white/5">proyectos</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="w-full text-left py-4 text-[14px] text-muted hover:text-text font-mono transition-colors border-b border-white/5">contacto</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="mt-6 mb-2 w-full text-center bg-accent text-bg px-6 py-3.5 rounded-2xl font-mono text-[14px] font-medium hover:bg-accent/90 transition-colors">Contactar</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
