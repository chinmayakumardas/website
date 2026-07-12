

"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { TextRoll } from "@/components/ui/text-roll";

export default function Header() {
  const [isWhite, setIsWhite] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const links = [
    { name: "ABOUT ME", id: "about" },
    { name: "RECENT WORKS", id: "recent-works" },
    { name: "SERVICES", id: "services" },
    { name: "CONNECT", id: "contact" },
  ];

  const whiteSections = ["about"];

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    closeMenu();
  };

  // Scroll-based header color
  useEffect(() => {
    const sectionIds = links.map((l) => l.id);

    const handleScrollEvent = () => {
      let current = "";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
        }
      });
      setIsWhite(whiteSections.includes(current));
    };

    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    handleScrollEvent();

    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  // GSAP Smooth Menu Animation
useEffect(() => {
  if (!menuRef.current || !overlayRef.current) return;

  const tl = gsap.timeline();

  if (isMobileMenuOpen) {
    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(menuRef.current, { y: 60, opacity: 0 });

    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.inOut",
    }).to(
      menuRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.15"
    );

    gsap.from(".menu-item", {
      opacity: 0,
      y: 50,
      stagger: 0.07,
      duration: 0.65,
      ease: "power3.out",
      delay: 0.25,
    });
  } else {
    tl.to(menuRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.45,
      ease: "power2.in",
    }).to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
      },
      "-=0.2"
    );
  }

  return () => {
    tl.kill();
  };
}, [isMobileMenuOpen]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div
        className={`mx-auto flex h-16 items-center justify-between px-6 md:h-20 md:px-10 transition-colors duration-500 ${
          isWhite ? "text-white" : "text-black"
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="group">
          <h1 className="text-xl font-black uppercase leading-[0.78] tracking-[-0.08em] sm:text-2xl lg:text-[2rem]">
            CHINMAYA
            <br />
            KUMAR
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-16 xl:gap-24 2xl:gap-28">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.id)}
              className="group flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.22em]"
            >
              <span className="opacity-60">[</span>
              <TextRoll className="inline-block">{link.name}</TextRoll>
              <span className="opacity-60">]</span>
            </button>
          ))}
        </nav>

        {/* DESKTOP CONTACT */}
        
<button
  onClick={() => handleScroll("contact")}
  className="hidden lg:inline-flex relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-primary text-secondary"
>
  <span className="relative z-10 transition-all duration-500 flex items-center">
    <TextRoll className="text-[13px] font-bold uppercase tracking-[0.22em]">
        CONTACT&nbsp;ME
    </TextRoll>
  </span>

  <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
    <ArrowUpRight size={16} />
  </span>
</button>
        {/* HAMBURGER */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 z-[200] relative"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={28} className={isWhite ? "text-white" : "text-black"} />
          ) : (
            <Menu size={28} className={isWhite ? "text-white" : "text-black"} />
          )}
        </button>
      </div>

      {/* MOBILE MENU - WHITE BACKGROUND */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black/60 z-[100] lg:hidden pointer-events-none ${
          isMobileMenuOpen ? "pointer-events-auto" : ""
        }`}
      />

      <div
        ref={menuRef}
        className={`fixed inset-0 z-[110] lg:hidden flex flex-col pt-24 px-8 bg-white text-black ${
          !isMobileMenuOpen && "hidden"
        }`}
      >
        <nav className="flex flex-col gap-10 text-4xl font-bold uppercase tracking-widest">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.id)}
              className="menu-item text-left hover:text-gray-600 active:text-black transition-colors py-3"
            >
              <TextRoll center>{link.name}</TextRoll>
            </button>
          ))}
        </nav>

       
        <div className="mt-auto pb-20">
  <button
    onClick={() => handleScroll("contact")}
    className="relative flex items-center text-sm font-medium rounded-full h-14 p-1 ps-7 pe-16 group transition-all duration-500 hover:ps-16 hover:pe-7 w-fit overflow-hidden cursor-pointer bg-primary text-secondary"
  >
    <span className="relative z-10 transition-all duration-500 flex items-center">
      <TextRoll className="text-[20px] font-bold uppercase tracking-[0.22em]">
        CONTACT&nbsp;ME
      </TextRoll>
    </span>

    <span className="absolute right-1 w-12 h-12 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-52px)] group-hover:rotate-45">
      <ArrowUpRight size={20} />
    </span>
  </button>
</div>
      </div>
    </header>
  );
}