import ProjectItem from "./item";
import projects from "~/data/projects";
import Reveal from "../reveal";

const ProjectList = () => {
  return (
    <section className="flex flex-col gap-10 py-24" id="projects">
      <Reveal slide className="w-fit">
        <h2 className="font-mono font-bold text-4xl capitalize">
          03. Projects
        </h2>
      </Reveal>
      <div className="flex gap-20 flex-col w-full">
        {projects.map((item) => (
          <ProjectItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
