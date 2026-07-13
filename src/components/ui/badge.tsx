import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium font-mono-utility tracking-wide",
  {
    variants: {
      variant: {
        default:
          "border-[var(--border)] bg-[var(--surface)]/70 text-[var(--ink-soft)]",
        accent:
          "border-transparent bg-[var(--primary-soft)] text-[var(--primary)]",
        outline: "border-[var(--border)] text-[var(--ink)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
