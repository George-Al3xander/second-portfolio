import Section from "@/components/reusable/section"
import SectionHeading from "@/components/reusable/section-heading"
import { getProjects } from "@/lib/actions"
import React from "react"
import ProjectCard from "./project-card"

const ProjectsSection = async () => {
  const projects = await getProjects()
  return (
    <Section
      sectionType="projects"
      viewThreshold={[0.3, 0.1]}
      className="mt-28 l"
    >
      <SectionHeading>Projects</SectionHeading>
      <ul className="flex flex-col gap-4 h-ful">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>
    </Section>
  )
}

export default ProjectsSection
