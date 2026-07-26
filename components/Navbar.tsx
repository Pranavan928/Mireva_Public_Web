"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 border-b border-outline-variant glass-nav transition-all duration-500 ${
        scrolled ? "py-2 h-[64px]" : "py-0 h-[80px]"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="flex items-center">
          <a className="flex items-center" href="#" onClick={handleNavClick}>
            <Image
              alt="MIREVA"
              className="h-14 md:h-16 w-auto object-contain scale-110 origin-left"
              src="/logo.png"
              width={200}
              height={64}
              priority
            />
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-secondary p-2 active:scale-95 transition-transform"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <nav className="flex items-center gap-6 lg:gap-10">
            <a
              className="text-on-surface-variant uppercase tracking-widest font-body-md text-[13px] hover:text-primary transition-colors duration-300 whitespace-nowrap"
              href="#experience"
              onClick={handleNavClick}
            >
              About
            </a>
            <a
              className="text-on-surface-variant uppercase tracking-widest font-body-md text-[13px] hover:text-primary transition-colors duration-300 whitespace-nowrap"
              href="#services"
              onClick={handleNavClick}
            >
              Services
            </a>
            <a
              className="text-on-surface-variant uppercase tracking-widest font-body-md text-[13px] hover:text-primary transition-colors duration-300 whitespace-nowrap"
              href="#portfolio"
              onClick={handleNavClick}
            >
              Portfolio
            </a>
            <a
              className="text-on-surface-variant uppercase tracking-widest font-body-md text-[13px] hover:text-primary transition-colors duration-300 whitespace-nowrap"
              href="#reviews"
              onClick={handleNavClick}
            >
              Reviews
            </a>
            <a
              className="text-on-surface-variant uppercase tracking-widest font-body-md text-[13px] hover:text-primary transition-colors duration-300 whitespace-nowrap"
              href="#contact"
              onClick={handleNavClick}
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center">
            <a
              href="#contact"
              onClick={handleNavClick}
              className="inline-flex items-center justify-center px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors uppercase tracking-widest font-body-md text-xs font-bold whitespace-nowrap"
            >
              Book Your Event
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-surface-container-low/95 backdrop-blur-md border-b border-outline-variant shadow-lg md:hidden"
          >
            <nav className="flex flex-col items-center py-8 gap-6">
              <a href="#experience" className="text-on-surface hover:text-primary uppercase tracking-widest text-sm font-bold" onClick={(e) => { handleNavClick(e); setMobileMenuOpen(false); }}>About</a>
              <a href="#services" className="text-on-surface hover:text-primary uppercase tracking-widest text-sm font-bold" onClick={(e) => { handleNavClick(e); setMobileMenuOpen(false); }}>Services</a>
              <a href="#portfolio" className="text-on-surface hover:text-primary uppercase tracking-widest text-sm font-bold" onClick={(e) => { handleNavClick(e); setMobileMenuOpen(false); }}>Portfolio</a>
              <a href="#reviews" className="text-on-surface hover:text-primary uppercase tracking-widest text-sm font-bold" onClick={(e) => { handleNavClick(e); setMobileMenuOpen(false); }}>Reviews</a>
              <a href="#contact" className="text-on-surface hover:text-primary uppercase tracking-widest text-sm font-bold" onClick={(e) => { handleNavClick(e); setMobileMenuOpen(false); }}>Contact</a>
              <a href="#contact" className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors uppercase tracking-widest text-xs font-bold mt-4" onClick={(e) => { handleNavClick(e); setMobileMenuOpen(false); }}>Book Your Event</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
