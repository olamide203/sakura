import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/navigation/navbar";
import Hero from "~/components/hero";
import Aside from "~/components/hero/aside";
import About from "~/components/about";
import Projects from "~/components/projects/list";
import Experience from "~/components/experience";
import Tools from "~/components/tools";
import Footer from "~/components/footer";
import { getPortfolio } from "~/sanity";
import { json, TypedResponse } from "@remix-run/node";
import { Portfolio } from "~/types";

export const loader = async (): Promise<TypedResponse<Portfolio>> => {
  const data = await getPortfolio();
  return json(data);
};

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-8 lg:px-10 subpixel-antialiased">
        <Navbar />
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Hero />
          <main className="lg:w-1/2">
            <Aside />
            <About />
            <Experience />
            <Tools />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
