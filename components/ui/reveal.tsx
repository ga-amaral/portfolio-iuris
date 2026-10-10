"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  once?: boolean;
  triggerOnce?: boolean;
}

const directionVariants = {
  up: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
  down: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
};

export const Reveal = React.forwardRef<HTMLDivElement, RevealProps>(
  (
    {
      children,
      className,
      direction = "up",
      delay = 0,
      duration = 0.6,
      once = true,
      triggerOnce,
      ...props
    },
    ref
  ) => {
    const prefersReducedMotion = useReducedMotion();
    const shouldTriggerOnce = triggerOnce ?? once;

    if (prefersReducedMotion) {
      return (
        <div
          ref={ref}
          className={cn("opacity-100", className)}
          {...props}
        >
          {children}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        initial={directionVariants[direction].initial}
        animate={directionVariants[direction].animate}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        viewport={{ once: shouldTriggerOnce, margin: "-50px" }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Reveal.displayName = "Reveal";

export interface RevealItemProps {
  children: React.ReactNode;
  className?: string;
  index: number;
  direction?: "up" | "down" | "left" | "right";
  baseDelay?: number;
  stagger?: number;
}

export const RevealItem = React.forwardRef<HTMLDivElement, RevealItemProps>(
  ({ children, className, index, direction = "up", baseDelay = 0.1, stagger = 0.1, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
      return (
        <div
          ref={ref}
          className={cn("opacity-100", className)}
          {...props}
        >
          {children}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        initial={directionVariants[direction].initial}
        animate={directionVariants[direction].animate}
        transition={{
          duration: 0.6,
          delay: baseDelay + index * stagger,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        viewport={{ once: true, margin: "-50px" }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

RevealItem.displayName = "RevealItem";
