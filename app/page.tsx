import Footer from "@/components/Footer";

import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";

import NavBar from "@/components/NavBar";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <SmoothScrollWrapper>
      <NavBar />
      <PageTransition />
      <Footer />
    </SmoothScrollWrapper>
  );
}
