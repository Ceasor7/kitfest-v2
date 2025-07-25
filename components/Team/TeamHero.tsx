"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";

// Import shapes and team photos
import shape1 from "../../public/images/green.svg";
import shape2 from "../../public/images/orange.svg";
import shape3 from "../../public/images/maroon.svg";
import shape4 from "../../public/images/red.svg";

import team1 from "../../public/images/ngobia.png";
import team2 from "../../public/images/kevin.png";
import team3 from "../../public/images/hadasa.png";
import team4 from "../../public/images/fiona.png";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  shape: StaticImageData;
  biography: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Benson Ngobia",
    role: "Director",
    image: team1,
    shape: shape1,
    biography:
      "Benson Ngobia is a seasoned performing artiste, having made his acting debut in 1998 at his local church in Nakuru in the annual Presbyterian Church Festival. He was instrumental in the establishment of the Department of Performing Arts, Film & Media Studies at KCA University, which he chaired between 2019 and 2022, championing a practice-oriented model to learning and assessment, which has led to the institution being recognized as a trend-setter in arts education. He also sits on the Executive Committee of the Kenya Music and Cultural Festival, the countrys oldest cultural festival, now in its 98th year.",
  },
  {
    id: 2,
    name: "Kevin Kimani",
    role: "Chairman",
    image: team2,
    shape: shape2,
    biography:
      "Kevin Kimani Kahuro is an accomplished professional in International Cultural Relations, with expertise in management, financial acumen, strategic planning, and leadership. He currently serves as the Programs and Business Development Manager at the Kenya Cultural Centre, Chairperson of the Kenya International Theatre Festival Trust, and Secretary General of the African Theatre Union. He is also the founder of the Kenya International Theatre Festival and Kenya Theatre Awards. With a background in Film and Theatre Arts, holding both Bachelors and Masters degrees and currently pursuing a PhD in Arts Management.",
  },
  {
    id: 3,
    name: "Hadasa Kariuki",
    role: "Office Admin",
    image: team3,
    shape: shape3,
    biography:
      "Hadasa Kariuki is a professional theatre practitioner and academic committed to advancing the performing arts through both creative practice and scholarship. A charismatic and certified thespian, she holds a Bachelor’s Degree in Film and Theatre Studies and has contributed to several notable theatre productions as an actor, director, and producer. She aims to seamlessly integrate practical theatre experience with academic insight, making a lasting impact on the world of theatre.",
  },
  {
    id: 4,
    name: "Fiona Oyugi",
    role: "Corporate Affairs officer",
    image: team4,
    shape: shape4,
    biography:
      "Fiona Oyugi is a dedicated professional with a background in journalism and mass communication. Currently thriving in multiple roles as a marketer, social media manager, and media communications officer, Fiona combines her expertise to effectively engage audiences across various platforms. Her passion for the theatre industry fuels her creative pursuits, where she actively contributes to promoting and advancing performing arts initiatives.",
  },
];

const TeamHero: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="py-32 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl leading-relaxed font-['Bona_Nova'] italic text-center mb-12 text-[#860000]">
            Meet Our Team
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="group cursor-pointer"
              onClick={() => openModal(member)}
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Shape + Profile Image Container */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="relative w-48 h-48 lg:w-60 lg:h-60"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={member.shape}
                      alt="shape"
                      className="w-full h-full object-contain animate-float"
                      fill
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-32 h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-soft group-hover:shadow-glow transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          width={144}
                          height={144}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Member Info */}
                <div className="text-center lg:text-left lg:pt-8">
                  <motion.h3
                    className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    {member.role}
                  </p>
                  <motion.div
                    className="mt-4 inline-block text-primary font-medium hover:underline"
                    whileHover={{ scale: 1.05 }}
                  >
                    View more →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedMember} onOpenChange={closeModal}>
        <AnimatePresence>
          {selectedMember && (
            <DialogContent className="max-w-2xl p-0 bg-white text-black rounded-2xl border-none shadow-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative p-6"
              >
                {/* Biography only */}
                <div className="prose prose-sm max-w-none">
                  <p className="text-base text-gray-800 leading-relaxed">
                    {selectedMember.biography}
                  </p>
                </div>
              </motion.div>
            </DialogContent>
          )}
        </AnimatePresence>
      </Dialog>
    </section>
  );
};

export default TeamHero;
