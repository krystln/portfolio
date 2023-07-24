import React from "react"
import Image from "next/image"
import Link from "next/link"

import LinkedIn from "@public/icons/linkedin.svg"
import Twitter from "@public/icons/twitter.svg"
import Mail from "@public/icons/mail.svg"


const Share = () => {
  return (
    <div className="bg-[#E5E5E2] w-4/5 h-[5rem] rounded-md p-[0.5rem] my-3">
        <div className="flex flex-row gap-8 items-center Share">
            <div className="w-[4rem] h-[4rem] bg-[url(https://media.licdn.com/dms/image/D4D35AQEBPQaQD3TwAw/profile-framedphoto-shrink_400_400/0/1690186148342?e=1690804800&v=beta&t=TVC72DMsSeTRlmCv1kcQftY-jFUQkExl-bXki-naJbk)] rounded-full bg-contain"></div>
            <Link href="https://www.linkedin.com/in/akshit1025/" target="_blank"><Image src={ LinkedIn } alt="" width={50} height={50}/></Link>
            <Link href="https://twitter.com/d3vSloth" target="_blank"><Image src={ Twitter } alt="" width={35} height={35}/></Link>
            <Link href="mailto:contact@akshitgoyal.dev"><Image src={ Mail } alt="" width={35} height={35}/></Link>
        </div>
    </div>
  )
}

export default Share