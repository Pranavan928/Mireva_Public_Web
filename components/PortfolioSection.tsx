"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

export default function PortfolioSection() {
  return (
    <section
      className="bg-surface-container-lowest min-h-[100svh] flex flex-col justify-center py-12 w-full"
      id="portfolio"
    >
      <div className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.div
          className="flex justify-between items-end mb-12"
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <span className="text-secondary font-body-md text-label-sm uppercase tracking-widest">
              Gallery
            </span>
            <h2 className="font-display-lg text-headline-lg text-on-surface">
              Recent Works
            </h2>
          </div>
          <a
            className="hidden md:block text-on-surface-variant hover:text-primary transition-all uppercase tracking-widest text-label-sm border-b border-outline pb-1"
            href="https://www.instagram.com/mireva_lens?igsh=NzZjaXZobTJnd203"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Collections
          </a>
        </motion.div>

        <motion.div
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 hide-scrollbar w-full h-[50vh] md:h-[70vh] min-h-[400px]"
          initial={{ opacity: 1, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Group 1: Large Block (port_7) */}
          <div className="flex-none w-[80vw] md:w-[600px] h-full snap-center relative overflow-hidden group hairline-border">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: "url('/assets/port_8.jpeg')" }}
            />
          </div>

          {/* Group 2: Stacked Column (port_8 & port_9) */}
          <div className="flex-none w-[60vw] md:w-[400px] h-full snap-center flex flex-col gap-4">
            <div className="w-full h-[calc(50%-0.5rem)] relative overflow-hidden group hairline-border">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                // style={{ backgroundImage: "url('/assets/port_5.JPG')" }}
                style={{ backgroundImage: "url('/assets/port_2.jpg')" }}
              />
            </div>
            <div className="w-full h-[calc(50%-0.5rem)] relative overflow-hidden group hairline-border">
              <div
                className="w-full h-full bg-contain bg-no-repeat bg-center transition-transform duration-1000 group-hover:scale-110"
                // style={{ backgroundImage: "url('/assets/port_9.jpeg')" }}
                style={{ backgroundImage: "url('/assets/port_3.jpg')" }}
              />
            </div>
          </div>

          {/* Group 3: Wide Block (port_4) */}
          <div className="flex-none w-[90vw] md:w-[800px] h-full snap-center relative overflow-hidden group hairline-border">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: "url('/assets/port_4.png')" }}
            />
          </div>

          {/* Group 4: Stacked Column (port_2 & port_3) */}
          <div className="flex-none w-[60vw] md:w-[400px] h-full snap-center flex flex-col gap-4">
            <div className="w-full h-[calc(50%-0.5rem)] relative overflow-hidden group hairline-border">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: "url('/assets/port_2.jpg')" }}
              />
            </div>
            <div className="w-full h-[calc(50%-0.5rem)] relative overflow-hidden group hairline-border">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: "url('/assets/port_10.jpg')" }}
              />
            </div>
          </div>

          {/* Group 5: Large Block (port_9) */}
          <div className="flex-none h-full snap-center relative overflow-hidden group hairline-border">
            <img
              src="/assets/port_9.jpeg"
              alt="Portfolio"
              className="h-full w-auto max-w-none object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>

          {/* Group 6: Wide Block (port_6) */}
          <div className="flex-none h-full snap-center relative overflow-hidden group hairline-border">
            <img
              src="/assets/port_6.JPG"
              alt="Portfolio"
              className="h-full w-auto max-w-none object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
