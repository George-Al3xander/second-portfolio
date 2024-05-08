import { TComponent } from "@/types/types"
import React, { ReactNode } from "react"

const WrapperComp = ({
  component: Tag,
  children,
}: {
  component?: TComponent
  children: ReactNode
}) => {
  if (!Tag) return <>{children}</>
  return <Tag>{children}</Tag>
}

export default WrapperComp
