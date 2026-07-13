"use client";

import { useState, cloneElement } from "react";
import { motion } from "framer-motion";
import { disperse } from "@/components/TextDisperse/animation";

type Props = {
  children: React.ReactElement<{ children: string; className?: string }>;
  setBackground: (value: boolean) => void;
};

export default function TextDisperse({ children, setBackground }: Props) {
  const [isAnimated, setIsAnimated] = useState(false);

  const getChars = (word: string) =>
    word.split("").map((char, i) => (
      <motion.span
        custom={i}
        variants={disperse}
        animate={isAnimated ? "open" : "closed"}
        key={char + i}
        style={{ display: "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  const manageMouseEnter = () => {
    setIsAnimated(true);
    setBackground(true);
  };

  const manageMouseLeave = () => {
    setIsAnimated(false);
    setBackground(false);
  };

  return (
    <div
      className="introLine cursor-pointer"
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
    >
      {cloneElement(children, {}, getChars(children.props.children))}
    </div>
  );
}
