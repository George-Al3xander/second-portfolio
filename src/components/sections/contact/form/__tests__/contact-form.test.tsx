import { render, screen } from "@testing-library/react"
import ContactForm from "../contact-form"
import userEvent from "@testing-library/user-event"

const inputFields = ["email", "name", "message"] as const
const errMessagesMin: { [K in (typeof inputFields)[number]]: string } = {
  email: "Invalid email",
  name: "Name must be at least 3 characters in length",
  message: "Message must be at least 50 characters in length",
}

const errMessagesMax: { [K in (typeof inputFields)[number]]: string } = {
  email: "Invalid email",
  name: "Name can't be longer than 100 characters",
  message: "Message can't be longer than 300 characters",
}

const bigString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
`

describe("Render", () => {
  it("should render the form", () => {
    render(<ContactForm />)
    const form = screen.queryByTestId("contact-form")
    expect(form).toBeInTheDocument()
  })
  inputFields.forEach((field) => {
    it(`should render the '${field}' input`, () => {
      render(<ContactForm />)
      const input = screen.queryByPlaceholderText(field.toUpperCase())
      expect(input).toBeInTheDocument()
    })
  })
})

describe("Behavior", () => {
  describe("Default value is an empty string", () => {
    inputFields.forEach((field) => {
      it(`shouldn't find value of the '${field}' input`, () => {
        render(<ContactForm />)
        const input = screen.queryByPlaceholderText(field.toUpperCase())
        expect(input).toHaveValue("")
      })
    })
  })
  describe("Input value change", () => {
    inputFields.forEach((field) => {
      const newText = "New Text"
      it(`should change value of the '${field}' input`, async () => {
        render(<ContactForm />)
        const input = await screen.findByPlaceholderText(field.toUpperCase())
        await userEvent.type(input, newText)
        expect(input).toHaveValue(newText)
      })
    })
  })
  describe("Error messages", () => {
    describe("Min", () => {
      inputFields.forEach((field) => {
        const newText = "Ne"
        it(`should render error message for min required characters in the '${field}' input`, async () => {
          render(<ContactForm />)
          const input = await screen.findByPlaceholderText(field.toUpperCase())
          await userEvent.type(input, newText)
          const btn = await screen.findByRole("button")
          await userEvent.click(btn)
          const errMsg = await screen.findByText(errMessagesMin[field])
          expect(errMsg).toBeInTheDocument()
        })
      })
    })
  })
})
