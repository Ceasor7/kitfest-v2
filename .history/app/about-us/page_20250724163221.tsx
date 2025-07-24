import AboutKitfest from "@/components/About/AboutKitfest";
import FeaturesCarousel from "@/components/About/FeaturesCarousel";
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
    </div>
  );
};

export default page;
