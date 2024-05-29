"use client"

import { MdSend } from "react-icons/md"
import { clsx } from "clsx"
import { Button, FormError } from "@/reusable"
import { useSendEmail } from "@/hooks/useSendEmail/useSendEmail"

const fields: { name: string; type?: string }[] = [
  { name: "name" },
  { name: "email", type: "email" },
]

const ContactForm = () => {
  const { formRef, handleSubmit, errors, register, isBusy } = useSendEmail()
  return (
    <form
      data-testid="contact-form"
      ref={formRef}
      className="flex flex-col gap-4 w-full "
      onSubmit={handleSubmit}
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
        send{isBusy && "ing"} message{isBusy && "..."}{" "}
      </Button>
    </form>
  )
}

export default ContactForm
