"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  "Work with a leading arts organization shaping Kenya’s theatre landscape.",
  "Engage with international artists and stakeholders.",
  "Contribute to impactful exchange programs",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
    y: 10,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const CareersHero = () => {
  return (
    <div className="bg-[#FFD0A0]/30">
      <div className=" max-w-6xl mx-auto px-4 md:px-16 py-9 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-7 lg:gap-20 w-full">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl leading-relaxed font-['Bona_Nova'] italic mb-12 text-[#860000]"
            >
              Why Join Us ?
            </motion.h2>
          </div>
          <div className="max-w-[600px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="space-y-4"
            >
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-4 group"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-[#FF6F00] text-white rounded-full font-semibold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-lg md:text-xl group-hover:translate-x-1 transition-transform duration-200">
                    {reason}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersHero;
