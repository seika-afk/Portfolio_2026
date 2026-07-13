const FillButton = () => (
  <button className="relative overflow-hidden rounded-full px-9 py-3.5 bg-[#F3F3F1] text-[#1a1a1a] text-sm font-medium tracking-wide group">
    <span className="absolute inset-0 bg-[#A8E024] translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0" />
    <span className="relative z-10">OUR WORK</span>
  </button>
);

export default FillButton;
