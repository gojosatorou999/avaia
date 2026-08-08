"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMission() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!textRef.current || !containerRef.current) return;

      const split = new SplitType(textRef.current, { types: "lines,words,chars" });

      gsap.set(split.words, { overflow: "hidden" });
      gsap.set(split.chars, { y: "100%" });

      gsap.to(split.chars, {
        y: "0%",
        stagger: 0.015,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      return () => {
        split.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-zinc-950 px-6 py-20 md:px-12"
      aria-labelledby="mission-title"
    >
      <div className="mx-auto flex min-h-screen max-w-5xl items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">About / Mission</p>
          <h2
            ref={textRef}
            id="mission-title"
            className="text-5xl font-semibold leading-tight tracking-tight text-zinc-50 md:text-7xl"
          >
            We design meaningful systems that transform compassion into measurable impact.
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
            This section is built for premium scroll storytelling, with each character revealing in sequence to create a calm, cinematic narrative rhythm.
          </p>
        </div>
      </div>
    </section>
  );
}
