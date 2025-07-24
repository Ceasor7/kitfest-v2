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
    <div className=" py-12">
      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col lg:flex-row bg-white overflow-hidden max-w-6xl gap-7 mx-auto my-16"
      >
        {/* Left: Poster */}
        <div className="w-full lg:w-1/3 bg-gray-300 rounded-2xl flex items-center justify-center aspect-[3/4] lg:aspect-auto">
          <span className="text-gray-600 text-xl">Poster</span>
        </div>

        {/* Right: Info */}
        <div className="w-full lg:w-2/3 bg-gray-200 p-6 rounded-2xl flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2 leading-relaxed font-['Bona_Nova'] italic text-[#860000]">
            Bodies In Motion: Devised Performance Workshop
          </h2>
          <p className=" mb-4">
            Ignite your creativity and unleash your artistic potential in the
            captivating workshop series: "Bodies in Action: Exploring Devised
            Performance." Led by esteemed American Actor/Theatre Practitioner
            Antonio Disla and acclaimed Dancer Choreographer Alexandria Davis,
            this transformative journey will take you on a mesmerizing
            exploration of Heightened Language, Dance, and Contact
            Improvisation. Join us as we delve into the depths of collaborative
            creation, weaving together the diverse artistry of actors, dancers,
            poets, and visual artists. Inspired by community-relevant themes,
            folklore, and poetry, we will collectively craft a groundbreaking
            new work that resonates with the soul of our society. Immerse
            yourself in a week-long intensive workshop from May 17th to 21st,
            where creativity knows no bounds, and boundaries blur as we embrace
            the power of devised performance.
            <br />
            The application Closes 15th May 2023. Feedback shall be given on
            16th May.
            <br />
            Success in your Application
          </p>
          <button className="bg-[#FF6F00] text-white px-12 py-2 rounded-full hover:bg-[#FF6F00]/80 transition-colors w-fit">
            Learn More
          </button>
        </div>
      </motion.div>
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
        <div className="w-full lg:w-2/3 bg-gray-200 p-6 rounded-2xl flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2 leading-relaxed font-['Bona_Nova'] italic text-[#860000]">
            Bodies In Motion: Devised Performance Workshop
          </h2>
          <p className=" mb-4">
            Ignite your creativity and unleash your artistic potential in the
            captivating workshop series: "Bodies in Action: Exploring Devised
            Performance." Led by esteemed American Actor/Theatre Practitioner
            Antonio Disla and acclaimed Dancer Choreographer Alexandria Davis,
            this transformative journey will take you on a mesmerizing
            exploration of Heightened Language, Dance, and Contact
            Improvisation. Join us as we delve into the depths of collaborative
            creation, weaving together the diverse artistry of actors, dancers,
            poets, and visual artists. Inspired by community-relevant themes,
            folklore, and poetry, we will collectively craft a groundbreaking
            new work that resonates with the soul of our society. Immerse
            yourself in a week-long intensive workshop from May 17th to 21st,
            where creativity knows no bounds, and boundaries blur as we embrace
            the power of devised performance.
            <br />
            The application Closes 15th May 2023. Feedback shall be given on
            16th May.
            <br />
            Success in your Application
          </p>
          <div className=" flex flex-col md:flex-row gap-7">
            <button className="bg-black text-white px-12 py-2 rounded-full hover:bg-black/80 transition-colors w-fit">
              How to Apply
            </button>
            <button className="bg-[#FF6F00] text-white px-12 py-2 rounded-full hover:bg-[#FF6F00]/80 transition-colors w-fit">
              Apply
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TrainingOpportunity;
