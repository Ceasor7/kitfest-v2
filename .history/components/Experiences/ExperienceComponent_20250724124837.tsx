"use client";

import { motion, Variants, TargetAndTransition } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";

const experiences = [
  {
    title: "Theme Nights",
    description:
      "All participating countries get a dedicated evening to showcase their culture...",
  },
  {
    title: "Music Experiences",
    description:
      "Each evening after the conclusion of theatrical performances and theme nights...",
  },
  {
    title: "Tourism",
    description:
      "Tourism has been a core inclusion into the KITFest programme since inception...",
  },
  {
    title: "Cabaret",
    description:
      "At KITFest, we appreciate that artistic expression involves certain experiences...",
  },
  {
    title: "Market Visits",
    description:
      "Souvenir shopping is one of the key highlights for the guests...",
  },
  {
    title: "Community Living",
    description:
      "KITFest promotes sharing and interaction between the guests...",
  },
];

// Properly typed using TargetResolver
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const ExperienceComponent = () => {
  return (
    <div className="max-w-6xl mx-auto py-28 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ExperienceCard
              title={exp.title}
              description={exp.description}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
