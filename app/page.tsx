"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {CalendarIcon, ClipboardIcon, MailIcon, MapPinHouse} from "lucide-react"
import {useEffect, useRef} from "react"
import Image from 'next/image'
import {Tabs, TabsTrigger} from "@/components/ui/tabs"
import {TabsContent, TabsList} from "@/components/ui/tabs"
import {
    Timeline,
    TimelineContent,
    TimelineDot,
    TimelineHeading,
    TimelineItem,
    TimelineLine
} from "@/components/ui/timeline"
import {motion, useInView} from "framer-motion"
import {fadeInFromRightVariants} from "./animations/fade-in-from-right"
import {foldUpVariants} from "./animations/fold-up"
import {staggerContainerVariants} from "./animations/stagger"
import {TwitterIcon, SlackIcon, LinkedInIcon, GitHubIcon} from "@/components/icons";
import {projects} from "./config/projects"
import {ProjectCard} from "@/components/project-card"

import LanguagesCard from "@/components/languages-card";
import FrameworksCard from "@/components/frameworks-card";
import LeadingButton from "@/components/leading-button";
import SocialButton from "@/components/social-button";
import CustomTimelineItem from "@/components/timeline-item";
import WaveText from "@/components/wave-text";
import {fadeDownVariants} from "@/app/animations/fade-down";
import Footer from "@/components/footer";

const clipboard = <ClipboardIcon size={16} className="mr-1.5"/>
const calendar = <CalendarIcon size={16} className="mr-1.5"/>
const linkedin = <LinkedInIcon
    size={16}
    className="transition-transform duration-500 group-hover:rotate-[25deg]"
/>
const slack = <SlackIcon
    size={16}
    className="transition-transform duration-500 group-hover:rotate-[25deg]"
/>
const twitter = <TwitterIcon
    size={16}
    className="transition-transform duration-500 group-hover:rotate-[25deg]"
/>
const mail = <MailIcon
    size={16}
    className="transition-transform duration-500 group-hover:rotate-[25deg]"
/>
const github = <GitHubIcon
    size={16}
    className="transition-transform duration-500 group-hover:rotate-[25deg]"
/>

