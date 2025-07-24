"use client";

import React from "react";
import { motion } from "framer-motion";
import DividerImage from "@/components/Homepage/DividerImage";
import { ExperienceComponent } from "@/components/Experiences/ExperienceComponent";

const page = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="bg-[#FFD0A0]/30">
        <div className="max-w-6xl mx-auto px-4 md:px-16 py-16">
          <div className="flex flex-col items-center text-center gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl leading-relaxed font-['Bona_Nova'] italic text-[#860000]"
            >
              Get Involved <br /> with KITFest
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg max-w-2xl text-gray-800"
            >
              Get Involved with KITFest – Are you an artist, volunteer, trainee,
              vendor, partner, or audience member? There’s a place for you at
              the festival. Explore how you can participate and be part of the
              celebration of theatre and culture.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <section>
        <DividerImage src="/images/border-pattern.svg" alt="Festival scene" />
      </section>

      {/* Experiences */}
      <section>
        <ExperienceComponent />
      </section>
    </div>
  );
};

export default page;
