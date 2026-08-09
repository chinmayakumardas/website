// components/Footer.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Heart } from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaBehance,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import Container from "@/components/layout/container";
import { quickLinks, legalLinks, socials } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const BRAND_NAME = "Chinmaya";

// Map social label -> react-icons component
// Lookup is normalized (lowercase, trimmed) so exact-casing in @/constants
// no longer matters — this is what was silently breaking the icons before.
const socialIcons: Record<string, IconType> = {
  instagram: FaInstagram,
  youtube: FaYoutube,
  facebook: FaFacebook,
  behance: FaBehance,
  github: FaGithub,
  linkedin: FaLinkedin,
};

function getSocialIcon(label: string): IconType | undefined {
  return socialIcons[label.trim().toLowerCase()];
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const columns = gsap.utils.toArray<HTMLElement>("[data-footer-col]");
      const socialButtons =
        gsap.utils.toArray<HTMLElement>("[data-social-btn]");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(columns, {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
      })
        .from(
          socialButtons,
          {
            y: 12,
            opacity: 0,
            scale: 0.9,
            duration: 0.4,
            stagger: 0.06,
          },
          "-=0.3",
        )
        .from(
          "[data-footer-wordmark]",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.2",
        );
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden border-t border-border bg-background"
    >
      <Container className="pb-10 pt-14 sm:pt-16 md:pb-14 md:pt-20">
        {/* Main grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div data-footer-col className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-semibold tracking-tight text-foreground"
            >
              {BRAND_NAME}
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Designer and developer creating thoughtful digital experiences for
              the modern web.
            </p>

            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Let&apos;s work together
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>

          {/* Menu */}
          <nav data-footer-col aria-label="Footer menu">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
              MENU
            </h3>
            <ul className="mt-5 flex flex-col items-start gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav data-footer-col aria-label="Legal links">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
              LEGAL
            </h3>
            <ul className="mt-5 flex flex-col items-start gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <nav data-footer-col aria-label="Social links">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
              SOCIAL
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {socials.map((social) => {
                const Icon = getSocialIcon(social.label);
                return (
                  <li key={social.label}>
                    <a
                      data-social-btn
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="flex size-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                    >
                      {Icon ? (
                        <Icon className="size-[17px]" aria-hidden="true" />
                      ) : (
                        <span className="text-xs font-medium">
                          {social.label.slice(0, 2)}
                        </span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col-reverse items-center gap-4 border-t border-border pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Built with
            <Heart
              className="size-3.5 fill-red-500 text-red-500"
              aria-hidden="true"
            />
            by
            <span className="font-medium text-foreground">{BRAND_NAME}</span>
          </p>
        </div>
      </Container>

      {/* Oversized wordmark */}
      <div
        data-footer-wordmark
        aria-hidden="true"
        className="pointer-events-none relative select-none overflow-hidden leading-none"
      >
        <span
          className="block w-full translate-y-[28%] whitespace-nowrap text-center font-bold text-foreground/[0.12]"
          style={{
            fontSize: "clamp(3.5rem, 18vw, 16rem)",
            letterSpacing: "-0.03em",
          }}
        >
          {BRAND_NAME}
        </span>
      </div>
    </footer>
  );
}
