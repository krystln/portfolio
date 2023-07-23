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
            <div className="w-[4rem] h-[4rem] bg-black rounded-full">Image</div>
            <Link href="LinkedIn"><Image src={ LinkedIn } alt="" width={50} height={50}/></Link>
            <Link href="Twitter"><Image src={ Twitter } alt="" width={35} height={35}/></Link>
            <Link href="mailto:contact@akshitgoyal.dev"><Image src={ Mail } alt="" width={35} height={35}/></Link>
        </div>
    </div>
  )
}

export default Share