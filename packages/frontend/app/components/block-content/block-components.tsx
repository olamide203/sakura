import { PortableTextComponents } from "@portabletext/react";
import Image from "./image";
import CodeBlock from "./code-block";
import Link from "./link";

export const components: PortableTextComponents = {
  types: {
    image: Image,
    code: CodeBlock,
  },
  block: {
    normal: ({ children }) => (
      <p className="text-base lg:text-lg leading-relaxed tracking-wide py-2 text-neutral-900 dark:text-white">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-2 ml-10">{children}</ul>,
    number: ({ children }) => <ol className="mt-2 ml-10">{children}</ol>,
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
  marks: {
    link: Link,
  },
};
