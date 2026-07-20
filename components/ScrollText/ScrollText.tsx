"use client";

import styles from "./style.module.css";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const phrase =
  " Making cool stuff is a source of  joy for me,I enjoy Creating them, decorating and designing them and making things that seem cool possible. and I would love to work with you with same energy :>";
export default function ScrollText() {
  const refs = useRef([]);
  const container = useRef(null);
  const body = useRef(null);
  refs.current = [];

  const splitWords = (phrase) => {
    let letterIndex = 0;

    return phrase.split(" ").map((word, wordIndex) => (
      <p key={`${word}_${wordIndex}`}>
        {word.split("").map((letter, letterIdx) => {
          const currentIndex = letterIndex++;

          return (
            <span
              key={`${letter}_${letterIdx}`}
              ref={(el) => {
                if (el) refs.current[currentIndex] = el;
              }}
            >
              {letter}
            </span>
          );
        })}
      </p>
    ));
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "top ",
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.2,
    });
  }, []);

  return (
    <main ref={container} className={styles.main}>
      <div ref={body} className={styles.body}>
        {splitWords(phrase)}
      </div>
    </main>
  );
}
