"use client"
import { motion } from "framer-motion"
import { MdOutlineComputer } from "react-icons/md"
import React from "react"

const HeroIcon = () => {
  return (
    <motion.span
      aria-label="Laptop icon"
      className="inline-block"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      whileHover={{ rotate: "10deg" }}
    >
      <MdOutlineComputer size={85} />
    </motion.span>
  )
}

export default HeroIcon
