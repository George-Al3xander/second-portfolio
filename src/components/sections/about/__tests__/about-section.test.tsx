import { render, screen } from "@testing-library/react"
import AboutSection from "../about-section"
import "intersection-observer"

describe("Render", () => {
  it("should render the section's heading", () => {
    render(<AboutSection text={"Text"} />)
    const h = screen.queryByTestId("about")
    expect(h).toBeInTheDocument()
  })
  it("should render the section's text", () => {
    render(<AboutSection text={"Text"} />)
    const sec = screen.queryByText("Text")
    expect(sec).toBeInTheDocument()
  })
  it("should render the complex string's text", () => {
    render(<AboutSection text={["Hello, ", {text: "Sir", className: "font-bold"}]} />)
    const sec = screen.queryByText("Sir")
    expect(sec?.className).toContain("font-bold")
  })
  it("shouldn't find the section be a wrong text", () => {
    render(<AboutSection text={"Text"} />)
    const sec = screen.queryByText("Text!")
    expect(sec).not.toBeInTheDocument()
  })
})
