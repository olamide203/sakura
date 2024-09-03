import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import Reveal from "../reveal";
import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_index";
import { UseDateTimeFormatOptions } from "sanity";
import { PortableText, PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  list: {
    bullet: ({ children }) => (
      <ul className="flex flex-col text-base md:text-lg list-disc pl-14 lg:pl-20 gap-2">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-blue-600">
        <span className="text-neutral-900 dark:text-white">{children}</span>
      </li>
    ),
  },
};
export function ExperienceAccordion() {
  const { experiences } = useLoaderData<typeof loader>();

  const dateOptionns: UseDateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full font-inter self-start justify-start h-full"
    >
      {experiences.map((item, id) => (
        <AccordionItem value={`${item._id}`} key={id}>
          <Reveal slide className="w-fit">
            <AccordionTrigger>
              <div className="grid items-start text-start">
                <h3 className="text-lg lg:text-xl text-start leading-none">
                  {item.jobTitle} @{" "}
                  <a
                    href={item.companyURL}
                    target="_blank"
                    className="underline decoration-[#F4A261]"
                  >
                    {item.company}
                  </a>
                </h3>
                <span className="leading-1">
                  {new Date(item.startDate).toLocaleDateString(
                    "en-US",
                    dateOptionns,
                  )}
                  {" - "}
                  {item.isCurrentJob
                    ? "Present"
                    : new Date(item.endDate).toLocaleDateString(
                        "en-US",
                        dateOptionns,
                      )}
                </span>
              </div>
            </AccordionTrigger>
          </Reveal>

          <AccordionContent>
            <PortableText value={item.achievements} components={components} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
