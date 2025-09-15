"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  delay?: number;
}

export default function AnimatedButton({
  children,
  onClick,
  href,
  className = "",
  delay = 0,
}: AnimatedButtonProps) {
  const buttonVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      y: 0,
    },
  };

  const content = (
    <motion.button
      className={className}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        transition={{
          duration: 0.5,
          delay,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.a>
    );
  }

  return content;
}
