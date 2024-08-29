import Reveal from "./reveal";

interface TitleProps {
  children: string;
  pre: string;
}

const Title = ({ children, pre }: TitleProps) => {
  return (
    <Reveal slide className="w-fit">
      <h2 className="font-mono font-bold text-2xl md:text-3xl lg:text-4xl capitalize">
        {pre}
        <em className="text-[#F4A261] pr-2">.</em>
        {children}
      </h2>
    </Reveal>
  );
};

export default Title;
