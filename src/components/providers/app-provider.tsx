
// components/providers/app-provider.tsx

"use client";

import type { ReactNode } from "react";
import { LenisProvider } from "./lenis-provider";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <LenisProvider>
      {children}
    </LenisProvider>
  );
}

