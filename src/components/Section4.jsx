import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section4 = () => {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    
    <div className=' flex flex-col items-center justify-center pt-20  px-10 md:px-20 lg:py-20 lg:px-40'>
        <div data-aos="zoom-in-right" className=' flex flex-col items-center justify-center px-6 py-4 pb-10'>
            <img className=' absolute z-[-10] w-[300px] ' src="/tech.png" alt="" />
            <h1 className=' text-sm font-extrabold pb-4'>TECHNOLOGIES & HARDWARE</h1>
            <h1 className=' text-lg font-thin'>USED BY HYDRA VR.</h1>

        </div>
        <img data-aos="zoom-in-left" src="/tech1.png" alt="" />

    </div>
  )
}

export default Section4