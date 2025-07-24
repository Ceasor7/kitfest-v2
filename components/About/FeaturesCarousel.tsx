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
} from "react-icons/fa";

const features: Feature[] = [
  {
    title: "Artistic Showcases",
    description:
      "KITFest was conceived specifically to celebrate theatre and showcase the works of theatre artists from all over the world. It’s an international platform where theatre lovers have the opportunity to attend & watch performances, share artistic excellence, innovation and explore the intersections between various theatrical genres.",
    icon: <FaTheaterMasks className="w-full h-full" />,
    iconBg: "bg-[#005925]",
  },
  {
    title: "Training & Development",
    description:
      "Training in both artistic and business acumen has been at the core of our activities. Through cross-platform and agency collaboration, we hold workshops in each KITFest venue for the local artists and groups, equipping them with skills for enhancing the value and quality of their talents.",
    icon: <FaChalkboardTeacher className="w-full h-full" />,
    iconBg: "bg-[#9f4500]",
  },
  {
    title: "Exchange Programs",
    description:
      "The presence of an active international theatre festival in Kenya means Kenyan thespians will always have access to the global theatre scene for exposure to leading skills and knowledge, new production techniques and opportunities from across the world. KITFest is continuously facilitating exchange programs to ensure local theatre travels for both education and business opportunities.",
    icon: <FaExchangeAlt className="w-full h-full" />,
    iconBg: "bg-[#7d0000]",
  },
  {
    title: "Community Theatre",
    description:
      "Kenyan theatre is characterised by a great presence in a few towns and cities, with Nairobi leading the lot by a huge margin. While the history of theatre suggests that it was one of the major community-based activities, urbanisation and formalisation of the craft have made it dwindle in rural areas. KITFest, through the County Tours and Community Theatre projects, seeks to reintroduce theatre back to the villages as a powerful advocacy tool, teaching platform, source of livelihood and a quality socio-cultural community element.",
    icon: <FaUsers className="w-full h-full" />,
    iconBg: "bg-[#b40000]",
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
