export interface PersonalInfo {
  name: string;
  role: string;
  titles: string[]; // for typewriter / badge rotations
  shortBio: string;
  aboutText: string[];
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  resumeUrl: string;
  availability: 'Available for Hire' | 'Working on Projects' | 'Open to Collaboration';
  contactFormKey?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100 percentage
  iconName?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile & AI' | 'UI/UX';
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  highlights?: string[];
}

export interface TimelineItem {
  id: string;
  type: 'experience' | 'education';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  tags?: string[];
}

export interface StatItem {
  label: string;
  value: string;
  iconName: string;
}
