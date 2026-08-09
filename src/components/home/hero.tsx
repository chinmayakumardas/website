"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import Container from "@/components/layout/container";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLSpanElement>(null);
  const imageInnerRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const ctx = gsap.context(() => {
      const eyebrow = hero.querySelector("[data-hero-eyebrow]");
      const heading = hero.querySelector("[data-hero-heading]");
      const headingLines = hero.querySelectorAll("[data-hero-title-line]");
      const image = imageRef.current;
      const imageInner = imageInnerRef.current;
      const floatingLabels = hero.querySelectorAll("[data-floating-label]");
      const description = hero.querySelector("[data-hero-description]");
      const button = hero.querySelector("[data-hero-button]");

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      /*
       * Reduced motion
       */
      if (reduceMotion) {
        gsap.set(
          [
            eyebrow,
            heading,
            ...headingLines,
            image,
            ...floatingLabels,
            description,
            button,
          ],
          {
            opacity: 1,
            clearProps: "all",
          },
        );

        return;
      }

      /*
       * Initial states
       */
      gsap.set(eyebrow, {
        opacity: 0,
        y: 18,
      });

      gsap.set(heading, {
        opacity: 0,
        y: 35,
        scale: 0.97,
      });

      gsap.set(headingLines, {
        opacity: 0,
        y: 34,
        filter: "blur(5px)",
      });

      gsap.set(image, {
        opacity: 0,
        scale: 0.65,
        rotate: 18,
        y: 20,
      });

      gsap.set(floatingLabels, {
        opacity: 0,
        scale: 0.85,
      });

      gsap.set(description, {
        opacity: 0,
        y: 20,
      });

      gsap.set(button, {
        opacity: 0,
        y: 18,
      });

      /*
       * Premium loading animation
       */
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(eyebrow, {
        opacity: 1,
        y: 0,
        duration: 0.7,
      })
        .to(
          heading,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: "power4.out",
          },
          "-=0.35",
        )
        .to(
          headingLines,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.14,
          },
          "-=0.7",
        )
        .to(
          image,
          {
            opacity: 1,
            scale: 1,
            rotate: 8,
            y: 0,
            duration: 0.9,
            ease: "back.out(1.7)",
          },
          "-=0.8",
        )
        .to(
          floatingLabels,
          {
            opacity: 1,
            scale: 1,
            duration: 0.65,
            stagger: 0.12,
            ease: "back.out(1.5)",
          },
          "-=0.65",
        )
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.35",
        )
        .to(
          button,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.4",
        );

      /*
       * Image hover animation
       *
       * No continuous animation.
       * Everything happens only while hovering.
       */
      if (image) {
        const handleMouseEnter = () => {
          gsap.killTweensOf(image);
          gsap.killTweensOf(imageInner);

          gsap.to(image, {
            scale: 1.06,
            rotate: 2,
            y: -3,
            duration: 0.45,
            ease: "power3.out",
            overwrite: true,
          });

          if (imageInner) {
            gsap.to(imageInner, {
              scale: 1.05,
              duration: 0.5,
              ease: "power3.out",
              overwrite: true,
            });
          }
        };

        const handleMouseLeave = () => {
          gsap.killTweensOf(image);
          gsap.killTweensOf(imageInner);

          gsap.to(image, {
            scale: 1,
            rotate: 8,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            overwrite: true,
          });

          if (imageInner) {
            gsap.to(imageInner, {
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
              overwrite: true,
            });
          }
        };

        image.addEventListener("mouseenter", handleMouseEnter);
        image.addEventListener("mouseleave", handleMouseLeave);

        /*
         * Cleanup hover listeners
         */
        return () => {
          image.removeEventListener("mouseenter", handleMouseEnter);

          image.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100svh] items-center overflow-visible py-8 sm:py-16 lg:py-24"
    >
      <Container className="overflow-visible">
        <div className="mx-auto w-full max-w-7xl">
          {/* Eyebrow */}
          <div data-hero-eyebrow className="mb-7 flex justify-center sm:mb-9">
            <div className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.22em] text-muted-foreground sm:text-[10px] md:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              Frontend Developer • Freelance
            </div>
          </div>

          {/* Hero composition */}
          <div className="relative mx-auto w-full max-w-6xl overflow-visible">
            {/* Left floating label */}
            <div
              data-floating-label
              className="
                absolute
                left-[1%]
                top-[25%]
                z-10
                hidden
                -rotate-6
                rounded-full
                border
                border-border
                bg-background/95
                px-4
                py-2
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]
                shadow-sm
                backdrop-blur
                md:block
                xl:left-[3%]
              "
            >
              Conversion UI
            </div>

            {/* Right floating label */}
            <div
              data-floating-label
              className="
                absolute
                right-[1%]
                top-[16%]
                z-10
                hidden
                rotate-3
                rounded-full
                bg-foreground
                px-4
                py-2
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-background
                shadow-sm
                backdrop-blur
                md:block
                xl:right-[3%]
              "
            >
              Product Builds
            </div>

            {/* New floating label: strategy */}
            <div
              data-floating-label
              className="
                absolute
                left-[4%]
                top-[58%]
                z-10
                hidden
                -rotate-1
                rounded-full
                border
                border-border
                bg-background/95
                px-4
                py-2
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]
                shadow-sm
                backdrop-blur
                lg:block
                xl:left-[6%]
              "
            >
              UI Systems
            </div>

            {/* New floating label: delivery */}
            <div
              data-floating-label
              className="
                absolute
                right-[4%]
                bottom-[18%]
                z-10
                hidden
                rotate-2
                rounded-full
                border
                border-border
                bg-background/95
                px-4
                py-2
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]
                shadow-sm
                backdrop-blur
                lg:block
                xl:right-[6%]
              "
            >
              API + Motion
            </div>

            {/* Main heading */}
            <h1
              data-hero-heading
              className="
                mx-auto
                w-full
                max-w-5xl
                text-center
                text-[clamp(2.35rem,11vw,6.5rem)]
                font-semibold
                leading-[0.88]
                tracking-[-0.07em]
                text-foreground
                sm:text-[clamp(3.5rem,8vw,6.5rem)]
                md:text-[clamp(3.7rem,7vw,6rem)]
              "
            >
              <span data-hero-title-line className="block">
                I BUILD
              </span>

              <span
                data-hero-title-line
                className="block inline-flex items-center justify-center gap-[0.12em]"
              >
                {/* Portrait */}
                <span
                  ref={imageRef}
                  data-hero-image
                  className="
                    relative
                    inline-block
                    h-[0.78em]
                    w-[0.65em]
                    shrink-0
                    translate-y-[0.02em]
                    rotate-[8deg]
                    overflow-hidden
                    rounded-[0.18em]
                    bg-black
                    shadow-[0_12px_30px_rgba(0,0,0,0.14)]
                    transition-shadow
                    duration-500
                    hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)]
                  "
                >
                  <span
                    ref={imageInnerRef}
                    data-hero-image-inner
                    className="
                      absolute
                      inset-0
                      block
                      transition-transform
                      duration-500
                      ease-out
                    "
                  >
                    <Image
                      src="/images/profile.png"
                      alt="Chinmaya"
                      fill
                      priority
                      className="
                        object-cover
                        grayscale
                        transition-all
                        duration-500
                        ease-out
                        hover:grayscale-0
                        hover:scale-105
                      "
                      sizes="(max-width: 640px) 45px, (max-width: 1024px) 60px, 80px"
                    />
                  </span>
                </span>

                <span className="text-muted-foreground">DIGITAL</span>
              </span>

              <span data-hero-title-line className="block">
                EXPERIENCES.
              </span>
            </h1>

            {/* Lower floating label */}
            <div
              data-floating-label
              className="
                absolute
                bottom-[-22px]
                left-[6%]
                z-10
                hidden
                -rotate-3
                rounded-full
                border
                border-border
                bg-background/95
                px-4
                py-2
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-muted-foreground
                shadow-sm
                backdrop-blur
                md:block
                lg:left-[9%]
              "
            >
              Speed & Clarity
            </div>
          </div>

          {/* Description */}
          <div
            data-hero-description
            className="mx-auto mt-12 w-full max-w-xl px-4 text-center sm:mt-14 sm:px-0"
          >
            <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7 md:text-lg md:leading-8">
              I design fast, polished front-end experiences that help your offer
              feel clearer, more trusted, and easier to act on.
            </p>
          </div>

          {/* CTA */}
          <div data-hero-button className="mt-7 flex justify-center sm:mt-8">
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Plan your launch
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
