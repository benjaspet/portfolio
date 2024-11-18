import { PortfolioProject } from "../types/types";

export const projects: PortfolioProject[] = [
    {
        identifier: 0,
        title: "Nightlife",
        description: "A mobile application for nightlife discovery that helps users make informed decisions on where to spend their nights out, based on real, user-driven ratings that are specific to their interests.",
        imageURL: "/nightlife.png",
        githubURL: "",
        liveURL: "",
        techStack: ["Go", "React Native", "PostgreSQL"]
    },
    {
        identifier: 1,
        title: "Hexagonal Reversi",
        description: "An implementation of Orthello with a hexagonal grid using Java Swing and built using MVC design patterns. Includes AI strategies with various difficulty levels using move selection algorithms.",
        imageURL: "/reversi.png",
        githubURL: "",
        liveURL: "",
        techStack: ["Java", "Swing", "JUnit 4"]
    },
    {
        identifier: 2,
        title: "PokéVault",
        description: "A Pokémon trading card database application with real-time updates on new releases, card prices, and more built with React. Features include searching, infinite scrolling, and card recommendations.",
        imageURL: "/pokevault.png",
        githubURL: "",
        liveURL: "",
        techStack: ["React", "TypeScript", "Bootstrap 5"]
    },
    {
        identifier: 3,
        title: "Personal Portfolio (Old)",
        description: "The second iteration of my personal portfolio, built using from scratch with raw stylesheets and React. Includes a comment section with Google OAuth 2.0 for auth, and full JSON configurability.",
        imageURL: "/portfolio.png",
        githubURL: "",
        liveURL: "",
        techStack: ["React", "TypeScript", "CSS"]
    },
    {
        identifier: 4,
        title: "Fakebook Web Crawler",
        description: "A web crawler made to traverse and find hidden flags throughout a mock social media site Fakebook. Used multithreading to send concurrent HTTP requests to reduce crawl time from ~30min to ~5min.",
        imageURL: "/fakebook.png",
        githubURL: "",
        liveURL: "",
        techStack: ["Python", "BeautifulSoup", "Git"]
    },
    {
        identifier: 5,
        title: "Elixir Music Bot & API",
        description: "A Discord music application serving over 300,000 users using the Spotify Tracks API and YouTube. Featuring custom playlist support via MongoDB and a RESTful API to motify the bot state externally.",
        imageURL: "/elixir.png",
        githubURL: "",
        liveURL: "",
        techStack: ["Java", "Javalin", "MongoDB"]
    }
];