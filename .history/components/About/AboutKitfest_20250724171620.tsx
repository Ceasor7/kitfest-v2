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
      <div className="bg-[#FFD0A0]/30 pb-36">
        <div className=" max-w-6xl mx-auto px-4 py-9 md:py-32">
          {" "}
          {/* Removed justify-center and items-center here */}
          <div className=" flex flex-col md:flex-row gap-7 **mx-auto w-fit**">
            {" "}
            {/* Added mx-auto and w-fit */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl mb-12 text-center leading-relaxed font-['Bona_Nova'] italic text-[#860000]"
              >
                About Kitfest
              </motion.h2>
            </div>
            <div className=" max-w-[600px]">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                Kitfest is an incredible celebration of creativity, innovation,
                and community. Join us for an unforgettable experience that
                brings together talented individuals from all walks of life to
                showcase their amazing projects and connect with like-minded
                creators.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="bg-white pt-32">
          <div className="max-w-6xl mx-auto px-4">
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

            <div className="h-32 md:h-44"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKitfest;
