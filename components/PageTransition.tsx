import React from "react";
import Hero from "@/components/Hero";

const PageTransition = () => {
  return (
    <div>
      <section className="flex flex-col justify-center items-center h-screen">
        <Hero />
      </section>
      <section className="h-screen"></section>
    </div>
  );
};

export default PageTransition;
