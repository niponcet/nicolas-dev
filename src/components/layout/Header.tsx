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
      setIsScrolled(window.scrollY > 20);
    };
    
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
      <motion.header
        layout={!shouldReduceMotion}
        initial={false}
        animate={{
          width: "100%",
          maxWidth: isScrolled ? "768px" : "1024px",
          height: isMenuOpen ? "auto" : (isScrolled ? 48 : 56),
          borderRadius: isMenuOpen ? 28 : 9999, // Perfect pill when closed, rounded rect when open
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          mass: 0.8
        }}
        className="pointer-events-auto flex flex-col bg-black/40 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30 overflow-hidden"
      >
        {/* TOP ROW */}
        <motion.div 
          layout={!shouldReduceMotion}
          className="flex items-center justify-between w-full"
          animate={{
            height: isScrolled ? 48 : 56,
            paddingLeft: isScrolled ? 20 : 32,
            paddingRight: isScrolled ? 20 : 32
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <a href="#top" className="font-display font-semibold text-sm tracking-tight text-text whitespace-nowrap" onClick={() => setIsMenuOpen(false)}>
            nicolas<span className="text-accent">.</span>dev
          </a>
          
          <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] text-muted whitespace-nowrap">
            <a href="#sobre-mi" className="hover:text-text transition-colors">01_sobre-mi</a>
            <a href="#proyectos" className="hover:text-text transition-colors">02_proyectos</a>
            <a href="#contacto" className="hover:text-text transition-colors">03_contacto</a>
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

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              layout={!shouldReduceMotion}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden flex flex-col items-center gap-5 px-6 pb-6 pt-2"
            >
              <a href="#sobre-mi" onClick={() => setIsMenuOpen(false)} className="text-[14px] text-muted hover:text-text font-mono transition-colors">01_sobre-mi</a>
              <a href="#proyectos" onClick={() => setIsMenuOpen(false)} className="text-[14px] text-muted hover:text-text font-mono transition-colors">02_proyectos</a>
              <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-[14px] text-muted hover:text-text font-mono transition-colors">03_contacto</a>
              <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="mt-2 bg-accent text-bg px-6 py-2 rounded-full font-mono text-[14px] font-medium">Contactar</a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
