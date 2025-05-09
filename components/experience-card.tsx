import React from 'react';
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
import { Card, CardContent } from "@/components/ui/card";
import {Timeline, TimelineDot, TimelineHeading, TimelineItem} from "@/components/ui/timeline";
import CustomTimelineItem from "@/components/timeline-item";
import {Experience, Role} from "@/app/types";
import Image from "next/image";
import {ScrollArea} from "@/components/ui/scroll-area";
import {BuildingIcon, CalendarIcon} from "lucide-react";

type CardProps = {
    experience: Experience;
    logo: string;
};

const ExperienceCard = ({ experience, logo }: CardProps) => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="overflow-hidden border-2 hover:cursor-pointer hover:border-blue-700 transition-all duration-300 hover:shadow-md">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-5">
                            <div className="flex-shrink-0 p-0.5 rounded-md border bg-slate-700 border-slate-700">
                                <Image
                                    src={logo || "/placeholder.svg"}
                                    alt={`${experience.company} logo`}
                                    width={40}
                                    height={40}
                                    className="object-contain rounded-md"
                                />
                            </div>

                            <div className="space-y-0.5">
                                <h3 className="font-semibold text-lg tracking-tight line-clamp-1">{experience.roles[0].position}</h3>
                                <div className="space-y-1.5">
                                    <div className="flex items-center text-muted-foreground">
                                        <BuildingIcon className="w-4 h-4 mr-2" />
                                        <span className="font-medium line-clamp-1">{experience.company}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <CalendarIcon className="w-4 h-4 mr-2" />
                                        <span className={"line-clamp-1"}>{experience.roles[0].dateRange}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </DialogTrigger>
            <DialogContent className="rounded-lg max-w-[350px] sm:max-w-[650px] lg:max-w-[960px] p-0">
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
                    <DialogClose className={"bg-[#0b6db8] text-wc4c-logohite p-2 rounded-lg"}>
                        Close
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ExperienceCard;

