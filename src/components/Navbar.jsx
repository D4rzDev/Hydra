import React, {useState} from 'react'
import {RiMenu3Fill, RiCloseFill} from 'react-icons/ri'

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const toogleNav = () => {
    setNav(!nav);
  }
  return (
    <nav className=' relative'>
      
        <div className=' flex flex-row items-center justify-between px-6 py-4 md:px-12 lg:px-24'>
            <div className=' flex flex-row items-center justify-center gap-2'>
                <img className=' h-[30px]' src="/logo.png" alt="" />
                <h1 className=' text-[#8176AF] font-bold'>HYDRA</h1>
            </div>
            <div className=' md:hidden' onClick={toogleNav} >
              { !nav ? <RiMenu3Fill className='text-[#8176AF] ' size={25}/> : <RiCloseFill className='text-[#8176AF] ' size={25}/>}
            </div>
            <div className=' hidden flex-row items-center justify-between md:flex md:gap-20 lg:gap-44'>

                <ul className=' flex flex-row items-center justify-center gap-4'>
                  <li className=' text-sm font-extrabold text-[#8176AF]'>ABOUT</li>
                  <li className=' text-sm font-extrabold text-[#8176AF]'>SERVICES</li>
                  <li className=' text-sm font-extrabold text-[#8176AF]'>TECHNOLOGIES</li>
                  <li className=' text-sm font-extrabold  text-[#8176AF] lg:pr-10'>HOW TO</li>
                  <a className=' bg-[#8176AF] text-[#343045] text-xs font-bold px-4 py-2 text-center rounded-full pr-6' href="">JOIN HYDRA</a>
                </ul> 
            </div>
           
        </div>
        <ul className={ !nav ? 'hidden': ' absolute bg-[#302C42] w-screen h-screen z-20 text-center pt-20'}>
              <li className=' text-sm font-extrabold pb-4 text-[#8176AF]'>ABOUT</li>
              <li className=' text-sm font-extrabold pb-4 text-[#8176AF]'>SERVICES</li>
              <li className=' text-sm font-extrabold pb-4 text-[#8176AF]'>TECHNOLOGIES</li>
              <li className=' text-sm font-extrabold pb-20 text-[#8176AF]'>HOW TO</li>

              <div className=' flex flex-col items-center justify-center gap-6'>
                <a className=' bg-[#8176AF] text-[#343045] text-sm font-bold px-8 py-4 rounded-full' href="">JOIN HYDRA</a>
                <a className=' border-[#8176AF] border-2 text-[#8176AF] text-sm font-bold px-8 py-4 rounded-full' href="">CONTACT US</a>
              </div>
             

            </ul>
            
    </nav>
  )
}

export default Navbar