import { Project } from "@/types/types"
import {  render, screen } from "@testing-library/react"
import ProjectCard from "../project-card"

const dummyProject: Project = {
  name: "Project",
  description: "Dummy description",
  id: "RandomId",
  img: "https://github.com/picture.jpg",
  url_github: "https://github.com",
  url_preview: "https://preview.com",
}

describe("Render", () => {
  describe("Render all the project aspects", () => {
    Object.keys(dummyProject).forEach((key) => {
      it(`should render the project's ${key} property`, () => {
        const value = dummyProject[key as "id"]
        render(<ProjectCard {...dummyProject} />)
        if (key == "img") {
          const image = screen.getByRole("img")
          expect(image).toBeInTheDocument()

          //expect(image).toHaveAttribute("src", encodeURI(value))
        } else if (key.startsWith("url_")) {
          const links = screen.getAllByRole("link")
          expect(links.some((elem) => elem.getAttribute("href") == value)).toBe(
            true
          )
        } else if (key != "id") {
          const item = screen.getByText(value)
          expect(item).toBeInTheDocument()
        }
      })
    })
  })

  describe("Render only specified links", () => {
    ;(["url_github", "url_preview"] as const).forEach((key) => {
      it(`shouldn't render ${key.replace("url_", "")} link`, () => {
        const newDummy = { ...dummyProject }
        delete newDummy[key]
        render(<ProjectCard {...newDummy} />)
        const links = screen.getAllByRole("link")
        expect(links.length).toBe(1)
        expect(links[0]).toHaveAttribute(
          "href",
          newDummy[
            ["url_github", "url_preview"].find((link) => link != key)! as "id"
          ]
        )
      })
    })
    it("shouldn't render any links", () => {
      const newDummy = { ...dummyProject }
      delete newDummy.url_github
      delete newDummy.url_preview
      render(<ProjectCard {...newDummy} />)
      const links = screen.queryAllByRole("link")
      expect(links.length).toBe(0)
    })
  })
})
