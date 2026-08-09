


"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import gsap from "gsap";
import { AlertCircle, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import Container from "@/components/layout/container";

/* -------------------------------------------------------------------------- */
/*  Validation                                                                */
/* -------------------------------------------------------------------------- */

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long")
    .regex(/^[\p{L}\s'.-]+$/u, "Name contains invalid characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(254, "Email is too long")
    .email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .max(20, "Phone number is too long")
    .regex(/^[\d\s+()-]+$/, "Enter a valid phone number")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long (max 2000 characters)"),
  company: z.string().max(0).optional(), // honeypot
});

type ContactFormValues = z.infer<typeof contactSchema>;
type SubmitState = "idle" | "loading" | "success" | "error";

const SUCCESS_DURATION = 3000;

const DEFAULT_VALUES: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  company: "",
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export default function ContactForm() {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  /* Intro animation -------------------------------------------------------- */
  useLayoutEffect(() => {
    const section = wrapperRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const badge = section.querySelector("[data-contact-badge]");
      const heading = section.querySelector("[data-contact-heading]");
      const headingLines = section.querySelectorAll("[data-contact-heading-line]");
      const intro = section.querySelector("[data-contact-intro]");
      const meta = section.querySelector("[data-contact-meta]");
      const card = section.querySelector("[data-contact-card]");
      const fields = section.querySelectorAll("[data-contact-field]");

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      /*
       * Reduced motion
       */
      if (reduceMotion) {
        gsap.set(
          [badge, heading, ...Array.from(headingLines), intro, card, meta, ...Array.from(fields)],
          { opacity: 1, clearProps: "all" },
        );
        return;
      }

      /*
       * Initial states
       */
      gsap.set(badge, { opacity: 0, y: 18 });

      gsap.set(heading, { opacity: 0, y: 35, scale: 0.97 });

      gsap.set(headingLines, { opacity: 0, y: 34, filter: "blur(5px)" });

      gsap.set(intro, { opacity: 0, y: 24 });

      gsap.set(card, { opacity: 0, scale: 0.65, rotate: 18, y: 20 });

      gsap.set(meta, { opacity: 0, y: 20 });

      gsap.set(fields, { opacity: 0, scale: 0.85 });

      /*
       * Premium loading animation — same rhythm as Hero
       */
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(badge, {
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
          intro,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.6",
        )
        .to(
          card,
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            duration: 0.9,
            ease: "back.out(1.7)",
          },
          "-=0.5",
        )
        .to(
          meta,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.6",
        )
        .to(
          fields,
          {
            opacity: 1,
            scale: 1,
            duration: 0.65,
            stagger: 0.12,
            ease: "back.out(1.5)",
          },
          "-=0.4",
        );
    }, section);

    return () => ctx.revert();
  }, []);

  /* Card content transition on state change --------------------------------- */
  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    gsap.fromTo(card, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" });
  }, [submitState]);

  /* Success countdown bar + auto-reset --------------------------------------- */
  useLayoutEffect(() => {
    if (submitState !== "success") return;

    const bar = progressRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (bar && !reduceMotion) {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        { scaleX: 1, duration: SUCCESS_DURATION / 1000, ease: "none", transformOrigin: "left" }
      );
    }

    successTimerRef.current = setTimeout(() => {
      setSubmitState("idle");
      setErrorMessage("");
      reset(DEFAULT_VALUES);
    }, SUCCESS_DURATION);

    return () => {
      if (successTimerRef.current) clearTimeout(successTimerRef.current);
    };
  }, [submitState, reset]);

  /* Submit ------------------------------------------------------------------ */
  const onSubmit = async (data: ContactFormValues) => {
    if (data.company) {
      // Honeypot triggered — silently pretend success, don't hit the API.
      setSubmitState("success");
      reset(DEFAULT_VALUES);
      return;
    }

    setSubmitState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || undefined,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      setSubmitState("success");
      reset(DEFAULT_VALUES);
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section
      ref={wrapperRef}
      className="relative flex min-h-[100svh] w-full items-start overflow-visible pb-8 pt-28 sm:pb-12 sm:pt-32 lg:items-center lg:py-20"
    >
      <Container>
        <div className="grid w-full grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* LEFT — intro content, no card chrome */}
          <div data-contact-intro className="flex h-full min-h-[480px] w-full flex-col self-stretch">
            {/* Status badge */}
            <div
              data-contact-badge
              className="mb-8 inline-flex w-fit items-center gap-2 self-center rounded-full border border-border bg-muted/20 px-3 py-1.5 lg:self-start"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px]">
                Let&apos;s start the conversation
              </span>
            </div>

            {/* Heading block */}
            <div data-contact-heading className="flex flex-1 flex-col justify-center">
              <h1
                data-contact-heading-line
                className="text-center text-3xl font-semibold uppercase leading-tight tracking-[-0.03em] text-foreground opacity-90 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-left"
              >
                Great Design
              </h1>

              <div
                data-contact-heading-line
                className="mt-2 text-center text-3xl font-semibold uppercase leading-tight tracking-[-0.03em] text-muted-foreground sm:mt-3 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-left"
              >
                Starts With
              </div>

              <div
                data-contact-heading-line
                className="mt-2 text-center text-3xl font-semibold uppercase leading-tight tracking-[-0.03em] text-foreground opacity-90 sm:mt-3 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-left"
              >
                Great Collaboration
              </div>

              <div
                data-contact-meta
                className="mx-auto mt-6 max-w-xl text-center text-sm leading-6 text-muted-foreground sm:mt-7 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:mx-0 lg:text-left"
              >
                If you are a founder, freelancer, recruiter, or a team with an open role, a
                product idea, or a collaboration request, send me a quick note and I&apos;ll
                help shape what comes next.
              </div>
            </div>
          </div>

          {/* RIGHT — form, no card chrome, same min-height so both columns still match */}
          <div data-contact-card ref={cardRef} className="flex h-full min-h-[480px] w-full flex-col self-stretch">
            {submitState === "success" ? (
              <SuccessPanel progressRef={progressRef} />
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex w-full flex-1 flex-col gap-5 sm:gap-6"
              >
                {/* Honeypot — hidden from real users, visible to bots */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label htmlFor="company">Company</label>
                  <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
                </div>

                <div data-contact-field className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field
                    id="name"
                    label="Name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    error={errors.name?.message}
                    register={register("name")}
                  />
                  <Field
                    id="phone"
                    label="Phone"
                    optional
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 00000 00000"
                    error={errors.phone?.message}
                    register={register("phone")}
                  />
                </div>

                <div data-contact-field>
                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@company.com"
                    error={errors.email?.message}
                    register={register("email")}
                  />
                </div>

                <div data-contact-field className="flex min-h-0 flex-1 flex-col">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <label htmlFor="message" className="block text-xs font-medium sm:text-sm">
                      Message
                    </label>
                    <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground/60">
                      Max 2000
                    </span>
                  </div>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me a little about your project..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="min-h-[140px] w-full flex-1 resize-none rounded-xl border border-border bg-muted/20 px-3.5 py-2.5 text-xs leading-5 outline-none transition-all placeholder:text-muted-foreground/50 focus:border-foreground focus:bg-background focus:ring-2 focus:ring-foreground/5 sm:min-h-[160px] sm:px-4 sm:py-3 sm:text-sm sm:leading-6"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-[10px] text-destructive sm:text-xs">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {submitState === "error" && (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 rounded-xl border border-destructive/20 bg-destructive/5 px-3 py-2.5 text-xs text-destructive"
                  >
                    <AlertCircle className="mt-0.5 size-4 shrink-0" strokeWidth={2} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div
                  data-contact-field
                  className="mt-auto flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-end"
                >
                  <button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:pointer-events-none disabled:opacity-60 sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
                  >
                    {submitState === "loading" ? (
                      <>
                        <Loader2 className="size-3.5 animate-spin sm:size-4" strokeWidth={2} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowUpRight
                          className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-4"
                          strokeWidth={2}
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Success panel — fills the same card slot, keeps the two-box grid intact   */
/* -------------------------------------------------------------------------- */

function SuccessPanel({ progressRef }: { progressRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
      <div className="mb-5 flex size-12 items-center justify-center rounded-full border border-border bg-muted/30">
        <CheckCircle2 className="size-6 text-foreground" strokeWidth={1.75} />
      </div>
      <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">Message sent.</h2>
      <p className="mt-3 max-w-sm text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
        Thanks for reaching out. I&apos;ll get back to you as soon as possible.
      </p>

      <div className="mt-6 w-full max-w-[160px]">
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-muted/40">
          <div ref={progressRef} className="h-full w-full origin-left scale-x-0 rounded-full bg-foreground" />
        </div>
        <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
          Returning to form
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reusable input field                                                      */
/* -------------------------------------------------------------------------- */

type FieldProps = {
  id: string;
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  error?: string;
  optional?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
};

function Field({ id, label, type, autoComplete, placeholder, error, optional, register }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-medium sm:text-sm">
        {label}{" "}
        {optional && <span className="font-normal text-muted-foreground">(optional)</span>}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-xl border border-border bg-muted/20 px-3.5 py-2.5 text-xs outline-none transition-all placeholder:text-muted-foreground/50 focus:border-foreground focus:bg-background focus:ring-2 focus:ring-foreground/5 sm:px-4 sm:py-3 sm:text-sm"
        {...register}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[10px] text-destructive sm:text-xs">
          {error}
        </p>
      )}
    </div>
  );
}