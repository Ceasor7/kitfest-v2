"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import {
  LucideIcon,
  Music,
  Star,
  CalendarHeart,
  ArrowRight,
} from "lucide-react";

interface FestivalOverviewCardProps {
  iconName: "music" | "star" | "calendar-heart"; // add all icon names here
  iconBgColor: string;
  cardBgColor?: string;
  title: string;
  description: string;
}

const iconMap: Record<FestivalOverviewCardProps["iconName"], LucideIcon> = {
  music: Music,
  star: Star,
  "calendar-heart": CalendarHeart,
};

const FestivalOverviewCard: FC<FestivalOverviewCardProps> = ({
  iconName,
  iconBgColor,
  cardBgColor = "bg-white",
  title,
  description,
}) => {
  const Icon = iconMap[iconName];

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-2xl shadow-md p-6 relative transition-colors duration-300 ${cardBgColor}`}
    >
      {/* Icon */}
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBgColor}`}
      >
        <Icon className="text-white w-5 h-5" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-center mt-4">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 text-center mt-2">{description}</p>

      {/* Arrow */}
      <ArrowRight
        className="w-5 h-5 text-gray-400 absolute bottom-4 right-4"
        aria-hidden="true"
      />
    </motion.div>
  );
};

export default FestivalOverviewCard;
