import { buttonVariants } from "@/components/reusable/button"
import { links } from "@/hooks/useActiveSectionContext"
import { VariantProps } from "class-variance-authority"
import {
  ComponentPropsWithoutRef,
  ComponentType,
  HTMLAttributes,
  ReactNode,
} from "react"

export type SectionProps = HTMLAttributes<HTMLElement> & {
  sectionType: (typeof links)[number]
  viewThreshold?: number | number[]
}

export type HeroSectionProps = {
  title: TComplexString[]
  linkedin: string
  github: string
}

export type TComponent = ComponentType | keyof JSX.IntrinsicElements

export type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    startIcon?: ReactNode
    endIcon?: ReactNode
    isIcon?: boolean
    component?: TComponent
    disabled?: boolean
  }

export type TComplexString =
  | string
  | { className?: React.ComponentProps<"span">["className"]; text: string }

export type Project = {
  description: string
  isFullstack?: boolean
  name: string
  url_github?: string
  url_preview?: string
  id: string
  img: string
}

export type Links = {
  email: string
  github: string
  linkedin: string
  id: string
}

export type Description = {
  description: string
  id: string
}

export type LinksCollection = [Links, Description]

export type Skill = {
  id: string
  icon: string
  name: string
  order: number
}

export type Theme = "dark" | "light"
