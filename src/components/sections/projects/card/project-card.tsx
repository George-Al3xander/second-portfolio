"use client"
import { Button } from "@/reusable"
import { ButtonProps, Project } from "@/types/types"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link, { LinkProps } from "next/link"
import React, { useRef } from "react"
import { FaCode } from "react-icons/fa"

const ProjectCard = ({
  description,
  name,
  url_github,
  url_preview,
  img,
}: Project) => {
  const btns: (ButtonProps & {
    linkProps: LinkProps & { target?: string }
  })[] = [
    {
      children: "View preview",
      linkProps: {
        href: url_preview || "",
        target: "_blank",
      },
    },
    {
      variants: "ghost",
      children: "View code",
      startIcon: <FaCode />,
      linkProps: {
        href: url_github || "",
        target: "_blank",
      },
    },
  ]
  const cardRef = useRef<HTMLLIElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.33 1"],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.li style={{ scale, opacity }} ref={cardRef} className="group">
      <div className="bg-gray-100 flex-col-reverse sm:flex-row  group-even:sm:flex-row-reverse hover:bg-gray-200 transition rounded-lg flex gap-4 shadow-lg justify-between max-w-[42rem] sm:min-h-[20rem] border border-black/5 bg:border-white/5 dark:bg-white/10 dark:hover:bg-gray-700">
        <div className="p-8 basis-[100%] flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
            {description}
          </p>
          <ul className="flex gap-4 mt-auto">
            {btns.map(({ linkProps, ...btn }, index) => {
              if (linkProps.href) {
                return (
                  <li key={"hero-btn-" + index}>
                    <Link {...linkProps}>
                      <Button {...btn} />
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        </div>
        <div className="overflow-hidden  relative basis-[100%] ">
          <Image
            width={1300}
            height={700}
            className="sm:absolute  sm:-bottom-10 object-cover object-left rounded-lg shadow-lg sm:-right-10 group-even:right-10 h-full w-full  group-hover:scale-[1.04]   sm:group-hover:-translate-x-3   sm:group-hover:translate-y-3   sm:group-hover:-rotate-2      group-even:sm:group-hover:translate-x-3   sm:group-even:group-hover:translate-y-3   sm:group-even:group-hover:rotate-2 transition-all"
            alt={`${name} showcase`}
            src={img}
          />
        </div>
      </div>
    </motion.li>
  )
}

export default ProjectCard
