import React from "react";
import ProjectCard from "@components/ui/ProjectCard";
import Carosel from "@components/Carosel";

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
        "An E-commerce platform for all your hardware needs. Built with Next & Reactjs",
      url: "https://krystln.github.io/tasklist-react/",
      codeUrl: "https://github.com/krystln/tasklist-react",
    },
    {
      title: "LooseScrews",
      description:
        "An E-commerce platform for all your hardware needs. Built with Next & Reactjs",
      url: "https://loose-screws.vercel.app/",
      codeUrl: "https://github.com/krystln/loose-screws",
    },
    {
      title: "Portfolio",
      description: "My Portfolio website :) Built with Next & Reactjs",
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
    <>
      <h1 className="text-4xl font-black">My Projects</h1>
      <div className="m-[4rem] p-[auto] Projects flex items-center gap-1">
        <Carosel>{projectList}</Carosel>
      </div>
    </>
  );
};

export default Projects;
