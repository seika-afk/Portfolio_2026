import Content from "@/components/footer/content";

export default function Footer() {
  return (
    <div
      className="relative h-[760px] bg-black text-[#F3ECE0]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+760px)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-760px)] h-[760px]">
          <footer className="relative isolate h-full overflow-hidden bg-black">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
            <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 py-8 md:px-12 lg:px-16">
              <Content />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
