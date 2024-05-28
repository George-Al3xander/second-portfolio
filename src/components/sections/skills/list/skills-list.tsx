"use client"
import { Skill } from "@/types/types"
import React from "react"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
}
const SkillsList = ({ skills }: { skills: Skill[] }) => {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="show"
      className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 text-xl font-semibold"
    >
      {skills.map(({ name, icon }, index) => (
        <motion.li
          whileHover={{
            y: -10,
            scale: 0.9,
            opacity: 0.4,
          }}
          whileTap={{
            rotate: "10deg",
          }}
          variants={item}
          className="flex justify-center flex-col-reverse gap-4 items-center  rounded-xl p-4 shadow-xl bg-gray-100 border-white/10 dark:bg-stone-900 dark:fill-white"
          key={name}
        >
          {name}{" "}
          <span
            data-testid={`icon-${index}`}
            className="w-10 h-10"
            dangerouslySetInnerHTML={{ __html: icon }}
          />
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default SkillsList
