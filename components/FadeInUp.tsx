"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInUpProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function FadeInUp({
  children,
  delay = 0,
  className = "",
}: FadeInUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(14px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}
