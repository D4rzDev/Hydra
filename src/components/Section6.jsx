import React from 'react'

const Section6 = () => {
  return (
    <div className=' flex flex-col items-center justify-center pt-20  px-10 md:px-20 lg:py-20 lg:px-40 lg:gap-20'>
        <img className=' absolute z-[-10]' src="/lines2.png" alt="" />
        <img className='  h-[200px] pb-4' src="/logo.png" alt="" />
        <div className=' flex flex-col items-center justify-center'>
            <h1 className=' text-[16px] text-center font-extrabold pb-6'>SOCIALIZE WITH HYDRA</h1>
            <img className=' pb-10' src="/social.png" alt="" />
            <a className=' bg-[#8176AF] text-[#343045] text-sm font-bold px-8 py-4 rounded-full' href="">BUILD YOUR WORLD</a>

            <p className=' text-xs font-light text-center pt-20 pb-10'>2023 © HYDRA LANDING PAGE 
BY ZINE. E. FALOUTI
ALL RIGHTS RESERVED </p>
        </div>

    </div>
  )
}

export default Section6