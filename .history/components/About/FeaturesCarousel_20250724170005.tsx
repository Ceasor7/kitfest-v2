"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FeatureCard, { Feature } from "./FeatureCard";
import { Button } from "../ui/button";
import {
  FiStar,
  FiSettings,
  FiShield,
  FiZap,
  FiHeart,
  FiTrendingUp,
} from "react-icons/fi";

const features: Feature[] = [
  {
    title: "Artistic Showcases",
    description:
      "KITFest was conceived specifically to celebrate theatre and showcase the works of theatre artists from all over the world. It’s an international platform where theatre lovers have the opportunity to attend & watch performances, share artistic excellence, innovation and explore the intersections between various theatrical genres.",
    icon: <FiZap className="w-full h-full" />,
    iconBg: "bg-[#005925]",
  },
  {
    title: "Training & Development",
    description:
      "Training in both artistic and business acumen has been at the core of our activities. Through cross-platform and agency collaboration, we hold workshops in each KITFest venue for the local artists and groups, equipping them with skills for enhancing the value and quality of their talents.",
    icon: <FiShield className="w-full h-full" />,
    iconBg: "bg-[#9f4500]",
  },
  {
    title: "Exchange Programs",
    description:
      "The presence of an active international theatre festival in Kenya means Kenyan thespians will always have access to the global theatre scene for exposure to leading skills and knowledge, new production techniques and opportunities from across the world. KITFest is continuously facilitating exchange programs to ensure local theatre travels for both education and business opportunities.",
    icon: <FiStar className="w-full h-full" />,
    iconBg: "bg-[#7d0000]",
  },
  {
    title: "Training & Development",
    description:
      "Training in both artistic and business acumen has been at the core of our activities. Through cross-platform and agency collaboration, we hold workshops in each KITFest venue for the local artists and groups, equipping them with skills for enhancing the value and quality of their talents.",
    icon: <FiSettings className="w-full h-full" />,
    iconBg: "bg-[#b37334]",
  },
  {
    title: "Exchange Programs",
    description:
      "The presence of an active international theatre festival in Kenya means Kenyan thespians will always have access to the global theatre scene for exposure to leading skills and knowledge, new production techniques and opportunities from across the world. KITFest is continuously facilitating exchange programs to ensure local theatre travels for both education and business opportunities.",
    icon: <FiHeart className="w-full h-full" />,
    iconBg: "bg-[#b59371]",
  },
  {
    title: "Community Theatre",
    description:
      "Kenyan theatre is characterised by a great presence in a few towns and cities, with Nairobi leading the lot by a huge margin. While the history of theatre suggests that it was one of the major community-based activities, urbanisation and formalisation of the craft have made it dwindle in rural areas. KITFest, through the County Tours and Community Theatre projects, seeks to reintroduce theatre back to the villages as a powerful advocacy tool, teaching platform, source of livelihood and a quality socio-cultural community element.",
    icon: <FiTrendingUp className="w-full h-full" />,
    iconBg: "bg-[#b40000]",
  },
];

const FeaturesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 3; // desktop
    }
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  // Update visible count on window resize
  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, features.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleFeatures = features.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <AnimatePresence mode="wait">
            {visibleFeatures.map((feature, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                className="flex-shrink-0"
                style={{
                  width: `calc((100% - ${
                    (visibleCount - 1) * 1.5
                  }rem) / ${visibleCount})`,
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <FeatureCard feature={feature} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="h-10 w-10 p-0 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-primary w-6"
                  : "bg-red hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className="h-10 w-10 p-0 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default FeaturesCarousel;
