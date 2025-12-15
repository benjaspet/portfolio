import {GalleryImage} from "@/components/galleryImage";

export type Config = {
    languages: string[];
    technologies: string[];
    education: Education[];
    experience: Experience[];
    studentOrganizations: StudentOrganization[];
    projects: PortfolioProject[];
    posts: Post[];
}

export type Experience = {
    company: string;
    description: string;
    summary: string;
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

export type Post = {
    identifier: string;
    title: string;
    author: string;
    timestamp: string;
    link: string;
    sections: {
        name: string;
        paragraphs: string[];
    }[];
    images?: GalleryImage[];
}

export type Education = {
    institution: string;
    level: string;
    duration: string;
    logo: string;
    background: string;
}

export type StudentOrganization = {
    name: string;
    summary: string;
    description: string;
    logo: string;
    roles: Role[];
}