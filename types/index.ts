export interface StreamingPlatform {
  name: string;
  url: string;
  icon?: string;
}

export interface Music {
  id: string;
  title: string;
  artwork: string;
  description: string;
  platforms: StreamingPlatform[];
}

export interface ProjectLink {
  type: 'live' | 'code' | 'demo';
  url: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  links: ProjectLink[];
}

export interface Skill {
  name: string;
  logo: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}
