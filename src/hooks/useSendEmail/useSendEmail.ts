import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";

export const ContactSchema = z.object({
    email: z.string().email(),
    message: z
        .string()
        .min(50, "Message must be at least 50 characters in length")
        .max(300, "Message can't be longer than 300 characters"),
    name: z
        .string()
        .min(3, "Name must be at least 3 characters in length")
        .max(100, "Name can't be longer than 100 characters"),
});
export const useSendEmail = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({ resolver: zodResolver(ContactSchema) });

    const onSubmit = () => {
        setIsLoading(true);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current!,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
                },
            )
            .then(
                () => {
                    toast.success("Message sent!");
                    reset();
                },
                (error: { text: string }) => {
                    console.log("FAILED...", error.text);
                    toast.error("Failed to send message");
                },
            )
            .finally(() => setIsLoading(false));
    };
    const isBusy = [isLoading, isSubmitting].includes(true);

    return {
        formRef,
        isBusy,
        register,
        errors,
        handleSubmit: handleSubmit(onSubmit),
    };
};
