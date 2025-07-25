"use client";
import { motion, type Variants } from "framer-motion";
import { Briefcase } from "lucide-react";

const JobOpenings = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex items-center justify-center p-4 pt-24 pb-40">
      <motion.div
        className="text-center max-w-md mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex justify-center mb-6"
          variants={iconVariants}
          animate="animate"
        >
          <div className="p-4 rounded-full bg-gray-200">
            <Briefcase className="w-12 h-12 text-[#FF6F00]" />
          </div>
        </motion.div>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
          variants={itemVariants}
        >
          No Current Openings
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-muted-foreground leading-relaxed"
          variants={itemVariants}
        >
          At the moment, we do not have any job openings. Please check back
          later for new opportunities.
        </motion.p>

        <motion.div
          className="mt-8 p-4 rounded-2xl bg-card border border-gray-300"
          variants={itemVariants}
        >
          <p className="text-sm text-muted-foreground">
            💡 Want to stay updated? Follow us on social media for future job
            announcements!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JobOpenings;
