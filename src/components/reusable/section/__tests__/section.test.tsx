import { render, screen } from "@testing-library/react"
import { Section } from "@/reusable"
import "intersection-observer"

describe("Render", () => {
  it("should render the section", () => {
    render(<Section sectionType={"home"} />)
    const sec = screen.queryByTestId("home")
    expect(sec).toBeInTheDocument()
  })

  it("should render the section: hardcode check", () => {
    render(<Section sectionType={"home"} />)
    const sec = screen.queryByTestId("projects")
    expect(sec).not.toBeInTheDocument()
  })

  it("should render the section's children properly", () => {
    const text = "I'm just a silly text!"
    render(
      <Section sectionType={"home"}>
        <p>{text}</p>
      </Section>
    )
    const para = screen.queryByText(text)
    expect(para).toBeInTheDocument()
  })
  it("should render the section's children properly: hardcode check", () => {
    const text = "I'm just a silly text!"
    render(
      <Section sectionType={"home"}>
        <p>{text}</p>
      </Section>
    )
    const para = screen.queryByText("Dang, there's no me :(")
    expect(para).not.toBeInTheDocument()
  })
})
