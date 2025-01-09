import React from "react";
import { MdOutlineWeb } from "react-icons/md";
import { SiTheodinproject } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";

export const experiencesData = [
    {
        title: "Completed The Odin Project",
        location: "Ukraine",
        description:
            "I completed The Odin Project in 5 months. This path guided me through the entirety of the JavaScript curriculum. I followed the courses in the order they were presented, each one building on the last. They taught me all the skills I needed to create stunning, responsive websites from scratch using JavaScript and Node.js.",
        icon: React.createElement(SiTheodinproject),
        date: "2023",
    },
    {
        title: "Trainee Front-End Developer",
        location: "Ukraine",
        description:
            "Since finishing The Odin Project, I have continued to deepen my understanding of React. This involved delving into advanced concepts such as context, memoization, state management, and render optimization.",
        icon: React.createElement(MdOutlineWeb),
        date: "2023 - present",
    },
    {
        title: "Trainee Full-Stack Developer",
        location: "Ukraine",
        description:
            "I'm now a trainee full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Drizzle and MongoDB. I'm open to part-time opportunities.",
        icon: React.createElement(VscServerProcess),
        date: "2023 - present",
    },
] as const;
