import React from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {Timeline, TimelineDot, TimelineHeading, TimelineItem} from "@/components/ui/timeline";
import CustomTimelineItem from "@/components/timeline-item";
import {Experience, Role} from "@/app/types";
import Image from "next/image";
import {ScrollArea} from "@/components/ui/scroll-area";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

type CardProps = {
    experience: Experience;
    logo: string;
};

const ExperienceCard = ({ experience, logo }: CardProps) => {
    const [dialogOpen, setDialogOpen] = React.useState(false);

    return (
        <>
            <HoverCard openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                    <div 
                        className="p-0.5 rounded-md border border-slate-700 hover:cursor-pointer hover:border-blue-700 transition-all duration-300 hover:shadow-md"
                        onClick={() => setDialogOpen(true)}
                    >
                        <Image
                            src={logo || "/placeholder.svg"}
                            alt={`${experience.company} logo`}
                            width={160}
                            height={160}
                            className="object-cover rounded-md w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40"
                        />
                    </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80" side="top" sideOffset={8}>
                    <div className="space-y-2">
                        <div>
                            <h4 className="font-semibold text-base leading-none mb-2">
                                {experience.company}
                            </h4>
                            <p className="text-sm font-semibold text-muted-foreground leading-snug mb-2">
                                {experience.roles[0].position}
                            </p>
                            {experience.summary && (
                                <p className="text-sm text-muted-foreground/90 leading-snug">
                                    {experience.summary}
                                </p>
                            )}
                        </div>
                        {experience.roles[0].dateRange && (
                            <div className="pt-1">
                                <p className="text-xs text-muted-foreground/80">
                                    {experience.roles[0].dateRange}
                                </p>
                            </div>
                        )}
                    </div>
                </HoverCardContent>
            </HoverCard>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent className="rounded-lg max-w-[350px] sm:max-w-[650px] lg:max-w-[960px] p-0">
                    <ScrollArea className="max-h-[60vh] overflow-y-auto">
                        <div className="p-6">
                            <DialogHeader>
                                <DialogTitle className="text-xl">{experience.company}</DialogTitle>
                                <DialogDescription className="text-md leading-5">
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
                                        <TimelineDot status="done"/>
                                    </TimelineItem>
                                </Timeline>
                            </div>
                        </div>
                    </ScrollArea>
                    <DialogFooter className="md:hidden p-6 border-t">
                        <DialogClose className="bg-[#0b6db8] text-white p-2 rounded-lg">
                            Close
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ExperienceCard;