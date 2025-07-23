"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface DividerImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const DividerImage: FC<DividerImageProps> = ({
  src,
  alt,
  priority = false,
}) => {
  return (
    <section
      className="w-full h-80 relative overflow-hidden"
      aria-label="Visual Divider"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full h-full"
      >
        <Image src={src} alt={alt} fill priority={priority} sizes="100vw" />
      </motion.div>
    </section>
  );
};

export default DividerImage;
