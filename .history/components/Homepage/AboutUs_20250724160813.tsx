"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
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
      className="relative py-20 w-full overflow-hidden"
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
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl mt-4 font-medium text-white/90"
        >
          About Us
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          This is the Kenya
          <br />
          <span>International Theatre Festival</span>
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl mt-4 max-w-4xl"
        >
          At KITFest, we not only celebrate theatre but experience the culture,
          connect with people and indulge in adventure!
        </motion.h3>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 flex gap-4 flex-wrap justify-center"
        >
          <Link
            href="#learn-more"
            className=" py-3 rounded-3xl px-20 bg-[#FF6F00] text-black font-semibold hover:bg-[#FF6F00]/80 transition"
          >
            Participate
          </Link>
          <Link
            href="#tickets"
            className=" py-3 rounded-3xl px-16 bg-white text-black font-semibold hover:bg-gray-100 transition"
          >
            View Experiences
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
