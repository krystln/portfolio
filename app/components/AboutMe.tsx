import React from 'react'
import Skills from '@components/ui/Skills'

const AboutMe = () => {
  return (
    <div className='h-fit'>
      <div className='flex w-fit'>
        <h1 className='border-r-2 border-white text-[55px] font-[500] pr-[2rem] mx-[5rem] my-[1rem]'>About Me</h1>
        <p className='flex flex-col gap-[2rem] text-[24px] pr-[5rem] font-thin'>
          <span>Welcome to my website!</span>

          <span>Thrilled to have you here. I am a fourth-year B.Tech student specializing in Information Technology, having a passion for <span className='font-medium'>front-end web development</span>. While I may not have pursued any internships yet, my dedication and enthusiasm have allowed me to gain valuable knowledge and skills in this field.</span>

          <span>I have a strong understanding of modern web design principles, and I am adept at creating visually appealing, user-friendly, and responsive websites. My curiosity and drive to stay up-to-date with the latest trends and technologies have led me to explore frameworks such as <span className='font-medium'>Nextjs</span> and libraries like <span className='font-medium'>Reactjs</span>.</span>

          <span>I strive for excellence in every project I undertake, ensuring that the final product not only meets but exceeds expectations. I believe in the power of collaboration and effective communication, as I enjoy working alongside others to bring ideas to life and contribute to a successful team dynamic.</span>

          <span>I am eager to embrace new challenges and opportunities that will enable me to grow both personally and professionally.</span>

          <span>Thank you for taking the time to explore my portfolio website. I am excited about the prospect of working with you and contributing to innovative projects. Please feel free to browse my projects, and don't hesitate to reach out.</span>

          <span>Let's create something amazing together!</span>
        </p>
      </div>
      <div className='flex slant my-[4rem] py-[4rem] '>
        <Skills />
        <h1 className='border-l-2 border-black text-[55px] font-medium pl-[2rem]'>Technical Skills</h1>
      </div>
    </div>
  )
}

export default AboutMe