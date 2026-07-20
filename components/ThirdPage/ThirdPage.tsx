import Double from "@/components/Double";

const projects = [
  {
    name: "Pairleet",
    url: "https://pairleet.vercel.app/",
    description:
      "Self-host contests and collaborative programming problem solving.",
    src: "pairleet.png",
    year: 2026,
    stack: ["typescript", "nextjs", "mongodb", "clerk", "websockets"],
  },
  {
    name: "Orpheus",
    url: "https://orpheus-omega.vercel.app/",
    description: "Self-host your music jams, and collaboratively play music.",
    src: "orpheus.png",
    year: 2026,
    stack: ["rust", "nextjs", "typescript", "uploadthing"],
  },
  {
    name: "Synomia",
    url: "https://synomia.pages.dev/home",
    description: "Persistent free conversations, free — and built to expand.",
    src: "Synomia.png",
    year: 2026,
    stack: ["go", "nextjs", "typescript"],
  },
  {
    name: "SystemDraw",
    url: "https://systemdraw-topaz.vercel.app/",
    description:
      "Draw and simulate your systems, and check costs live — integrated with AWS & Azure.",
    src: "systemDraw.png",
    year: 2026,
    stack: ["nextjs", "typescript", "aws", "azure"],
  },
  {
    name: "Aizen",
    url: "https://github.com/seika-afk/Aizen",
    description:
      "A web-based AI image editor — uses FFmpeg and LLMs, kept simple.",
    src: "aizen.png",
    year: 2026,
    stack: ["typescript", "ffmpeg"],
  },
  {
    name: "Thyra",
    url: "https://github.com/seika-afk/Thyra",
    description: "A Rust-based distributed API gateway.",
    src: "thyra.png",
    year: 2026,
    stack: ["rust"],
  },
];

export default function ThirdPage() {
  return (
    <main className="bg-[#0F0F10] min-h-screen px-6 md:px-10 py-16 md:py-20">
      <div className="mb-12 md:mb-16">
        <p className="font-display font-medium tracking-tight m-0 text-[clamp(2rem,7vw,5rem)] text-[#F3ECE0]">
          Selected Work
        </p>
        <h1 className="font-mono text-[2vw] font-normal text-[#A39B8C]">
          I likes to Build, a lot. But recently I have learned to Keep them
          Presentable too :)
        </h1>
      </div>
      <div className="flex flex-col gap-4 md:gap-6">
        <Double projects={[projects[0], projects[1]]} reversed={false} />
        <Double projects={[projects[2], projects[3]]} reversed={true} />
        <Double projects={[projects[4], projects[5]]} reversed={false} />
      </div>
    </main>
  );
}
