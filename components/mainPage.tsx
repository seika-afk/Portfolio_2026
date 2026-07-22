"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import TextDisperse from "./TextDisperse/textDisperse";

import Header from "@/components/Header";
const ROLES = [
  "Full stack developer",
  "Agentic developer",
  "Backend developer",
  "Design Enthusiast",
  "Data scientist",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_TIME = 1400;

const MainPage: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    if (!isDeleting && displayText === currentRole) {
      const pause = setTimeout(() => setIsDeleting(true), PAUSE_TIME);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setDisplayText((prev) =>
          isDeleting
            ? currentRole.slice(0, prev.length - 1)
            : currentRole.slice(0, prev.length + 1),
        );
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Refs for everything that should blur EXCEPT "Gagan"
  const imageRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const restRef = useRef<HTMLDivElement>(null);

  const setBackground = (isActive: boolean) => {
    const targets = [imageRef.current, topRef.current, restRef.current].filter(
      Boolean,
    );
    if (targets.length === 0) return;

    gsap.to(targets, {
      filter: isActive ? "blur(10px)" : "blur(0px)",
      opacity: isActive ? 0.5 : 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const cursorRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const scope = sectionRef.current;
    if (!cursor || !scope) return;

    let isOverP = false;
    let isOverImage = false;

    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      const target = document.elementFromPoint(e.clientX, e.clientY);

      const overImage =
        !!target && scope.contains(target) && !!target.closest(".illus");
      const overP =
        !overImage &&
        !!target &&
        scope.contains(target) &&
        !!target.closest("p");

      if (overImage !== isOverImage) {
        cursor.classList.toggle("cursor-expanded-image", overImage);
        isOverImage = overImage;
      }
      if (overP !== isOverP) {
        cursor.classList.toggle("cursor-expanded", overP);
        isOverP = overP;
      }
    };

    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0F0F10] text-[#F3ECE0]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Bodoni Moda', Georgia, serif; }
        .font-body { font-family:
        'Inter', system-ui, sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', 'Courier New', monospace; }
        @keyframes blink { 0%, 50% { opacity: 1; } 50.01%, 100% { opacity: 0; } }
        .cursor-blink { animation: blink 1s step-end infinite; }

        @media (hover: none), (pointer: coarse) {
          #custom-cursor { display: none; }
        }

        @media (hover: hover) and (pointer: fine) {
          .cursor-scope, .cursor-scope * { cursor: none !important; }
        }

        #custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #F3ECE0;
          mix-blend-mode: difference;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: width 0.3s ease, height 0.3s ease;
          z-index: 9999;
        }
        #custom-cursor.cursor-expanded {
          width: 90px;
          height: 90px;
        }
        #custom-cursor.cursor-expanded-image {
          width: 140px;
          height: 140px;
        }
      `}</style>

      {/* CURSOR */}
      <div id="custom-cursor" ref={cursorRef} />

      <Header />
      {/* top bar */}
      <header className="relative opacity-0 z-10 flex items-center justify-center mb-9 px-6 md:px-16 pt-8 font-mono text-[11px] tracking-[0.18em] uppercase">
        <a
          href="mailto:afkseika@gmail.com"
          className="group inline-flex items-center gap-1.5 transition-colors outline-none"
        >
          Contact
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </header>

      {/* hero */}
      <section
        ref={sectionRef}
        className="cursor-scope relative flex min-h-[calc(100vh-88px)] flex-col items-center justify-center gap-10 px-6 pb-24 pt-10 text-center md:flex-row md:px-16 md:pt-6"
      >
        {/* image — blurs on hover */}
        <div
          ref={imageRef}
          className="order-2 flex items-center justify-center md:order-1 md:w-5/12 md:justify-end md:pr-10 lg:pr-16"
        >
          <img
            src="/pfp1.png"
            alt="Portrait"
            className="illus h-auto w-full max-w-[300px] object-contain md:max-w-[340px] scale-130 translate-x-0 md:translate-x-8 lg:translate-x-12"
          />
        </div>

        {/* content */}
        <div className="order-1 flex w-full flex-col items-center md:order-2 md:w-7/12">
          {/* everything above Gagan — blurs on hover */}
          <div ref={topRef} className="flex flex-col items-center">
            <h1 className="font-display italic mb-1 text-[64px] leading-[0.95] md:text-[104px] md:leading-[0.9]">
              Hey,
            </h1>
            <p className="font-mono mb-1 text-[13px] tracking-[0.2em] text-[#9B9488]">
              I am
            </p>
          </div>

          {/* Gagan — the only thing that stays sharp, never in targets array */}
          <div className="mb-4">
            <TextDisperse setBackground={setBackground}>
              <p className="font-display font-medium text-[56px] leading-[0.95] md:text-[88px] md:leading-[0.9]">
                Gagan
              </p>
            </TextDisperse>
          </div>

          {/* everything below Gagan — blurs on hover */}
          <div ref={restRef} className="flex flex-col items-center">
            <p className="font-mono mb-10 min-h-[28px] text-[15px] text-[#A39B8C] md:text-[18px]">
              {displayText}
              <span className="cursor-blink">|</span>
            </p>

            <div className="font-body max-w-[420px] text-[14px] leading-relaxed text-[#A39B8C]">
              I dont just build Products ,but i try to give them a
              <span className="bg-[#DEA5A4] cursor-pointer rounded-lg p-1 text-[#0F0F10]">
                {"Personality".split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block transition-transform duration-200 hover:-translate-y-1"
                  >
                    {char}
                  </span>
                ))}
              </span>{" "}
              . I like Designs a lot and along with it ,shipping stuff.
              <br />
              Creating{" "}
              <span className="bg-[#E9C46A] cursor-pointer rounded-lg p-1 text-[#0F0F10]">
                {"Stunning visuals".split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block transition-transform duration-200 hover:-translate-y-1"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>{" "}
              for you and for your customers.
              <br />
              Lets Build something together
              <br />
              <div className="group/contact relative mt-6 inline-block">
                <span className="font-body absolute inset-y-0 right-0 z-0 flex items-center pr-4 whitespace-nowrap text-[#F3ECE0] text-sm opacity-0 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/contact:translate-x-[110%] group-hover/contact:opacity-100 pointer-events-none">
                  via Email
                </span>
                <button className="group/fill relative z-10 hover:text-white cursor-pointer overflow-hidden rounded-full px-3 py-2 bg-[#F3F3F1] text-[#0F0F10] text-sm font-medium tracking-wide">
                  <span className="absolute inset-0 bg-[#DEA5A4] translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/fill:translate-y-0" />
                  <span className="relative z-10">Contact Me! </span>
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>

      <div className="font-body absolute bottom-4 right-4 text-sm text-[#A39B8C]">
        folio@2026
      </div>
    </main>
  );
};

export default MainPage;
