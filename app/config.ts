import {Config} from "./types";

export default {
    languages: [
        "Java", "Go", "TypeScript", "Python", "HTML/CSS", "C++", "Racket", "Lisp"
    ],
    technologies: [
        "React", "React Native", "Next.js", "Spring Boot", "FastAPI", "Node.js", "Docker", "Terraform", "AWS EC2",
        "PostgreSQL", "MySQL", "MongoDB", "Prisma", "Firebase", "Supabase", "Git", "Jetbrains IDE", "Postman", "Jira"
    ],
    education: [
        {
            school: "Northeastern University",
            degree: "B.S. – Computer Science",
            duration: "Sep 2022 – May 2026"
        },
        {
            school: "Boston College High School",
            degree: "Middle School, High School Diploma",
            duration: "Sep 2016 – May 2022"
        }
    ],
    experience: [
        {
            role: "Software Technical Lead",
            company: "Generate Product Development",
            "website": "https://generatenu.com",
            locationAndDate: "Boston, MA • Dec 2024 – Present",
            status: "current",
            "bullets": [
                "Lead a team of 5 engineers in the development of a mobile app for a real client using React Native and Golang",
                "Review 150+ applications and conduct 7 technical interviews for potential engineers, ensuring fair evaluation"
            ]
        },
        {
            role: "Software Engineer",
            company: "Generate Product Development",
            "website": "https://generatenu.com",
            locationAndDate: "Boston, MA • Sep - Dec 2024",
            status: "done",
            "bullets": [
                "Develop ∼18 CRUD endpoints for authentication, user profiles, and venue interactions for a nightlife platform",
                "Utilize react-navigation to create mobile navigation stacks, leveraging Supabase and JWTs for user auth",
                "Complete weekly scrum sprints with an agile team of 12 to adhere to ambitious project deadlines & code reviews"
            ]
        },
        {
            role: "Software Engineer Intern",
            company: "FirstGlance by LHS",
            website: "https://literallyhelpingstartups.com",
            locationAndDate: "Boston, MA • Jan 2025 - Present",
            "additionalSubtitle": "SDE Co-op: Sep - Dec 2024",
            status: "current",
            bullets: [
                "Develop and maintain 25 OpenAPI-compliant REST endpoints with FastAPI, enforcing strict type validation",
                "Create 30+ React components based on Figma designs for a metric-based startup discovery platform in Next.js",
                "Transition legacy infrastructure with raw Firebase queries to PostgreSQL with secure, endpoint-protected access",
                "Leverage pytest and bun-test to develop performance and API-level test suites, achieving 88% coverage",
                "Utilize Terraform to automate software deployment to AWS EC2 instances, adhering to IaC best practices"
            ]
        },
        {
            role: "Frontend Developer",
            company: "VC Village",
            website: "https://vcvillage.co",
            locationAndDate: "Boston, MA • Oct - Dec 2024",
            status: "done",
            bullets: [
                "Transition a legacy frontend codebase from HTML/CSS to React & TypeScript for a startup accelerator program",
                "Develop ~20 responsive UI components and reusable hooks for abstraction and efficient data fetching"
            ]
        },
        {
            role: "Teaching Assistant",
            company: "Khoury College of Computer Sciences",
            website: "https://www.khoury.northeastern.edu",
            locationAndDate: "Object-Oriented Design: May – Jul 2024",
            additionalSubtitle: "Fundamentals of CS II: Jan – Apr 2024",
            status: "done",
            bullets: [
                "Direct 5 lab sections of 40+ students, conducting lecture-style sessions on software development best practices",
                "Grade 30+ assignments and lab activities weekly, collaborating with professors on grading rubrics and activities",
                "Hold office hours for one-on-one mentoring on software engineering, data structures, and MVC patterns"
            ]
        }
    ],
    projects: [
        {
            title: "Nightlife",
            description: "A mobile application for nightlife discovery that helps users make informed decisions on where to spend their nights out, based on real, user-driven ratings that are specific to their interests.",
            imageURL: "/nightlife.png",
            githubURL: "",
            liveURL: "",
            techStack: ["Go", "React Native", "PostgreSQL"]
        },
        {
            title: "Hexagonal Reversi",
            description: "An implementation of Orthello with a hexagonal grid using Java Swing and built using MVC design patterns. Includes AI strategies with various difficulty levels using move selection algorithms.",
            imageURL: "/reversi.png",
            githubURL: "",
            liveURL: "",
            techStack: ["Java", "Swing", "JUnit 4"]
        },
        {
            title: "PokéVault",
            description: "A Pokémon trading card database application with real-time updates on new releases, card prices, and more built with React. Features include searching, infinite scrolling, and card recommendations.",
            imageURL: "/pokevault.png",
            githubURL: "",
            liveURL: "",
            techStack: ["React", "TypeScript", "Bootstrap 5"]
        },
        {
            title: "Personal Portfolio (Old)",
            description: "The second iteration of my personal portfolio, built using from scratch with raw stylesheets and React. Includes a comment section with Google OAuth 2.0 for auth, and full JSON configurability.",
            imageURL: "/portfolio.png",
            githubURL: "",
            liveURL: "",
            techStack: ["React", "TypeScript", "CSS"]
        },
        {
            title: "Fakebook Web Crawler",
            description: "A web crawler made to traverse and find hidden flags throughout a mock social media site Fakebook. Used multithreading to send concurrent HTTP requests to reduce crawl time from ~30min to ~5min.",
            imageURL: "/fakebook.png",
            githubURL: "",
            liveURL: "",
            techStack: ["Python", "BeautifulSoup", "Git"]
        },
        {
            title: "Elixir Music Bot & API",
            description: "A Discord music application serving over 300,000 users using the Spotify Tracks API and YouTube. Featuring custom playlist support via MongoDB and a RESTful API to motify the bot state externally.",
            imageURL: "/elixir.png",
            githubURL: "",
            liveURL: "",
            techStack: ["Java", "Javalin", "MongoDB"]
        }
    ]
} as Config;