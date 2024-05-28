import { render, screen } from "@testing-library/react"
import { experiencesData } from "../experience-data"
import ExperienceSection from "../experience-section"
import "intersection-observer"

describe("Render", () => {
  experiencesData.forEach((experience, index) => {
    index++
    describe(`Experience №${index}`, () => {
      Object.keys(experience).forEach((key) => {
        it(`should render experience №${index} ${key} property`, () => {
          if (key != "icon") {
            render(<ExperienceSection />)
            const proprtyElements = screen.queryAllByText(
              experience[key as "title"]
            )
            proprtyElements.forEach((elememt) => {
              expect(elememt).toBeInTheDocument()
            })
          }
        })
      })
    })
  })
})
