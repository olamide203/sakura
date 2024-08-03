import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/navbar";
import Hero from "~/components/hero";
import About from "~/components/about";
import Projects from "~/components/projects/list";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1600px] mx-auto w-full px-4 sm:px-8 lg:px-10 pb-40">
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}
