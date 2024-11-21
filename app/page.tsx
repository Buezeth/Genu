import LogoAnimation from "@/components/LogoAnimation";
import HeroText from "@/components/HeroText";
import LogoName from "@/components/LogoName";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section className="home flex flex-col justify-center items-center">
      <LogoAnimation />
      <LogoName />
      <HeroText />
      <Footer />
    </section>
  );
}
