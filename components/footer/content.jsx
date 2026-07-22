"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/seika-afk",
    note: "Repos, experiments, builds",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/gagan-thakur-704779349",
    note: "Professional updates",
    external: true,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/XYGt4jioRg/",
    note: "Problem solving profile",
    external: true,
  },
  {
    label: "X",
    href: "https://x.com/srrw2s",
    note: "Short thoughts and updates",
    external: true,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    note: "Download the PDF version",
    download: "Gagan_Thakur_Resume.pdf",
  },
  {
    label: "Hire Me",
    href: "mailto:afkseika@gmail.com?subject=Project%20Inquiry%20for%20Gagan%20Thakur",
    note: "Email afkseika@gmail.com",
    accent: true,
  },
];

function MagneticButton({
  label,
  note,
  href,
  download,
  accent = false,
  external = false,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.35 });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.18);
    y.set(offsetY * 0.18);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const baseClass =
    "group relative flex min-h-[92px] w-full items-center justify-between overflow-hidden rounded-[24px] border px-4 py-4 text-left transition-colors duration-300 md:px-5 md:py-5";

  const themeClass = accent
    ? "border-[#DEA5A4]/35 bg-[#DEA5A4] text-[#0F0F10] shadow-[0_16px_60px_rgba(222,165,164,0.18)]"
    : "border-white/10 bg-white/[0.03] text-[#F3ECE0] hover:border-white/20 hover:bg-white/[0.06]";

  return (
    <motion.a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onFocus={reset}
      onBlur={reset}
      style={{ x: springX, y: springY }}
      className={`${baseClass} ${themeClass}`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
    >
      <span className="absolute inset-0 translate-y-full bg-[#F3ECE0]/10 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0" />
      <span className="relative z-10 flex flex-col gap-2">
        <span className="font-display italic text-[clamp(1.45rem,3.2vw,2.8rem)] leading-none tracking-[-0.04em]">
          {label}
        </span>
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
            accent ? "text-[#0F0F10]/75" : "text-[#A39B8C]"
          }`}
        >
          {note}
        </span>
      </span>
      <span
        className={`relative z-10 rounded-full border px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.22em] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
          accent
            ? "border-[#0F0F10]/15 bg-[#0F0F10] text-[#F3ECE0]"
            : "border-white/10 bg-transparent text-[#F3ECE0]"
        }`}
      >
        Open
      </span>
    </motion.a>
  );
}

export default function Content() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <h2 className="font-display italic text-[clamp(2.8rem,6.2vw,5.5rem)] leading-[0.9] tracking-[-0.06em]">
            Let&apos;s build something worth opening.
          </h2>
        </div>
        <p className="font-body max-w-[320px] text-[13px] leading-relaxed text-[#A39B8C]">
          Reach out, open the resume, or jump straight to the profiles.
        </p>
      </div>

      <div className="grid gap-5 pt-2 lg:grid-cols-2">
        {LINKS.map((link) => (
          <MagneticButton key={link.label} {...link} />
        ))}
      </div>

    </div>
  );
}
