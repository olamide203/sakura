import { ExperienceAccordion } from "./accordion";
import Reveal from "../reveal";
import Title from "../title";

const ExperienceSection = () => {
  return (
    <section className="flex flex-col gap-4 pt-24" id="experience">
      <Title pre="02">Experience</Title>
      <ExperienceAccordion />
    </section>
  );
};

export default ExperienceSection;
