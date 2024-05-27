import { render, screen } from "@testing-library/react"
import { FormError } from "../form-error"

describe("Render", () => {
  it("shouldn't render a message, isError prop is false", () => {
    const errorText = "Oops, I can't exist"
    render(<FormError errMessage={errorText} isError={false} />)
    const errSpan = screen.queryByText(errorText)

    expect(errSpan).not.toBeInTheDocument()
  })

  it("should render a message, isError prop is true", () => {
    const errorText = "Oops, you found me"
    render(<FormError errMessage={errorText} isError={true} />)
    const errSpan = screen.queryByText(errorText)
    expect(errSpan).toBeInTheDocument()
  })

  it("shouldn't find the err message by a wrong text", () => {
    const errorText = "Oops, I can't exist"
    render(<FormError errMessage={errorText} isError={true} />)
    const errSpan = screen.queryByText("Oops, I can exist")

    expect(errSpan).not.toBeInTheDocument()
  })
})
