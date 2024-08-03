import React from "react";
import { styled } from "~/stitches.config";
import { GithubLogo } from "@phosphor-icons/react/GithubLogo";
import { ArrowSquareOut } from "@phosphor-icons/react/ArrowSquareOut";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

export interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  repo?: string;
  id: number;
}

const Project = (props: ProjectProps) => {
  const imagePosition =
    props.id % 2 === 1 ? "lg:col-span-6" : "lg:col-start-7 lg:col-span-6";
  const projectPosition =
    props.id % 2 === 0 ? "lg:col-span-6" : "lg:col-start-7 lg:col-span-6";

  return (
    <div className="grid grid-cols-12 grid-rows-auto gap-4 md:grid-rows-1 items-start rounded-lg w-full ">
      <div
        className={`relative col-span-12 row-start-1 row-end-2 self-center ${imagePosition}`}
      >
        <div className="rounded-lg overflow-hidden w-full shadow-lg">
          <AspectRatio.Root ratio={16 / 9}>
            <img
              className="h-full w-full object-cover"
              src={props.image}
              alt={props.title}
            />
          </AspectRatio.Root>
        </div>
      </div>
      <div
        className={`self-start row-start-2 row-end-3 lg:row-start-1 lg:row-end-2 col-span-12 overflow-hidden h-full rounded-md text-left ${projectPosition}`}
      >
        <h3 className="text-3xl font-semibold capitalize text-neutral-900 font-inter pb-2">
          {props.title}
        </h3>
        <p className="text-lg text-neutral-900 line-clamp-[8] font-inter fon-medium">
          {props.description}
        </p>
        <div className="mt-4 flex items-center gap-2">
          {props.technologies.map((tech, index) => (
            <span
              className="rounded-2xl bg-blue-400/40 px-3 capitalize text-blue-500 font-display"
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-4">
          <a
            href={props.repo}
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
      </div>
    </div>
  );
};
export default Project;
