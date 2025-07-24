import DividerImage from "@/components/Homepage/DividerImage";
import TrainingHero from "@/components/Training/TrainingHero";
import TrainingOpportunity from "@/components/Training/TrainingOpportunity";
import React from "react";

const page = () => {
  return (
    <div className=" min-h-screen">
      <div>
        <TrainingHero />
      </div>
      <div>
        <DividerImage src="/images/border-pattern.svg" alt="Festival scene" />
      </div>
      <div>
        <TrainingOpportunity />
      </div>
    </div>
  );
};

export default page;
