"use client"

import {CalendarIcon, ClipboardIcon, MailIcon} from "lucide-react"
import Image from 'next/image'
import {Tabs, TabsTrigger} from "@/components/ui/tabs"
import {TabsContent, TabsList} from "@/components/ui/tabs"
import {motion} from "framer-motion"
import {fadeInFromRightChildVariants, fadeInFromRightVariants} from "./animations/fade-in-from-right"
import {foldUpVariants} from "./animations/fold-up"
import {staggerContainerVariants} from "./animations/stagger"
import {TwitterIcon, SlackIcon, LinkedInIcon, GitHubIcon} from "@/components/icons";
import {ProjectCard} from "@/components/project-card"

import LanguagesCard from "@/components/languages-card";
import FrameworksCard from "@/components/frameworks-card";
import LeadingButton from "@/components/leading-button";
import SocialButton from "@/components/social-button";
import WaveText from "@/components/wave-text";
import {fadeDownVariants} from "@/app/animations/fade-down";
import Footer from "@/components/footer";
import config from "@/app/config";
import {Education, PortfolioProject} from "@/app/types";
import ExperienceCard from "@/components/experience-card";
import {Separator} from "@/components/ui/separator";
import EducationCard from "@/components/education-card";

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
        <div className="mx-8 sm:mx-12 md:mx-32 lg:mx-48 xl:max-w-[1080px] xl:justify-self-center my-6 sm:my-16">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
                <div className="flex flex-col mb-2 sm:mb-0">
                    <motion.div className="items-center self-center sm:hidden mb-3" initial="hidden"
                                animate="visible"
                                variants={fadeInFromRightVariants}>
                        <Image
                            src="/headshot.png"
                            alt="Ben Petrillo"
                            width={200}
                            height={200}
                            className="rounded-full border-4 border-[#0b6db8]"
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
              Let&#39;s build something cool together!
            </span>
                    </motion.h4>
                    <motion.div className="inline-flex gap-2 mt-1 self-center sm:self-start"
                                variants={staggerContainerVariants}
                                initial="hidden"
                                animate="visible">
                        <LeadingButton icon={clipboard} text="Resume" link={"/resume.pdf"}/>
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
                        src="/headshot.png"
                        alt="Ben Petrillo"
                        width={200}
                        height={200}
                        className="rounded-full border-4 border-[#0b6db8]"
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
                                Experience & Education
                            </TabsTrigger>
                            <TabsTrigger value="password" className="flex-1 text-center">
                                Projects
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="password" className="py-2">
                            <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4"
                                        initial="hidden" animate="visible" variants={fadeInFromRightVariants}>
                                {config.projects.map((proj: PortfolioProject, index: number) => (
                                    <motion.div key={index} variants={fadeInFromRightChildVariants}>
                                        <ProjectCard key={index} project={proj}/>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </TabsContent>
                        <TabsContent value="account" className="py-2">
                            <motion.div
                                className="mx-auto w-full flex items-center justify-center"
                                initial="hidden"
                                animate="visible"
                                variants={fadeInFromRightVariants}
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    {config.experience.map((company, index) => (
                                        <motion.div
                                            key={index}
                                            variants={fadeInFromRightChildVariants}
                                        >
                                            <ExperienceCard
                                                background={company.backgroundImage}
                                                logo={company.companyLogo}
                                                experience={company}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <Separator className="my-4"/>
                            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                                        variants={fadeInFromRightVariants}>
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
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>
            <Footer/>
        </div>
    )
}