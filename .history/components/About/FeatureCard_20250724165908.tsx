import { motion } from "framer-motion";
import { ReactNode } from "react";

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  iconBg: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className="bg-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border h-80 flex flex-col"
    >
      <div
        className={`${feature.iconBg} p-3 rounded-full w-fit text-white shadow-md`}
      >
        <div className="w-5 h-5">{feature.icon}</div>
      </div>

      <div className="flex-1 mt-4">
        <h3 className="text-lg font-semibold text-card-foreground mb-2">
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
