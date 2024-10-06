import React from 'react'
import hero from './images/Hero.jpg'
import herobg from './images/Herobg.jpg'
function Hero() {
  return (
    <div>
        <div className='relative w-screen h-[710px] bg-[#0B192C] pt-[100px] overflow-hidden z-[-5]'>
            <img className='absolute opacity-5 ' src={herobg} alt="herobg" />
            <img className='absolute flex w-auto h-[450px] mt-12 ml-32 rounded-[12px]' src={hero} alt="hero" />
            <div className='flex flex-col text-white py-12 pr-40 text-left items-end'>
                <h1 className=' font-play text-[48px] font-semibold '>Crafting Culinary Tales <br /> with Every Bite! </h1>
                <h5 className=' font-lato text-[24px] pr-10 leading-8 mt-4'>We blend age-old recipes with contemporary <br />techniques to bring you an authentic yet <br />innovative dining experience.</h5>
                <button className='bg-[#FF6500] font-lato rounded-[12px] font-bold px-4 py-2 mr-[24.7rem] mt-12'>Order Now</button>
            </div>
        </div>
    </div>
    
  )
}

export default Hero