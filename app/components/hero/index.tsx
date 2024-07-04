import { useState } from "react";
import HeroSVG from "./svg";
import heroImage from "~/assets/hero.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero: React.FC = () => {
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
    <section className="h-full px-4 sm:px-8 lg:px-10 xl:px-20">
      <div className="grid grid-cols-12 gap-10 lg:min-h-[calc(min(100vh,_1000px))] h-full items-center pt-20">
        <div className="col-start-1 col-end-13 lg:col-end-7 grid-rows-[auto_1fr] lg:grid-rows-1">
          <div className="flex flex-col justify-center h-full min-h-[500px]  items-center lg:items-start">
            <p className="font-mono text-2xl font-medium">Hi there 👋, I am</p>
            <h1 className="font-display text-7xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-start">
              Odunola Atitebi
            </h1>
            <h2 className="font-display font-semibold text-3xl lg:text-4xl xl:text-5xl">
              A Data {text}
              <Cursor cursorBlinking={cursorBlinking} />
            </h2>
          </div>
        </div>
        <div className="col-start-1 col-end-13 lg:col-start-7 max-w-2xl self-center w-full mx-auto lg:mr-0">
          <HeroSVG imageURL={heroImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
