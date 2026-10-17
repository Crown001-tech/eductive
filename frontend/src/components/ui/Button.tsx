import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "on-dark" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isDarkContext?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isDarkContext = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-sm px-4 py-2 gap-1.5",
    md: "text-base px-6 py-3 gap-2",
    lg: "text-lg px-8 py-3.5 gap-2.5",
  }[size];

  const radiusStyles = "rounded-full"; // 999px pill button rule

  // Variant rules:
  // - Primary: tangerine-500 with ink-900 text (4.7:1 pass)
  // - Secondary: emerald-700 with white text (5.4:1 pass)
  // - Outline: hairline line border with ink-900 text
  // - On-dark: ink-800 fill, emerald-300 text (8.1:1 pass on ink-900)
  // - Ghost: transparent, ink-900 text
  const variantStyles = {
    primary:
      "bg-tangerine-500 text-ink-900 font-semibold hover:brightness-105 active:scale-[0.99] shadow-sm",
    secondary:
      "bg-emerald-700 text-white font-medium hover:bg-[#096643] active:scale-[0.99]",
    outline:
      "border border-line text-ink-900 bg-white hover:bg-surface active:scale-[0.99]",
    "on-dark":
      "border border-ink-800 bg-ink-800 text-emerald-300 hover:text-white hover:border-emerald-500 active:scale-[0.99]",
    ghost:
      "text-ink-900 hover:bg-surface active:scale-[0.99]",
  }[variant];

  // Focus ring:
  // - Light: 2px tangerine-500 outline + 2px offset
  // - Dark: 2px sun-400 outline + 2px offset
  const focusStyles = isDarkContext || variant === "on-dark"
    ? "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
    : "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tangerine-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  const combinedStyles = `${baseStyles} ${sizeStyles} ${radiusStyles} ${variantStyles} ${focusStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
