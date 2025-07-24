"use client";
import React from "react";
import { motion } from "framer-motion";
import DividerImage from "@/components/Homepage/DividerImage";
import { ExperienceComponent } from "@/components/Experiences/ExperienceComponent";
import ExperienceHero from "@/components/Experiences/ExperienceHero";

const page = () => {
  return (
    <div>
      <div>
        <ExperienceHero />
      </div>
      <section>
        <DividerImage src="/images/border-pattern.svg" alt="Festival scene" />
      </section>
      <section>
        <ExperienceComponent />
      </section>
    </div>
  );
};

export default page;
