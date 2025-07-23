import React from "react";
import FestivalOverview from "./FestivalOverview";
import AboutUs from "./AboutUs";
import DividerImage from "./DividerImage";
import OurJourney from "./OurJourney";
import FAQSection from "./FAQSection";

const IndexHome = () => {
  return (
    <div>
      <section>
        <AboutUs />
      </section>
      <section>
        <DividerImage src="/images/border-pattern.svg" alt="Festival scene" />
      </section>
      <section>
        <FestivalOverview />
      </section>
      <section>
        <OurJourney />
      </section>
      <section>
        <FAQSection />
      </section>
    </div>
  );
};

export default IndexHome;
