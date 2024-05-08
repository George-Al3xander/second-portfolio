import ComplexString from "@/components/complex-string"
import FramerWrapper from "@/components/reusable/framer-wrapper"
import Section from "@/components/reusable/section"
import SectionHeading from "@/components/reusable/section-heading"
import { TComplexString } from "@/types/types"
import React from "react"

const AboutSection = ({ text }: { text: string | TComplexString[] }) => {
  return (
    <Section
      className="max-w-[45rem] text-center leading-8 "
      sectionType={"about"}
    >
      <FramerWrapper
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <SectionHeading>About</SectionHeading>
        <ComplexString input={text} />
      </FramerWrapper>
    </Section>
  )
}

export default AboutSection
