interface Portfolio {
  _id: string;
  _type: "portfolio";
  name: string;
  mainImage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
    hotspot?: boolean;
  };
  about: BlockContent[];
  socialLinks: SocialLink[];
  projects: Project[];
  experiences: Experience[];
  skills: Technology[];
  metadata: SiteMeta;
  publishedAt: string;
}

interface SocialLink {
  _id: string;
  _type: "social";
  account: "x" | "github" | "linkedIn" | "instagram";
  url: string;
  username?: string;
}

interface Project {
  _type: "project";
  // Define other properties as necessary
}

interface Experience {
  _type: "experience";
  // Define other properties as necessary
}

interface Technology {
  _type: "technology";
  // Define other properties as necessary
}

interface SiteMeta {
  _type: "siteMeta";
  // Define other properties as necessary
}

interface BlockContent {
  _type: "block";
  children: {
    _type: "span";
    text: string;
    marks?: string[];
  }[];
  markDefs?: {
    _type: string;
    [key: string]: any;
  }[];
  style: string;
}
