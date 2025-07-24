import DividerImage from "@/components/Homepage/DividerImage";
import ParticipateHero from "@/components/Participate/ParticipateHero";
import React from "react";

const page = () => {
  return (
    <div className="m-0 p-0">
      <div className="m-0 p-0">
        <ParticipateHero />
      </div>
      <div className="m-0 p-0">
        <DividerImage src="/images/border-pattern.svg" alt="Festival scene" />
      </div>
    </div>
  );
};

export default page;
