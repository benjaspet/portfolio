import React from "react"
import {Card, CardContent} from "./ui/card";
import {motion} from "framer-motion";
import {fadeInFromRightVariants} from "@/app/animations/fade-in-from-right";
import {Badge} from "./ui/badge";
import Image from "next/image";
import {PortfolioProject} from "@/app/types";

type ProjectCardProps = {
    project: PortfolioProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <motion.div initial="hidden" animate="visible" variants={fadeInFromRightVariants} className="h-full">
            <Card className="overflow-hidden border-2 duration-300 border-gray-600 hover:border-[#0b6db8] h-full flex flex-col">
                <motion.div initial="hidden" animate="visible" variants={fadeInFromRightVariants}>
                    <Image
                        src={project.imageURL}
                        alt={project.title}
                        width={400}
                        height={100}
                        className="w-full h-[100px] object-cover"
                    />
                </motion.div>
                <CardContent className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                    <p className="text-md text-muted-foreground mb-4 font-medium flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.techStack.map((tech, index) => (
                            <Badge key={index} variant="default" className="flex items-center gap-1 px-2 py-1 hover:cursor-pointer">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}