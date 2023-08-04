import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section5 = () => {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div className=' flex flex-col items-center justify-center pt-20  px-10 md:px-20 lg:py-20 lg:px-40'>
        <h1 data-aos="zoom-in-right" className=' text-2xl font-extrabold text-center pb-4'>HOW WE BUILD</h1>
        <h1 data-aos="zoom-in-right" className=' text-xl font-thin text-center pb-6 '>WITH HYDRA VR?</h1>

        <p data-aos="zoom-in-left" className=' text-xs font-light text-center pb-10'>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>

         <img data-aos="zoom-in-left" src="/steps.png" alt="" />
    </div>
  )
}

export default Section5