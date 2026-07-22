"use client";
import styles from "./style.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "@/components/Header/Body";
import Footer from "@/components/Header/Footer";
import Image from "@/components/Header/Image";

const links = [
  {
    title: "Home",
    href: "/",
    src: "/home.png",
  },
  {
    title: "Services",
    href: "#services",
    src: "/services.png",
  },
  {
    title: "Projects",
    href: "#projects",
    src: "/projects.png",
  },

  {
    title: "Contact",
    href: "#contact",
    src: "/contact.png",
  },
];

export default function Index({ setIsActive }) {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setIsActive={setIsActive}
          />
          <Footer />
        </div>
        <Image
          src={links[selectedLink.index].src}
          selectedLink={selectedLink}
        />
      </div>
    </motion.div>
  );
}
