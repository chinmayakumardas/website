


"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success">("idle");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const formatPhoneNumber = (value: string) => {
    let cleaned = value.replace(/[^\d+]/g, "");
    if (cleaned.length > 1 && cleaned[0] !== "+") {
      cleaned = "+" + cleaned;
    }
    return cleaned.slice(0, 20);
  };

  const sanitizeName = (value: string): string => {
    return value
      .replace(/[^a-zA-Z\s]/g, "")
      .replace(/\s+/g, " ")
      .trimStart()
      .slice(0, 100);
  };

  const sanitizeEmail = (value: string): string => {
    return value
      .replace(/\s/g, "")
      .replace(/[<>"'`]/g, "")
      .slice(0, 80);
  };

  const sanitizeMessage = (value: string): string => {
    return value
      .replace(/<[^>]*>/g, "")
      .replace(/javascript:|on\w+=/gi, "")
      .replace(/iframe|script|embed|object|link|url/gi, "")
      .slice(0, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let finalValue = value;

    if (name === "name") {
      finalValue = sanitizeName(value);
    } else if (name === "phone") {
      finalValue = formatPhoneNumber(value);
    } else if (name === "email") {
      finalValue = sanitizeEmail(value);
    } else if (name === "message") {
      finalValue = sanitizeMessage(value);
    }

    setForm({ ...form, [name]: finalValue });
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = (): boolean => {
    const { name, email, message } = form;
    return (
      name.trim().length > 0 &&
      email.trim().length > 0 &&
      isValidEmail(email) &&
      message.trim().length > 0
    );
  };

  const submit = async () => {
    if (!isFormValid()) return;

    setLoading(true);
    setSubmitStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 2500);
      } else {
        setSubmitStatus("idle");
        console.error("API Error:", data.message);
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("idle");
    } finally {
      setLoading(false);
    }
  };

  const isButtonDisabled = loading || !isFormValid();

  return (
    <section id="contact" className="min-h-screen flex flex-col py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="mx-auto px-10">
          <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <p className="mb-6 text-md font-bold uppercase tracking-[0.10em]">
              LET&apos;S START THE CONVERSATION
            </p>

            <h1 className="text-[4.5rem] font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-[5rem]">
              GREAT DESIGN
            </h1>

            <p className="my-5 text-xs font-medium uppercase tracking-[0.55em] sm:text-sm">
              STARTS WITH
            </p>

            <h2 className="text-[4rem] font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-[6rem] ">
              GREAT COLLABORATION
            </h2>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto pt-8 md:pt-12">
            <div className="space-y-10 md:space-y-12">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                maxLength={100}
                placeholder="YOUR NAME *"
                className="w-full border-b border-black outline-none py-4 text-xl md:text-2xl uppercase tracking-widest placeholder:text-black/50 bg-transparent"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                maxLength={20}
                placeholder="PHONE NUMBER"
                className="w-full border-b border-black outline-none py-4 text-xl md:text-2xl uppercase tracking-widest placeholder:text-black/50 bg-transparent"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                maxLength={80}
                placeholder="YOUR EMAIL *"
                className="w-full border-b border-black outline-none py-4 text-xl md:text-2xl uppercase tracking-widest placeholder:text-black/50 bg-transparent"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                maxLength={500}
                rows={4}
                placeholder="HOW CAN I HELP YOU? *"
                className="w-full border-b border-black outline-none py-4 text-xl md:text-2xl uppercase tracking-widest resize-y min-h-[100px] placeholder:text-black/50 bg-transparent"
              />

              <div className="flex justify-center pt-8">
                <button
                  onClick={submit}
                  disabled={isButtonDisabled}
                  className="relative flex items-center text-sm font-medium rounded-full h-12 p-1 ps-8 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-8 w-fit overflow-hidden cursor-pointer bg-primary text-secondary disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="relative z-10 flex items-center whitespace-nowrap text-[13px] font-bold uppercase tracking-[0.22em] transition-all duration-500">
                    {submitStatus === "sending" && "SUBMITTING..."}
                    {submitStatus === "success" && "✓ SENT SUCCESSFULLY"}
                    {submitStatus === "idle" && "DISCUSS THE PROJECT"}
                  </span>

                  <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}