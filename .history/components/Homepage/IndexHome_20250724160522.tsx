import React from "react";
import FestivalOverview from "./FestivalOverview";
import AboutUs from "./AboutUs";
import DividerImage from "./DividerImage";
import OurJourney from "./OurJourney";
import FAQSection from "./FAQSection";
import LandingPage from "./LandingPage";

const IndexHome = () => {
  return (
    <div>
      <div className=" pt-32">
        <LandingPage />
      </div>
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
