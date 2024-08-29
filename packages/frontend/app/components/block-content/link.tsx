import { PortableTextLink } from "@portabletext/types";

interface LinkProps {
  children: React.ReactNode | string;
  value?: PortableTextLink;
}
const Link = ({ value, children }: LinkProps) => {
  const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
  return (
    <a
      href={value?.href}
      target={target}
      rel={target === "_blank" ? "noindex nofollow" : ""}
      className="text-[#115DAE] underline"
    >
      {children}
    </a>
  );
};

export default Link;
