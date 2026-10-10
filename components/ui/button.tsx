"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
}

interface ButtonButtonProps extends ButtonBaseProps {
  href?: never;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

type ButtonProps = ButtonLinkProps | ButtonButtonProps;

export function Button(props: ButtonProps) {
  const isLink = "href" in props && !!props.href;
  const Component = isLink ? "a" : "button";

  const {
    className,
    variant = "primary",
    size = "md",
    href,
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    ...rest
  } = props;

  const disabled = isLink ? undefined : (props as ButtonButtonProps).disabled;
  const buttonType = isLink ? undefined : ((props as ButtonButtonProps).type ?? "button");

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05050A] disabled:opacity-50 disabled:pointer-events-none";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-[0_0_20px_rgba(139,61,255,0.4)] hover:shadow-[0_0_30px_rgba(139,61,255,0.6)] hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "border border-purple-500/50 text-purple-300 bg-transparent hover:bg-purple-500/10 hover:border-purple-400 hover:text-white",
    ghost:
      "text-muted-foreground bg-transparent hover:bg-white/5 hover:text-foreground",
  };

  const sizeStyles = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-base",
    lg: "h-13 px-7 text-lg",
  };

  const commonProps = {
    className: cn(baseStyles, variantStyles[variant], sizeStyles[size], className),
    ...(isLink ? { href } : { disabled: disabled || isLoading, type: buttonType }),
    ...rest,
  };

  return (
    <Component {...commonProps} aria-busy={isLoading}>
      {isLoading ? (
        <svg
          className="h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : leftIcon ? (
        <span aria-hidden="true">{leftIcon}</span>
      ) : null}
      {children}
      {!isLoading && rightIcon && <span aria-hidden="true">{rightIcon}</span>}
    </Component>
  );
}
