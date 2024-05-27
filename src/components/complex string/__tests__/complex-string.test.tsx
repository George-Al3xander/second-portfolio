import { render, screen } from "@testing-library/react"
import ComplexString from "../complex-string"
import { TComplexString } from "@/types/types"

describe("Render", () => {
  it("should render a text", () => {
    const text = "I'm a component"
    render(<ComplexString input={text} />)
    const heading = screen.queryByText(text)
    expect(heading).toBeInTheDocument()
  })

  it("shouldn't find text by a wrong input prop", () => {
    const text = "I'm a component"
    render(<ComplexString input={text} />)
    const heading = screen.queryByText("Hello there1")
    expect(heading).not.toBeInTheDocument()
  })
})

describe("Behavior", () => {
  it("should properly render a complex string", () => {
    const complexString: TComplexString[] = [
      "Hello, ",
      { text: "I am", className: "font-bold" },
      "a complex",
      { text: "string", className: "italic" },
    ]
    render(<ComplexString input={complexString} />)
    complexString.forEach((part) => {
      if (typeof part == "string") {
        const elem = screen.queryByText(part, { exact: false })
        expect(elem?.textContent).toContain(part)
      } else {
        const { text, className } = part
        const elem = screen.queryByText(text)
        expect(elem).toBeInTheDocument()
        expect(elem?.className).toContain(className)
      }
    })
  })
})
