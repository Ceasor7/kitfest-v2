"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import Image from "next/image"; // ✅ Import Next.js Image
import heroImage from "../../public/images/kitfest-poster-2025.png"; // ✅ Make sure the path is correct

const LandingPage = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center bg-[#FCF9EF] justify-center px-4 pt-32 md:p-8">
      <motion.div
        className="w-full max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className=" grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            variants={leftVariants}
          >
            <motion.div variants={childVariants} className="space-y-3">
              <h1 className="text-4xl lg:text-5xl font-bold leading-relaxed font-['Bona_Nova'] italic">
                <span className=" text-[#860000]">Kenya International</span>
                <br />
                <span className=" text-[#860000]">Theatre Festival 2025</span>
              </h1>

              <p className=" text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The countdown begins for Kenya's premier theatre festival! This
                milestone 10th edition promises an unforgettable celebration of
                creativity, running from November 4ᵗʰ to 16ᵗʰ, 2025, and
                welcomes both local and international performers to showcase
                their talent.
              </p>
            </motion.div>

            <motion.div variants={childVariants}>
              <Button
                size="lg"
                className="group relative overflow-hidden border rounded-3xl px-14"
              >
                <span className="relative z-10">View More</span>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            <motion.div variants={childVariants}>
              <CountdownTimer targetDate="2025-11-03T23:59:59" />
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="relative order-1 lg:order-2"
            variants={rightVariants}
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* ✅ Use Next.js Image */}
              <motion.div
                className="relative w-full h-auto rounded-2xl shadow-elegant group-hover:shadow-glow transition-all duration-500 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={heroImage}
                  alt="Coming Soon"
                  className="w-full h-auto object-contain rounded-2xl"
                  placeholder="blur"
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 bg-gradient-hero opacity-10 rounded-2xl"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
