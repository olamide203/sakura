export type Platform = "github" | "linkedIn" | "x" | "instagram";

export interface Social {
  platform: Platform;
  link: string;
}

const socials: Social[] = [
  { platform: "github", link: "https://github.com" },
  {
    platform: "linkedIn",
    link: "https://www.linkedin.com/in/odunola-atitebi-a20926297/",
  },
  { platform: "x", link: "https://x.com/nana_fridauz_i" },
  { platform: "instagram", link: "https://instagram.com" },
];

export default socials;
