import { LinkedinLogo } from "@phosphor-icons/react/LinkedinLogo";
import { XLogo } from "@phosphor-icons/react/XLogo";
import { InstagramLogo } from "@phosphor-icons/react/InstagramLogo";
import { GithubLogo } from "@phosphor-icons/react/GithubLogo";
import type { Platform } from "~/data/socials";

interface SocialMediaLinkProps {
  link: string;
  platform: Platform;
}

const platformIcons = {
  github: <GithubLogo />,
  linkedIn: <LinkedinLogo />,
  x: <XLogo />,
  instagram: <InstagramLogo />,
};

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  platform,
  link,
}) => {
  return (
    <a
      href={link}
      className="relative aspect-square h-14 sm:h-20 rounded-full text-2xl sm:text-4xl bg-white text-black inline-flex items-center justify-center whitespace-nowrap before:absolute before:content-[''] before:inset-0 before:translate-x-[-100%] hover:before:translate-x-0 before:translate-y-[100%] hover:before:translate-y-0 before:bg-black hover:text-white before:rounded-full ring-offset-background transition-colors before:transition-transform before:duration-300 before:ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 overflow-hidden border-2 border-black"
      tabIndex={0}
      target="_blank"
    >
      <span className="z-10">{platformIcons[platform]}</span>
    </a>
  );
};

export default SocialMediaLink;
