export interface Technology {
  name: string;
  logo?: string;
  description?: string;
}

export interface SkillGroup {
  title: string;
  technologies: Technology[];
}
