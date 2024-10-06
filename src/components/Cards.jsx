import React from 'react'
import card1 from './images/Paneer.jpg'
import card2 from './images/Aloo.jpg'
import card3 from './images/Pakora.jpeg'
import rating from './images/Rating.png'
import promo1 from './images/Promo1.png'
import promo2 from './images/Promo2.png'
import promo3 from './images/Promo3.png'

function Cards() {
  return (
    <div>
        <div className='flex mt-[-80px] justify-between px-[160px] text-white'>
            <div className='flex flex-col items-center w-[400px] h-[470px] bg-[#FF6500] bg-opacity-75 rounded-[20px] '>
                <img className=' h-[275px] w-[280px] rounded-[12px] mt-12 mb-4' src={card1} alt="paneer tikka" />
                <h4 className='text-[28px] font-lato font-bold'>Paneer Tikka</h4>
                <img className=' h-auto w-[210px] mt-8' src={rating} alt="rating"/>
            </div>
            <div className='flex flex-col items-center w-[400px] h-[470px] bg-[#FF6500] bg-opacity-75 rounded-[20px] '>
                <img className=' h-[275px] w-[280px] rounded-[12px] mt-12 mb-4' src={card2} alt="paneer tikka" />
                <h4 className='text-[28px] font-lato font-bold'>Aloo Tikka</h4>
                <img className=' h-auto w-[210px] mt-8' src={rating} alt="rating"/>
            </div>
            <div className='flex flex-col items-center w-[400px] h-[470px] bg-[#FF6500] bg-opacity-75 rounded-[20px] '>
                <img className=' h-[275px] w-[280px] rounded-[12px] mt-12 mb-4' src={card3} alt="paneer tikka" />
                <h4 className='text-[28px] font-lato font-bold'>Vegetable Pakoras</h4>
                <img className=' h-auto w-[210px] mt-8' src={rating} alt="rating"/>
            </div>

        </div >

        <div className='flex mt-20 justify-between px-[160px] text-white'>
            <div className='relative w-[400px] h-[250px] text-left'>
                <img className='absolute' src={promo1} alt="promotion" />
                <div className='absolute bg-[#1E3E62] bg-opacity-35 w-[400px] h-[250px] px-8 pt-12 rounded-[24px]'>
                    <h4 className='font-bold font-lato text-[28px] leading-8 '>Enjoy the convenience of cashless payment</h4>
                    <h6 className='font-lato text-[20px] mt-2'>Settle your bill quickly and safely with contactless payment.</h6>
                </div>
            </div>
            <div className='relative w-[400px] h-[250px] text-left'>
                <img className='absolute' src={promo2} alt="promotion" />
                <div className='absolute bg-[#1E3E62] bg-opacity-35 w-[400px] h-[250px] px-8 pt-12 rounded-[24px]'>
                    <h4 className='font-bold font-lato text-[28px] leading-8 '>Enjoy Sadye's Everywhere!</h4>
                    <h6 className='font-lato text-[20px] mt-2'>—whether you're at home, at work, or out with friends.</h6>
                </div>
            </div>
            <div className='relative w-[400px] h-[250px] text-left'>
                <img className='absolute' src={promo3} alt="promotion" />
                <div className='absolute bg-[#1E3E62] bg-opacity-35 w-[400px] h-[250px] px-8 pt-12 rounded-[24px]'>
                    <h4 className='font-bold font-lato text-[28px] leading-8 '>Experience Sadye’s Fast Delivery!</h4>
                    <h6 className='font-lato text-[20px] mt-2'>No delays, no hassle, just great food when you need it most.</h6>
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default Cards