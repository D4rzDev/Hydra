import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section2 = () => {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div className=' flex flex-col items-center justify-center pt-20 pb-20 gap-6  px-10 md:flex-row md:px-20 lg:py-20 lg:px-40 lg:gap-20'>
        
        <img data-aos="zoom-in-right" className=' h-[250px] pb-4' src="/img2.png" alt="" />
        <div data-aos="zoom-in-left" className=' flex flex-col items-center justify-center'>
          <h1 className=' text-2xl font-extrabold text-center pb-4'>INTRODUCTION</h1>
          <h1 className=' text-xl font-thin text-center pb-10 '>TO HYDRA VR</h1>
          <p className=' text-xs font-thin text-center pb-10'>Eget mi proin sed libero enim sed faucibus turpis. Nisl 
  rhoncus mattis rhoncus urna neque viverra justo. Vivamus 
  at augue eget arcu dictum. Ultrices gravida dictum fusce 
  ut placerat orci. Aenean et tortor at risus viverra adipisci
  ng at in. Mattis aliquam faucibus purus in massa. Est 
  placerat in egestas erat imperdiet sed. Consequat sem
  per viverra nam libero justo laoreet sit amet. Aliquam 
  etiam erat velit scelerisque in dictum non consectetur 
  a. Laoreet sit amet cursus sit amet. Vel eros donec ac 
  odio tempor orci dapibus. Sem nulla pharetra diam sit 
  amet nisl suscipit adipiscing bibendum. Leo a diam 
  sollicitudin tempor.</p>

          <a className=' bg-[#8176AF] text-[#343045] text-sm font-bold px-8 py-4 rounded-full' href="">Let's Get in Touch</a>

        </div>

    </div>
  )
}

export default Section2