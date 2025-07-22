"use client";

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { useEffect } from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#110d0d] text-white pt-16 pb-10">
      {/* Scroll to top button */}
      <div className="absolute -top-7 left-1/2 mb-5 transform -translate-x-1/2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="bg-orange-500 rounded-full p-4 shadow-lg"
        >
          <span className="text-2xl">↑</span>
        </motion.button>
      </div>

      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>About KITFest</li>
            <li>Kenya Theatre Awards</li>
            <li>Theatre KE</li>
            <li>KIFT</li>
            <li>Kenya Cultural Centre</li>
          </ul>
        </div>

        {/* Festival Overview */}
        <div>
          <h4 className="font-semibold mb-3">Festival Overview</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Participation</li>
            <li>Experiences</li>
            <li>#KITFest2022 Honorary</li>
            <li>KITFest Brand</li>
          </ul>
        </div>

        {/* Logo */}
        <div className="md:col-span-1 flex justify-center md:justify-start items-start">
          <img
            src="/images/KITFest-Full-White-Logo.png" // update path to your actual logo
            alt="The Kenya International Theatre Festival"
            className="h-28 object-contain"
          />
        </div>

        {/* Subscribe */}
        <div className="md:col-span-1">
          <p className="text-orange-400 text-sm mb-2">Receive Festival News</p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Lorem@email.com"
              className="bg-gray-800 px-4 py-2 text-white rounded-full w-full focus:outline-none text-sm"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className="mt-10 px-6 md:px-16 flex items-center space-x-6 text-lg text-white">
        <p className="text-sm">Follow us</p>
        <FaXTwitter />
        <FaFacebookF />
        <FaInstagram />
        <FaYoutube />
        <FaWhatsapp />
      </div>
    </footer>
  );
}
