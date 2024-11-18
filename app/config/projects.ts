import { PortfolioProject } from "../types/types";

export const projects: PortfolioProject[] = [
    {
        identifier: 0,
        title: "Hexagonal Reversi",
        description: "Designed and implemented Orthello using Java, incorporating a hexagonal grid to enhance strategic complexity and employing Swing for the GUI and JUnit for testing. Utilized the Model-View-Controller, Strategy, Observer, Adapter, and Factory patterns to structure game architecture. Created AI strategies that enabled different difficulty levels through move-selection algorithms.",
        imageURL: "/reversi.png",
        githubURL: "",
        liveURL: "",
        techStack: ["React", "Node.js", "MongoDB"]
    },
    {
        identifier: 1,
        title: "PokéVault",
        description: "Designed a dynamic web application using React, TypeScript, Vite, & Bootstrap to enable users to browse and explore a populated database of Pokémon trading cards. Implemented infinite scrolling with pagination and batch requests, optimizing performance and ensuring efficient data retrieval.",
        imageURL: "/pokevault.png",
        githubURL: "",
        liveURL: "",
        techStack: ["React", "Firebase", "TypeScript"]
    },
    {
        identifier: 2,
        title: "Personal Portfolio",
        description: "Developed my dynamic and responsive portfolio website using React, utilizing media queries for responsiveness and JSON for full configurability. It also includes a comment section with user authentication via Google using OAuth 2.0, user-level permissions, and SQLite for data storage.",
        imageURL: "/portfolio.png",
        githubURL: "",
        liveURL: "",
        techStack: ["React", "Node.js", "OpenWeatherAPI"]
    }
];