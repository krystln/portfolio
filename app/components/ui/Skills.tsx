'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import ReactLogo from '@public/skillsLogo/react.svg'
import NextLogo from '@public/skillsLogo/next.svg'
import JavascriptLogo from '@public/skillsLogo/js.svg'
import HtmlLogo from '@public/skillsLogo/html.svg'
import CssLogo from '@public/skillsLogo/css.svg'


const Skills = () => {
  return (
    <div className='w-4/5'>
        <Link href=""><Image src={ReactLogo} alt="" width={50} height={50}/></Link>
        <Link href=""><Image src={NextLogo} alt="" width={100} height={100}/></Link>
        <Link href=""><Image src={JavascriptLogo} alt="" width={50} height={50}/></Link>
        <Link href=""><Image src={HtmlLogo} alt="" width={50} height={50}/></Link>
        <Link href=""><Image src={CssLogo} alt="" width={50} height={50}/></Link>
    </div>
  )
}

export default Skills