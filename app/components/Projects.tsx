import React from "react"
import ProjectCard from "@components/ui/ProjectCard"

const Projects = () => {
  return (
    <div className="m-[4rem] p-[auto]">
      <h1 className="text-[55px] font-regular">Projects</h1>
      <ProjectCard image="/TaskList_React.png" title="TaskList" description="Keep track of all your tasks and assignments with the TaskList. Built with Reactjs" demo="https://krystln.github.io/tasklist-react/" code="https://github.com/krystln/tasklist-react" />
      <ProjectCard image="/LooseScrews.png" title="LooseScrews" description="An E-commerce platform for all your hardware needs. Built with Next & Reactjs" demo="https://loose-screws.vercel.app/" code="https://github.com/krystln/loose-screws" />
      <ProjectCard image="/Portfolio.png" title="Portfolio Website" description="My Portfolio website :) Built with Next & Reactjs" demo="https://akshitgoyal.dev/" code="https://github.com/krystln/portfolio" />
    </div>
  )
}

export default Projects