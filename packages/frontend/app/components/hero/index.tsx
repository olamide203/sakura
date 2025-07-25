import SocialMediaLinks from "./social-media-links";
import Reveal from "../reveal";
import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_index";
import { ArrowUpRight } from "@phosphor-icons/react/ArrowUpRight";

const Hero = () => {
  const { name, role } = useLoaderData<typeof loader>();
  return (
    <header className="lg:w-1/2 lg:top-0 lg:sticky lg:max-h-screen mt-40 lg:mt-0">
      <div className="flex flex-col gap-1 justify-center items-center lg:items-start h-full text-center lg:text-start">
        <Reveal slide className="w-fit">
          <p className="font-mono text-xl sm:text-2xl font-medium">
            Hi there 👋, I am
          </p>
        </Reveal>
        <Reveal slide className="w-fit">
          <h1 className="font-display text-5xl sm:text-7xl lg:text-6xl xl:text-7xl font-bold">
            {name}
          </h1>
        </Reveal>
        <Reveal slide className="w-fit">
          <h2 className="font-display font-semibold text-xl lg:text-2xl xl:text-3xl">
            {role}
            {/* <Cursor cursorBlinking={cursorBlinking} /> */}
          </h2>
        </Reveal>
        <Reveal slide className="w-fit my-10">
          <button className="relative border-[2px] border-neutral-900 dark:border-white px-8 py-4 rounded-full bg-white dark:bg-neutral-900 font-inter grid items-center justify-center text-black dark:text-white before:absolute before:content-[''] before:inset-0 before:translate-x-[-100%] hover:before:translate-x-0 before:translate-y-[100%] hover:before:translate-y-0 before:bg-black dark:before:bg-white hover:text-white dark:hover:text-neutral-900 before:rounded-full ring-offset-background transition-colors before:transition-transform before:duration-300 before:ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 overflow-hidden ">
            <span className="relative z-10 grid grid-flow-col gap-2 items-center justify-center font-medium">
              My Resume <ArrowUpRight />
            </span>
          </button>
        </Reveal>
        <Reveal slide className="w-fit my-20 py-2 justify-self-end ">
          <SocialMediaLinks />
        </Reveal>
      </div>
    </header>
  );
};

export default Hero;
