"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const TrainingHero = () => {
  return (
    <div className="bg-[#FFD0A0]/30">
      <div className=" max-w-6xl mx-auto px-4 md:px-16 py-9 md:py-16">
        <div className=" flex flex-col md:flex-row gap-7">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl leading-relaxed font-['Bona_Nova'] italic text-center text-[#860000]"
            >
              KITFest Training Opportunities
            </motion.h2>
          </div>
          <div className=" max-w-[600px]">
            <p className="text-lg">
              Get Involved with KITFest – Are an artist, volunteer, trainee,
              vendor, partner, or audience member, there’s a place for you at
              the festival. Explore how you can participate and be part of the
              celebration of theatre and culture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingHero;
