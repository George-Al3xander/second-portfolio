"use client";
import { ReactNode, createContext, useContext, useState } from "react";

export const links = [
    "home",
    "about",
    "projects",
    "skills",
    "experience",
    "contact",
] as const;
const useActiveSectionManager = () => {
    const [activeSection, setActiveSection] = useState<(typeof links)[number]>(
        links[0],
    );
    const [lastClickTime, setLastClickTime] = useState(0);
    return { activeSection, setActiveSection, lastClickTime, setLastClickTime };
};

type ActiveSectionManagerResult = ReturnType<typeof useActiveSectionManager>;
const ActiveSectionContext = createContext<ActiveSectionManagerResult>({
    activeSection: "home",
    setActiveSection: () => {},
    setLastClickTime: () => {},
    lastClickTime: 0,
});

export const ActiveSectionProvider = ({
    children,
}: {
    children: ReactNode;
}) => (
    <ActiveSectionContext.Provider value={useActiveSectionManager()}>
        {children}
    </ActiveSectionContext.Provider>
);

export const useActiveSection = () => useContext(ActiveSectionContext);
