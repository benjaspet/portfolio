"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, ClipboardIcon, MailIcon, MapPinHouse } from "lucide-react"
import { useEffect, useRef } from "react"
import Image from 'next/image'
import { Tabs, TabsTrigger } from "@/components/ui/tabs"
import { TabsContent, TabsList } from "@/components/ui/tabs"
import { Timeline, TimelineContent, TimelineDot, TimelineHeading, TimelineItem, TimelineLine } from "@/components/ui/timeline"
import { motion, useInView } from "framer-motion"
import { fadeInFromRightVariants } from "./animations/fade-in-from-right"
import { foldUpVariants } from "./animations/fold-up"
import { staggerContainerVariants, staggerItemVariants } from "./animations/stagger"
import { TwitterIcon, SlackIcon, LinkedInIcon, GitHubIcon } from "@/components/icons";
import { projects } from "./config/projects"
import { ProjectCard } from "@/components/project-card"
import { skills } from "./config/skills"

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  whileInView: { opacity: 1 }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

export default function Home() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const letters: NodeListOf<Element> = document.querySelectorAll('.wave-letter')
    letters.forEach((letter: Element, index) => {
      (letter as HTMLElement).style.animationDelay = `${index * 0.1}s`
    })
  }, [])

  return (
    <div className="mx-8 sm:mx-12 md:mx-32 lg:mx-48 xl:mx-56 my-6 sm:my-16">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
        <div className="flex flex-col mb-2 sm:mb-0">
          <motion.div className="items-center self-center sm:hidden mb-3" initial="hidden"
            animate="visible"
            variants={fadeInFromRightVariants} >
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
            {"Benjamin Petrillo".split("").map((letter, index) => (
              <span
                key={index}
                className="wave-letter inline-block"
                style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </motion.h1>
          <motion.h2 className="text-xl md:text-2xl font-semibold text-gray-300 text-center sm:text-start mb-2" variants={foldUpVariants}
            initial="hidden"
            animate="visible">
            {"Software Engineer • CS @ NEU".split("").map((letter, index) => (
              <span
                key={index}
                className="wave-letter inline-block"
                style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </motion.h2>
          <motion.h4 variants={foldUpVariants}
            initial="hidden"
            animate="visible" className="text-md text-gray-300 font-semibold text-center sm:text-start">
            <span className="hidden sm:inline-flex gap-1 items-center mb-2">
              <MapPinHouse width={16} height={16} className="text-[#35a1f2]" /> Mission Hill, MA
            </span>
          </motion.h4>
          <motion.div className="inline-flex gap-2 mt-1 self-center sm:self-start" variants={staggerContainerVariants}
            initial="hidden"
            animate="visible">
            <motion.div variants={staggerItemVariants}>
              <Button variant="gooeyLeft" size="xs" className="hover:rotate-[4deg]">
                <ClipboardIcon size={16} className="mr-1.5" />
                Resume
              </Button>
            </motion.div>
            <motion.div variants={staggerItemVariants}>
              <Button variant="gooeyLeft" size="xs" className="hover:rotate-[4deg]">
                <CalendarIcon size={16} className="mr-1.5" />
                Calendar
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="inline-flex gap-2 mt-2.5 self-center sm:self-start"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerItemVariants}>
              <Button
                variant="gooeyRight"
                size="icon"
                className="transition-transform duration-500 hover:animate-pulse group"
              >
                <GitHubIcon
                  size={16}
                  className="transition-transform duration-500 group-hover:rotate-[25deg]"
                />
              </Button>
            </motion.div>

            <motion.div variants={staggerItemVariants}>
              <Button
                variant="gooeyRight"
                size="icon"
                className="transition-transform duration-500 hover:animate-pulse group"
              >
                <LinkedInIcon
                  size={16}
                  className="transition-transform duration-500 group-hover:rotate-[25deg]"
                />
              </Button>
            </motion.div>

            <motion.div variants={staggerItemVariants}>
              <Button
                variant="gooeyRight"
                size="icon"
                className="transition-transform duration-500 hover:animate-pulse group"
              >
                <SlackIcon
                  size={16}
                  className="transition-transform duration-500 group-hover:rotate-[25deg]"
                />
              </Button>
            </motion.div>

            <motion.div variants={staggerItemVariants}>
              <Button
                variant="gooeyRight"
                size="icon"
                className="transition-transform duration-500 hover:animate-pulse group"
                onClick={() => window.open("https://twitter.com/Benjaspet")}
              >
                <TwitterIcon
                  size={16}
                  className="transition-transform duration-500 group-hover:rotate-[25deg]"
                />
              </Button>
            </motion.div>

            <motion.div variants={staggerItemVariants}>
              <Button
                variant="gooeyRight"
                size="icon"
                className="transition-transform duration-500 hover:animate-pulse group"
                onClick={() => open("mailto:petrillo.b@northeastern.edu")}
              >
                <MailIcon
                  size={16}
                  className="transition-transform duration-500 group-hover:rotate-[25deg]"
                />
              </Button>
            </motion.div>
          </motion.div>

        </div>
        <motion.div className="flex-shrink-0 hidden sm:flex" initial="hidden"
          animate="visible"
          variants={fadeInFromRightVariants} >
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
        <Card className="border-2 duration-300 hover:border-[#0b6db8]">
          <CardHeader>
            <motion.div variants={foldUpVariants}
              initial="hidden"
              animate="visible">
              <CardTitle>
                {"Programming Languages".split("").map((letter, index) => (
                  <span
                    key={index}
                    className="wave-letter inline-block"
                    style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </CardTitle>
            </motion.div>
            {/* <CardDescription>Languages I'm proficient in</CardDescription> */}
          </CardHeader>
          <CardContent>
            <motion.div
              className="flex flex-wrap gap-1"
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {skills.languages.map((lang, index) => (
                <motion.span
                  key={index}
                  className="px-2 py-1 bg-[#0b6db8] text-white rounded-full text-xs font-semibold"
                  variants={staggerItemVariants}
                >
                  {lang}
                </motion.span>
              ))}
            </motion.div>
          </CardContent>
        </Card>

        <Card className="border-2 duration-300 hover:border-[#0b6db8]">
          <CardHeader>
            <CardTitle className="animate-float [animation-delay:1500ms]">Frameworks</CardTitle>
            {/* <CardDescription>Frameworks and libraries I work with</CardDescription> */}
          </CardHeader>
          <CardContent>
            <motion.div
              className="flex flex-wrap gap-1"
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {skills.frameworks.map((lang, index) => (
                <motion.span
                  key={index}
                  className="px-2 py-1 bg-secondary text-white rounded-full text-xs font-semibold"
                  variants={staggerItemVariants}
                >
                  {lang}
                </motion.span>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </div>
      <div className="my-4">
        <Tabs defaultValue="account" className="">
          <TabsList className="flex w-full">
            <TabsTrigger value="account" className="flex-1 text-center">
              Experience
            </TabsTrigger>
            <TabsTrigger value="password" className="flex-1 text-center">
              Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="password" className="py-2">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="leading-5">
                  <h3 className="text-lg font-semibold mb-[-4px]">Northeastern University</h3>
                  <p className="text-gray-300 font-semibold">B.S. – Computer Science (Software)</p>
                  <p className="text-gray-300 font-semibold">Sep 2022 – May 2026</p>
                </div>
                <div className="leading-5">
                  <h3 className="text-lg font-semibold mb-[-4px]">Boston College High School</h3>
                  <p className="text-gray-300 font-semibold">Middle School, High School Diploma</p>
                  <p className="text-gray-300 font-semibold">Sep 2016 – May 2022</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="account" className="py-2">
            <Timeline>
              <TimelineItem status="done">
                <TimelineHeading className="font-semibold text-lg ml-1">Software Engineer</TimelineHeading>
                <TimelineDot status="current" />
                <TimelineLine done />
                <TimelineContent className="leading-[1.2rem]">
                  <motion.div
                    className="mb-1.5 ml-1"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                  >
                    <motion.p className="text-gray-300 font-semibold" variants={textVariants}>
                      Generate Product Development
                    </motion.p>
                    <motion.p className="text-gray-300 font-semibold" variants={textVariants}>
                      Boston, MA • Sep 2024 – Present
                    </motion.p>
                  </motion.div>
                  <motion.ul
                    ref={ref}
                    className="list-disc ml-4"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={listVariants}
                  >
                    <motion.li variants={itemVariants} className="font-medium">
                      Engineered <strong>20+ CRUD endpoints</strong> for authentication, profiles, and venue interactions for a nightlife discovery platform
                    </motion.li>
                    <motion.li variants={itemVariants} className="font-medium">
                      Implemented authentication with <strong>JWTs</strong> and refresh tokens, leveraging <strong>Supabase</strong> and <strong>PostgreSQL</strong> for data storage
                    </motion.li>
                    <motion.li variants={itemVariants} className="font-medium">
                      Completed <strong>weekly scrum sprints with a team of 12</strong> to convert Figma designs into functional React Native components
                    </motion.li>
                    <motion.li variants={itemVariants} className="font-medium">
                      Reviewed and gave constructive feedback to peer pull requests, ensuring alignment with agile development practices
                    </motion.li>
                  </motion.ul>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem status="done">
                <TimelineHeading className="font-semibold text-lg ml-1">Software Engineer Co-op</TimelineHeading>
                <TimelineDot status="current" />
                <TimelineLine done />
                <TimelineContent className="leading-[1.2rem]">
                  <div className="mb-1.5 ml-1">
                    <p className="text-gray-300 font-semibold ">Literally Helping Startups</p>
                    <p className="text-gray-300 font-semibold">Boston, MA • Sep 2024 – Present</p>
                  </div>
                  <ul className="list-disc ml-4">
                    <li className="font-medium">
                      Spearheaded development of a <strong>full-stack Next.js application</strong> using Tailwind CSS and Redux that streamlined startup
                      discovery for founders and investors using a metric-based system, implementing efficient data-fetching for <strong>5,000+ users</strong>
                    </li>
                    <li className="font-medium">
                      Developed a library of <strong>30+ reusable components</strong> based on Figma designs, standardizing UI elements across the platform
                    </li>
                    <li className="font-medium">
                      Built <strong>30+ OpenAPI-compliant REST endpoints</strong> with ElysiaJS, enforcing strict type validation and writing a suite of tests
                    </li>
                  </ul>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem status="done">
                <TimelineHeading className="font-semibold text-lg ml-1">Frontend Engineer</TimelineHeading>
                <TimelineDot status="current" />
                <TimelineLine done />
                <TimelineContent className="leading-[1.2rem]">
                  <div className="mb-1.5 ml-1">
                    <p className="text-gray-300 font-semibold ">VC Village</p>
                    <p className="text-gray-300 font-semibold">Boston, MA • Oct 2024 – Present</p>
                  </div>
                  <ul className="list-disc ml-4">
                    <li className="font-medium">
                      Transitioned a legacy frontend codebase from HTML/CSS to React and TypeScript for a startup accelerator program
                    </li>
                    <li className="font-medium">
                      Developed <strong>20 responsive UI components and reusable hooks</strong> for efficient data fetching and state management
                    </li>
                  </ul>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem status="done">
                <TimelineHeading className="font-semibold text-lg ml-1">Teaching Assistant</TimelineHeading>
                <TimelineDot status="done" />
                <TimelineLine done />
                <TimelineContent className="leading-[1.2rem]">
                  <div className="mb-1.5 ml-1">
                    <p className="text-gray-300 font-semibold ">Khoury College of Computer Sciences</p>
                    <p className="text-gray-300 font-semibold">Object-Oriented Design: May – Jul 2024</p>
                    <p className="text-gray-300 font-semibold">Fundamentals of Computer Science II: Jan – Apr 2024</p>
                  </div>
                  <ul className="list-disc ml-4">
                    <li className="font-medium">
                      Directed <strong>6 lab sections</strong> with <strong>40-60 students each</strong>, conducting lecture-style sessions to reinforce course concepts on
                      software development best practices, data structures, model-view-controller, observer, and decorator patterns in Java
                    </li>
                    <li className="font-medium">
                      Graded exams and <strong>30+ assignments and lab activities each week</strong>, collaborating with professors on grading rubrics
                    </li>
                    <li className="font-medium">
                      Held weekly office hours for one-on-one student mentoring on course & lecture content, and led student exam proctoring
                    </li>
                  </ul>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineHeading>I blossomed into existence 🌸</TimelineHeading>
                <TimelineDot status={"done"} />
              </TimelineItem>
            </Timeline>
          </TabsContent>
        </Tabs>
      </div>
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-6">Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {projects.map(project => (
            <ProjectCard key={project.identifier} project={project} />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        .wave-letter {
          animation: wave 2.5s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>
    </div >
  )
}