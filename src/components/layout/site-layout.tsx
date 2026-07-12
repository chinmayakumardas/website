import type { ReactNode } from "react";
import  Header  from "./header";
import Footer  from "./footer";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </>
  );
}