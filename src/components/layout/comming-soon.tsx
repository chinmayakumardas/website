import Link from "next/link";
import Container from "@/components/layout/container";
import PageWrapper from "@/components/layout/page-wrapper";
import { ArrowUpLeft } from "lucide-react";

export default function ComingSoon() {
  return (
    <PageWrapper>
      <main className="relative  flex items-center min-h-screen  overflow-hidden ">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted/30 blur-3xl" />
        </div>

        <Container>
          <section className="relative z-10 mx-auto max-w-xl py-24 text-center">
            <span className="inline-flex rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Coming Soon
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Something new is coming.
            </h1>

            <p className="mx-auto mt-5 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
              This page is currently being worked on. Check back soon for
              something new.
            </p>

            <div className="mt-10">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <ArrowUpLeft
                  className="size-4 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
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

