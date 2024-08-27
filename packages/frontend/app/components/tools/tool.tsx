import { Tool as ToolProps } from "~/data/tools";
import Reveal from "../reveal";

const Tool = ({ name, logo }: ToolProps) => {
  return (
    <Reveal className="w-fit" slide>
      <div className="w-20 md:w-24 p-4 aspect-square rounded-xl cursor-pointer bg-neutral-200/40 backdrop-filter backdrop-blur grid justify-center items-center overflow-hidden">
        <img src={logo} alt={name} className="w-full"></img>
      </div>
    </Reveal>
  );
};

export default Tool;
