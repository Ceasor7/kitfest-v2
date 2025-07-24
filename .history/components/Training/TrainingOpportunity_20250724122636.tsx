"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const TrainingOpportunity = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col lg:flex-row bg-white overflow-hidden max-w-6xl gap-7 mx-auto my-8"
    >
      {/* Left: Poster */}
      <div className="w-full lg:w-1/3 bg-gray-300 rounded-2xl flex items-center justify-center aspect-[3/4] lg:aspect-auto">
        <span className="text-gray-600 text-xl">Poster</span>
      </div>

      {/* Right: Info */}
      <div className="w-full lg:w-2/3 bg-gray-200 p-6 rounded-2xl lg:rounded-b-none lg:rounded-r-xl flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2 leading-relaxed font-['Bona_Nova'] italic text-center text-[#860000]">
          Training Opportunity
        </h2>
        <p className="text-gray-700 mb-4">
          Join our hands-on training session to gain practical experience and
          expand your skills in a supportive environment. Open to all skill
          levels!
        </p>
        <button className="bg-[#FF6F00] text-white px-4 py-2 rounded hover:bg-[#FF6F00]/80 transition-colors w-fit">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default TrainingOpportunity;
