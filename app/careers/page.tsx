import CareersHero from "@/components/careers/CareersHero";
import JobOpenings from "@/components/careers/JobOpenings";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div>
        <CareersHero />
      </div>
      <div>
        <JobOpenings />
      </div>
    </div>
  );
};

export default page;
