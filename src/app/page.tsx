import Header from "@/components/header";
import AboutSection from "@/components/sections/about/about-section";
import ContactSection from "@/components/sections/contact/section/contact-section";
import ExperienceSection from "@/components/sections/experience/experience-section";
import HeroSection from "@/components/sections/hero/hero-section";
import ProjectsSection from "@/components/sections/projects/projects-section";
import SkillsSection from "@/components/sections/skills/skills-section";
import { getLinks } from "@/lib/actions";
import { Divider, Toast } from "@/reusable";
import { TComplexString } from "@/types/types";

const title = [
    { text: "Hello, I'm George.", className: "font-bold" },
    "I'm a ",
    {
        text: "trainee front-end / full-stack developer",
        className: "font-bold",
    },
    ". I enjoy building ",
    { text: "sites & apps", className: "italic" },
    ". My focus is ",
    { text: "React (Next.js)", className: "underline" },
    ".",
];

export default async function Home() {
    const [links, { description: descJson }] = await getLinks();
    const description = JSON.parse(descJson) as TComplexString[];

    return (
        <>
            <Toast />
            <Header />
            <main className="flex flex-col items-center px-4 ">
                <HeroSection {...links} title={title} />
                <Divider />
                <AboutSection text={description} />
                <ProjectsSection />
                <SkillsSection />
                <ExperienceSection />
                <ContactSection />
            </main>
        </>
    );
}
