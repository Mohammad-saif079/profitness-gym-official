import React from 'react'
import Logo from '../components/Logo'

const Gymhome = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url('/hero.webp')` }} className="hero relative bg-center flex justify-center items-center bg-cover h-[100svh]  ">
        <div className=" absolute top-0 w-full navbar bg-[#0B0B0F] flex justify-between items-center p-4 ">
          <div className="logo flex justify-center gap-1 items-center ">
            <Logo size={60} />
            <h1 className='text-[#b22222] font-gym font-bold text-3xl' >PROFITNESS</h1>

          </div>
          <div className="nav text-white text-xl flex justify-center items-center gap-15 ">
            <div>Home</div>
            <div>Services</div>
            <div>About Us</div>
            <div>Contact Us</div>
          </div>
          <button className='rounded-md font-gym font-medium bg-[#B22222] text-white py-2 px-5 text-xl ' >JOIN NOW</button>

        </div>

        <div className="cta gap-2 flex flex-col justify-center items-center  ">
          <div className=' text-6xl font-gym font-bold flex flex-col justify-center items-center '>
            <div className='  text-white' >TRANSFORM</div>
            <div className='  text-[#15ff00]' >BODY AND MIND</div>
            <div className='  text-[#ffffff]' >AT PROFITNESS</div>
          </div>
          <p className=" text-center w-[60%] text-xl text-white">With ten years of experience in the health and wellness
            industry, our fitness solution continues to be a top option throughout India</p>

        </div>

      </div>


    </div>
  )
}

export default Gymhome