import { GithubLogo } from "@phosphor-icons/react/GithubLogo";
import { ArrowSquareOut } from "@phosphor-icons/react/ArrowSquareOut";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Reveal from "../reveal";

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
  return (
    <div className="flex flex-col gap-4 items-start rounded-lg w-full ">
      <div className="rounded-lg overflow-hidden w-full shadow-lg">
        <Reveal slide>
          <AspectRatio.Root ratio={16 / 9}>
            <img
              className="h-full w-full object-cover"
              src={props.image}
              alt={props.title}
            />
          </AspectRatio.Root>
        </Reveal>
      </div>
      <div className="self-start text-left flex gap-1 flex-col">
        <Reveal className="h-fit w-fit" slide>
          <h3 className="z-[999] w-full text-3xl font-semibold capitalize text-neutral-900 font-inter pb-2">
            {props.title}
          </h3>
        </Reveal>
        <Reveal slide>
          <p className="text-lg text-neutral-900 font-inter fon-medium">
            {props.description}
          </p>
        </Reveal>
        <Reveal slide className="w-fit h-fit">
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
        </Reveal>
        <Reveal slide className="w-fit h-fit">
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
        </Reveal>
      </div>
    </div>
  );
};
export default Project;
