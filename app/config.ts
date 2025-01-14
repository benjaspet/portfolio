import {Config} from "./types";

export default {
    languages: [
        "Java", "Go", "TypeScript", "Python", "HTML/CSS", "C++", "Racket"
    ],
    technologies: [
        "React", "React Native", "Next.js", "Spring Boot", "FastAPI", "Node.js", "Docker", "Terraform", "AWS (EC2, S3, Lambda)",
        "PostgreSQL", "MySQL", "MongoDB", "Prisma", "Firebase", "Nix", "Git", "Scikit-learn", "JUnit", "Jest"
    ],
    education: [
        {
            institution: "Northeastern University",
            level: "B.S. – Computer Science",
            duration: "2022 – 2026",
            logo: "/northeastern-logo.png",
            background: "/northeastern-banner.jpg"
        },
        {
            institution: "Boston College High School",
            level: "High School Diploma",
            duration: "2016 – 2022",
            logo: "/bchigh-logo.png",
            background: "/bchigh-banner.jpg"
        }
    ],
    experience: [
        {
            company: "Generate Product Development",
            description: "Generate is Northeastern’s premiere student-led product development studio. Its team of dedicated engineers and designers work and empower real startups with our innovative products. Each semester, Generate works with Software and Hardware founders to build their product and support them on their entrepreneurial journey.",
            website: "https://generatenu.com",
            backgroundImage: "/generate-banner.jpg",
            companyLogo: "/generate-logo.png",
            roles: [
                {
                    position: "Software Technical Lead",
                    location: "Boston, MA",
                    dateRange: "Dec 2024 - Present",
                    status: "current",
                    bullets: [
                        "Lead a team of 5 engineers in the development of PlateMate, a data-driven insight application for restaurants",
                        "Manage project milestones, delegate tickets, review pull requests, and lead project architecture discussions",
                        "Build a development environment using Nix, and develop CI workflow scripts to improve development velocity"
                    ]
                },
                {
                    position: "Software Engineer",
                    location: "Boston, MA",
                    dateRange: "Sep - Dec 2024",
                    status: "done",
                    bullets: [
                        "Implement 20+ CRUD routes for auth, users, and venue interactions for a nightlife discovery platform",
                        "Create mobile navigation stacks and architect auth flows leveraging JSON webtokens & Supabase PostgreSQL",
                        "Complete weekly scrum sprints with an agile team of 12 to adhere to ambitious project demonstration deadlines"
                    ]
                }
            ]
        },
        {
            company: "FirstGlance",
            description: "A startup discovery platform that makes finding, evaluating, and sharing startups easier than ever before by providing personalized startup recommendations tailored to investors' preferences, allowing them to follow startups' progress, and enabling effortless sharing of startup information.",
            website: "https://literallyhelpingstartups.com",
            backgroundImage: "/firstglance-banner.jpg",
            companyLogo: "/firstglance-logo.png",
            roles: [
                {
                    position: "Software Engineer Co-op",
                    location: "Boston, MA",
                    dateRange: "Sep 2024 - Present",
                    status: "current",
                    bullets: [
                        "Introduce a master traction page, onboarding components, and user profile flow for an internal startup discovery tool with search, filter, input validation, and settings functionality using Next.js, accelerating analytical efforts",
                        "Generate a migration pipeline to transition populated data from Firebase to PostgreSQL with schema design",
                        "Automate deployment to AWS EC2 instances using Terraform and CD pipelines, accelerating workflows",
                        "Integrate 25+ OpenAPI-compliant REST endpoints with FastAPI, enforcing strict type validation",
                        "Leverage pytest and bun-test to develop performance and API-level test suites, achieving 88% coverage"
                    ]
                }
            ]
        },
        {
            company: "Northeastern University Khoury College of Computer Sciences",
            description: "The computer science school of Northeastern University in Boston, Massachusetts. It was the first college in the United States dedicated to the field of computer science when it was founded in 1982.",
            website: "https://www.khoury.northeastern.edu/",
            backgroundImage: "/khoury-banner.jpg",
            companyLogo: "/khoury-logo.png",
            roles: [
                {
                    position: "Teaching Assistant",
                    location: "Boston, MA",
                    dateRange: "Jan - Jul 2024",
                    status: "done",
                    bullets: [
                        "CS3500: Object-Oriented Design (May - Jul) and CS2510: Fundamentals of Computer Science 2 (Jan - Apr)",
                        "Direct 3 lab sections of 40+ students, conducting lecture-style sessions on software development best practices",
                        "Grade 30+ assignments and lab activities weekly, collaborating with professors on grading rubrics and activities",
                        "Hold office hours for one-on-one mentoring on software engineering, data structures, and MVC patterns"
                    ]
                }
            ]
        }
    ],
    projects: [
        {
            title: "PlateMate",
            description: "PlateMate is a data-driven meal insight platform that allows customers to rate their experience on a dish-by-dish basis, providing restaurants with actionable data on how to improve their menus.",
            duration: "Dec 2024 - Present",
            imageURL: "/platemate-cover.png",
            githubURL: "https://github.com/GenerateNU/platemate",
            liveURL: "",
            techStack: ["Go", "MongoDB", "React Native"]
        },
        {
            title: "Nightlife",
            description: "A mobile application for nightlife discovery that helps users make informed decisions on where to spend their nights out, based on real, user-driven ratings that are specific to their interests.",
            duration: "Sep - Dec 2024",
            imageURL: "/nightlife-cover.png",
            githubURL: "https://github.com/GenerateNU/nightlife",
            liveURL: "",
            techStack: ["Go", "React Native", "PostgreSQL"]
        },
        {
            title: "PokéVault",
            description: "A Pokémon trading card database application with real-time updates on new releases, card prices, and more built with React. Features include searching, infinite scrolling, and card recommendations.",
            duration: "May - Aug 2024",
            imageURL: "/pokevault.png",
            githubURL: "",
            liveURL: "https://pokevault.benpetrillo.dev",
            techStack: ["React", "TypeScript", "Bootstrap 5"]
        },
        {
            title: "Ponjo Pastes",
            description: "A code snippet sharing platform for developers. Features include searchability, syntax highlighting, view counts, and more, with Bootstrap 5 and mobile-first stylesheets.",
            duration: "2022 - 2023",
            imageURL: "/ponjo-pastes-cover.png",
            githubURL: "https://github.com/benjaspet/ponjo.pastes",
            liveURL: "https://pastes.benpetrillo.dev",
            techStack: ["TypeScript", "EJS", "MongoDB"]
        },
        {
            title: "Hexagonal Reversi",
            description: "An implementation of Orthello with a hexagonal grid using Java Swing and built using MVC design patterns. Includes AI strategies with various difficulty levels using move selection algorithms.",
            duration: "Nov - Dec 2023",
            imageURL: "/reversi.png",
            githubURL: "https://github.com/benjaspet/cs3500",
            liveURL: "",
            techStack: ["Java", "Swing", "JUnit 4"]
        },
        {
            title: "Elixir Music",
            description: "A Discord music application serving over 300,000 users using the Spotify Tracks API and YouTube. Featuring custom playlist support via MongoDB and a RESTful API to motify the bot state externally.",
            duration: "May 2022 - Aug 2024",
            imageURL: "/elixir-cover.png",
            githubURL: "https://github.com/benjaspet/elixir-v4",
            liveURL: "",
            techStack: ["Java", "Javalin", "MongoDB"]
        }
    ]
} as Config;