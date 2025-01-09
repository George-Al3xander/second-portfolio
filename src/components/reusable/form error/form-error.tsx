"use client";
import { AnimatePresence, motion } from "framer-motion";

export const FormError = ({
    isError,
    errMessage,
}: {
    isError: boolean;
    errMessage?: string;
}) => (
    <AnimatePresence>
        {isError && (
            <motion.span
                className="text-red-600 italic text-sm"
                initial="initial"
                animate={"animate"}
                exit="initial"
                variants={{
                    initial: {
                        opacity: 0,
                        transition: { duration: 0.5 },
                    },
                    animate: {
                        opacity: 1,
                        transition: { duration: 0.5 },
                    },
                    exit: {
                        opacity: 0,
                        transition: { duration: 0.5 },
                    },
                }}
            >
                {errMessage}
            </motion.span>
        )}
    </AnimatePresence>
);
