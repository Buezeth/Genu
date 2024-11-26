"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import LogoAnimation from "./LogoAnimation";
import LogoName from "./LogoName";
import HeroText from "./HeroText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLInputElement>(null);
  const logoRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // gsap.to(container.current, { y: 300 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "53% 50%",
        // markers: true,
        scrub: true,
      },
    });

    // tl.to(containerRef.current, { y: 200, scale: 1.2 });
    tl.to(logoRef.current, { y: 200, scale: 1.2 }, "a");
    tl.to(imageRef.current, { y: 250 }, "a");
    tl.to(textRef.current, { y: 250 }, "a");
    // tl.to(imageRef.current, { y: -10 });
  });

  return (
    <section
      ref={containerRef}
      className="flex flex-col justify-center items-center h-screen"
    >
      <div>
        <LogoAnimation logoRef={logoRef} />
      </div>
      <LogoName imageRef={imageRef} />
      <HeroText textRef={textRef} />
    </section>
  );
};

export default Hero;
