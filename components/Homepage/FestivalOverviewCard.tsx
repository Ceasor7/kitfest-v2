"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import {
  LucideIcon,
  ArrowRight,
  UserCheck,
  Snowflake,
  History,
  UsersRound,
  Handshake,
  Component,
} from "lucide-react";

interface FestivalOverviewCardProps {
  iconName:
    | "UserCheck"
    | "SnowFlake"
    | "History"
    | "UsersRound"
    | "Handshake"
    | "Component";
  iconBgColor: string;
  cardBgColor?: string;
  title: string;
  description: string;
}

const iconMap: Record<FestivalOverviewCardProps["iconName"], LucideIcon> = {
  UserCheck: UserCheck,
  SnowFlake: Snowflake,
  History: History,
  UsersRound: UsersRound,
  Handshake: Handshake,
  Component: Component,
};

const FestivalOverviewCard: FC<FestivalOverviewCardProps> = ({
  iconName,
  iconBgColor,
  cardBgColor = "bg-gray-100",
  title,
  description,
}) => {
  const Icon = iconMap[iconName];

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-2xl shadow-md p-10 relative transition-colors duration-300 ${cardBgColor}`}
    >
      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center ${iconBgColor}`}
      >
        <Icon className="text-white w-6 h-6" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-center mt-8">{title}</h3>

      {/* Description */}
      <p className="text-sm text-center mt-2 mb-12">{description}</p>

      {/* Arrow */}
      <div className="w-10 h-10 p-2 rounded-2xl bg-[#080F1A] absolute bottom-2 right-4 flex items-center justify-center">
        <ArrowRight
          className="w-4 h-4 text-white border rounded-full"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
};

export default FestivalOverviewCard;
