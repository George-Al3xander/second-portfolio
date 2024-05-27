"use client"
import { RotateLoader } from "react-spinners"
import React from "react"
import { useThemeSwitch } from "@/hooks/useThemeSwitch"


const Loading = () => {  
  const { theme } = useThemeSwitch()
  return (
    <section className="h-[calc(100vh-12rem)]  flex justify-center items-center">
      <RotateLoader color={theme == "light" ? "black" : " white"} />   
    </section>
  )
}

export default Loading
