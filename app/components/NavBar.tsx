import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='flex w-full h-20 justify-center gap-x-28 text-xl font-semibold'>
      <Link href="/projects">
        <button className='border h-full w-20 Navbtn'>
          <span className='h-fit border'>Projects</span>
        </button>
      </Link>

      <Link href="/about">
        <button className='border h-full w-20 Navbtn'>
          <span>About</span>
        </button>
      </Link>

      <Link href="/constact">
        <button className='border h-full w-20 Navbtn'>
          <span>Contacts</span>
        </button>
      </Link>

    </div>
  )
}

export default NavBar;