"use client";

import { classNames } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocre focus-visible:ring-offset-2 focus-visible:ring-offset-cream cursor-pointer";

  const variants = {
    primary: "bg-brun text-white hover:bg-brun-fonce active:bg-brun-fonce",
    secondary:
      "bg-ocre text-white hover:bg-ocre-clair active:bg-ocre-clair",
    outline:
      "border-2 border-brun text-brun hover:bg-brun hover:text-white",
    ghost: "text-brun hover:bg-cream active:bg-cream",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded",
    md: "px-6 py-3 text-base rounded",
    lg: "px-8 py-4 text-lg rounded-md",
  };

  const classes = classNames(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
