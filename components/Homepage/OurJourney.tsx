"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Stat {
  label: string;
  end: number;
  suffix?: string;
}

const stats: Stat[] = [
  { label: "Events", end: 50, suffix: "+" },
  { label: "Attendees", end: 10000, suffix: "+" },
  { label: "Artists", end: 100, suffix: "+" },
  { label: "Events", end: 50, suffix: "+" },
  { label: "Attendees", end: 10000, suffix: "+" },
  { label: "Artists", end: 100, suffix: "+" },
];

const OurJourney: FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-black text-white py-16 px-4 md:px-10 lg:px-20"
      aria-label="Our Journey Statistics"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-12"
        >
          Our Journey
        </motion.h2>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center relative px-6 sm:px-8"
              aria-label={`${stat.label}: ${stat.end}${stat.suffix ?? ""}`}
            >
              {/* Divider (not first) */}
              {idx > 0 && (
                <div className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 h-12 border-l border-white/30" />
              )}

              <div className="text-4xl md:text-5xl font-bold">
                {inView && (
                  <CountUp
                    end={stat.end}
                    duration={2}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                )}
              </div>
              <div className="mt-2 text-sm md:text-base text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurJourney;
