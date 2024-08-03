import { useState } from "react";
import HeroSVG from "./svg";
import heroImage from "~/assets/hero.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SocialMediaLinks from "./social-media-links";

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
    <section className="h-full w-full ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:min-h-[calc(min(100vh,_1000px))] grid-rows-[auto_1fr] lg:grid-rows-1 h-full items-center pt-20">
        <div className="col-start-1 col-end-2 min-h-[350px] lg:min-h-[500px] flex flex-col justify-center gap-12 lg:gap-20">
          <div className="flex flex-col justify-center h-full items-center lg:items-start">
            <p className="font-mono text-xl sm:text-2xl font-medium">
              Hi there 👋, I am
            </p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-center lg:text-start">
              Odunola Atitebi
            </h1>
            <h2 className="font-display font-semibold text-3xl lg:text-4xl xl:text-6xl">
              A Data {text}
              <Cursor cursorBlinking={cursorBlinking} />
            </h2>
          </div>
          <SocialMediaLinks />
        </div>
        <div className="col-start-1 col-end-2 lg:col-start-2 lg:col-end-3 max-w-2xl self-center w-full mx-auto lg:mr-0">
          <HeroSVG imageURL={heroImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
