import MainPage from "@/components/mainPage";
import ScrollText from "@/components/ScrollText/ScrollText";
import SecondPage from "@/components/SecondPage/SecondPage";
import ThirdPage from "@/components/ThirdPage/ThirdPage";
import OpenSourceCont from "@/components/OpenSourceCont/OpenSourceCont";
export default function Home() {
  return (
    <div className="bg-[#0f0f10]">
      <MainPage />
      <SecondPage />
      <ThirdPage />
      <ScrollText />
      <OpenSourceCont />
    </div>
  );
}
