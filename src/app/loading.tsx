"use client"
import FramerWrapper from "@/components/reusable/framer-wrapper"
import { Variants, animate, useAnimationControls } from "framer-motion"
import { RotateLoader } from "react-spinners"
import React, { useEffect } from "react"
import { useThemeSwitch } from "@/hooks/useThemeSwitch"
const defaultAnimations: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
}

const Loading = () => {
  const letters = "Loading...".split("")
  const controls = useAnimationControls()
  const { theme } = useThemeSwitch()

  return (
    <section className="h-[calc(100vh-12rem)]  flex justify-center items-center">
      <RotateLoader color={theme == "light" ? "black" : " white"} />
      {/* <FramerWrapper
        component="p"
        className="text-gray-950 text-center leading-relaxed text-4xl md:leading-relaxed"
      >
        <span className="sr-only">Loading</span>
        <FramerWrapper
          component="span"
          initial="initial"
          animate={controls}
          transition={{
            staggerChildren: 0.1,
          }}
          className="aria-hidden"
        >
          {letters.map((char, index) => (
            <FramerWrapper
              component="span"
              variants={defaultAnimations}
              key={char + index}
            >
              {char}
            </FramerWrapper>
          ))}
        </FramerWrapper>
      </FramerWrapper> */}
    </section>
  )
}

export default Loading
