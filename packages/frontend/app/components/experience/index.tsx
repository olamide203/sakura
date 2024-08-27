import { ExperienceAccordion } from "./accordion";
import Reveal from "../reveal";

const ExperienceSection = () => {
  return (
    <section className="flex flex-col gap-4 pt-24" id="experience">
      <Reveal slide className="w-fit">
        <h2 className="font-mono font-bold text-4xl capitalize">
          02. Experience
        </h2>
      </Reveal>

      <ExperienceAccordion />
    </section>
  );
};

export default ExperienceSection;
