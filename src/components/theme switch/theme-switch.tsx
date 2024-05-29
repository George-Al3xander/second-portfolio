"use client"
import React from "react"
import { Button } from "@/reusable"
import { BsSun, BsMoon } from "react-icons/bs"
import { useThemeSwitch } from "@/hooks/useThemeSwitch/useThemeSwitch"

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeSwitch()
  return (
    <Button
      className="fixed bottom-5 right-5 bg-white bg-opacity-80 backdrop-blur-[0.1rem] border border-white border-opacity-40 shadow-2xl text-gray-950"
      variants="icon"
      onClick={toggleTheme}
    >
      {theme == "light" ? (
        <BsSun data-testid="switch-sun-icon" size={18} />
      ) : (
        <BsMoon data-testid="switch-moon-icon" size={18} />
      )}
    </Button>
  )
}

export default ThemeSwitch
