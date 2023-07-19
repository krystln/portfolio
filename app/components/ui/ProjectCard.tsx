import React from "react"
import Image from "next/image"
import Link from "next/link"

import Demo from "@public/export.svg"
import Code from "@public/options.svg"

type ProjectCardProps = {
  image: string,
  title: string,
  description: string,
  demo: string,
  code: string
}

const ProjectCard = ({ image, title, demo, code, description }: ProjectCardProps) => {
  return (
    <div className="flex my-[2rem] mx-[5rem] gap-[5rem] items-center">
        <Image 
          src={image} 
          alt={title} 
          width={500} 
          height={300}
          style={{border: "2px solid #e5e5e5", width: "500px", height: "300px"}} 
        />
        <div className="">
          <h1 className="text-[32px] font-regular m-2">{title}</h1>
          <div className="text-[22px] font-light m-2">{description}</div>
          <div className="flex gap-[3rem] my-4 mx-2">
            <Link href={demo} className="bg-[#e5e5e5] flex gap-4 py-2 px-4 rounded-md"><span className="text-black">Live Demo</span><Image src={Demo} alt="" width={20} height={20}/></Link>
            <Link href={code} className="bg-[#e5e5e5] flex gap-4 py-2 px-4 rounded-md"><span className="text-black">Codebase</span><Image src={Code} alt="" width={20} height={20}/></Link>
          </div>
        </div>
    </div>
  )
}

export default ProjectCard