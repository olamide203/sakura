import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/navigation/navbar";
import Hero from "~/components/hero";
import Aside from "~/components/hero/aside";
import About from "~/components/about";
import Projects from "~/components/projects/list";
import Experience from "~/components/experience";
import Tools from "~/components/tools";
import Footer from "~/components/footer";
import { getPortfolio } from "~/sanity";
import { json } from "@remix-run/node";

export const loader = async () => {
  const data = await getPortfolio();
  return json(data);
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data || !data.metadata) {
    return [
      { title: "Odunola Atitebi | Data Analyst" },
      { name: "description", content: "" },
    ];
  }

  const {
    title,
    description,
    ogTitle,
    ogDescription,
    ogType,
    url,
    siteName,
    locale,
    image,
    isPwa,
    isGoogleAnalyticsEnabled,
    analyticsId,
    SiteVerificationId,
    manifest,
  } = data.metadata;
  const metaTags = [
    { title: title || ogTitle },
    { name: "description", content: description || ogDescription },
    { property: "og:title", content: ogTitle || title },
    { property: "og:description", content: ogDescription || description },
    { property: "og:url", content: url },
    { property: "og:type", content: ogType || "website" },
    { property: "og:locale", content: locale },
    { property: "og:site_name", content: siteName },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: ogTitle || title },
    { name: "twitter:description", content: ogDescription || description },
    { name: "twitter:site", content: "@nana_fridauz_i" },
    { name: "twitter:creator", content: "@olamide_farouq" },
  ];

  if (image && image.asset) {
    metaTags.push(
      { property: "og:image", content: image.asset.url },
      { name: "twitter:image", content: image.asset.url },
    );
  }
  // Conditionally add PWA and Google Analytics meta tags
  if (isPwa) {
    if (manifest) {
      // If manifest exists, add manifest-specific meta tags
      metaTags.push(
        {
          name: "application-name",
          content: manifest.short_name || "Odunola",
        },
        { name: "theme-color", content: manifest.theme_color || "#ffffff" },
        {
          name: "background-color",
          content: manifest.background_color || "#ffffff",
        },
        { name: "display", content: manifest.display || "standalone" },
      );
    }
  }

  if (isGoogleAnalyticsEnabled && analyticsId) {
    metaTags.push({
      name: "google-site-verification",
      content: SiteVerificationId || "",
    });
    metaTags.push({ name: "analytics-id", content: analyticsId });
  }

  return metaTags;
};

export default function Index() {
  return (
    <>
      <div className=" max-w-[1600px] mx-auto w-full px-4 sm:px-8 lg:px-10 subpixel-antialiased">
        <Navbar />
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Hero />
          <main className="lg:w-1/2">
            <Aside />
            <About />
            <Experience />
            <Tools />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
