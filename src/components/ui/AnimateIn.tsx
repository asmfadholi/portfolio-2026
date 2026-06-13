"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function AnimateIn({ children, delay = 0, className, once = true }: AnimateInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin: "-40px" }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  );
}
