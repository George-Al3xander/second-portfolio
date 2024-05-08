"use client"
import { motion, useAnimationControls, AnimatePresence } from "framer-motion"
import { useEffect } from "react"

const FormError = ({
  isError,
  errMessage,
}: {
  isError: boolean
  errMessage?: string
}) => {
  const controls = useAnimationControls()
  //   useEffect(() => {
  //     if (isError) {
  //       controls.start("animate")
  //     } else {
  //       controls.start("initial")
  //     }
  //   }, [controls, isError])
  return (
    <AnimatePresence>
      {isError && (
        <motion.span
          className="text-red-600 italic text-sm"
          initial="initial"
          animate={"animate"}
          exit="initial"
          variants={{
            initial: {
              opacity: 0,
              transition: { duration: 0.5 },
            },
            animate: {
              opacity: 1,
              transition: { duration: 0.5 },
            },
            exit: {
              opacity: 0,
              transition: { duration: 0.5 },
            },
          }}
        >
          {errMessage}
        </motion.span>
      )}
    </AnimatePresence>
  )
}

export default FormError
