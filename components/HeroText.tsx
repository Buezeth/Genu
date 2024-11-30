"use client";

import { textAnimation } from "@/utils/animations";
import { useEffect } from "react";

const HeroText = ({
  textRef,
}: {
  textRef: React.ForwardedRef<HTMLInputElement>;
}) => {
  useEffect(() => {
    textAnimation();
  }, []);

  return (
    <div ref={textRef} className="py-10">
      <h1 className="text-xl md:text-3xl text-center uppercase">
        <span className="font-bold">Because we believe</span>
        <br />
        <span className=""></span>
        <span className="text text-[--main-red] py-5 font-extrabold"></span>
        <span className="cursor">_</span>
      </h1>
    </div>
  );
};

export default HeroText;
