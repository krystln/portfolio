"use client"
import React from "react"
import Link from "next/link"
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
    <div className="mx-[2rem] w-4/5 h-full flex flex-col gap-[4rem] justify-center">
      <div className="flex gap-[4rem] items-center justify-center">
        <Image src={HtmlLogo} alt="" width={120} height={120}/>
        <Image src={CssLogo} alt="" width={120} height={120}/>
        <Image src={JavascriptLogo} alt="" width={120} height={120}/>
      </div>
      <div className="flex gap-[6rem] items-center justify-center">
        <Image src={ReactLogo} alt="" width={120} height={120}/>
        <Image src={NextLogo} alt="" width={200} height={200}/>
      </div>
      <div className="flex gap-[6rem] items-center justify-center">
        <Image src={GitLogo} alt="" width={120} height={120}/>
        <Image src={MongoLogo} alt="" width={300} height={300}/>
      </div>
    </div>
  )
}

export default Skills