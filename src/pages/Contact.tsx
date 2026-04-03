import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

const links = [
  {
    label: "GitHub",
    handle: "@Saisathvik94",
    href: "https://github.com/Saisathvik94",
    desc: "25 repos — full-stack apps, CLI tools, open-source work.",
  },
  {
    label: "X",
    handle: "@Sathvik63",
    href: "https://x.com/Sathvik63",
    desc: "Thoughts on software, building in public, and the occasional rant.",
  },
  {
    label: "LinkedIn",
    handle: "Sai Sathvik",
    href: "https://www.linkedin.com/in/sai-sathvik-122357326/",
    desc: "Professional background, experience, and open to connect.",
  },
  {
    label: "Email",
    handle: "saisathvik615@gmail.com",
    href: "mailto:saisathvik615@gmail.com",
    desc: "Best for collaboration or just saying hi.",
  },
];

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  function handleReset() {
    setStatus("idle");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <>
    <div className="w-full mt-25 px-4 sm:px-6 md:px-6">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24"
      >

        <h1
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-3xl"
        >
          Let's build something worth shipping.
        </h1>

        <p className="mt-8 text-lg md:text-xl text-neutral-500 leading-relaxed max-w-xl font-light">
          Whether you have a project in mind, want to collaborate on open source,
          or just want to talk software — I'm always open to a good conversation.
        </p>
      </motion.div>

      {/* ── Two-column layout ── */}
      <div className="flex flex-col md:flex-row gap-20 md:gap-28 max-w-5xl pb-24">

        {/* ── Form ── */}
        <motion.div
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex-1 min-w-0"
        >
          <p className="text-lg font-mono tracking-[0.25em] text-black uppercase mb-8">
            Send a Message
          </p>

          {/* Sent */}
          {status === "sent" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-12"
            >
              <p
                className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
              >
                Message received.
              </p>
              <p className="text-neutral-500 text-base leading-relaxed">
                Thanks for reaching out — I'll get back to you soon.
              </p>
              <button
                onClick={handleReset}
                className="mt-8 text-sm font-mono text-neutral-400 underline underline-offset-4 hover:text-neutral-700 transition-colors"
              >
                Send another →
              </button>
            </motion.div>
          )}

          {/* Error */}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-6"
            >
              <p className="text-base text-red-500 mb-4 leading-relaxed">
                Something went wrong. Email me directly at{" "}
                <a href="mailto:saisathvik615@gmail.com" className="underline underline-offset-2">
                  saisathvik615@gmail.com
                </a>
                .
              </p>
              <button
                onClick={handleReset}
                className="text-sm font-mono text-neutral-400 underline underline-offset-4 hover:text-neutral-700 transition-colors"
              >
                Try again
              </button>
            </motion.div>
          )}

          {/* Form fields */}
          {(status === "idle" || status === "sending") && (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">

              <div>
                <label className="block text-xs font-mono tracking-[0.2em] text-neutral-400 uppercase mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-neutral-200 pb-3 text-xl md:text-2xl text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono tracking-[0.2em] text-neutral-400 uppercase mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-b border-neutral-200 pb-3 text-xl md:text-2xl text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono tracking-[0.2em] text-neutral-400 uppercase mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  className="w-full bg-transparent border-b border-neutral-200 pb-3 text-lg md:text-xl text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-900 transition-colors resize-none leading-relaxed"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex items-center gap-4 text-base font-medium text-neutral-900 hover:text-neutral-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span className="w-10 h-10 rounded-full border border-neutral-900 flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-colors flex-shrink-0">
                    {status === "sending" ? (
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="none"
                        className="animate-spin text-neutral-900 group-hover:text-white transition-colors">
                        <circle cx="7" cy="7" r="5" stroke="currentColor"
                          strokeWidth="1.5" strokeDasharray="8" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="none"
                        className="text-neutral-900 group-hover:text-white transition-colors">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor"
                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* ── Links sidebar ── */}
        <motion.div {...fadeUp} className="w-full md:w-72 flex-shrink-0">
          <p className="text-lg font-mono tracking-[0.25em] text-black uppercase mb-8">
            Find Me Online
          </p>

          <div className="divide-y divide-neutral-100">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-start justify-between py-6 gap-4"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-400 transition-colors leading-tight">
                    {link.label}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">{link.handle}</span>
                  <span className="text-sm text-neutral-400 leading-relaxed mt-1">{link.desc}</span>
                </div>
                <svg
                  width="12" height="12" viewBox="0 0 10 10" fill="none"
                  className="text-neutral-300 group-hover:text-neutral-600 transition-colors flex-shrink-0 mt-1.5"
                >
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor"
                    strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm font-mono text-neutral-400">
              Open to opportunities
            </span>
          </div>
        </motion.div>

      </div>
    </div>
    <Footer/>
    </>
  );
}