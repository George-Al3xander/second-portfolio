import React from "react"
import {FramerWrapper} from "./framer-wrapper"
export const Divider = () => {
  return (
    <FramerWrapper
      component="div"
      initial={{
        width: 0,
        y: -200,
        opacity: 0,
      }}
      animate={{ width: "4px", y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-gray-300 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20 "
    />
  )
}


