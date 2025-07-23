"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
      aria-label="About Our Festival"
    >
      {/* Background Image with Parallax Motion */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          y,
          backgroundImage: "url('/images/divider.png')",
        }}
      />

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          About Our Festival
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl mt-4 font-medium text-white/90"
        >
          Celebrating Culture & Creativity
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 max-w-xl text-sm md:text-base text-white/80"
        >
          Join us for a weekend of music, art, and unforgettable moments. Our
          festival brings together creative minds and vibrant cultures from all
          over the world.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 flex gap-4 flex-wrap justify-center"
        >
          <a
            href="#learn-more"
            className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition"
          >
            Learn More
          </a>
          <a
            href="#tickets"
            className="px-6 py-3 rounded-lg bg-pink-600 text-white font-semibold hover:bg-pink-500 transition"
          >
            Get Tickets
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
