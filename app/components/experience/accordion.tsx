import experiences from "~/data/experience";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import Reveal from "../reveal";

export function ExperienceAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full font-inter self-start justify-start h-full"
    >
      {experiences.map((item, id) => (
        <AccordionItem value={`${item.id}`} key={id}>
          <Reveal slide className="w-fit">
            <AccordionTrigger>
              <div className="grid items-start text-start">
                <h3 className="text-xl text-start leading-none">
                  {item.role} @ {item.company}
                </h3>
                <span className="leading-1">{item.duration}</span>
              </div>
            </AccordionTrigger>
          </Reveal>

          <AccordionContent>
            <ul className="flex flex-col text-lg list-disc pl-20">
              {item.responsibilities.map((item, id) => (
                <li className="text-blue-600" key={id}>
                  <span className="text-neutral-900">{item}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
