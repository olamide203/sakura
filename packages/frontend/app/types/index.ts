import { PortableTextBlock, ImageMetadata, ImageAsset, Image } from "sanity";

export interface Root {
  experiences: Experience[];
  mainImage: Image;
  _id: string;
  projects: Project[];
  _type: string;
  socialLinks: SocialLink[];
  about: PortableTextBlock[];
  _updatedAt: string;
  metadata: any;
  skills: Skill[];
  _createdAt: string;
  _rev: string;
  name: string;
}

export interface Experience {
  achievements: any[];
  company: string;
  companyURL: string;
  jobTitle: string;
  isCurrentJob: boolean;
  description: any;
  responsibilities: any;
}

export interface Project {
  description: any[];
  _createdAt: string;
  _updatedAt: string;
  technologies: any;
  mainImage: Image;
  publishedAt: string;
  _type: string;
  _id: string;
  title: string;
  slug: any[];
  _rev: string;
  link: string;
}

export interface SocialLink {
  account: string;
  url: string;
  username?: string;
}

export interface Skill {
  name: string;
  link: string;
  logo: Image;
}
