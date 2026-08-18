"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import type { ReactNode } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 0.9
      }}
    >
      {children}
    </ReactLenis>
  );
}
