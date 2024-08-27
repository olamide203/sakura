import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/navbar";
import Hero from "~/components/hero";
import Aside from "~/components/hero/aside";
import About from "~/components/about";
import Projects from "~/components/projects/list";
import Experience from "~/components/experience";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-8 lg:px-10">
        <Navbar />
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Hero />
          <main className="lg:w-1/2">
            <Aside />
            <About />
            <Experience />
            <Projects />
          </main>
        </div>
      </div>
    </>
  );
}
