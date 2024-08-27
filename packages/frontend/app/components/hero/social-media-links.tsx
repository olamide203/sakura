import SocialMediaLink from "~/components/ui/social-media-link";
import socials from "~/data/socials";

const socialMediaLinks = () => {
  return (
    <div className="flex gap-4 items-center justify-start">
      {socials.map((social, index) => (
        <SocialMediaLink
          link={social.link}
          platform={social.platform}
          key={index}
        />
      ))}
    </div>
  );
};

export default socialMediaLinks;
