export type Config = {
    languages: string[];
    technologies: string[];
    education: Education[];
    experience: Experience[];
    projects: PortfolioProject[];
}

export type Experience = {
    company: string;
    description: string;
    website: string;
    backgroundImage: string;
    companyLogo: string;
    roles: Role[];
}

export type Role = {
    position: string;
    location: string;
    dateRange: string;
    status: "current" | "done";
    bullets: string[]
}

export type PortfolioProject = {
    title: string;
    description: string;
    duration: string;
    imageURL: string;
    githubURL?: string;
    liveURL?: string;
    techStack: string[];
}

export type Education = {
    institution: string;
    level: string;
    duration: string;
    logo: string;
    background: string;
}