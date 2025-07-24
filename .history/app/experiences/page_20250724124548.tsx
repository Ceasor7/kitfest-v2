"use client";
import React from "react";
import { motion } from "framer-motion";
import DividerImage from "@/components/Homepage/DividerImage";
import { ExperienceComponent } from "@/components/Experiences/ExperienceComponent";

const page = () => {
  return (
    <div>
      <div className="bg-[#FFD0A0]/30">
        <div className=" max-w-6xl mx-auto items-center justify-center px-4 md:px-16 py-9 md:py-16">
          <div className=" flex flex-col md:flex-row gap-7">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl leading-relaxed font-['Bona_Nova'] italic text-center mb-12 text-[#860000]"
              >
                Get Involved <br /> with KITFest
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
      <section>
        <DividerImage src="/images/border-pattern.svg" alt="Festival scene" />
      </section>
      <section>
        <ExperienceComponent />
      </section>
    </div>
  );
};

export default page;
