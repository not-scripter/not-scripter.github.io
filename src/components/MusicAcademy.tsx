import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import { SparklesCore } from "./ui/Sparkles";
import { motion } from "framer-motion";

export default function MusicAcademy() {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#cad3f5"
        />
      </div>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-lavender to-sapphire py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl flex items-center flex-col"
      >
        Music Academy <br /> <span className="text-sm"></span>
        <a href="https://nextjs-music-academy.vercel.app">
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
  );
}
