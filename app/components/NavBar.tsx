'use client'

import Link from 'next/link'
import Image from 'next/image'
import Mascot from '@public/mascot.svg'

const NavBar = () => {

  function handleFocus(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    const id = event.currentTarget.getAttribute('href')!;
    //alert(id?.valueOf());
    document.getElementById(id)!.scrollIntoView({ behavior: 'smooth' });
  }

  
  return (
    <nav className='flex flex-row justify-between py-10 px-[3rem] items-center'>
      
      <div>
        <Image src={Mascot} alt="" width={75} height={75} className='' />
      </div>

      <div className='flex font-semibold text-[26px] gap-[4rem] '>
          <Link href="AboutMe" className='h-full w-fit Navbtn' onClick={ handleFocus }>
            About Me
          </Link>

          <Link href="Project" className=' h-full w-fit Navbtn' onClick={ handleFocus }>
            Projects
          </Link>

          <Link href="ContactMe" className=' h-full w-fit Navbtn' onClick={ handleFocus }>
            Contact Me
          </Link>
      </div>
    </nav>
  )
}

export default NavBar;