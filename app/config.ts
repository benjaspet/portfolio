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
        {
            identifier: "pqueue-web-crawling",
            title: "Priority queues for web crawling",
            author: "Ben Petrillo",
            timestamp: "Thu Apr 24 2025",
            link: "/posts/pqueue-web-crawling",
            sections: [
                {
                    name: "Introduction",
                    paragraphs: [
                        "A web crawler (sometimes known as a robot, a spider, or a scraper) is a piece of software that automatically gathers and traverses documents on the web. For example, lets say you have a crawler and you tell it to start at https://www.wikipedia.com. The software will first download the Wikipedia homepage, then it will parse the HTML and locate all hyperlinks (i.e., anchor tags) embedded in the page. The crawler then downloads all the HTML pages specified by the URLs on the homepage, and parses them looking for more hyperlinks. This process continues until all of the pages on Wikipedia are downloaded and parsed.",
                        "Web crawlers are a fundamental component of today’s web. For example, Googlebot is Google’s web crawler. Googlebot is constantly scouring the web, downloading pages in search of new and updated content. All of this data forms the backbone of Google’s search engine infrastructure."
                    ],
                },
                {
                    name: "The Task",
                    paragraphs: [
                        "For this project, we were given a large-scale mock social networking site called Fakebook. The site contained a login page, user profiles, and a feed page. Our task was to find a total of 5 secret flags embedded into the HTML of random user profiles.",
                        "Now, the naive approach is to manually search page by page. This is evidently not ideal, as the site contains tens of thousands of user profiles. Instead, we can automate this process by developing a web crawler.",
                    ],
                },
                {
                    name: "Implementation",
                    paragraphs: [
                        "I had to keep track of the pages that the crawler had already visited. This was important for two primary reasons.",
                        "Obviously, it isn’t efficient to revisit the same pages over and over again. If I was to not keep track of where it had been, I would visit pages multiple times, which is not ideal by any means. Secondly, and more importantly, not keeping track of visited pages can lead to infinite loops. For example, if user A is friends with user B, then A’s page links to B, and B’s page links to A. I had to design my crawler in a way that would prevent it from pin-ponging back and forth from A->B, B->A, A->B, B->A, etc.",
                        "I used a queue-based system to managed visited and unvisited pages. If a page was not yet visited, I would add it to the queue. If a page was visited, I would skip it. This way, I could ensure that the crawler would not visit the same page twice. The sample code below shows how I implemented this for GET requests, where I would process a profile page.",
                        "This approach worked very well. I then needed to handle HTTP status codes where the server would request a redirect or return a 503 status code. I implemented a robust error-handling mechanism to handle these cases.",
                        "The base implementation worked and found all flags in ~30 minutes. But I wanted faster. So, what other way to optimize this than to use multithreading? I was able to reduce the time down to an average of 5-7 minutes this way.",
                    ],
                },
                {
                    name: "Formatting the Output",
                    paragraphs: [
                        "For debugging purposes and to provide a visual representation of the crawler’s progress, I formatted the output to display the number of flags found, the number of pages visited, the number of pages left to visit, and the runtime of the crawler. This was especially useful when running the crawler in verbose mode, as it provided a real-time view of the crawler’s progress. If a flag was found, the output would also display the flag itself.",
                    ],
                },
                {
                    name: "Synopsis & Source Code",
                    paragraphs: [
                        "For my high-level approach, I first started by logging into the server. To do this, I had to manipulate the login form in such a way that I could extract the CSRF token and the session cookie. Once I had these, I could then use them to log in. I stored the cookie in a class variable so that I only needed to log in to Fakebook once, and could include that cookie in the header of all future requests.",
                        "The next step I took from here after logging in was to extract the links of friend profiles from the pages my crawler visits. I did this by creating a custom HTML parser and overrode its handle_starttag method to extract the href attribute from all a tags on the page. In the same HTML parser, I also overrode the handle_data method to extract the flags from the data that contains FLAG: by splitting the data by : and adding the second element to the list of flags (as that is a flag).",
                        "Once I had the links, I had to keep track of the frontier (which I used a deque for) and the links that have already been visited (which I used a set for, because they can be iterated through much easier than a queue can be iterated through). I then iterated through the links and visited each one, extracting the links from each page and adding them to the frontier if they had not already been visited. I also extracted the flags from each page and added them to a list. I chose to print the flags out as my crawler goes instead of printing them all at the end.",
                        "I then implemented my handler for status codes. If the status code was a 200, I parsed the links from the page as normaly and checked for flags. If the status code was a 302, I would extract the location header (to find the redirect link) and add it to the frontier if it had not already been visited, and would visit it later. If the status code was a 403 or 404, I would simply skip the link and move on to the next one. If the status code was a 503, I would simply wait and add the link to the end of the queue to visit later. For 500s and 504s, I would simply skip the link because the error would be due to an internal server error or an infrastructure error.",
                        "The primary challenge I faced when completing this assignment was figuring out how to reverse-engineer the login form in order to log into Fakebook. I was able to find the CSRF middleware token by simply inspecting the login form, but it took me a while to figure out what exactly to do with it and how to use it alongside the session ID. Handling status codes was not too big of an issue for me, but I also had trouble with figuring out which data structures to use for the frontier and the visited set and how to update them correctly. I also had trouble with the HTML parser, as I had never used one before and had to figure out how to use it correctly.",
                        "Testing for this project took a lot of time. I created a logger (which can be visualized and activate by using the -verbose option) to print the current runtime, the length of the queue, the amount of flags found, and the length of the visited set. Logging into the Fakebook server proved to be the most difficult, so to debug and test this I printed out the CSRF token and the session ID first to make sure I could parse them correctly. I then printed out the headers of the response to see that I was passing correct headers, and by printing out the raw response and the headers I was able to parse the response easier. Overall, for testing, I printed out data at various points in the code to make sure that I was extracting the correct data and used the printed responses with their status codes to debug.",
                        "Source: https://github.com/benjaspet/cs3700"
                    ],
                },
            ]
        }
    ]
} as Config;