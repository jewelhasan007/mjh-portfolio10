"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { contact, site } from "@/lib/content";

const channelIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Email: Mail,
  LinkedIn: FaLinkedin,
};

export function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${name || "your website"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Contact" title={contact.heading} align="center" />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col justify-between rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
                {contact.subheading}
              </h3>
              <p className="mt-3 text-[var(--ink-soft)]">{contact.blurb}</p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              {contact.channels.map((channel) => {
                const Icon = channelIcons[channel.label] ?? Mail;
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.label === "LinkedIn" ? "_blank" : undefined}
                    rel={channel.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] px-5 py-4 transition-colors hover:border-[var(--primary)]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] via-[var(--violet)] to-[var(--cyan)] text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="font-mono-utility block text-xs uppercase tracking-wide text-[var(--ink-soft)]">
                        {channel.label}
                      </span>
                      <span className="block font-medium text-[var(--ink)] group-hover:text-[var(--primary)]">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="gradient-border rounded-3xl"
          >
            <form
              onSubmit={handleSubmit}
              className="glass flex h-full flex-col gap-4 rounded-3xl p-8"
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-[var(--ink-soft)]">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] outline-none transition-colors focus:border-[var(--primary)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-[var(--ink-soft)]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] outline-none transition-colors focus:border-[var(--primary)]"
                  placeholder="you@example.com"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="message" className="mb-1.5 block text-sm text-[var(--ink-soft)]">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] outline-none transition-colors focus:border-[var(--primary)]"
                  placeholder="Tell me about your project"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send message
                <Send className="h-4 w-4" />
              </Button>
              <p className="text-center text-xs text-[var(--ink-soft)]">
                Opens your email client, addressed to {site.email}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
