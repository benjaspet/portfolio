import {Config} from "./types";

export default {
    languages: [
        "Java", "Go", "TypeScript", "Python", "HTML/CSS", "Lisp"
    ],
    technologies: [
        "AWS (EC2, S3, Lambda, DynamoDB, SQS, EKS)", "EventBridge", "Apache Kafka", "Datadog", "PostgreSQL", "MongoDB",
        "Nix", "Docker", "Terraform", "Spring Boot", "FastAPI", "React", "React Native", "Next.js", "Playwright", "JUnit",
    ],
    education: [
        {
            institution: "Northeastern University",
            level: "B.S. – Computer Science",
            duration: "2022 – 2026",
            logo: "/education/northeastern-logo.png",
            background: "/education/northeastern-banner.jpg"
        },
        {
            institution: "Boston College High School",
            level: "High School Diploma",
            duration: "2016 – 2022",
            logo: "/education/bchigh-logo.png",
            background: "/education/bchigh-banner.jpg"
        }
    ],
    experience: [
        {
            company: "Chewy, Inc.",
            description: "American online retailer of pet food and other pet-related products based in Plantation, Florida.",
            companyLogo: "/experience/chewy-icon.png",
            roles: [
                {
                    position: "Software Engineer Co-op",
                    location: "Boston, MA",
                    dateRange: "June - Dec 2025",
                    status: "current",
                    bullets: [
                        "Containerized the Veterinarian Medical Guide (VMG) service using Docker, LocalStack, and Terraform,\n" +
                        "establishing a robust, event-driven testing framework as a core tooling repository to validate the entire data\n" +
                        "pipeline—from Kafka injection via DynamoDB processing to downstream SQS delivery",
                        "Identified and resolved a critical bug in Chewy’s NDC Manager service that prevented the creation and updating\n" +
                        "of new externally compounded records, restoring functionality to 10,000+ daily downstream pharmacy workflows",
                        "Developed a regression testing framework leveraging builder patterns for the Lynx platform using Playwright and\n" +
                        "TypeScript, injecting into a Jenkins pipeline to speed up deployment"
                    ]
                },
            ]
        },
        {
            company: "Stealth Startup",
            description: "A startup discovery platform that makes finding, evaluating, and sharing startups easier than ever before by providing personalized startup recommendations tailored to investors' preferences, allowing them to follow startups' progress, and enabling effortless sharing of startup information.",
            companyLogo: "/experience/firstglance-icon.png",
            roles: [
                {
                    position: "Software Engineer Co-op",
                    location: "Boston, MA",
                    dateRange: "Sep - Dec 2024",
                    status: "done",
                    bullets: [
                        "Engineered a traction dashboard, auth flows, and onboarding components for an internal tool using Next.js",
                        "Created a data migration pipeline from Firebase to PostgreSQL, architecting schema design and relations",
                        "Integrated 25+ OpenAPI-compliant REST endpoints with FastAPI, enforcing strict type validation",
                        "Automated infrastructure deployment to AWS EC2 instances using Terraform, accelerating workflows",
                        "Leveraged pytest and bun-test to develop regression and API-level test suites, achieving 88% coverage"
                    ]
                }
            ]
        },
    ],
    projects: [
        {
            title: "PlateMate",
            description: "PlateMate is a data-driven meal insight platform that allows customers to rate their experience on a dish-by-dish basis, providing restaurants with actionable data on how to improve their menus.",
            duration: "Jan - Apr 2025",
            imageURL: "/projects/platemate/platemate-cover.png",
            githubURL: "https://github.com/GenerateNU/platemate",
            liveURL: "/posts/gen-platemate",
            techStack: ["Go", "MongoDB", "React Native"]
        },
        {
            title: "Nightlife",
            description: "A mobile application for nightlife discovery that helps users make informed decisions on where to spend their nights out, based on real, user-driven ratings that are specific to their interests.",
            duration: "Sep - Dec 2024",
            imageURL: "/projects/nightlife/nightlife-cover.png",
            githubURL: "https://github.com/GenerateNU/nightlife",
            liveURL: "/posts/gen-nightlife",
            techStack: ["Go", "React Native", "PostgreSQL"]
        },
        {
            title: "Hexagonal Reversi",
            description: "An implementation of Orthello with a hexagonal grid using Java Swing and built using MVC design patterns. Includes AI strategies with various difficulty levels using move selection algorithms.",
            duration: "Nov - Dec 2023",
            imageURL: "/projects/reversi/reversi-cover.jpeg",
            githubURL: "https://github.com/benjaspet/cs3500",
            liveURL: "",
            techStack: ["Java", "Swing", "JUnit 4"]
        },
        {
            title: "Elixir Music",
            description: "A Discord music application serving over 300,000 users using the Spotify Tracks API and YouTube. Featuring custom playlist support via MongoDB and a RESTful API to motify the bot state externally.",
            duration: "May 2022 - Aug 2024",
            imageURL: "/projects/elixir/elixir-cover.png",
            githubURL: "https://github.com/benjaspet/elixir-v4",
            liveURL: "",
            techStack: ["Java", "Javalin", "MongoDB"]
        }
    ],
    posts: [
        {
            identifier: "gen-platemate",
            title: "PlateMate: a Generate S25 client project",
            author: "Ben Petrillo",
            timestamp: "Thu Apr 24 2025",
            link: "/posts/gen-platemate",
            sections: [
                {
                    name: "Introduction",
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
                        "I hope to continue as a member of Generate's operations team in the future. As of writing this, for summer and fall of 2025, I will join Code4Community as a Software Developer where I will work on projects for non-profit organizations in the Greater Boston area."
                    ],
                }
            ],
            images: [
                {
                    src: "/projects/platemate/platemate-mockup-grid.png",
                },
                {
                    src: "/projects/platemate/platemate-showcase-team.png",
                    height: 340,
                },
                {
                    src: "/projects/platemate/platemate-brand.png",
                },
                {
                    src: "/projects/platemate/platemate-show.jpg",
                    height: 340,
                },
                {
                    src: "/projects/platemate/platemate-color-palette.png",
                    height: 500,
                },
                {
                    src: "/projects/platemate/gen-s25-audience.jpg",
                    height: 340,
                },
                {
                    src: "/projects/platemate/platemate-logo.png",
                    height: 400,
                },
                {
                    src: "/projects/platemate/platemate-leadership.jpg",
                    height: 340,
                },
            ]
        },
        {
            identifier: "gen-nightlife",
            title: "Nightlife: Generate Fall 2024",
            author: "Ben Petrillo",
            timestamp: "Fri Apr 25 2025",
            link: "/posts/gen-nightlife",
            sections: [
                {
                    name: "Overview",
                    paragraphs: [
                        "Nightlife is a mobile app that revolutionizes nightlife discovery with a user-driven rating system that personalizes venue recommendations based on ambiance, music, crowd, and service."
                    ],
                },
                {
                    name: "Problem & Solution",
                    paragraphs: [
                        "Figuring out where to go out and enjoy the nightlife of your city can be difficult, especially when it comes to figuring out \"the vibe\" of a venue. It may be perfect on paper, but in person it's not quite what you expected for some reason you can't put your finger on.",
                        "Nightlife is an interactive platform focused on transforming the way people experience nightlife. With a mission to make nightlife exploration seamless and tailored to each individual, Nightlife offers a comprehensive, user-driven platform where individuals can rate, and review venues based on various criteria like ambiance, music, crowd, and service. This approach empowers users to make informed decisions about their nights out, ensuring their experiences align with their specific and individual preferences.",
                        "Since this app was an exploration and extension off of existing functionality (traditional review apps like Google, Yelp, etc.), it was important to really emphasize the application of that functionality and what Nightlife adds to it. By bringing in characters that users would be assigned to and a 'Resonate' feature that had aligning qualities, we were able to add depth to the venue review and discovery technology, and use the idea of personalization to create an innovative solution.",
                    ],
                },
                {
                    name: "Engineering",
                    paragraphs: [
                        "We used Go on the backend with the Fiber web framework. For our database, we used PostgreSQL. Authentication was handled by our provider, Supabase, with libraries for both our frontend for seamless integration. On the frontend, we used React Native with TypeScript.",
                        "One of the most difficult portions of this project was data acquisition. We needed to somehow collect venue data for our database to make the app functional. We developed a Python script using the Google Maps API to aggregate venues in the greater Boston area to our database. This proved to be quite effective.",
                    ]
                },
                {
                    name: "Debrief",
                    paragraphs: [
                        "This was my first experience in Generate, as a Software Engineer. I learned how to develop a mobile app for the first time with this experience, from start to finish, with all aspects of the product development lifecycle. I met so many amazing people as I was introduced to the organization. The following semester, I assumed the role as Technical Lead for another client project, PlateMate.",
                    ]
                }
            ],
            images: [
                {
                    src: "/projects/nightlife/nightlife-logo.png",
                    height: 300,
                },
                {
                    src: "/projects/nightlife/nightlife-logomark.png",
                },
                {
                    src: "/projects/nightlife/nightlife-identity.png",
                    height: 500,
                },
                {
                    src: "/projects/nightlife/nightlife-color-palette.png",
                    height: 600,
                },
                {
                    src: "/projects/nightlife/nightlife-components.png",
                    height: 500,
                },
                {
                    src: "/projects/nightlife/nightlife-personalities-01.png",
                    height: 500,
                },
                {
                    src: "/projects/nightlife/nightlife-personalities-02.png",
                    height: 500,
                },
                {
                    src: "/projects/nightlife/nightlife-team.jpg",
                },
            ]
        }
    ]
} as Config;