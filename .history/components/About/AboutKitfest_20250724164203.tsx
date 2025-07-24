"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutKitfest = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const titleInView = useInView(titleRef, { once: true });
  const descriptionInView = useInView(descriptionRef, { once: true });
  const videoInView = useInView(videoRef, { once: true });

  return (
    <section className="relative">
      {/* Main yellow background section */}
      <div className="bg-yellow-200 pb-32">
        <div className="max-w-6xl mx-auto px-4 pt-32 pb-16">
          {/* Top Row - Title and Description */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16">
            {/* Title */}
            <motion.div
              ref={titleRef}
              initial={{ opacity: 0, y: 30 }}
              animate={
                titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                About Kitfest
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              ref={descriptionRef}
              initial={{ opacity: 0, y: 30 }}
              animate={
                descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex-1"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Kitfest is an incredible celebration of creativity, innovation,
                and community. Join us for an unforgettable experience that
                brings together talented individuals from all walks of life to
                showcase their amazing projects and connect with like-minded
                creators.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Transition area with video overlap */}
      <div className="relative">
        {/* White background section */}
        <div className="bg-white pt-32">
          <div className="container mx-auto px-4">
            {/* Video positioned to overlap the transition */}
            <motion.div
              ref={videoRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                videoInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4"
            >
              <div className="relative w-full bg-white rounded-lg shadow-2xl overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="About Kitfest Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>

            {/* Spacer to account for overlapping video */}
            <div className="h-64 md:h-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKitfest;
