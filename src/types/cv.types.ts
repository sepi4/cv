export interface Skill {
  name: string;
  icon: string;
  isDevicon?: boolean;
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
  jobTitle: string;
}

export interface Link {
  title: string;
  url: string;
  image?: string;
}
export interface PersonalInfo {
    name: string;
    jobTitle: string;
    phone?: string;
    email: string;
  }

export interface CVData {
  personalInfo: PersonalInfo;
  aboutMe: string[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  links: Link[];
  references: Reference[];
}
