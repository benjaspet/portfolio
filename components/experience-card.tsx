import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Timeline, TimelineDot, TimelineHeading, TimelineItem} from "@/components/ui/timeline";
import CustomTimelineItem from "@/components/timeline-item";
import {Experience, Role} from "@/app/types";
import Image from "next/image";
import {ScrollArea} from "@/components/ui/scroll-area";

type CardProps = {
    experience: Experience;
    logo: string;
    background: string;
};

const Card = ({ experience, logo, background }: CardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div
                    className="relative h-48 group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-shadow border-2 border-muted duration-300 ease-in-out hover:shadow-2xl"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Image
                        src={background}
                        alt="Background image"
                        className="transition-transform duration-300 ease-in-out"
                        width={600}
                        height={400}
                    />

                    <div
                        className="absolute inset-0 bg-black bg-opacity-80 transition-opacity duration-700 ease-in-out"/>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div
                            className={`absolute inset-0 flex items-center justify-center transition-opacity ease-in-out ${isHovered ? 'opacity-0' : 'duration-1000 opacity-100'}`}>
                            <Image
                                src={logo}
                                alt="Company logo"
                                className="max-w-[80%] max-h-[50%] object-contain"
                                width={300}
                                height={200}
                            />
                        </div>

                        <div
                            className={`absolute inset-0 flex items-center justify-center overflow-hidden ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="transition-transform duration-300 ease-in-out transform-gpu" style={{
                                transform: isHovered ? 'rotateX(0deg)' : 'rotateX(-90deg)',
                                transformOrigin: 'bottom'
                            }}>
                                <h2 className="text-white text-2xl font-bold text-center px-4">
                                    {experience.roles[0].position}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-[350px] sm:max-w-[650px] lg:max-w-[960px] p-0">
                <ScrollArea className="max-h-[60vh] overflow-y-auto">
                    <div className="p-6">
                        <DialogHeader>
                            <DialogTitle className={"text-xl"}>{experience.company}</DialogTitle>
                            <DialogDescription className={"text-md leading-5"}>
                                {experience.description}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                            <Timeline>
                                {experience.roles.map((role: Role, index: number) => (
                                    <CustomTimelineItem
                                        status={role.status}
                                        role={role.position}
                                        company={experience.company}
                                        companyWebsite={experience.website}
                                        locationAndDate={role.location + " • " + role.dateRange}
                                        bullets={role.bullets}
                                        key={index}
                                    />
                                ))}
                                <TimelineItem>
                                    <TimelineHeading>Experience began.</TimelineHeading>
                                    <TimelineDot status={"done"}/>
                                </TimelineItem>
                            </Timeline>
                        </div>
                    </div>
                </ScrollArea>
                <DialogFooter className="md:hidden p-6 border-t">
                    <DialogClose className={"bg-[#0b6db8] text-white p-2 rounded-lg"}>
                        Close
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default Card;

