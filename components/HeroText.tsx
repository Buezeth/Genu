"use client";

import { textAnimation } from "@/utils/animations";
import { useEffect } from "react";

const HeroText = () => {
  useEffect(() => {
    textAnimation();
  }, []);

  return (
    <div>
      <div className="animated-text p-5">
        <h1 className="text-2xl">
          Because we believe <span className="hi"></span>
          <span className="text"></span>
          <span className="cursor">_</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroText;
