import React from "react";
import ProjectCard from "@/app/components/ProjectCard";
import Carosel from "@/app/components/ui/Carosel";

type Project = {
  title: string;
  description: string;
  url: string;
  codeUrl: string;
};

const Projects = () => {
  const ProjectDetails: Project[] = [
    {
      title: "TaskList",
      description:
        "A Task management platform to keep track of your daily tasks. Built with Reactjs",
      url: "https://krystln.github.io/tasklist-react/",
      codeUrl: "https://github.com/krystln/tasklist-react",
    },
    {
      title: "LooseScrews",
      description:
        "An E-commerce platform to buy and sell crafting material. Built with Nextjs & Reactjs",
      url: "https://loose-screws.vercel.app/",
      codeUrl: "https://github.com/krystln/loose-screws",
    },
    {
      title: "Portfolio",
      description:
        "My Portfolio website to showcase my projects. Built with Nextjs & Reactjs",
      url: "https://akshitgoyal.dev/",
      codeUrl: "https://github.com/krystln/portfolio",
    },
  ];

  const projectList = ProjectDetails.map((project) => {
    return (
      <ProjectCard
        key={project.title}
        title={project.title}
        description={project.description}
        url={project.url}
        codeUrl={project.codeUrl}
      />
    );
  });

  return (
    <section className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className="text-4xl font-mono font-[700]">
        My Projects<span className="animate-flicker">_</span>
      </h1>
      <div className="m-[4rem] p-[auto] Projects flex items-center gap-1">
        <Carosel>{projectList}</Carosel>
      </div>
    </section>
  );
};

export default Projects;
