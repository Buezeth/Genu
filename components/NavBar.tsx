"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const showAnim = gsap
      .from(containerRef.current, {
        yPercent: -200,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      //   markers: true,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  });
  return (
    <div className=" navbar fixed flex justify-between w-screen pt-4">
      <div className="pl-12 hover:scale-110 transition-all flex justify-center items-center">
        <Link href={"/"}>
          <Image
            src={"/Genu-logo.png"}
            alt="Home Logo"
            width={150}
            height={50}
          />
        </Link>
      </div>
      <div
        ref={containerRef}
        className="w-[500px] text-[#a81c1c] font-bold pr-3 text-l"
      >
        <ul className="flex justify-evenly">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Work</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
