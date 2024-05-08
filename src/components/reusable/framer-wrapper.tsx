"use client"

import React, { ReactNode } from "react"
import { HTMLMotionProps, motion } from "framer-motion"

import { twMerge } from "tailwind-merge"
const FramerWrapper = ({
  component = "span",
  children,
  className,
  ...props
}: {
  component?: keyof JSX.IntrinsicElements
  children?: ReactNode
} & HTMLMotionProps<"span">) => {
  const Component = motion[component as "span"] || motion.span
  return (
    <Component {...props} className={twMerge(className, "inline-block")}>
      {children}
    </Component>
  )
}

export default FramerWrapper
