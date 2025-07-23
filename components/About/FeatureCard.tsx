import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({
  icon: Icon,
  iconColor,
  title,
  description,
  index,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex-shrink-0 w-80 bg-card rounded-lg p-6 shadow-lg border border-border"
    >
      <div
        className={`w-12 h-12 rounded-full ${iconColor} flex items-center justify-center mb-4`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
