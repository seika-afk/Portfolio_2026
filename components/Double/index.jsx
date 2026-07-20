"use client";
import styles from "./style.module.css";
import Image from "next/image";
import { useRef, useEffect } from "react";
import {
  SiTypescript,
  SiRust,
  SiNextdotjs,
  SiMongodb,
  SiClerk,
  SiGo,
  SiFfmpeg,
} from "@icons-pack/react-simple-icons";
import { TbBrandAzure } from "react-icons/tb";
import { Radio, UploadCloud } from "lucide-react";

// Map stack keys -> icon component
const STACK_ICONS = {
  typescript: SiTypescript,
  rust: SiRust,
  nextjs: SiNextdotjs,
  mongodb: SiMongodb,
  clerk: SiClerk,
  go: SiGo,
  azure: TbBrandAzure,
  ffmpeg: SiFfmpeg,
  websockets: Radio,
  uploadthing: UploadCloud,
};

function StackIcons({ stack }) {
  if (!stack?.length) return null;
  return (
    <div className="flex items-center gap-2.5 mb-3">
      {stack.map((key) => {
        const Icon = STACK_ICONS[key];
        if (!Icon) return null;
        return (
          <Icon
            key={key}
            className="w-4 h-4 md:w-[18px] md:h-[18px] text-[#F3ECE0]/80"
            title={key}
          />
        );
      })}
    </div>
  );
}

export default function Index({ projects, reversed }) {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  const requestRef = useRef(null);
  const xPercentRef = useRef(reversed ? 100 : 0);
  const currentXPercentRef = useRef(reversed ? 100 : 0);
  const speed = 0.15;

  const animate = () => {
    const xPercentDelta = xPercentRef.current - currentXPercentRef.current;
    currentXPercentRef.current += xPercentDelta * speed;
    const firstImagePercent = 66.66 - currentXPercentRef.current * 0.33;
    const secondImagePercent = 33.33 + currentXPercentRef.current * 0.33;
    if (firstImage.current)
      firstImage.current.style.width = `${firstImagePercent}%`;
    if (secondImage.current)
      secondImage.current.style.width = `${secondImagePercent}%`;
    if (
      Math.round(xPercentRef.current) === Math.round(currentXPercentRef.current)
    ) {
      requestRef.current = null;
    } else {
      requestRef.current = window.requestAnimationFrame(animate);
    }
  };

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercentRef.current = (clientX / window.innerWidth) * 100;
    if (!requestRef.current) {
      requestRef.current = window.requestAnimationFrame(animate);
    }
  };

  const handleMouseLeave = () => {
    xPercentRef.current = reversed ? 100 : 0;
    if (!requestRef.current) {
      requestRef.current = window.requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    return () => {
      if (requestRef.current) {
        window.cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`${styles.double} gap-3 md:gap-4`}
      onMouseMove={manageMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <a
        ref={firstImage}
        href={projects[0].url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.imageContainer} relative rounded border border-white/10 overflow-hidden block cursor-pointer`}
      >
        <div className={`${styles.stretchyWrapper} p-3 relative`}>
          <Image
            src={`/${projects[0].src}`}
            fill
            alt={projects[0].name || "image"}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10]/90 via-[#0F0F10]/20 to-transparent pointer-events-none" />
        </div>
        <div
          className={`${styles.body} absolute bottom-0 left-0 right-0 p-5 md:p-6`}
        >
          <StackIcons stack={projects[0].stack} />
          <h3 className="font-display text-[#F3ECE0] text-xl md:text-2xl font-medium m-0">
            {projects[0].name}
          </h3>
          <p className="font-body text-sm text-[#A39B8C] leading-relaxed m-0 mb-2 max-w-[90%]">
            {projects[0].description}
          </p>
          <p className="font-mono text-[11px] tracking-widest text-[#A39B8C]/70 m-0">
            {projects[0].year}
          </p>
        </div>
      </a>

      <a
        ref={secondImage}
        href={projects[1].url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.imageContainer} relative rounded border border-white/10 overflow-hidden block cursor-pointer`}
      >
        <div className={`${styles.stretchyWrapper}  p-3 relative`}>
          <Image
            src={`/${projects[1].src}`}
            fill
            alt={projects[1].name || "image"}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10]/90 via-[#0F0F10]/20 to-transparent pointer-events-none" />
        </div>
        <div
          className={`${styles.body} absolute bottom-0 left-0 right-0 p-5 md:p-6`}
        >
          <StackIcons stack={projects[1].stack} />
          <h3 className="font-display text-[#F3ECE0] text-xl md:text-2xl font-medium m-0 mb-1">
            {projects[1].name}
          </h3>
          <p className="font-body text-sm text-[#A39B8C] leading-relaxed m-0 mb-2 max-w-[90%]">
            {projects[1].description}
          </p>
          <p className="font-mono text-[11px] tracking-widest text-[#A39B8C]/70 m-0">
            {projects[1].year}
          </p>
        </div>
      </a>
    </div>
  );
}
