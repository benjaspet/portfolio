export type Config = {
    languages: string[];
    technologies: string[];
    education: Education[];
    experience: Experience[];
    projects: PortfolioProject[];
}

export type Experience = {
    role: string;
    company: string;
    website: string;
    locationAndDate: string;
    status: "done" | "current";
    additionalSubtitle?: string;
    bullets: string[];
}

export type PortfolioProject = {
    title: string;
    description: string;
    imageURL: string;
    githubURL: string;
    liveURL: string;
    techStack: string[];
}

export type Education = {
    school: string;
    degree: string;
    duration: string;
}