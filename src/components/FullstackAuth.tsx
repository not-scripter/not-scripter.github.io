import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "./ui/BackgroundGradientAnimation";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

export default function FullstackAuth() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(30, 30, 46)"
      gradientBackgroundEnd="rgb(30, 30, 46)"
      firstColor="245, 224, 220"
      secondColor="203, 166, 247"
      thirdColor="243, 139, 168"
      fourthColor="180, 190, 254"
      fifthColor="148, 226, 213"
    >
      <div className="absolute z-50 inset-0 flex items-center justify-center">
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
          Fullstack Auth <br />{" "}
          <span className="text-sm">Authentication app with Next Auth</span>
          <a href="https://nextjsfullstackauth.vercel.app">
            <HoverBorderGradient
              containerClassName="rounded-full mt-8"
              as="button"
              className="flex items-center text-xl p-0 py-1 px-6"
            >
              Visit
            </HoverBorderGradient>
          </a>
        </motion.h1>
      </div>
    </BackgroundGradientAnimation>
  );
}
