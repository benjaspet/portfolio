"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {CalendarIcon, ClipboardIcon, MailIcon, MapPinHouse} from "lucide-react"
import Image from 'next/image'
import {Tabs, TabsTrigger} from "@/components/ui/tabs"
import {TabsContent, TabsList} from "@/components/ui/tabs"
import {
    Timeline,
    TimelineDot,
    TimelineHeading,
    TimelineItem,
} from "@/components/ui/timeline"
import {motion} from "framer-motion"
import {fadeInFromRightVariants} from "./animations/fade-in-from-right"
import {foldUpVariants} from "./animations/fold-up"
import {staggerContainerVariants} from "./animations/stagger"
import {TwitterIcon, SlackIcon, LinkedInIcon, GitHubIcon} from "@/components/icons";
import {ProjectCard} from "@/components/project-card"

import LanguagesCard from "@/components/languages-card";
import FrameworksCard from "@/components/frameworks-card";
import LeadingButton from "@/components/leading-button";
import SocialButton from "@/components/social-button";
import CustomTimelineItem from "@/components/timeline-item";
import WaveText from "@/components/wave-text";
import {fadeDownVariants} from "@/app/animations/fade-down";
import Footer from "@/components/footer";
import config from "@/app/config";
import {Education, Experience, PortfolioProject} from "@/app/types";

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
                            src="/headshot.jpg"
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
                                            {config.education.map((edu: Education, index: number) => (
                                                <div className={"leading-5"} key={index}>
                                                    <motion.h3 className="text-lg font-semibold mb-[-4px]"
                                                               variants={fadeDownVariants}>{edu.school}</motion.h3>
                                                    <motion.p className="text-muted-foreground font-semibold"
                                                               variants={fadeDownVariants}>{edu.degree}</motion.p>
                                                    <motion.p className="text-muted-foreground font-semibold"
                                                               variants={fadeDownVariants}>{edu.duration}</motion.p>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </motion.div>
                                </Card>
                            </motion.div>
                        </TabsContent>
                        <TabsContent value="account" className="py-2">
                            <Timeline>
                                {config.experience.map((exp: Experience, index: number) => (
                                    <CustomTimelineItem
                                        status={exp.status}
                                        role={exp.role}
                                        company={exp.company}
                                        companyWebsite={exp.website}
                                        locationAndDate={exp.locationAndDate}
                                        additionalSubtitle={exp.additionalSubtitle}
                                        bullets={exp.bullets}
                                        key={index}
                                    />
                                ))}
                                <TimelineItem>
                                    <TimelineHeading>I blossomed into existence 🌸</TimelineHeading>
                                    <TimelineDot status={"done"}/>
                                </TimelineItem>
                            </Timeline>
                        </TabsContent>
                        <TabsContent value={"projects"} className="py-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
                                {config.projects.map((proj: PortfolioProject, index: number) => (
                                    <ProjectCard key={index} project={proj}/>
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