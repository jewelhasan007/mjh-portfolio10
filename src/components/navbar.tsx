"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    href: "/#main",
    label: "Home",
    icon: House,
  },
  {
    href: "/#about",
    label: "About",
    icon: User,
  },
  {
    href: "/#technologies",
    label: "Technologies",
    icon: Cpu,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: FolderOpen,
  },
  {
    href: "/#contact",
    label: "Contact",
    icon: Mail,
  },
];


export function Navbar() {

  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const [activeSection, setActiveSection] =
    React.useState("/#main");


  // Navbar background
  React.useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };


    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);



  // Active section detection
  React.useEffect(() => {

    if (pathname !== "/") {
      return;
    }


    const sections = [
      "#main",
      "#about",
      "#technologies",
      "#contact",
    ];


    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActiveSection(
              `/#${entry.target.id}`
            );

          }

        });

      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0,
      }
    );


    sections.forEach((id) => {

      const section =
        document.querySelector(id);


      if (section) {
        observer.observe(section);
      }

    });


    return () =>
      observer.disconnect();


  }, [pathname]);



  // Active menu check
  const isActive = (href: string) => {


    // Project page
    if (pathname === "/projects") {
      return href === "/projects";
    }


    // Homepage
    if (pathname === "/") {
      return activeSection === href;
    }


    return false;

  };



  return (

    <motion.header
      initial={{
        y: -40,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
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

        <Link
          href="/"
          className="font-display flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] via-[var(--violet)] to-[var(--cyan)] text-sm font-bold text-white shadow-md"
        >
          {site.initials}
        </Link>



        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">

          {links.map((link) => {

            const Icon = link.icon;

            const active =
              isActive(link.href);


            return (

              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center gap-2 font-mono-utility text-sm transition-colors duration-300 ${
                  active
                    ? "text-[var(--primary)]"
                    : "text-[var(--ink-soft)] hover:text-[var(--primary)]"
                }`}
              >

                <Icon className="h-4 w-4" />

                <span>
                  {link.label}
                </span>


                {active && (

                  <motion.span
                    initial={{
                      opacity: 0,
                      scaleX: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      scaleX: 1,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-[var(--primary)]"
                  />

                )}

              </Link>

            );

          })}

        </nav>





        {/* Desktop Right */}

        <div className="hidden items-center gap-3 md:flex">

          <ThemeToggle />

          <Button
            size="sm"
            asChild
          >

            <Link href="/#contact">
              {hero.cta}
            </Link>

          </Button>

        </div>





        {/* Mobile Toggle */}

        <div className="flex items-center gap-2 md:hidden">

          <ThemeToggle />


          <button
            aria-label="Toggle menu"
            onClick={() =>
              setOpen((prev) => !prev)
            }
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
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="glass mx-4 mt-2 flex flex-col gap-2 rounded-2xl p-4 md:hidden"
        >


          {links.map((link) => {

            const Icon = link.icon;


            return (

              <Link
                key={link.href}
                href={link.href}
                onClick={() =>
                  setOpen(false)
                }
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition ${
                  isActive(link.href)
                    ? "bg-[var(--primary)] text-white"
                    : "text-[var(--ink-soft)] hover:bg-[var(--surface-2)] hover:text-[var(--primary)]"
                }`}
              >

                <Icon className="h-4 w-4" />

                {link.label}

              </Link>

            );

          })}



          <Button
            size="sm"
            className="mt-2"
            asChild
          >

            <Link
              href="/#contact"
              onClick={() =>
                setOpen(false)
              }
            >
              {hero.cta}
            </Link>

          </Button>


        </motion.nav>

      )}


    </motion.header>

  );
}