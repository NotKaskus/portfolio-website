export interface FeaturedProject {
  name: string;
  description: string;
  language: ProjectLanguage;
  github: string | null;
  website: string | null;
  stargazers_count: number;
  forks_count: number;
}

export interface ProjectLanguage {
	name: string;
	bg_color: string;
	border_color: string;
}

export interface Project {
  note?: string;
  client?: string;
  name: string;
  description: string;
  image: string;
  buttons: ProjectButton[];
}

export interface Tech {
  name: string;
  icon: string | React.ReactNode;
}

export interface ProjectButton {
  text: string;
  link: string;
  icon: string | React.ReactNode;
}