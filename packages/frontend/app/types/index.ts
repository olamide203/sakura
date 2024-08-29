import { PortableTextBlock, ImageAsset, Slug } from "sanity";

interface Image {
  asset: ImageAsset;
  sha1hash: string;
  url: string;
  _id: string;
  mimeType: string;
}

export interface Portfolio {
  name: string;
  experiences: Experience[];
  mainImage: Image;
  projects: Project[];
  socialLinks: SocialLink[];
  about: PortableTextBlock[];
  metadata: any;
  skills: Skill[];
  _id: string;
}

export interface Experience {
  achievements: PortableTextBlock[];
  company: string;
  companyURL: string;
  isCurrentJob: boolean;
  jobTitle: string;
  publishedAt: string;
  skills: ExperienceSkill[];
  startDate: string;
  endDate: string;
  _id: string;
}

export interface Project {
  description: PortableTextBlock[];
  technologies: ExperienceSkill[];
  mainImage: Image;
  publishedAt: string;
  title: string;
  slug: Slug;
  link: string;
  _id: string;
}

export type Account = "x" | "instagram" | "linkedIn" | "github";

export interface SocialLink {
  account: Account;
  url: string;
  username?: string;
  _id: string;
}

export interface ExperienceSkill {
  name: string;
  _id: string;
}

export interface Skill extends ExperienceSkill {
  link: string;
  logo: Image;
}
