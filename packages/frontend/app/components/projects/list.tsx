import ProjectItem from "./item";
import projects from "~/data/projects";
import Reveal from "../reveal";
import Title from "../title";

const ProjectList = () => {
  return (
    <section className="flex flex-col gap-10 pt-24" id="projects">
      <Title pre="03">Projects</Title>
      <div className="flex gap-20 flex-col w-full">
        {projects.map((item) => (
          <ProjectItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
