



"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

const navigationItems = [
  {
    name: "Web Design",
    href: "#",
   
  },
  {
    name: "UI/UX Design",
    href: "#",
   
  },
  {
    name: "Web Development",
   
  },
  {
    name: "Brand Identity",
    href: "#",
   
  },
  {
    name: "Landing Pages",
    href: "#",
    
  },
  {
    name: "3D & Motion Design",
    href: "#",
    
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="bs flex min-h-screen w-full flex-1 flex-col items-center justify-center gap-1.5 rounded-2xl px-7  backdrop-blur-sm"
    >
      {/* Heading */}
      <div className="min-h-[22vh] flex items-center justify-center">
        <h1 className="text-black font-semibold tracking-[-0.05em] text-[13vw] md:text-[9vw] lg:text-[6vw] leading-none">
          RECENT WORKS
        </h1>
      </div>

      {navigationItems.map((item, index) => (
        <li
          className="relative flex cursor-pointer flex-col items-center overflow-visible"
          key={index}
        >
          <div className="relative flex items-start">
            <TextRoll
              center
              className="text-4xl font-extrabold uppercase leading-[0.8] tracking-[-0.03em] transition-colors lg:text-6xl"
            >
              {item.name}
            </TextRoll>
          </div>
        </li>
      ))}
    </section>
  );
};

const STAGGER = 0.035;

const TextRoll: React.FC<{
  children: string;
  className?: string;
  center?: boolean;
}> = ({ children, className, center = false }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn("relative block overflow-hidden", className)}
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
};

export { TextRoll };