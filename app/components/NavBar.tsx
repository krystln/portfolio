"use client"

import "../styles/components.css"

import Link from "next/link"
import Image from "next/image"
import Mascot from "@public/mascot.svg"
import { use, useState } from "react"

const NavBar = () => {

  function handleFocus(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    const id = event.currentTarget.getAttribute("href")!;
    //alert(id?.valueOf());
    document.getElementById(id)!.scrollIntoView({ behavior: "smooth" });
  }



  return (
    <nav className="Nav flex flex-row justify-between py-10 px-[3rem] items-center">

      <div>
        <Image src={Mascot} alt="" width={75} height={75} className="Mascot" />
      </div>

      <div className="NavBar flex font-semibold text-[26px] gap-[4rem] ">
        <Link href="AboutMe" className="Navbtn" onClick={handleFocus}>
          About Me
        </Link>

        <Link href="Project" className="Navbtn" onClick={handleFocus}>
          Projects
        </Link>

        <Link href="ContactMe" className="Navbtn" onClick={handleFocus}>
          Contact Me
        </Link>
      </div>

    </nav>
  )
}

export default NavBar;