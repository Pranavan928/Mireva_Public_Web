"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background"
      id="contact"
    >
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 1, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-primary font-body-md text-xs uppercase tracking-[0.2em] font-bold mb-6">
            Contact
          </span>
          <h2 className="font-display-lg text-6xl md:text-7xl text-on-surface mb-8 leading-tight">
            Ready to <br />
            Capture?
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-12 max-w-md leading-relaxed text-lg">
            Our calendar is carefully curated to ensure each project receives our
            absolute focus. Inquire below to begin the consultation process.
          </p>

          <div className="space-y-8 mb-16">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </div>
              <div>
                <p className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Phone</p>
                <p className="text-on-surface font-bold text-lg">+94 70 232 5656</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </div>
              <div>
                <p className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Email</p>
                <p className="text-on-surface font-bold text-lg">contact.mireva.lk@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a href="https://www.instagram.com/mireva_lens?igsh=NzZjaXZobTJnd203" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors text-sm font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              Instagram
            </a>
            <a href="https://www.facebook.com/share/1ERfgdR2y2/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors text-sm font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              Facebook
            </a>
          </div>
        </motion.div>

        {/* Right Side - Card */}
        <motion.div
          className="bg-surface-container-low p-10 md:p-14 rounded-[2rem] border border-outline-variant/30 flex flex-col justify-center relative overflow-hidden"
          initial={{ opacity: 1, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="font-display-lg text-4xl text-on-surface mb-6">
            Let&apos;s start a conversation.
          </h3>
          <p className="text-on-surface-variant mb-12 leading-relaxed">
            We respond to all inquiries within 24 hours. Tell us about your day and
            we&apos;ll take it from there.
          </p>

          <div className="flex flex-col gap-4 mb-12 relative z-10">
            {/* Glow behind WhatsApp button */}
            <div className="absolute inset-x-0 top-0 h-14 bg-primary/40 blur-2xl rounded-full -z-10 translate-y-1"></div>

            <a
              href="https://wa.me/94702325656"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary text-background font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              WhatsApp Now
            </a>

            <a
              href="tel:+94702325656"
              className="w-full bg-transparent border border-outline-variant text-on-surface font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors hover:bg-surface-container-highest"
            >
              Call Now
            </a>
          </div>

          <div className="text-center text-on-surface-variant/50 text-[10px] uppercase tracking-widest leading-relaxed">
            <p>Wellawatta, Colombo 6, Sri Lanka</p>
            <p>Available for destination weddings, events, and selected photography assignments.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
