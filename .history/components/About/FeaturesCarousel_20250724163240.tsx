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
    title: "Lightning Fast",
    description:
      "Experience blazing fast performance with our optimized architecture and cutting-edge technology.",
    icon: <FiZap className="w-full h-full" />,
    iconBg: "bg-feature-blue",
  },
  {
    title: "Secure & Protected",
    description:
      "Your data is safe with enterprise-grade security and encryption protocols.",
    icon: <FiShield className="w-full h-full" />,
    iconBg: "bg-feature-green",
  },
  {
    title: "Premium Quality",
    description:
      "Built with attention to detail and the highest standards of quality and reliability.",
    icon: <FiStar className="w-full h-full" />,
    iconBg: "bg-feature-purple",
  },
  {
    title: "Easy Configuration",
    description:
      "Set up and customize everything in minutes with our intuitive configuration system.",
    icon: <FiSettings className="w-full h-full" />,
    iconBg: "bg-feature-orange",
  },
  {
    title: "Customer Focused",
    description:
      "We put our customers first with dedicated support and continuous improvements.",
    icon: <FiHeart className="w-full h-full" />,
    iconBg: "bg-feature-pink",
  },
  {
    title: "Growth Analytics",
    description:
      "Track your progress and optimize performance with detailed analytics and insights.",
    icon: <FiTrendingUp className="w-full h-full" />,
    iconBg: "bg-feature-teal",
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
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Amazing Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Discover the powerful features that make our platform the perfect
          choice for your needs
        </motion.p>
      </div>

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
                  : "bg-muted hover:bg-muted-foreground"
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
