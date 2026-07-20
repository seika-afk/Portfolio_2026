"use client";

import ThirdPage from "../ThirdPage/ThirdPage";

const tops = [
  "top-0",
  "top-[80px]",
  "top-[160px]",
  "top-[240px]",
  "top-[320px]",
  "top-[400px]",
];
const zIndexes = ["z-10", "z-20", "z-30", "z-40", "z-50", "z-60"];

export default function SecondPage() {
  const sections = [
    {
      title: "Services",
      bg: "bg-[#0F0F10]",
      textColor: "text-[#F3ECE0]",
      mutedColor: "text-[#A39B8C]",
      accentBg: "bg-[#DEA5A4]/15",
      accentBg2: "bg-[#E9C46A]/15",
      description: "What I provide, end to end.",
      isOverview: true,
      services: [
        "Beautiful websites",
        "Full stack websites",
        "Backend systems",
        "AI agents",
      ],
    },
    {
      title: "Beautiful Websites",
      bg: "bg-[#111113]",
      textColor: "text-[#F3ECE0]",
      mutedColor: "text-[#A39B8C]",
      accentBg: "bg-[#dea5a4]/15",
      accentBg2: "bg-[#DEA5A4]/10",
      description:
        "Landing pages that feel considered — clean layouts, tasteful motion, and a design language that actually reflects your brand.",
      tag: "Landing pages",
      quote: "First impressions are built in pixels, not paragraphs.",
      isOverview: false,
    },
    {
      title: "Full Stack Websites",
      bg: "bg-[#141416]",
      textColor: "text-[#F3ECE0]",
      mutedColor: "text-[#A39B8C]",
      accentBg: "bg-[#E9C46A]/15",
      accentBg2: "bg-[#E9C46A]/10",
      description:
        "End-to-end web apps — frontend, backend, auth, database, deployment. One person handling the whole stack, start to finish.",
      tag: "End-to-end",
      quote: "One codebase, no handoffs, no gaps.",
      isOverview: false,
    },
    {
      title: "Backend Systems",
      bg: "bg-[#18181B]",
      textColor: "text-[#F3ECE0]",
      mutedColor: "text-[#A39B8C]",
      accentBg: "bg-[#DEA5A4]/15",
      accentBg2: "bg-[#DEA5A4]/10",
      description:
        "APIs, databases, and infrastructure built to actually scale — not just work on your machine.",
      tag: "APIs & infra",
      quote: "The part users never see, built to never break.",
      isOverview: false,
    },
    {
      title: "AI Agents",
      bg: "bg-[#1C1C1F]",
      textColor: "text-[#F3ECE0]",
      mutedColor: "text-[#A39B8C]",
      accentBg: "bg-[#E9C46A]/15",
      accentBg2: "bg-[#E9C46A]/10",
      description:
        "Agentic workflows that actually take action — tool use, orchestration, and integrations that go beyond a chat window.",
      tag: "Agentic workflows",
      quote: "Software that does the task, not just describes it.",
      isOverview: false,
    },
  ];

  return (
    <div className="relative bg-[#0F0F10] h-[600vh]">
      {sections.map((section, i) =>
        section.isOverview ? (
          <div
            key={section.title}
            className={`sticky ${tops[i]} ${zIndexes[i]} ${section.bg} h-screen rounded-2xl overflow-hidden flex flex-col border border-white/5`}
          >
            <div className="flex items-center justify-between shrink-0 h-[100px] px-10">
              <h2
                className={`font-display font-medium tracking-tight m-0 text-[clamp(2.5rem,7vw,5rem)] ${section.textColor}`}
              >
                {section.title}
              </h2>
            </div>
            <div className="px-10 pb-5">
              <p
                className={`text-sm leading-relaxed max-w-sm m-0 ${section.mutedColor}`}
              >
                {section.description}
              </p>
            </div>
            <div className="flex-1 px-10 pb-10 flex flex-col justify-center gap-4">
              {section.services!.map((service, idx) => (
                <div
                  key={service}
                  className={`${
                    idx % 2 === 0 ? section.accentBg : section.accentBg2
                  } rounded-xl px-6 py-5 flex items-center justify-between`}
                >
                  <span
                    className={`text-2xl md:text-3xl font-black tracking-tight ${section.textColor}`}
                  >
                    {service}
                  </span>
                  <span
                    className={`font-mono text-xs tracking-widest uppercase ${section.mutedColor}`}
                  >
                    0{idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            key={section.title}
            className={`sticky ${tops[i]} ${zIndexes[i]} ${section.bg} h-screen rounded-2xl overflow-hidden flex flex-col border border-white/5`}
          >
            <div className="flex items-center justify-between shrink-0 h-[80px] px-10">
              <h2
                className={`font-display font-medium tracking-tight m-0 text-[clamp(1.25rem,2.5vw,1.75rem)] ${section.textColor}`}
              >
                {section.title}
              </h2>
            </div>
            <div className="px-10 pb-5">
              <p
                className={`text-sm leading-relaxed max-w-sm m-0 ${section.mutedColor}`}
              >
                {section.description}
              </p>
            </div>
            <div className="flex-1 px-10 pb-10 grid grid-cols-3 grid-rows-2 gap-3">
              <div
                className={`${section.accentBg} rounded-xl p-5 flex flex-col gap-2 col-span-1 row-span-1 justify-center`}
              >
                <span
                  className={`text-xs font-mono tracking-widest uppercase ${section.mutedColor}`}
                >
                  Service
                </span>
                <span
                  className={`text-2xl font-black tracking-tight leading-tight ${section.textColor}`}
                >
                  {section.tag}
                </span>
              </div>
              <div
                className={`${section.accentBg2} rounded-xl p-6 flex items-center col-span-2 row-span-1`}
              >
                <p
                  className={`text-lg font-bold leading-snug m-0 ${section.textColor}`}
                >
                  "{section.quote}"
                </p>
              </div>
            </div>
          </div>
        ),
      )}

      {/* ThirdPage — final sticky panel, scrolls internally if content overflows */}
    </div>
  );
}
