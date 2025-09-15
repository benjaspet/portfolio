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
import {fadeDownVariants} from "@/app/animations/fade-down"
import Footer from "@/components/footer"
import config from "@/app/config"
import type {Education, PortfolioProject} from "@/app/types"
import ExperienceCard from "@/components/experience-card"
import {Separator} from "@/components/ui/separator"
import EducationCard from "@/components/education-card"
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
    "/photography/staircase.jpg",
    "/photography/headshot.png",
    "/photography/present.png",
];

const LINKS = {
    resume: "https://drive.google.com/file/d/1pOz0Op1I-F_--BS36-9hvXIz9_FkD6xL/view?usp=sharing",
    github: "https://github.com/benjaspet",
    linkedin: "https://www.linkedin.com/in/ben-petrillo",
    email: "mailto:petrillo.b@northeastern.edu"
};

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

    const SocialButtons = ({showText = true}: {showText?: boolean}) => (
        <motion.div
            className={`flex gap-2 ${showText ? 'mt-1' : 'mt-2'}`}
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
        >
            <LeadingButton 
                icon={icons.clipboard} 
                text={showText ? "Resume Request" : ""} 
                link={LINKS.resume}
            />
            <LeadingButton icon={icons.github} text="" link={LINKS.github}/>
            <LeadingButton icon={icons.linkedin} text="" link={LINKS.linkedin}/>
            <LeadingButton icon={icons.mail} text="" link={LINKS.email}/>
        </motion.div>
    )

    const ProfileImage = ({size, className}: {size: number, className: string}) => (
        <HeadshotSlideshow 
            images={images} 
            alt="Headshot" 
            width={size} 
            height={size} 
            className={className} 
        />
    )

    const ProfileText = ({isMobile}: {isMobile: boolean}) => (
        <>
            <motion.h1
                className={`${isMobile ? 'text-2xl text-left' : 'hidden sm:block text-center sm:text-start mt-8 md:mt-0 text-4xl'} font-bold`}
                variants={foldUpVariants}
                initial="hidden"
                animate="visible"
            >
                <p>Ben Petrillo</p>
            </motion.h1>
            <motion.h2
                className={`${isMobile ? 'text-lg text-left mb-2' : 'hidden sm:block text-xl md:text-2xl text-center sm:text-start mb-2'} font-semibold text-gray-300`}
                variants={foldUpVariants}
                initial="hidden"
                animate="visible"
            >
                <p>Software Engineering</p>
            </motion.h2>
            {!isMobile && (
                <motion.h4
                    variants={foldUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="hidden sm:block text-md text-gray-300 font-semibold text-center sm:text-start"
                >
                    <span className="hidden sm:inline-flex gap-1 items-center mb-4">
                        Always moving fast, eager to learn, ready to build.
                    </span>
                </motion.h4>
            )}
        </>
    )

    const MobileProfileHeader = () => (
        <div className="flex sm:hidden items-center justify-between w-full">
            <div className="flex-1 min-w-0">
                <ProfileText isMobile={true} />
                <SocialButtons showText={false} />
            </div>
            <motion.div
                className="flex-shrink-0 ml-4"
                initial="hidden"
                animate="visible"
                variants={fadeInFromRightVariants}
            >
                <ProfileImage size={120} className="rounded-full border-2 border-[#0b6db8]" />
            </motion.div>
        </div>
    )

    const DesktopProfileHeader = () => (
        <div className="flex flex-col sm:mb-0">
            <motion.div
                className="items-center sm:self-center hidden mb-3"
                initial="hidden"
                animate="visible"
                variants={fadeInFromRightVariants}
            >
                <ProfileImage size={200} className="rounded-full border-4 border-[#0b6db8]" />
            </motion.div>

            <ProfileText isMobile={false} />

            <div className="hidden md:inline-flex gap-2 self-center sm:self-start">
                <SocialButtons showText={true} />
            </div>
        </div>
    )

    const ProfileHeader = () => (
        <div className="flex flex-col sm:flex-row mx-2 md:mx-0 md:mb-8 md:items-center sm:items-start justify-between">
            <MobileProfileHeader />
            <DesktopProfileHeader />
            
            <motion.div
                className="flex-shrink-0 hidden sm:flex"
                initial="hidden"
                animate="visible"
                variants={fadeInFromRightVariants}
            >
                <ProfileImage size={180} className="rounded-full border-4 border-[#0b6db8]" />
            </motion.div>
        </div>
    )

    const PostsAndSkills = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 col-span-1 sm:col-span-2">
                <PillCard
                    title="Programming Languages"
                    pillItems={config.languages}
                    pillColor="bg-[#0b6db8]"
                />
                <PillCard
                    title="Other Technologies"
                    pillItems={config.technologies}
                />
            </div>
        </div>
    )

    const AnimatedGrid = ({children, className = ""}: {children: React.ReactNode, className?: string}) => (
        <motion.div
            className={`${className}`}
            initial="hidden"
            animate="visible"
            variants={fadeInFromRightVariants}
        >
            {children}
        </motion.div>
    )

    const ProjectsTab = () => (
        <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {config.projects.map((proj: PortfolioProject, index: number) => (
                <motion.div key={index} variants={fadeInFromRightChildVariants}>
                    <ProjectCard project={proj}/>
                </motion.div>
            ))}
        </AnimatedGrid>
    )

    const SectionSeparator = ({title}: {title: string}) => (
        <motion.div
            className="my-4 w-full mx-auto flex items-center"
            initial="hidden"
            animate="visible"
            variants={fadeInFromRightVariants}
        >
            <Separator className="flex-1 mr-4"/>
            <h3 className="text-2xl font-bold text-gray-300 whitespace-nowrap">{title}</h3>
            <Separator className="flex-1 ml-4"/>
        </motion.div>
    )

    const ExperienceAndEducationTab = () => (
        <>
            <AnimatedGrid className="mx-auto w-full items-center justify-center">
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
            </AnimatedGrid>

            <SectionSeparator title="Education" />

            <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
            </AnimatedGrid>
        </>
    )

    const HomeContent = () => (
        <div className="px-6 sm:px-12 py-6 md:py-12 overflow-y-auto h-full hide-scrollbar">
            <ProfileHeader/>
            <PostsAndSkills/>

            <div className="my-4">
                <motion.div initial="hidden" animate="visible" variants={fadeDownVariants}>
                    <Tabs defaultValue="account">
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

    const DesktopLayout = () => (
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
    )

    const MobileLayout = () => (
        <div className="min-h-screen">
            <div className="w-full">
                <ContentLoader contentKey="content-mobile">
                    <HomeContent/>
                </ContentLoader>
            </div>
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
                {!isMobile ? <DesktopLayout /> : <MobileLayout />}
            </motion.div>
        </AnimatePresence>
    )
}