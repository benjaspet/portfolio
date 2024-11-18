import React from "react"
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { fadeInFromRightVariants } from "@/app/animations/fade-in-from-right";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { PortfolioProject } from "@/app/types/types";

type ProjectCardProps = {
    project: PortfolioProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }: ProjectCardProps) => (
    <Card className="overflow-hidden border-2 duration-300 border-gray-600 hover:border-[#0b6db8]">
      <motion.div initial="hidden"
        animate="visible"
        variants={fadeInFromRightVariants}>
        <Image
          src={project.imageURL}
          alt={project.title}
          width={400}
          height={200}
          className="w-[400px] h-[200px] object-cover"
        />
      </motion.div>
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
        <p className="text-md text-muted-foreground mb-4 font-medium">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )