import Button from "@/components/reusable/button"
import FramerWrapper from "@/components/reusable/framer-wrapper"
import Link from "next/link"
import React from "react"
import { FaHome } from "react-icons/fa"
const NotFoundPage = () => {
  return (
    <section className="h-[calc(100vh-12rem)] w-[min(90%,40rem)]  mx-auto text-center flex flex-col gap-10">
      <FramerWrapper
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-4xl sm:text-[10rem] font-bold mb-10 sm:mb-[7rem]">
          Ooops
        </h3>
      </FramerWrapper>
      <FramerWrapper
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="font-semibold text-2xl sm:text-4xl uppercase">
          404 - page not found
        </h1>
      </FramerWrapper>
      <FramerWrapper
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="leading-xl opacity-60 ">
          Looks like you&apos;ve wandered off the path. This is just a one-page
          portfolio, so there&apos;s not much else to see here. Feel free to
          explore by going to another unexciting path or return to the homepage.
        </p>
      </FramerWrapper>
      <FramerWrapper
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link href={"/"}>
          <Button
            startIcon={<FaHome />}
            className="w-full"
            variants={"ghost"}
            size={"md"}
          >
            Home
          </Button>
        </Link>
      </FramerWrapper>
    </section>
  )
}

export default NotFoundPage
