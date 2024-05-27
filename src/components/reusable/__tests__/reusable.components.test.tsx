import { render, screen } from "@testing-library/react"
import { SectionHeading } from "../section-heading"
import { FramerWrapper } from "../framer-wrapper"
import { ReactElement, ReactNode } from "react"

const comps: { name: string; Component: any }[] = [
  { name: "section heading", Component: SectionHeading },
  { name: "framer wrapper", Component: FramerWrapper },
]

describe("Render", () => {
  comps.forEach(({ name, Component }) => {
    describe(name, () => {
      it("should render a component", () => {
        const text = "I'm a component"
        render(<Component>{text}</Component>)
        const heading = screen.queryByText(text)
        expect(heading).toBeInTheDocument()
      })
      it("shouldn't find a component by a wrong text", () => {
        const text = "I'm a component"
        render(<Component>{text}</Component>)
        const heading = screen.queryByText("Try to find me!")
        expect(heading).not.toBeInTheDocument()
      })

      describe("tailwind styles as props", () => {})
      it("should apply the passed tailwind styles as props", () => {
        const styles = "text-4xl bg-red-600"
        render(<Component className={styles}>Text</Component>)
        const heading = screen.queryByText("Text")
        expect(heading?.className).toContain(styles)
      })
      it("should apply the right tailwind styles as props", () => {
        const styles = "text-4xl bg-red-600"
        render(<Component className={styles}>Text</Component>)
        const heading = screen.queryByText("Text")
        expect(heading?.className).not.toContain("text-2xl bg-red-50")
      })
    })
  })
})
