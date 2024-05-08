import { motion } from "framer-motion"
import Section from "@/components/reusable/section"
import SectionHeading from "@/components/reusable/section-heading"
import { getSkills } from "@/lib/actions"
import React from "react"
import SkillsList from "./skills-list"

const SkillsSection = async () => {
  const skills = await getSkills()
  return (
    <Section sectionType="skills" className="mt-28">
      <SectionHeading>My skills</SectionHeading>
      <SkillsList skills={skills} />
    </Section>
  )
}

export default SkillsSection
