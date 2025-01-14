import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Timeline, TimelineDot, TimelineHeading, TimelineItem} from "@/components/ui/timeline";
import CustomTimelineItem from "@/components/timeline-item";
import config from "@/app/config";
import {Experience} from "@/app/types";
import Image from "next/image";

type CardProps = {
    companyLogo: string;
    role: string;
    backgroundImage: string;
};

const Card = ({ companyLogo, role, backgroundImage }: CardProps) => {
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
                        src={backgroundImage}
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
                                src={companyLogo}
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
                                    {role}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl">
                <DialogHeader>
                    <DialogTitle>Generate Product Development</DialogTitle>
                    <DialogDescription className={"text-md leading-5"}>
                        Generate is Northeastern’s premiere student-led product development studio. Its team of
                        dedicated engineers and designers work and empower real startups with our innovative products.


                        Each semester, Generate works with Software and Hardware founders to build their product and
                        support them on their entrepreneurial journey.
                    </DialogDescription>
                </DialogHeader>
                <Timeline>
                    {config.experience.slice(0,2).map((exp: Experience, index: number) => (
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
                        <TimelineHeading>Experience began.</TimelineHeading>
                        <TimelineDot status={"done"}/>
                    </TimelineItem>
                </Timeline>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default Card;

