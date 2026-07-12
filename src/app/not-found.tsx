import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      {/* Background */}
      <span className="pointer-events-none absolute inset-0 flex select-none items-center justify-center text-[40vw] font-black leading-none text-foreground/5">
        404
      </span>

      <div className="relative z-10 max-w-xl">
        <span className="inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Error 404
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
          Sorry, the page you&apos;re looking for doesn&apos;t exist, may have been moved,
          or the URL is incorrect.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-colors hover:opacity-90"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}