"use client"

import { Theme } from "@/types/types"
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

const useThemeSwitchManager = () => {
  const [theme, setTheme] = useState<Theme>("dark")

  const toggleTheme = () => {
    if (theme == "light") {
      setTheme("dark")
      window.localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
    } else {
      setTheme("light")
      window.localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
    }
  }

  useEffect(() => {
    const themeStorage = window.localStorage.getItem("theme") as Theme | null
    if (themeStorage) {
      setTheme(themeStorage)
      if (themeStorage == "dark") {
        document.documentElement.classList.add("dark")
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }, [])

  return { theme, toggleTheme }
}

type ThemeSwitchManager = ReturnType<typeof useThemeSwitchManager>

const ThemeContext = createContext<ThemeSwitchManager>({
  theme: "dark",
  toggleTheme: () => {},
})

export const ThemeSwitchContextProvider = ({
  children,
}: {
  children: ReactNode
}) => (
  <ThemeContext.Provider value={useThemeSwitchManager()}>
    {children}
  </ThemeContext.Provider>
)

export const useThemeSwitch = () => useContext(ThemeContext)
