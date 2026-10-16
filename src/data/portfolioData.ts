import type { PersonalInfo, SkillCategory, Project, TimelineItem, StatItem } from '../types/portfolio';

/**
 * =============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =============================================================================
 * You can customize all your personal info, projects, skills, and links here!
 * The UI will update automatically without changing any component files.
 */

export const personalInfo: PersonalInfo = {
  // Apna Naam Yahan Likhein:
  name: "Raja Kumar",

  // Apna Role Yahan Likhein:
  role: "Full Stack Developer & UI/UX Designer",

  titles: [
    "Full Stack Developer",
    "AI & ML Enthusiast",
    "React & TypeScript Specialist",
    "MCA Scholar @ Chandigarh University"
  ],

  // Apne baare mein 2-3 lines likhein:
  shortBio: "Crafting polished, high-performance web applications with modern design systems, clean architecture, and delightful user experiences.",

  // Detailed paragraphs for the About Section:
  aboutText: [
    "Hello! I'm a dedicated Software Developer and MCA student specializing in Artificial Intelligence & Machine Learning at Chandigarh University.",
    "With a solid computer applications foundation from my BCA, I enjoy architecting modern web apps with React, TypeScript, and Node.js while expanding into Python and machine learning.",
    "I focus on writing clean, maintainable code, solving algorithmic challenges, and transforming ideas into responsive, accessible digital products."
  ],

  location: "Mohali, Punjab / Muzaffarpur, Bihar",

  // Apne links ya email yahan daalein:
  email: "rajasingh9474@gmail.com",
  github: "https://github.com/rajasingh9474",
  linkedin: "https://www.linkedin.com/in/raja-kumar-singh9474",
  twitter: "https://x.com/HYPERRAJA33",
  resumeUrl: "#", // Add link to your PDF or Google Drive resume
  availability: "Available for Hire",
  // Free Web3Forms Access Key (Get one in 5 seconds at https://web3forms.com):
  contactFormKey: "" 
};

