import React from "react";
import Hero from "@/components/Hero";
import SmoothScrollWrapper from "./SmoothScrollWrapper";

const PageTransition = () => {
  return (
    <SmoothScrollWrapper>
      <section className="flex flex-col justify-center items-center h-screen">
        <Hero />
      </section>
      {/* <section className="h-dvh"></section> */}
    </SmoothScrollWrapper>
  );
};

export default PageTransition;
