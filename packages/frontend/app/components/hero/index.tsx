import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SocialMediaLinks from "./social-media-links";
import Reveal from "../reveal";

const Hero = () => {
  const words = ["Analyst", "Scientist"];
  const [cursorBlinking, setCursorBlinking] = useState(false);
  const handleLoopDone = () => {
    setCursorBlinking(true);
  };
  const [text, _] = useTypewriter({
    words: words,
    loop: 2,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
    onLoopDone: handleLoopDone,
  });

  return (
    <header className="lg:w-1/2 lg:top-0 lg:sticky lg:max-h-screen mt-40 lg:mt-0">
      <div className="flex flex-col gap-1 justify-center items-center lg:items-start h-full">
        <Reveal slide className="w-fit">
          <p className="font-mono text-xl sm:text-2xl font-medium">
            Hi there 👋, I am
          </p>
        </Reveal>
        <Reveal slide className="w-fit">
          <h1 className="font-display text-5xl sm:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
            Odunola Atitebi
          </h1>
        </Reveal>
        <Reveal slide className="w-fit">
          <h2 className="font-display font-semibold text-3xl lg:text-4xl xl:text-6xl">
            A Data {text}
            <Cursor cursorBlinking={cursorBlinking} />
          </h2>
        </Reveal>
        <Reveal slide className="w-fit">
          <div className="my-10">
            <SocialMediaLinks />
          </div>
        </Reveal>
      </div>
    </header>
  );
};

export default Hero;