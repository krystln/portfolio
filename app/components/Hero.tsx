import React from 'react'
import Share from '@components/ui/Share'

const Hero = () => {
  return (
    <div className='w-100% h-fit mx-[4rem] my-[2rem] p-[4rem] gap-0'>
      <h1 className='text-[128px] font-light h-[8rem] w-fit p-0 m-0'>Akshit</h1>
      <h1 className='text-[128px] font-extrabold h-[10rem] w-fit m-0 p-0'>GOYAL</h1>
      <p className='text-[32px] pl-1'>Front-End Developer</p>
      <Share></Share>
    </div>
  )
}

export default Hero