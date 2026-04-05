export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  details: string;
  icon: "globe" | "rocket" | "handshake" | "building";
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  category: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SiteContent {
  site: {
    name: string;
    tagline: string;
    description: string;
    email: string;
    phone: string;
    address: string[];
  };
  nav: NavLink[];
  hero: {
    headline: string;
    subheadline: string;
    cta1: string;
    cta2: string;
  };
  about: {
    sectionTitle: string;
    mission: string;
    vision: string;
    story: string[];
    values: { title: string; description: string }[];
    stats: Stat[];
  };
  services: {
    sectionTitle: string;
    subtitle: string;
    items: Service[];
  };
  partners: {
    sectionTitle: string;
    subtitle: string;
    description: string;
    types: { title: string; description: string }[];
  };
  team: {
    sectionTitle: string;
    subtitle: string;
    members: TeamMember[];
  };
  blog: {
    sectionTitle: string;
    subtitle: string;
    posts: BlogPost[];
  };
  contact: {
    sectionTitle: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    copyright: string;
    tagline: string;
  };
  languageSwitch: string;
}
