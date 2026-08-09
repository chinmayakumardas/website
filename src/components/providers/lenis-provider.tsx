"use client";

import { ReactLenis } from "lenis/react";

export function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        duration: 1.2,
      }}
    >
      {children}
    </ReactLenis>
  );
}