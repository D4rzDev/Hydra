import React from 'react'

const Section1 = () => {
  return (
    <div className=' flex flex-col items-center justify-center pt-24 pb-20 gap-6 px-10 md:flex-row-reverse md:px-20 lg:py-40 lg:px-40 lg:gap-20'>
        <img className=' h-[200px] z-10' src="/img1.png" alt="" />
        <img className=' absolute z-[-10]' src="/lines.png" alt="" />

        <div className=' flex flex-col items-center justify-center gap-6'>
          <h1 className=' text-center text-xl font-extrabold'><span className=' text-3xl text-[#8176AF] '>Dive</span> Into The Depths Of <span className=' text-3xl text-[#8176AF] '>Virtual Reality</span></h1>
          <p className=' text-xs font-light text-center lg:w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore 
nisl tincidunt eget. Lectus mauris eros in vitae .</p>
          <a className=' bg-[#8176AF] text-[#343045] text-sm font-bold px-8 py-4 rounded-full' href="">Build Your World</a>

        </div>
    </div>
  )
}

export default Section1