import SocialMediaLink from "~/components/ui/social-media-link";

const socialMediaLinks = () => {
  return (
    <div className="flex gap-4 items-center justify-center lg:justify-start">
      <SocialMediaLink link="https://github.com" platform="github" />
      <SocialMediaLink link="https://github.com" platform="linkedIn" />
      <SocialMediaLink link="https://github.com" platform="x" />
      <SocialMediaLink link="https://github.com" platform="instagram" />
    </div>
  );
};

export default socialMediaLinks;
