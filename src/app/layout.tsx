import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ActiveSectionProvider } from "@/hooks/useActiveSectionContext"
import Footer from "@/components/footer"
import ThemeSwitch from "@/components/theme-switch"
import { ThemeSwitchContextProvider } from "@/hooks/useThemeSwitch"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "George V. | Personal Portfolio",
  description: "George is trainee front-end developer ",
  icons: {
    icon: "./another-icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gradientLight dark:bg-gradientDark  dark:text-gray-50 dark:text-opacity-90  text-gray-950 relative pt-28 sm:pt-36`}
      >
        <ThemeSwitchContextProvider>
          <ActiveSectionProvider>{children}</ActiveSectionProvider>
          <ThemeSwitch />
          <Footer />
        </ThemeSwitchContextProvider>
      </body>
    </html>
  )
}
