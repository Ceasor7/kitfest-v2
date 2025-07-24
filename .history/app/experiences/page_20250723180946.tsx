"use client";
import React from "react";
import { motion } from "framer-motion";
import DividerImage from "@/components/Homepage/DividerImage";
import { ExperienceComponent } from "@/components/Experiences/ExperienceComponent";

const page = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto py-16 px-4 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-5 items-center text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get Involved with KITFest
          </h2>
          <p className="text-lg text-gray-700">
            Get Involved with KITFest – Are an artist, volunteer, trainee,
            vendor, partner, or audience member, there’s a place for you at the
            festival. Explore how you can participate and be part of the
            celebration of theatre and culture.
          </p>
        </motion.div>
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
