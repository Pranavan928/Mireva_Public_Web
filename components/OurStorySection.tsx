"use client";

import { motion } from "framer-motion";

export default function OurStorySection() {
  return (
    <section
      className="flex flex-col justify-center py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      id="experience"
    >
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 1, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-secondary font-body-md text-label-sm uppercase tracking-[0.3em]">
            Our Philosophy
          </span>
          <h2 className="font-display-lg text-headline-lg text-on-surface leading-tight">
            The Art of Timeless Storytelling
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            MIREVA is a luxury photography studio inspired by the
            hidden beauty of the Hill Country mist. With a passion for storytelling,
            we capture authentic emotions and unforgettable moments through creativity,
            artistry, and precision. From weddings and pre-shoots to events and special
            occasions, we create timeless visual stories that preserve memories for generations.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-2">
            <div>
              <h3 className="text-primary font-display-md text-2xl mb-1">60+</h3>
              <h4 className="text-on-surface text-sm uppercase tracking-widest font-bold mb-2">Events Cpatured</h4>
            </div>
            <div>
              <h3 className="text-primary font-display-md text-2xl mb-1">5+</h3>
              <h4 className="text-on-surface text-sm uppercase tracking-widest font-bold mb-2">Years of Experience</h4>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative w-full max-w-[360px] mx-auto aspect-[4/5] hairline-border overflow-hidden group"
          initial={{ opacity: 1, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: "url('/assets/philosophy_photo.jpg')",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
