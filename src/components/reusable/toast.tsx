"use client"

import { useThemeSwitch } from "@/hooks/useThemeSwitch"
import React from "react"
import toast, { Toaster } from "react-hot-toast"

const Toast = () => {
  const { theme } = useThemeSwitch()
  return (
    <Toaster
      toastOptions={{
        success: {
          style: {
            background: theme == "light" ? "white" : "black",
            color: theme == "dark" ? "white" : "black",
          },
        },
        error: {
          style: {
            background: theme == "light" ? "white" : "black",
            color: theme == "dark" ? "white" : "black",
          },
        },
      }}
    />
  )
}

export default Toast
