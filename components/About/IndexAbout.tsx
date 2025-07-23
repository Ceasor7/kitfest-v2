"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Music,
  Calendar,
  Users,
  MapPin,
  Camera,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "./FeatureCard";

const AboutKitfest = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: Music,
      iconColor: "bg-festival-orange",
      title: "Live Performances",
      description:
        "Experience amazing live music from local and international artists across multiple stages.",
    },
    {
      icon: Calendar,
      iconColor: "bg-festival-purple",
      title: "Multi-Day Festival",
      description:
        "Three days of non-stop entertainment, workshops, and cultural experiences.",
    },
    {
      icon: Users,
      iconColor: "bg-festival-blue",
      title: "Community Gathering",
      description:
        "Connect with like-minded people and celebrate our shared love for music and culture.",
    },
    {
      icon: MapPin,
      iconColor: "bg-festival-green",
      title: "Beautiful Venue",
      description:
        "Set in a stunning outdoor location with perfect acoustics and scenic views.",
    },
    {
      icon: Camera,
      iconColor: "bg-festival-red",
      title: "Photo Opportunities",
      description:
        "Instagram-worthy moments at every corner with art installations and backdrops.",
    },
    {
      icon: Award,
      iconColor: "bg-primary",
      title: "Award-Winning",
      description:
        "Recognized as one of the region's premier music festivals for three consecutive years.",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background split design */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-yellow-200"></div>
        <div className="h-1/2 bg-white"></div>
      </div>

      <div className="relative z-10">
        {/* Top content section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Heading and description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                About <span className="text-primary">Kitfest</span>
              </h2>
            </motion.div>

            {/* Additional content or stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kitfest is more than just a music festival – it's a celebration
                of culture, community, and creativity. Join thousands of music
                lovers for an unforgettable experience featuring world-class
                performances, local artisans, delicious food, and memories that
                will last a lifetime.
              </p>
            </motion.div>
          </div>

          {/* YouTube video embed */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative z-20 -mb-32"
          >
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Kitfest Festival Highlights"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features section */}
        <div className="bg-background pt-48 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Features heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Features of the Festival
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover what makes Kitfest an extraordinary experience for
                music lovers and culture enthusiasts alike.
              </p>
            </motion.div>

            {/* Scrollable feature cards */}
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    iconColor={feature.iconColor}
                    title={feature.title}
                    description={feature.description}
                    index={index}
                  />
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollLeft}
                  className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollRight}
                  className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKitfest;
