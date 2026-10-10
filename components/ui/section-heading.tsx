"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { GradientText } from "./gradient-text";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
  textAlign?: "left" | "center" | "right";
}

export const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ eyebrow, title, highlight, subtitle, className, textAlign = "left", ...props }, ref) => {
    const alignClasses = {
      left: "items-start text-left",
      center: "items-center text-center mx-auto",
      right: "items-end text-right ml-auto",
    };

    const renderTitle = () => {
      if (!highlight) return title;
      const parts = title.split(highlight);
      if (parts.length === 1) return title;
      return (
        <>
          {parts[0]}
          <GradientText>{highlight}</GradientText>
          {parts[1]}
        </>
      );
    };

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-3 max-w-4xl w-full", alignClasses[textAlign], className)}
        {...props}
      >
        {eyebrow && (
          <span
            className="text-xs font-semibold tracking-widest uppercase text-purple-400"
            aria-hidden="true"
          >
            {eyebrow}
          </span>
        )}
        <h2 className="font-[Space_Grotesk] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          {renderTitle()}
        </h2>
        {subtitle && (
          <p className={cn("text-lg text-muted-foreground max-w-2xl leading-relaxed", textAlign === "center" && "mx-auto")}>{subtitle}</p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = "SectionHeading";