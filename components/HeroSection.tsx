"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/hero_background.jpg')",
            y: backgroundY,
            scale: 1.05,
          }}
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      <div className="relative z-10 text-center px-margin-mobile max-w-5xl">
        <motion.h1
          className="font-display-lg text-display-lg text-primary mb-6"
          initial={{ opacity: 1, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Capturing the unseen beauty in every moment
        </motion.h1>
        <motion.p
          className="font-body-lg text-body-lg text-on-surface-variant mb-12 tracking-wide max-w-2xl mx-auto"
          initial={{ opacity: 1, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          Capturing the profound essence of human connection through a lens of dark
          minimalism and architectural precision.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6"
          initial={{ opacity: 1, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <button 
            onClick={(e) => scrollToSection(e, "#portfolio")}
            className="w-full md:w-auto bg-primary-container text-on-primary px-12 py-4 font-body-md font-bold uppercase tracking-widest active:scale-95 hover:bg-primary hover:text-surface transition-all"
          >
            View Portfolio
          </button>
          <button 
            onClick={(e) => scrollToSection(e, "#contact")}
            className="w-full md:w-auto border border-outline text-on-surface px-12 py-4 font-body-md font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-all"
          >
            Book Experience
          </button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
      </motion.div>
    </section>
  );
}
