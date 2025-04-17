import React from "react"
import {Card, CardContent, CardFooter} from "./ui/card";
import {motion} from "framer-motion";
import {fadeInFromRightVariants} from "@/app/animations/fade-in-from-right";
import {Badge} from "./ui/badge";
import Image from "next/image";
import {PortfolioProject} from "@/app/types";
import {Button} from "@/components/ui/button";
import {redirect, RedirectType} from "next/navigation";

type ProjectCardProps = {
    project: PortfolioProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="h-full group">
            <Card className="overflow-hidden border-2 border-gray-600 hover:border-[#0b6db8] h-full flex flex-col
                            transform transition-all duration-300 ease-in-out
                            hover:scale-100 hover:shadow-lg hover:shadow-[#0b6db8]/20
                            group-hover:-translate-y-1">
                <motion.div initial="hidden" animate="visible" variants={fadeInFromRightVariants}>
                    <div className="overflow-hidden">
                        <Image
                            src={project.imageURL}
                            alt={project.title}
                            width={400}
                            height={200}
                            className="w-full h-[200px] object-cover transform transition-transform duration-500
                                    group-hover:scale-105"
                        />
                    </div>
                </motion.div>
                <CardContent className="px-5 pt-4 pb-2 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-1 transition-colors duration-300
                                group-hover:text-[#0b6db8]">{project.title}</h3>
                    <p className="text-md text-muted-foreground mb-4 font-medium flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.techStack.map((tech, index) => (
                            <Badge key={index} variant="default" className="flex items-center gap-1 px-2 py-1 hover:cursor-pointer
                                                                        transition-all duration-300 group-hover:bg-opacity-90">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="text-sm text-gray-100 gap-4 pb-3">
                    {project.githubURL && <Button className={"p-0"} variant={"linkHover2"} onClick={() => window.open(project.githubURL)}>GitHub</Button> }
                    {project.liveURL && <Button className={"p-0"} variant={"linkHover2"} onClick={() => redirect(project.liveURL || "", RedirectType.replace)}>Learn More</Button>}
                    <Button className={"p-0 hover:cursor-text"} variant={"linkHover2"}>{project.duration}</Button>
                </CardFooter>
            </Card>
        </div>
    )
}