"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

const navigationItems = [
  {
    name: "Web Design",
    href: "#",
    description: "[01]",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
  },
  {
    name: "UI/UX Design",
    href: "#",
    description: "[02]",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80",
  },
  {
    name: "Web Development",
    href: "#",
    description: "[03]",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80",
  },
  {
    name: "Brand Identity",
    href: "#",
    description: "[04]",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&q=80",
  },
  {
    name: "Landing Pages",
    href: "#",
    description: "[05]",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
  {
    name: "3D & Motion Design",
    href: "#",
    description: "[06]",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
  },
];
export const Services = () => {
  return (
    <section id="services" className="bs flex min-h-screen w-full flex-1 flex-col items-center justify-center gap-1.5 rounded-2xl px-7 py-3 backdrop-blur-sm">
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
