"use client"
import {Button} from "@/reusable"
import React from "react"
import { motion } from "framer-motion"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="h-[calc(100vh-12rem)] w-[min(90%,40rem)]  mx-auto text-center flex flex-col gap-10">
      <motion.h1
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        className=" text-4xl sm:text-[10rem] font-bold mb-10 uppercase text-red-600"
      >
        Error
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="leading-xl opacity-60 "
      >
        Oops! It seems an error occurred while loading this page. Please try
        again later. Thank you for your patience.
      </motion.p>
      <motion.span
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full"
      >
        <Button
          className="w-full"
          variants={"ghost"}
          size={"md"}
          onClick={() => reset()}
        >
          Try Again
        </Button>
      </motion.span>
    </section>
  )
}
