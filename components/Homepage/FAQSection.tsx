"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is the festival about?",
    answer:
      "Our festival is a celebration of music, culture, and creativity, featuring top artists, immersive experiences, and unforgettable memories.",
  },
  {
    question: "How can I buy tickets?",
    answer:
      "Tickets can be purchased online through our official website. Make sure to book early for discounts!",
  },
  {
    question: "Are children allowed at the festival?",
    answer:
      "Yes, children under 12 can attend for free with a guardian. We also offer family-friendly zones and activities.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="py-16 px-4 md:px-10 lg:px-20 bg-white"
      aria-label="Frequently Asked Questions"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqData.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <div key={index} className="space-y-2">
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full bg-gray-200 rounded-lg p-4 text-left focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm">
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
