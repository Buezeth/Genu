"use client";

import { textAnimation, textSwitch } from "@/utils/animations";
import { useEffect } from "react";
import SpinText from "./SpinText";

const HeroText = ({
  textRef,
}: {
  textRef: React.ForwardedRef<HTMLInputElement>;
}) => {
  useEffect(() => {
    // textAnimation();
    // textSwitch()
  }, []);

  return (
    <div ref={textRef} className="pt-5 pb-20">
      <h1 className="text-center uppercase">
        <span className="font-bold">Because we believe</span>
        <br />
        <br />
        <SpinText />
        <span className=""></span>
        <span className="text text-[--primary-500] py-5 font-extrabold"></span>
        {/* <span className="cursor">_</span> */}
      </h1>
    </div>

  );
};

export default HeroText;
