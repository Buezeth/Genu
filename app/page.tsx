import Footer from "@/components/Footer";

import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";

import NavBar from "@/components/NavBar";
import PageTransition from "@/components/PageTransition";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <NavBar />
      <PageTransition />
      <About />
      <Footer />
    </main>
  );
}
