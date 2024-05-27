import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "../button"

describe("Render", () => {
  it("should render a button", async () => {
    render(<Button>Button</Button>)
    const btn = await screen.findByRole("button")
    expect(btn).toBeInTheDocument()
  })
  it("should render the correct text", async () => {
    render(<Button>Button</Button>)
    const btn = await screen.findByText("Button")
    expect(btn).toBeInTheDocument()
  })
  it("should render the correct text: hardcode check",  () => {
    render(<Button>Button</Button>)
    const btn =  screen.queryByText("There is no such button")
    expect(btn).not.toBeInTheDocument()
  })
})
