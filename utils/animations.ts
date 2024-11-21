import { gsap } from "gsap";

import { RoughEase } from "gsap/EasePack";

import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin, RoughEase);
export const textAnimation = () => {
    const words = ["Improvement is always possible", "in African potential"];
    let cursor = gsap.to(".cursor", {
        opacity: 0,
        ease: "power2.inOut",
        repeat: -1,
    });

    let masterTl = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
        let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 4 });
        tl.to(".text", { duration: 2, text: word });
        masterTl.add(tl);
  });
}