import AboutKitfest from "@/components/About/AboutKitfest";
import FeaturesCarousel from "@/components/About/FeaturesCarousel";
import KitfestOrg from "@/components/About/KitfestOrg";
import DividerImage from "@/components/Homepage/DividerImage";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div>
        <AboutKitfest />
      </div>
      <div>
        <FeaturesCarousel />
      </div>
      <div>
        <DividerImage src="/images/border-pattern.svg" alt="Festival scene" />
      </div>
      <div>
        <KitfestOrg />
      </div>
    </div>
  );
};

export default page;
