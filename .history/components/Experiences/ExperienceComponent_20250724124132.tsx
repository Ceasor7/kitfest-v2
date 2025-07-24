"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";

const experiences = [
  {
    title: "Theme Nights",
    description:
      "All participating countries get a dedicated evening to showcase their culture. While their theatrical performance(s) take centre-stage on that particular evening, they have an option to provide other unique cultural items in the form of food, clothing, music and dance among other experiences. Local respective consulates are commonly involved in the provision of these experiences.",
  },
  {
    title: "Music Experiences",
    description:
      "Each evening after the conclusion of theatrical performances and theme nights, we have a fully professional open air music stage setup for musical performances and DJ mixes into the night. First introduced at #KITFest2021, these daily music experiences were inspired by the need to provide quality entertainment for the fans who like to hang around the venue for socialisation and interactions with the visiting guests.",
  },
  {
    title: "Tourism",
    description:
      "Tourism has been a core inclusion into the KITFest programme since inception. Kenya is a world renowned touristic destination with an array of attractions ranging from historic sites, wildlife and beaches to preserved Savannahs and scenic geographical features. KITFest guests are assisted in accessing attractions of their choosing with certain conveniences packaged into the festival.",
  },
  {
    title: "Cabaret",
    description:
      "At KITFest, we appreciate that artistic expression involves certain experiences explored when visiting a new place. While tourism covers most of these, the Kenyan nightlife is an additional experience programmed into the festival for the visiting guests to enjoy. This is normally achieved by the KITFest staff, the local artists and international guests coming together for a fun night tour around the city.",
  },
  {
    title: "Market Visits",
    description:
      "Souvenir shopping is one of the key highlights for the guests. They enjoy immersing themselves in our local culture through crafts, fashion, foods and related experiences. A dedicated guide is provided for each team to take walks around the town, stalls and market areas in the normally bright Nairobi weather in November.",
  },
  {
    title: "Community Living",
    description:
      "KITFest promotes sharing and interaction between the guests, their guides and staff. Our accommodation has all the amenities of a hotel with each guest having their own personal spaces. However, cooking, meal times and living rooms are shared as a community which enhances the social well-being of each guest in a fun and artistically enriching environment.",
  },
];

export const ExperienceComponent = () => {
  return (
    <div className=" max-w-6xl mx-auto py-20 px-4">
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            description={exp.description}
            index={index}
          />
        ))}
      </motion.section>
    </div>
  );
};
