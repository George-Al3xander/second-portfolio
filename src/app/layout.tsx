import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme switch/theme-switch";
import { ActiveSectionProvider } from "@/hooks/useActiveSectionContext/useActiveSectionContext";
import { ThemeSwitchContextProvider } from "@/hooks/useThemeSwitch/useThemeSwitch";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "George Valuiskyi | Portfolio",
    description:
        "I'm George, a trainee front-end/full-stack developer. I enjoy building sites & apps, and my focus is on React (Next.js).",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
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
    );
}
