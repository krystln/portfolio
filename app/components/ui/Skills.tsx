"use client"
import React from "react"
import Image from "next/image"

import HtmlLogo from "@public/skillsLogo/html.svg"
import CssLogo from "@public/skillsLogo/css.svg"
import JavascriptLogo from "@public/skillsLogo/js.svg"
import ReactLogo from "@public/skillsLogo/react.svg"
import NextLogo from "@public/skillsLogo/next.svg"
import GitLogo from "@public/skillsLogo/git.svg"
import MongoLogo from "@public/skillsLogo/mongodb.svg"


const Skills = () => {
  return (
    <div className="mx-[2rem] w-4/5 h-full flex flex-col gap-[4rem] justify-center AllSkills">
      <div className="flex gap-[4rem] items-center justify-center SkillRow">
        <div className="relative w-[120px] h-[120px]"><Image src={HtmlLogo} alt="" layout="fill" objectFit="contain" /></div>
        <div className="relative w-[120px] h-[120px]"><Image src={CssLogo} alt="" layout="fill" objectFit="contain" /></div>
        <div className="relative w-[120px] h-[120px]"><Image src={JavascriptLogo} alt="" layout="fill" objectFit="contain" /></div>
      </div>
      <div className="flex gap-[6rem] items-center justify-center SkillRow">
        <div className="relative w-[120px] h-[120px]"><Image src={ReactLogo} alt="" layout="fill" objectFit="contain" /></div>
        <div className="relative w-[150px] h-[150px]"><Image src={NextLogo} alt="" layout="fill" objectFit="contain" /></div>
      </div>
      <div className="flex gap-[6rem] items-center justify-center SkillRow">
        <div className="relative w-[100px] h-[100px]"><Image src={GitLogo} alt="" layout="fill" objectFit="contain" /></div>
        <div className="relative w-[150px] h-[150px]"><Image src={MongoLogo} alt="" layout="fill" objectFit="contain" /></div>
      </div>
    </div>
  )
}

export default Skills