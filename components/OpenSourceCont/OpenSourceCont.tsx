"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Project from "./project";
import Modal from "./modal";

const projects = [
  {
    title: "Mofa",
    src: "mofa.png",
    color: "#000000",
  },
  {
    title: "OpenChangeLog",
    src: "ocl.png",
    color: "#8C8C8C",
  },
  {
    title: "Fossology",
    src: "fs.png",
    color: "#EFE8D3",
  },
];

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={`${styles.main} text-white`}>
      <div className={styles.header}>
        <h2 className={`${styles.title} font-display`}>
          Open Source Contributions
        </h2>
      </div>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
