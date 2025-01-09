import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/types/types";

export const buttonVariants = cva(
  "font-semibold shadow-lg text-white rounded-full flex justify-center items-center gap-2 outline-none focus:scale-110 hover:opacity-60 hover:-translate-y-1 active:scale-105 transition-all group/button disabled:opacity-60 disabled:cursor-not-allowed",
  {
    variants: {
      variants: {
        default: "bg-stone-900",
        ghost: "bg-white dark:bg-white/10 text-stone-950 dark:text-white ",
        icon: " bg-stone-900 dark:bg-white/10  aspect-square dark:text-stone-50",
      },
      size: {
        md: "px-7 py-3",
        sm: "px-3 py-2 text-sm",
      },
    },
    defaultVariants: {
      variants: "default",
      size: "sm",
    },
  },
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      component: Tag = "button",
      size,
      variants,
      children,
      startIcon,
      endIcon,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variants, size, className }))}
      {...props}
    >
      <span className="group-hover/button:-translate-x-1 group-hover/button:-translate-y-1 transition-all">
        {startIcon && variants != "icon" && startIcon}
      </span>
      {children}
      <span className="group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-all">
        {endIcon && variants != "icon" && endIcon}
      </span>
    </button>
  ),
);

Button.displayName = "ReusableButton";
