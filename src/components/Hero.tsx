import { Spotlight } from "./ui/Spotlight";

export default function Hero() {
  const test = () => {
    alert("test");
  };
  return (
    <div className="h-svh w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Namaste
          </span>
          🙏
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Its notscripter here
        </p>
        <button onClick={test}>Test</button>
      </div>
    </div>
  );
}
