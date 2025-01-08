// src/types.ts
export interface AboutHeroProps {
  title?: string;
  paragraph: string;
  imageUrl: string;
  linkedInUrl?: string;
  githubUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  imagesCount: number;
  paragraphs: string[];
  techStack: string[];
  githubUrl: string;
  liveSiteUrl?: string;
}

export interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stackIcons: React.ReactNode[];
  sourceCodeUrl: string;
  liveSiteUrl?: string;
}

export interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

// src/types.ts

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  dateRange: string;        // e.g. "2018 - 2022"
  gpa: string;
  description?: string[];   // optional bullet points about courses, achievements, etc.
}

export interface ExperienceItem {
  id: string;
  designation: string;
  company: string;
  dateRange: string;
  description: string[];
  projectLinks?: string[]; // Optional field for project URLs
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  dateIssued: string;       // e.g. "July, 2021"
  credentialUrl?: string;   // link to the certificate if applicable
}

export interface TimelineProps {
  experience: ExperienceItem[];
}