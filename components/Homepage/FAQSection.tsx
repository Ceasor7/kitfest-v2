"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "When does the festival happen?",
    answer:
      "The festival takes place annually, typically towards the end of the year. Exact dates are announced on our official platforms.",
  },
  {
    question: "How do I participate in KITFest?",
    answer:
      "First, you must apply to be considered for participation. A call for applications is made prior to the festival, where we receive applicants from all over the world for a highly competitive selection process. Once selected, communication is made and participation plans are initiated. Check out our public media regularly for the call.",
  },
  {
    question: "Why does the brand change every year?",
    answer:
      "KITFest evolves each year to reflect new themes, challenges, and artistic directions. This keeps the festival fresh, relevant, and reflective of the current cultural landscape.",
  },
  {
    question: "What is the difference between KITFT and KITFest?",
    answer:
      "KITFT refers to the Kenya International Theatre Festival, which focuses specifically on theatre and stage arts. KITFest, on the other hand, encompasses a broader celebration of interdisciplinary arts including music, performance, digital media, and more.",
  },
  {
    question: "Is the festival a competition with prizes?",
    answer:
      "No, KITFest is not a competition. It is a curated festival that showcases selected talent through performances, workshops, and exhibitions without awarding competitive prizes.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="py-16 px-4 md:px-10 lg:px-20 bg-[#FFD0A0]/40"
      aria-label="Frequently Asked Questions"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl mb-12 leading-relaxed font-['Bona_Nova'] italic text-center text-[#860000]"
      >
        Frequently <br />
        <span>Asked Questions</span>
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqData.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <div key={index} className="space-y-2">
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full bg-gray-200 rounded-3xl p-4 text-left focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-2xl bg-red-500 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-base md:text-lg font-medium">
                    {item.question}
                  </span>
                </div>

                <span className="text-xl font-bold text-gray-700">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gray-100 px-4 py-3 rounded-b-lg text-sm md:text-base text-gray-700">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
