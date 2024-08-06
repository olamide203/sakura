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
                <h3 className="text-lg lg:text-xl text-start leading-none">
                  {item.role} @{" "}
                  <a
                    href={item.link}
                    target="_blank"
                    className="underline decoration-[#F4A261]"
                  >
                    {item.company}
                  </a>
                </h3>
                <span className="leading-1">{item.duration}</span>
              </div>
            </AccordionTrigger>
          </Reveal>

          <AccordionContent>
            <ul className="flex flex-col text-base md:text-lg list-disc pl-14 lg:pl-20 gap-2">
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
