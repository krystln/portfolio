import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type ProjectCardProps = {
  image: string,
  title: string,
  link: string
}

const ProjectCard = ({ image, title, link }: ProjectCardProps) => {
  return (
    <div className='border w-[20rem]  '>
      <Link href={link} target='_blank' rel='noopener noreferrer'>
        <Image src={image} alt={title} width={350} height={300} className='border'/>
        <h1>{title}</h1>
      </Link>
    </div>
  )
}

export default ProjectCard