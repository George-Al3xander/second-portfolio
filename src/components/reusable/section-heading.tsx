import React, { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export const SectionHeading = ({
  children,
  className,
}: {
  children: ReactNode
  className?: React.ComponentProps<"h1">["className"]
}) => (
  <h2
    className={twMerge(
      "text-3xl font-medium capitalize mb-8 text-center",
      className
    )}
  >
    {children}
  </h2>
)


