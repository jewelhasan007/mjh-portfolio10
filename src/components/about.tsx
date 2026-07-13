"use client";

import { motion } from "framer-motion";
import { Code2, Megaphone, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { about } from "@/lib/content";

const icons = [Code2, Megaphone, TrendingUp];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="About" title={about.heading} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {about.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--primary)]/10"
              >
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[var(--primary)]/15 to-[var(--cyan)]/15 blur-2xl transition-transform duration-500 group-hover:scale-125"
                  aria-hidden
                />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] via-[var(--violet)] to-[var(--cyan)] text-white shadow-md">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display relative mt-6 text-xl font-semibold text-[var(--ink)]">
                  {item.title}
                </h3>
                <span className="relative mt-4 block h-px w-10 bg-[var(--border)] transition-all duration-300 group-hover:w-16 group-hover:bg-[var(--primary)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
