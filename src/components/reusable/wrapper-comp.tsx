import { TComponent } from "@/types/types"
import React, { ReactNode } from "react"

export const WrapperComp = ({
  component: Tag,
  children,
}: {
  component?: TComponent
  children: ReactNode
}) => {
  if (!Tag) return <>{children}</>
  return <Tag>{children}</Tag>
}


