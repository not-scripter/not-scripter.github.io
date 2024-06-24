import { Spotlight } from "./ui/Spotlight";

export default function Hero() {
  return (
    <div className="h-svh w-full flex items-center justify-center antialiased relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10  w-full text-center font-bold flex flex-col gap-2">
        <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-mauve to-lavender">
          Namaste
        </h1>
        <img src="../../public/namaste.svg" alt="namaste" className="h-16" />
        <p className="font-semibold">It's notscripter here</p>
      </div>
    </div>
  );
}
