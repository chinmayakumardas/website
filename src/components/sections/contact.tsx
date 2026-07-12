




"use client";
import { useState } from "react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let finalValue = value;

    if (name === "phone") {
      finalValue = formatPhoneNumber(value);
    }

    setForm({ ...form, [name]: finalValue });
  };

  const submit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return;
    }

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

  return (
    <section id="contact" className="min-h-screen flex flex-col  py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        {/* Hero Text */}
      <div className="mx-auto   px-10">
        {/* Big Hero Text - Matching your screenshot */}
            <div className=" flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="mb-6 text-md font-bold uppercase tracking-[0.10em]">
          LET&apos;S START THE CONVERSATION
        </p>

        <h1 className="text-[4.5rem] font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-[6rem] lg:text-[7rem] ">
          GREAT DESIGN
        </h1>

        <p className="my-5 text-xs font-medium uppercase tracking-[0.55em] sm:text-sm">
          STARTS WITH
        </p>

        <h2 className="text-[4rem] font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-[5.5rem] lg:text-[7rem]">
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
                disabled={loading}
                className="uppercase tracking-[0.15em] text-xl md:text-2xl font-bold border-b-2 border-black pb-1.5 hover:border-black/70 active:scale-95 transition-all duration-200 disabled:opacity-50 min-w-[280px]"
              >
                {submitStatus === "sending" && "SUBMITTING..."}
                {submitStatus === "success" && "✓ SENT SUCCESSFULLY"}
                {submitStatus === "idle" && "DISCUSS THE PROJECT ↗"}
              </button>
            </div>
          </div>
        </div>
      </div>

      </div>
    </section>
  );
}