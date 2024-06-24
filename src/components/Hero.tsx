import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";

export default function Hero() {
  return (
    <div className="h-svh w-full flex items-center justify-center antialiased relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-tr from-mauve to-lavender bg-clip-text text-center text-6xl font-bold tracking-tight text-transparent flex items-center flex-col justify-center gap-2"
      >
        Namaste
        <img src="././public/namaste.svg" alt="namaste" className="h-16" />
        <span className="text-sm font-semibold tracking-normal">
          It's notscripter here
        </span>
      </motion.h1>
    </div>
  );
}
