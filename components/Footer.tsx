"use client";

import Image from "next/image";

export default function Footer() {
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
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant pt-24 pb-12">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12 text-left">
          {/* Left Column: Branding & Socials */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col items-start gap-6">
            <a className="block" href="#" onClick={handleNavClick}>
              <Image
                alt="MIREVA"
                className="h-28 md:h-36 w-auto object-left object-contain"
                src="/logo.png"
                width={300}
                height={140}
              />
            </a>
            <p className="text-on-surface-variant font-body-md text-sm leading-relaxed max-w-xs">
              Creating Timeless Memories Through Photography & Cinematic Storytelling.
            </p>
            <div className="flex gap-4 items-center">
              <a
                className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm"
                href="https://www.instagram.com/mireva_lens?igsh=NzZjaXZobTJnd203"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <span className="text-outline-variant">|</span>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm"
                href="https://www.facebook.com/share/1ERfgdR2y2/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Second Column: EXPLORE */}
          <div className="md:col-span-2 lg:col-span-2 space-y-6">
            <h4 className="text-on-surface font-label-sm uppercase tracking-[0.2em] opacity-60">
              EXPLORE
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body"
                  href="#experience"
                  onClick={handleNavClick}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body"
                  href="#services"
                  onClick={handleNavClick}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body"
                  href="#portfolio"
                  onClick={handleNavClick}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body"
                  href="#reviews"
                  onClick={handleNavClick}
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body"
                  href="#contact"
                  onClick={handleNavClick}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column: SERVICES */}
          <div className="md:col-span-6 lg:col-span-4 space-y-6">
            <h4 className="text-on-surface font-label-sm uppercase tracking-[0.2em] opacity-60">
              SERVICES
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#services" onClick={handleNavClick}>
                  Wedding Photography
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#services" onClick={handleNavClick}>
                  Graduation Photography
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#services" onClick={handleNavClick}>
                  Family & Special Events
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#services" onClick={handleNavClick}>
                  Unscripted Moments
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#services" onClick={handleNavClick}>
                  Brand & Business
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#services" onClick={handleNavClick}>
                  Corporate Photography
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#services" onClick={handleNavClick}>
                  Architectural
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#services" onClick={handleNavClick}>
                  Fashion & Model
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#services" onClick={handleNavClick}>
                  Pet Photography
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#services" onClick={handleNavClick}>
                  Cinematic Videography & Drone Coverage
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: CONTACT */}
          <div className="md:col-span-12 lg:col-span-3 space-y-8 mt-8 lg:mt-0">
            <div>
              <h4 className="text-on-surface font-label-sm uppercase tracking-[0.2em] opacity-60 mb-4">
                CALL / WHATSAPP
              </h4>
              <p className="text-on-surface font-display-lg text-headline-sm text-2xl">
                +94 70 232 5656
              </p>
            </div>
            <div>
              <h4 className="text-on-surface font-label-sm uppercase tracking-[0.2em] opacity-60 mb-4">
                EMAIL
              </h4>
              <p className="text-on-surface-variant font-body-md">
                contact.mireva.lk@gmail.com
              </p>
            </div>
            <a 
              href="#contact"
              onClick={handleNavClick}
              className="inline-block text-center bg-secondary text-on-secondary px-8 py-3 rounded-full font-body-md font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Book Your Event
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6 text-on-surface-variant font-body-md text-xs opacity-60">
          <p>Â© 2026 Mireva Studio. All rights reserved.</p>
          <p>Based in Colombo, Sri Lanka Â· Available worldwide</p>
        </div>
      </div>
    </footer>
  );
}
