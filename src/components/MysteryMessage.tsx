import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import { LampContainer } from "./ui/Lamp";
import { motion } from "framer-motion";

export default function MysteryMessage() {
  return (
    <LampContainer className="bg-base">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-flamingo to-teal py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl flex items-center flex-col"
      >
        Mystery Message <br />{" "}
        <span className="text-sm">Send Annonymous Messages</span>
        <a href="https://nextjs-mystery-message.vercel.app">
          <HoverBorderGradient
            containerClassName="rounded-full mt-8"
            as="button"
            className="flex items-center text-xl p-0 py-1 px-6"
          >
            Visit
          </HoverBorderGradient>
        </a>
      </motion.h1>
    </LampContainer>
  );
}
