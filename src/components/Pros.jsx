import React from 'react'
import hakka from './images/Hakka.jpg'
import check from './images/Check.svg'
function Pros() {
  return (
    <div className='grid grid-cols-2 mx-[160px] mt-16'>
        <div className='grid relative'>
            <div className='absolute w-[260px] h-[300px] bg-[#1E3E62] rounded-[12px]'></div>
            <div className='absolute w-[260px] h-[300px] bg-[#FF6500] rounded-[12px] ml-[90px] mt-[140px]'></div>
            <img className='absolute h-[445px] w-[355px] p-12 ' src={hakka} alt="yum" />

        </div>

        <div className='grid mt-4'>
            <h1 className='text-[48px] font-play font-semibold' >Authenticity, Tradition, and Passion on Every Plate!</h1>
            <h5 className='text-[24px] font-lato font-semibold py-2'>Boasting Indian Cuisine with:</h5>
            <h6 className='flex text-[20px] font-semibold font-lato'><span><img src={check} alt="check" /></span> Vibrant and Bold Flavors</h6>
            <h6 className='flex text-[20px] font-semibold font-lato'><span><img src={check} alt="check" /></span> Regional Diversity</h6>
            <h6 className='flex text-[20px] font-semibold font-lato'><span><img src={check} alt="check" /></span> Historical Legacy</h6>
            <h6 className='flex text-[20px] font-semibold font-lato'><span><img src={check} alt="check" /></span> Vegetarian Excellence</h6>
            <h6 className='flex text-[20px] font-semibold font-lato'><span><img src={check} alt="check" /></span> Nutrient-Rich Ingredients</h6>
            <h6 className='flex text-[20px] font-semibold font-lato'><span><img src={check} alt="check" /></span> Festive Dishes</h6>
            <button className='w-[138px] h-[50px] align-middle font-lato text-white font-bold rounded-[12px] text-[20px] bg-[#FF6500] mt-8'>Order Now</button>
        </div>
    </div>
  )
}

export default Pros