export default function Home() {

    return (
        <div className="mx-8 sm:mx-12 md:mx-32 lg:mx-48 xl:mx-56 my-6 sm:my-16">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
                <div className="flex flex-col mb-2 sm:mb-0">
                    <motion.div className="items-center self-center sm:hidden mb-3" initial="hidden"
                                animate="visible"
                                variants={fadeInFromRightVariants}>
                        <Image
                            src="/headshot.jpeg"
                            alt="Ben Petrillo"
                            width={200}
                            height={200}
                            className="rounded-full border-4 border-[#0b6db8] animate-float"
                        />
                    </motion.div>
                    <motion.h1 className="text-center sm:text-start text-4xl font-bold" variants={foldUpVariants}
                               initial="hidden"
                               animate="visible">
                        <WaveText text={"Benjamin Petrillo"}/>
                    </motion.h1>
                    <motion.h2
                        className="text-xl md:text-2xl font-semibold text-gray-300 text-center sm:text-start mb-2"
                        variants={foldUpVariants}
                        initial="hidden"
                        animate="visible">
                        <WaveText text={"Software Engineer • CS @ NEU"}/>
                    </motion.h2>
                    <motion.h4 variants={foldUpVariants}
                               initial="hidden"
                               animate="visible"
                               className="text-md text-gray-300 font-semibold text-center sm:text-start">
            <span className="hidden sm:inline-flex gap-1 items-center mb-2">
              <MapPinHouse width={16} height={16} className="text-[#35a1f2]"/> Mission Hill, MA
            </span>
                    </motion.h4>
                    <motion.div className="inline-flex gap-2 mt-1 self-center sm:self-start"
                                variants={staggerContainerVariants}
                                initial="hidden"
                                animate="visible">
                        <LeadingButton icon={clipboard} text="Resume" link={"/ben_petrillo_resume.pdf"}/>
                        <LeadingButton icon={calendar} text="Calendar"
                                       link={"https://calendar.app.google/Yx8PH4GBmrJkwoE3A"}/>
                    </motion.div>
                    <motion.div
                        className="inline-flex gap-2 mt-2.5 self-center sm:self-start"
                        variants={staggerContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <SocialButton icon={github} link={"https://github.com/benjaspet"}/>
                        <SocialButton icon={linkedin} link={"https://www.linkedin.com/in/ben-petrillo"}/>
                        <SocialButton icon={slack} link={"https://slack.com"}/>
                        <SocialButton icon={twitter} link={"https://twitter.com/Benjaspet"}/>
                        <SocialButton icon={mail} link={"mailto:petrillo.b@northeastern.edu"}/>

                    </motion.div>

                </div>
                <motion.div className="flex-shrink-0 hidden sm:flex" initial="hidden"
                            animate="visible"
                            variants={fadeInFromRightVariants}>
                    <Image
                        src="/headshot.jpeg"
                        alt="Ben Petrillo"
                        width={200}
                        height={200}
                        className="rounded-full border-4 border-[#0b6db8] animate-float"
                    />
                </motion.div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
                <LanguagesCard/>
                <FrameworksCard/>
            </div>
            <div className="my-4">
                <motion.div initial="hidden" animate="visible" variants={fadeDownVariants}>
                    <Tabs defaultValue="account" className="">
                        <TabsList className="flex w-full">
                            <TabsTrigger value="account" className="flex-1 text-center">
                                Experience
                            </TabsTrigger>
                            <TabsTrigger value="password" className="flex-1 text-center">
                                Education
                            </TabsTrigger>
                            <TabsTrigger value="projects" className="flex-1 text-center">
                                Projects
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="password" className="py-2">
                            <motion.div initial="hidden" animate="visible" variants={fadeDownVariants}>
                                <Card className="border-2">
                                    <CardHeader>
                                        <CardTitle>Education</CardTitle>
                                    </CardHeader>
                                    <motion.div variants={fadeDownVariants}
                                                initial="hidden"
                                                animate="visible">
                                        <CardContent className="space-y-2">
                                            <div className={"leading-5"}>
                                                <motion.h3 className="text-lg font-semibold mb-[-4px]" variants={fadeDownVariants}>Northeastern University</motion.h3>
                                                <motion.p className="text-muted-foreground font-semibold" variants={fadeDownVariants}>B.S. – Computer Science
                                                    (Software)</motion.p>
                                                <motion.p className="text-muted-foreground font-semibold" variants={fadeDownVariants}>Sep 2022 – May 2026</motion.p>
                                            </div>
                                            <div className={"leading-5"}>
                                                <motion.h3 className="text-lg font-semibold mb-[-4px]" variants={fadeDownVariants}>
                                                    Boston College High School
                                                </motion.h3>
                                                <motion.p className="text-muted-foreground font-semibold" variants={fadeDownVariants}>
                                                    Middle School, High School Diploma
                                                </motion.p>
                                                <motion.p className="text-muted-foreground font-semibold" variants={fadeDownVariants}>
                                                    Sep 2016 – May 2022
                                                </motion.p>
                                            </div>
                                        </CardContent>
                                    </motion.div>
                                </Card>
                            </motion.div>
                        </TabsContent>
                        <TabsContent value="account" className="py-2">
                            <Timeline>
                                <CustomTimelineItem
                                    status={"current"}
                                    role={"Software Engineer"}
                                    company={"Generate Product Development"}
                                    locationAndDate={"Boston, MA • Sep 2024 – Present"}
                                    bullets={[
                                        "Engineered *20+ CRUD endpoints* for authentication, profiles, and venue interactions for a nightlife discovery platform",
                                        "Implemented authentication with *JWTs* and refresh tokens, leveraging *Supabase* and *PostgreSQL* for data storage",
                                        "Completed *weekly scrum sprints with a team of 12* to convert Figma designs into functional React Native components",
                                        "Reviewed and gave constructive feedback to peer pull requests, ensuring alignment with agile development practices"
                                    ]
                                    } key={1}/>
                                <CustomTimelineItem
                                    status={"current"}
                                    role={"Software Engineer Co-op"}
                                    company={"FirstGlance (by LHS)"}
                                    locationAndDate={"Boston, MA • Sep 2024 – Present"}
                                    bullets={[
                                        "Spearheaded development of a *full-stack Next.js application* using Tailwind CSS and Redux that streamlined startup discovery for founders and investors using a metric-based system, implementing efficient data-fetching for *5,000+ users*",
                                        "Developed a library of *30+ reusable components* based on Figma designs, standardizing UI elements across the platform",
                                        "Built *30+ OpenAPI-compliant REST endpoints* with ElysiaJS, enforcing strict type validation and writing a suite of tests",
                                    ]
                                    } key={2}/>
                                <CustomTimelineItem
                                    status={"current"}
                                    role={"Frontend Engineer"}
                                    company={"VC Village"}
                                    locationAndDate={"Boston, MA • Oct 2024 – Present"}
                                    bullets={[
                                        "Transitioned a legacy frontend codebase from HTML/CSS to React and TypeScript for a startup accelerator program",
                                        "Developed *20 responsive UI components and reusable hooks* for efficient data fetching and state management"
                                    ]
                                    } key={3}/>
                                <CustomTimelineItem
                                    status={"done"}
                                    role={"Teaching Assistant"}
                                    company={"Khoury College of Computer Sciences"}
                                    locationAndDate={"Object-Oriented Design: May – Jul 2024"}
                                    additionalSubtitle={"Fundamentals of CS II: Jan – Apr 2024"}
                                    bullets={[
                                        "Directed *6 lab sections* with *40-60 students each*, conducting lecture-style sessions to reinforce course concepts on *software development best practices*, data structures, model-view-controller, observer, and decorator patterns in Java",
                                        "Graded exams and *30+ assignments and lab activities each week*, collaborating with professors on grading rubrics",
                                        "Held weekly office hours for one-on-one student mentoring on course & lecture content, and led student exam proctoring"
                                    ]
                                    } key={4}/>
                                <TimelineItem>
                                    <TimelineHeading>I blossomed into existence 🌸</TimelineHeading>
                                    <TimelineDot status={"done"}/>
                                </TimelineItem>
                            </Timeline>
                        </TabsContent>
                        <TabsContent value={"projects"} className="py-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
                                {projects.map(project => (
                                    <ProjectCard key={project.identifier} project={project}/>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>
            <Footer/>
        </div>
    )
}