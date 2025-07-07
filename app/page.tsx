"use client"
import React from "react"
import {CalendarIcon, ClipboardIcon, MailIcon} from "lucide-react"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {AnimatePresence, motion} from "framer-motion"
import {fadeInFromRightChildVariants, fadeInFromRightVariants} from "./animations/fade-in-from-right"
import {foldUpVariants} from "./animations/fold-up"
import {staggerContainerVariants} from "./animations/stagger"
import {GitHubIcon, LinkedInIcon, SlackIcon, TwitterIcon} from "@/components/icons"
import {ProjectCard} from "@/components/project-card"
import LeadingButton from "@/components/leading-button"
import SocialButton from "@/components/social-button"
import {fadeDownVariants} from "@/app/animations/fade-down"
import Footer from "@/components/footer"
import config from "@/app/config"
import type {Education, PortfolioProject, Post} from "@/app/types"
import ExperienceCard from "@/components/experience-card"
import {Separator} from "@/components/ui/separator"
import EducationCard from "@/components/education-card"
import PostPreview from "@/components/post-preview"
import PillCard from "@/components/pill-card"
import {useLayoutSetup} from "@/hooks/useLayoutSetup"
import {HeadshotSlideshow} from "@/components/headshot-slideshow";

const icons = {
    clipboard: <ClipboardIcon size={16} className="mr-1.5"/>,
    calendar: <CalendarIcon size={16} className="mr-1.5"/>,
    linkedin: <LinkedInIcon size={16} className="transition-transform duration-500 group-hover:rotate-[25deg]"/>,
    slack: <SlackIcon size={16} className="transition-transform duration-500 group-hover:rotate-[25deg]"/>,
    twitter: <TwitterIcon size={16} className="transition-transform duration-500 group-hover:rotate-[25deg]"/>,
    mail: <MailIcon size={16} className="transition-transform duration-500 group-hover:rotate-[25deg]"/>,
    github: <GitHubIcon size={16} className="transition-transform duration-500 group-hover:rotate-[25deg]"/>
}

const images = [
    "/photography/escape-room.jpg",
    "/photography/golden-gate.jpg",
    "/photography/headshot.png",
    "/photography/present.png",
    "/photography/ireland.jpg",
];

