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
            company: "Chewy",
            description: "Chewy is an American online retailer of pet food and other pet-related products based in Plantation, Florida.",
            website: "https://chewy.com",
            backgroundImage: "/chewy-banner.jpg",
            companyLogo: "/chewy-logo-new.png",
            roles: [
                {
                    position: "Software Engineer Co-op",
                    location: "Boston, MA",
                    dateRange: "June 2025",
                    status: "current",
                    bullets: [
                        "Incoming June 2025"
                    ]
                },
            ]
        },
        {
            company: "Code4Community",
            description: "Code4Community is a student-led organization that provides free software development services to non-profit organizations in the Greater Boston area.",
            website: "https://c4cneu.com",
            backgroundImage: "/c4c-banner.jpg",
            companyLogo: "/c4c-logo.png",
            roles: [
                {
                    position: "Software Developer",
                    location: "Boston, MA",
                    dateRange: "Sep 2025",
                    status: "current",
                    bullets: [
                        "Incoming Sep 2025"
                    ]
                }
            ]
        },
        {
            company: "Generate Product Development",
            description: "Generate is Northeastern’s premiere student-led product development studio. Its team of dedicated engineers and designers work and empower real startups with our innovative products. Each semester, Generate works with Software and Hardware founders to build their product and support them on their entrepreneurial journey.",
            website: "https://generatenu.com",
            backgroundImage: "/generate-banner.jpg",
            companyLogo: "/generate-logo.png",
            roles: [
                {
                    position: "Technical Lead",
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
                    position: "Software Engineer",
                    location: "Boston, MA",
                    dateRange: "Jan 2025 - Present",
                    status: "current",
                    bullets: [
                        "Maintain cloud infrastructure, optimize database queries, and create numerous frontend components",
                        "Implement CRUD endpoints for interacting with AWS S3 for secure asset storage and retrieval"
                    ]
                },
                {
                    position: "Software Engineer Co-op",
                    location: "Boston, MA",
                    dateRange: "Sep - Dec 2024",
                    status: "done",
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
        },
        {
            company: "Chatham Bars Inn",
            description: "",
            website: "https://chathambarsinn.com",
            backgroundImage: "/cbi-background.png",
            companyLogo: "/cbi-logo.png",
            roles: [
                {
                    position: "Beach House Grill Staff",
                    location: "Chatham, MA",
                    dateRange: "May - Aug 2022",
                    status: "done",
                    bullets: [
                        "Worked as a server and bartender at a high-end restaurant on Cape Cod, Massachusetts, providing exceptional customer service to guests",
                    ]
                }
            ]
        }
    ],
    projects: [
        {
            title: "PlateMate",
            description: "PlateMate is a data-driven meal insight platform that allows customers to rate their experience on a dish-by-dish basis, providing restaurants with actionable data on how to improve their menus.",
            duration: "Jan - Apr 2025",
            imageURL: "/platemate-cover.png",
            githubURL: "https://github.com/GenerateNU/platemate",
            liveURL: "/posts/platemate",
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
          title: "Constellation",
          description: "A platform to track and manage your finances, with a focus on budgeting and expense tracking for small businesses, giving them insights and helping them make informed financial decisions.",
            duration: "Jan 2025 - Present",
            imageURL: "/constellation-cover.png",
            githubURL: "https://github.com/GenerateNU/constellation",
            liveURL: "",
            techStack: ["Java", "Spring Boot", "CockroachDB"]

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
    ],
    posts: [
        {
            identifier: "gen-platemate",
            title: "PlateMate: a Generate client project",
            author: "Ben Petrillo",
            timestamp: "Thu Apr 24 2025",
            link: "/posts/gen-platemate",
            sections: [
                {
                    name: "Overview",
                    paragraphs: [
                        "PlateMate is a mobile applications that allows customers to rate their experience at restaurants on a dish-by-dish basis, providing restaurants with actionable data on how to improve their menus. It focuses on what customers actually care about - the food. The platform provides a user-friendly onboarding flow to garner meal preferences and dietary restrictions from users, which are then use to curate a set of recommended dishes. The app also includes a social media aspect, allowing users to share their experiences and connect with others who have similar tastes, and get recommended different dishes based on their friends' reviews as well. The goal is to create a community of food lovers who can discover new dishes and restaurants together.",
                    ],
                },
                {
                    name: "Engineering",
                    paragraphs: [
                        "PlateMate was developed for a real client through Generate, Northeastern University's premier product development studio. As a Technical Lead, I was responsible for overseeing the development process from start to finish, ensuring the app met our client's requirements and was delivered on time.",
                        "I worked on an agile team of 4 designers, 5 engineers, a design lead, technical lead, and project lead, with weekly sprints and standups. I designated tickets, reviewed pull request, managed our development environment, ensured best practices, and architected the system design of the app, both front-end and backend.",
                        "For our tech stack, we used Go on the backend for its speed and performance, with the Fiber web framework and MongoDB as our database. MongoDB provided us with many features for data insertion, geography-based queries, and data aggregation. On the frontend, we used React Native and Expo, with zustand for state management. We implemented authentication from scratch, leveraging JWTs, bcrypt for password hashing, and refresh tokens. This was a very fruitful experience, especially for our engineers that had never worked with authentication before.",
                        "We deployed our backend to DigitalOcean and got our app build on TestFlight. We started the semester by designing schemas at a high level for our database, then designed our backend. After it was fully tested, our design team was ready, and we got to work on implementing screens pixel-for-pixel. The entire timeframe was a bit over 3 months for this app.",
                    ],
                },
                {
                    name: "Showcase & Presentation",
                    paragraphs: [
                        "Throughout the semester, we had three main events. Our first was Proof of Concept, where me and the other members of the leadership team present a baseline version of our progress on the backend of our app, what its purpose is, the tech stack, and how it works. For our second event, Featurethon, we had a 24-hour competition among client teams to build the 'best' new features for our posts, which ended in a presentation and award ceremony.",
                        "The culminating event was Showcase. At the end of each academic semester, the Generate client teams present their work to the clients and the greater Northeastern community.",
                        "I had a great time, this having been my second semester in Generate. I've made so many connections and have learned so much during this time. I truly learned all aspects of the software development lifecycle.",
                        "I hope to continue as a member of Generate's operations team in the future. As of writing this, for summer and fall of 2025, I will join Code4Community as a Software Developer where I will work on posts for non-profit organizations in the Greater Boston area."
                    ],
                }
            ],
            images: [
                {
                    src: "/projects/platemate/platemate-brand.png",
                },
                {
                    src: "/projects/platemate/platemate-settings.png",
                    height: 800,
                },
                {
                    src: "/projects/platemate/platemate-mockup-grid.png",
                },
                {
                    src: "/projects/platemate/platemate-restaurant.png",
                    height: 800,
                },
                {
                    src: "/projects/platemate/platemate-mockup.png",
                    height: 300,
                },
                {
                    src: "/projects/platemate/platemate-dash.png",
                    height: 800,
                },
                {
                    src: "/projects/platemate/platemate-showcase-team.png",
                    height: 340,
                },
                {
                    src: "/projects/platemate/platemate-feed.png",
                    height: 800,
                },
                {
                    src: "/projects/platemate/platemate-show.jpg",
                    height: 340,
                },
            ]
        },
    ]
} as Config;