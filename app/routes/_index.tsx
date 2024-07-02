import type { MetaFunction } from "@remix-run/node";
import Navbar from "../components/navbar.tsx";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
}

export default function Index() {
  return (
    <Navbar />
  );
}
