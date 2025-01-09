import { FramerWrapper, Section, SectionHeading } from "@/reusable";
import ContactForm from "../form/contact-form";

const variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

const ContactSection = () => {
    return (
        <Section sectionType="contact" className="my-28  w-[min(90%,40rem)]">
            <FramerWrapper
                className="w-full"
                initial="initial"
                whileInView={"animate"}
                variants={variants}
            >
                <SectionHeading>Contact</SectionHeading>
                <ContactForm />
            </FramerWrapper>
        </Section>
    );
};

export default ContactSection;
