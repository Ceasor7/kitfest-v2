"use client";

import { motion } from "framer-motion";
import React from "react";

interface ExperienceCardProps {
  title: string;
  description: string;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      className="bg-gray-200 rounded-lg p-14 shadow-md"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.15,
      }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};
