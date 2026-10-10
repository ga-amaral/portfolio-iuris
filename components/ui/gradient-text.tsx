"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
  via?: string;
}

export const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ children, className, from = "var(--color-purple)", to = "var(--color-blue)", via, ...props }, ref) => {
    const gradientStyle = via
      ? `linear-gradient(to right, ${from}, ${via}, ${to})`
      : `linear-gradient(to right, ${from}, ${to})`;

    return (
      <span
        ref={ref}
        className={cn("inline bg-clip-text text-transparent [-webkit-background-clip:text] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]", className)}
        style={{ backgroundImage: gradientStyle, WebkitTextFillColor: "transparent" } as React.CSSProperties}
        {...props}
      >
        {children}
      </span>
    );
  }
);

GradientText.displayName = "GradientText";