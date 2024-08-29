import { GithubLogo } from "@phosphor-icons/react/GithubLogo";
import { ArrowSquareOut } from "@phosphor-icons/react/ArrowSquareOut";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Reveal from "../reveal";
import { Project as ProjectProps } from "~/types";
import { PortableText } from "@portabletext/react";

const Project = (props: ProjectProps) => {
  return (
    <div className="flex flex-col gap-4 items-start rounded-lg w-full cursor-pointer">
      <div className="rounded-lg overflow-hidden w-full shadow-lg">
        <Reveal slide>
          <AspectRatio.Root ratio={16 / 9}>
            <img
              className="h-full w-full object-cover"
              src={props.mainImage.asset.url}
              alt={props.title}
            />
          </AspectRatio.Root>
        </Reveal>
      </div>
      <div className="self-start text-left flex gap-1 flex-col my-2">
        <Reveal className="h-fit w-fit" slide>
          <h3 className="z-[999] w-full text-xl md:text-2xl lg:text-3xl font-bold capitalize text-neutral-900 font-urbanist pb-2">
            {props.title}
          </h3>
        </Reveal>
        <div className="flex flex-col gap-4 md:text-lg text-neutral-900 font-inter text-base">
          <PortableText value={props.description} />
        </div>
        <Reveal slide className="w-fit h-fit">
          <div className="mt-4 flex items-center gap-2">
            {props.technologies.map((item) => (
              <span
                className="rounded-2xl bg-blue-400/40 px-3 capitalize text-blue-500 font-display"
                key={item._id}
              >
                {item.name}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal slide className="w-fit h-fit">
          <div className="mt-4 flex items-center gap-4">
            <a
              href={props.link}
              className="text-2xl text-neutral-900 hover:text-blue-400"
            >
              <GithubLogo />
            </a>
            <a
              href={props.link}
              className="text-2xl text-neutral-900 hover:text-blue-400"
            >
              <ArrowSquareOut />
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
export default Project;
