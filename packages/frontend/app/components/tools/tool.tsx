import Reveal from "../reveal";

interface ToolProps {
  name: string;
  logo: string;
}

const Tool = ({ name, logo }: ToolProps) => {
  return (
    <Reveal className="w-fit" slide>
      <div className="w-20 md:w-24 p-4 aspect-square rounded-xl cursor-pointer bg-neutral-200/40 dark:bg-neutral-800 backdrop-filter backdrop-blur grid justify-center items-center overflow-hidden">
        <img src={logo} alt={name} className="w-full" />
      </div>
    </Reveal>
  );
};

export default Tool;
