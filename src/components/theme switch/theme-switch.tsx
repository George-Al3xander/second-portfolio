"use client";
import { useThemeSwitch } from "@/hooks/useThemeSwitch/useThemeSwitch";
import { Button } from "@/reusable";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useThemeSwitch();
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
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
};

export default ThemeSwitch;
