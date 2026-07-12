
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Business Landing Page for SaaS Startup",
    image:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1200&q=80",
  },
  {
    title: "E-commerce Website (Next.js + Stripe)",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80",
  },
  {
    title: "Portfolio Website for UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&q=80",
  },
  {
    title: "Real Estate Listing Platform UI",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
  },
  {
    title: "Admin Dashboard for Analytics System",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },
  {
    title: "Restaurant Website with Online Menu System",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const addRef = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".p-title", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".p-year", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
      });

      // Grid animation
      gsap.from(itemsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      // Hover zoom
      itemsRef.current.forEach((el) => {
        const img = el.querySelector("img");

        el.addEventListener("mouseenter", () => {
          gsap.to(img, {
            scale: 1.05,
            duration: 0.6,
            ease: "power3.out",
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(img, {
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} >
    {/* NEXT SECTION HEADER */}
      <div className="bg-black min-h-[30vh] flex items-center justify-center">
        <h2 className="text-[10vw] md:text-[10vw] font-black uppercase tracking-[-0.06em] text-white leading-none">
          RECENT WORKS
        </h2>
      </div>
   <div className="mx-auto px-4 lg:px-10 py-10 ">

  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((item, i) => (
            <div
              key={i}
              ref={addRef}
              className="group cursor-pointer"
            >
              {/* IMAGE */}
              <div className="overflow-hidden w-full aspect-[4/3] bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TITLE */}
              <h3 className="mt-3 text-sm md:text-base text-black">
                {item.title}
              </h3>
            </div>
          ))}

        </div>
   </div>
      
    </section>
  );
}


