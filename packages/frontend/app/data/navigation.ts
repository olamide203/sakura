import { LinkProps } from "@remix-run/react";

export interface Link extends LinkProps {
  text: string;
  id: string;
}

const navLinks: Link[] = [
  {
    id: "1e545823-0842-49ef-b41d-84bdd2d034d0",
    to: { pathname: "/", hash: "#home" },
    text: "home",
  },
  {
    id: "701f69f6-dbcd-4049-b7f0-0ef7f3a55620",
    to: { pathname: "/", hash: "#about" },
    text: "about",
  },
  {
    id: "df7c3436-d75e-4d6c-976c-2ea4e5980fa5",
    to: { pathname: "/", hash: "#experience" },
    text: "experience",
  },
  {
    id: "ef7a3428-d75e-4d6c-476c-2ea4e5980fa5",
    to: { pathname: "/", hash: "#skills" },
    text: "skills",
  },

  {
    id: "85db580b-4fe7-43ed-a7f3-e04827d85a7c",
    to: { pathname: "/", hash: "#projects" },
    text: "projects",
  },
];

export default navLinks;
