"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const KitfestOrg = () => {
  return (
    <div className="w-full">
      {/* Section 1: Host Organizations */}
      <section className="bg-[#FFD0A0]/40 py-28 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-3 leading-relaxed font-['Bona_Nova'] italic text-[#860000]"
          >
            Host Organizations
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left side - 2/3 */}
            <div className="w-full lg:w-2/3">
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6"
              >
                Kenya International Theatre Festival Trust (KITFT)
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg font-semibold mb-8 leading-relaxed"
              >
                The Kenya International Theatre Festival Trust (KITFT) is a
                non-profit organization dedicated to promoting and developing
                theatre arts in Kenya and across Africa. Established to foster
                cultural exchange and artistic excellence, KITFT serves as a
                platform for local and international theatre practitioners to
                showcase their talents and share diverse cultural narratives.
              </motion.p>

              <motion.h4
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-4"
              >
                Vision
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className=" mb-6 leading-relaxed"
              >
                To be the leading platform for theatre excellence in Africa,
                fostering cultural exchange, artistic innovation, and community
                development through the power of performing arts.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="my-6"
              >
                <Separator className="bg-black" />
              </motion.div>

              <motion.h4
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-4"
              >
                Mission
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className=" mb-8 leading-relaxed"
              >
                To organize world-class theatre festivals that celebrate African
                stories, nurture emerging talent, provide professional
                development opportunities, and create sustainable cultural
                tourism while preserving and promoting our rich theatrical
                heritage.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Button className="bg-[#FF6F00] text-white hover:bg-[#FF6F00]/90 rounded-full px-12 py-4 font-medium transition-all duration-300 hover:scale-105">
                  Learn More
                </Button>
              </motion.div>
            </div>

            {/* Right side - 1/3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3"
            >
              <div className="h-96 lg:h-full">
                <img
                  src="images/contact-us.png"
                  alt="Theatre and performing arts"
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Kenya Cultural Centre */}
      <section className="bg-background pt-20 pb-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left side - 1/2 */}
            <div className="w-full lg:w-1/2">
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6"
              >
                Kenya Cultural Centre Incorporating Kenya National Theatre
                (KCC/NT)
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg font-semibold leading-relaxed"
              >
                Kenya Cultural Centre incorporating Kenya National Theatre
                (KCC-NT) is a Semi-Autonomous Government Agency established by
                the Kenya Cultural Centre Act CAP 218 and mandated to provide a
                Centre for the use and enjoyment of the citizens of Kenya and to
                provide for the performance of music, drama and dancing, for the
                exhibition of works of art and craft and the holding of meetings
                for discussion of matters of literary, historical, scientific or
                educational interest or importance, and connected purposes as
                may be approved by the Governing Council.
                <br />
                <br />
                KCC-NT is the nation’s oldest state cultural institution and is
                currently administered under the Ministry of Sports, Culture and
                Heritage.
              </motion.p>
            </div>

            {/* Right side - 1/2 */}
            <div className="w-full lg:w-1/2">
              <motion.h4
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-4"
              >
                KCC-NT Vision
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-6 leading-relaxed"
              >
                To be the leading cultural institution in Africa, promoting
                artistic excellence, cultural diversity, and creative innovation
                while preserving and showcasing Kenya's rich cultural heritage
                for current and future generations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="my-6"
              >
                <Separator className="bg-black" />
              </motion.div>

              <motion.h4
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-4"
              >
                KCC-NT Mission
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className=" mb-8 leading-relaxed"
              >
                To provide a dynamic platform for artistic expression, cultural
                education, and community engagement through world-class
                performances, educational programs, and cultural initiatives
                that celebrate Kenya's artistic legacy and nurture emerging
                talent.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button className="bg-[#FF6F00] text-white hover:bg-[#FF6F00]/90 rounded-full px-12 py-4 font-medium transition-all duration-300 hover:scale-105">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitfestOrg;
