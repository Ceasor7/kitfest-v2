"use client";
import { motion } from "framer-motion";

const CareersHero = () => {
  const reasons = [
    "Creative Team",
    "Career Growth",
    "Flexible Hours",
    "Remote Work",
    "Learning Opportunities",
    "Innovation Culture",
    "Work-Life Balance",
    "Competitive Benefits",
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

  return (
    <section className="w-full bg-yellow py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-foreground leading-tight">
              Why Join Us
            </h2>
          </motion.div>

          {/* Right Side - Reasons List */}
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
                <motion.div
                  className="w-2 h-2 bg-yellow-foreground rounded-full flex-shrink-0"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.p className="text-lg md:text-xl font-medium text-yellow-foreground group-hover:translate-x-1 transition-transform duration-200">
                  {reason}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
