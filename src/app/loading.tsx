"use client";
import { useThemeSwitch } from "@/hooks/useThemeSwitch/useThemeSwitch";
import { RotateLoader } from "react-spinners";

const Loading = () => {
    const { theme } = useThemeSwitch();
    return (
        <section className="h-[calc(100vh-12rem)]  flex justify-center items-center">
            <RotateLoader color={theme == "light" ? "black" : " white"} />
        </section>
    );
};

export default Loading;
