import DividerImage from "@/components/Homepage/DividerImage";
import ParticipateHero from "@/components/Participate/ParticipateHero";
import ParticipateOverview from "@/components/Participate/ParticipateOverview";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <ParticipateHero />
      </div>
      <div>
        <DividerImage src="/images/border-pattern.svg" alt="Festival scene" />
      </div>
      <div>
        <ParticipateOverview />
      </div>
    </div>
  );
};

export default page;
