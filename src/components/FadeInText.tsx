"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeInText({
  children,
  delay = 0,
  className = "",
}: FadeInTextProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
