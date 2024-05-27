"use client"

import React, { useEffect } from "react"
import { twMerge } from "tailwind-merge"
import { useActiveSection } from "@/hooks/useActiveSectionContext"
import { useInView } from "react-intersection-observer"

import { SectionProps } from "@/types/types"

export const Section = ({
  className,
  viewThreshold: threshold = 0.75,
  sectionType,
  ...props
}: SectionProps) => {
  const { ref: sectionRef, inView } = useInView({
    threshold,
  })
  const { setActiveSection, lastClickTime } = useActiveSection()

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) {
      setActiveSection(sectionType)
    }
  }, [inView, sectionType, setActiveSection, lastClickTime])

  return (
    <section
      id={sectionType}
      ref={sectionRef}
      className={twMerge("scroll-mt-28", className)}
      {...props}
    />
  )
}


