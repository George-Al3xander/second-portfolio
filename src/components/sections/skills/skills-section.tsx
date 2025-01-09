import { getSkills } from "@/lib/actions";
import { Section, SectionHeading } from "@/reusable";
import SkillsList from "./list/skills-list";

const SkillsSection = async () => {
    const skills = await getSkills();
    return (
        <Section sectionType="skills" className="mt-28">
            <SectionHeading>My skills</SectionHeading>
            <SkillsList skills={skills} />
        </Section>
    );
};

export default SkillsSection;
