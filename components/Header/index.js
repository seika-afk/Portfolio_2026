"use client";
import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { opacity, background } from "./anim";
import Nav from "@/components/Header/Nav";

export default function index() {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      // Hide once scrolled roughly past the first viewport (MainPage height)
      setIsVisible(window.scrollY < window.innerHeight * 0.8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`${styles.header} ${!isVisible ? styles.headerHidden : ""}`}
    >
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
      <div className={styles.bar}>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div
            className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={opacity}
          animate={!isActive ? "open" : "closed"}
          className={styles.shopContainer}
        ></motion.div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
    </div>
  );
}
