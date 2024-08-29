import ProjectItem from "./item";
import Title from "../title";
import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_index";

const ProjectList = () => {
  const { projects } = useLoaderData<typeof loader>();
  return (
    <section className="flex flex-col gap-10 pt-24" id="projects">
      <Title pre="03">Projects</Title>
      <div className="flex gap-20 flex-col w-full">
        {projects.map((item) => (
          <ProjectItem key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
