
import { getSkills } from "@/lib/actions"
import React from "react"
import SkillsList from "./list/skills-list"
import { Section, SectionHeading } from "@/reusable"

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
