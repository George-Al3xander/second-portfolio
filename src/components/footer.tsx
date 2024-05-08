import React from "react"

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small>&copy; {new Date().getFullYear()} George Valuiskyi</small>
      <p className="text-xs">
        <span className="font-semibold">Current portfolio built with: </span>
        React & Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion,
        Zod.
      </p>
    </footer>
  )
}

export default Footer
