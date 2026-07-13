"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { site, hero } from "@/lib/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#technologies", label: "Technologies" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-b-2xl px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "glass mt-0 py-3 shadow-lg shadow-black/[0.03]" : "mt-2 py-5"
        }`}
      >
        <a
          href="#top"
          className="font-display flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] via-[var(--violet)] to-[var(--cyan)] text-sm font-bold text-white shadow-md"
        >
          {site.initials}
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono-utility text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--primary)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button size="sm" asChild>
            <a href="#contact">{hero.cta}</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--ink)]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          aria-label="Mobile"
          className="glass mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-4 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-[var(--ink-soft)] hover:bg-[var(--surface-2)] hover:text-[var(--primary)]"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="mt-2" asChild>
            <a href="#contact" onClick={() => setOpen(false)}>
              {hero.cta}
            </a>
          </Button>
        </motion.nav>
      )}
    </motion.header>
  );
}
