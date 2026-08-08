"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroTextRef.current) return;

    gsap.fromTo(
      heroTextRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="min-h-screen px-6 py-20 md:px-12" aria-labelledby="hero-title">
      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-between gap-12 rounded-3xl border border-charcoal/10 bg-ivory/40 p-10">
        <div className="h-52 rounded-2xl border border-dashed border-charcoal/20 bg-white/40 p-4 text-sm text-charcoal/60 md:h-80">
          3D Spline scene placeholder
        </div>

        <div ref={heroTextRef} className="space-y-5 opacity-0">
          <p className="text-sm uppercase tracking-[0.2em] text-charcoal/60">Avaia Foundation</p>
          <h1 id="hero-title" className="text-5xl font-semibold leading-tight text-jet md:text-7xl">
            Designing impact through modern organic storytelling.
          </h1>
          <p className="max-w-2xl text-base text-charcoal/75 md:text-lg">
            Giant kinetic typography and immersive narrative placeholder.
          </p>
        </div>
      </div>
    </section>
  );
}
