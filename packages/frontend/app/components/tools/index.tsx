import Title from "../title";
import Tool from "./tool";
import tools from "~/data/tools";

const ToolsSection = () => {
  return (
    <section id="skills" className="pt-24 flex gap-10 flex-col">
      <Title pre="03">skills</Title>
      <div className="flex gap-4 flex-wrap h-full">
        {tools.map((tool, id) => (
          <Tool key={id} name={tool.name} logo={tool.logo} id={tool.id} />
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
