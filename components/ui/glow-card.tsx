"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated";
  hover?: boolean;
  children: React.ReactNode;
}

export const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    const baseStyles =
      "relative rounded-2xl bg-[#10101D] border transition-all duration-300";

    const variantStyles = {
      default: "border-[#1E1E2E]",
      elevated: "border-purple-500/30 shadow-[0_0_30px_rgba(139,61,255,0.15)]",
    };

    const hoverStyles = hover
      ? "hover:border-purple-500/50 hover:shadow-[0_20px_40px_rgba(139,61,255,0.2)] hover:-translate-y-1"
      : "";

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], hoverStyles, className)}
        onMouseEnter={(e) => {
          if (hover) e.currentTarget.style.setProperty("--glow-opacity", "1");
        }}
        onMouseLeave={(e) => {
          if (hover) e.currentTarget.style.setProperty("--glow-opacity", "0");
        }}
        {...props}
      >
        <div
          className="absolute inset-0 rounded-[inherit] border border-transparent transition-all duration-300"
          style={{
            borderColor: "rgba(139, 61, 255, var(--glow-opacity, 0))",
            boxShadow: "0 0 0 1px rgba(139, 61, 255, var(--glow-opacity, 0)), 0 0 30px rgba(139, 61, 255, calc(var(--glow-opacity, 0) * 0.3))",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 h-full p-5 sm:p-6 lg:p-8">{children}</div>
      </div>
    );
  }
);

GlowCard.displayName = "GlowCard";
