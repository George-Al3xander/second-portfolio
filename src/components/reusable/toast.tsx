"use client";

import { useThemeSwitch } from "@/hooks/useThemeSwitch/useThemeSwitch";
import { Toaster } from "react-hot-toast";

export const Toast = () => {
    const { theme } = useThemeSwitch();
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
    );
};
