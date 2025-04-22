"use client";
import React, { useEffect, useState } from "react";
import DotGrid from "@/components/dot-grid";
import {CalendarIcon, ClipboardIcon, MailIcon} from "lucide-react"
import Image from 'next/image'
import {Tabs, TabsTrigger} from "@/components/ui/tabs"
import {TabsContent, TabsList} from "@/components/ui/tabs"
import {motion, AnimatePresence} from "framer-motion"
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
import {Education, PortfolioProject, Post} from "@/app/types";
import ExperienceCard from "@/components/experience-card";
import {Separator} from "@/components/ui/separator";
import EducationCard from "@/components/education-card";
import PostPreview from "@/components/post-preview";

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
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLayoutReady, setIsLayoutReady] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth <= 640) {
                setIsMobile(true);
            }
        };

        checkMobile();

        setIsLayoutReady(true);

        window.addEventListener('resize', checkMobile);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => {
            window.removeEventListener('resize', checkMobile);
            clearTimeout(timer);
        };
    }, []);

    const LoadingSkeleton = () => (
        <div className="px-6 sm:px-12 py-6 md:py-12 overflow-y-auto h-full hide-scrollbar">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
                <div className="flex flex-col mb-2 sm:mb-0 w-full sm:w-2/3">
                    <div className="sm:hidden w-[200px] h-[200px] bg-slate-700 rounded-full self-center mb-6 animate-pulse" />

                    <div className="h-10 bg-slate-700 rounded-md w-3/4 sm:w-4/5 mb-3 animate-pulse self-center sm:self-start" />

                    <div className="h-8 bg-slate-700 rounded-md w-5/6 mb-4 animate-pulse self-center sm:self-start" />

                    <div className="h-5 bg-slate-700 rounded-md w-2/3 mb-4 animate-pulse hidden sm:block" />

                    <div className="flex gap-2 self-center sm:self-start">
                        <div className="h-9 bg-slate-700 rounded-md w-24 animate-pulse" />
                        <div className="h-9 bg-slate-700 rounded-md w-28 animate-pulse" />
                    </div>

                    <div className="flex gap-2 mt-3 self-center sm:self-start">
                        <div className="h-8 w-8 bg-slate-700 rounded-md animate-pulse" />
                        <div className="h-8 w-8 bg-slate-700 rounded-md animate-pulse" />
                        <div className="h-8 w-8 bg-slate-700 rounded-md animate-pulse" />
                        <div className="h-8 w-8 bg-slate-700 rounded-md animate-pulse" />
                        <div className="h-8 w-8 bg-slate-700 rounded-md animate-pulse" />
                    </div>
                </div>

                <div className="hidden sm:block w-[200px] h-[200px] bg-slate-700 rounded-full animate-pulse" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-8">
                <div className="h-40 bg-slate-700 rounded-lg animate-pulse" />
                <div className="h-40 bg-slate-700 rounded-lg animate-pulse" />
                <div className="h-40 bg-slate-700 rounded-lg animate-pulse" />
                <div className="h-40 bg-slate-700 rounded-lg animate-pulse" />
            </div>

            <div className="my-8">
                <div className="h-12 bg-slate-700 rounded-md w-full mb-4 animate-pulse" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="h-64 bg-slate-700 rounded-lg animate-pulse" />
                    <div className="h-64 bg-slate-700 rounded-lg animate-pulse" />
                    <div className="h-64 bg-slate-700 rounded-lg animate-pulse" />
                    <div className="h-64 bg-slate-700 rounded-lg animate-pulse" />
                </div>
            </div>

            <div className="h-16 bg-slate-700 rounded-md mt-8 animate-pulse" />
        </div>
    );

    const HomeContent = () => (
        <div className="px-6 sm:px-12 py-6 md:py-12 overflow-y-auto h-full hide-scrollbar">
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
                        <WaveText text={"Computer Science @ Northeastern"}/>
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
                {config.posts.map((post: Post, index: number) => (
                    <PostPreview key={index} title={post.title} link={post.link}/>
                ))}
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
                            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
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
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {config.experience.map((company, index) => {
                                        return (
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
                                        );
                                    })}
                                </div>
                            </motion.div>
                            <motion.div className="my-4 w-full mx-auto flex items-center"
                                        initial="hidden"
                                        animate="visible"
                                        variants={fadeInFromRightVariants}>
                                <Separator className="flex-1 mr-4"/>
                                <h3 className="text-2xl font-bold text-gray-300 whitespace-nowrap">
                                    Education
                                </h3>
                                <Separator className="flex-1 ml-4"/>
                            </motion.div>
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
    );

    if (isMobile === null || !isLayoutReady) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-pulse h-16 w-16 rounded-full bg-slate-700"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {!isMobile && (
                <div className="flex h-screen">
                    <div className="w-1/2 overflow-y-auto hide-scrollbar">
                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    <LoadingSkeleton />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    <HomeContent />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="fixed top-0 right-0 w-1/2 h-screen bg-slate-900 border-l-4 border-l-slate-700">
                        <DotGrid
                            dotSize={8}
                            spacing={25}
                            patternSpeed={1}
                            padding={8}
                        />
                    </div>
                </div>
            )}

            {isMobile && (
                <div className="min-h-screen pb-32">
                    <div className="w-full">
                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                <motion.div
                                    key="loading-mobile"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    <LoadingSkeleton />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="content-mobile"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    <HomeContent />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            )}
        </div>
    );
}