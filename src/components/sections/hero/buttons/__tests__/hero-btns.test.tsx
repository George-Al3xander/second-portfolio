import { render, screen } from "@testing-library/react"
import HeroBtns from "../hero-btns"

const links = {
  github: "https://github.com",
  linkedin: "https://www.linkedin.com",
  contact: "#contact",
}

describe("Render", () => {
  Object.keys(links).forEach((key) => {
    it(`should render the ${key} icon`, () => {
      render(<HeroBtns {...links} />)
      const linkIcon = screen.getByTestId(`${key}-hero-link`)
      expect(linkIcon).toBeInTheDocument()
    })
  })
  it("should render all the buttons", () => {
    render(<HeroBtns {...links} />)
    const tagLinks = screen.getAllByRole("link")
    tagLinks.forEach((link) => {
      expect(Object.values(links)).toContain(link.getAttribute("href"))
    })
  })
})
