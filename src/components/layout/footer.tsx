


"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "ABOUT ME", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "WORKS", href: "/works" },
];

const socials = [
  { label: "INSTAGRAM", href: "https://instagram.com/builtbychinmay" },
  { label: "YOUTUBE", href: "https://www.youtube.com/@builtbychinmay" },
  { label: "FACEBOOK", href: "https://facebook.com/builtbychinmay" },
];

const footerLinks = [
  { label: "BEHANCE", href: "https://behance.net/chinmaykumard" },
  { label: "GITHUB", href: "https://github.com/chinmayakumardas" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/chinmayakumardas2" },
];

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade", {
        opacity: 0,
        y: 20,
        stagger: 0.06,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".big", {
        opacity: 0,
        y: 80,
        duration: 1.4,
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={containerRef}
      id="connect"
      className="relative min-h-screen w-full overflow-hidden px-6 text-[#111] md:px-10"
    >
      <div className="flex min-h-screen flex-col justify-between py-20 ">
        {/* ── Top Row ── */}
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Nav Links */}
          <nav className="space-y-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#111]">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="fade group relative flex w-fit items-center gap-1.5"
              >
                <span className="transition-colors group-hover:text-[#555]">
                  {item.label}
                </span>
                <ArrowUpRight
                  size={12}
                  strokeWidth={2.2}
                  className="translate-x-0 translate-y-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#111] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Contact Block */}
          <div className="flex flex-col gap-5 md:items-end md:text-right">
{/* Phone */}
<Link
  href="tel:+916370073215"
  className="fade inline-flex items-center gap-4 text-2xl font-bold tracking-tight text-[#111] md:text-3xl"
>
 

  <span className="group relative inline-flex w-fit items-center gap-2">
    <span>+91 6370073215</span>

  

    <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
  </span>
</Link>

{/* Email */}
<Link
  href="mailto:chinmayakumardas2000@gmail.com"
  className="fade inline-flex items-center gap-4 text-2xl font-bold tracking-tight text-[#111] md:text-3xl"
>
 

  <span className="group relative inline-flex w-fit items-center gap-2">
    <span className="break-all">
      chinmayakumardas2000@gmail.com
    </span>

  
    <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
  </span>
</Link>

            {/* Socials */}
           <div className="fade flex flex-wrap gap-6 pt-2 text-[10px] font-semibold uppercase tracking-[0.28em] md:justify-end">
  {socials.map((item) => (
    <Link
      key={item.label}
      href={item.href}
      target="_blank"
      className="group relative inline-flex items-center gap-1 text-[#555] transition-colors duration-300 hover:text-[#111]"
    >
      <span>{item.label}</span>

      <ArrowUpRight
        size={11}
        strokeWidth={2.2}
        className="translate-x-0 translate-y-0 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
      />

      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#111] transition-all duration-300 group-hover:w-full" />
    </Link>
  ))}
</div>

            {/* Address */}
           <div className="fade pt-3 md:text-right">
  <div className="inline-flex items-center gap-1 font-bold text-sm text-black">
    <MapPin
      size={15}
      strokeWidth={1.8}
      className="text-neutral-500"
    />
    <span>Address</span>
  </div>

  <p className="mt-1 text-sm leading-relaxed text-neutral-500">
    14 Kiit Square Patia
    <br />
    Bhubaneswar, Odisha, India
  </p>
</div>
          </div>
        </div>

        {/* ── Bottom Block ── */}
        <div className="flex flex-col gap-8">
          {/* Portfolio Links */}
         
<div className="fade flex flex-wrap items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#888]">
  {footerLinks.map((item, i) => (
    <span key={item.label} className="inline-flex items-center gap-1">
      <span className="text-black/60">[</span>

      <Link
        href={item.href}
        target="_blank"
        className="group relative inline-flex items-center gap-1 transition-colors hover:text-[#111]"
      >
        <span>{item.label}</span>

        <ArrowUpRight
          size={10}
          strokeWidth={2.2}
          className="translate-x-0 translate-y-0 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
        />

        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#111] transition-all duration-300 group-hover:w-full" />
      </Link>

      <span className="text-black/60">]</span>

      {i < footerLinks.length - 1 && (
        <span className="mx-1 text-[#ddd]">·</span>
      )}
    </span>
  ))}
</div>
          {/* Big Name */}
          <h1
            style={{ fontSize: "clamp(2.5rem, 10vw, 10rem)" }}
            className="big whitespace-nowrap font-bold leading-none tracking-tight text-[#111]"
          >
            CHINMAYA KUMAR
          </h1>

          {/* Bottom Bar */}
          <div className="fade flex flex-col items-start justify-between gap-2  text-[10px] uppercase tracking-[0.25em] text-[#aaa] md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} </p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}