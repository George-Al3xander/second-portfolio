"use client";

import { useActiveSection } from "@/hooks/useActiveSectionContext/useActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

import { SectionProps } from "@/types/types";

export const Section = ({
    className,
    viewThreshold: threshold = 0.75,
    sectionType,
    ...props
}: SectionProps) => {
    const { ref: sectionRef, inView } = useInView({
        threshold,
    });
    const { setActiveSection, lastClickTime } = useActiveSection();

    useEffect(() => {
        if (inView && Date.now() - lastClickTime > 1000) {
            setActiveSection(sectionType);
        }
    }, [inView, sectionType, setActiveSection, lastClickTime]);

    return (
        <section
            data-testid={sectionType}
            id={sectionType}
            ref={sectionRef}
            className={twMerge("scroll-mt-28", className)}
            {...props}
        />
    );
};
