import { Button } from "@/reusable/";
import { ButtonProps } from "@/types/types";
import Link, { type LinkProps } from "next/link";
import { FaArrowRightLong, FaGithub, FaLinkedin } from "react-icons/fa6";

const HeroBtns = ({
    linkedin,
    github,
}: {
    linkedin: string;
    github: string;
}) => {
    const btns: (ButtonProps & {
        linkProps?: LinkProps & { target?: string };
    })[] = [
        {
            children: "Contact me here",
            size: "md",
            endIcon: <FaArrowRightLong data-testid="contact-hero-link" />,
            linkProps: {
                href: "#contact",
            },
        },
        {
            variants: "icon",
            children: (
                <>
                    <FaLinkedin data-testid="linkedin-hero-link" />
                    <span className="sr-only">LinkedIn profile link</span>
                </>
            ),
            linkProps: {
                href: linkedin,
                target: "_blank",
            },
        },
        {
            variants: "icon",
            children: (
                <>
                    <FaGithub data-testid="github-hero-link" />
                    <span className="sr-only">GitHub profile link</span>
                </>
            ),
            linkProps: {
                href: github,
                target: "_blank",
            },
        },
    ];
    return (
        <ul className="flex justify-center items-center gap-4 flex-col sm:flex-row">
            {btns.map(({ linkProps, ...btn }, index) => (
                <li key={"hero-btn-" + index}>
                    {linkProps ? (
                        <Link {...linkProps}>
                            <Button {...btn} />
                        </Link>
                    ) : (
                        <Button {...btn} />
                    )}
                </li>
            ))}
        </ul>
    );
};

export default HeroBtns;
