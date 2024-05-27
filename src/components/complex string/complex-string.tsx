import { TComplexString } from "@/types/types"
import React from "react"

const ComplexString = ({ input }: { input: string | TComplexString[] }) => {
  return (
    <>
      {typeof input == "string"
        ? input
        : input.map((item, index) => {
            if (typeof item == "string") return item
            return (
              <span key={"complex-string-" + index} {...item}>
                {item.text}
              </span>
            )
          })}
    </>
  )
}

export default ComplexString
