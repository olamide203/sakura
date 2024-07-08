import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/navbar";
import Hero from "~/components/hero";

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
      <main className="max-w-[1600px] mx-auto overflow-x-hidden">
        <Hero />
      </main>
    </>
  );
}
