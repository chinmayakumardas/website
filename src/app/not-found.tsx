
import Link from "next/link";

import Container from "@/components/layout/container";
import PageWrapper from "@/components/layout/page-wrapper";
import { ArrowUpLeft } from "lucide-react";

export default function NotFound() {
  return (
    <PageWrapper>
      <main className="relative flex min-h-screen items-center overflow-hidden ">
        {/* Decorative background */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-black leading-none tracking-tighter text-foreground/5"
        >
          <span className="text-[42vw] sm:text-[32vw] lg:text-[24rem]">
            404
          </span>
        </span>

        <Container>
          <section className="relative z-10 mx-auto max-w-xl py-24 text-center">
            <span className="inline-flex rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Error 404
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Page not found.
            </h1>

            <p className="mx-auto mt-5 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
              Sorry, the page you&apos;re looking for doesn&apos;t exist,
              may have been moved, or the URL is incorrect.
            </p>

            <div className="mt-10">
                 <Link
              href="/"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <ArrowUpLeft
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
              Back to home
            </Link>
             
            </div>
          </section>
        </Container>
      </main>
    </PageWrapper>
  );
}

