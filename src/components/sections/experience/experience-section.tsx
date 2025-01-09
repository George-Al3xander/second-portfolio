"use client";

import { useActiveSection } from "@/hooks/useActiveSectionContext/useActiveSectionContext";
import { useThemeSwitch } from "@/hooks/useThemeSwitch/useThemeSwitch";
import { Section, SectionHeading } from "@/reusable";
import React, { useEffect, useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "./experience-data";

const ExperienceSection = () => {
    const { activeSection } = useActiveSection();
    const { theme } = useThemeSwitch();
    const [triggered, setTriggered] = useState(false);
    useEffect(() => {
        if (!triggered && activeSection == "experience") {
            setTriggered(true);
        }
    }, [activeSection, theme, triggered]);
    return (
        <Section viewThreshold={0.3} sectionType="experience" className="mt-28">
            <SectionHeading>Experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={triggered}
                            contentStyle={{
                                background:
                                    theme === "light"
                                        ? "#f3f4f6"
                                        : "rgba(255, 255, 255, 0.1)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme == "light"
                                        ? "0.4rem solid #9ca3af"
                                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background:
                                    theme == "light"
                                        ? "white"
                                        : "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3 className="font-semibold capitalize text-lg">
                                {item.title}
                            </h3>
                            <p className="font-normal !mt-0">{item.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </Section>
    );
};

export default ExperienceSection;
