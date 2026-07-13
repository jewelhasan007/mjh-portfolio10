import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <div className="flex items-center gap-3">
          <span className="font-display flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--primary)] via-[var(--violet)] to-[var(--cyan)] text-xs font-bold text-white">
            {site.initials}
          </span>
          <p className="text-sm text-[var(--ink-soft)]">{site.copyright}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email Jewel Hasan"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--ink-soft)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jewel Hasan on LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--ink-soft)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
