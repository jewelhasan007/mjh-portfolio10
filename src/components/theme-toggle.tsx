"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/80 text-[var(--ink)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
    >
      {mounted && (
        <>
          <Sun
            className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
              isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
            }`}
          />
          <Moon
            className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
              isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
            }`}
          />
        </>
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
