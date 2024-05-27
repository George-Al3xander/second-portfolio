import React from "react"

import { FaArrowRightLong, FaLinkedin, FaGithub } from "react-icons/fa6"
import { ButtonProps } from "@/types/types"
import Link, { type LinkProps } from "next/link"
import { Button } from "@/reusable/"


const HeroBtns = ({
  linkedin,
  github,
}: {
  linkedin: string
  github: string
}) => {
  const btns: (ButtonProps & {
    linkProps?: LinkProps & { target?: string }
  })[] = [
    {
      children: "Contact me here",
      size: "md",
      endIcon: <FaArrowRightLong />,
      linkProps: {
        href: "#contact",
      },
    },
    {
      variants: "icon",
      children: <FaLinkedin />,
      linkProps: {
        href: linkedin,
        target: "_blank",
      },
    },
    {
      variants: "icon",
      children: <FaGithub />,
      linkProps: {
        href: github,
        target: "_blank",
      },
    },
  ]
  return (
    <ul className="flex justify-center items-center gap-4 flex-col sm:flex-row">
      {btns.map(({ linkProps, ...btn }, index) => (
        <li key={"hero-btn-" + index}>
          {linkProps ? (
            <Link {...linkProps}>
              <Button {...btn} />
            </Link>
          ) : (
            <Button {...btn} />
          )}
        </li>
      ))}
    </ul>
  )
}

export default HeroBtns
