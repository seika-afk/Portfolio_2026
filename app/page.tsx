import MainPage from "@/components/mainPage";
import ScrollText from "@/components/ScrollText/ScrollText";
import SecondPage from "@/components/SecondPage/SecondPage";
import ThirdPage from "@/components/ThirdPage/ThirdPage";
import OpenSourceCont from "@/components/OpenSourceCont/OpenSourceCont";
import Footer from "@/components/footer/footer";
import FadeInUp from "@/components/FadeInUp";

export default function Home() {
  return (
    <div className="bg-[#0f0f10]">
      <FadeInUp>
        <MainPage />
      </FadeInUp>
      <div id="services" className="scroll-mt-28 md:scroll-mt-36">
        <FadeInUp delay={0.08}>
          <SecondPage />
        </FadeInUp>
      </div>
      <div id="projects" className="scroll-mt-28 md:scroll-mt-36">
        <FadeInUp delay={0.12}>
          <ThirdPage />
        </FadeInUp>
      </div>
      <FadeInUp delay={0.08}>
        <ScrollText />
      </FadeInUp>
      <OpenSourceCont />
      <div id="contact" className="scroll-mt-28 md:scroll-mt-36">
        <FadeInUp delay={0.1}>
          <Footer />
        </FadeInUp>
      </div>
    </div>
  );
}
