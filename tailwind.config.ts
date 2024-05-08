import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradientLight:
          "radial-gradient(circle at 20% 0%, rgba(255, 216, 216, 1) 0%, rgba(230, 230, 230, 1) 17%, rgba(255, 255, 255, 1) 66%)",
        gradientDark:
          "radial-gradient(circle at 20% 0%, rgba(50, 50, 50, 1) 0%, rgba(30, 30, 30, 1) 17%, rgba(0, 0, 0, 1) 66%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
export default config
