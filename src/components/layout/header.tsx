"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const ctx = gsap.context(() => {
      const bar = header.querySelector("[data-header-bar]");
      const logo = header.querySelector("[data-header-logo]");
      const navItems = header.querySelectorAll("[data-header-nav]");
      const contactBtn = header.querySelector("[data-header-contact]");
      const hamburger = header.querySelector("[data-header-hamburger]");

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set([bar, logo, ...navItems, contactBtn, hamburger], {
          opacity: 1,
          clearProps: "all",
        });
        return;
      }

      // Initial states (softer & consistent)
      gsap.set(bar, {
        opacity: 0,
        y: -20,
      });

      gsap.set([logo, ...navItems, contactBtn, hamburger], {
        opacity: 0,
        y: -8,
      });

      // Smooth entrance
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(bar, {
        opacity: 1,
        y: 0,
        duration: 0.7,
      })
        .to(
          logo,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.45",
        )
        .to(
          navItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.07,
          },
          "-=0.4",
        )
        .to(
          contactBtn,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
          },
          "-=0.45", // starts almost together with the last nav items
        )
        .to(
          hamburger,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.4",
        );
    }, header);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%]"
    >
      <div
        data-header-bar
        className="w-full bg-background backdrop-blur-xl rounded-xl px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)]"
      >
        <div className="flex items-center justify-between gap-5">
          {/* Logo */}
          <Link
            href="/"
            data-header-logo
            className="flex items-center gap-2.5 text-[16px] font-semibold text-neutral-900 tracking-tight whitespace-nowrap"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-900">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 12L2 9v8l10 5 10-5V9l-10 5z" />
              </svg>
            </div>
            Chinmaya
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5">
            <Link
              href="/about"
              data-header-nav
              className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
            >
              About
            </Link>

            <Link
              href="/work"
              data-header-nav
              className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
            >
              Work
            </Link>

            <Link
              href="/case-studies"
              data-header-nav
              className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
            >
              Case Studies
            </Link>
          </nav>

          {/* Desktop Contact Button */}
          <Link
            href="/contact"
            data-header-contact
            className="group hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/90 md:inline-flex"
          >
            Get in Touch
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </Link>

          {/* Mobile Hamburger */}
          <button
            data-header-hamburger
            onClick={() => setOpen(!open)}
            className="md:hidden flex h-9 w-9 items-center justify-center text-neutral-900"
            aria-label="Toggle menu"
          >
            <div className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-[5px]"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-[5px]"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pb-2">
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold text-neutral-700 rounded-lg hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
            >
              About
            </Link>

            <Link
              href="/work"
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold text-neutral-700 rounded-lg hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
            >
              Work
            </Link>

            <Link
              href="/case-studies"
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold text-neutral-700 rounded-lg hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
            >
              Case Studies
            </Link>

            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/90 active:translate-y-0"
            >
              Get in Touch
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
