"use client";

import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";

const StarRating = ({ rating, size = "w-3 h-3", minWidth = "12px" }: { rating: number, size?: string, minWidth?: string }) => {
  return (
    <div className="flex gap-1 text-primary">
      {[...Array(5)].map((_, i) => {
        const fillPercentage = Math.max(0, Math.min(100, (rating - i) * 100));
        return (
          <div key={i} className={`relative ${size}`}>
            <Star className={`absolute top-0 left-0 ${size} text-primary/30`} />
            <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className={`${size} fill-current text-primary`} style={{ minWidth, width: minWidth }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 1, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const testimonials = [
  {
    text: '"Mireva captured our resort beautifully with stunning attention to detail. Their creativity and professionalism truly brought our spaces and experiences to life."',
    initials: "MG",
    name: "MGM Daisy Resorts",
    location: "Nuwara-Eliya, Sri Lanka",
    rating: "5.0",
    stars: 5,
  },
  {
    text: '"The wedding film left us speechless. They told our story with so much heart. Our family in Canada couldn\'t stop watching it â€” absolutely cinematic."',
    initials: "AS",
    name: "Anitha & Suresh",
    location: "CA CANADA",
    rating: "4.7",
    stars: 4,
  },
  {
    text: '"Our son’s first birthday was a milestone we will cherish forever. Mireva beautifully captured every smile, emotion, and little detail, turning our special day into timeless memories filled with love and happiness."',
    initials: "NR",
    name: "Nirosha & Rajan",
    location: "AU AUSTRALIA",
    rating: "5.0",
    stars: 5,
  },
  {
    text: '"Our pet is family, and Mireva captured that bond perfectly. Every image tells a story filled with love, happiness, and unforgettable moments."',
    initials: "TM",
    name: "Tharsika & Mathavan",
    location: "DE GERMANY",
    rating: "4.5",
    stars: 4,
  },
  {
    text: '"Mireva beautifully captured the charm and experience of Tezlaa. Every image reflects our vision, attention to detail, and the unforgettable moments we create for our guests."',
    initials: "TE",
    name: "Tezlaa",
    location: "Tezlaa Malabe, SRI LANKA",
    rating: "4.9",
    stars: 4,
  },
  {
    text: '"We are absolutely delighted with the results. The attention to light, emotion, and every little detail was truly exceptional. Our album beautifully preserves our most precious memories, and we will cherish it for generations to come."',
    initials: "TK",
    name: "Thadsha & Kabilan",
    location: "GB UNITED KINGDOM",
    rating: "4.6",
    stars: 4,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-background">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-display-lg text-headline-lg text-on-surface mb-4">
            Kind Words From Our Clients
          </h2>
          <div className="flex items-center justify-center gap-2">
            <StarRating rating={4.8} size="w-4 h-4" minWidth="16px" />
            <span className="text-on-surface font-bold">4.8</span>
            <span className="text-on-surface-variant/60 text-xs uppercase tracking-widest">
              Based on client reviews
            </span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-surface-container-low p-5 rounded-lg border border-outline-variant/30 flex flex-col justify-between h-full"
              variants={item}
            >
              <div>
                <div className="flex items-center mb-4">
                  <StarRating rating={parseFloat(testimonial.rating)} size="w-3 h-3" minWidth="12px" />
                  <span className="text-on-surface-variant/60 text-xs ml-2 mt-[2px]">
                    {testimonial.rating}
                  </span>
                </div>
                <p className="font-display-md text-sm text-on-surface italic mb-4 leading-normal">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-xs font-bold text-primary">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-on-surface font-bold text-sm uppercase tracking-wider">
                    {testimonial.name}
                  </p>
                  <p className="text-on-surface-variant/60 text-xs uppercase">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