export const quickStats: StatItem[] = [
  { label: "Hands-on Projects", value: "15+", iconName: "FolderGit2" },
  { label: "Tech Stack Skills", value: "12+", iconName: "Briefcase" },
  { label: "GitHub Commits", value: "500+", iconName: "Star" },
  { label: "Hackathons & Coding", value: "Active", iconName: "Users" }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    description: "Building responsive, accessible, and animated web interfaces",
    icon: "Layout",
    skills: [
      { name: "React 18", level: 95, highlight: true },
      { name: "TypeScript", level: 90, highlight: true },
      { name: "Next.js", level: 85, highlight: true },
      { name: "Tailwind CSS", level: 95, highlight: true },
      { name: "Framer Motion", level: 88, highlight: true },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Vue.js", level: 75 },
      { name: "Redux / Zustand", level: 85 }
    ]
  },
  {
    category: "Backend & Systems",
    description: "Architecting resilient RESTful APIs, databases, and microservices",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 90, highlight: true },
      { name: "Express / NestJS", level: 85 },
      { name: "Python", level: 80, highlight: true },
      { name: "PostgreSQL", level: 85, highlight: true },
      { name: "MongoDB", level: 80 },
      { name: "GraphQL", level: 82 },
      { name: "Redis", level: 78 },
      { name: "Prisma ORM", level: 88 }
    ]
  },
  {
    category: "Cloud, DevOps & Tools",
    description: "Continuous integration, cloud deployment, and developer tooling",
    icon: "Cloud",
    skills: [
      { name: "Git & GitHub", level: 92, highlight: true },
      { name: "Docker", level: 80 },
      { name: "AWS / Vercel", level: 85 },
      { name: "CI / CD Pipelines", level: 78 },
      { name: "Linux / Bash", level: 82 },
      { name: "Jest / Vitest", level: 80 },
      { name: "Figma (UI/UX)", level: 85, highlight: true }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "project-scheme-finder",
    title: "Scheme Finder — Citizen Welfare & Subsidy Portal",
    category: "Full Stack",
    description: "A comprehensive citizen-centric platform to discover 2,500+ Central and State Government welfare schemes across India with instant AI-powered eligibility checks, document checklists, and direct official application links.",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AI Assistant", "Lucide React", "Vercel"],
    liveUrl: "https://scheme-finder-app.vercel.app",
    githubUrl: "https://github.com/rajasingh9474",
    featured: true,
    highlights: [
      "Indexed 2,500+ Central & State welfare schemes across 28 states",
      "Instant AI Scheme Sahayak eligibility check & document guidance",
      "Bilingual interface (English & Hindi) with zero-login access"
    ]
  },
  {
    id: "project-1",
    title: "ApexFlow — Modern Task Orchestration",
    category: "Full Stack",
    description: "An intuitive collaborative workspace with real-time kanban boards, live chat, activity auditing, and automated workflows.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Socket.io"],
    liveUrl: "https://apexflow-demo.vercel.app",
    githubUrl: "https://github.com/rajasingh9474",
    featured: true,
    highlights: ["Over 2,000 monthly active users", "Sub-100ms real-time latency", "Role-based access control"]
  },
  {
    id: "project-2",
    title: "PulseAnalytics — Real-Time Telemetry Dashboard",
    category: "Frontend",
    description: "High-performance data visualization platform featuring real-time stream processing, interactive charts, and anomaly detection alerts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion"],
    liveUrl: "https://pulseanalytics-demo.vercel.app",
    githubUrl: "https://github.com/rajasingh9474",
    featured: true,
    highlights: ["Processes 10k data points/sec", "Configurable widget grid", "99.9% uptime monitoring"]
  },
  {
    id: "project-3",
    title: "NeuroDoc AI — Document Intelligence Engine",
    category: "Mobile & AI",
    description: "Semantic document retrieval and summarization assistant powered by Vector embeddings, OpenAI API, and hybrid search.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Python", "FastAPI", "React", "Tailwind CSS", "LangChain", "Pinecone"],
    liveUrl: "https://neurodoc-ai.vercel.app",
    githubUrl: "https://github.com/rajasingh9474",
    featured: true,
    highlights: ["RAG architecture with hybrid search", "Automated PDF citation tagging", "Export to Notion & Markdown"]
  },
  {
    id: "project-4",
    title: "GlassCraft — Design System & Component Library",
    category: "UI/UX",
    description: "A comprehensive glassmorphic UI kit for React and Tailwind CSS with 50+ accessible, fully animated components and tokenized themes.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "Storybook"],
    liveUrl: "https://glasscraft-ui.vercel.app",
    githubUrl: "https://github.com/rajasingh9474",
    featured: false,
    highlights: ["WAI-ARIA compliant", "Zero runtime overhead", "50+ pre-built components"]
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: "exp-1",
    type: "experience",
    title: "Frontend & Full Stack Developer",
    organization: "Freelance & Open Source Projects",
    location: "Remote",
    period: "2024 - Present",
    description: "Developing modern, responsive web applications using React, TypeScript, and Tailwind CSS. Building reusable component libraries, REST API integrations, and experimenting with AI-powered features.",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Git"]
  },
  {
    id: "exp-2",
    type: "experience",
    title: "Web Development Trainee / Project Lead",
    organization: "L. N. Mishra College of Business Management",
    location: "Muzaffarpur, Bihar",
    period: "2023 - 2024",
    description: "Designed and built database-backed web applications for academic capstones. Architected relational schemas with MySQL, built backend endpoints, and crafted responsive user interfaces.",
    tags: ["JavaScript", "Node.js", "MySQL", "HTML5/CSS3", "PHP"]
  },
  {
    id: "edu-1",
    type: "education",
    title: "Master of Computer Applications (MCA) — AI & ML",
    organization: "Chandigarh University",
    location: "Mohali, Punjab",
    period: "Pursuing",
    description: "Specializing in Artificial Intelligence and Machine Learning, Deep Learning, Cloud Architecture, and Advanced Software Development.",
    tags: ["MCA", "Artificial Intelligence", "Machine Learning", "Deep Learning", "Python"]
  },
  {
    id: "edu-2",
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "L. N. Mishra College of Business Management",
    location: "Muzaffarpur, Bihar",
    period: "Completed",
    description: "Graduated with a strong foundation in Computer Science, Full Stack Web Development, Object-Oriented Programming, Data Structures, and Database Management.",
    tags: ["BCA", "Computer Science", "Web Development", "Data Structures", "DBMS"]
  }
];

export const navigationLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];