export default function Home() {
    const {isMobile} = useLayoutSetup()

    const fadeTransition = {duration: 0.3, ease: "easeInOut"}

    interface ContentLoaderProps {
        children: React.ReactNode;
        contentKey: string;
    }

    const ContentLoader = ({children, contentKey}: ContentLoaderProps) => (
        <AnimatePresence mode="wait">
            <motion.div
                key={contentKey}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={fadeTransition}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )

    const ProfileHeader = () => (
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
            <div className="flex flex-col mb-2 sm:mb-0">

                <motion.div
                    className="items-center self-center sm:hidden mb-3"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInFromRightVariants}
                >
                    <HeadshotSlideshow images={images} alt={"Headshot"} width={200} height={200} className={"rounded-full border-4 border-[#0b6db8]"} />
                </motion.div>

                <motion.h1
                    className="text-center sm:text-start text-4xl font-bold"
                    variants={foldUpVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <p>Ben Petrillo</p>
                </motion.h1>
                <motion.h2
                    className="text-xl md:text-2xl font-semibold text-gray-300 text-center sm:text-start mb-2"
                    variants={foldUpVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <p>Software Engineer</p>
                </motion.h2>
                <motion.h4
                    variants={foldUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-md text-gray-300 font-semibold text-center sm:text-start"
                >
          <span className="hidden sm:inline-flex gap-1 items-center mb-4">
            Shipping quality software, one line at a time.
          </span>
                </motion.h4>

                <motion.div
                    className="inline-flex gap-2 mt-1 self-center sm:self-start"
                    variants={staggerContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <LeadingButton icon={icons.clipboard} text="Resume" link={"/resume.pdf"}/>
                    <LeadingButton icon={icons.calendar} text="Calendar"
                                   link={"https://calendar.app.google/Yx8PH4GBmrJkwoE3A"}/>
                </motion.div>

                <motion.div
                    className="inline-flex gap-2 mt-2.5 self-center sm:self-start"
                    variants={staggerContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <SocialButton icon={icons.github} link={"https://github.com/benjaspet"}/>
                    <SocialButton icon={icons.linkedin} link={"https://www.linkedin.com/in/ben-petrillo"}/>
                    <SocialButton icon={icons.slack} link={"https://slack.com"}/>
                    <SocialButton icon={icons.twitter} link={"https://twitter.com/Benjaspet"}/>
                    <SocialButton icon={icons.mail} link={"mailto:petrillo.b@northeastern.edu"}/>
                </motion.div>
            </div>

            <motion.div
                className="flex-shrink-0 hidden sm:flex"
                initial="hidden"
                animate="visible"
                variants={fadeInFromRightVariants}
            >
                <HeadshotSlideshow images={images} alt={"Headshot"} width={200} height={200} className={"rounded-full border-4 border-[#0b6db8]"} />
            </motion.div>
        </div>
    )

    const PostsAndSkills = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
            {config.posts.slice(0, 2).map((post: Post, index: number) => (
                <PostPreview key={index} title={post.title} link={post.link}/>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 col-span-1 sm:col-span-2">
                <PillCard
                    title={"Programming Languages"}
                    pillItems={config.languages}
                    pillColor={"bg-[#0b6db8]"}
                />
                <PillCard
                    title={"Other Technologies"}
                    pillItems={config.technologies}
                />
            </div>
        </div>
    )

    const ProjectsTab = () => (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeInFromRightVariants}
        >
            {config.projects.map((proj: PortfolioProject, index: number) => (
                <motion.div key={index} variants={fadeInFromRightChildVariants}>
                    <ProjectCard key={index} project={proj}/>
                </motion.div>
            ))}
        </motion.div>
    )

    const ExperienceAndEducationTab = () => (
        <>
            <motion.div
                className="mx-auto w-full items-center justify-center"
                initial="hidden"
                animate="visible"
                variants={fadeInFromRightVariants}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {config.experience.map((company, index) => (
                        <motion.div key={index} variants={fadeInFromRightChildVariants}>
                            <ExperienceCard
                                logo={company.companyLogo}
                                experience={company}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="my-4 w-full mx-auto flex items-center"
                initial="hidden"
                animate="visible"
                variants={fadeInFromRightVariants}
            >
                <Separator className="flex-1 mr-4"/>
                <h3 className="text-2xl font-bold text-gray-300 whitespace-nowrap">Education</h3>
                <Separator className="flex-1 ml-4"/>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                variants={fadeInFromRightVariants}
            >
                {config.education.map((institution: Education, index: number) => (
                    <motion.div key={index} variants={fadeInFromRightChildVariants}>
                        <EducationCard
                            level={institution.level}
                            duration={institution.duration}
                            background={institution.background}
                            logo={institution.logo}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </>
    )

    const HomeContent = () => (
        <div className="px-6 sm:px-12 py-6 md:py-12 overflow-y-auto h-full hide-scrollbar">
            <ProfileHeader/>
            <PostsAndSkills/>

            <div className="my-4">
                <motion.div initial="hidden" animate="visible" variants={fadeDownVariants}>
                    <Tabs defaultValue="account" className="">
                        <TabsList className="flex w-full">
                            <TabsTrigger value="account" className="flex-1 text-center">
                                Experience & Education
                            </TabsTrigger>
                            <TabsTrigger value="password" className="flex-1 text-center">
                                Projects
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="password" className="py-2">
                            <ProjectsTab/>
                        </TabsContent>
                        <TabsContent value="account" className="py-2">
                            <ExperienceAndEducationTab/>
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>

            <Footer/>
        </div>
    )

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="main-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={fadeTransition}
                className="min-h-screen"
            >
                {!isMobile ? (
                    <div className="flex h-screen">
                        <div className="w-1/2 overflow-y-auto hide-scrollbar">
                            <ContentLoader contentKey="content">
                                <HomeContent/>
                            </ContentLoader>
                        </div>

                        <div className="w-1/2 h-screen">
                            <div className="w-full h-full bg-slate-200 dark:bg-[#0b6db8]" />
                        </div>
                    </div>
                ) : (
                    <div className="min-h-screen">
                        <div className="w-full">
                            <ContentLoader contentKey="content-mobile">
                                <HomeContent/>
                            </ContentLoader>
                        </div>
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    )
}