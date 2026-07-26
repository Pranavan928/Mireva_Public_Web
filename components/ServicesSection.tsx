"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Wedding Photography",
    description: "Capturing timeless love stories, one beautiful moment at a time.",
    image: "/assets/wedding_event.jpg",
  },
  {
    title: "Graduation Photography",
    description: "Celebrating milestones with memories that last forever.",
    image: "/assets/graduation.JPG",
  },
  {
    title: "Family & Special Events",
    description: "Preserving the joy of life's most cherished celebrations.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Unscripted Moments",
    description: "Authentic emotions captured naturally, just as they happen.",
    image: "/assets/girl_smoke.JPG",
  },
  {
    title: "Brand & Business Photography",
    description: "Professional visuals that elevate your brand identity.",
    image: "/assets/brand.jpg",
  },
  {
    title: "Corporate Photography",
    description: "Creating impactful imagery for modern businesses and professionals.",
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Architectural Photography",
    description: "Showcasing spaces through precision, perspective, and design.",
    image: "/assets/archi.JPG",
    bgClass: "bg-contain bg-no-repeat bg-center",
  },
  {
    title: "Fashion & Model Photography",
    description: "Bringing creativity, confidence, and style into every frame.",
    image: "/assets/fashion_model.JPG",
  },
  {
    title: "Pet Photography",
    description: "Capturing the personality and unconditional love of your companions.",
    image: "/assets/dog_bubble.JPG",
  },
  {
    title: "Cinematic Videography & Drone Coverage",
    description: "Crafting breathtaking stories from the ground and the sky.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
  }
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Start in the middle

  const handleNext = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <section id="services" className="flex flex-col justify-center py-16 md:py-24 overflow-hidden relative bg-surface-container-low">
      <div className="max-w-[1400px] mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-display-lg text-headline-lg text-on-surface mb-4">
            Curated Mediums
          </h2>
          <div className="w-20 h-px bg-secondary mx-auto"></div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative flex-1 w-full min-h-[480px] max-h-[600px] flex items-center justify-center">
          {services.map((service, index) => {
            // Calculate relative distance wrapping around
            let diff = index - activeIndex;
            if (diff > Math.floor(services.length / 2)) diff -= services.length;
            if (diff < -Math.floor(services.length / 2)) diff += services.length;

            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;

            let x = "0%";
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;
            let pointerEvents: "auto" | "none" = "auto";

            if (isCenter) {
              x = "0%";
              scale = 1;
              opacity = 1;
              zIndex = 20;
            } else if (isLeft) {
              x = "-105%";
              scale = 0.85;
              opacity = 0.4;
              zIndex = 10;
            } else if (isRight) {
              x = "105%";
              scale = 0.85;
              opacity = 0.4;
              zIndex = 10;
            } else {
              x = diff < 0 ? "-200%" : "200%";
              scale = 0.7;
              opacity = 0;
              zIndex = 0;
              pointerEvents = "none";
            }

            // On mobile, keep side items hidden or slightly peeking
            const mobileX = isCenter ? "0%" : isLeft ? "-90%" : isRight ? "90%" : x;
            const finalX = typeof window !== 'undefined' && window.innerWidth < 768 ? mobileX : x;

            // Fix SSR hydration mismatch on x calculation by relying on CSS media queries or simple percentage based layouts
            // We use simple % to let browser do the work.

            return (
              <motion.div
                key={index}
                className="absolute w-[80%] max-w-[280px] cursor-pointer group"
                initial={false}
                animate={{ x: isCenter ? "0%" : isLeft ? "-105%" : isRight ? "105%" : diff < 0 ? "-200%" : "200%", scale, opacity, zIndex }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                style={{ pointerEvents }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-4 hairline-border">
                  <div
                    className={`w-full h-full ${service.bgClass || 'bg-cover bg-center'} transition-transform duration-700 group-hover:scale-105`}
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className={`absolute inset-0 transition-colors duration-500 ${isCenter ? 'bg-background/20 group-hover:bg-background/10' : 'bg-background/60'}`}></div>
                </div>
                <div className={`text-center transition-opacity duration-500 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 className="font-display-lg text-headline-md text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-on-surface-variant font-body-md">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-8 mt-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-outline/30 text-on-surface hover:bg-surface-container-highest hover:border-outline transition-all active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-outline/30 text-on-surface hover:bg-surface-container-highest hover:border-outline transition-all active:scale-95"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
