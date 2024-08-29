import { useLoaderData } from "@remix-run/react";
import Reveal from "../reveal";
import Title from "../title";
import { loader } from "~/routes/_index";
import { PortableText } from "@portabletext/react";
import { components } from "../block-content/block-components";

const About = () => {
  const { about } = useLoaderData<typeof loader>();
  return (
    <section className="flex flex-col gap-10 pt-24" id="about">
      <div className="flex flex-col gap-4 text-base md:text-lg text-neutral-900 font-inter fon-medium self-start">
        <Title pre="01">About</Title>
        <Reveal className="w-full" slide>
          <PortableText value={about} components={components} />
        </Reveal>
      </div>
    </section>
  );
};

export default About;
