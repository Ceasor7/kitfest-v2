"use client";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

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
        "relative bg-black w-full flex items-center justify-center px-4 py-16",
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
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
        {/* Left side: Links + Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <div className="grid grid-cols-2 gap-8 mb-10">
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>About KITFest</li>
                <li>Kenya Theatre Awards</li>
                <li>Theatre KE</li>
                <li>KIFT</li>
                <li>Kenya Cultural Centre</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Festival Overview</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Participation</li>
                <li>Experiences</li>
                <li>#KITFest2022 Honorary</li>
                <li>KITFest Brand</li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 items-center text-white text-xl">
            <FaXTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaWhatsapp />
          </div>
        </motion.div>

        {/* Right side: Logo + Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col items-start lg:items-end gap-6"
        >
          {/* KITFest Logo */}
          <div>
            <Image
              src="/images/KITFest-Full-White-Logo.png"
              alt="KITFest Logo"
              width={180}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-md">
            <div className="flex">
              <input
                type="email"
                placeholder="johndoe@email.com"
                className="rounded-l-full px-4 py-2 w-full text-black bg-white text-sm focus:outline-none"
              />
              <button className="bg-orange-500 text-white text-sm px-6 py-2 rounded-r-full hover:bg-orange-600 transition">
                Sign Up
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
