"use client";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={cn(
        "relative bg-black w-full min-h-40 flex items-center justify-center p-8",
        className
      )}
    >
      {/* Bottom White Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-10 shadow-lg hover:shadow-xl transition-shadow z-0"
        aria-label="Back to top"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
          delay: 0.2,
        }}
      >
        <ChevronUp className="w-6 h-6 text-black" strokeWidth={3} />
      </motion.button>

      {/* Top Yellow Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF6F00] rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow z-10"
        aria-label="Back to top"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
          delay: 0.2,
        }}
      >
        <ChevronUp className="w-6 h-6 text-black" strokeWidth={3} />
      </motion.button>

      {/* Footer Content */}
      <motion.div
        className="text-center text-white space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h3 className="text-lg font-semibold">Footer with Floating Button</h3>
        <p className="text-gray-300 max-w-md">
          This footer demonstrates a floating "Back to Top" button with smooth
          scroll behavior and Framer Motion animations.
        </p>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <span>© 2024 Your Company</span>
          <span>•</span>
          <span>Privacy</span>
          <span>•</span>
          <span>Terms</span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
