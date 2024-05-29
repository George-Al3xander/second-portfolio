import { Skill } from "@/types/types"
import { render, screen } from "@testing-library/react"
import SkillsList from "../skills-list"
import "intersection-observer"

const dummySkills: Skill[] = [
  {
    id: "skill1",
    icon: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" /></svg>',
    name: "Skill 1",
    order: 1,
  },
  {
    id: "skill2",
    icon: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="42" /></svg>',
    name: "Skill 2",
    order: 2,
  },
  {
    id: "skill3",
    icon: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="43" /></svg>',
    name: "Skill 3",
    order: 3,
  },
  {
    id: "skill4",
    icon: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="46" /></svg>',
    name: "Skill 4",
    order: 4,
  },
  {
    id: "skill5",
    icon: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="48" /></svg>',
    name: "Skill 5",
    order: 5,
  },
]

describe("Render", () => {
  dummySkills.forEach(({ name, icon }, index) => {
    it(`should render ${name}`, () => {
      render(<SkillsList skills={dummySkills} />)

      const nameElement = screen.getByText(name)
      expect(nameElement).toBeInTheDocument()

      const iconContainer = screen.getByTestId(`icon-${index}`)
      expect(iconContainer).toBeInTheDocument()
      expect(iconContainer).toContainHTML(icon)
    })
  })
})
