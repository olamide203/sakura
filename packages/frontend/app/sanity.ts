import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const sanity = createClient({
  projectId: "k5cl2l8h",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-08-26",
});

export const urlFor = (source: SanityImageSource) => {
  return imageUrlBuilder(sanity).image(source);
};

export const getPortfolio = async () => {
  const query = `*[_type=="portfolio"][0]{
  ...,
  mainImage { 
    asset->{
      url,
      metadata
    }
  },
  about[] {
    ...,
    markDefs[]-> {
      ...,
      "slug": select(_type == "internalLink" => @.reference->slug)
    }
  },
  socialLinks[]-> {
    account,
    url,
    username
  },
  projects[]-> {
    ...,
    mainImage { 
      asset->{ url, metadata }
    },
    description[] {
      ...,
      markDefs[]-> {
        ...,
        "slug": select(_type == "internalLink" => @.reference->slug)
      }
    },
    technologies[]-> {
      name,
      link 
    }
  },
  experiences[]-> { 
    achievements,
    company,
    companyURL,
    jobTitle,
    isCurrentJob,
    description,
    responsibilities
  },
  skills[]-> {
    title,
    link,
    logo {
      asset->{
        url,
        metadata
      }
    }
  },
  metadata-> {
    ...,
  }
}`;

  const data = await sanity.fetch(query);
  return data;
};
