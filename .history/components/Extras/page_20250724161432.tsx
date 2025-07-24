"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaMusic, FaTheaterMasks, FaPaintBrush, FaDrum } from "react-icons/fa";
import { Button } from "@/components/ui/button"; // Optional custom button

const features = [
  {
    icon: <FaMusic className="text-white" />,
    title: "Live Music",
    description:
      "Experience diverse performances from regional and international artists.",
    bg: "bg-red-500",
  },
  {
    icon: <FaTheaterMasks className="text-white" />,
    title: "Theatre",
    description:
      "Drama and performances from emerging and established talents.",
    bg: "bg-green-500",
  },
  {
    icon: <FaPaintBrush className="text-white" />,
    title: "Art Exhibitions",
    description: "Explore exhibitions from visual artists and creatives.",
    bg: "bg-blue-500",
  },
  {
    icon: <FaDrum className="text-white" />,
    title: "Cultural Dances",
    description: "Celebrate rich traditional dances from various communities.",
    bg: "bg-purple-500",
  },
];

const AboutKitfest = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full">
      {/* Top Section */}
      <div className="relative bg-yellow-100">
        <div className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-[500px]">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl max-w-[500px] leading-relaxed font-['Bona_Nova'] italic mb-4 text-[#860000]"
            >
              About Kitfest
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              KITFest is an immersive and enlightening theatrical experience,
              where diverse performances and educational opportunities come
              together to inspire and connect artists and audiences from around
              the world, as well as enjoy the magical Kenya through tourism and
              cultural experiences.
            </motion.p>
          </div>

          {/* Embedded YouTube Video */}
          <div className="relative z-10 -mb-32 md:-mb-36">
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/I8Q0wGnZXFY?si=XnAmT8yS-neYVZzz"
                title="Kitfest Video"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* White background that starts behind the video */}
      <div className="bg-white pt-40">
        {/* Features Heading */}
        <motion.h3
          className="text-3xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Features of the Festival
        </motion.h3>

        {/* Scrollable Feature Cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 px-4 pb-6 scroll-smooth"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[250px] bg-gray-100 p-4 rounded-xl shadow-md flex-shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${feature.bg} mb-3`}
                >
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <Button onClick={() => scroll("left")} variant="outline">
              Previous
            </Button>
            <Button onClick={() => scroll("right")} variant="outline">
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKitfest;
