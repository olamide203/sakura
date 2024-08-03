import ProjectItem from "./item";
import projects from "~/data/projects";

const ProjectList = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-20 flex flex-col gap-10">
      <h2 className="font-mono font-bold text-4xl capitalize"> 02. Projects</h2>
      <div className="flex gap-20 flex-col w-full">
        {projects.map((item) => (
          <ProjectItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
