"use client"
import React, { useActionState, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import clsx from "clsx"
import { links, useActiveSection } from "@/hooks/useActiveSectionContext"

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
}

const variantsDiv = {
  initial: { opacity: 0, x: "-50%", y: -100 },
  animate: { opacity: 1, x: "-50%", y: 0 },
}

const Header = () => {
  const { activeSection, setActiveSection, setLastClickTime } =
    useActiveSection()

  return (
    <header className="z-50 relative">
      <motion.div
        variants={variantsDiv}
        initial={"initial"}
        animate={"animate"}
        className="fixed  top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full  border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-stone-950 dark:border-black/40 dark:bg-opacity-75"
      />
      <nav className="flex  fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium  sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              variants={variants}
              initial={"initial"}
              animate={"animate"}
              className="h-3/4 flex items-center justify-center relative"
              key={link}
            >
              <Link
                className={clsx(
                  "capitalize w-full items-center justify-center p-3 hover:text-stone-950 dark:hover:text-stone-300 transition dark:text-stone-500",
                  {
                    "text-stone-950 dark:!text-stone-300":
                      activeSection === link,
                  }
                )}
                onClick={() => {
                  setActiveSection(link)
                  setLastClickTime(Date.now())
                }}
                href={`#${link}`}
              >
                {link}
                {link === activeSection && (
                  <motion.span
                    layoutId="ActiveSection"
                    className="bg-gray-100 dark:bg-stone-800 rounded-full absolute inset-0 -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
