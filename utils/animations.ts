import { gsap } from "gsap";

import { RoughEase } from "gsap/EasePack";

import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin, RoughEase);

const words = ["Improvement is always possible", "in African potential"];

export const textAnimation = () => {
    let cursor = gsap.to(".cursor", {
        opacity: 0,
        ease: "power2.inOut",
        repeat: -1,
    });

    let masterTl = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
        let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 4 });
        // tl.to(".text", { duration: 2, text: word });
        tl.from(".text", { duration: 2, x: 10});
        tl.to(".text", { duration: 2, x: -10})
        masterTl.add(tl);
  });

}
export const textSwitch = () => {
    var vsOpts = {
        slides: document.querySelectorAll('.v-slide'),
        list: document.querySelector('.v-slides'),
        duration: 0.3,
        lineHeight: 50
      }
      
      var vSlide = gsap.timeline({
        paused: true,
        repeat: -1
      });
      
      words.forEach((word, i) => {
        // Move each letter
        let tween = gsap.to(".text", {
          duration:2,
        //   opacity: 0,
          y: i * -1 * vsOpts.lineHeight,
          text: word
        //   repeat: 1,
        //   yoyo: true,
        //   repeatDelay: 1,
        });
      
        vSlide.add(tween);
      })
      vSlide.play();
}