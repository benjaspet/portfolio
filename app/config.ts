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
            liveURL: "/posts/gen-platemate",
            techStack: ["Go", "MongoDB", "React Native"]
        },
        {
            title: "Nightlife",
            description: "A mobile application for nightlife discovery that helps users make informed decisions on where to spend their nights out, based on real, user-driven ratings that are specific to their interests.",
            duration: "Sep - Dec 2024",
            imageURL: "/nightlife-cover.png",
            githubURL: "https://github.com/GenerateNU/nightlife",
            liveURL: "/posts/gen-nightlife",
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
            identifier: "how-to-get-swe-interviews",
            title: "From zero to hero: how I got multiple interviews and offers for software engineering internships from top tech companies in today's market",
            author: "Ben Petrillo",
            timestamp: "Wed Apr 30 2025",
            link: "/posts/how-to-get-swe-interviews",
            sections: [
                {
                    name: "Preface",
                    paragraphs: [
                        "It was just about a year ago today when I [panicked](https://www.reddit.com/r/csMajors/comments/1k448v8/no_internships_feeling_extremely_worthless/).",
                        "I had just finished my sophomore year at university as a computer science student. Since January of that year, I had been applying to internship and co-op opportunities at hundreds of companies for roles in software engineering and data science. I had no luck, getting rejected left and right. It was hard enough balancing a job search with multiple classes and working a part-time job as a teaching assistant on campus. I did not know what I was doing wrong.",
                        "**Then, I cracked the code.** I landed multiple interviews and offers from the companies above.",
                        "In this post, I want to share how I went **from zero to hero: no offers to multiple.** In addition to myself, many of my friends followed this process and had similar success."
                    ],
                },
                {
                    name: "Step 1: Getting your resume in order",
                    paragraphs: [
                        "The first step to getting interviews is to have a resume that stands out. The resume is the main component that recruiters use to screen candidates; **you should nail this step.**",
                        "To start, your resume must be ATS-friendly and *appealing to the eye.* I cannot stress this part enough. It should be clear, with no uneven spacing and strange formatting. A great starting point I recommend is to use [Jake's resume](https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs), but I do recommend making a few changes, such as placing your technologies below your education and above your experience. I'd further recommend referencing [my resume](/resume.pdf) for further insight.",
                        "For your experience and project bullet points, you should use the following structure: **action verb + what you did + how you did it + impact.** Make sure to reference the specific technologies you used to do so. You should have 2-3 projects listed as well. You should always be updating your resume for each new project, hackathon, or experience you gain.",
                        "If you don't have industry experience, list TA positions, research positions, etc. in the experience section. Do not include positions that are not applicable to the roles your applying to, e.g. Starbucks Barista."
                    ]
                },
                {
                    name: "Step 2: Campus involvement & projects",
                    paragraphs: [
                        "I've seen it time and time again: the students that are the most successful are the ones that go **above and beyond the classroom** and get involved in campus software organizations, personal projects, and hackathons. This is the largest differentiator I have seen between those who are getting interviews, and those who are not. Recruiters want candidates that are passionate about software development and are willing to go the extra mile to learn and grow.",
                        "Join student clubs and organizations and take on software development roles in them, and work your way up to leadership positions. This is a great way to get experience and build your resume.",
                        "**Work on personal projects.** You will learn many more technologies, frameworks, and languages this way. You will also have something to talk about in interviews. Try to have at least one project **that is deployed** so employers can see it real-time.",
                        "Another huge differentiator: on your resume, provide hyperlinks to the GitHub repositories of your projects. This shows employers the commits and progress you've done on the project. You look way better with a commit history, pull requests, etc. on your source code than the other candidates that simply upload their project as a folder."
                    ]
                },
                {
                    name: "Step 3: Networking",
                    paragraphs: [
                        "People will say it again and again, but network. It opens up opportunities for referrals and so much more. Even better, networking **is much easier through any clubs or student organizations you join.** Believe me, I have seen it firsthand and have been referred to companies this way myself!"
                    ],
                },
                {
                    name: "Step 4: Leetcode & interview preparation",
                    paragraphs: [
                        "As much as we hate Leetcoding, it is necessary in this market. Employers need a way to filter out candidates.",
                        "Start off slowly and work your way up to the harder problems. By the end of your second year, you should have taken an algorithms and data structures course. If you have not already familiarized yourself with DSA, take the time to do so. I recommend [the NeetCode 150](https://neetcode.io/practice?tab=neetcode150) for Leetcode preparation after you understand intermediate DSA.",
                    ]
                },
                {
                    name: "Step 5: Applying",
                    paragraphs: [
                        "**Be consistent. Seriously.** This is a major downfall of most students. People apply to 30-50 jobs, then get sick of the rejections and quit. **Don't do this!** I fell victim to it at some point too, but you'll realize you do not accomplish anything by doing this. **Apply to 5-10 positions daily, and make sure you apply to new listing as soon as they are posted.** Filter by most recent on LinkedIn and other job boards. Being one of the first to apply to a listing increases the likelihood of your application being reviewed, because at larger companies they do not have time to view all applications.",
                        "The logic here is simple: **the more you put yourself out there, the more responses you will get.**"
                    ]
                },
                {
                    name: "Step 6: The interviews",
                    paragraphs: [
                        "For behavioral interviews, use the STAR method: situation, task, action, result. Do not ramble and talk about things that don't matter. **Ask questions too!** Doing research on the company and the interviewer beforehand was a tactic I used to differentiate myself; it shows you are truly invested in the company, and want to learn firsthand about the culture. Take it slow, with calm breaths. Look interested and have a bright facial expression. They're human too!",
                        "For the technical, voice your thoughts. Ask for guidance in the right direction; the interview usually wants you to pass. **Use the advice they provide;** the interviewers want to see *how you implement criticism*. Make sure to start off with the bruteforce solution, and proceed to the optimal, and **explain the time complexities!**"
                    ],
                },
                {
                    name: "Ending thoughts",
                    paragraphs: [
                        "Remember, the job search is a marathon, not a sprint. It takes time and effort to find the right opportunity. Don't get discouraged by rejections; they are a part of the process. Keep pushing forward and stay positive. **Remember, it only takes one offer**.",
                    ]
                }
            ],
        },
        {
            identifier: "gen-platemate",
            title: "PlateMate: a Generate client project",
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
                    src: "/projects/nightlife/nightlife-mockup-01.png",
                    height: 500,
                },
                {
                    src: "/projects/nightlife/nightlife-mockup-02.png",
                    height: 500,
                },
                {
                    src: "/projects/nightlife/nightlife-mockup-03.png",
                    height: 500,
                },
                {
                    src: "/projects/nightlife/nightlife-logo.png",
                },
                {
                    src: "/projects/nightlife/nightlife-logomark.png",
                },
                {
                    src: "/projects/nightlife/nightlife-identity.png",
                    height: 400,
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