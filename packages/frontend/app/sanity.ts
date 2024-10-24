import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery } from "groq";
import { PortfolioQueryResult } from "./types";

export const sanity = createClient({
  projectId: "k5cl2l8h",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-08-26",
});

export const urlFor = (source: SanityImageSource) => {
  return imageUrlBuilder(sanity).image(source);
};

export const getPortfolio = async (): Promise<PortfolioQueryResult> => {
  const portfolioQuery = defineQuery(`*[_type=="portfolio"][0]{
  ...,
  mainImage { 
    ...,
    asset->{
      ...,
    },
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
    username,
    _id
  },
  projects[]-> {
    ...,
    mainImage { 
      ...,
      asset->{ ..., }
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
      _id 
    }
  },
  "experiences": *[_type == "experience"] | order(publishedAt desc){
    ...,
    skills[]-> {
      name,
      _id
      },
      }  ,
  skills[]-> {
    name,
    link,
    _id,
    logo {
      asset->{
        ...,
      }
    }
  },
  metadata-> {
    ...,
    image { 
    ...,
    asset->{
      ...,
    },
  },
  }
}`);

  return await sanity.fetch(portfolioQuery);
};
