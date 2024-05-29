import { renderHook, act } from "@testing-library/react"
import emailjs from "@emailjs/browser"
import { useSendEmail } from "../useSendEmail"

const setup = () => renderHook(() => useSendEmail())

describe("useSendEmail", () => {
  it("should have the correct default values", () => {
    const { result } = setup()
    expect(result.current.isBusy).toBe(false)
    expect(JSON.stringify(result.current.errors)).toBe("{}")
  })
})
