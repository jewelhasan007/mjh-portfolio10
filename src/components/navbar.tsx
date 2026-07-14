"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { site, hero } from "@/lib/content";

import {
  Menu,
  X,
  House,
  User,
  Cpu,
  FolderOpen,
  Mail,
} from "lucide-react";


 const links = [
  {
    href: "#top",
    label: "Home",
    icon: House,
  },
  {
    href: "#about",
    label: "About",
    icon: User,
  },
  {
    href: "#technologies",
    label: "Technologies",
    icon: Cpu,
  },
  {
    href: "#project",
    label: "Projects",
    icon: FolderOpen,
  },
  {
    href: "#contact",
    label: "Contact",
    icon: Mail,
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState("#top");

  const handleClick = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  // Navbar background on scroll
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );
  
    links.forEach((link) => {
      const section = document.querySelector(link.href);
  
      if (section) observer.observe(section);
    });
  
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-b-2xl px-5 transition-all duration-300 sm:px-8 ${
          scrolled
            ? "glass mt-0 py-3 shadow-lg shadow-black/5"
            : "mt-2 py-5"
        }`}
      >
        {/* Logo */}
        <a
          href="#top"
          onClick={() => handleClick("#top")}
          className="font-display flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] via-[var(--violet)] to-[var(--cyan)] text-sm font-bold text-white shadow-md"
        >
          {site.initials}
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
       {links.map((link) => {
  const isActive = active === link.href;
  const Icon = link.icon;

  return (
    <a
      key={link.href}
      href={link.href}
      onClick={() => handleClick(link.href)}
      aria-current={isActive ? "page" : undefined}
      className={`relative flex items-center gap-2 font-mono-utility text-sm transition-colors duration-300 ${
        isActive
          ? "text-[var(--primary)]"
          : "text-[var(--ink-soft)] hover:text-[var(--primary)]"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{link.label}</span>

      {isActive && (
        <motion.span
          layoutId="active-nav"
          className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-[var(--primary)]"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 35,
          }}
        />
      )}
    </a>
  );
})}
        </nav>

        {/* Desktop Right */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <Button size="sm" asChild>
            <a href="#contact">{hero.cta}</a>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)]"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="glass mx-4 mt-2 flex flex-col gap-2 rounded-2xl p-4 md:hidden"
        >
      {links.map((link) => {
  const isActive = active === link.href;
  const Icon = link.icon;

  return (
    <a
      key={link.href}
      href={link.href}
      onClick={() => handleClick(link.href)}
      className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-all ${
        isActive
          ? "bg-[var(--primary)] text-white"
          : "text-[var(--ink-soft)] hover:bg-[var(--surface-2)] hover:text-[var(--primary)]"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{link.label}</span>
    </a>
  );
})}

          <Button size="sm" className="mt-2" asChild>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
            >
              {hero.cta}
            </a>
          </Button>
        </motion.nav>
      )}
    </motion.header>
  );
}