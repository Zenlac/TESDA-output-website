import React from 'react'
import elmo from './images/elmo.gif'
const Footer = () => {
  return (
    <div>
        <footer className='w-screen h-[350px] bg-[#0B192C] mt-[50px] justify-center grid grid-cols-4 px-[160px] py-12'>
            <div className='grid'>
                <h3 className='font-play font-bold text-[32px] text-[#FF6500]'>Sadye's Restaurant</h3>
                <h5 className='font-lato text-[24px] text-white'>About Sadye's</h5>
                <h5 className='font-lato text-[24px] text-white'>Help Center</h5>
                <h5 className='font-lato text-[24px] text-white'>Contact us</h5>
            </div>
            <div className='grid '>
                <h3 className='font-play font-bold text-[32px] text-[#0B192C]'>I love you 0w0</h3>
                <h5 className='font-lato text-[24px] text-white'>Order Now</h5>
                <h5 className='font-lato text-[24px] text-white'>Tag us</h5>
                <h5 className='font-lato text-[24px] text-white'>Blog</h5>
            </div>
            <div className='grid'>
                <h3 className='font-play font-bold text-[32px] text-[#FF6500]'>Socials</h3>
                <h5 className='font-lato text-[24px] text-white'>Instagram</h5>
                <h5 className='font-lato text-[24px] text-white'>Facebook</h5>
                <h5 className='font-lato text-[24px] text-white'>Twitter/X</h5>
            </div>
            <div className='grid pt-[100px]'>
                <img src={elmo} alt="suffering" />
            </div>
        </footer>
        
    </div>
  )
}

export default Footer