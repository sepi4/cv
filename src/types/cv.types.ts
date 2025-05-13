export interface Skill {
  name: string;
  icon: string;
  isDevicon?: boolean;
  isFlag?: boolean;
  isImage?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface EducationItem {
  institution: string;
  description: string;
}

export interface Reference {
  name: string;
  title: string;
  contact: string;
}

export interface Link {
  title: string;
  url: string;
}

export interface CVData {
  personalInfo: {
    name: string;
    jobTitle: string;
    phone?: string;
    email: string;
  };
  aboutMe: string[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  links: Link[];
  references: Reference[];
}
