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
  // const animateNav = (self: any) => {

  // };
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
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      },
    });
  });
  return (
    <div className=" navbar fixed flex justify-between w-screen pt-4 z-10">
      <div className="md:flex  pl-12 hover:scale-110 transition-all hidden justify-center items-center">
        <Link href={"/"}>
          <Image
            src={"/Genu-logo.png"}
            alt="Home Logo"
            width={150}
            height={50}
          />
        </Link>
      </div>
      <div className=" md:hidden pl-2 transition-all flex justify-center items-center shadow-black">
        <Link href={"/"}>
          <Image src={"/Genulogo.png"} alt="Home Logo" width={30} height={30} />
        </Link>
      </div>
      <div
        ref={containerRef}
        className="w-[500px] text-primary-500  font-outline font-bold pr-3 text-l"
      >
        <ul className="hidden md:flex justify-evenly">
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
