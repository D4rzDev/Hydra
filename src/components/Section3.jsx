import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Section3 = () => {
    useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div className=' flex flex-col items-center justify-center pt-20  px-10 md:px-20 lg:py-20 lg:px-40'>
      <div data-aos="zoom-in-right" className=' flex flex-col items-center justify-center md:flex-row md:gap-32 pb-10 '>
        <div className=' flex flex-col justify-items-center'>
           <h1 className=' text-2xl font-extrabold text-center pb-4 w-[150px]'>WHY BUILD</h1>
          <h1 className=' text-xl font-thin text-center pb-6 w-[150px]'>WITH HYDRA ?</h1>
        </div>
        <p className=' text-xs font-light text-center'>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>

      </div>

      <div data-aos="zoom-in-left" className=' flex flex-col items-center justify-center md:flex-row md:gap-4'>
        <div className=' flex flex-col items-center justify-center bg-[#1A1925] px-4 py-6 rounded-3xl mb-4'>
            <img className=' pb-4' src="/build1.png" alt="" />
            <h1 className=' text-2xl font-extrabold text-center pb-4'>SIMULATION</h1>
            <p className=' text-center text-xs pb-10'>Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.</p>
            <a className=' bg-[#8176AF] text-[#343045] text-sm font-bold px-4 py-2 rounded-full' href="">TRY IT NOW</a>
        </div>

        <div className=' flex flex-col items-center justify-center bg-[#1A1925] px-4 py-6 rounded-3xl mb-4'>
            <img className=' pb-4' src="/build2.png" alt="" />
            <h1 className=' text-2xl font-extrabold text-center pb-4'>EDUCATION</h1>
            <p className=' text-center text-xs pb-10'>Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.</p>
            <a className=' bg-[#8176AF] text-[#343045] text-sm font-bold px-4 py-2 rounded-full' href="">TRY IT NOW</a>
        </div>

        <div className=' flex flex-col items-center justify-center bg-[#1A1925] px-4 py-6 rounded-3xl mb-4'>
            <img className=' pb-4' src="/build3.png" alt="" />
            <h1 className=' text-2xl font-extrabold text-center pb-4'>OUTDOOR</h1>
            <p className=' text-center text-xs pb-10'>Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.</p>
            <a className=' bg-[#8176AF] text-[#343045] text-sm font-bold px-4 py-2 rounded-full' href="">TRY IT NOW</a>
        </div>

      </div>

    </div>
  )
}

export default Section3