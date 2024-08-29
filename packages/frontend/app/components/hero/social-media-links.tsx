import { useLoaderData } from "@remix-run/react";
import SocialMediaLink from "~/components/ui/social-media-link";
import { loader } from "~/routes/_index";

const socialMediaLinks = () => {
  const { socialLinks } = useLoaderData<typeof loader>();
  return (
    <div className="flex gap-4 items-center justify-start">
      {socialLinks.map((social) => (
        <SocialMediaLink
          link={social.url}
          platform={social.account}
          key={social._id}
        />
      ))}
    </div>
  );
};

export default socialMediaLinks;
