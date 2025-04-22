import ImageGallery from "@/components/image-gallery";

const sections = [
    {
        imageSrc: "/projects/platemate/platemate-mockup-grid.png",
        imagePosition: "right",
        paragraphs: [
            "PlateMate is a mobile applications that allows customers to rate their experience at restaurants on a dish-by-dish basis, providing restaurants with actionable data on how to improve their menus. It focuses on what customers actually care about - the food. The platform provides a user-friendly onboarding flow to garner meal preferences and dietary restrictions from users, which are then use to curate a set of recommended dishes. The app also includes a social media aspect, allowing users to share their experiences and connect with others who have similar tastes, and get recommended different dishes based on their friends' reviews as well. The goal is to create a community of food lovers who can discover new dishes and restaurants together.",
        ],
    },
];

const devSections = [
    {
        imageSrc: "/projects/platemate/platemate-showcase-present.jpg",
        imageAlt: "PlateMate tech stack",
        imagePosition: "right",
        paragraphs: [
            "PlateMate was developed for a real client through Generate, Northeastern University's premier product development studio. As a Technical Lead, I was responsible for overseeing the development process from start to finish, ensuring the app met our client's requirements and was delivered on time.",
            "I worked on an agile team of 4 designers, 5 engineers, a design lead, technical lead, and project lead, with weekly sprints and standups. I designated tickets, reviewed pull request, managed our development environment, ensured best practices, and architected the system design of the app, both front-end and backend.",
            "For our tech stack, we used Go on the backend for its speed and performance, with the Fiber web framework and MongoDB as our database. MongoDB provided us with many features for data insertion, geography-based queries, and data aggregation. On the frontend, we used React Native and Expo, with zustand for state management. We implemented authentication from scratch, leveraging JWTs, bcrypt for password hashing, and refresh tokens. This was a very fruitful experience, especially for our engineers that had never worked with authentication before.",
            "We deployed our backend to DigitalOcean and got our app builds on TestFlight. We started the semester by designing schemas at a high level for our database, then designed our backend. After it was fully tested, our design team was ready, and we got to work on implementing screens pixel-for-pixel. The entire timeframe was a bit over 3 months for this app.",
        ],
    },
];

const showcaseSections = [
    {
        imageSrc: "/projects/platemate/platemate-speak.png",
        imageAlt: "PlateMate tech stack",
        imagePosition: "left",
        paragraphs: [
            "Throughout the semester, we had three main events. Our first was Proof of Concept, where me and the other members of the leadership team present a baseline version of our progress on the backend of our app, what its purpose is, the tech stack, and how it works. For our second event, Featurethon, we had a 24-hour competition among client teams to build the 'best' new features for our projects, which ended in a presentation and award ceremony.",
            "The culminating event was Showcase. At the end of each academic semester, the Generate client teams present their work to the clients and the greater Northeastern community.",
            "I had a great time, this having been my second semester in Generate. I've made so many connections and have learned so much during this time. I truly learned all aspects of the software development lifecycle.",
            "I hope to continue as a member of Generate's operations team in the future. As of writing this, for summer and fall of 2025, I will join Code4Community as a Software Developer where I will work on projects for non-profit organizations in the Greater Boston area."
        ],
    },
];

const ims = [
    {
        src: "/projects/platemate/platemate-showcase-present.jpg",
        alt: "Sample image 3",
        width: 800,
        height: 533,
    },{
        src: "/projects/platemate/platemate-leadership.jpg",
        alt: "Sample image 6",
        width: 800,
        height: 450,
    },
    {
        src: "/projects/platemate/gen-s25-audience.jpg",
        alt: "Sample image 6",
        width: 800,
        height: 450,
    },
    {
        src: "/projects/platemate/platemate-mockup-grid.png",
        alt: "Sample image 2",
        width: 800,
        height: 800,
    },
    {
        src: "/projects/platemate/gen-showcase-brand.png",
        alt: "Sample image 1",
        width: 800,
        height: 800,
    },
    {
        src: "/projects/platemate/platemate-brand.png",
        alt: "Sample image 1",
        width: 800,
        height: 600,
    },
];

export default function PlateMateDetailsPage() {
    return (
        <div className="p-4 md:p-0">

            <h2 className="text-2xl font-semibold mb-4">
                Overview
            </h2>
            {sections.map((section, index) => (
                <div key={index} className={"mb-4"}>
                    {section.paragraphs.map((paragraph, index) => (
                        <p key={index} className={"mb-4"}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            ))}
            <h2 className="text-2xl font-semibold mb-4">
                Engineering
            </h2>

            {devSections.map((section, index) => (
                <div key={index} className={"mb-4"}>
                    {section.paragraphs.map((paragraph, index) => (
                        <p key={index} className={"mb-4"}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            ))}

            <h2 className="text-2xl font-semibold mb-4">
                Showcase & Presentation
            </h2>
            {showcaseSections.map((section, index) => (
                <div key={index} className={"mb-4"}>
                    {section.paragraphs.map((paragraph, index) => (
                        <p key={index} className={"mb-4"}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            ))}

            <div className={"py-4"}>
                <ImageGallery images={ims} gap={4} />
            </div>
        </div>
    )
}