

import type { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="flex-1 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}