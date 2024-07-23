import React from "react";

import { ImageResponse } from "next/og";
import { GitHubIcon, LinkedInIcon } from "@/components/raw-svg";

const ogData = {
  title: "George Valuiskyi",
  description: "Trainee Front-End Developer Portfolio",
  links: [
    {
      href: "linkedin.com/in/valuiskyi",
      icon: <LinkedInIcon width={"50px"} height={"50px"} />,
    },
    {
      href: "github.com/George-Al3xander",
      icon: <GitHubIcon width={"50px"} height={"50px"} />,
    },
  ],
};

export const runtime = "edge";

export const alt = ogData.title;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const interSemiBold = fetch(
    new URL("../../public/assets/fonts/Inter-Bold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());
  const { title, description, links } = ogData;
  // @ts-ignore
  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "4rem",
          width: "100%",
          height: "100%",
          color: "white",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              fontSize: 100,
              fontStyle: "bold",
              borderBottom: "1px solid white",
              textTransform: "uppercase",
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: 40, fontStyle: "italic", opacity: 0.8 }}>
            {description}
          </p>
        </div>
        <ul
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            flexDirection: "column",
            fontSize: 30,
          }}
        >
          {links.map(({ icon, href }) => (
            <li
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
              key={href}
            >
              {icon}
              <p style={{ fontStyle: "bold" }}>{href}</p>
            </li>
          ))}
        </ul>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
