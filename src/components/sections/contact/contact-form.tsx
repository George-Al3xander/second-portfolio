"use client"
import { useRef, useState } from "react"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
import Button from "@/components/reusable/button"

import FormError from "@/components/reusable/form-error"
import { MdSend } from "react-icons/md"
import { clsx } from "clsx"

const ContactSchema = z.object({
  email: z.string().email(),
  message: z
    .string()
    .min(50, "Message must be at least 50 characters in length")
    .max(300, "Message can't be longer than 300 characters"),
  name: z
    .string()
    .min(3, "Name must be at least 3 characters in length")
    .max(100, "Name can't be longer than 100 characters"),
})

const fields: { name: string; type?: string }[] = [
  { name: "name" },
  { name: "email", type: "email" },
]

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(ContactSchema) })

  const onSubmit = () => {
    setIsLoading(true)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Message sent!")
          reset()
        },
        (error: { text: string }) => {
          console.log("FAILED...", error.text)
          toast.error("Failed to send message")
        }
      )
      .finally(() => setIsLoading(false))
  }
  const isBusy = [isLoading, isSubmitting].includes(true)
  return (
    <form
      ref={formRef}
      className="flex flex-col gap-4 w-full "
      onSubmit={handleSubmit(onSubmit)}
    >
      {fields.map(({ name }) => (
        <fieldset key={name}>
          <input
            className={clsx(
              "bg-secondary border-b-2 py-4 focus:border-accent focus:outline-none focus:ring-0 w-full dark:bg-[initial] dark:text-white autofill:text-red-600",
              {
                "border-red-600": Boolean(errors && errors[name]),
              }
            )}
            id={name}
            placeholder={name.toUpperCase()}
            {...register(name)}
          />

          <FormError
            key={name + "err-message"}
            isError={Boolean(errors && errors[name])}
            errMessage={errors[name]?.message as string}
          />
        </fieldset>
      ))}
      <textarea
        placeholder="MESSAGE"
        className="bg-secondary border-b-2 py-4 focus:border-accent focus:outline-none focus:ring-0 dark:bg-[initial] "
        {...register("message")}
      />
      <FormError
        isError={Boolean(errors && errors["message"])}
        errMessage={errors["message"]?.message as string}
      />

      <Button
        endIcon={<MdSend />}
        size="md"
        disabled={isBusy}
        className="uppercase"
      >
        send{isBusy && "ing"} message{isSubmitting && "..."}{" "}
      </Button>
    </form>
  )
}

export default ContactForm
