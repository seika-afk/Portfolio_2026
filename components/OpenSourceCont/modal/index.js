"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import styles from "./style.module.css";

const scaleAnimation = {
  initial: {
    scale: 0,
    x: "-50%",
    y: "-50%",
  },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};

export default function Modal({ modal, projects }) {
  const { active, index } = modal;

  const modalContainer = useRef(null);

  useEffect(() => {
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const moveItems = (e) => {
      const { pageX, pageY } = e;

      xMoveContainer(pageX);
      yMoveContainer(pageY);
    };

    window.addEventListener("mousemove", moveItems);

    return () => {
      window.removeEventListener("mousemove", moveItems);
    };
  }, []);

  return (
    <motion.div
      ref={modalContainer}
      className={styles.modalContainer}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "enter" : "closed"}
    >
      <div className={styles.modalSlider} style={{ top: `${index * -100}%` }}>
        {projects.map((project, i) => {
          const { src, color } = project;

          return (
            <div
              key={`modal_${i}`}
              className={styles.modal}
              style={{ backgroundColor: color }}
            >
              <Image src={`/${src}`} width={300} height={0} alt={src} />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
