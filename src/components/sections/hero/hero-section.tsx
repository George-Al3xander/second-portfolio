import React from "react"
import Section from "../../reusable/section"

import ComplexString from "../../complex-string"
import { HeroSectionProps } from "@/types/types"
import HeroBtns from "./hero-btns"
import HeroIcon from "./hero-icon"
import FramerWrapper from "../../reusable/framer-wrapper"
import { FaDownLong } from "react-icons/fa6"
import { BiSolidMouse } from "react-icons/bi"
const Icon = BiSolidMouse
const HeroSection = ({ title, ...props }: HeroSectionProps) => {
  return (
    <Section
      sectionType="home"
      className="flex flex-col items-center scroll-mt-[100rem]"
    >
      <HeroIcon />
      <FramerWrapper
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="mb-10 sm:max-w-[50rem] text-center mx-auto mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
          <ComplexString input={title} />
        </h1>
      </FramerWrapper>
      <FramerWrapper
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <HeroBtns {...props} />
      </FramerWrapper>
    </Section>
  )
}

export default HeroSection
