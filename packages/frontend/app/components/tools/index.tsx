import { useLoaderData } from "@remix-run/react";
import Title from "../title";
import Tool from "./tool";
import { loader } from "~/routes/_index";

const ToolsSection = () => {
  const { skills } = useLoaderData<typeof loader>();
  return (
    <section id="skills" className="pt-24 flex gap-10 flex-col">
      <Title pre="03">skills</Title>
      <div className="flex gap-4 flex-wrap h-full">
        {skills.map((skill) => (
          <Tool key={skill._id} name={skill.name} logo={skill.logo.asset.url} />
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
