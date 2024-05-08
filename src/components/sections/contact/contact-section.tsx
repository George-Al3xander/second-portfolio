import Section from "@/components/reusable/section"
import SectionHeading from "@/components/reusable/section-heading"
import React from "react"
import ContactForm from "./contact-form"
import FramerWrapper from "@/components/reusable/framer-wrapper"

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

const ContactSection = () => {
  return (
    <Section sectionType="contact" className="my-28  w-[min(90%,40rem)]">
      <FramerWrapper
        className="w-full"
        initial="initial"
        whileInView={"animate"}
        variants={variants}
      >
        <SectionHeading>Contact</SectionHeading>
        <ContactForm />
      </FramerWrapper>
    </Section>
  )
}

export default ContactSection
