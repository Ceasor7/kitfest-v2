"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ParticipateHero = () => {
  return (
    <div>
      <div className="bg-[#FFD0A0]/30">
        <div className="max-w-6xl mx-auto pt-28 px-4 pb-7 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="max-w-[500px]">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl max-w-[500px] leading-relaxed font-['Bona_Nova'] italic mb-4 text-[#860000]"
              >
                Get Involved with KITFest
              </motion.h2>

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                Get Involved with KITFest – Are an artist, volunteer, trainee,
                vendor, partner, or audience member, there’s a place for you at
                the festival. Explore how you can participate and be part of the
                celebration of theatre and culture.
              </motion.p>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/participate-image.png"
                alt="Participate"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipateHero;
