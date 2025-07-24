"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FeatureCard, { Feature } from "./FeatureCard";
import { Button } from "../ui/button";
import {
  FaTheaterMasks,
  FaChalkboardTeacher,
  FaExchangeAlt,
  FaUsers,
  FaHandsHelping,
  FaGlobeAfrica,
} from "react-icons/fa";

const features: Feature[] = [
  {
    title: "Artistic Showcases",
    description:
      "KITFest celebrates theatre globally, giving artists a chance to share artistic excellence and innovation across genres.",
    icon: <FaTheaterMasks className="w-full h-full" />,
    iconBg: "bg-[#005925]",
  },
  {
    title: "Training & Development",
    description:
      "Workshops and programs equip local artists with artistic and business skills, enhancing their craft and value.",
    icon: <FaChalkboardTeacher className="w-full h-full" />,
    iconBg: "bg-[#9f4500]",
  },
  {
    title: "Exchange Programs",
    description:
      "KITFest creates bridges between Kenyan and global theatre scenes, opening doors to knowledge and opportunities.",
    icon: <FaExchangeAlt className="w-full h-full" />,
    iconBg: "bg-[#7d0000]",
  },
  {
    title: "Community Theatre",
    description:
      "Reintroducing theatre to rural areas as a tool for advocacy, education, livelihood, and cultural expression.",
    icon: <FaUsers className="w-full h-full" />,
    iconBg: "bg-[#b40000]",
  },
  {
    title: "Collaborative Learning",
    description:
      "Artists learn from each other through dialogue, performance, and hands-on experiences at every event.",
    icon: <FaHandsHelping className="w-full h-full" />,
    iconBg: "bg-[#b37334]",
  },
  {
    title: "Global Engagement",
    description:
      "An open stage for global artists to engage with Kenyan talent, fostering international camaraderie.",
    icon: <FaGlobeAfrica className="w-full h-full" />,
    iconBg: "bg-[#b59371]",
  },
];

const FeaturesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [features.slice(0, 3), features.slice(3, 6)];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex gap-6"
          >
            {slides[currentSlide].map((feature, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/3">
                <FeatureCard feature={feature} index={index} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          className="h-10 w-10 p-0 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-[#b37334] w-6"
                  : "bg-[#7d0000] hover:bg-[#7d0000]/70"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          className="h-10 w-10 p-0 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default FeaturesCarousel;
